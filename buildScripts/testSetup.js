//transpile test script first and then run it on mocha
require('babel-register')();

//disable the code which mocha does n't understand from webpack
require.extensions['css']=function(){};
