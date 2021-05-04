import "@src/common/globalStyles/main.css";
import Head from "next/head";
import { Devtools } from "@ui-devtools/tailwind";
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

      {process.env.NEXT_PUBLIC_APP_STAGE === "dev" ? (
        <Devtools>
          <Component {...pageProps} />
        </Devtools>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
