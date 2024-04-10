import Layout from "../components/Layout";
import Home from "../components/Home";
import Service from "../components/Service";

const HomePage = (): React.ReactElement => {
  return (
    <Layout>
      <Home/>
      <Service/>
    </Layout>
  )
}

export default HomePage;