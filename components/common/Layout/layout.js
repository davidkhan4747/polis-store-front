import Head from "next/head";
import Navbar from "../navbar/navbar";
import { Footer } from "..";
const Layout  = ({ 
  children, 
  title,
  navloc,
  fizYur,
  renewal,
  chack,
  legal,
  userk
  }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar legal={legal} navLoc={navloc} chack={chack} userk={userk} renewal={renewal} fizYur={fizYur}/>
        <main>{children}</main>
      <Footer/>

    </>
  );
};

export default Layout;
