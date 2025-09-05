import { NavLink } from "react-router-dom";
import { useContactSales } from "../../hooks/useContactSales";
import Button from "../Button";
import { ContactSalesSheet } from "../ContactSalesSheet";

const NavLinkItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm transition-colors duration-200 ${
        isActive
          ? "text-[#7C60FF] font-semibold"
          : "text-gray-600 hover:text-[#7C60FF]"
      }`
    }
  >
    {label}
  </NavLink>
);

export default function Header() {
  const { isOpen, openSheet, closeSheet } = useContactSales();
  return (
    <>
      <header className="flex items-center justify-between pb-4 pt-10 max-w-[979px] mx-auto border-gray-100 border-l border-r border-dotted border-l-gray-300 border-r-gray-300 relative w-full">
        <div className="">
          <NavLink to="/">
            <img src="/logo.svg" alt="Gapstack Logo" className="h-8" />
          </NavLink>
        </div>
        <nav className="items-center hidden space-x-6 md:flex">
          <NavLinkItem to="/" label="Global Payments" />
          <NavLinkItem to="/global-trade" label="Global Trade" />
        </nav>
        <div className="">
          <Button onClick={openSheet}>Contact Sales</Button>
        </div>
      </header>
      <div className="relative w-full h-px border-t border-gray-300 border-dotted">
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
