import { useState } from "react";
import SignInForm from "../../login/SignInForm/SignInForm";
import styles from "./Login.module.css";
import { RiPsychotherapyLine } from "react-icons/ri";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const verifyAccount = (account) => {
    console.log(account);
  };

  return (
    <>
      {isLogin ? (
        <div className={styles}>
          <RiPsychotherapyLine />
          <h1>Clínica</h1>
          <SignInForm handleSubmit={verifyAccount} />
          <button className={styles.signUpButton} onClick={() => setIsLogin(false)}>Cadastre-se</button>
        </div>
      ) : (
        <>teste</>
      )}
    </>
  );
};

export default Login;
