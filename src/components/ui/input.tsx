const FormInput = ({
  value,
  onChange,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  value: string | number | readonly string[];
  onChange: (value: string | number) => void;
}) => {
  return (
    <input
      {...props}
      type={type}
      value={value}
      onChange={(e) =>
        onChange(type === 'number' ? e.target.valueAsNumber : e.target.value)
      }
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default FormInput;
