
import React, { useState } from 'react';

import styles from './Register.module.css';

import shopcart_logo from '../assets/shop_cart_login.png';

import { useNavigate } from 'react-router-dom';

import shopCartClientAPI from '../services/api.jsx';
import { successAlert, errorAlert } from '../services/notifications.jsx';
import {
    User,
    Mail,
    Lock,
    Eye,
    ArrowRight,
    ShieldCheck,
    Truck,
    BadgeCheck,
    BadgePercent,
    Phone,
    MapPin
} from 'lucide-react';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [role, setRole] = useState('');

    const [isVerified, setIsVerified] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        const registerData = {
            name,
            email,
            password,
            role,
            isVerified
        };

        console.log(registerData);
        await shopCartClientAPI.post('/auth/register', registerData)
            .then((response) => {
                console.log(response.data);
                const registrationData = response.data.user_id;
                successAlert(`${response.data.message} : ${registrationData}`);
                setTimeout(() => {
                    navigate('/login');
                }, 5000);


            })
            .catch(error => errorAlert(error.response.data.message))

        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        setIsVerified(false);
    };

    const handleNavigate = () => {
        navigate('/login');
    };

    return (

        <div className={styles.registerPage}>

            {/* BACKGROUND BLURS */}
            <div className={`${styles.blur} ${styles.blur1}`}></div>

            <div className={`${styles.blur} ${styles.blur2}`}></div>

            {/* MAIN CONTAINER */}
            <div className={styles.registerContainer}>

                {/* LEFT SECTION */}
                <div className={styles.leftSection}>

                    {/* LOGO */}
                    <div className={styles.logoContainer}>

                        <img
                            src={shopcart_logo}
                            alt="ShopCart"
                            className={styles.logo}
                        />

                    </div>

                    {/* TITLE */}
                    <div className={styles.leftContent}>

                        <h1>
                            Start Your <span>Shopping Journey</span>
                        </h1>

                        <p>
                            Create your ShopCart account and unlock
                            premium products, secure payments,
                            fast delivery and exclusive offers.
                        </p>

                    </div>

                    {/* FEATURE CARDS */}
                    <div className={styles.cardsContainer}>

                        <div className={styles.infoCard}>

                            <ShieldCheck size={30} />

                            <h3>100% Secure</h3>

                            <p>
                                Enterprise-grade protection for all transactions.
                            </p>

                        </div>

                        <div className={styles.infoCard}>

                            <Truck size={30} />

                            <h3>Fast Delivery</h3>

                            <p>
                                Get your products delivered at lightning speed.
                            </p>

                        </div>

                        <div className={styles.infoCard}>

                            <BadgeCheck size={30} />

                            <h3>Verified Products</h3>

                            <p>
                                Shop genuine products with trusted sellers.
                            </p>

                        </div>

                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className={styles.rightSection}>

                    {/* HEADER */}
                    <div className={styles.formHeader}>

                        <h2>Create Account</h2>

                    </div>

                    {/* FORM */}
                    <form
                        className={styles.registerForm}
                        onSubmit={handleSubmit}>

                        {/* NAME ROW */}
                        <div className={styles.doubleInput}>

                            {/* FIRST NAME */}
                            <div className={styles.inputGroup}>

                                <label> Name</label>

                                <div className={styles.inputBox}>

                                    <User size={18} />

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </div>

                            </div>



                        </div>

                        {/* EMAIL */}
                        <div className={styles.inputGroup}>

                            <label>Email</label>

                            <div className={styles.inputBox}>

                                <Mail size={18} />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your  email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>

                        </div>


                        {/* PASSWORD */}
                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <div className={styles.inputBox}>
                                <Lock size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={styles.radioGroup}>

                            <label>Select Role</label>

                            <div className={styles.radioOptions}>

                                {/* USER */}
                                <label className={styles.radioCard}>

                                    <input
                                        type="radio"
                                        name="role"
                                        value="user"
                                        checked={role === 'user'}
                                        onChange={(e) => setRole(e.target.value)}
                                    />

                                    <span className={styles.customRadio}></span>

                                    <span className={styles.radioText}>
                                        User
                                    </span>

                                </label>

                                {/* ADMIN */}
                                <label className={styles.radioCard}>

                                    <input
                                        type="radio"
                                        name="role"
                                        value="admin"
                                        checked={role === 'admin'}
                                        onChange={(e) => setRole(e.target.value)}
                                    />

                                    <span className={styles.customRadio}></span>

                                    <span className={styles.radioText}>
                                        Admin
                                    </span>

                                </label>

                            </div>

                        </div>
                        {/* BUTTON */}
                        <button className={styles.registerButton}>
                            Create Account
                            <ArrowRight size={18} />
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;