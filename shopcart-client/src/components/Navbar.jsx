import React from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import shopcart_logo from "../assets/shopcart_logo.png";

const Navbar = () => {

    return(
        <div className={styles.navBarCon} >
         
         <div className={styles.shopocartLogo}> <img src={shopcart_logo} className={styles.logo}/></div>
          <input type="text"  className={styles.inputBar} placeholder="Search for products here! 🕵️‍♀️" />
          <nav className={styles.navCons}>
           <Link to="/products">Products</Link>
           <Link to="/cart">Cart</Link>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
          </nav>
        </div>
    )
}

export default Navbar;