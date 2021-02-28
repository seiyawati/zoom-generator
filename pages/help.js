import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "components/Header";
import Footer from "components/Footer";
import Copyright from "components/Copyright";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Header />
        <h1>使い方</h1>

      <Footer />
      <Copyright />
    </div>
  );
}
