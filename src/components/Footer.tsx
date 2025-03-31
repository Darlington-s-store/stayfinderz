
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Uni<span className="text-unistay-blue">Stay</span></h3>
            <p className="text-slate-300">
              The trusted platform for students to find safe and affordable accommodation near their universities.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-unistay-blue transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-slate-300 hover:text-unistay-blue transition-colors">Browse Listings</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-unistay-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-unistay-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">For Students</h4>
            <ul className="space-y-2">
              <li><Link to="/signup" className="text-slate-300 hover:text-unistay-blue transition-colors">Create Account</Link></li>
              <li><Link to="/listings" className="text-slate-300 hover:text-unistay-blue transition-colors">Find Accommodation</Link></li>
              <li><Link to="/help" className="text-slate-300 hover:text-unistay-blue transition-colors">Student Guide</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">For Property Owners</h4>
            <ul className="space-y-2">
              <li><Link to="/landlord/signup" className="text-slate-300 hover:text-unistay-blue transition-colors">List Your Property</Link></li>
              <li><Link to="/landlord/login" className="text-slate-300 hover:text-unistay-blue transition-colors">Landlord Login</Link></li>
              <li><Link to="/landlord/help" className="text-slate-300 hover:text-unistay-blue transition-colors">Landlord Guide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} UniStay. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
