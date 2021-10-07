import React from 'react'
import styles from "../styles/home.module.css"
import { HomeLeft } from './HomeLeft'
import { HomeMid } from './HomeMid'
import { HomeRight } from './HomeRight'
import { useSelector } from "react-redux";

export const Home = () => {
    const loading = useSelector(state => state.auth.isLoading);
    return <div className={styles.home_cont}>
        <HomeLeft />
        {!loading ?<HomeMid />:<div className={styles.spinner}></div>}
        <HomeRight />
    </div>
}