function Button({btnText, bgColor}){
    return(
        <>
            <button className={`${bgColor}`}>
                {btnText}
            </button>
        </>
    )
}

export default Button