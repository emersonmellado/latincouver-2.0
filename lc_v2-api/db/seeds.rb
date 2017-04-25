# if CssStyle.count == 0
#   puts "Creating css_style"
#   css_style = CssStyle.create!([{name: 'red-flat'},{name: 'yellow-flat'}])
# end
#
# if User.count == 0
#   puts "Creating user1"
#   users = User.create!([{name: 'user1', password:'user1@#%', nickname:'user1', image:'user1', email: 'user1@email.com', created_at:'2017-01-01 01:27:00', updated_at:'2017-01-01 01:27:00'}])
# end
#
# if Event.count == 0
#   puts "Creating event"
#   user = User.find_by(name: 'user1')
#   Event.create!([{name: 'event one', css_style:CssStyle.find_by(name: 'red-flat'), user_id:user.id}])
# end
