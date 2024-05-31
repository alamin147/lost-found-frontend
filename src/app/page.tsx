
import AboutUs from "./components/aboutUs/aboutUs";
import Banner from "./components/banner/Banner";
import RecentLostItem from "./components/recentLostItem/RecentLostItem";

export default function Home() {
  return (
    <>
      <Banner />
      <div>
        <AboutUs />
      </div>
      <div>
        <RecentLostItem />
      </div>
     
    </>
  );
}
