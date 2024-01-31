import React from "react";
import style from "./index.module.css";
import logo from '../../assets/logo.svg'
export default function Navbar() {
  return (
    <div className={style.navbarBackground}>
      <div className={style.container}>
          <div className={style.navbar}>

        <div className={style.logo}>
          <a href="#"><img src={logo} alt="" /></a>
        </div>
        <nav className={style.nav}>
          <ul>
            <li>
              <a href="3">Vakansiyalar</a>
            </li>
            <li>
              <a href="3">Kandidatlar</a>
            </li>
            <li>
              <a href="3">Kompaniyalar</a>
            </li>
            <li>
              <a href="3">Xizmatlar</a>
            </li>
            <li>
              <a href="3">Ta’lim</a>
            </li>
          </ul>
        </nav>
        <div className={style.buttonAndSelect}>
          <select  className={style.navbarSelect}>
            <option value="uzb" selected>
              O'zb
            </option>
            <option value="rus" selected>
              Rus
            </option>
            <option value="eng" selected>
              Eng
            </option>
          </select>
          <button className={style.navbarButton}>Boshlash</button>
        </div>
          </div>
      </div>
    </div>


  );
}
