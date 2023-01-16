import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button">{ 
    primary?: boolean;
}

export function Button({ primary = false, style: styleProp, ...rest }: ButtonProps) {
    const style = {
        backgroundColor: primary ? "red" : "blue",
        color: "white",
        ...styleProp
    };
  
    return <button type="button" style={style} {...rest}>Button</button>;
}