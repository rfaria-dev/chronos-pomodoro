import React from "react";
import styles from "./input.module.css";

type InputProps = {
	id: string;
	labelText: string;
} & React.ComponentProps<"input">;

const Input = ({ type, id, labelText, ...rest }: InputProps) => {
	return (
		<>
			<label htmlFor={id}>{labelText}</label>
			<input className={styles.input} type={type} name="" id={id} {...rest} />
		</>
	);
};

export { Input };
