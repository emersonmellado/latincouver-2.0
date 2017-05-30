if TradeType.count == 0
  puts "Creating production data for trade_type"
  TradeType.create!([{name: 'Food'},{name: 'Products'},{name: 'Non-Profit'}])
end

if TradeGroup.count == 0
  puts "Creating production data for trade_group"
  TradeGroup.create!([{name: 'Vendors'},{name: 'Business'},{name: 'Sponsors'}, {name: 'Artists'}])
end

if CssStyle.count == 0
  puts "Creating production data for css_style"
  css_style = CssStyle.create!([{name: 'red'},{name: 'yellow'},{name: 'blue'},{name: 'green'},{name: 'red-flat'},{name: 'yellow-flat'},{name: 'blue-flat'},{name: 'green-flat'}])
end

if Setting.count == 0
  puts "Creating production data for settings"
  Setting.create!([{main_title: 'Upcoming Events yeah!', css_style:CssStyle.find_by(name: 'green-flat')}])
end

if User.count == 0
  puts "Creating admin user"
  users = User.create!([{name: 'admin', password:'admin@2017', nickname:'admin', image:'admin', email: 'admin@email.com', created_at:'2017-05-17 01:27:00', updated_at:'2017-05-17 01:27:00'}])
end

#if Rails.env != "production"
if Event.count == 0
 puts "Creating test event"
 event = Event.create!([{
    name: 'Carnaval del Sol', 
    image_url:'http://latincouver.er7.ca/1.0/assets/images/event/carnaval_delsol.jpg',
    short_description: 'from 09/jul to 12/jul', 
    description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
    css_style:CssStyle.find_by(name: 'green'),
    active: 1,
    order:1
  },{
    name: 'Latin Innovation Hub', 
    image_url:'http://latincouver.er7.ca/1.0/assets/images/event/latin_events.jpg',
    short_description: '', 
    description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
    css_style:CssStyle.find_by(name: 'blue'),
    active: 1,
    order:2    
  },{
    name: 'Exploplaza Latina', 
    image_url:'http://latincouver.er7.ca/1.0/assets/images/event/expoplaza_latina.jpg',
    short_description: 'September 14th <br> <b>Vancouver</b>', 
    description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
    css_style:CssStyle.find_by(name: 'red'),
    active: 1,
    order:3
  },{
    name: 'Latin Live Events', 
    image_url:'http://latincouver.er7.ca/1.0/assets/images/event/latin_america.jpg',
    short_description: '', 
    description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
    css_style:CssStyle.find_by(name: 'yellow'),
    active: 1,
    order:4
  }
  ])
end

if Plaza.count == 0
  puts "Creating production data for plaza"
  Plaza.create!([{name: 'Main Stage',"description":"<p>Saturday July 9th marks the beginning of Carnaval Del Sol! We are very proud to be able to host this event for the people we love. This is the most anticipated event yet and we hope it meets your expectations! Indulge in various genres and styles of music as we bring the Latin Community back into Vancouver!</p><p>Different artists and singers will be performing at different times, so be sure to check out the lists of bands we have coming and attend the Main Stage at the allotted times your favourite bands are performing.</p>",
    "image_url":"http://latincouver.er7.ca/1.0/assets/images/plazas/main-stage.jpg",
    "longitude":"",
    "latitude":"",
    css_style:CssStyle.find_by(name: 'red-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    "active":1}])
end

# if Trade.count == 0
#   puts "Creating production data for plaza"
#   Trade.create!([{name: 'Main Stage',"description":"<p>Saturday July 9th marks the beginning of Carnaval Del Sol! We are very proud to be able to host this event for the people we love. This is the most anticipated event yet and we hope it meets your expectations! Indulge in various genres and styles of music as we bring the Latin Community back into Vancouver!</p><p>Different artists and singers will be performing at different times, so be sure to check out the lists of bands we have coming and attend the Main Stage at the allotted times your favourite bands are performing.</p>",
#     "image_url":"http://latincouver.er7.ca/1.0/assets/images/plazas/main-stage.jpg",
#     "longitude":"",
#     "latitude":"",
#     css_style:CssStyle.find_by(name: 'red-flat'),
#     event:Event.find_by(name: 'Carnaval del Sol'),
#     "active":1}])
# end
