#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');
var path = require('path');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'input',
        name: 'type',
        message: `${chalk.magenta(' What\'s your child-process aimed at?')}`,
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
     const { rename,copy } = require('slimz');
     async function Task_Rename(){
       try{
         let From = path.resolve(__dirname,'../temp/'+'ex1'+'/');
         let To = './';
         await copy(From,To);
         await rename('./child.js','child_'+answers.type+'.js')
         await rename('./parent.js','parent_'+answers.type+'.js')
       }catch(err){
         console.log(err)
       }
     }
     Task_Rename()
  })