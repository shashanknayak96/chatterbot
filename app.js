var restify = require('restify');
var builder = require('botbuilder');

 var appID = process.env.MY_APP_ID || "MISSING ID";
 var appPassword = process.env.MY_APP_PASSWORD || "MISSING PASSWORD";

//Creating restify server
var server = restify.createServer();
server.listen(process.env.PORT || 3978, function(){
    console.log('%s listening to %s',server.name, server.url);
});
server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));

//Create a bot
var connector = new builder.ChatConnector({
    appID: process.env.MY_APP_ID,
    appPassword: process.env.MY_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Creating bot dialog
bot.dialog('/', function(session){
    session.send("Hello World");
});
