export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  university: string;
  price: number;
  imageUrl: string;
  roomType: string;
  amenities: string[];
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  landlord: {
    name: string;
    phone: string;
    email: string;
    verified: boolean;
  };
  distanceFromUniversity: string;
  rating: number;
  reviews: number;
  roomAvailability?: {
    total: number;
    available: number;
    occupied: number;
  };
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Sunny Campus View Apartments",
    description: "Modern, well-furnished apartments with spacious rooms and excellent security, just a short walk from the university. These apartments feature large windows for natural light, clean shared facilities, and a friendly community atmosphere. Perfect for students looking for both comfort and convenience in their university life.",
    location: "15 University Avenue, Legon",
    university: "University of Ghana",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Shared Kitchen"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 15
    },
    landlord: {
      name: "John Mensah",
      phone: "+233 20 123 4567",
      email: "john@example.com",
      verified: true
    },
    distanceFromUniversity: "0.5 km",
    rating: 4.5,
    reviews: 24,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-002",
    title: "Premium Student Hostel",
    description: "A premium student hostel offering comfortable accommodation with modern amenities. The facility includes spacious common areas, reliable internet service, and regular cleaning services. A dedicated management team ensures that all student needs are addressed promptly, creating an ideal environment for academic success and social connections.",
    location: "7 Tech Road, Ayeduase",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 4200,
    imageUrl: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Private Bathroom", "Study Desk"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 20
    },
    landlord: {
      name: "Ama Owusu",
      phone: "+233 24 987 6543",
      email: "ama@example.com",
      verified: true
    },
    distanceFromUniversity: "1.2 km",
    rating: 4.8,
    reviews: 56,
    roomAvailability: {
      total: 30,
      available: 8,
      occupied: 22
    }
  },
  {
    id: "prop-003",
    title: "Budget Student Housing",
    description: "Affordable housing option for students on a budget, providing basic amenities in a convenient location. While simple in design, these accommodations ensure students have a clean, safe place to live during their studies. The communal setup encourages friendship and support among residents, making it especially suitable for first-year students.",
    location: "42 College Lane, Cape Coast",
    university: "University of Cape Coast",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Shared Room",
    amenities: ["Water", "Electricity", "Security", "Shared Bathroom"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 25
    },
    landlord: {
      name: "Kofi Addo",
      phone: "+233 27 345 6789",
      email: "kofi@example.com",
      verified: false
    },
    distanceFromUniversity: "0.8 km",
    rating: 3.9,
    reviews: 18,
    roomAvailability: {
      total: 15,
      available: 0,
      occupied: 15
    }
  },
  {
    id: "prop-004",
    title: "Luxury Scholar Residences",
    description: "Premium accommodation for discerning students, featuring upscale amenities and elegant design. These residences offer a sophisticated living environment with high-quality furnishings, enhanced security measures, and a range of services including cleaning and maintenance. Residents enjoy a peaceful setting conducive to serious study while having access to recreational facilities.",
    location: "5 Executive Road, East Legon",
    university: "Ghana Institute of Management and Public Administration",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Private Kitchen", "Private Bathroom", "Air Conditioning", "Study Area"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 30
    },
    landlord: {
      name: "Serwa Amoah",
      phone: "+233 20 987 1234",
      email: "serwa@example.com",
      verified: true
    },
    distanceFromUniversity: "1.5 km",
    rating: 4.9,
    reviews: 42,
    roomAvailability: {
      total: 25,
      available: 10,
      occupied: 15
    }
  },
  {
    id: "prop-005",
    title: "Innovative Student Lofts",
    description: "Modern loft-style accommodations designed specifically with students in mind. These uniquely designed spaces maximize functionality while providing a contemporary aesthetic. Featuring adaptable layouts, smart technology integration, and energy-efficient systems, these lofts represent the future of student living with their innovative approach to space utilization.",
    location: "25 Innovation Drive, Berekuso",
    university: "Ashesi University",
    price: 4800,
    imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Shared Kitchen", "Study Lounge", "Laundry Facility"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 18
    },
    landlord: {
      name: "Kwesi Frimpong",
      phone: "+233 26 789 0123",
      email: "kwesi@example.com",
      verified: true
    },
    distanceFromUniversity: "0.3 km",
    rating: 4.7,
    reviews: 35,
    roomAvailability: {
      total: 10,
      available: 3,
      occupied: 7
    }
  },
  {
    id: "prop-006",
    title: "Traditional Campus Residences",
    description: "Classic student housing option with a long-standing reputation among university students. These traditional residences offer tried-and-true accommodations with basic amenities in a familiar setting. The established community includes many alumni who speak fondly of their time here, creating a sense of legacy and belonging for current residents.",
    location: "18 Heritage Street, Legon",
    university: "University of Ghana",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    roomType: "Shared Room",
    amenities: ["Water", "Electricity", "Security", "Shared Bathroom", "Common Room"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 22
    },
    landlord: {
      name: "Grace Agyemang",
      phone: "+233 23 456 7890",
      email: "grace@example.com",
      verified: false
    },
    distanceFromUniversity: "0.6 km",
    rating: 4.0,
    reviews: 29,
    roomAvailability: {
      total: 15,
      available: 5,
      occupied: 10
    }
  },
  {
    id: "prop-007",
    title: "Akwaaba Executive Hostel",
    description: "Luxurious accommodation designed for graduate students and professionals seeking both comfort and convenience. The executive hostel features private rooms with en-suite bathrooms, high-speed internet, and a quiet environment perfect for focused study. Communal spaces include a gourmet kitchen, entertainment lounge, and dedicated meeting rooms for group projects.",
    location: "12 Graduate Lane, East Legon",
    university: "University of Ghana",
    price: 5200,
    imageUrl: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Private Bathroom", "Air Conditioning", "Study Area", "Gym"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 28
    },
    landlord: {
      name: "Emmanuel Dankwa",
      phone: "+233 24 111 2222",
      email: "emmanuel@example.com",
      verified: true
    },
    distanceFromUniversity: "1.8 km",
    rating: 4.9,
    reviews: 47,
    roomAvailability: {
      total: 30,
      available: 10,
      occupied: 20
    }
  },
  {
    id: "prop-008",
    title: "Green Valley Student Apartments",
    description: "Eco-friendly student accommodation with a focus on sustainable living practices. These modern apartments feature energy-efficient appliances, water conservation systems, and recycling programs. Surrounded by lush gardens and outdoor study areas, Green Valley creates a serene atmosphere that promotes well-being and academic excellence.",
    location: "35 Sustainability Road, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 4100,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Shared Kitchen", "Eco Garden", "Bicycle Storage"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 16
    },
    landlord: {
      name: "Abena Mensah",
      phone: "+233 26 333 4444",
      email: "abena@example.com",
      verified: true
    },
    distanceFromUniversity: "0.9 km",
    rating: 4.7,
    reviews: 38,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-009",
    title: "Tech Hub Dormitory",
    description: "Cutting-edge accommodation designed for technology and engineering students. The dormitory features high-speed fiber internet, dedicated workspaces with dual-monitor setups, and 24/7 access to a maker space equipped with 3D printers and electronics lab. Regular tech events and hackathons provide networking opportunities with industry professionals.",
    location: "8 Silicon Street, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 4600,
    imageUrl: "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Tech Lab", "Study Pods", "Gaming Room"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 18
    },
    landlord: {
      name: "Kwame Adjei",
      phone: "+233 20 555 6666",
      email: "kwame@example.com",
      verified: true
    },
    distanceFromUniversity: "0.4 km",
    rating: 4.8,
    reviews: 44,
    roomAvailability: {
      total: 25,
      available: 10,
      occupied: 15
    }
  },
  {
    id: "prop-010",
    title: "Oceanview Student Residence",
    description: "Beachfront accommodation offering a unique coastal living experience for students. These bright, airy rooms feature stunning ocean views, natural ventilation, and beach-inspired decor. Residents enjoy direct access to private beach areas perfect for study breaks, exercise, or social gatherings. The peaceful marine environment promotes relaxation alongside academic focus.",
    location: "10 Shoreline Drive, Cape Coast",
    university: "University of Cape Coast",
    price: 4900,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Private Beach Access", "Outdoor Study Areas"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 17
    },
    landlord: {
      name: "Mercy Osei",
      phone: "+233 27 777 8888",
      email: "mercy@example.com",
      verified: true
    },
    distanceFromUniversity: "1.1 km",
    rating: 4.6,
    reviews: 52,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-011",
    title: "Cultural Heritage Hostel",
    description: "A unique accommodation celebrating Ghana's rich cultural heritage. The beautifully designed hostel features traditional architecture with modern amenities, decorated with authentic artwork and cultural artifacts. Regular cultural events, including traditional cooking classes, dance workshops, and storytelling evenings, provide both Ghanaian and international students with an enriching cultural experience.",
    location: "23 Heritage Avenue, Accra",
    university: "University of Ghana",
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Cultural Center", "Library"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 22
    },
    landlord: {
      name: "Akosua Boateng",
      phone: "+233 20 999 0000",
      email: "akosua@example.com",
      verified: true
    },
    distanceFromUniversity: "0.7 km",
    rating: 4.5,
    reviews: 33,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-012",
    title: "Scholar's Retreat",
    description: "A peaceful haven designed for postgraduate students and researchers. The quiet, comfortable apartments feature dedicated study rooms with built-in bookshelves and ergonomic furniture. Located in a tranquil residential area with minimal traffic noise, Scholar's Retreat is ideal for those working on theses or significant research projects requiring concentration and focus.",
    location: "45 Researcher's Lane, Berekuso",
    university: "Ashesi University",
    price: 4700,
    imageUrl: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Private Study Room", "Research Library"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 25
    },
    landlord: {
      name: "Dr. Nana Osei",
      phone: "+233 24 111 3333",
      email: "nana@example.com",
      verified: true
    },
    distanceFromUniversity: "0.5 km",
    rating: 4.9,
    reviews: 29,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-013",
    title: "Sports Village Accommodation",
    description: "Dedicated housing for student athletes and sports enthusiasts. These energetic accommodations feature fitness facilities, recovery rooms, and specialized meal prep areas with nutrition guidance. Located adjacent to university sports facilities, Sports Village minimizes commute time for training while providing a supportive community of fellow athletes focused on both academic and athletic excellence.",
    location: "8 Stadium Road, Cape Coast",
    university: "University of Cape Coast",
    price: 3900,
    imageUrl: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2178&q=80",
    roomType: "Shared Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Fitness Center", "Nutrition Bar"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 20
    },
    landlord: {
      name: "Coach Frank Adu",
      phone: "+233 26 444 5555",
      email: "frank@example.com",
      verified: true
    },
    distanceFromUniversity: "0.3 km",
    rating: 4.6,
    reviews: 41,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-014",
    title: "Artistic Haven Hostel",
    description: "Creative living space designed for art, music, and design students. The colorful, inspirational environment features studio spaces, practice rooms, and gallery areas where residents can create and display their work. Regular art showcases and creative workshops foster a vibrant artistic community, while thoughtful soundproofing ensures both musicians and quiet-seeking students can coexist harmoniously.",
    location: "17 Creative Lane, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 4100,
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Art Studio", "Music Room", "Gallery Space"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 19
    },
    landlord: {
      name: "Efua Mensah",
      phone: "+233 24 666 7777",
      email: "efua@example.com",
      verified: true
    },
    distanceFromUniversity: "1.0 km",
    rating: 4.7,
    reviews: 37,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-015",
    title: "Medical Students Residence",
    description: "Specialized accommodation for medical and healthcare students, strategically located near teaching hospitals. These practical residences feature medical reference libraries, anatomical model rooms, and quiet study spaces for late-night exam preparation. The convenient location minimizes commute time for clinical rotations, while the supportive community of fellow medical students provides both academic support and understanding of the unique demands of medical education.",
    location: "5 Hospital Road, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 5000,
    imageUrl: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Medical Library", "Study Rooms", "Quiet Hours Enforcement"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 24
    },
    landlord: {
      name: "Dr. Kwesi Appiah",
      phone: "+233 20 888 9999",
      email: "kwesi.appiah@example.com",
      verified: true
    },
    distanceFromUniversity: "0.2 km",
    rating: 4.8,
    reviews: 63,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-016",
    title: "Community Service Residence",
    description: "Values-driven accommodation for students passionate about community engagement and social impact. These purpose-focused residences coordinate regular volunteer opportunities, social entrepreneurship workshops, and community project planning sessions. Residents benefit from mentorship by community leaders while developing both academic knowledge and practical skills for creating positive change.",
    location: "28 Community Avenue, Cape Coast",
    university: "University of Cape Coast",
    price: 3600,
    imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Shared Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Community Center", "Meeting Rooms"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 21
    },
    landlord: {
      name: "Patience Owusu",
      phone: "+233 27 222 3333",
      email: "patience@example.com",
      verified: true
    },
    distanceFromUniversity: "0.9 km",
    rating: 4.5,
    reviews: 31,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-017",
    title: "International Student House",
    description: "Welcoming accommodation specifically designed for international students studying in Ghana. These culturally-inclusive residences feature multilingual staff, orientation programs, and assistance with local adaptation challenges. Regular international cuisine nights, cultural exchange events, and holiday celebrations help students from abroad experience Ghanaian culture while maintaining connections to their home traditions.",
    location: "14 Global Avenue, Accra",
    university: "University of Ghana",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Cultural Exchange Center", "International Kitchen"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 22
    },
    landlord: {
      name: "David Ansah",
      phone: "+233 20 444 5555",
      email: "david@example.com",
      verified: true
    },
    distanceFromUniversity: "0.7 km",
    rating: 4.7,
    reviews: 48,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-018",
    title: "Economics & Business Residence",
    description: "Specialized accommodation for business, economics, and entrepreneurship students. These career-focused residences feature financial news streaming lounges, startup incubation spaces, and meeting rooms for business plan development. Regular networking events with local business leaders, mock interview sessions, and professional development workshops provide valuable career preparation alongside academic studies.",
    location: "32 Enterprise Road, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 4700,
    imageUrl: "https://images.unsplash.com/photo-1609972770218-0d086051831d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Business Center", "Conference Room", "Bloomberg Terminal Access"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 25
    },
    landlord: {
      name: "Victoria Asante",
      phone: "+233 24 777 8888",
      email: "victoria@example.com",
      verified: true
    },
    distanceFromUniversity: "0.5 km",
    rating: 4.8,
    reviews: 39,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-019",
    title: "Farmer's Residence Hall",
    description: "Purpose-built accommodation for agricultural science and environmental studies students. These practical residences feature experimental garden plots, seed libraries, and sustainable technology demonstrations. The accommodations focus on both traditional knowledge and modern innovations in agriculture, with regular workshops on topics from soil health to food security policy, led by faculty and visiting experts.",
    location: "20 Agricultural Road, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 3700,
    imageUrl: "https://images.unsplash.com/photo-1593604572577-1c6c44fa2706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Garden Plots", "Composting System", "Agricultural Library"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 18
    },
    landlord: {
      name: "Joseph Boateng",
      phone: "+233 26 111 2222",
      email: "joseph@example.com",
      verified: true
    },
    distanceFromUniversity: "0.8 km",
    rating: 4.6,
    reviews: 27,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-020",
    title: "First-Year Student Village",
    description: "Supportive accommodation specifically designed for first-year university students. These welcoming residences feature comprehensive orientation programs, peer mentoring, and academic support services to ease the transition to university life. The community atmosphere emphasizes social connection, with regular events helping new students build friendships and develop university survival skills during this critical adjustment year.",
    location: "3 Freshman Lane, Berekuso",
    university: "Ashesi University",
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    roomType: "Shared Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Mentoring Center", "Study Groups", "Social Lounge"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 20
    },
    landlord: {
      name: "Ruth Mensah",
      phone: "+233 20 333 4444",
      email: "ruth@example.com",
      verified: true
    },
    distanceFromUniversity: "0.4 km",
    rating: 4.7,
    reviews: 56,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-021",
    title: "Graduate Students Apartments",
    description: "Sophisticated accommodation tailored to the needs of graduate students. These quiet, professional residences feature private workspaces, advanced research facilities, and a mature social atmosphere. With flexible lease terms accommodating research schedules and conference travel, Graduate Students Apartments represent an ideal living situation for masters and doctoral candidates balancing rigorous academic work with quality of life.",
    location: "50 Scholar's Way, Legon",
    university: "University of Ghana",
    price: 5100,
    imageUrl: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Research Facilities", "Conference Room", "Quiet Zones"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 26
    },
    landlord: {
      name: "Prof. Kwabena Adu",
      phone: "+233 24 999 0000",
      email: "kwabena@example.com",
      verified: true
    },
    distanceFromUniversity: "0.3 km",
    rating: 4.9,
    reviews: 42,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-022",
    title: "Prayerful Haven Residence",
    description: "Faith-centered accommodation welcoming students of all religious backgrounds. These mindful residences feature meditation gardens, prayer rooms for various faiths, and quiet spaces for spiritual reflection. Regular interfaith discussions, religious holiday celebrations, and volunteer initiatives create a respectful community where students can nurture their spiritual lives alongside academic pursuits.",
    location: "15 Faith Avenue, Cape Coast",
    university: "University of Cape Coast",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1617967486096-74e709e3856a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Prayer Rooms", "Meditation Garden", "Faith Library"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 17
    },
    landlord: {
      name: "Reverend Samuel Offei",
      phone: "+233 27 555 6666",
      email: "samuel@example.com",
      verified: true
    },
    distanceFromUniversity: "0.9 km",
    rating: 4.8,
    reviews: 34,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-023",
    title: "Language Immersion Residence",
    description: "Specialized accommodation for language students and those seeking multilingual environments. These communicative residences organize language exchange sessions, cultural films nights, and international conversation tables. With residents and staff speaking a variety of languages, the immersive environment accelerates language acquisition through daily practice and cultural context that complement formal classroom learning.",
    location: "9 Polyglot Street, Accra",
    university: "Ghana Institute of Management and Public Administration",
    price: 4300,
    imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Shared Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Language Lab", "International Library", "Media Room"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 19
    },
    landlord: {
      name: "Adwoa Mensa",
      phone: "+233 20 666 7777",
      email: "adwoa@example.com",
      verified: true
    },
    distanceFromUniversity: "0.6 km",
    rating: 4.7,
    reviews: 45,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-024",
    title: "Quiet Study Haven",
    description: "Accommodation designed for students who prioritize a peaceful academic environment. These sound-minimizing residences enforce extended quiet hours, provide noise-canceling study pods, and create distraction-free zones. While social interaction isn't discouraged, the culture emphasizes respect for concentration needs, making these residences ideal for focused learners, introverts, and those working on demanding academic programs requiring sustained attention.",
    location: "28 Serene Lane, Kumasi",
    university: "Kwame Nkrumah University of Science and Technology",
    price: 3900,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Single Room",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Study Carrels", "Quiet Zones", "Noise-Canceling Booths"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 18
    },
    landlord: {
      name: "Isaac Ofosu",
      phone: "+233 26 888 9999",
      email: "isaac@example.com",
      verified: true
    },
    distanceFromUniversity: "0.7 km",
    rating: 4.6,
    reviews: 38,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-025",
    title: "Leadership Development Hostel",
    description: "Dynamic accommodation focused on nurturing future leaders and change-makers. These empowering residences organize leadership workshops, public speaking practice sessions, and community initiative planning. With mentorship from established leaders and a peer network of ambitious students, residents develop both the skills and connections to make significant impact in their chosen fields after graduation.",
    location: "7 Visionary Road, Berekuso",
    university: "Ashesi University",
    price: 4400,
    imageUrl: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Leadership Center", "Conference Room", "Networking Lounge"],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 24
    },
    landlord: {
      name: "Esther Annan",
      phone: "+233 24 222 3333",
      email: "esther@example.com",
      verified: true
    },
    distanceFromUniversity: "0.5 km",
    rating: 4.8,
    reviews: 49,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  },
  {
    id: "prop-026",
    title: "Family-Friendly Student Housing",
    description: "Thoughtfully designed accommodation for students with families and dependents. These supportive residences feature childcare facilities, family study rooms, and play areas. With flexible policies accommodating the unique needs of student parents, these housing options make higher education more accessible for those balancing academic ambitions with family responsibilities.",
    location: "12 Family Circle, Accra",
    university: "University of Ghana",
    price: 5300,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    roomType: "Self-contained",
    amenities: ["WiFi", "Water", "Electricity", "Security", "Childcare Facility", "Family Study Room", "Playground"],
    features: {
      bedrooms: 2,
      bathrooms: 1,
      area: 35
    },
    landlord: {
      name: "Benjamin Adomako",
      phone: "+233 20 777 8888",
      email: "benjamin@example.com",
      verified: true
    },
    distanceFromUniversity: "1.0 km",
    rating: 4.7,
    reviews: 32,
    roomAvailability: {
      total: 20,
      available: 5,
      occupied: 15
    }
  }
];
