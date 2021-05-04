import "@src/common/globalStyles/main.css";
import Head from "next/head";
// import { Devtools } from "@ui-devtools/tailwind";
import { Amplify } from "aws-amplify";
// import awsExports from "@src/aws-exports";

// Amplify.configure({ ...awsExports, ssr: true });
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lakazenv2</title>
        <meta name="Description" content="Lakazen2 | Happy Kids" />
      </Head>

      {/*<Devtools>*/}
      <Component {...pageProps} />
      {/*</Devtools>*/}
    </>
  );
}

export default MyApp;
