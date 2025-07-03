import { ReactNode } from "react";
import { Navbars } from "@/app/components/navbar/Navbars";
import Footers from "@/app/components/footer/Footer";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbars />
      {children}
      <Footers />
    </div>
  );
};
export default Layout;
