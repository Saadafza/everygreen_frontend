function Mangement(){
    return(
        <>
       
          <div className="main-container">
            <h3 className="ever mt-2">EverGreen Solutions</h3>
            <div className="admin">
              <p className="text-danger">System Admin</p>
              <h5 style={{ lineHeight: "0.4",textAlign:"center" }}>Logout</h5>
            </div>
          </div>
          <div className="conatiner create-account">
            <button>Create System Account </button>
            <button >Create Manager Account </button>
          </div>
      
      </>
    );
  }
export default Mangement;