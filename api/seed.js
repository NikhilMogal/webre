const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Property = require('./models/Property');
const PropertyDetails = require('./models/PropertyDetails');
const Achievement = require('./models/Achievement');

dotenv.config();


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected for seeding');
  seedData();
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


const seedData = async () => {
  const properties = [
    {
      imageSrc: "https://www.roongtagroup.co.in/uploads/property/images/188791330516860404362050684739.webp",
      name: "Roongta Grandezza",
      link: "https://www.example.com/properties/sunset-villa",
      location: "Govind Nagar, Off 100ft Ring Road",
      features: ["2 BHK", "3 BHK", "Shops"]
    },
    {
      imageSrc: "https://www.roongtagroup.co.in/uploads/property/images/1846680751678105943147663125.webp",
      name: "Sunset Villa",
      link: "https://www.example.com/properties/sunset-villa",
      location: "Beverly Hills, California",
      features: ["4 BHK", "Swimming Pool", "Garden"]
    },
    {
      imageSrc: "https://www.roongtagroup.co.in/uploads/property/images/146072851016780012311245345117.webp",
      name: "Mountain Retreat",
      link: "https://www.example.com/properties/mountain-retreat",
      location: "Aspen, Colorado",
      features: ["3 BHK", "Fireplace", "Mountain View"]
    }
  ];

  const details = [
    {
      imageSrc: "https://www.roongtagroup.co.in/uploads/property/images/188791330516860404362050684739.webp",
      name: "Roongta Grandezza",
      link: "https://www.example.com/properties/sunset-villa",
      location: "Govind Nagar, Off 100ft Ring Road",
      features: ["2 BHK", "3 BHK", "Shops"],
      qrCode: "https://www.roongtagroup.co.in/uploads/rera_qr_code/qrcode1692777448.PNG",
      reraNumber: "P51600029147",
      description: "If Grand is your way of life...",
      amenities: ["Kids Play Area", "Elders' Seating", "Amphitheatre", "Green Buffer", "Arbor", "Skating Rink"]
    }
  ];

  const achievementImages= [
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-2.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-3.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-4.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-5.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-6.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-7.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-8.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-9.webp" },
    { imageUrl: "https://www.roongtagroup.co.in/uploads/achievements/image-10.webp" },
  ];

  try {
    await Property.deleteMany({}); 
    await Property.insertMany(properties); 
    console.log('Properties seeded successfully');

    await PropertyDetails.deleteMany({});
    await PropertyDetails.insertMany(details); 
    console.log('Property details seeded successfully');

    await Achievement.deleteMany({}); 
    await Achievement.insertMany(achievementImages); 
    console.log('Property Achives seeded successfully');

    mongoose.connection.close(); 
  } catch (err) {
    console.error('Error seeding data:', err);
    mongoose.connection.close(); 
  }
};


