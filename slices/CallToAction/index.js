import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./CallToAction.module.css";
import { NavButton } from "../../components/NavButton";

const CallToAction = ({ slice }) => {
  return (
    <section className={styles.container}>
      <span>
        {slice.primary.description && (
          <PrismicRichText field={slice.primary.description} />
        )}
      </span>
      <NavButton href={`/${slice.primary.link.uid}`}>
        <PrismicRichText field={slice.primary.buttonText} />
      </NavButton>
    </section>
  );
};

export default CallToAction;
