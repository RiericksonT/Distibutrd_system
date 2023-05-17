import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";

type ProfileT = {
    name: string;
    icon: string;
    level: number;
    rank: string;
}

export default function Header({ profile }: { profile: ProfileT } | { profile: null }) {
    return (
        <header>
            <div className={styles.links}>
                <ul className={styles.link}>
                    <li><Link href="/new_arrivals">New Arrivals</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/us">About us</Link></li>
                </ul>
                <Image src={"/logo.svg"} alt="Logo" width={200} height={200} />
                <div className={styles.profile}>
                    <ul className={styles.links2}>
                        <input type="text" placeholder="Search" className={styles.search} />
                        <li><Link href={"/bag"}>Bag <Image src={"/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg"} alt={"logo"} width={25} height={25} /></Link> </li>
                    </ul>
                    {
                        profile! ?
                            <>
                                <div className={styles.profileIcon}>
                                    <Image src={profile.icon} alt="Profile Icon" width={50} height={50} className={styles.icone} />
                                </div>
                                <div className={styles.profileInfo}>
                                    <p>{profile.name} - {profile.level}</p>
                                </div>
                            </>
                            :
                            <div className={styles.notlogged}>
                                <button className={styles.buttonLoggin}>Entrar</button>
                            </div>
                    }
                </div>
            </div>
        </header>
    );
}