import React from "react";
import cn from "classnames";
import styles from "./card.module.css";
import tv from "../../assets/tv.png";
import vid1 from "../../assets/video-tv-in-0819.m4v";
import vid2 from "../../assets/video-devices-in.m4v";
import { cardArray } from "./cardArray";
import Border from "../border";

const Card = () => {
    return (
        <>
            <div className={cn(styles["card_box"])}>
                {
                    cardArray.map((item, index) => {
                        return (
                            <>
                                {index===0 || index==2?<div className="row py-5" key={item.title}>
                                    <div className="col-lg-7 col-md-12">
                                        <div className={cn(styles["card_text"])}>
                                            <h1>{item.title}</h1>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12" >
                                        <div className={cn(styles["card_image"])}>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </div>:<div className="row py-5" key={item.title}>
                                <div className="col-lg-5 col-md-12" >
                                        <div className={cn(styles["card_image"])}>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className={cn(styles["card_text"])}>
                                            <h1>{item.title}</h1>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                   
                                </div>}
                                <Border />
                                
                            </>
                        )
                    })
                }

            </div>

        </>
    );
};

export default Card;
