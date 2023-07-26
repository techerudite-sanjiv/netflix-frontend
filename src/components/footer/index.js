import React from 'react'
import cn from 'classnames'
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={cn(styles["footer_box"])}>
            <div className="row">
                <p>Questions? Call 000-800-919-1694</p>
                <div className={cn(styles["footer_text"], "col-md-3")}>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Media Centre</a></li>
                        <li><a href="">Ways to Watch</a></li>
                        <li><a href="">Cookie Preferences</a></li>
                        <li><a href="">Speed Test</a></li>
                    </ul>
                   
                </div>
                <div className={cn(styles["footer_text"], "col-md-3")}>
                    <ul>
                        <li><a href="">Help Centre</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Corporate Information</a></li>
                        <li><a href="">Legal Notices</a></li>
                    </ul>
                </div>
                <div className={cn(styles["footer_text"], "col-md-3")}>
                    <ul>
                        <li><a href="">Account</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Only on Netflix</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer