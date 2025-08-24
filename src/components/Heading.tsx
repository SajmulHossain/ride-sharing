interface IProps {
    heading: string;
    description?: string;
}

const Heading = ({ heading, description }: IProps) => {
  return (
    <div className="grid place-items-center my-6">
      <h2 className="font-bold text-2xl text-primary">{heading}</h2>
      {
        description && <p className="dark:text-gray-400 text-center text-gray-500 italic">{description}</p>
      }
    </div>
  );
};

export default Heading;