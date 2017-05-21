#!/bin/bash

echo "Installing Ruby and Rails"
  ###############################################################################
  # Define user settings for rbenv installation. Defaults are normally fine.
  ###############################################################################
  USER_NAME=${USER_NAME-vagrant}
  USER_HOME=${USER_HOME-/home/$USER_NAME}
  DEFAULT_RUBY=${DEFAULT_RUBY-'2.4.1'}

  ###############################################################################
  # Functions
  ###############################################################################
  # Most of the time we can get by with this DRY wrapper for sudo commands.
  as_user() {
    echo "$USER_NAME:~$ > ${*}"
    su -l $USER_NAME -c "$*"
  }

  # Install the requested version of Ruby, with Bundler and Rails 5
  install_ruby() {
    as_user "rbenv install -s $1"
    as_user "RBENV_VERSION=$1 gem install bundler"
  }

  ###############################################################################
  # Base System
  ###############################################################################
  apt-get -y update
  apt-get -yfV dist-upgrade

  ###############################################################################
  # rbenv & ruby-build, and Rubies
  # From https://github.com/sstephenson/rbenv
  # and https://github.com/sstephenson/ruby-build
  ###############################################################################

  # Install dependencies.
  apt-get install -yfV         \
    build-essential            \
    curl                       \
    git-core                   \
    libcurl4-openssl-dev       \
    libreadline-dev            \
    libsqlite3-dev             \
    libssl-dev                 \
    libxml2-dev                \
    libxslt1-dev               \
    libyaml-dev                \
    python-software-properties \
    sqlite3                    \
    zlib1g-dev                 \
    libffi-dev                 \

  # Remove any leftovers
  apt-get -y autoremove

  # Install rbenv and ruby-build.
  as_user "git clone https://github.com/sstephenson/rbenv.git $USER_HOME/.rbenv"
  as_user "git clone https://github.com/sstephenson/ruby-build.git $USER_HOME/.rbenv/plugins/ruby-build"

  # Setup bash to use rbenv for $USER_NAME.
  truncate -s 0 $USER_HOME/.bashrc
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> $USER_HOME/.bashrc
  echo 'eval "$(rbenv init -)"'               >> $USER_HOME/.bashrc
  echo 'cd /vagrant'                          >> $USER_HOME/.bashrc
  echo 'gem: --no-document'                   >> $USER_HOME/.gemrc

  # Install Ruby for $USER_NAME.
  install_ruby $DEFAULT_RUBY

  sudo apt-get install libpq-dev

  gem install rails -v 5.0.2

  as_user "/home/$USER_NAME/.rbenv/bin/rbenv global $DEFAULT_RUBY"
echo "==================================================================="
echo "==================================================================="
echo "==================================================================="
echo "Installing Postgresql"

# Edit the following to change the name of the database user that will be created:
APP_DB_USER=postgres
APP_DB_PASS=postgres

# Edit the following to change the name of the database that is created (defaults to the user name)
APP_DB_NAME=$APP_DB_USER

# Edit the following to change the version of PostgreSQL that is installed
PG_VERSION=9.6

###########################################################
# Changes below this line are probably not necessary
###########################################################
print_db_usage () {
  echo "Your PostgreSQL database has been setup and can be accessed on your local machine on the forwarded port (default: 15432)"
  echo "  Host: localhost"
  echo "  Port: 15432"
  echo "  Database: $APP_DB_NAME"
  echo "  Username: $APP_DB_USER"
  echo "  Password: $APP_DB_PASS"
  echo ""
  echo "Admin access to postgres user via VM:"
  echo "  vagrant ssh"
  echo "  sudo su - postgres"
  echo ""
  echo "psql access to app database user via VM:"
  echo "  vagrant ssh"
  echo "  sudo su - postgres"
  echo "  PGUSER=$APP_DB_USER PGPASSWORD=$APP_DB_PASS psql -h localhost $APP_DB_NAME"
  echo ""
  echo "Env variable for application development:"
  echo "  DATABASE_URL=postgresql://$APP_DB_USER:$APP_DB_PASS@localhost:15432/$APP_DB_NAME"
  echo ""
  echo "Local command to access the database via psql:"
  echo "  PGUSER=$APP_DB_USER PGPASSWORD=$APP_DB_PASS psql -h localhost -p 15432 $APP_DB_NAME"
}

export DEBIAN_FRONTEND=noninteractive

PROVISIONED_ON=/etc/vm_provision_on_timestamp
if [ -f "$PROVISIONED_ON" ]
then
  echo "VM was already provisioned at: $(cat $PROVISIONED_ON)"
  echo "To run system updates manually login via 'vagrant ssh' and run 'apt-get update && apt-get upgrade'"
  echo ""
  print_db_usage
  exit
fi

PG_REPO_APT_SOURCE=/etc/apt/sources.list.d/pgdg.list
if [ ! -f "$PG_REPO_APT_SOURCE" ]
then
  # Add PG apt repo:
  echo "deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main" > "$PG_REPO_APT_SOURCE"

  # Add PGDG repo key:
  wget --quiet -O - https://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | apt-key add -
fi

# Update package list and upgrade all packages
apt-get update
apt-get -y upgrade

apt-get -y install "postgresql-$PG_VERSION" "postgresql-contrib-$PG_VERSION"

PG_CONF="/etc/postgresql/$PG_VERSION/main/postgresql.conf"
PG_HBA="/etc/postgresql/$PG_VERSION/main/pg_hba.conf"
PG_DIR="/var/lib/postgresql/$PG_VERSION/main"

# Edit postgresql.conf to change listen address to '*':
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/" "$PG_CONF"

# Append to pg_hba.conf to add password auth:
echo "host    all             all             all                     md5" >> "$PG_HBA"

# Explicitly set default client_encoding
echo "client_encoding = utf8" >> "$PG_CONF"

# Restart so that all new config is loaded:
service postgresql restart

cat << EOF | su - postgres -c psql
-- Create the database user:
CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';

-- Create the database:
CREATE DATABASE $APP_DB_NAME WITH OWNER=$APP_DB_USER
                                  LC_COLLATE='en_US.utf8'
                                  LC_CTYPE='en_US.utf8'
                                  ENCODING='UTF8'
                                  TEMPLATE=template0;
EOF

# Tag the provision time:
date > "$PROVISIONED_ON"

echo "Successfully created PostgreSQL dev virtual machine."
echo ""
print_db_usage