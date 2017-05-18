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
  css_style = CssStyle.create!([{name: 'red-flat'},{name: 'yellow-flat'},{name: 'blue-flat'},{name: 'green-flat'}])
end

if User.count == 0
  puts "Creating admin user"
  users = User.create!([{name: 'admin', password:'admin@2017', nickname:'admin', image:'admin', email: 'admin@email.com', created_at:'2017-05-17 01:27:00', updated_at:'2017-05-17 01:27:00'}])
end

#if Rails.env != "production"
	if Event.count == 0
	  puts "Creating test event"
	  event = Event.create!([{name: 'Carnaval del Sol', css_style:CssStyle.find_by(name: 'green-flat')}])
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
    puts "Creating production data for plaza"
    Trade.create!([{name: 'Main Stage',"description":"<p>Saturday July 9th marks the beginning of Carnaval Del Sol! We are very proud to be able to host this event for the people we love. This is the most anticipated event yet and we hope it meets your expectations! Indulge in various genres and styles of music as we bring the Latin Community back into Vancouver!</p><p>Different artists and singers will be performing at different times, so be sure to check out the lists of bands we have coming and attend the Main Stage at the allotted times your favourite bands are performing.</p>",
          "image_url":"http://latincouver.er7.ca/1.0/assets/images/plazas/main-stage.jpg",
          "longitude":"",
          "latitude":"",
          css_style:CssStyle.find_by(name: 'red-flat'),
          event:Event.find_by(name: 'Carnaval del Sol'),
          "active":1}])
  end    
#end
