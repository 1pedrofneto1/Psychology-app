import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({ text, name, type, placeholder, onChange, value }) => {
  return (
    <div className={styles}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
