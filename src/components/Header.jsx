import React from "react";
import styls from "./index.module.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuopen] = useState(false);
  return (
    <header>
      <div className={styls.contentStayle}>
        <div className={styls.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <a href="#">
            <img src="/logo.png" alt="logotive" />
          </a>
        </div>
        <nav>
          <ul className={menuOpen ? styls.open : styls.ulStayle}>
            <li>
              <a className={styls.ahref} href="#">
                Vakansiyalar
              </a>
            </li>
            <li>
              <a className={styls.ahref} href="#">
                Kandidatlar
              </a>
            </li>
            <li>
              <a className={styls.ahref} href="#">
                Kompaniyalar
              </a>
            </li>
            <li>
              <a className={styls.ahref} href="#">
                Xizmatlar
              </a>
            </li>
            <li>
              <a className={styls.ahref} href="#">
                Ta’lim
              </a>
            </li>
          </ul>
        </nav>
        <div className={styls.headerEnd}>
          <select className={styls.selectColor}>
            <option value="uz">O'z</option>
            <option value="ru">Ru</option>
          </select>
          <a className={styls.btn} href="#">
            Boshlash
          </a>
        </div>
      </div>
    </header>
  );
}
