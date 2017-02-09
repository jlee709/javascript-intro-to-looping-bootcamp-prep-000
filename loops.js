
// for loop within the fuction itself. using the push command to add to the array then call at the end
function forLoop(arr){
  for(var i=0; i<25; i++){
    if(i === 0){
      arr.push('I am 1 strange loop');
    }
    else{
      arr.push(`I am ${i+1} strange loops`);
    }
  }

  return arr;
}


// while loop
let number = 10;

function whileLoop(number){
  while(number > 0){
    console.log(--number)
  }
  return "done"
}


// rand fucntion for do-while
function maybeTrue() {
  return Math.random() >= 0.5
}

// do-while loop
function doWhileLoop(array){
  array = ['1','2']
do {
array.pop();
} while(array.length > 0 && maybeTrue())
return array;
}
