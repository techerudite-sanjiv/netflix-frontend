import React from "react";
import cn from "classnames";
import styles from "./home.module.css";
import Card from "../../components/card";
import Border from "../../components/border";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import home_image from "../../assets/home_image_netflix.jpg";



const HomePage = ({ }) => {


  return (
    <>
      <div>
        <div className={cn(styles["navbar_attach_image"])}>
          <img src={home_image} alt="" />
        </div>
      </div>
      <Navbar />
      <Border />
      <Card />
      <Footer />

    </>
  );
};

export default HomePage;
