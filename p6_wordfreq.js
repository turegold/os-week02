// P6. Word frequency + your own module  (commit: "p6: word frequency")
//
// node p6_wordfreq.js sample.txt
//
//   48 words, 17 distinct
//   code     9
//   the      7
//   ship     5
//   it       5
//   you      3
//
// tokenize, countWords, topN live in utils.js. Implement the missing two there,
// then import all three here. Your own file: "./" and ".js" are both required.

import fs from "node:fs";
// TODO: import { tokenize, countWords, topN } from ...
import { tokenize, countWords, topN } from "./utils.js";

const path = process.argv[2];
const text = fs.readFileSync(path, "utf8");

const words = tokenize(text);
const counts = countWords(words);

// TODO: print "<total> words, <distinct> distinct"
//       Object.keys(counts).length is the number of distinct words.
let words_num = words.length;
let distinct_num = Object.keys(counts).length;

console.log(`${words_num} words, ${distinct_num} distinct`);

// TODO: print the top 5 as "word count", one per line
//       topN(counts, 5) returns [["code", 9], ["the", 7], ...]
topN(counts, 5).forEach((line) => console.log(`${line[0]}   ${line[1]}`));
