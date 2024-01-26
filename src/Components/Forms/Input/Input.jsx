import React from "react";
import style from "./Input.module.css";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  erro,
}) => {
  return (
    <div className={style.geral}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>

      <input
        id={name}
        placeholder={placeholder}
        className={style.input}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />

      {erro && <p className={style.erro}>{erro}</p>}
    </div>
  );
};

export default Input;
