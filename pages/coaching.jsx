import { PrismicRichText, SliceZone } from "@prismicio/react";
import Image from "next/image";
import { createClient, imageLoader } from "../prismicio";
import { components } from "../slices";
import styles from "../styles/Page.module.css";

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "coaching");

  // Pass the homepage as prop to our page.
  return {
    props: { title: "| Coaching", description: "Coaching page", page },
  };
}

export default function Coaching({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Image
          loader={imageLoader}
          layout="fill"
          src={page.data.bannerImage.url}
          alt={page.data.bannerImage.alt}
          className={styles.banner_image_justify_center_left}
          priority
        />
      </div>
      <div className={styles.content_container}>
        <div className={styles.content_title}>
          <h1>{page.data.title}</h1>
          <hr className={styles.hr} />
        </div>
        <div className={styles.content}>
          <section className={styles.content_text}>
            <PrismicRichText field={page.data.contentMain} />
          </section>
          <aside className={styles.content_image}>
            <Image
              loader={imageLoader}
              width={page.data.image.dimensions.width}
              height={page.data.image.dimensions.height}
              src={page.data.image.url}
              alt={page.data.image.alt}
              className={styles.image}
            />
            <PrismicRichText field={page.data.contentAside} />
          </aside>
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
