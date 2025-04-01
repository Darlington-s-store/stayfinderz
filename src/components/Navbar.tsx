
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, User, Heart, LogIn, Home, Search } from "lucide-react";
import { getUserFavorites } from "@/services/propertyService";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(() => getUserFavorites().length);

  // Update favorites count when local storage changes
  window.addEventListener('storage', () => {
    setFavoritesCount(getUserFavorites().length);
  });

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Listings", href: "/listings", icon: <Search className="h-4 w-4 mr-2" /> },
    { name: "Favorites", href: "/favorites", icon: <Heart className="h-4 w-4 mr-2" />, badge: favoritesCount },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-unistay-blue">UniStay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-unistay-blue"
                  : "text-gray-600 hover:text-unistay-blue"
              }`}
            >
              {link.icon}
              {link.name}
              {link.badge && link.badge > 0 && (
                <span className="ml-1 bg-unistay-blue text-white text-xs rounded-full px-2 py-0.5">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" size="sm" className="flex items-center">
              <LogIn className="h-4 w-4 mr-2" />
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-unistay-blue flex items-center">
              <User className="h-4 w-4 mr-2" />
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center py-4 border-b">
                <span className="text-lg font-bold text-unistay-blue">
                  UniStay
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive(link.href)
                        ? "bg-blue-50 text-unistay-blue"
                        : "text-gray-600 hover:bg-blue-50 hover:text-unistay-blue"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                    {link.badge && link.badge > 0 && (
                      <span className="ml-auto bg-unistay-blue text-white text-xs rounded-full px-2 py-0.5">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t py-4 flex flex-col space-y-3">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full bg-unistay-blue flex items-center justify-center"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
