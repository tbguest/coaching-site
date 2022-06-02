import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Coaching() {
  return (
    <div className={styles.coaching_container}>
      <>
        <h1>Synergy Coaching and Wellness</h1>
        <p>
          Coaching occurs through transformative conversation that inspires you
          to live a meaningful life and embrace your potential.
        </p>
        <p>
          I am committed to being fully present and having impactful
          converations with you.
        </p>
        <p>
          When you meet my intentions with your own intentions, our coversation
          will harness the synergy between us to create momentum in your life.
        </p>
        <p>
          You will envision your highest aspirations, enhance your
          self-awareness, discover sources for resiliency and strength, align
          with your deepest values, and gain perspectives that liberate you.
        </p>
        <p>
          Integrating these aspects of yourself generates synergy, empowering
          your transformation so you can create the life you want.
        </p>
        <Image
          width={960}
          height={1280}
          src={"/butterfly.jpg"}
          alt={"Butterfly atop a flower"}
          className={styles.image}
        />
      </>
    </div>
  );
}
