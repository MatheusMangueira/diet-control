type IPropsButton = {
  title?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  disabled,
  title = "Click me",
  ...rest
}: IPropsButton) => {
  return (
    <button
      {...rest}
      className={`py-2 px-4 bg-[#B0CC9C] text-white text-sm
    rounded-md hover:bg-[#A0BC8C] transition duration-300 ease-in-out
    min-w-[160px] shadow-sm hover:shadow-lg ${
      disabled ? " cursor-not-allowed" : "cursor-pointer"
    }
    `}
    >
      {title}
    </button>
  );
};
