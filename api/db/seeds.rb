if TradeType.count == 0
  puts "Creating production data for trade_type"
  TradeType.create!([{name: 'Food', active: 1},{name: 'Products', active: 1},{name: 'Non-Profit', active: 1},{name:'Show', active: 1}])
end

if TradeGroup.count == 0
  puts "Creating production data for trade_group"
  TradeGroup.create!([{name: 'Vendors', active: 1},{name: 'Business', active: 1},{name: 'Sponsors', active: 1}, {name: 'Artists', active: 1}])
end

if CssStyle.count == 0
  puts "Creating production data for css_style"
  css_style = CssStyle.create!([{name: 'red', active: 1},{name: 'yellow', active: 1},{name: 'blue', active: 1},{name: 'green', active: 1},{name: 'red-flat', active: 1},{name: 'yellow-flat', active: 1},{name: 'blue-flat', active: 1},{name: 'green-flat', active: 1}])
end

if Setting.count == 0
  puts "Creating production data for settings"
  Setting.create!([{main_title: 'Upcoming Events yeah!', css_style:CssStyle.find_by(name: 'green-flat'), active: 1}])
end

if User.count == 0
  puts "Creating admin user"
  users = User.create!([{name: 'admin', password:'admin@2017', nickname:'admin', image:'admin', email: 'admin@email.com', created_at:'2017-05-17 01:27:00', updated_at:'2017-05-17 01:27:00', active: 1}])
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

if Trade.count == 0
  puts "Creating production data for trade"
  Trade.create!([{
    name: 'Will Campa',
    "description":"<p>Recording several albums with Cumbre and Maraca, Wil is best recognized internationally for his Grammy Nominated contribution to the CD ‘Tremenda Rumba’ in 2002. In 2005 Wil formed what is known today as one of Cuba elite groups ‘Wil Campa Y Su Orquesta,’ releasing two albums: ‘Es Tiempo’ in 2006 and ‘Todo Es Posible’ in 2011, winning him a Nomination for Best Album 2012 at the Cubadisco (Cuba’s equivalent of the Grammy’s). Wil Campa Y Su Orquesta have been touring extensively nationally (e.g. Havana Jazz Festival) and internationally, inspiring and introducing thousands of audiences to Cuba’s musical royalty.</p><p>Wil’ s childhood was spent in Pinar del Rio, Cuba, where he grew up amidst streets filled with joyful traditional Cuban music.Wil’ s vision, musical talent, and chorographical direction have placed this Orchestra, Wil Campa Y Su Orquesta, as one of the most exciting touring groups! </p>",
    "image_url":"http://latincouver.er7.ca/1.0/assets/images/artists/Will-Campa.jpg",
    css_style:CssStyle.find_by(name: 'red-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    "active":1,
    trade_type:TradeType.find_by(name: 'Show'),
    trade_group:TradeGroup.find_by(name: 'Artists')
    },{
    name: 'Samba Fusion',
    "description":"<p>This multi-cultural troupe performs several styles of dance fusion including Brazilian Samba, Forro, Samba Reggae, Afro- Brazilian, Gypsy, Hip Hop, Contemporary, Salsa/Latin/Reggaeton, African, Polynesian, and Burlesque.</p><p>Samba Fusion was formed by Andrea Monteiro and Naija K in Vancouver based on their common dance background in ‘Samba.’As the ideas flowed in the initial stages of the group 's development, more dancers joined and each dancer brought on their experience in different styles of dance. Rooted in Brazilian Samba fused with numerous dance styles, music and rhythms, Samba Fusion will wow you with their colourful attire and steamy dance moves!</p>",
    "image_url":"http://latincouver.er7.ca/1.0/assets/images/Samba-Fusion.png",
    css_style:CssStyle.find_by(name: 'red-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    "active":1,
    trade_type:TradeType.find_by(name: 'Show'),
    trade_group:TradeGroup.find_by(name: 'Artists')
    }
    ])
end


if TradeLink.count == 0
  puts "Creating production data for trade_link"
  TradeLink.create!([{name: 'Er7', href:'http://www.er7.ca', active:1, 
    trade:Trade.find_by(name: 'Will Campa')}])
end
