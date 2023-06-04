import { PrismicRichText, SliceZone } from "@prismicio/react";
import Image from "next/image";
import { createClient, imageLoader } from "../prismicio";
import { components } from "../slices";
import styles from "../styles/Page.module.css";

export async function getStaticProps() {
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID(
    "retreats-home-page",
    "retreats-home-page"
  );

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
      <div className={styles.content_container}>
        <div className={styles.content_title}>
          <h1>{page.data.title}</h1>
          <hr className={styles.hr} />
        </div>
        <section className={styles.page_content}>
          <PrismicRichText field={page.data.contentMain} />
        </section>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
