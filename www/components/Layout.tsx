import Nav from "./Nav";
import Footer from "../components/Footer";

const Layout = ({children}): React.ReactElement => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;