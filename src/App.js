import React from "react";
import reactDom from 'react-dom'
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Header, { Landing_Page , CreateAcc, Product_Navbar, Product_All, SlideShow} from './Components.js';

function App()
{
    return (<BrowserRouter>
        <Routes>

        <Route path='/' element={<div className="headerContainer"><Header/><Landing_Page/></div>}/>
        <Route path='/CreateAccount' element={<div><Header/><CreateAcc/></div>}/>

        <Route path='/Product' element={<div><Product_Navbar/><Product_All url={'https://fakestoreapi.com/products'}/></div>}/>

        <Route path='/Electronics' element={<div><Product_Navbar/><Product_All url={'https://fakestoreapi.com/products/category/electronics'}/></div>}/>

        <Route path='/Jewellery' element={<div><Product_Navbar/><Product_All url = {'https://fakestoreapi.com/products/category/jewelery'}/></div>}/>

        <Route path='/Mens_clothing' element={<div><Product_Navbar/><Product_All url = {"https://fakestoreapi.com/products/category/men's%20clothing"}/></div>}/>

        <Route path='/Womens_clothing' element={<div><Product_Navbar/><Product_All url = {"https://fakestoreapi.com/products/category/women's%20clothing"}/></div>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default App;

        