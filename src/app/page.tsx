import Banner from "./components/Banner";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners/Partners";
import Products from "./components/Products/Products";
import Services from "./components/Services";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import styles from "./components/styles.module.scss";
import Image from "next/image";

export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type ProductList = {
  success: boolean;
  products: Product[];
};

async function getProductList(): Promise<ProductList> {
  const res = await fetch(
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  return res.json();
}

export default async function Home() {
  const products = (await getProductList()).products.splice(0, 4);

  return (
    <main className="{styles.main}">
      <Header />
      <Banner />
      <Services />
      <Carousel products={products} />
      <Partners />
      <Products />
      <Footer />
    </main>
  );
}
