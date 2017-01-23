var restify = require('restify');
var builder = require('botbuilder');

 

//Creating restify server
var server = restify.createServer();
server.listen(process.env.PORT || 3978, function(){
    console.log('%s listening to %s',server.name, server.url);
});

/*server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));
*/

//Create a bot
var connector = new builder.ChatConnector({
    appID: '123',
    appPassword: '123'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Creating bot dialog
bot.dialog('/', function(session){
    session.send("Hello World");
});
