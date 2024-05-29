// import styles from "./Select.module.css";
import PropTypes from "prop-types";

const Select = ({ text, name, options, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={onChange} value={value || ""}>
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Select;
