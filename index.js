

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((elem)=>{
    let splitElement = elem .split(" ");
    let array1 = []
    for (let index = 0; index<splitElement.length;index++){
      const element = splitElement[index];
      array1.push(element.charAt(0).toUpperCase().concat(`${splitElement[index].slice(1)}`))
    }
    return array1.join(" ")
  })
};
console.log(titleCased());
