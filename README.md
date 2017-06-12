# Latincouver 2.0

This is the repo for the dynamic version of the Latincouver app.

In this version we are going to create a few things and try to decouple the api in a way that it can be integrated back with the ERP they have or it can be used as a single project to manage the mobile app data.

## Api (Rails 5 api)
  All endpoints has the methods: `GET` | `POST` | `DELETE` | `PUT`

  * http://latincouverapi.heroku.com/trade-type

    `POST`
    ```{
      "attributes":{
        "name": "Food",
        "active": 1
      }
    }
    ```

    Types are: Food, Products, Non-Profit

  * http://latincouverapi.heroku.com/trade-groups
    Vendors, Business, Sponsors, Artists

  * http://latincouverapi.heroku.com/css-styles
    red-flat, blue-flat, yellow-flat, green-flat

  * http://latincouverapi.heroku.com/events

  * http://latincouverapi.heroku.com/plazas
    `POST`
    ```{
      "attributes":{
        "name": "Main Stage",
        "description":"<p>Saturday July 9th marks the beginning of Carnaval Del Sol! We are very proud to be able to host this event for the people we love. This is the most anticipated event yet and we hope it meets your expectations! Indulge in various genres and styles of music as we bring the Latin Community back into Vancouver!</p><p>Different artists and singers will be performing at different times, so be sure to check out the lists of bands we have coming and attend the Main Stage at the allotted times your favourite bands are performing.</p>",
        "image_url":"http://latincouver.er7.ca/1.0/assets/images/plazas/main-stage.jpg",
        "longitude":"",
        "latitude":"",
        "user_id":"1",
        "css_style_id":"2",
        "event_id":"1",
        "active":1
      }
    }
    ```

  http://latincouverapi.heroku.com/schedules
  http://latincouverapi.heroku.com/trades
  http://latincouverapi.heroku.com/trade-link
  http://latincouverapi.heroku.com/trade-product


  - Deploy to heroku-api:
  heroku git:remote -a latincouverapi
  git remote rename heroku heroku-api
  git subtree push --prefix api heroku-api master
  git push heroku-api `git subtree split --prefix api master`:master --force
  - Reset db local
  rake db:schema:dump
  rake db:schema:load

  rails db:migrate:reset dev:setup

  - Reset db Heroku
  heroku pg:reset DATABASE_URL --confirm latincouverapi
  heroku pg:reset DATABASE --confirm latincouverapi

  //Force reload of the entire schema
  heroku run rake db:schema:load DISABLE_DATABASE_ENVIRONMENT_CHECK=1

  heroku run rake db:migrate
  heroku run rake db:seed

  heroku restart

## ManagementApp (angular 1.6 UI for json management)
  - How to create an event:
  The first corelation between the tables are held basicaly by the relation tables (css-styles, trade-groups, trade-type, trade-product, trade-link, plazas s schedules)
  The mains table is the event, it can handle multiple events in the same view (that is required because we may have more than one event )

  http://latincouver.er7.ca/admin/
  user: lc_admin
  pass: ^TQV]3[gLkQu8GHQ

## MobileApp (Ionic 2.0)
  - Deploy to heroku-mobile

# Vagrant to run Rails (Just in case you need)

[Full case](https://gorails.com/guides/using-vagrant-for-rails-development)

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install [Vagrant](https://www.vagrantup.com/downloads.html)
3. Install vagrant plugins in the terminal:
..* >/ vagrant plugin install vagrant-vbguest
..* >/ vagrant plugin install vagrant-librarian-chef-nochef
