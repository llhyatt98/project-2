// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = new Array();
  
  var char; 
  for (let i in s) {
    if(cArr.includes(s[i])){
      return true
    }
    else{
      cArr.push(s[i])
    }
  }
  return false;
};

console.log(containsDuplicates("hello"));
console.log(containsDuplicates("false"));
console.log(containsDuplicates("truee"));
console.log(containsDuplicates("abcdefABCDEF"));

// revWords1
let revWords1 = sentence => {
  let ret_str = '';
  let word_arr = sentence.split(" ");
  let temp = '';

  for(let i = 0; i < word_arr.length; i++)
  {
    for(let j = 0; j < word_arr[i].length; j++)
    { 
      temp = word_arr[i][j] + temp;
    }
    if(i != word_arr.length-1){
      temp += ' ';
    }
    ret_str += temp;
    temp = '';
  }
  return ret_str
}

let test = revWords1("Web App Dev");
console.log(test);


// revword2
let revWords2 = sentence => {
  let ret_str = '';
  let word_arr = sentence.split(" ");
  let temp = '';

  word_arr.forEach(elem => {
    for(let j of elem)
    { 
      temp = j + temp;
    }
    if(elem != word_arr[word_arr.length-1]){
      temp += ' ';
    }

    ret_str += temp;
    temp = '';
  });

  return ret_str
}

let test2 = revWords2("Web App Dev");
console.log(test2);



// revword3
let revWords3 = sentence => {
  let ret_str = '';
  let word_arr = sentence.split(" ");
  let temp = '';

  for(let i of word_arr)
  {
    for(let j of i)
    { 
      temp = j + temp;
    }
    if(i != word_arr[word_arr.length-1]){
      temp += ' ';
    }
    ret_str += temp;
    temp = '';
  }
  return ret_str
}

let test3 = revWords2("Web App Dev");
console.log(test3);





