import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient, imageLoader } from "../../prismicio";
import { components } from "../../slices";
import styles from "../../styles/Page.module.css";
import Image from "next/image";

export default function Retreat({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.grid}>
          <section className={styles.content_main}>
            <div className={styles.headings}>
              <h1>{page.data.title}</h1>
              <h2>{page.data.subtitle}</h2>
              <h3>{page.data.dates}</h3>
              {/* <hr className={styles.hr} /> */}
            </div>
            <PrismicRichText field={page.data.contentMain} />
          </section>
          <div className={styles.aside_wrapper}>
            <aside className={styles.aside}>
              <Image
                loader={imageLoader}
                width={page.data.image.dimensions.width}
                height={page.data.image.dimensions.height}
                src={page.data.image.url}
                alt={page.data.image.alt}
                className={styles.image}
              />
              <em className={styles.italics}>
                <PrismicRichText field={page.data.contentAside} />
              </em>
            </aside>
          </div>
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function getStaticProps(context) {
  const client = createClient();

  // Page document from the CMS.
  // const uid = context.params.path?.[context.params.path?.length - 1] || {};
  const uid = context.params.path;
  const page = await client.getByUID("retreat-page", uid);

  return {
    props: { title: `| ${uid}`, description: "Retreats page", page },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  // Page documents from the CMS.
  const pages = await client.getAllByType("retreat-page");

  const pp = pages.map((page) => ({
    params: {
      path: page.uid,
    },
  }));

  // URL paths for each Page document from the CMS.
  return {
    // paths: pages.map((page) => prismicH.asLink(page, retreatLinkResolver)),
    paths: pages.map((page) => ({
      params: {
        path: page.uid,
      },
    })),
    fallback: false,
  };
}
