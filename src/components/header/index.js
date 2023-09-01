import React from 'react'
import { useNavigate } from 'react-router';
import logo from "../../assets/netflix_logo.png";
import { indexPattern } from '../../routes';
import cn from "classnames"
import styles from "./header.module.css"
import SearchIcon from '../icon/SearchIcon';
import poster from "../../assets/fridayNight.webp"

const Header = () => {
    const navigate = useNavigate();


    return (
        <div className="header">
            <div className={cn(styles["anbc"])}>
                <img src={poster} alt="" />
            </div>
            <div className={cn(styles["netflix_header"],"")}>
                <nav className={cn(styles[""], "navbar navbar-expand-lg ")}>
                    <div className="container-fluid">
                        <div classNameName={cn(styles["netflix_sign_logo"])}>
                            <img src={logo} alt="" onClick={() => navigate(indexPattern)} width={130} />
                        </div>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className={cn(styles["header-list"], "collapse navbar-collapse")} id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-light" >
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Tv Shows</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">News & Popular</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">My List</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Browse by Language</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">

                            </form>
                        </div>
                    </div>
                </nav>



            </div>
        </div>
    )
}

export default Header