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
  Plaza.create!([{
    name: 'Main Stage',
    description:"<p>Saturday July 9th marks the beginning of Carnaval Del Sol! We are very proud to be able to host this event for the people we love. This is the most anticipated event yet and we hope it meets your expectations! Indulge in various genres and styles of music as we bring the Latin Community back into Vancouver!</p><p>Different artists and singers will be performing at different times, so be sure to check out the lists of bands we have coming and attend the Main Stage at the allotted times your favourite bands are performing.</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/main-stage.jpg",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'green-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}])

  Plaza.create!([{
    name: 'Food Plaza',
    description:"<p>Come <strong>Eat</strong>, <strong>Play</strong> and <strong>Live</strong> Latin America and meet our food vendors!</p><p>We welcome you to our Food Plaza! Take a gastronomic journey through Latin America and the Caribbean as you revel in the explosion of flavours.</p><p>Tap on the names of our vendors below to find out more about them:</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/food-plaza.jpg",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'red-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}])

  Plaza.create!([{
    name: 'Beer Plaza',
    description:"<p><strong>Carnaval del Sol</strong> is really excited to offer up Heineken's <strong>Sol Cerveza</strong>, <strong>Dos Equis</strong>, and <strong>Strongbow Apple Cider</strong> at our 400-seat <strong>Beer Garden</strong>, where folks can enjoy crisp, cold beverages and small tapas - Pinchos and Tacos by <strong>La Taqueria</strong> - as they watch the <strong>Main Stage</strong> performers.</p><p>Click on the icons below to find out more about our offerings!</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/beer-plaza.jpg",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'blue-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}])  

  Plaza.create!([{
    name: 'Travel Plaza',
    short_description: 'YVR',    
    description:"<p>Travelling is an enriching experience because it offers the opportunity to meet new people, learn about different traditions and enjoy new cuisines. Planning the trip is part of the fun because it combines ideas, creativity, budget and salivating anticipation of the foods we will eat! We can choose to travel abroad or in our own country. We can go by plane, train, car, bus, or a cruise ship. We can travel right at home through cuisines too.</p><p> YVR Travel Plaza is the place that offers you interesting travelling options for your next vacations. Explore new horizons!</p><h3>Delicioso Cooking Demo ­ Chefs del Sol</h3><p>Sat 07/09 and Sun 07/10, 2:30:00 pm ­ 7:00 pm, brought to you by <strong>La Taqueria</strong></p><p><img class='plaza-image fx-400' src='assets/images/vendors/lataqueriapinchetaco.jpg'></p><p>Two chefs together for 30 - 40 minutes onstage, one creates as he “teaches” the other and vice versa. Then it’s the anticipated taste test between two professionals... What’s in store when these chefs hit the stage? Enemies or friends? Banter or insults? Competition or collaboration? We do not know, but one thing is for sure ­ it will be a show to remember. Here you can find out more and come <strong>EAT, PLAY, and LIVE</strong> Latin America with our talented <strong>Chefs</strong> at our <strong>Delicioso show!!</strong></p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/yvrtravelplaza.jpg",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'green-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}])   

  Plaza.create!([{
    name: 'Sports Plaza',
    short_description: '',    
    description:"<p>Soccer (fútbol/futebol) is the most popular sport in the world, according to FIFA there are more than 30,000,000 people participating in organized competitions around the world ­ from the deserts of Bahrain to the metropolises of São Paulo and Milan. Latin American countries and teams have always played a very important role in the international soccer scene. Soccer’s place in non­Caribbean Latin American Society has shaped nations and is ingrained into every little bit of society; from baby teams, to soccer stars like Pele, Rocha, and Gamarra, Soccer rules and lives in Latin Americans’ hearts around the world!</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/sports-plazanew.jpg",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'yellow-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}]) 

  Plaza.create!([{
    name: 'Urban Plaza',
    short_description: '',    
    description:"<p><strong>The high energy and fun atmosphere of Urban Art Plaza is so infectious that the Exhibitors end up enjoying it as much as the attendees.</strong></p><p><strong>The Art Plaza at Carnaval del Sol</strong>, July 9th and 10th, brings to you the opportunity to infuse your senses with the infinite palette of creative labour through the full gamut of artistic expression, including traditional painting, live painting, sculpture, photography, fashion, handcrafts and more. Here to learn more about the rich history of Latin­American arts. </p><p>The Art Plaza presents the following artists:</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/urbanlabart.png",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'red-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}]) 

  Plaza.create!([{
    name: 'Family Plaza',
    short_description: 'Mercedes Bens Vans',    
    description:"<p>Colores del Sol Fashion Show</p><p><strong><a href='#/detail/vendors/799'>VCC fashion graduates</a></strong> will be presenting their <strong>Shape Of The Colours Collection</strong>, you will be wowed, awed, you will fall in love with the vibrancy of tropical­summers alluring promises.</p><p>The Mercedes Benz Van Family Plaza is proud to present the <strong>School of Groove</strong> on Saturday 07/09 from 5:00 pm to 6:00 pm</p><p><strong>Dance Workshop</strong></p><p>What are the differences between Bachata and Kizomba? Is ‘screwing the lightbulb’ your only Bollywood Dance move? Want to burn some calories with Zumba (especially after downing a few Churros from our food vendors)? Nestor de la Zerda of <strong>BC Dance</strong>, and Denise Galay of <strong>Zumba Vancouver</strong> will be showcasing their talents and sharing a few moves with their audience. Join them at their dance workshop at our Family Plaza.</p><p>Our main sponsor <strong>Mercedes Benz Van</strong> traces their heritage as far back as 1886, and they proudly promote “The Best or Nothing” from their family to our family and friends. Mercedes Benz will have their new Metris van on display and may even let you take it out on a test drive after the show!</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/mercedesbenzvans.png",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'blue-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}]) 


  Plaza.create!([{
    name: 'Kids Plaza',
    short_description: 'Mercedes Bens Vans',    
    description:"<p>Kids (and Moms) Plaza is where three to ten year olds can play and learn new and different activities in their own space. A perfect destination for them to have a great time, learn, and make new friends.</p><p>Kids Plaza features:<ul><li><a href='#/detail/vendors/800'><strong>● Mom’s Playground</strong> - offered by GMR Marketing</a></li><li><a href='#/detail/vendors/800'><strong>● KidZone</strong> - offered by GMR Marketing</a></li><li><strong>● Mini­chefs</strong> - The space where children will have the opportunity to play and learn how to cook and express their creativity at the kitchen.</li><li><strong>● Arts and crafts</strong> - The place where kids can create, paint, build, colour, etc.</li><li><strong>● Spa for kids</strong> - A place for girls and boys who want to have a manicure, do their hair, or have decorative face painting. </li><li><strong>● Fairground</strong> - Here children can perform all typical fairground activities such as shooting hoops, clown toss, etc.</li><li><strong>● Mini City</strong> - This is where kids can learn something about cityscapes such as streets, traffic lights, and signs. There will be small cars available for the very young ones to operate along a marked path.</li><li><strong>● Piñatas</strong> - will be there for the children to break open during both days of Carnaval del Sol.</li><li><strong>● Dance Stage</strong> - Have a burning desire to show off what you got? Join the greatest dance stage and show off your Salsa, Bachata, Samba, and Zumba moves. All for free! Do you think you have what It takes to be the Dancing King/Queen of Carnaval del Sol?</li><li><strong>● Performance Artists</strong><br/><a href='#/detail/artists/800'>Harrison Lee<br/><a href='#/detail/artists/801'>Ivan the Magician</a><br/><a href='#/detail/artists/802'>Vancouver Puppet Theatre</li></ul></p><p>Kids Plaza also provides a general play area where one adult member of the family can watch the children while the others go off and enjoy other areas of the Carnaval. There will be staff to keep the area generally safe and clean, although the actual supervision of individual children needs to be done by at least one parent. Latincouver is not equipped to provide a daycare facility and does not assume any liability for children using this area. We also offer the following businesses at the Kids Plaza:</p>",
    image_url:"http://latincouver.er7.ca/1.0/assets/images/plazas/kids-plazanew.jpg",
    longitude:"",
    latitude:"",
    css_style:CssStyle.find_by(name: 'green-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    active:1}]) 

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
    trade_group:TradeGroup.find_by(name: 'Artists'),
    plaza:Plaza.find_by(name: 'Main Stage')
    },{
    name: 'Samba Fusion',
    "description":"<p>This multi-cultural troupe performs several styles of dance fusion including Brazilian Samba, Forro, Samba Reggae, Afro- Brazilian, Gypsy, Hip Hop, Contemporary, Salsa/Latin/Reggaeton, African, Polynesian, and Burlesque.</p><p>Samba Fusion was formed by Andrea Monteiro and Naija K in Vancouver based on their common dance background in ‘Samba.’As the ideas flowed in the initial stages of the group 's development, more dancers joined and each dancer brought on their experience in different styles of dance. Rooted in Brazilian Samba fused with numerous dance styles, music and rhythms, Samba Fusion will wow you with their colourful attire and steamy dance moves!</p>",
    "image_url":"http://latincouver.er7.ca/1.0/assets/images/Samba-Fusion.png",
    css_style:CssStyle.find_by(name: 'red-flat'),
    event:Event.find_by(name: 'Carnaval del Sol'),
    "active":1,
    trade_type:TradeType.find_by(name: 'Show'),
    trade_group:TradeGroup.find_by(name: 'Artists'),
    plaza:Plaza.find_by(name: 'Main Stage')
    }
    ])
end


if TradeLink.count == 0
  puts "Creating production data for trade_link"
  TradeLink.create!([{name: 'Er7', href:'http://www.er7.ca', active:1, 
    trade:Trade.find_by(name: 'Will Campa')}])
end
