import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-700 shadow-md">
      {/* <div className="container mx-auto px-8 py-4 flex items-center justify-between"> */}
      <div className="container flex items-center justify-between px-8 py-4 mx-auto">
        {/* Logo - always visible */}
        <a className="flex items-center justify-center" href="#">
          <span className="font-extrabold text-xl">cancelmysubs.com</span>
        </a>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#howitworks"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            How it works
          </a>
        </nav>

        {/* Desktop Button - hidden on mobile */}
        <div className="hidden md:block">
          <Button size="sm" className="inline-flex items-center justify-center">
            Connect Gmail
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 px-6 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#howitworks"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                How it works
              </a>
              <Button
                size="sm"
                className="inline-flex items-center justify-center"
              >
                Connect Gmail
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
