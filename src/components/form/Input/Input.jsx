import styles from "./Input.module.css"

const Input = (name, text, type, placeholder, handlerOnChange, value) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />
        </div>
    )
}

export default Input