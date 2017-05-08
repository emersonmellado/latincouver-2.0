#!/bin/bash

# if [ ! -f /home/$USER_NAME/.rbenv ]; then
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
    as_user "rbenv global $1"
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
  as_user "/home/$USER_NAME/.rbenv/bin/rbenv global $DEFAULT_RUBY"

  sudo apt-get install libpq-dev

  gem install rails -v 5.0.2  

  ###############################################################################
  # EDIT HERE!
  # Install any Rubies (other than $DEFAULT_RUBY) required for testing, etc.
  ###############################################################################
  # e.g. `install_ruby 1.9.3`

#   su -c "touch /home/$USER_NAME/provision/rubi" vagrant

# fi

# if [ ! -f /home/$USER_NAME/provision/nodejs ]; then  

#   curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
#   sudo apt-get install -y nodejs

#   su -c "touch /home/$USER_NAME/provision/nodejs" vagrant

# fi

if [ ! -f /home/$USER_NAME/provision/rubi ]; then  
  # https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-16-04
  sudo apt-get install git
  
  cd
  git clone https://github.com/rbenv/rbenv.git ~/.rbenv
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
  echo 'eval "$(rbenv init -)"' >> ~/.bashrc
  exec $SHELL

  git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
  echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
  exec $SHELL

  rbenv install 2.4.1
  rbenv global 2.4.1
  #ruby -v
  gem install bundler

  gem install rails -v 5.0.2

  sudo apt-get install libpq-dev

  su -c "touch /home/$USER_NAME/provision/rubi" vagrant

fi

# if [ ! -f /home/$USER_NAME/provision/rails ]; then

#   sudo apt-get install git-all
#   sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
#   git clone https://github.com/rbenv/rbenv.git ~/.rbenv
#   echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
#   echo 'eval "$(rbenv init -)"' >> ~/.bashrc
#   source ~/.bashrc

#   su -c "touch /home/$USER_NAME/provision/rails" vagrant

# fi