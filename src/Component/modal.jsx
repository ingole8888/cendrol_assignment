const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div>
        <div style={{ width:"50%",margin:"auto",
         marginTop:"-45%", backgroundColor:"#284B59", marginLeft:"22%",
         position:"absolute",padding:"20px",borderRadius:"20px"}}>
          <button  onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal