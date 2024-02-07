import "./Input.css";

type InputProps = {
  inputName: string;
  inputId: string;
  inputValue: string;
  change?: (e: any) => void;
};

export const Input = ({
  inputName,
  inputId,
  inputValue,
  change,
}: InputProps) => (
  <input
    className="input"
    type="text"
    placeholder={inputName}
    required
    id={inputId}
    value={inputValue}
    onChange={change}
  />
);
