import { lastItem } from "./mod.ts";

const numbers = [1, 2, 3, 4, 5];

console.log(lastItem(numbers)); //=> 5

console.log(lastItem(numbers, 3)); //=> [3, 4 , 5]
