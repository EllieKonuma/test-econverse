import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/btnServices/Services";
import Carousel from "./components/Carousel/Carousel";
import Partners from "./components/Partners/Partners";
import Products from "./components/Products/Products";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";

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
      <Brands />
      <Footer />
    </main>
  );
}
