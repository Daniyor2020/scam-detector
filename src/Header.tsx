import React from "react";

interface HeaderProps {
  handleImageRemove: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleImageRemove }) => {
  return (
    <div className='header-container'>
      <h3 className=''>AI Scam Detector</h3>

      <button
        aria-label='Close'
        // className='text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800'
        onClick={() => {
          try {
            if (handleImageRemove) {
              handleImageRemove();
            } else {
              console.error("handleImageRemove is not defined");
            }
          } catch (error) {
            console.error("Error during handleImageRemove:", error);
          }
        }}
      >
        &#x2715;
      </button>
    </div>
  );
};

export default Header;
