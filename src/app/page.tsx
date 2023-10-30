import Head from "next/head";
import styles from "./page.module.css";
import { GetStaticProps } from "next";
import { client } from "../../contentful";

export default function Home({ title, home }: HomePageType) {
  return (
    <main className={styles.main}>
      123 {title}
      <div className={styles.description}>1234</div>
      <h1>{title}</h1>
    </main>
  );
}

interface HomePageType {
  title: string;
  home: string;
}
