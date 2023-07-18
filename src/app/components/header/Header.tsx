type PropsHeader = {
  name: string;
  subtitle?: string;
};

export const Header = ({ name, subtitle }: PropsHeader) => {
  return (
    <div className="pb-6">
      <div>
        <h1 className="text-4xl font-medium text-gray-950">Hello {name},🍃</h1>
      </div>
      <div>
        <p className="text-base text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
