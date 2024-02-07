import "./Label.css";

type LabelProps = {
  labelFor: string;
  labelName: string;
};

export const Label = ({ labelFor, labelName }: LabelProps) => (
  <label className="label" htmlFor={labelFor}>
    {labelName}
  </label>
);
