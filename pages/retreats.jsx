import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import { createClient, imageLoader } from "../prismicio";
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
          loader={imageLoader}
          layout="fill"
          src={page.data.bannerImage.url}
          alt={page.data.bannerImage.alt}
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
