function wait(time, callback) {
    setTimeout(function() {
        callback();
    }, time);
}

exports.commands = [
[
'ping',
({
    "isAdmin": "false",
    "chanelRequirement": ["text"]
}),
function(msg) {
    msg.channel.send("Pong!");
}
],
[
'clear',
({
    "isAdmin": "true",
    "chanelRequirement": ["text"]
}),
function(msg) {
    const channel = msg.channel;
    channel.fetchMessages({
        limit: 100
    }).then(messages => {
        msg.channel.bulkDelete(messages);
        msg.channel.send("Successfully cleared the channel!").then(message => {
            wait(4000, function() {
                message.delete();
            })
    })
}).catch(console.error);
}
]

]