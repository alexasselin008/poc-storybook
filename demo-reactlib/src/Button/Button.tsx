import { ComponentProps } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ComponentProps<"button">{ 
    primary?: boolean;
}

export function Button({ primary = false, className, ...rest }: ButtonProps) {
    const classNames = `${className ?? ""} ${styles.primary} ${primary ? styles["button-primary"] : ""}`.trim();
  
    return <button type="button" className={classNames} {...rest}>Button</button>;
}