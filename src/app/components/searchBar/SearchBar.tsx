import React from "react";
import styles from "../styles.module.scss";
import { type } from "os";
import glass from "../../Image/MagnifyingGlass.svg";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className={styles.DivSearch}>
      <input
        type="text"
        placeholder="  O que você está buscando?"
        className={styles.searchBar}
      />
      <button type="submit" className={styles.searchBar__btn}>
        <Image src={glass} alt="botão de lupa" />
      </button>
    </div>
  );
}
