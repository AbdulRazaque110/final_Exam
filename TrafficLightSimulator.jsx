import React, { useState } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red'); // state added but not yet used

  const lightStyle = (color) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '15px 0',
    backgroundColor: color,
    opacity: activeLight === color ? 1 : 0.3, // dynamic style based on state
    transition: 'all 0.3s ease-in-out',
  });

  const containerStyle = {
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '140px',
  };

  return (
    <div style={containerStyle}>
      <div style={lightStyle('red')}></div>
      <div style={lightStyle('yellow')}></div>
      <div style={lightStyle('green')}></div>
    </div>
  );
};

export default TrafficLightSimulator;
