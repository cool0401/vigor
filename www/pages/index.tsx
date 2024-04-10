import Layout from "../components/Layout";
import Home from "../components/Home";
import Service from "../components/Service";
import Resource from "../components/Resource";

const HomePage = (): React.ReactElement => {
  return (
    <Layout>
      <Home/>
      <Service/>
      <Resource/>
    </Layout>
  )
}

export default HomePage;