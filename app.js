var restify = require('restify');
var builder = require('botbuilder');

//Creating restify server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function(){
    console.log('%s listening to %s',server.name, server.url);
});

//Create a bot
var connector = new builder.ChatConnector({
    appID:'8812b9b3-1f99-47a3-bd31-5b65e4608823',
    appPassword:'3bsGSXhfzbjbcuqCQnNhgXC'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Creating bot dialog
bot.dialog('/', function(session){
    session.send("Hello World");
});
