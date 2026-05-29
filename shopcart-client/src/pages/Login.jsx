import React, { useState } from 'react';
import styles from './Login.module.css';
import shopcart_logo from '../assets/shop_cart_login.png';
import { useNavigate } from "react-router-dom";
import shopCartClientAPI from '../services/api.jsx';
import { successAlert, errorAlert } from '../services/notifications.jsx';
import {
  Mail,
  Lock,
  Eye,
  ShieldCheck,
  Truck,
  BadgePercent,
  ArrowRight
} from 'lucide-react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const loginData = { email, password };
    await shopCartClientAPI.post('/auth/login', loginData)
      .then((response) => {
        localStorage.setItem('access-token', response.data.token);
        successAlert("login successfull!")
      })
      .catch(error => {
        errorAlert(error.response.data.message)

      })
    setEmail('');
    setPassword('');

  }

  const handleNavigate = () => {
    navigate('/register')
  }
  return (
    <div className={styles.loginPage}>

      {/* Background Effects */}
      <div className={`${styles.blueBlur} ${styles.blur1}`}></div>

      <div className={`${styles.blueBlur} ${styles.blur2}`}></div>

      <div className={styles.loginContainer}>

        {/* LEFT PANEL */}
        <div className={styles.leftPanel}>

          {/* Logo */}
          <div className={styles.logoContainer}>

            <img
              src={shopcart_logo}
              alt="ShopCart Logo"
              className={styles.shopcartLogo}
            />

          </div>

          {/* Circle */}
          <div className={styles.cartCircle}>

            <div className={styles.circleGlow}></div>

            <img
              src={shopcart_logo}
              alt="ShopCart"
              className={styles.cartImage}
            />

          </div>

          {/* Welcome */}
          <div className={styles.welcomeContent}>

            <h1>
              Welcome <span>Back!</span>
            </h1>

            <p>
              Login to continue your shopping journey
              and discover amazing deals.
            </p>

          </div>

          {/* Feature Cards */}
          <div className={styles.featureCards}>

            <div className={styles.featureCard}>

              <ShieldCheck size={34} />

              <h3>Secure</h3>

              <p>Your data is always protected</p>

            </div>

            <div className={styles.featureCard}>

              <Truck size={34} />

              <h3>Fast Delivery</h3>

              <p>Get products delivered fast</p>

            </div>

            <div className={styles.featureCard}>

              <BadgePercent size={34} />

              <h3>Best Deals</h3>

              <p>Exclusive offers just for you</p>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className={styles.rightPanel}>

          {/* Header */}
          <div className={styles.loginHeader}>

            <img
              src={shopcart_logo}
              alt="ShopCart"
              className={styles.rightLogo}
            />

            <h2>Sign in to your account</h2>

          </div>

          {/* Form */}
          <form className={styles.loginForm} onSubmit={(e) => handleSubmit(e, email, password)}>

            {/* Email */}
            <div className={styles.inputGroup}>

              <label>Email Address</label>

              <div className={styles.inputBox}>

                <Mail size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>

            {/* Password */}
            <div className={styles.inputGroup}>

              <label>Password</label>

              <div className={styles.inputBox}>

                <Lock size={20} />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Eye
                  size={20}
                  className={styles.eyeIcon}
                />

              </div>

            </div>

            {/* Forgot Password */}
            <div className={styles.forgotPassword}>

              <span>Forgot Password?</span>

            </div>

            {/* Login Button */}
            <button className={styles.loginButton}>

              Login

              <ArrowRight size={20} />

            </button>

            {/* Divider */}
            <div className={styles.divider}>

              <span>or continue with</span>

            </div>

            {/* Google Button */}


          </form>
          <button className={styles.googleButton} onClick={handleNavigate}>


            New User ? Register Now

          </button>

          {/* Signup */}
          <div className={styles.signupText}>

            Don&apos;t have an account?

            <span> Sign up</span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;

