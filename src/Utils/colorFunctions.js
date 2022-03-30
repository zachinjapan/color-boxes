const getRandomColor = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomColorArray = (numberOfBoxes) => {
  let arr = [];
  for (let i = 0; i < numberOfBoxes; i++) {
    arr.push({
      color: getRandomColor(),
    });
  }
  return arr;
};

const defaultColors = [
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "green",
  },
  {
    color: "yellow",
  },
  {
    color: "purple",
  },
  {
    color: "orange",
  },
  {
    color: "pink",
  },
  {
    color: "brown",
  },
  {
    color: "black",
  },
];

export { getRandomColor, randomColorArray, defaultColors };
