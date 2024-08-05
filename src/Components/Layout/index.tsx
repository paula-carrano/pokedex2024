import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "./Components";
import "./styles.css";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout">
      <div className="contenedor">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
