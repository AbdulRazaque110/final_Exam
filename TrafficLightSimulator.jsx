const TrafficLightSimulator = () => {
  const lightStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '15px 0',
    backgroundColor: '#555',
    opacity: 0.3,
  };

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
      <div style={{ ...lightStyle, backgroundColor: 'red' }}></div>
      <div style={{ ...lightStyle, backgroundColor: 'yellow' }}></div>
      <div style={{ ...lightStyle, backgroundColor: 'green' }}></div>
    </div>
  );
};

export default TrafficLightSimulator;
