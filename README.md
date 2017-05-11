# Latincouver 2.0

This is the repo for the dynamic version of the Latincouver app.

In this version we are going to create a few things and try to decouple the api in a way that it can be integrated back with the ERP they have or it can be used as a single project to manage the mobile app data.

TODO list:
1. Rails api
  - Deploy to heroku-api:
  git subtree push --prefix lc_v2-api heroku-api master
  git push heroku-api `git subtree split --prefix lc_v2-api master`:master --force

2. UI for json management
  - Deploy to heroku-admin
  
3. Ionic 2.0
  - Deploy to heroku-mobile

# Vagrant to run Rails (Just in case you want)

[Full case](https://gorails.com/guides/using-vagrant-for-rails-development)

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install [Vagrant](https://www.vagrantup.com/downloads.html)
3. Install vagrant plugins in the terminal:
..* >/ vagrant plugin install vagrant-vbguest
..* >/ vagrant plugin install vagrant-librarian-chef-nochef
4. 