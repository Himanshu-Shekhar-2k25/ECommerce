import react, { useEffect } from 'react'
import reactDom from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import Products from './Products'

function Header() {
    return <div className='header'>
        <img src="https://cdn-icons-png.flaticon.com/512/4437/4437635.png" style={{ height: "50px", margin: "0px" }} />
        &nbsp;The Mega Mart - Your one stop destination for everything fashionable
    </div>
}

function Landing_Page() {

    const navigate = useNavigate();
    const Go_To_Product_Page = () => {
        navigate('/Product');
    }

    return (
        <div className="container">
            <div className="item1">
                <img style={{ marginLeft: "40px" }} src="https://www.pngkey.com/png/full/302-3027807_online-shopping.png" />
            </div>
            <div className="item2">
                <div className="wrapper">
                    <div className="title">
                        🛍️ Login Here
                    </div>

                    <div>
                        <div className='form'>
                            <div className="field">
                                <input type="text" name='Username' required autoComplete='off' />
                                <label>Username</label>
                            </div>
                            <div className="field">
                                <input type="text" name='email_phone' required autoComplete='off' />
                                <label>Email Id / Phone</label>
                            </div>
                            <div className="field">
                                <input type="password" name='password' required autoComplete='off' />
                                <label>Password</label>
                            </div>
                            <div className="content">
                                <div className="checkbox">
                                    <input type="checkbox" id="remember-me" />
                                    <label for="remember-me">Remember me</label>
                                </div>
                                <div className="pass-link">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>
                            <div className="field">
                                <input type="submit" value="Login" onClick={Go_To_Product_Page}></input>
                            </div>
                            <div className="signup-link">
                                Not a member? <a href="/CreateAccount">Signup now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function CreateAcc() {

    const navigate = useNavigate();
    const Go_To_Product_Page = () => {
        navigate('/Product');
    }

    return <div className="container">
        <div className="item1">
            <img style={{ marginLeft: "40px" }} src="https://www.pngkey.com/png/full/302-3027807_online-shopping.png" />
        </div>
        <div className="item2"><div className="wrapper">
            <div className="title">
                🛍️ Create Account
            </div>

            <div className='form'>
                <div className="field">
                    <input type="text" name='Username' required autoComplete='off' />
                    <label>Username</label>
                </div>
                <div className="field">
                    <input type="text" name='email_phone' required autoComplete='off' />
                    <label>Email Id / Phone</label>
                </div>
                <div className="field">
                    <input type="text" name='text' required autoComplete='off' />
                    <label>Enter Password</label>
                </div>
                <div className="field">
                    <input type="password" name='password' required autoComplete='off' />
                    <label>Confirm Password</label>
                </div>
                <div className="field">
                    <input type="submit" value="Sign Up" onClick={Go_To_Product_Page}></input>
                </div>
            </div>
        </div></div>
    </div>
}



function Product_Navbar() {

    return (<div style={{ margin: "0" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/4437/4437635.png" style={{ height: "50px", margin: "0px" }} />
                &nbsp;Mega Mart
            </a>
            <span className="form-inline  ">
                <input className="form-control mr-sm-2" type="search" placeholder="Search. . ." aria-label="Search" />
            </span>
            <div className="dropdown">
                <button className="dropbtn">Choose Product Category ⬇️</button>
                <div className="dropdown-content">
                    <a href="/Electronics">Electronics</a>
                    <a href="/Jewellery">Jewellery</a>
                    <a href="/Mens_clothing">Men's clothing</a>
                    <a href="/Womens_clothing">Women's clothing</a>
                </div>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"></div>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Product"><span className="material-symbols-outlined">
                            home
                        </span> Home <span className='sr-only material-symbols-outlined'></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Product"><span className="material-symbols-outlined">
                            ads_click
                        </span> About <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Product"><span className="material-symbols-outlined">
                            sell
                        </span> Deals <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Product"><span className="material-symbols-outlined">
                            shopping_cart
                        </span> Cart <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Product"><span className="material-symbols-outlined">
                            account_circle
                        </span> Welcome<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <span className="material-symbols-outlined">
                                logout
                            </span> Logout
                            <span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>)
}

function SlideShow() {
    return;
}


function Product_All(props) {
    const url = props.url
    const [data, setData] = react.useState([]);
    const fetchAPIdata = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.length > 0)
            {
                setData(data);
            }
        } catch (error) {
            console.log("Error");
        }
    };
    useEffect(() => {
        fetchAPIdata(url)
    },[]);
    
    return ( <div>
        {data.map(item => (
          <Products key={item.id} title={item.title} price = {item.price} description = {item.description} category = {item.category} image = {item.image} rating = {item.rating.rate} count = {item.rating.count}/>
        ))}
      </div>);
}
export default Header;
export { Landing_Page, CreateAcc, Product_Navbar, SlideShow ,Product_All};