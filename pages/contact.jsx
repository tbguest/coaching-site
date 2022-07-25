import styles from "../styles/Page.module.css";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { createClient, imageLoader } from "../prismicio";

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();
  const page = await client.getByUID("page", "contact");

  return {
    props: { title: "| Contact", description: "Contact page", page },
  };
}

export default function Contact({ page }) {
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
      <div className={styles.content_title}>
        <h1>Contact</h1>
        <hr className={styles.hr} />
        <span className={styles.center}>
          <PrismicRichText field={page.data.contentMain} />
        </span>
      </div>
      <ContactForm />
    </div>
  );
}
