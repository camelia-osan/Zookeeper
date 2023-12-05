# Zookeeper
TypeScript console project


### Description
Zookeeper is a TypeScript console project that allows users to select and see different animals habitats.

### Process
The habitats consist of 6 different animals (camel, lion, deer, goose, bat and rabbit). Each animal is an ASCII image string with an assigned ID that is added in a list.
The user is asked to choose an animal or to close the program. The program is looping until the user decides to close it.

Open a terminal and type:

```
tsc index.ts
node index.js
```
Then choose one of the existing habitats as many times as you want or close the program.

### Tools
For this project, I chose to use *TypeScript* mainly for its static typing. Also, I made use of the *readlineSync* module for a simple process of receiving user input in a Node.js application.

### Requirements
In order to run this project you need to:
- Install *TypeScript*
- Compile *TypeScript* to *JavaScript*:
```
tsc example.ts
node example.js
```

- Install *readline-sync* using npm:
```
npm install readline-sync
```
