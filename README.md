# Orelang\_TS
A minimal implementation of Orelang in TypeScript

# What's Orelang?
Orelang is simple and minimal programming language declared at the article[プログラミング言語を作る。１時間で](http://qiita.com/shuetsu@github/items/ac21e597265d6bb906dc)  

# Features
This is an implementation of Orelang and provides more functions

* if expression
* compare functions: >,>=,<,<=
* logics : and(&&), or(||), not(!)
* function definition

# Specification of Orelang
This is not an original specification original is can be found at the article.  

## Grammer
Orelang provide only one grammer.
  
`Expr := (operator args1 args2...) <- this is CallOperator`  
`Expr := value <- this is ImmediateValue`
  
This looks like lisp.  
  
  
# Implementation
Original implementation of Orelang in Java uses JSON and JSONIC for Syntax Analysis.  
I implement this interpreter like original one(but this is very temporary, I'll implement transpile driver to code like Lisp).    

# Installation
## Requirements

- tsc(1.8.7 or later)
- typings(1.4.0) <- install by `npm install i -g typings`

## Commands

```zsh:
$ git clone https://github.com/alphaKAI/Orelang_TS
$ cd Orelang_TS
$ typings install dt~node -global
$ tsc app.ts
```

app.ts includes some sample code.  


# License
Orelang\_TS is released under the MIT License.  
Please see `LICENSE` file for details.  

Copyright (C) 2016 Akihiro Shoji
