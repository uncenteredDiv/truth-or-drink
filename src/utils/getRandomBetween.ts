export const getRandomBetween = (min: number, max: number, exclude: number) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === exclude) {
        randomNumber = getRandomBetween(min, max, exclude);
    }

    return randomNumber;
}    