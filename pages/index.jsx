import { PrismicRichText, SliceZone } from "@prismicio/react";
import { Splash } from "../components/Splash";
import { createClient } from "../prismicio";
import { components } from "../slices";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("home-page", "home");

  // Pass the homepage as prop to our page.
  return {
    props: {
      title: "",
      description:
        "Wild Ocean Coaching and Retreats: Professional coaching services and wellness retreats",
      page,
    },
  };
}

export default function Home({ page }) {
  return (
    <div className={styles.container}>
      <Splash page={page} />
      <div className={styles.content_container}>
        <div className={styles.welcome_content}>
          <h1>{page.data.title}</h1>
          <hr className={styles.hr} />
          <PrismicRichText field={page.data.contentMain} />
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}
