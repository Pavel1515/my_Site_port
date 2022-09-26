import Header from "../../Header";
import { useForm } from "react-hook-form";
import style from "./Application.module.scss";
import { send } from "emailjs-com";
const Application = () => {
  type FormData = {
    name: string;
    number: string;
  };
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    send("service_2j214f7", "template_6ch3ucl", data, "aPRv17hWBUrAL6o0w")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    reset();
  };
  return (
    <>
      <Header />
      <div className={style.conatainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Номер телефону" {...register("number")} />

          <input
            placeholder="Ваше імя"
            {...register("name", { required: true })}
          />
          <button type="submit">Залишити заявку</button>
        </form>
      </div>
    </>
  );
};

export default Application;
