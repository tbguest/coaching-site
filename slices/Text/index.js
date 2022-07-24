import { PrismicText, PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from "./Text.module.css";

const Text = ({ slice }) => {
  console.log(slice);
  return (
    <section className={styles.container}>
      <span className={styles.text}>
        <PrismicRichText field={slice.primary.text} />
      </span>
    </section>
  );
};

export default Text;
