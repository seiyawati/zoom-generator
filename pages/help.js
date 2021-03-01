import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "components/Header";
import Footer from "components/Footer";
import Copyright from "components/Copyright";
import VerticalTabs from "components/TabPanel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Header />
      <VerticalTabs />
      <Footer />
      <Copyright />
    </div>
  );
}
