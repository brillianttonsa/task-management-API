function Image({src, width, height, alt}){
    return(
        <>
            <img src={src} alt={alt} width={width} height={height} />
        </>
    )
}

export default Image;