function Button({ btnText, className, children, onClick, type='button' }) {
    return (
      <button type={type} className={className} onClick={onClick}>
        {children}
        <span className="ml-2">{btnText}</span> 
      </button>
    );
  }
  
  export default Button;
  