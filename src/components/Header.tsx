import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/summary", label: "Summary" },
  { path: "/compute", label: "Compute" },
  { path: "/storage", label: "Storage" },
  { path: "/web-apps", label: "Web Apps" },
  { path: "/networks", label: "Networks" },
  { path: "/providers", label: "Providers" },
];

const Header = () => {
  return (
    <div className="relative">
      <nav aria-label="Main navigation" className="flex justify-evenly items-end min-h-10">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-400 underline mr-20"
                : "font-semibold text-gray-400 hover:text-blue-400 mr-20"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <hr className="mt-2" />
    </div>
  );
};

export default Header;
