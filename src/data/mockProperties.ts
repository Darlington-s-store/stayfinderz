
export const mockProperties = [
  {
    id: "1",
    title: "Campus Haven Hostel",
    description: "Modern student accommodation with spacious rooms and excellent amenities, located just a 5-minute walk from the University of Ghana campus. Each room features comfortable beds, study desks, and ample storage space. The property includes high-speed WiFi, a communal kitchen, laundry facilities, and 24/7 security.",
    location: "East Legon, Accra",
    university: "University of Ghana",
    price: 5000,
    imageUrl: "/assets/images/hostel1.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Study Area", "Security", "Cleaning Service", "Laundry"],
    landlord: {
      name: "Emmanuel Addo",
      phone: "+233501234567",
      email: "emmanuel@example.com"
    },
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    },
    features: [
      "24/7 Security",
      "Backup Power",
      "Water Storage",
      "Study Areas",
      "Common Room"
    ],
    images: [
      "/assets/images/hostel1-room.jpg",
      "/assets/images/hostel1-bathroom.jpg",
      "/assets/images/hostel1-common.jpg"
    ],
    reviews: [
      {
        id: "r1",
        user: "Kofi Mensah",
        rating: 4.5,
        comment: "Great location and facilities. The WiFi is fast and reliable.",
        date: "2023-10-15"
      }
    ]
  },
  {
    id: "2",
    title: "Scholars Retreat",
    description: "Comfortable and affordable hostel with both single and shared rooms, perfect for students at KNUST. The property offers a quiet environment conducive to studying, with dedicated study rooms and reliable internet. All rooms are furnished with beds, wardrobes, and study tables.",
    location: "Ayeduase, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 4500,
    imageUrl: "/assets/images/hostel2.jpg",
    roomType: "Shared Room",
    amenities: ["WiFi", "Security", "Backup Generator", "Study Room", "Kitchen"],
    landlord: {
      name: "Abena Owusu",
      phone: "+233507654321",
      email: "abena@example.com"
    },
    roomAvailability: {
      total: 30,
      available: 0,
      occupied: 30
    },
    features: [
      "Study Rooms",
      "Reading Area",
      "Kitchenette",
      "Water Supply",
      "Security Personnel"
    ]
  },
  {
    id: "3",
    title: "Ocean View Residence",
    description: "Premium self-contained hostel with stunning ocean views, located near the University of Cape Coast. Each room includes a private bathroom, kitchenette, and balcony. The property features a rooftop lounge, gym, and recreational facilities for residents.",
    location: "Cape Coast",
    university: "University of Cape Coast",
    price: 6500,
    imageUrl: "/assets/images/hostel3.jpg",
    roomType: "Self-contained",
    amenities: ["Private Bathroom", "Kitchenette", "WiFi", "Security", "Backup Generator", "Study Area"],
    landlord: {
      name: "Joseph Koomson",
      phone: "+233509876543",
      email: "joseph@example.com"
    },
    roomAvailability: {
      total: 15,
      available: 2,
      occupied: 13
    }
  },
  {
    id: "4",
    title: "Academic Heights",
    description: "Spacious and secure hostel with excellent facilities for GIMPA students. The property offers a mix of single and shared rooms, all furnished with comfortable beds, study desks, and wardrobes. Amenities include high-speed WiFi, communal kitchen, laundry services, and 24/7 security.",
    location: "Achimota, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 5500,
    imageUrl: "/assets/images/hostel4.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Security", "Cleaning Service", "Laundry", "Common Room"],
    landlord: {
      name: "Akosua Boateng",
      phone: "+233503456789",
      email: "akosua@example.com"
    },
    roomAvailability: {
      total: 25,
      available: 8,
      occupied: 17
    }
  },
  {
    id: "5",
    title: "Excellence Towers",
    description: "Modern hostel designed specifically for Ashesi University students, featuring contemporary architecture and comfortable living spaces. Each room is well-ventilated and comes with study furniture, storage space, and access to high-speed internet.",
    location: "Berekuso",
    university: "Ashesi University",
    price: 7000,
    imageUrl: "/assets/images/hostel5.jpg",
    roomType: "Self-contained",
    amenities: ["Private Bathroom", "WiFi", "Security", "Backup Generator", "Gym", "Study Room"],
    landlord: {
      name: "Daniel Quartey",
      phone: "+233506543210",
      email: "daniel@example.com"
    },
    roomAvailability: {
      total: 18,
      available: 0,
      occupied: 18
    }
  },
  {
    id: "6",
    title: "Comfort Hall",
    description: "Budget-friendly hostel near the University of Ghana with basic amenities and a friendly environment. Rooms are furnished with beds, desks, and wardrobes. The property offers shared bathrooms, a communal kitchen, and a small study area.",
    location: "Legon, Accra",
    university: "University of Ghana",
    price: 3500,
    imageUrl: "/assets/images/hostel6.jpg",
    roomType: "Shared Room",
    amenities: ["WiFi", "Security", "Shared Kitchen", "Reading Area"],
    landlord: {
      name: "Grace Asante",
      phone: "+233502345678",
      email: "grace@example.com"
    },
    roomAvailability: {
      total: 40,
      available: 12,
      occupied: 28
    }
  },
  {
    id: "7",
    title: "Tech Valley Residences",
    description: "Modern hostel with tech-focused amenities for KNUST students, featuring reliable high-speed internet, smart room controls, and dedicated workspaces. The property includes a computer lab, printing services, and collaborative study spaces.",
    location: "Bomso, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 5800,
    imageUrl: "/assets/images/hostel7.jpg",
    roomType: "Single Room",
    amenities: ["High-Speed WiFi", "Computer Lab", "Printing Services", "Security", "Backup Generator"],
    landlord: {
      name: "Kwame Boakye",
      phone: "+233507890123",
      email: "kwame@example.com"
    },
    roomAvailability: {
      total: 22,
      available: 4,
      occupied: 18
    }
  },
  {
    id: "8",
    title: "Coastal Student Lodge",
    description: "Comfortable hostel situated close to the University of Cape Coast, offering a blend of affordability and comfort. The property features clean rooms, reliable utilities, and a peaceful environment for studying.",
    location: "Cape Coast",
    university: "University of Cape Coast",
    price: 4000,
    imageUrl: "/assets/images/hostel8.jpg",
    roomType: "Shared Room",
    amenities: ["WiFi", "Security", "Study Area", "Water Storage"],
    landlord: {
      name: "Elizabeth Mensah",
      phone: "+233508765432",
      email: "elizabeth@example.com"
    },
    roomAvailability: {
      total: 35,
      available: 0,
      occupied: 35
    }
  },
  {
    id: "9",
    title: "Executive Scholars Inn",
    description: "Premium accommodation for students at GIMPA, featuring luxurious rooms and high-end amenities. The property includes a gym, swimming pool, study lounge, and 24/7 concierge service.",
    location: "East Legon, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 8500,
    imageUrl: "/assets/images/hostel9.jpg",
    roomType: "Self-contained",
    amenities: ["Private Bathroom", "Air Conditioning", "WiFi", "Swimming Pool", "Gym", "Security"],
    landlord: {
      name: "Richard Osei",
      phone: "+233501234567",
      email: "richard@example.com"
    },
    roomAvailability: {
      total: 12,
      available: 2,
      occupied: 10
    }
  },
  {
    id: "10",
    title: "Innovation Heights",
    description: "Modern hostel designed for Ashesi University students with a focus on innovation and collaboration. The property features smart rooms, co-working spaces, and innovation labs for students to work on projects.",
    location: "Berekuso",
    university: "Ashesi University",
    price: 7500,
    imageUrl: "/assets/images/hostel10.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Co-working Space", "Innovation Lab", "Security", "Backup Generator"],
    landlord: {
      name: "Sarah Appiah",
      phone: "+233509876543",
      email: "sarah@example.com"
    },
    roomAvailability: {
      total: 20,
      available: 0,
      occupied: 20
    }
  },
  {
    id: "11",
    title: "Campus Gateway Hostel",
    description: "Conveniently located hostel right at the entrance of the University of Ghana campus, offering easy access to lectures and university facilities. The rooms are well-ventilated and come with basic furnishings.",
    location: "Legon, Accra",
    university: "University of Ghana",
    price: 4200,
    imageUrl: "/assets/images/hostel11.jpg",
    roomType: "Shared Room",
    amenities: ["WiFi", "Security", "Study Area", "Common Room"],
    landlord: {
      name: "Michael Addo",
      phone: "+233503456789",
      email: "michael@example.com"
    },
    roomAvailability: {
      total: 30,
      available: 7,
      occupied: 23
    }
  },
  {
    id: "12",
    title: "Serene Study Haven",
    description: "Quiet and peaceful hostel located in a residential area near KNUST, perfect for students who prioritize a distraction-free study environment. The property features sound-insulated rooms and dedicated study spaces.",
    location: "Ayeduase, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 5000,
    imageUrl: "/assets/images/hostel12.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Security", "Sound Insulation", "Study Room", "Backup Generator"],
    landlord: {
      name: "Patricia Owusu",
      phone: "+233507654321",
      email: "patricia@example.com"
    },
    roomAvailability: {
      total: 15,
      available: 3,
      occupied: 12
    }
  },
  {
    id: "13",
    title: "Seaside Student Residence",
    description: "Beautiful hostel with panoramic views of the Atlantic Ocean, located within walking distance of the University of Cape Coast. The property offers a unique living experience with beach access and outdoor study areas.",
    location: "Cape Coast",
    university: "University of Cape Coast",
    price: 6000,
    imageUrl: "/assets/images/hostel13.jpg",
    roomType: "Self-contained",
    amenities: ["Private Bathroom", "Sea View", "WiFi", "Security", "Study Area"],
    landlord: {
      name: "James Koomson",
      phone: "+233502345678",
      email: "james@example.com"
    },
    roomAvailability: {
      total: 18,
      available: 0,
      occupied: 18
    }
  },
  {
    id: "14",
    title: "Urban Scholars Residence",
    description: "Modern hostel located in the heart of Accra, with excellent transport links to GIMPA. The property features contemporary design, comfortable rooms, and urban amenities including cafes and shops within the building.",
    location: "Osu, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 6500,
    imageUrl: "/assets/images/hostel14.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Security", "Cafe", "Study Area", "Air Conditioning"],
    landlord: {
      name: "Diana Mensah",
      phone: "+233508765432",
      email: "diana@example.com"
    },
    roomAvailability: {
      total: 25,
      available: 6,
      occupied: 19
    }
  },
  {
    id: "15",
    title: "Mountain View Lodge",
    description: "Peaceful hostel situated on the hills near Ashesi University, offering stunning mountain views and a serene environment. The property features spacious rooms, outdoor terraces, and hiking trails around the campus.",
    location: "Berekuso",
    university: "Ashesi University",
    price: 6800,
    imageUrl: "/assets/images/hostel15.jpg",
    roomType: "Shared Room",
    amenities: ["WiFi", "Mountain View", "Security", "Study Area", "Outdoor Spaces"],
    landlord: {
      name: "Benjamin Darko",
      phone: "+233501234567",
      email: "benjamin@example.com"
    },
    roomAvailability: {
      total: 24,
      available: 8,
      occupied: 16
    }
  },
  {
    id: "16",
    title: "Academic Square Residences",
    description: "Well-maintained hostel in a quiet neighborhood near the University of Ghana, featuring a mix of room types to suit different budgets and preferences. The property includes study areas, a small library, and social spaces.",
    location: "East Legon, Accra",
    university: "University of Ghana",
    price: 4800,
    imageUrl: "/assets/images/hostel16.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Security", "Library", "Study Area", "Common Room"],
    landlord: {
      name: "Sophia Amoah",
      phone: "+233509876543",
      email: "sophia@example.com"
    },
    roomAvailability: {
      total: 35,
      available: 0,
      occupied: 35
    }
  },
  {
    id: "17",
    title: "Tech Students Haven",
    description: "Purpose-built hostel for engineering and tech students at KNUST, featuring specialized facilities such as small workshops, 3D printing services, and technical libraries. Rooms are designed with extra desk space for projects.",
    location: "Bomso, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 5200,
    imageUrl: "/assets/images/hostel17.jpg",
    roomType: "Shared Room",
    amenities: ["WiFi", "Workshop Space", "3D Printing", "Technical Library", "Security"],
    landlord: {
      name: "Eric Boateng",
      phone: "+233503456789",
      email: "eric@example.com"
    },
    roomAvailability: {
      total: 28,
      available: 5,
      occupied: 23
    }
  },
  {
    id: "18",
    title: "Heritage Student Apartments",
    description: "Comfortable hostel in a historic building near the University of Cape Coast, combining traditional architecture with modern amenities. The property features spacious rooms with high ceilings and large windows.",
    location: "Cape Coast",
    university: "University of Cape Coast",
    price: 5500,
    imageUrl: "/assets/images/hostel18.jpg",
    roomType: "Self-contained",
    amenities: ["Private Bathroom", "WiFi", "Security", "Historic Building", "Study Area"],
    landlord: {
      name: "Victoria Adu",
      phone: "+233507654321",
      email: "victoria@example.com"
    },
    roomAvailability: {
      total: 16,
      available: 3,
      occupied: 13
    }
  },
  {
    id: "19",
    title: "Metro Student Living",
    description: "Contemporary hostel in a bustling area of Accra, offering easy access to GIMPA and urban amenities. The property features modern design, efficient use of space, and community-focused common areas.",
    location: "Adabraka, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 5800,
    imageUrl: "/assets/images/hostel19.jpg",
    roomType: "Single Room",
    amenities: ["WiFi", "Security", "Community Kitchen", "Study Area", "Entertainment Room"],
    landlord: {
      name: "Robert Asare",
      phone: "+233502345678",
      email: "robert@example.com"
    },
    roomAvailability: {
      total: 30,
      available: 0,
      occupied: 30
    }
  },
  {
    id: "20",
    title: "Hilltop Student Resort",
    description: "Premium hostel for Ashesi University students, featuring resort-style amenities and comfortable living spaces. The property includes a swimming pool, fitness center, study lounges, and beautiful landscaped grounds.",
    location: "Berekuso",
    university: "Ashesi University",
    price: 8000,
    imageUrl: "/assets/images/hostel20.jpg",
    roomType: "Self-contained",
    amenities: ["Private Bathroom", "WiFi", "Swimming Pool", "Gym", "Security", "Study Lounge"],
    landlord: {
      name: "Olivia Quartey",
      phone: "+233508765432",
      email: "olivia@example.com"
    },
    roomAvailability: {
      total: 20,
      available: 4,
      occupied: 16
    }
  }
];

// Export the mock data to be used in the app
export default mockProperties;
