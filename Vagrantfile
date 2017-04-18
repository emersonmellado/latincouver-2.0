# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
REQUIRED_PLUGINS        = %w(vagrant-vbguest vagrant-librarian-chef-nochef)

plugins_to_install = REQUIRED_PLUGINS.select { |plugin| not Vagrant.has_plugin? plugin }
if not plugins_to_install.empty?
  puts "Installing required plugins: #{plugins_to_install.join(' ')}"
  if system "vagrant plugin install #{plugins_to_install.join(' ')}"
    exec "vagrant #{ARGV.join(' ')}"
  else
    abort "Installation of one or more plugins has failed. Aborting. Please read the Bike Index README."
  end
end

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  #config.vm.box = "ubuntu/xenial64"
  #config.vm.box = "v0rtex/xenial64"
  config.vm.box = "ubuntu/trusty64"

  # config.vm.provision :shell, path: "bootstrap.sh"

  # Configure the virtual machine to use 1.5GB of RAM
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1536"]
    #vb.customize ["modifyvm", :id, "--rtcuseutc", "on"]
    vb.gui = true
    vb.name = "latincouver-2.0"
  end

  config.ssh.username = 'vagrant'
  config.ssh.password = 'vagrant'
  config.ssh.insert_key = false
    # config.ssh.insert_key = true
    # config.ssh.username = 'docker'
    # config.ssh.password = 'tcuser'
  #config.vm.network :private_network, ip: '192.168.0.200'
  # config.vm.network "public_network", ip: "192.168.0.200"
  # config.vm.network "private_network", type: "dhcp"

  # Forward the Rails server default port to the host
  config.vm.network :forwarded_port, guest: 3000, host: 3000, host_ip: "192.168.0.103", id: 'ssh'

  config.vm.boot_timeout = 300

  # config.vm.provision :shell, inline: "sudo /sbin/ifdown eth1 && sudo /sbin/ifup eth1"

  # Use Chef Solo to provision our virtual machine
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["cookbooks", "site-cookbooks"]

    chef.add_recipe "apt"
    chef.add_recipe "build-essential"
    chef.add_recipe "system::install_packages"
    chef.add_recipe "ruby_build"
    chef.add_recipe "ruby_rbenv::user"
    chef.add_recipe "ruby_rbenv::user_install"
    chef.add_recipe "vim"
    chef.add_recipe "postgresql::server"
    chef.add_recipe "postgresql::client"

    chef.json = {
      rbenv: {
        user_installs: [{
          user: 'ubuntu',
          rubies: ["2.4.0"],
          global: "2.4.0",
          gems: {
          "2.4.0" => [{ name: "bundler" }]
        }
        }]
      },
      system: {
        packages: {
          install: ["redis-server", "nodejs", "libpq-dev"]
        }
      },
      postgresql: {
        :pg_hba => [{
          :comment => "# Add vagrant role",
          :type => 'local', :db => 'all', :user => 'ubuntu', :addr => nil, :method => 'trust'
        }],
        :users => [{
          "username": "ubuntu",
          "password": "",
          "superuser": true,
          "replication": false,
          "createdb": true,
          "createrole": false,
          "inherit": false,
          "login": true
        }]
      }
    }
  end
end