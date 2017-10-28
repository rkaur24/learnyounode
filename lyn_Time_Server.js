
const net = require('net')

var server = net.createServer(function (socket){
	var date = new Date()
	var month = date.getMonth() + 1 ;
	if(month < 10)
		month = '0' + month;
		var hours = date.getHours();
	if(hours < 10)
		hours = '0' + hours;
	var data = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' +  hours + ':' + date.getMinutes()
	socket.write(data);
	socket.write('\n');
	socket.end();
});

server.listen(process.argv[2]);