# Latincouver 2.0

This is the repo for the dynamic version of the Latincouver app.

In this version we are going to create a few things and try to decouple the api in a way that it can be integrated back with the ERP they have or it can be used as a single project to manage the mobile app data.

1. Api (Rails 5 api)
  Endpoints:

  http://latincouverapi.heroku.com/css-styles
  http://latincouverapi.heroku.com/events  
  http://latincouverapi.heroku.com/plazas
  http://latincouverapi.heroku.com/schedules
  http://latincouverapi.heroku.com/trades
  http://latincouverapi.heroku.com/trade-groups
  http://latincouverapi.heroku.com/trade-link
  http://latincouverapi.heroku.com/trade-product
  http://latincouverapi.heroku.com/trade-type

  - Deploy to heroku-api:
  heroku git:remote -a latincouverapi
  git remote rename heroku heroku-api
  git subtree push --prefix lc_v2-api heroku-api master  
  git push heroku-api `git subtree split --prefix lc_v2-api master`:master --force

2. ManagementApp (angular 1.6 UI for json management)
  - Deploy to heroku-admin

3. MobileApp (Ionic 2.0)
  - Deploy to heroku-mobile

# Vagrant to run Rails (Just in case you need)

[Full case](https://gorails.com/guides/using-vagrant-for-rails-development)

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install [Vagrant](https://www.vagrantup.com/downloads.html)
3. Install vagrant plugins in the terminal:
..* >/ vagrant plugin install vagrant-vbguest
..* >/ vagrant plugin install vagrant-librarian-chef-nochef