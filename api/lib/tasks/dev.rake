namespace :dev do
  desc "Setup the development environment"
  task setup: :environment do

    # puts "Resetting the database, and then Seed...."
    #
    # %x(rails db:migrate:reset dev:setup)
    #
    #
    # puts "Reset finished! now seeding ..."


######################################################################
    puts "Adding Users...."

    User.create!(email: "zizo@example.com", password: "12345678", password_confirmation: "12345678")
    User.create!(email: "emerson@example.com", password: "12345678", password_confirmation: "12345678")
    User.create!(email: "plinio@example.com", password: "12345678", password_confirmation: "12345678")


    puts "Users have been Added successfully!"

######################################################################
    puts "Adding TradeType..."

    TradeType.create!(name: 'Food',active: 1)
    TradeType.create!(name: 'Products',active: 1)
    TradeType.create!(name: 'Non-Profit',active: 1)
    TradeType.create!(name: 'Show',active: 1)


    puts "TradeType has been added successfully!"

########################################################

    puts "Adding TradeGroup..."

    TradeGroup.create!(name: 'Vendors',active: 1)
    TradeGroup.create!(name: 'Business',active: 1)
    TradeGroup.create!(name: 'Sponsors',active: 1)
    TradeGroup.create!(name: 'Artists',active: 1)


    puts "TradeGroup has been added successfully!"
########################################################
    puts "Adding CssStyle..."

    cssstyles = %w(red yellow blue green red-flat yellow-flat blue-flat green-flat)

    cssstyles.each do |cssstyle|
      CssStyle.create!(
      name: cssstyle
      )

    end

    puts "CssStyle has been added successfully!"
########################################################
    puts "Adding Setting..."


      Setting.create!(
        main_title: 'Upcoming Events yeah!',
        css_style_id: 8
      )

    puts "Setting has been added successfully!"
########################################################


    puts "Adding Events..."

      Event.create!(
        name: 'Carnaval del Sol',
        image_url:'http://latincouver.er7.ca/1.0/assets/images/event/carnaval_delsol.jpg',
        short_description: 'from 09/jul to 12/jul',
        description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
        external_url:Faker::Internet.url,
        longitude:Faker::Address.longitude,
        latitude:Faker::Address.latitude,
        user_id: 1,
        active: 1,
        order: 1,
        css_style_id: 1

      )
      Event.create!(
        name: 'Carnaval del Sol',
        image_url:'http://latincouver.er7.ca/1.0/assets/images/event/carnaval_delsol.jpg',
        short_description: 'from 09/jul to 12/jul',
        description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
        external_url:Faker::Internet.url,
        longitude:Faker::Address.longitude,
        latitude:Faker::Address.latitude,
        user_id: 2,
        active: true,
        order: 2,
        css_style_id: 2
      )

      Event.create!(
        name: 'Exploplaza Latina',
        image_url:'http://latincouver.er7.ca/1.0/assets/images/event/expoplaza_latina.jpg',
        short_description: 'September 14th <br> <b>Vancouver</b>',
        description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
        external_url:Faker::Internet.url,
        longitude:Faker::Address.longitude,
        latitude:Faker::Address.latitude,
        user_id: 3,
        active: true,
        order: 3,
        css_style_id: 3
      )

      Event.create!(
        name: 'Latin Live Events',
        image_url:'http://latincouver.er7.ca/1.0/assets/images/event/latin_america.jpg',
        short_description: 'September 14th <br> <b>Vancouver</b>',
        description: 'VANCOUVER, PREPARATE PA` LA NOCHE MAS ESPERADA DE ESTE VERANO. Llego el momento de subir el nivel y elevar la calidad de rumba colombiana en Vancouver. Traigan sus campanas & sus maracas porque nos vamos a enrumbar con estilo y sabor. Acomp',
        external_url:Faker::Internet.url,
        longitude:Faker::Address.longitude,
        latitude:Faker::Address.latitude,
        user_id: 2,
        active: true,
        order: 4,
        css_style_id: 4
      )


    puts "Events have been Added successfully"

