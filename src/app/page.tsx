import Faq from "./(commonLayout)/faq/Faq";
import Reviews from "./(commonLayout)/reviews/Reviews";
import Services from "./(commonLayout)/services/Services";
import AboutUs from "./components/aboutUs/aboutUs";
import Banner from "./components/banner/Banner";
import Footers from "./components/footer/Footer";
import { Navbars } from "./components/navbar/Navbars";
import RecentLostItem from "./components/recentLostItem/RecentLostItem";

export default function Home() {
  return (
    <>
      <Navbars />
      <Banner />
      <Services />
      <RecentLostItem />
      <Reviews />
      <AboutUs />
      <Faq/>
      <Footers />
    </>
  );
}
