import styles from "./Splash.module.css";
import { NavButton } from "../NavButton";
import Image from "next/image";
import { imageLoader } from "../../prismicio";

const Splash = ({ page }) => {
  return (
    <div className={styles.splash_container}>
      <Image
        loader={imageLoader}
        layout="fill"
        src={page.data.bannerImage.url}
        alt={page.data.bannerImage.alt}
        className={styles.banner_image}
        priority
      />
      <div className={styles.action_items}>
        <NavButton href="/retreats">Explore retreats</NavButton>
      </div>
    </div>
  );
};

export default Splash;
