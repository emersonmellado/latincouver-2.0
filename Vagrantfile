# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
REQUIRED_PLUGINS        = %w(vagrant-vbguest)

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
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/trusty64"

  # Configure the virtual machine to use 1.5GB of RAM
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1536"]
    #vb.customize ["modifyvm", :id, "--hwvirtex", "on"]
    #vb.gui = true
    vb.name = "latincouver-2.0.7"
  end

  #config.vm.provision "shell", path: "provision.sh"
  # config.vm.provision "shell", path: "postgres.sh"

  config.ssh.username = 'vagrant'
  config.ssh.password = 'vagrant'
  config.ssh.insert_key = false
  #config.ssh.host = '192.168.0.19'
  
  #config.vm.network "private_network", ip: '192.168.10.200'
  # Forward the Rails server default port to the host
  #config.vm.network :forwarded_port, guest: 3000, host: 3000, host_ip: "127.0.0.1", id: 'ssh'
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true # winrm
  #, host_ip: "192.168.0.103", id: 'ssh'

  #config.vm.network :forwarded_port, guest: 5432, host: 5433, host_ip: "127.0.0.1", id: 'ssh'

  #config.vm.boot_timeout = 300

end

Vagrant::Config.run do |config|
  #config.vm.forward_port 3000, 3000, host_ip: "127.0.0.1", auto_correct: true
  #config.vm.forward_port 3000, 7000, host_ip: "192.168.0.103"
  #config.vm.forward_port 5432, 15432
  #config.vm.network :forwarded_port, guest: 3000, host: 7000
  #, host_ip: "127.0.0.1", id: 'ssh'
end


# # -*- mode: ruby -*-
# # vi: set ft=ruby :

# $script = <<SCRIPT
# echo I am provisioning...
# date > /etc/vagrant_provisioned_at
# SCRIPT

# Vagrant.configure("2") do |config|
#   config.vm.provision "shell", inline: $script
# end

# Vagrant::Config.run do |config|
#   config.vm.box = "ubuntu/trusty64"
#   config.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/trusty64"
#   config.vm.host_name = "postgresql" 

#   config.vm.share_folder "bootstrap", "/mnt/bootstrap", ".", :create => true
#   config.vm.provision :shell, :path => "Vagrant-setup/bootstrap.sh"
  
#   # PostgreSQL Server port forwarding
#   config.vm.forward_port 5432, 15432
# end