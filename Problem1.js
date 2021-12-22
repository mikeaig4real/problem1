/*1st Given an array of bird where every element represents a bird type id, determine the ids of the most frequently and least frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount, return the smallest of their ids. E.g.: - 
Input – [1,1,2,2,4,4,4,4,5] Output – [4, 5] 
Input – [2,2,2,2,4,4,4,4,5] Output – [2, 5] 
Input – [1,2,2,4,4,4,4,5] Output – [4, 1] */

let inputs = [[1,1,2,2,4,4,4,4,5],[2,2,2,2,4,4,4,4,5],[1,2,2,4,4,4,4,5]];

function determine (input) {
  let map = {};
  let minArr = [0,Infinity];
  let maxArr = [0,-Infinity];
  for(let i = 0;i<input.length;i++){
    let num = input[i];
    if(map[num]) {
      map[num].push(i);
    }else {
      map[num] = [i];
    }
  }
  console.log(map);
  for(let num in map) {
    if(minArr[1] > map[num].length) {
      minArr = [num,map[num].length];
    }
    if(maxArr[1] < map[num].length) {
      maxArr = [num,map[num].length];
    }
  }
  console.log([maxArr[0],minArr[0]]);
  return [maxArr[0],minArr[0]];
}


determine(inputs[2]);