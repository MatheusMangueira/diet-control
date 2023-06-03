type IPropsButton = {
  title?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ title = "Click me", ...rest }: IPropsButton) => {
  return (
    <button
      {...rest}
      className="py-2 px-4 bg-[#B0CC9C] text-white text-sm
    rounded-md hover:bg-[#A0BC8C] transition duration-300 ease-in-out
    min-w-[160px] shadow-sm hover:shadow-lg cursor-pointer 
    "
    >
      {title}
    </button>
  );
};
