import { createClient } from "contentful";

export const client = createClient({
  space: "ofpvgsovd02l",
  environment: "master", // defaults to 'master' if not set
  accessToken: "IsjfY3wmrWp2oj2Df1ah0hYT160ZFqL3hzUWI5uufOs",
});

// export const client = contentful.createClient({

// const contentful = require("contentful");
// client
//   .getEntry("2DBqg3CspNynqUmQc4E9V7")
//   .then((entry: any) => console.log(entry))
//   .catch(console.error);

// console.log("contentful api");
