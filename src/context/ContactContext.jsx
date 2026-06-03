import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [touchButtonClicked, setTouchButtonClicked] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const handleContactToggle = () => {
    setIsScrollDisabled((prev) => !prev);
    setActiveContact((prev) => !prev);
    setTouchButtonClicked(true);
  };

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isScrollDisabled]);

  return (
    <ContactContext.Provider
      value={{
        touchButtonClicked,
        activeContact,
        isScrollDisabled,
        handleContactToggle,
        setActiveContact,
        setTouchButtonClicked,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
