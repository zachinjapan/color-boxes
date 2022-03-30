interface BoxProps {
  color: string;
  number: number;
  onClick: () => void;
}

const Box = ({ color, number, onClick }: BoxProps) => {
  return (
    <div
      className={`box`}
      style={{
        backgroundColor: color,
        gridArea: `box-${number}`,
      }}
      onClick={onClick}
    >
      <h1>{number}</h1>
    </div>
  );
};

export default Box;
