const data = [
    {
        id: "1",
        img : "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-greece-athens-acropolis-moon.jpg", 
        gMap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12580.959267549133!2d23.7257492!3d37.9715323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c97c042f5eb0df6!2sAcropolis%20of%20Athens!5e0!3m2!1sen!2sng!4v1638412053948!5m2!1sen!2sng",
        name : "The Acropolis of Athens",
        country: "‎Greece",
        location:"Athens, ‎Attica‎",
        review: "Perched above present day Athens, the Acropolis draws you up and in. Follow in the footsteps of ancients as you walk up the same steps that have been walked on since 438 BC — 2,500 years.Views out over the city are incredible as you walk between the meticulously restored ancient buildings."
     
    },
    {
        id : "2",
        img : "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-italy-rome-colosseum.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sng!4v1638414604861!5m2!1sen!2sng",
        name : "Colosseum",
        country: "italy",
        location:" Regio III Isis et Serapis, Rome",
        review: "The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. It's been a bucket-list destination of travelers for generations. And it does not disappoint.Set in the heart of the city, the Colosseum is an easy place to visit."        
    },
    {
        id : "3",
        img : "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-china-great-wall.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12147.835829856085!2d116.5703749!3d40.4319077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd040259b950522df!2sGreat%20Wall%20of%20China!5e0!3m2!1sen!2sng!4v1638414734377!5m2!1sen!2sng",
        name : "The Great Wall of China",
        country: "china",
        location: "Huairou District, China",
        review : "In a land of modern cities and towering skyscrapers, the Great Wall of China, built between the 14th and 17th centuries, is a stark contrast but a striking image that all visitors to China should see.A stroll along the top of the wall provides an incredible view of the structure snaking off into the distance. The wall stretches an astounding 21,196 kilometers."    
    },
    {
        id : "4",
        img : "http://static1.squarespace.com/static/58fbfecf725e25a3d1966494/5f5fcc4650df4722058d996a/6063ce15b72ce70fc86d5e95/1617153562475/?format=1500w",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.966498430253!2d2.2944813!3d48.8583701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sng!4v1638416120882!5m2!1sen!2sng",
        name : "the eiffel tower",
        country: "France", 
        location:" Champ de Mars in Paris",
        review: "The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure.Young travelers heading out on the road for the first time, couples looking for a special getaway,  and romantics of all types are all drawn to Paris."
    },
    {
        id : "5",
        img : "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-new-york-statue-of-liberty.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12101.225545940446!2d-74.0445004!3d40.6892494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sng!4v1638423375565!5m2!1sen!2sng",
        name : "the statue of liberty",
        country: "usa", 
        location:"Liberty Island, New York City",
        review: "America is full of great sights and places to visit, but it's the Statue of Liberty that represents the United States like no other place. This symbol of freedom in New York City was gifted by the French to the American people in 1896."
    },
    {
        id : "6",
        img : "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14197.60221324001!2d78.0421422!3d27.1751448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sng!4v1638423777583!5m2!1sen!2sng",
        name : "the taj mahal",
        country: "india", 
        location:"Agra, ‎Uttar Pradesh‎",
        review: "The Taj Mahal is the one sight in India that all travelers need to see. The country is filled with incredible cities and fabulous places to visit, but the 17th-century Taj Mahal is the one place that says you've been to India."
    },
    {
        id : "6",
        img : "https://www.airpano.com/files/rio_christ_vr_01_big.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14695.816560239235!2d-43.2104872!3d-22.951916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9dc984d7019502de!2sChrist%20the%20Redeemer!5e0!3m2!1sen!2sng!4v1638424239938!5m2!1sen!2sng",
        name : "christ the redeemer",
        country: "brazi", 
        location:"Rio de Janeiro",
        review: "The massive Christ the Redeemer statue overlooking Rio de Janeiro in Brazil.Standing at nearly 100 feet tall, the statue of Jesus is numbered among the contemporary “Seven Wonders of the World.”The statue was illuminated for the first time on Oct. 12, 1931, the Feast of Our Lady of Aparecida, Patroness of Brazil."
    },
    {
        id : "7",
        img : "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0405251491156!2d31.131160015113505!3d29.97826533190646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sng!4v1638425178290!5m2!1sen!2sng",
        name : "the pyramid of giza",
        country: "‎Egypt‎", 
        location:"Giza City, ‎Giza‎, ‎Greater Cairo‎",
        review: "the Pyramids of Giza take ancient to a whole other level. These were built over 4,500 years ago. Tourists were coming to see these magnificent structures literally thousands of years ago.Located just outside Cairo, the pyramids, which is also where you'll find the Sphinx, are easy to get to, and tours are easy to arrange. A sunset camel ride around the structures is a wonderful experience"
    },
    {
        id : "8",
        img : "https://cdn.thecrazytourist.com/wp-content/uploads/2019/01/ccimage-shutterstock_707816683.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15523.990802292423!2d103.8669857!3d13.4124693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3eaba81157b0418d!2sAngkor%20Wat!5e0!3m2!1sen!2sng!4v1638425739354!5m2!1sen!2sng",
        name : "angkor wat",
        country: "cambodia", 
        location:"Siem Reap",
        review: "Surrounded by jungle and, in some cases, overgrown with huge trees and roots, the ancient structures of the Angkor complex may look like a movie set to some visitors.Wandering through Angkor Wat, the main centerpiece of the complex, it's easy to feel like you've entered another era."
    },
    {
        id : "9",
        img : "https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13775.165087412988!2d35.4443622!3d30.3284544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x199bf908679a2291!2sPetra!5e0!3m2!1sen!2sng!4v1638426313777!5m2!1sen!2sng",
        name : "petra",
        country: "jordan", 
        location:"Hashemite Kingdom of Jordan",
        review: "You may have an Indiana Jones feeling as you walk through a 1.2-kilometer-long narrow crack in the sandstone hills and emerge into a hidden city. First built over 2,000 years ago and lost to the outside world for 600 years, the city was only discovered in 1812."
    },
    {
        id : "10",
        img : "https://www.history.com/.image/t_share/MTYyNzgwNDg4MzQyMTg1ODI1/topic-stonehenge-gettyimages-682586546.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10004.725043838485!2d-1.826215!3d51.178882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x979170e2bcd3d2dd!2sStonehenge!5e0!3m2!1sen!2sng!4v1638426467899!5m2!1sen!2sng",
        name : "stonehenge",
        country: "england", 
        location:" Salisbury Plain in Wiltshire,",
        review: "Stonehenge is one of those places that makes you ponder what went on here over 4,500 years ago. It's long been a mystery to historians, and has captured the imagination of countless visitors. Despite the large number of tourists that descend on Stonehenge, the place still has a mystical feel."
    },
    {
        id : "11",
        img : "https://factsofindonesia.com/wp-content/uploads/2017/05/f4024c571e5e09ce5e4049bc181500b1-borobudur-temple.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15818.78947578639!2d110.2037513!3d-7.6078738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd34334744dc3cb!2sBorobudur%20Temple!5e0!3m2!1sen!2sng!4v1638430954609!5m2!1sen!2sng",
        name : "Borobudur-temple",
        country: "Indonesia", 
        location:"Magelang, ‎Central Java",
        review: "Set in a steamy jungle with three volcanoes providing the backdrop, Borobudur is Indonesia's top tourist attraction.Borobudur dates from the 9th century and is one of the largest Buddhist temples in the world. It's a fascinating place to wander about."
    },
    {
        id : "12",
        img : "https://www.worldatlas.com/upload/10/cd/10/shutterstock-565337620.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186586.22995069512!2d-79.22811823021638!3d43.053847074006285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3445eec824db9%3A0x46d2c56156bda288!2sNiagara%20Falls%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sng!4v1638437275208!5m2!1sen!2sng",
        name : "niagara falls",
        country: "canada / usa", 
        location:"Ontario, Canada",
        review: "On the border between the United States and Canada, these great falls have been drawing explorers and travelers for centuries. Just over an hour from the city of Toronto, Niagara Falls is easy to get to, and the town is a fun place to spend a night or two.",
    },
    {
        id : "13",
        img : "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-iStock-49888866_hwah23.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13253.102891379987!2d151.2152967!3d-33.8567844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3133f8d75a1ac251!2sSydney%20Opera%20House!5e0!3m2!1sen!2sng!4v1638437501975!5m2!1sen!2sng",
        name : " Sydney Opera House",
        country: "australia", 
        location:"Bennelong Point, ‎Sydney",
        review: "Like many other attractions around the world, the Sydney Opera House is one of those places that is easy to identify and obviously associated with Australia. A photo of yourself in front of the white sails screams Australia."
    },
    {
        id : "14",
        img : "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-china-forbidden-city.jpg",
        gMap : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12240.36977248862!2d116.390731!3d39.9169474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x674e2bd4dd3079f!2sForbidden%20City!5e0!3m2!1sen!2sng!4v1638438013700!5m2!1sen!2sng",
        name : "the forbidden city",
        country: "china", 
        location:" Dongcheng District, Beijing",
        review: "The sprawling complex dates from the 14th and 15th centuries and is a spectacular example of historical China.Over the centuries, the palace has housed 24 Ming and Qing Emperors. Inside the city, the Palace Museum holds over 340,000 artifacts showcasing the treasures of China's dynasties."
    },
    {
        id : "15",
        img : "https://www.czechuniversities.com/uploads/2019/09/hradcany.jpg",
        gMap :"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10238.972389128005!2d14.4016165!3d50.0910966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2acf3c88af12259f!2sPrague%20Castle!5e0!3m2!1sen!2sng!4v1638438392211!5m2!1sen!2sng",
        name : "Prague Castle",
        country: " Czech Republic", 
        location:"prague",
        review: "Sitting atop a hill across the river from the center of the city, Prague Castle casts an imposing aura over its surroundings. The castle is an incredible collection of buildings constructed from the 9th to 14th century."
    },

]

export default data

