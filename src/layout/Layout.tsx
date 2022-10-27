import Footer from "./Footer";
import Header from "./Header";

// type Props = {
//   children: JSX.Element[];
// };

const Layout: React.FC<{ children: JSX.Element[] }> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};


export default Layout

// export default function Layout({children}:Props) {
//   return (
//     <>
//       <Header />
//       {children}
//       <Footer />
//     </>
//   );
// }
