import React from "react";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
