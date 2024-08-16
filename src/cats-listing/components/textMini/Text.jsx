import React from "react"

const Text = ({ text, limit, className }) => {
    if (text?.length <= limit) {
      return <p className={`${className}`}>{text}</p>;
    }
    
    // Agar text length limit se zyada hai, to substring ka istemal karenge
    const limitedText = `${text?.substring(0, limit)}...`;
  
    return <p className={`${className}`}>{limitedText}</p>;
  };

  export default Text