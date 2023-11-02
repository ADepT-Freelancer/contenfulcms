import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticProps } from "next";
import Head from "next/head";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  NavLink,
  Row,
} from "reactstrap";
import { IArticle, IArticleFields, IHome, IHomeFields } from "../contentful";
import { client } from "../contentful/index";
import styles from "./page.module.css";

export default function HomePage({
  home,
  articles,
}: {
  articles: IArticle[];
  home: IHome;
}) {
  console.log("home", home);
  console.log("Articles", articles);
  return (
    <>
      <Head>
        <title>{home.fields.title}</title>
      </Head>

      <main className={styles.main}>
        <h1 className="mt-5"> Title: {home.fields.title}</h1>
        <div
          className="text-center p-5 text-white"
          style={{
            background: `url("http:${home.fields.background?.fields.file.url}") no-repeat center / cover `,
            paddingLeft: "80%",
          }}
        >
          {home.fields.background.fields.title}
        </div>
        <div className={styles.description}>
          <div>
            Description 1: {home.fields.description.content[0].content[0].value}
          </div>
          <div>
            Description 2:{" "}
            {home.fields.description.content[0].content[0].value +
              home.fields.description.content[0].content[1].value}
          </div>{" "}
          <div className="mb-5">
            Description 3: {documentToReactComponents(home.fields.description)}
          </div>{" "}
        </div>

        <Container className="pt-5">
          <Row>
            {articles.map((article) => {
              return (
                <Col sm={4} key={article.fields.slug}>
                  <Card className="p-3 ">
                    <CardTitle tag="h5">{article.fields.title}</CardTitle>
                    <CardText>{article.fields.description}</CardText>
                    <NavLink href={`/articles/${article.fields.slug}`}>
                      <Button>{article.fields.actions}</Button>
                    </NavLink>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IHomeFields>({
    content_type: "home",
    limit: 15,
  });

  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: "article",
    limit: 15,
    select:
      "fields.title, fields.slug, fields.description, fields.actions, fields.content",
  });

  const [homePage] = home.items;
  return {
    props: {
      home: homePage,
      articles: articleEntries.items,
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
