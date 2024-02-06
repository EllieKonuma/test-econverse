import Banner from "./components/Banner";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header";
import Partners from "./components/Partners/Partners";
import Products from "./components/Products/Products";
import Services from "./components/Services";
import styles from "./components/styles.module.scss";

export default function Home() {
  return (
    <main className="{styles.main}">
      <Header />
      <Banner />
      <Services />
      <Carousel />
      <Partners />
      <Products />
    </main>
  );
}
