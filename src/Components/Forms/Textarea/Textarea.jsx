import React from "react";
import style from "./Textarea.module.css";

const Textarea = ({
  label,
  placeholder,
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

      <textarea
        id={name}
        placeholder={placeholder}
        className={style.textarea}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />

      {erro && <p className={style.erro}>{erro}</p>}
    </div>
  );
};

export default Textarea;
