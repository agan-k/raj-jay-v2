export default function pickRandomItem({arr, avoidConsecutive = ''}) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  let items = arr;
  let item = avoidConsecutive;
  if(items[randomIndex] !== item) {
    return arr[randomIndex];
  }
  return pickRandomItem({arr, avoidConsecutive});
};
