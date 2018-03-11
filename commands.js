function wait(time, callback) { // Wait's x SECOND based on time ex: 4 is four second wait
    setTimeout(function() {
        callback();
    }, eval(time+"*1000"));
}
let commands = [
[
'ping',
({
    "isAdmin": "false",
    "chanelRequirement": ["text"],
	"permissons": ["idk"],
	"description": "Responds with pong!",
	"usage": "ping"
}),
function(msg,prefix) {
    msg.channel.send("Pong!");
}
],
[
'clear',
({
    "isAdmin": "true",
    "chanelRequirement": ["text"],
	"permissons": ["idk"],
	"description": "Clears the text channels history.",
	"usage": "clear"
}),
function(msg) {
    const channel = msg.channel;
    channel.fetchMessages({
        limit: 100
    }).then(messages => {
        msg.channel.bulkDelete(messages);
        msg.channel.send("Successfully cleared the channel!").then(message => {
            wait(4, function() {
                message.delete();
            })
    })
}).catch(console.error);
}
],
[
'say',
({
    "isAdmin": "true",
    "chanelRequirement": ["text"],
	"permissons": ["idk"],
	"description": "Say's what the user says back!",
	"usage": "say message"
}),
function(msg,prefix){
	var string = msg.toString();
	string = string.substr(eval(prefix.length + "+4"));
	msg.channel.send(string);
}
],
[
'ban',
({
    "isAdmin": "true",
    "chanelRequirement": ["text"],
	"permissons": ["idk"],
	"description": "Bans the user from the guild",
	"usage": "ban @user reason"
}),
function(msg,prefix){
	
}
],
[
'help',
({
    "isAdmin": "false",
    "chanelRequirement": ["text"],
	"permissons": ["idk"],
	"description": "Returns a help menu!",
	"usage": "help"
}),
function(msg,prefix){
	let helpInfo = "***Better Discord Bot HELP*** \n Created by Sloss2003, Open Source \n https://github.com/Sloss2003/BetterDiscordBot \n "
	let add = "";
	commands.forEach(function(info){
		add = add+" " + info[0] + " : " + info[1]["description"] + " Usage: " + info[1]["usage"] +" \n"
	})
	helpInfo = helpInfo + add;
	msg.channel.send(helpInfo)
}
]

]
exports.commands = commands;