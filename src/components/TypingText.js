import React from "react";
import useTypewriter from "react-typewriter-hook";

function TypingText({ text }) {
  const typewriterText = useTypewriter(text);
  
  return (
    <span>{typewriterText}</span>
  );
}

export default TypingText;
