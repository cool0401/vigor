import Layout from "../components/Layout";
import Home from "../components/Home";
import Footer from "../components/Footer";

const HomePage = (): React.ReactElement => {
  return (
    <Layout>
      <Home/>
      <Footer />
    </Layout>
  )
}

export default HomePage;