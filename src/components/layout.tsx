import React from 'react';

const Layout = () => {
  const handleClick = (keyCode:number) => {
    // This function will be called when a key div is clicked
    // You can customize it to handle different key codes or actions
    console.log(`Key with code ${keyCode} clicked`);

    // Simulate a keyboard event
    const event = new KeyboardEvent('keydown', { keyCode, which: keyCode });
    document.dispatchEvent(event);
  };

  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        height: '1rem',
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        bottom: '4rem',
        color: 'white',
      }}
    >
      <div
        data-key="37"
        className="key--arrow"
        onClick={() => handleClick(37)}
      >
        <span>&#9664;</span>
      </div>
      <div
        className="key--double key--arrow--tall"
        data-key="38"
        onClick={() => handleClick(38)}
      >
        <div>&#9650;</div>
        <div>&#9660;</div>
      </div>
      <div
        data-key="39"
        className="key--arrow"
        onClick={() => handleClick(39)}
      >
        <span>&#9654;</span>
      </div>
    </div>
  );
};

export default Layout;
