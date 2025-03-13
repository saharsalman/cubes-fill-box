function minCubesToFillBox(input) {
  const lines = input.trim().split('\n');
  let results = [];

  for (let line of lines) {
    let values = line.split(' ').map(Number);
    let [L, W, H, ...cubes] = values;

    let cubeSizes = [];
    let power = 1;
    for (let count of cubes) {
      cubeSizes.push({ size: power, count: count });
      power *= 2;
    }

    cubeSizes.reverse();

    let totalCubesUsed = 0;
    let remainingVolume = L * W * H;

    for (let { size, count } of cubeSizes) {
      let maxFit = Math.floor(remainingVolume / size ** 3);
      let useCubes = Math.min(maxFit, count);

      totalCubesUsed += useCubes;
      remainingVolume -= useCubes * size ** 3;

      if (remainingVolume === 0) break;
    }

    results.push(remainingVolume === 0 ? totalCubesUsed : -1);
  }

  return results.join('\n');
}

const userInput = prompt(
  'Enter input (L W H followed by cube counts separated by spaces, and then press enter to excute it futher). '
);
console.log(minCubesToFillBox(userInput));
