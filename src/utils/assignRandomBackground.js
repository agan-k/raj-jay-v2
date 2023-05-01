export default function assignRandomBackground(backgroundArr) {
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  return backgroundArr[randomIndex]; 
};

export const pickRandomColor = ({arr, avoid = ''}) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  let colors = arr;
  let color = avoid;
  if(colors[randomIndex] !== color) {
    return arr[randomIndex];
  }
  return pickRandomColor({arr, avoid});
};
