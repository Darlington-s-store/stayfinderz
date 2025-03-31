
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About UniStay</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make finding student accommodation simple, secure, and stress-free.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              UniStay was founded in 2025 by Owusu-Ansah Eric (Alpha), a former university student who experienced firsthand the challenges of finding suitable accommodation near campus. After encountering issues like fraudulent agents, unreliable listings, and the stress of securing housing from afar, he decided to create a solution that would help future students avoid these problems.
            </p>
            <p className="mb-4">
              Starting as a simple idea in a university dormitory, UniStay has grown into a comprehensive platform connecting students with verified landlords and quality accommodations across Ghana. Our team consists of former students, property management experts, and technology enthusiasts who all share a common goal: making student housing search safe, transparent, and easy.
            </p>
            <p>
              Today, UniStay helps thousands of students find their ideal living situation, while providing landlords with a trusted platform to reach qualified tenants. We're continuously improving our services and expanding to new university towns to serve more students nationwide.
            </p>
          </div>
        </div>
        
        {/* Our Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To eliminate the stress and uncertainty from student accommodation search by providing a transparent, secure platform that connects students with quality housing options near their universities.
            </p>
            <p className="text-gray-700">
              We aim to be the most trusted resource for student housing in Ghana, helping students focus on their education without worrying about accommodation issues.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-unistay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold">Trust & Security</h3>
                  <p className="text-gray-600">We verify all listings and landlords to ensure student safety.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-unistay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold">Accessibility</h3>
                  <p className="text-gray-600">Making quality accommodation accessible to all students.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-unistay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold">Transparency</h3>
                  <p className="text-gray-600">Honest, accurate information about all properties and services.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-unistay-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-gray-600">Continuously improving our platform to better serve students.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* How We Work */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How UniStay Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-unistay-blue">1</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Verification Process</h3>
              <p className="text-gray-600">
                We verify all landlords and properties before they appear on our platform to ensure safety and accuracy.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-unistay-blue">2</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Student Reviews</h3>
              <p className="text-gray-600">
                Real reviews from actual students who have lived in the accommodations help you make informed decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-unistay-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-unistay-blue">3</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Secure Transactions</h3>
              <p className="text-gray-600">
                Our platform ensures safe payment processing and digital documentation for peace of mind.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-unistay-blue to-blue-400 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to find your perfect student accommodation?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of students who have found their ideal living space through UniStay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-unistay-blue hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Link to="/listings">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
