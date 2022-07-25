import { SliceZone } from "@prismicio/react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { GiCurledLeaf } from "react-icons/gi";
import { createClient } from "../prismicio";
import { components } from "../slices";
import styles from "../styles/Page.module.css";

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "retreats");

  // Pass the homepage as prop to our page.
  return {
    props: { title: "| Retreats", description: "Retreats page", page },
  };
}

export default function Retreats({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Image
          layout="fill"
          src={"/images/compressed/meadow.jpg"}
          alt={
            "Green grassy meadow and several buildings on a hill overlooking the sea"
          }
          className={styles.banner_image_justify_left}
          priority
        />
      </div>
      <div className={styles.content_title}>
        <h1>Wellness Retreats</h1>
        <hr className={styles.hr} />
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}
