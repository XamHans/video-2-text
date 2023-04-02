import * as Label from "@radix-ui/react-label";

export interface InputProps {
  labelName: string;
}

export const Input = () => {
  return (
    <>
      <Label.Root className="LabelRoot" htmlFor="firstName">
        First name
      </Label.Root>
      <input
        className="Input"
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
      />
    </>
  );
};
