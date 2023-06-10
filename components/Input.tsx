interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ placeholder, label, type, id }) => {
  return (
    <>
      <div className="flex justify-between items-end">
        <label htmlFor={id}>{label}</label>
        <span className="text-xs text-red-500 font-bold">
          Valid email required
        </span>
      </div>
      <input
        className="w-full h-14 px-6"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
};

export default Input;
