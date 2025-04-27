function Button({ btnText, className, children }) {
    return (
      <button className={className}>
        {children}
        <span className="ml-2">{btnText}</span> 
      </button>
    );
  }
  
  export default Button;
  