import { PrismicRichText, PrismicLink } from "@prismicio/react";
import styles from "./RetreatCards.module.css";
import Image from "next/image";
import { imageLoader } from "../../prismicio";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const RetreatCards = ({ slice }) => {
  return (
    <section className={styles.grid}>
      {slice.items.map((item) => (
        <div className={styles.card} key={item.title}>
          <div className={styles.image_wrapper}>
            <Image
              loader={imageLoader}
              width={250}
              height={250}
              layout="responsive"
              src={item.image.url}
              alt={item.image.alt}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <PrismicRichText field={item.description} />
            <span className={styles.link}>
              <Link href="/contact">
                <a>
                  Details
                  <TiArrowRight className={styles.icon} />
                </a>
              </Link>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RetreatCards;
