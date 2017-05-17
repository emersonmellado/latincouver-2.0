namespace :dev do
  desc "Development environment Setup"
  task setup: :environment do


    puts "Adding 10 Users....."

      10.times do |i|
        User.create!(
          name:Faker::Name.name,
          email:Faker::Internet.email,
          password:12345678,
          password_confirmation:12345678
        )
      end

    puts "Users added Successfully!"

    puts "Adding 01 Admin User"

      AdminUser.create!(
        name:"Zizo",
        email: "zizo@admin.com",
        password:12345678,
        password_confirmation:12345678
      )
    puts "Admin User Added!"


    puts "adding css styles"

    css_styles = %w( red-flat yellow-flat green-flat )

    css_styles.each do |css|
      CssStyle.create!(
        name: css
      )
    end

    puts "added css styles"

    puts "Adding events....."

      Event.create!( name: "LatinCouver May 2017", css_style_id: 1, user_id: 1)
      Event.create!( name: "LatinCouver June 2017", css_style_id: 2, user_id: 1)
      Event.create!( name: "LatinCouver July 2017", css_style_id: 3, user_id: 1)

    puts "events added Successfully!"

  end
end
