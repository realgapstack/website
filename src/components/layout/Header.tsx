import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContactSales } from "../../hooks/useContactSales";
import Button from "../Button";
import { ContactSalesSheet } from "../ContactSalesSheet";

const NavLinkItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `text-sm transition-colors duration-200 ${
        isActive
          ? "text-purple-primary font-semibold"
          : "text-gray-600 hover:text-purple-primary"
      }`
    }
  >
    {label}
  </NavLink>
);

const NavigationLinks = () => (
  <>
    <NavLinkItem to="/" label="Global Payments" />
    <NavLinkItem to="/global-trade" label="Global Trade" />
  </>
);

export default function Header() {
  const { isOpen, openSheet, closeSheet } = useContactSales();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between pb-4 pt-10 max-w-[979px] mx-auto border-gray-100 border-l border-r border-dotted border-l-grey border-r-grey relative w-full px-4 md:px-0">
        <div>
          <NavLink to="/" end>
            <img src="/logo_two.svg" alt="Gapstack Logo" className="h-8" />
          </NavLink>
        </div>

        <nav className="items-center hidden space-x-6 md:flex">
          <NavigationLinks />
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="relative z-50 flex flex-col items-center justify-center w-6 h-6 space-y-1 md:hidden"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        <div className="hidden md:block">
          <Button onClick={openSheet}>Contact Sales</Button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-opacity-20 md:hidden"
              onClick={toggleMobileMenu}
            />
            <div className="absolute left-0 right-0 z-50 duration-200 bg-white border border-gray-200 shadow-lg top-full md:hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
              <nav className="flex flex-row items-center justify-between px-4 py-4 space-x-4">
                <div className="flex flex-1 space-x-6">
                  <NavigationLinks />
                </div>
                <Button onClick={openSheet} className="flex-shrink-0">
                  Contact Sales
                </Button>
              </nav>
            </div>
          </>
        )}
      </header>

      <div className="relative w-full h-px border-t border-dotted border-grey">
        <div className="absolute left-1/2 top-0 w-full max-w-[979px] -translate-x-1/2">
          <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5">
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <path
                d="M6 0v12M0 6h12"
                stroke="#7C60FF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-0 w-3 h-3 translate-x-1.5 -translate-y-1.5">
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <path
                d="M6 0v12M0 6h12"
                stroke="#7c3aed"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      <ContactSalesSheet open={isOpen} onOpenChange={closeSheet} />
    </>
  );
}
