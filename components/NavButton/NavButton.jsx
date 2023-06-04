import Link from "next/link";
import styles from "./NavButton.module.css";

const NavButton = ({ href, children }) => {
  return (
    <button className={styles.button} aria-label={`Link to page: ${href}`}>
      <Link href={href} className={styles.nav_link}>
        <a className={styles.nav_anchor}>{children}</a>
      </Link>
    </button>
  );
};

export default NavButton;
