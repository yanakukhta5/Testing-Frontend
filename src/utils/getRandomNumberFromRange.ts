type TGetRandomNumber = (a: number, b: number) => number

export const getRandomNumberFromRange: TGetRandomNumber =
 (min: number = 1, max: number = 10) => {
 return Math.floor(Math.random() * (max - min + 1) + min)
}