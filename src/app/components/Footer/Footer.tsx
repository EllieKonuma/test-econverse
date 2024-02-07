import React from "react";
import footerStyles from "./footer_styles.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.infoFooter}></div>
      <div className={footerStyles.copyright}></div>
    </footer>
  );
}
