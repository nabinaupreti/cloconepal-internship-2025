 import { ButtonProps } from "../interfaces/ButtonProps";

function Button({ onClick, label = "My Button" }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;



