
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProperties = properties.slice(0, 3);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container">
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
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
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
              <p className="text-gray-600">Contact landlords directly through our secure messaging system to ask questions.</p>
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
      
      {/* CTA Section */}
      <section className="py-16 bg-unistay-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect student accommodation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their ideal living space through UniStay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </Layout>
  );
};

export default Index;
