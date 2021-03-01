import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "components/Header";
import Footer from "components/Footer";
import Copyright from "components/Copyright";
import Content from "components/Content";
import Demo from "components/Demo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>foresky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Header />
      <Content />
      <Demo />
      <Footer />
      <Copyright />
    </div>
  );
}