######################################################################

    puts "Adding Plaza to Events..."


      Plaza.create!(
        name:'Main Stage',
        description: "<p>Saturday July 9th marks the beginning of Carnaval Del Sol! We are very proud to be able to host this event for the people we love. This is the most anticipated event yet and we hope it meets your expectations! Indulge in various genres and styles of music as we bring the Latin Community back into Vancouver!</p><p>Different artists and singers will be performing at different times, so be sure to check out the lists of bands we have coming and attend the Main Stage at the allotted times your favourite bands are performing.</p>",
        active: true,
        image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/main-stage.jpg",
        event_id: 2,
        user_id: 2,
        css_style_id:2
      )


    puts "Plazas have been Added to Events successfully!"

#######################################################################

    # puts "Adding Schedule to Plaza and Events"
    #
    # 10.times do |e|
    #   Schedule.create!(
    #     from: Faker::Date.between(10.day.from_now, 17.day.from_now),
    #     to: Faker::Date.between(20.day.from_now, 27.day.from_now),
    #     plaza_id: Plaza.all.sample.id,
    #     event_id: Event.all.sample.id
    #   )
    #
    # end
    #
    # puts "Schedule has been Added to Events and Plaza successfully!"

########################################################################

puts "Adding TRADES to Plaza and Events"

      Trade.create!(
        name:'Will Campa',
        description:"<p>Recording several albums with Cumbre and Maraca, Wil is best recognized internationally for his Grammy Nominated contribution to the CD ‘Tremenda Rumba’ in 2002. In 2005 Wil formed what is known today as one of Cuba elite groups ‘Wil Campa Y Su Orquesta,’ releasing two albums: ‘Es Tiempo’ in 2006 and ‘Todo Es Posible’ in 2011, winning him a Nomination for Best Album 2012 at the Cubadisco (Cuba’s equivalent of the Grammy’s). Wil Campa Y Su Orquesta have been touring extensively nationally (e.g. Havana Jazz Festival) and internationally, inspiring and introducing thousands of audiences to Cuba’s musical royalty.</p><p>Wil’ s childhood was spent in Pinar del Rio, Cuba, where he grew up amidst streets filled with joyful traditional Cuban music.Wil’ s vision, musical talent, and chorographical direction have placed this Orchestra, Wil Campa Y Su Orquesta, as one of the most exciting touring groups! </p>",
        short_description: " ",
        image_url:"http://latincouver.er7.ca/1.0/assets/images/artists/Will-Campa.jpg",
        active: 1,
        event_id: 2,
        plaza_id: 1,
        trade_type_id: 1,
        css_style_id: 1,
        trade_group_id: 1
        #order: ,
        #event_id: Event.all.sample.id
      )
      Trade.create!(
        name:'Samba Fusion',
        description:"<p>This multi-cultural troupe performs several styles of dance fusion including Brazilian Samba, Forro, Samba Reggae, Afro- Brazilian, Gypsy, Hip Hop, Contemporary, Salsa/Latin/Reggaeton, African, Polynesian, and Burlesque.</p><p>Samba Fusion was formed by Andrea Monteiro and Naija K in Vancouver based on their common dance background in ‘Samba.’As the ideas flowed in the initial stages of the group 's development, more dancers joined and each dancer brought on their experience in different styles of dance. Rooted in Brazilian Samba fused with numerous dance styles, music and rhythms, Samba Fusion will wow you with their colourful attire and steamy dance moves!</p>",
        short_description: " ",
        image_url:"http://latincouver.er7.ca/1.0/assets/images/Samba-Fusion.png",
        active: 1,
        event_id: 2,
        plaza_id: 1,
        trade_type_id: 1,
        css_style_id: 2,
        trade_group_id: 1
        #order: ,
        #event_id: Event.all.sample.id
      )


    puts "TRADES have been Added to Events and Plaza successfully!"

########################################################################
    puts "Adding trade_links..."


      TradeLink.create!(
        name:'Er7',
        href:'http://www.er7.ca',
        active: 1,
        trade_id:1 ,
      )


    puts "TradeLink have been Added successfully!"

#########################################################


  end

end
