function Fail() {
    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8d7da", // Light red background for failure
      fontFamily: "Arial, sans-serif",
    };
  
    const messageStyle = {
      fontSize: "36px",
      color: "#721c24", // Dark red text color for contrast
      fontWeight: "bold",
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={messageStyle}>Login Failed</h1>
      </div>
    );
  }
  
  export default Fail;
  