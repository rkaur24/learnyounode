const fs = require('fs');
var path =require('path');
var data_arr = [];

module.exports = function (my_fname,my_extname,callback)
{
	
		fs.readdir(my_fname,(err,data) => {

			if(err)
			{
				return callback(err)
			}
			for(var i in data)
			{
				if(path.extname(data[i]) === '.' + my_extname)
				{
					data_arr.push(data[i])
				}
			}
			
				callback(null,data_arr)
		})
	
}
