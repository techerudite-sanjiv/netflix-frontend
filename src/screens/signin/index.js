import React, { useEffect, useState } from 'react'
import cn from "classnames"
import styles from "./login.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import HomePage from '../Home'
import home_image from "../../assets/home_image_netflix.jpg";
import logo from "../../assets/netflix_logo.png";
import { indexPattern } from '../../routes'

const Login = () => {
    const navigate=useNavigate();
    const location = useLocation().pathname;
    

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []); 

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
      <>
      {screenWidth<768 ?null :  <div className={cn(styles["login_background_image"])}>
          <img src={home_image} alt="" />
        </div>}

        <div className={cn(styles["netflix_sign_logo"])}>
               <img src={logo} alt=""  onClick={()=>navigate(indexPattern)} className="ps-5"/>
            </div>

        <div className={cn(styles["login-form"])}>
      
            <form onSubmit={handleSubmit}>
                <div className={cn(styles["form-group"])}>
                    <h2>Sign In</h2>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                </div>
                <br />
                <div className={cn(styles["form-group"])}>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                    <br /> <br />
                    <button type="submit">Login</button>
                </div>

                <div className={cn(styles["form-group"])}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <label className={cn(styles["custom-checkbox"])}>
                                Remember me
                                <input type="checkbox" />
                                <span className={cn(styles["checkmark"])}></span>
                            </label>
                        </div>
                        <div>
                            <Link className={cn(styles["need_help"])}>Need Help?</Link>
                        </div>
                    </div>
                </div>

            </form>
            <div className={cn(styles["login_base_content"])}>
                <div className='mb-2'>
                    <span>New to Netflix? </span>
                    <Link className={cn(styles["sign_up"])} to="/" >Sign up now.</Link>
                </div>
                <div>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link> Learn more.</Link>
                </div>
            </div>
        </div>
      </>
    )
}

export default Login