import Image from "next/image";
import React from "react";
import LogoImage from "../Image/Logo_VTEX.svg";
import compra from "../Image/certificados/compra100.svg";
import frete from "../Image/certificados/freteGratis.svg";
import parcelas from "../Image/certificados/parcelas.svg";
import SearchBar from "./searchBar/SearchBar";
import style from "./styles.module.scss";
import Heart from "./icons/Heart";
import Box from "./icons/Box";
import User from "./icons/User";
import Cart from "./icons/Cart";
import Crown from "./icons/Crown";

export default function Header() {
  return (
    <header className={style.p}>
      {/* <div className={style.p}> */}
      <div className={style.header}>
        <Image src={compra} alt="compra 100% segura" />
        <Image src={frete} alt="frete grátis" />
        <Image src={parcelas} alt="parcele suas compras" />
      </div>

      <nav className={style.header}>
        <a href="./">
          <Image
            src={LogoImage}
            alt="Vercel Logo"
            width={139}
            height={50.64}
            priority
          />
        </a>
        <SearchBar />

        <Box className={style.svg} height={"26px"} width={"26px"} />
        <Heart className={style.svgComp} height={"32px"} width={"32px"} />
        <User className={style.svgComp} height={"32px"} width={"32px"} />
        <Cart className={style.svgComp} height={"32px"} width={"32px"} />
      </nav>
      <nav className={style.navButtons}>
        <button className={style.n_btn}>Todas as Categorias</button>
        <button className={style.n_btn}>SuperMercado</button>
        <button className={style.n_btn}>Livros</button>
        <button className={style.n_btn}>Moda</button>
        <button className={style.n_btn}>Lançamento</button>
        <button className={style.n_btn}>Oferta do Dia</button>
        <div className={style.navButtons}>
          <Crown height={"20px"} width={"20px"} />
          <button className={style.n_btn}>Assinatura</button>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}
