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
        message: `${chalk.magenta(' Your child-process file name: ')}`,
        default: 'child.js'
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
  })