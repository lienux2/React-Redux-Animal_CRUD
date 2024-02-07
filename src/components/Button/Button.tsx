import './Button.css'

type ButtonProps = {
  buttonName: string;
  buttonStyle: "sort" | "add" | "edit" | "delete" | "cancel" | "save";
  click?: () => void;
};

export const Button = ({ buttonName, buttonStyle, click }: ButtonProps) => (
  <button className={`button ${buttonStyle}`} onClick={click}>
    {buttonName}
  </button>
);
