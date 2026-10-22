import { fibonacciSequence } from "@ultirequiem/fibonacci";

import { lastItem } from "../mod.ts";

import lastItemRichie from "https://esm.sh/last-item@2.0.0";

console.log(lastItem([...fibonacciSequence(3)]));

console.log(lastItemRichie(fibonacciSequence(3)));
