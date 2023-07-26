import React from "react";
import cn from "classnames";
import styles from "./home.module.css";
import CustomButton from "../../components/customButton";
import logo from "../../assets/netflix_logo.png";
import home_image from "../../assets/home_image_netflix.jpg";
import Teaser from "../main";
import Card from "../../components/card";
import Border from "../../components/border";
import Footer from "../../components/footer";
import RightArrow from "../../components/RightArrow";


const HomePage = () => {

  const handleSubmit = () => {

  }

  return (
    <>
      <div>
        <div className={cn(styles["navbar_attach_image"])}>
          <img src={home_image} alt="" />
        </div>

        <div className={cn(styles["home_banner"],"")}>
          <div className={cn(styles["banner_content"],"")}>
            <div className={cn(styles["netflix_logo"])}>
              <img src={logo} alt="" />
            </div>
            <div className={cn(styles["banner_text"])}>
              <div className="me-2">
                <select className="form-select form-select-md border-0" aria-label="Default select example">
                  <option selected>English</option>
                  <option value="1">Hindi</option>
                </select>
              </div>
              <CustomButton label={"Sign in"} backcolor={"red"} color={"#fff"} />
            </div>
          </div>

          <div className={cn(styles["navbar_text_content"])}>
           <div className={cn(styles["highlight_text"])}>
           <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
           </div>

            <form onSubmit={handleSubmit} className={cn(styles["login_form"])}>
              <div className={cn(styles["home_form_box"])}>
                <input type="email" name="" placeholder="Email Address" />
                <button>Get Started  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Border/>

      <Card/>
    
    <Footer/>

    </>
  );
};

export default HomePage;
