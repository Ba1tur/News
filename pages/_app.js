import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/Sign.scss";
import "@/styles/SignUp.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
