export default function assignRandomBackground(backgroundArr) {
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  return backgroundArr[randomIndex]; 
};
