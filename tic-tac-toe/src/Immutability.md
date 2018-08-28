# Why Immutability is important

There are generally two approaches to changing data.

1. The first approach is to mutate the data by directly changing the data's value:

## Data Change with Mutation
var player = {score:1, name:'Jeff'};
player.score = 2;

2. The second approach is to replace the data with a new copy which has the desired changes:
   Basically make a copy of the original data, and play around with the copy
## Data Change without Mutation

var player = {score:1, name:'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});

// Or if you are using object SPREAD syntax proposal, you can write:
var newPlayer = {...player, score: 2};

The end result is the same but by not mutating (or changing the underlying data) directly,
we gain several benefits described below

## Complex features become simple
Immutability makes complex features much easier to implement. Later in this tutorial, we will
implement a "time travel" feature that allows us to review the TIC-TAC-TOE game's history and
"jump back" to previous moves.

This functionality isn't specific to games -- an ability to undo and redo certain actions is a
common requirement in applications. 
**Avoiding direct data mutation lets up keep previous versions of the game's history intact, and reuse them later**

## Detecting Changes
Detecting changes in **MUTABLE** objects is difficult because they are modified directly. This detection
requires the mutable object to be compared to previous copies of itself and the entire object tree to be traversed.

Detecting changes in **immutable** objects is considerably easier. If the immutable object that is being referenced is
different than the previous one, then the object has changed.

## Determining when to re-render in React
The main benefit of immutability is that it helps you build pure components in React. 
**Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering**

# Functional Components
Functional Components are a simpler way to write components that **only contain a RENDER METHOD** and don't have their own state.

Instead of defining a class which extends React.Component, we can write a function that takes PROPS as input and returns what should
be rendered. Functional components are less tedious to write than classes, and many components can be expressed this way.
