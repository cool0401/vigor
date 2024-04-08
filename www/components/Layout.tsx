import Nav from "./Nav";

const Layout = ({children}): React.ReactElement => {
  return (
    <div>
      <Nav />
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default Layout;