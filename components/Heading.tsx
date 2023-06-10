interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="text-4xl font-bold">{text}</h1>;
};

export default Heading;
