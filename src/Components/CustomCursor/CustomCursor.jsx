import { useEffect } from "react";
import "./CustomCursor.css"
import { useState } from "react";
export default function CustomCursor() {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHoveringCustomLink, setIsHoveringCustomLink] = useState(false);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  
      const handleMouseEnterCustomLink = () => setIsHoveringCustomLink(true);
      const handleMouseLeaveCustomLink = () => setIsHoveringCustomLink(false);
  
      window.addEventListener('mousemove', handleMouseMove);
  
      // Attach event listeners only to links with the class 'custom-cursor-target'
      const customLinks = document.querySelectorAll('.custom-cursor-target');
      customLinks.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnterCustomLink);
        link.addEventListener('mouseleave', handleMouseLeaveCustomLink);
      });
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        customLinks.forEach(link => {
          link.removeEventListener('mouseenter', handleMouseEnterCustomLink);
          link.removeEventListener('mouseleave', handleMouseLeaveCustomLink);
        });
      };
    }, []);


  return (
    <div
      className={`custom-cursor ${isHoveringCustomLink ? 'show' : ''}`}
      style={{ 
        left: `${cursorPosition.x}px`, 
        top: `${cursorPosition.y}px` 
      }}
    >
      {isHoveringCustomLink ?
      <p>See more</p> : ''}
    </div>
  )
}
