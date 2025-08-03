function Header(){
    return(
        <>
        <div className='heading' >
        <img className="images" src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" height="70px" width="70"/>
        <div className='option'>
            <button className='but'>Men</button>
            <button className='but'>Women</button>
            <button className='but'>Kids</button>
            <button className='but'>Home and Living</button>
            <button className='but'>Beauty</button>
            <button className='but'>Studio</button>
        </div>
        <input className="search" type="text" placeholder='Search for products brands and more'></input>
        <div className='Profile'>
            <button className='pro'>Profile</button>
            <button className='pro'>Wishlist</button>
            <button className='pro'>Bag</button>
        </div>
        </div>
        {/* <button className="next-line-btn" id="price">Price</button> */}
        </>
    )

}

export default Header;