const letterValues = {
  'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2,
  'h': 4, 'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1,
  'p': 3, 'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4,
  'w': 4, 'x': 8, 'y': 4, 'z': 10
};

class Scrabble {
  word

  constructor(givenWord) {
    if (givenWord !== null) {
      this.word = givenWord.toLowerCase();
    }
  }

  score() {
    // if (this.word === null || typeof this.word !== 'string' || !this.word.match("[a-zA-Z]+")) {
    //return 0;
    // }

    // return this.word.split('').map((chr) => letterValues[chr]).reduce((acc, val) => acc + val);
    // this.word = 'abc'
    // this.word.split('') = ['a', 'b', 'c']
    // this.word.split('').map((chr) => letterValues[chr]) = [1, 3, 3]
    // this.word.split('').map((chr) => letterValues[chr]).reduce((acc, val) => acc + val) = 7;

    let points = 0;
    for (let index = 0; index < this.word.length; index++) {
      const character = this.word[index];
      const singleCharacterValue = letterValues[character];
      points += singleCharacterValue;
    }

    return points;
  }
}

module.exports = Scrabble;

//if (!this.word.match("[a-zA-Z]"))