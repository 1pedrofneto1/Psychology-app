import Input from "../../form/Input/Input";
import SubmitButton from "../../form/SubmitButton/SubmitButton";
import { useState } from "react";
import PropTypes from "prop-types";

const SignInForm = ({ handleSubmit }) => {
  const [account, setAccount] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(account);
  };

  const handlerOnChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Input
          type="string"
          name="email"
          text="E-mail"
          id="email"
          placeholder="E-mail cadastrado"
          onChange={handlerOnChange}
          value={account.email ? account.email : ""}
        />
        <Input
          type="string"
          name="password"
          text="Senha"
          id="password"
          placeholder="Senha"
          onChange={handlerOnChange}
          value={account.password ? account.password : ""}
        />
        <SubmitButton text="Acessar" />
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
