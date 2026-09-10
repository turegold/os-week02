// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);

// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".

let blank_num = n/2-1;
let star_num = 1;

// 정방향 + 중앙
for(let i=0; i<n/2; i++){
   for(let b=0; b<blank_num; b++){
    process.stdout.write(' ');
   } 
   for(let s=0; s<star_num; s++){
    process.stdout.write('*');
   }
   console.log();

   blank_num --;
   star_num +=2;

}

blank_num ++;
star_num -=2;

// 역방향
for(let i=n/2 - 1; i>0; i--){

    blank_num ++;
    star_num -=2;

    for(let b=0; b<blank_num; b++){
     process.stdout.write(' ');
    } 
    for(let s=0; s<star_num; s++){
     process.stdout.write('*');
    }
    console.log();

   

}
