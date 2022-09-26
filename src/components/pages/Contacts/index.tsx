import Header from "../../Header";
import style from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div>
      <Header />
      <h1 className={style.h1}>Контакти:</h1>
      <div className={style.flex}>
        <a href="tel:+380638868610">+380638868610</a>
        <a href="mailto:ppvr3407@gmail.com">ppvr3407@gmail.com</a>
        <a href="https://t.me/odessa_devoleper">Telegram</a>
        <a href="https://www.linkedin.com/in/pavlo-yerebakan626997207/">
          Linkedin
        </a>
      </div>
    </div>
  );
};
export default Contacts;
