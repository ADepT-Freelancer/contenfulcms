import { GetStaticProps, Metadata } from "next";
import styles from "./page.module.css";
import { client } from "../contentful/index";
import Head from "next/head";
import { IHomeFields, IHome } from "../contentful";

export default function HomePage({ home }: { home: IHome }) {
  console.log(home);
  console.log("Title", home.fields.title);
  console.log(
    "description",
    home.fields.description.content[0].content[0].value
  );
  console.log("fields", home.fields);
  return (
    <>
      <Head>
        <title>{home.fields.title}</title>
      </Head>

      <main className={styles.main}>
        Title: {home.fields.title}
        <div className={styles.description}>
          Description: {home.fields.description.content[0].content[0].value}
        </div>
        <h1></h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IHomeFields>({
    content_type: "home",
    limit: 15,
  });

  const [homePage] = home.items;
  return {
    props: {
      title: "Apricus IT",
      home: homePage,
    },
  };
};

// interface HomePageType {
//   home: {
//     fields: {
//       description: {
//         content: [
//           {
//             content: [
//               {
//                 value: string;
//               },
//             ];
//           },
//         ];
//       };
//       title: string;
//     };
//   };
// }
