import Body from "./components/Body";
import Header from "./components/Header";
import styles from "./components/styles.module.scss";

export default function Home() {
  return (
    <main className="{styles.main}">
      <Header />
      <Body />
    </main>
  );
}
