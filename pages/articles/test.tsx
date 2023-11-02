import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../contentful/index";
import { IArticle, IArticleFields } from "../../contentful";

const Test = ({ article }: { article: IArticle }) => {
  return (
    <div style={{ minHeight: "100vh" }} e>
      Test
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  return {
    props: {},
  };
};

export default Test;
