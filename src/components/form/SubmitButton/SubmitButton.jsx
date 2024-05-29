import styles from "./SubmitButton.module.css";
import PropTypes from "prop-types";

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={styles.submitButton}>{text}</button>
    </div>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
