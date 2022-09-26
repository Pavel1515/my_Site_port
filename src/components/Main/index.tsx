import style from "./Main.module.scss";
import { useAppSelector } from "../../redux/store";
import { NavLink } from "react-router-dom";
const myPhoto = require("../../assets/img/myPhoto.jpg");
const Main = () => {
  const { listSkill } = useAppSelector((state) => state.list);
  return (
    <div className={style.container}>
      <h1>
        РОЗРОБНИК
        <br />
        РОБЛЮ САЙТИ <br />
        <img src={myPhoto} alt="myPhoto" /> НА ФРЕЙВОРЦІ REACT JS
      </h1>
      <div className={style.flex}>
        <p>
          Вітаю, дякую, що заглянули. Я Павло, розробник сайтів. Вирішую
          завдання для бізнесу.
        </p>
        <NavLink className={style.item} to={"/add"}>
          Зв'язатися
        </NavLink>
      </div>
      <div>
        <div className={style.text}>
          <p>---****---</p>
          <p>
            ---Основні переваги фреймворків Фреймворк дозволяє писати код,
            специфічний додатку, і перебирає всю «чорнову» роботу. Проекти,
            створені на основі фреймворку, легко супроводжувати, масштабувати та
            доопрацьовувати. Продукти, що базуються на фреймворках, працюють
            набагато швидше і можуть впоратися з великим навантаженням.
            Фреймворки захищені від атак та допомагають уникнути помилок.
            Створювати продукти на основі веб-фреймворків дешевше, ніж починати
            з нуля.--
          </p>
          <p>
            --React є і бібліотекою, і, у певному сенсі, веб-фреймворк. Він
            використовується для створення веб-інтерфейсів. Щоб створити
            інтерактивний інтерфейс, достатньо описати вид компонента в різних
            станах, а при зміні даних React автоматично виведе лише необхідні
            компоненти. React базується на компонентах. Ви можете побудувати
            складний інтерфейс із створених вами окремих компонентів. React
            дозволяє легко забезпечити реактивність. При зміні одного компонента
            змінюється все, що пов'язано з цим зміною. Дає можливість розробляти
            односторінкові веб-програми та програми для мобільних пристроїв, а
            також багатострокові додатки.---
          </p>
        </div>

        <h2 className={style.skills}>Мої скили:</h2>
        {listSkill.map((el) => (
          <p className={style.items}>--{el}--</p>
        ))}
      </div>
    </div>
  );
};

export default Main;
