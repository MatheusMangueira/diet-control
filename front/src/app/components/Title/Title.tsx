type ITitleProps = {
  title: string;
};

export const Title = ({ title }: ITitleProps) => {
  return (
    <div>
      <h1
        className="
        flex flex-col gap-4
        text-zinc-700 text-lg font-medium py-4
            "
      >
        {title}:
      </h1>
    </div>
  );
};
