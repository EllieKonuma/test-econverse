import Image from "next/image";
import React from "react";
import LogoImage from "../Image/Logo_VTEX.svg";
import Box from "../Image/Box.svg";
import Heart from "../Image/Heart.svg";
import User from "../Image/UserCircle.svg";
import Cart from "../Image/ShoppingCart.svg";
import Crown from "../Image/CrownSimple.svg";
import compra from "../Image/certificados/compra100.svg";
import frete from "../Image/certificados/freteGratis.svg";
import parcelas from "../Image/certificados/parcelas.svg";
import SearchBar from "./searchBar/SearchBar";
import style from "./styles.module.scss";

export default function Header() {
  return (
    <header className={style.p}>
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
        <Image src={Box} alt="Box" className={style.icon} />
        <Image src={Heart} alt="Heart" className={style.icon} />
        <Image src={User} alt="User" className={style.icon} />
        <Image src={Cart} alt="Cart" className={style.icon} />
      </nav>
      <nav className={style.navButtons}>
        <button className={style.n_btn}>Todas as Categorias</button>
        <button className={style.n_btn}>SuperMercado</button>
        <button className={style.n_btn}>Livros</button>
        <button className={style.n_btn}>Moda</button>
        <button className={style.n_btn}>Lançamento</button>
        <button className={style.n_btn}>Oferta do Dia</button>
        <div className={style.navButtons}>
          <Image src={Crown} alt="Crown" className={style.icon} />
          <button className={style.n_btn}>Assinatura</button>
        </div>
      </nav>
    </header>
  );
}
