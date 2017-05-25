# README

To create a new model and controller:

rails generate scaffold Configuration main_title:string css_style_id:integer


rails generate migration AddOrderToEvent order:integer
rails generate migration AddShortDescriptionToEvent short_description:string

#Creating a new field
  - Don't forget to change the controller and serializer


  Setting.first.update(css_style_id: 1)
Setting.update_all(css_style_id: 1)
