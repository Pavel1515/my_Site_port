import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.header}>
        <NavLink to={"/"}>Yerebakan Pavlo</NavLink>
        <div className={style.menu}>
          <NavLink to={"/add"}>--Замовити Дзвінок</NavLink>
          <NavLink to={"/contact"}>--Контакти</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
