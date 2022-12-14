<div align="center">
<h2> Welcome to the first mini project I ever completed way back when I started out! <h2>
</div>

The purpose of this was to create a very basic scrabble game simulator that gave values to letters and would output the value of a given word. 

<div align="center">
 <img src="https://media0.giphy.com/media/l0MYJemY03GKJy57W/giphy.gif?cid=790b76115cb97761a16b861b981b4d28a2e41ba02028911b&rid=giphy.gif&ct=g" width="auto" height="auto" />
</div>

The reason behind its creation was as a initial challenge and introduction to javascript and the most basic pieces of code, such as contructors, methods and loops. This also being a great introduction on how to use the basics of Github.

The tests in this project were in the pre-made package that I was given, as were conditions for pass or failure that I was to meet in order to have a fully functional piece of code that satisfied the conditions that are set below.

This are the instructions and specifications that were presented to me and where I began...

# Scrabble Challenge

Welcome to the Scrabble challenge!

## Learning Objectives
- Build a simple program using functions, loops, and flow control
- Use `git` & GitHub to commit work and open a Pull Request

## Instructions

1. Fork this repository and then:
```sh
$ git clone https://github.com/digital-futures-academy/scrabble-challenge.git && cd scrabble-challenge
$ npm install # installs dependencies listed in package.json
```
2. Run the tests from your project root directory. There should be a lot of failures to begin with. You can run your test suite in a few ways:
```sh
$ npm test
# or
$ jasmine
# or run jasmine directly
$ ./node_modules/jasmine/bin/jasmine.js
```
3. In GitHub, [open a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your forked repository to the challenge repository.
4. Implement the criteria below locally and [push your code](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) to your repository! Every push to a branch that has an open Pull Request will update it automatically with your changes.
5. Check the status of the automated tests on the Pull Request - update your implementation if needed.

# Task

Given a word, compute the scrabble score for that word.

##### Letter Values

You'll need these:

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Example
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

```
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14
```

## Acceptance Criteria

```javascript
let scrabble = new Scrabble('')
scrabble.score() // => 0

let scrabble = new Scrabble(" \t\n")
scrabble.score() // => 0

let scrabble = new Scrabble(null)
scrabble.score() // => 0

let scrabble = new Scrabble('a')
scrabble.score() // => 1

let scrabble = new Scrabble('f')
scrabble.score() // => 4

let scrabble = new Scrabble('street')
scrabble.score() // => 6

let scrabble = new Scrabble('quirky')
scrabble.score() // => 22

let scrabble = new Scrabble('OXYPHENBUTAZONE')
scrabble.score() // => 41
```

## Extended Acceptance Criteria
> Each `Scrabble` method should be no more than 5 lines and contain no more than 5 operations.

> You can play a double or a triple letter.

> You can play a double or a triple word.
