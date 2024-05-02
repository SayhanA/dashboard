import React, { useState, useRef, useEffect } from "react";
import { RxDotsVertical } from "react-icons/rx";

const Dropdown = ({ children }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-0 relative z-10 bg-white" ref={dropdownRef}>
      <button onClick={() => setIsDropdown((state) => !state)}>
        <RxDotsVertical />
      </button>
      <ul
        className={`w-[100px] absolute border right-0 rounded-md p-2 transition-all ${
          isDropdown ? "scale-100" : "scale-0"
        }`}
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
