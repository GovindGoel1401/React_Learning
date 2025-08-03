function Card(props){
    return(
        <>
        
        <div className="card" style={{border:"2px solid black", padding:"2px "}}>
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/687093/01/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt" height="200px" width="200px"/>
            <div  style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>{props.price}</h2>
                <h2>SHop Now</h2>
            </div>
        </div>
        </>
    )

}

export default Card;