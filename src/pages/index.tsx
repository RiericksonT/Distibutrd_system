import Slider from "@/components/display/slider";
import Head from "@/components/infra/head";
import Header from "@/patterns/header/header";
import styles from "./index.module.scss";
import { AppProps } from "next/app";
import Link from "next/link";
import { link } from "fs";

const user = {
    "name": "Rierickson", "icon": "/profile.jpg", "level": 30, "rank": "Challenger"
}

export default function Home() {
    return (
        <>
            <div className={styles.header}>
                <Head title={"LolDéx"} />
                <Header profile={null} />
            </div>
            <div className={styles.sliderContainer}>
                <Slider />
            </div>
            <div className={styles.containerPhrase1}>
                <p className={styles.pStrong}>
                    Parks and recreation
                </p>
                <Link href={"/shop"} className={styles.link}><p >Shop now</p></Link>
            </div>
        </>
    );
}