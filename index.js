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

function wordUp(sent) {
  
  sent.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1) );
}


const titleCased = () => {
  // use the .map method on the tutorials to return a new array
  return tutorials.map(sent => {

    const words = sent.split(' ');
    const capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const newSent = capWords.join(' ');
    return newSent;
  
  });
}
// str.split(' ').forEach(wordUp => console.log(wordUp.charAt(0).toUpperCase() + wordUp.slice(1) ));