function Success() {
    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#d4edda", // Light green background for success
      fontFamily: "Arial, sans-serif",
    };
  
    const messageStyle = {
      fontSize: "36px",
      color: "#155724", // Dark green text color for contrast
      fontWeight: "bold",
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={messageStyle}>Login Successful</h1>
      </div>
    );
  }
  
  export default Success;
  