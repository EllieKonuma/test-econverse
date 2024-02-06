import Banner from "./components/Banner";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header";
import Services from "./components/Services";
import styles from "./components/styles.module.scss";

export default function Home() {
  return (
    <main className="{styles.main}">
      <Header />
      <Banner />
      <Services />
      <Carousel />
    </main>
  );
}
