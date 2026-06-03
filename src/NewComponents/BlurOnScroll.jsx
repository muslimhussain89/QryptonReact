import React, { useEffect, useRef, useState, useMemo } from "react";

const MAX_BLUR = 4;

const BlurOnScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [blurValues, setBlurValues] = useState([]);

  // 1. Logic to preserve colors by mapping words to their original styles
  const wordStyles = useMemo(() => {
    const styles = [];
    const processNode = (node) => {
      if (typeof node === "string") {
        node.split(/\s+/).filter(Boolean).forEach(word => styles.push({ word, color: "inherit" }));
      } else if (Array.isArray(node)) {
        node.forEach(processNode);
      } else if (node?.props) {
        const color = node.props.style?.color || (node.props.className?.includes('text-red') ? 'red' : 'inherit');
        const text = extractText(node.props.children);
        text.split(/\s+/).filter(Boolean).forEach(word => styles.push({ word, color }));
      }
    };
    
    const extractText = (n) => {
      if (typeof n === "string") return n;
      if (Array.isArray(n)) return n.map(extractText).join("");
      if (n?.props?.children) return extractText(n.props.children);
      return "";
    };

    processNode(children.props.children);
    return styles;
  }, [children]);

  const text = wordStyles.map(s => s.word).join(" ");

  const calculateLines = () => {
    if (!containerRef.current || !text) return;
    const container = containerRef.current;
    const computed = getComputedStyle(container);
    const clone = document.createElement("div");
    
    clone.style.width = `${container.clientWidth}px`;
    clone.style.font = computed.font;
    clone.style.lineHeight = computed.lineHeight;
    clone.style.letterSpacing = computed.letterSpacing;
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.whiteSpace = "normal";
    document.body.appendChild(clone);

    const lineGroups = [];
    let currentLine = [];
    let lastTop = null;

    wordStyles.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item.word + " ";
      clone.appendChild(span);

      if (lastTop !== null && span.offsetTop > lastTop + 5) {
        lineGroups.push(currentLine);
        currentLine = [];
      }
      currentLine.push(item);
      lastTop = span.offsetTop;
    });

    if (currentLine.length) lineGroups.push(currentLine);
    document.body.removeChild(clone);
    setLines(lineGroups);
    setBlurValues(new Array(lineGroups.length).fill(MAX_BLUR));
  };

  useEffect(() => {
    calculateLines();
    window.addEventListener("resize", calculateLines);
    return () => window.removeEventListener("resize", calculateLines);
  }, [text]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || lines.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const readyPoint = vh * 0.7;
      const lineHeight = parseFloat(getComputedStyle(containerRef.current).lineHeight) || 30;

      setBlurValues(lines.map((_, i) => {
        const lineTop = rect.top + i * lineHeight;
        if (lineTop >= vh) return MAX_BLUR;
        if (lineTop <= readyPoint) return 0;
        return MAX_BLUR * (1 - (vh - lineTop) / (vh - readyPoint));
      }));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lines]);

  const Tag = children.type;

  return (
    <Tag ref={containerRef} className={children.props.className} >
      {lines.map((line, i) => (
        <span key={i} style={{
          display: "inline",
          filter: `blur(${blurValues[i]}px)`,
          transition: "filter 0.3s ease-out"
        }}>
          <span style={{ 
            display: "inline-block", 
            transform: `scale(${1 + (blurValues[i] / MAX_BLUR) * 0.1})`,
            transformOrigin: "left center",
            whiteSpace: "nowrap"
          }}>
            {line.map((item, idx) => (
              <span key={idx} style={{ color: item.color }}>{item.word} </span>
            ))}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default BlurOnScroll;