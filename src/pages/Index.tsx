
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PropertyContactButtons from "@/components/PropertyContactButtons";
import { 
  MapPin, 
  Building,
  Users, 
  Shield, 
  Star, 
  Phone, 
  Clock,
  ChevronRight
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const featuredProperties = properties.slice(0, 3);
  const heroImages = [
    "/lovable-uploads/411d18bd-6e90-4667-b42e-5058e434954d.png",
    "/lovable-uploads/68180f9b-1fa2-4228-9376-7622587d14d8.png",
    "/lovable-uploads/8d1c196c-2605-4dda-9207-3c3318a4ac24.png",
    "/lovable-uploads/1ff9b2fc-6c03-4898-85a4-35fc52490fdb.png"
  ];
  
  return (
    <Layout>
      {/* Hero Section with Image Carousel */}
      <section className="relative text-white">
        {/* Hero Image Carousel */}
        <div className="relative h-[600px] overflow-hidden">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url(${image})`,
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                      <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                            Find Your Perfect Student Accommodation
                          </h1>
                          <p className="text-xl mb-8 opacity-90 animate-slide-in">
                            Discover safe, affordable, and comfortable hostels and rental houses near your university.
                          </p>
                          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
                            <SearchBar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 lg:left-8 text-white border-white hover:bg-white hover:text-black" />
            <CarouselNext className="right-4 lg:right-8 text-white border-white hover:bg-white hover:text-black" />
          </Carousel>
        </div>
      </section>
      
      {/* Quick Contact Banner */}
      <section className="bg-unistay-blue text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-3 md:mb-0">
              <Phone className="mr-2" />
              <span>Need help finding accommodation? Call us: <strong>+233 50 123 4567</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <PropertyContactButtons 
                phone="+233 50 123 4567"
                name="UniStay Support"
                propertyTitle="Student Accommodation"
                variant="ghost"
                size="sm"
                className="bg-white/10 rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Accommodations</h2>
            <Link to="/listings">
              <Button variant="outline" className="border-unistay-blue text-unistay-blue">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                university={property.university}
                price={property.price}
                imageUrl={property.imageUrl}
                roomType={property.roomType}
                amenities={property.amenities}
                landlordName={property.landlord.name}
                landlordPhone={property.landlord.phone}
                roomAvailability={property.roomAvailability}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Listings Section - New Section with Modern Image */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Premium Student Accommodations</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/411d18bd-6e90-4667-b42e-5058e434954d.png" 
                alt="Premium Living Space" 
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Luxury Student Living</h3>
              <p className="text-gray-700 mb-6">
                Experience the best in student accommodation with our premium listings. 
                Modern interiors, top-notch amenities, and prime locations near your university.
                Our premium properties feature comfortable living spaces, fully equipped kitchens,
                and stylish bedrooms designed specifically for student needs.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Modern furniture and design', 'High-speed internet', 'Security systems', 'Quality appliances'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-unistay-blue mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/listings">
                <Button className="bg-unistay-blue hover:bg-unistay-blue/90 w-full sm:w-auto">
                  Browse Premium Listings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose UniStay</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-unistay-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Accommodations</h3>
              <p className="text-gray-600">Verified properties that meet our quality and safety standards.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-unistay-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Convenient Locations</h3>
              <p className="text-gray-600">Properties close to your university for easy commuting.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-unistay-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Landlords</h3>
              <p className="text-gray-600">All landlords are verified, with reviews from previous students.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-unistay-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Booking</h3>
              <p className="text-gray-600">Secure payment system and booking protection for peace of mind.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/about">
              <Button variant="outline" className="border-unistay-blue text-unistay-blue">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Bedroom Showcase - New Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Comfortable Bedrooms</h2>
              <p className="text-gray-700 mb-6">
                Our properties feature well-designed bedrooms with comfortable furnishings to ensure you get proper rest after a long day of studies. 
                Quality mattresses, ample storage, and good lighting create the perfect environment for rest and study.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Quality Beds</h4>
                  <p className="text-sm text-gray-600">Comfortable mattresses for restful sleep</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Study Areas</h4>
                  <p className="text-sm text-gray-600">Dedicated spaces for focused learning</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Storage Solutions</h4>
                  <p className="text-sm text-gray-600">Ample space for your belongings</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">Natural Light</h4>
                  <p className="text-sm text-gray-600">Well-lit rooms for better mood</p>
                </div>
              </div>
              
              <Link to="/listings">
                <Button className="bg-unistay-blue hover:bg-unistay-blue/90">
                  Find Your Room
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/8d1c196c-2605-4dda-9207-3c3318a4ac24.png" 
                  alt="Bedroom" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Kitchen Section - New Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/1ff9b2fc-6c03-4898-85a4-35fc52490fdb.png" 
                  alt="Kitchen" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Kitchen Facilities</h2>
              <p className="text-gray-700 mb-6">
                Cook your own meals in our well-equipped kitchens. Our properties feature modern appliances, 
                ample counter space, and storage areas to make meal preparation easy and convenient for busy students.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Quality Appliances</h4>
                  <p className="text-sm text-gray-600">Modern ovens and stovetops</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Storage Space</h4>
                  <p className="text-sm text-gray-600">Cabinets for all your essentials</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Clean Design</h4>
                  <p className="text-sm text-gray-600">Sleek and easy to maintain</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1">Shared Options</h4>
                  <p className="text-sm text-gray-600">Communal kitchens in many properties</p>
                </div>
              </div>
              
              <Link to="/listings">
                <Button className="bg-unistay-blue hover:bg-unistay-blue/90">
                  Explore Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How UniStay Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-unistay-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">Browse verified accommodations near your university. Filter by price, amenities, and more.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-unistay-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">Contact landlords directly through our secure messaging system, WhatsApp or phone.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-unistay-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Move In</h3>
              <p className="text-gray-600">Book your accommodation and complete your secure payment through UniStay.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4 h-12 w-12 rounded-full bg-unistay-blue/20 flex items-center justify-center">
                  <span className="font-semibold text-unistay-blue">KB</span>
                </div>
                <div>
                  <h4 className="font-semibold">Kwame Baffoe</h4>
                  <p className="text-sm text-gray-600">University of Ghana</p>
                </div>
              </div>
              <div className="mb-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">
                "UniStay made finding accommodation so easy. I found a great place near campus at an affordable price. The landlord was verified and everything was as described!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4 h-12 w-12 rounded-full bg-unistay-blue/20 flex items-center justify-center">
                  <span className="font-semibold text-unistay-blue">AD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Abena Darko</h4>
                  <p className="text-sm text-gray-600">KNUST</p>
                </div>
              </div>
              <div className="mb-3 flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                <Star size={16} className="text-gray-300" />
              </div>
              <p className="text-gray-700">
                "I loved how easy it was to contact landlords directly through WhatsApp. The booking process was smooth and I'm very happy with my accommodation."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4 h-12 w-12 rounded-full bg-unistay-blue/20 flex items-center justify-center">
                  <span className="font-semibold text-unistay-blue">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Mensah</h4>
                  <p className="text-sm text-gray-600">Ashesi University</p>
                </div>
              </div>
              <div className="mb-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">
                "As an international student, finding accommodation was a big concern. UniStay made it simple with their secure booking system and responsive customer service."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-unistay-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect student accommodation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their ideal living space through UniStay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/signup">
              <Button size="lg" className="bg-unistay-blue hover:bg-unistay-blue/90">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/listings">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-unistay-dark">
                Browse Listings
              </Button>
            </Link>
          </div>
          <div className="mt-6 inline-block">
            <PropertyContactButtons
              phone="+233 50 123 4567"
              name="UniStay Support"
              propertyTitle="Student Accommodation"
              size="lg"
              className="justify-center"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Support Section */}
      <section className="py-12 bg-slate-100">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need assistance with your accommodation search?</h2>
              <p className="text-gray-600">Our support team is available to help you find the perfect hostel near your university.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <PropertyContactButtons 
                phone="+233 50 123 4567"
                name="UniStay Support"
                propertyTitle="Student Accommodation"
                size="default"
              />
              <Link to="/booking">
                <Button className="w-full">Book Hostel</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
