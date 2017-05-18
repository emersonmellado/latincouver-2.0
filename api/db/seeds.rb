if CssStyle.count == 0
  puts "Creating production data for css_style"
  css_style = CssStyle.create!([{name: 'red-flat'},{name: 'yellow-flat'},{name: 'blue-flat'},{name: 'green-flat'}])
end

if TradeType.count == 0
  puts "Creating production data for trade_type"
  TradeType.create!([{name: 'Food'},{name: 'Products'},{name: 'Non-Profit'}])
end

if TradeGroup.count == 0
  puts "Creating production data for trade_group"
  TradeGroup.create!([{name: 'Vendors'},{name: 'Business'},{name: 'Sponsors'}, {name: 'Artists'}])
end

if User.count == 0
  puts "Creating admin user"
  users = User.create!([{name: 'admin', password:'admin@2017', nickname:'admin', image:'admin', email: 'admin@email.com', created_at:'2017-05-17 01:27:00', updated_at:'2017-05-17 01:27:00'}])
end

if Rails.env != "production"
	if Event.count == 0
	  puts "Creating test event"
	  Event.create!([{name: 'event test one', css_style:CssStyle.find_by(name: 'red-flat')}])
	end
end
