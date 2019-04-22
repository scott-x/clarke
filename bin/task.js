const { copy } = require('slimz');
const path = require('path');

/**
file structure of temp:

		temp
		├── type1
		├── type2
		└── typen
**/

async function run(type){
	try{
        let From = path.resolve(__dirname,'../temp/'+type+'/');
        let To = './';
        await copy(From,To);
	}catch(err){
		console.log(err)
	}
}

module.exports={
	run
}