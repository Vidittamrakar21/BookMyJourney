const { json } = require('stream/consumers');
const unirest = require('unirest');

const req = unirest('POST', 'https://trains.p.rapidapi.com/');

req.headers({
	'content-type': 'application/json',
	'X-RapidAPI-Key': 'c1b4360f7cmshf27340314a43273p18e60bjsnc42f9ac56486',
	'X-RapidAPI-Host': 'trains.p.rapidapi.com'
});

req.type('json');
req.send({
	search: 'Rajdhani'
});



req.end(function (res) {
    if (res.error){
	
		throw new Error(res.error);
	} 

	else{
		console.log(res.body);  

	}
    

});
