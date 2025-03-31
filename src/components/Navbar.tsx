
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-unistay-blue">Uni<span className="text-unistay-accent">Stay</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-unistay-blue transition-colors">Home</Link>
          <Link to="/listings" className="text-sm font-medium hover:text-unistay-blue transition-colors">Listings</Link>
          <Link to="/about" className="text-sm font-medium hover:text-unistay-blue transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-unistay-blue transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="outline" className="border-unistay-blue text-unistay-blue hover:bg-unistay-blue hover:text-white">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-unistay-blue text-unistay-blue hover:bg-unistay-blue hover:text-white">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-unistay-blue hover:bg-unistay-blue/90">Sign up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className="px-4 py-2 hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-unistay-blue text-unistay-blue">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-unistay-blue hover:bg-unistay-blue/90">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
