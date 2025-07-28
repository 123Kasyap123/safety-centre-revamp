import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import frndLogoWhite from "@/assets/frnd-cursive-logo-white.png";


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Logo Section */}
          <div className="lg:col-span-2 flex justify-start">
            <img 
              src={frndLogoWhite} 
              alt="FRND" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links - Centered */}
          <div className="lg:col-span-8 flex justify-center">
            <nav className="flex flex-wrap gap-6 lg:gap-8 justify-center items-center">
              <Link 
                to="/" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Features
              </Link>
              <Link 
                to="/careers" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Careers
              </Link>
              <Link 
                to="/safety" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Safety Center
              </Link>
              <Link 
                to="/privacy" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Terms of Use
              </Link>
              <Link 
                to="/community-guidelines" 
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Community Guidelines
              </Link>
            </nav>
          </div>

          {/* Social Icons and Address */}
          <div className="lg:col-span-2 flex justify-end">
            <div className="text-right space-y-4">
              <div className="flex justify-end gap-3">
                <a 
                  href="https://instagram.com/frndapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://linkedin.com/company/frndapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <Linkedin size={16} />
                </a>
              </div>
              
              <div className="text-white text-xs lg:text-sm leading-relaxed">
                <p>Urban Vault No. 1350,</p>
                <p>19th Main, 17th Cross Road,</p>
                <p>HSR Layout 1st sector opposite,</p>
                <p>Gnan shrishti school Bengaluru,</p>
                <p>Karnataka India, 560102</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Cold Brew Tech Private Limited All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;