import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";
import styles from "./components/styles.module.scss";

export default function Home() {
  return (
    <main className="{styles.main}">
      <Header />
      <Banner />
      <Services />
    </main>
  );
}
