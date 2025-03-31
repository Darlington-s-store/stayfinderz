
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
    reviews: 24
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
    reviews: 56
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
    reviews: 18
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
    reviews: 42
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
    reviews: 35
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
    reviews: 29
  }
];
