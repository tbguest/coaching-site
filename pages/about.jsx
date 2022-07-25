import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import classNames from "classnames";
import Image from "next/image";
import { createClient, imageLoader } from "../prismicio";
import { components } from "../slices";
import styles from "../styles/Page.module.css";

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "about");

  // Pass the homepage as prop to our page.
  return {
    props: { title: "| About", description: "About page", page },
  };
}

export default function About({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Image
          loader={imageLoader}
          layout="fill"
          src={page.data.bannerImage.url}
          alt={page.data.bannerImage.alt}
          className={styles.banner_image_justify_center}
          priority
        />
      </div>
      <div className={styles.content_container}>
        <div className={styles.content_title}>
          <h1>
            <PrismicText field={page.data.title} />
          </h1>
          <hr className={styles.hr} />
        </div>
        <section className={styles.page_content}>
          <PrismicRichText field={page.data.contentMain} />
        </section>
        <div className={styles.page_grid}>
          <div className={styles.image}>
            <Image
              loader={imageLoader}
              width={page.data.image.dimensions.width}
              height={page.data.image.dimensions.height}
              src={page.data.image.url}
              alt={page.data.image.alt}
              className={styles.image}
            />
          </div>
          <div className={styles.page_grid_text}>
            <div className={styles.fixed_layout}>
              <p>The values that guide my life</p>
              <p className={styles.stylized}>Vitality</p>
              <p className={classNames(styles.inset1, styles.stylized)}>
                Connection
              </p>
              <p className={classNames(styles.inset2, styles.stylized)}>
                Growth
              </p>
              <p className={classNames(styles.inset3, styles.stylized)}>
                Creativity
              </p>
              <p className={classNames(styles.inset4, styles.stylized)}>
                Living in harmony with Nature
              </p>
            </div>
          </div>
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
