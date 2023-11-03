import React from 'react'
import cn from "classnames";
import styles from './navbar.module.css'
import logo from "../../assets/netflix_logo.png";
import { useLocation, useNavigate } from 'react-router';
import { indexPattern, loginPattern } from '../../routes';
import CustomButton from '../customButton';import Select from 'react-select';

const Navbar = () => {
    const options = [
        { value: 'English', label: 'English' },
        { value: 'हिन्दी', label: 'हिन्दी' },
      ];
    const navigate = useNavigate()
    const location = useLocation().pathname

    const handleSubmit = () => {

    }

    return (
        <div>
            <div className={cn(styles["home_banner"], "")}>
                <div className={cn(styles["banner_content"], "")}>
                    <div className={cn(styles["netflix_logo"])}>
                        <img src={logo} alt="" onClick={() => navigate(indexPattern)} />
                    </div>
                    <div className={cn(styles["banner_text_box"], 'd-flex gap-1')}>
                        <div>
                            <Select
                                options={options}
                                styles={{
                                    control: (baseStyles) => ({
                                      ...baseStyles,
                                      border:"1px solid #fff",color:"#fff"
                                    }),
                                  }}
                            />
                        </div>
                        <div>
                            <button className={cn(styles["my-btn"])}  onClick={() => navigate(loginPattern)} >Sign in</button>
                        </div>
                    </div>
                </div>

                {location === "/" && <div className={cn(styles["navbar_text_content"])}>
                    <div className={cn(styles["highlight_text"])}>
                        <h1>Unlimited movies, TV shows and more</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>

                    <form onSubmit={handleSubmit} className={cn(styles["login_form"])}>
                        <div className={cn(styles["home_form_box"],"d-flex justify-content-center gap-1")}>
                            <input type="email" name="" placeholder="Email Address" />
                           <CustomButton label="Get Started" color="#fff" backcolor="red" padding={"12px 10px"}/>
                        </div>
                    </form>
                </div>}
            </div>
        </div>
    )
}

export default Navbar