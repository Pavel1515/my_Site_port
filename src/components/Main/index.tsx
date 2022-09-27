import style from "./Main.module.scss";
import { useAppSelector } from "../../redux/store";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const myPhoto = require("../../assets/img/myPhoto.jpg");
const Main = () => {
  const { listSkill } = useAppSelector((state) => state.list);
  const x25 = { x: 25 };
  const x150 = { x: 150 };
  return (
    <>
      <div className={style.container}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          РОЗРОБНИК
          <br />
          РОБЛЮ САЙТИ <br />
          ІНТЕРНЕТ-МАГАЗИНИ
          <br />
          САЙТИ ВІЗИТКИ
          <br />
          НА ФРЕЙВОРЦІ REACT JS
        </motion.h1>
        <div className={style.flex}>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Вітаю, дякую, що заглянули. Я Павло, розробник сайтів. Вирішую
            завдання для бізнесу.
          </motion.p>
          <NavLink className={style.item} to={"add"}>
            Зв'язатися
            <motion.span
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              !
            </motion.span>
          </NavLink>
        </div>
        <div>
          <div className={style.text}>
            <p>---****---</p>
            <motion.p
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              transition={{ delay: 1, restSpeed: 1 }}
            >
              ---Основні переваги фреймворків Фреймворк дозволяє писати код,
              специфічний додатку, і перебирає всю «чорнову» роботу. Проекти,
              створені на основі фреймворку, легко супроводжувати, масштабувати
              та доопрацьовувати. Продукти, що базуються на фреймворках,
              працюють набагато швидше і можуть впоратися з великим
              навантаженням. Фреймворки захищені від атак та допомагають
              уникнути помилок. Створювати продукти на основі веб-фреймворків
              дешевше, ніж починати з нуля.--
            </motion.p>
            <motion.p
              initial={{ x: -2000 }}
              animate={{ x: 0 }}
              transition={{ delay: 2, restSpeed: 1 }}
            >
              --React є і бібліотекою, і, у певному сенсі, веб-фреймворк. Він
              використовується для створення веб-інтерфейсів. Щоб створити
              інтерактивний інтерфейс, достатньо описати вид компонента в різних
              станах, а при зміні даних React автоматично виведе лише необхідні
              компоненти. React базується на компонентах. Ви можете побудувати
              складний інтерфейс із створених вами окремих компонентів. React
              дозволяє легко забезпечити реактивність. При зміні одного
              компонента змінюється все, що пов'язано з цим зміною. Дає
              можливість розробляти односторінкові веб-програми та програми для
              мобільних пристроїв, а також багатострокові додатки.---
            </motion.p>
          </div>

          <h2 className={style.skills}>Мої скили:</h2>
          {listSkill.map((el, index) => (
            <motion.p
              transition={{ delay: index, restSpeed: 1 }}
              initial={{ x: 1900 }}
              animate={index % 2 ? x25 : x150}
              key={el}
              className={style.items}
            >
              --{el}--
            </motion.p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
