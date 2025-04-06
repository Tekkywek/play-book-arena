
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn, BarChart2, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock authentication state - replace with actual auth later
  const isAuthenticated = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-playbook-neutral bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-playbook-primary" />
          <span className="font-heading text-2xl font-extrabold text-playbook-primary">
            PlayBook
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium hover:text-playbook-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-playbook-primary transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-playbook-primary transition-colors">
            About
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium hover:text-playbook-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/workouts" className="text-sm font-medium hover:text-playbook-primary transition-colors">
                Workouts
              </Link>
              <Link to="/teams" className="text-sm font-medium hover:text-playbook-primary transition-colors">
                Teams
              </Link>
              <Link to="/matches" className="text-sm font-medium hover:text-playbook-primary transition-colors">
                Matches
              </Link>
              <Button variant="outline" size="sm" className="gap-2">
                <User size={16} />
                Profile
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link to="/login">
                  <LogIn size={16} />
                  Login
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-playbook-primary hover:bg-playbook-accent">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-4 bg-white border-t border-playbook-neutral">
          <Link 
            to="/features"
            className="block py-2 hover:text-playbook-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/pricing"
            className="block py-2 hover:text-playbook-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/about"
            className="block py-2 hover:text-playbook-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link 
                to="/dashboard"
                className="block py-2 hover:text-playbook-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/workouts"
                className="block py-2 hover:text-playbook-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Workouts
              </Link>
              <Link 
                to="/teams"
                className="block py-2 hover:text-playbook-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </Link>
              <Link 
                to="/matches"
                className="block py-2 hover:text-playbook-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Matches
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                Profile
              </Button>
            </>
          ) : (
            <>
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full justify-start gap-2"
              >
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <LogIn size={16} />
                  Login
                </Link>
              </Button>
              <Button 
                asChild 
                size="sm" 
                className="w-full bg-playbook-primary hover:bg-playbook-accent"
              >
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
