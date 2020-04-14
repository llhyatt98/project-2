// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};


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

let test = revWords1("hello this is a test");
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

let test2 = revWords2("hello this is a test");
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

let test3 = revWords2("hello this is a test");
console.log(test3);





