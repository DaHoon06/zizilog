import {Header} from "@components/layout/header/Header";
import {Footer} from "@components/layout/footer/Footer";
import React from "react";

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout;