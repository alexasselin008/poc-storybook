import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button">{ 
    primary?: boolean;
}

export function Button({ primary = false, style: styleProp, ...rest }: ButtonProps) {
    const style = {
        backgroundColor: primary ? "green" : "orange",
        color:  primary ? "white" : "black",
        ...styleProp
    };
  
    return <button type="button" style={style} {...rest}>Button</button>;
}