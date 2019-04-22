#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'input',
        name: 'type',
        message: `${chalk.magenta(' What your child-process is aimed at? ')}`,
        default: 'server'
      },
      // {
      //   type: 'input',
      //   name: 'type',
      //   message: `${chalk.magenta(' Input Something You Like: ')}`,
      //   default: 'sth'
      // }
   
  ])
  .then(answers => {
     require('./task').run('ex1')
     const { rename } = require('slimz');
     async function Task_Rename(){
       await rename('./child.js','child_'+answers.type+'.js')
       await rename('./parent.js','parent_'+answers.type+'.js')
     }
     Task_Rename()
  })