const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging')
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//growtopian
const gt = '719468514607628389'
const shoob = '756767960684822548'
const owo = '754394697224683591'
const prefix = 'y'

setInterval(() => {
  client.channels.get(`${shoob}`).send('dor').then(msg => msg.delete(2000));
}, 5000);
setInterval(() => {
  client.channels.get(`${gt}`).send('/work');
}, 301000);
setInterval(() => {
  client.channels.get(`${gt}`).send('/donate');
}, 301000);
setInterval(() => {
  client.channels.get(`${gt}`).send('/atm');
}, 361000);
setInterval(() => {
  client.channels.get(`${gt}`).send('/tackle');
}, 605100);
setInterval(() => {
  client.channels.get(`${gt}`).send('/science');
}, 301000);
setInterval(() => {
  client.channels.get(`${gt}`).send('/bonus');
}, 4.31e+7);
setInterval(() => {
  client.channels.get(`${gt}`).send('/vend');
}, 3.61e+6);

client.on('message', async message => {
  
if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let {cooldown} = require("./cooldown.js")
  let commandcooldown = cooldown;
  
if(!message.content.startsWith(prefix)) return undefined;
  
  if(!msg.startsWith(prefix)) return;
  if(commandcooldown.has(message.author.id)) {
    
   return;
    
  }
  commandcooldown.add(message.author.id);
  setTimeout(() => {
    commandcooldown.delete(message.author.id)
  }, 3000);
  
  try {
    let commandFile = require(`./cmds/${cmd}.js`);
   commandFile.run(client, message, args);
  } catch(e) {
    
  } finally {
    console.log(`hey, ${message.author.tag} telah menggunakan command: ${cmd}`);
    
  }

});

client.login(process.env.TOKEN);

client.on("ready", async () => {
    console.log(`Logged in as : ${client.user.tag}`);
    console.log(`${client.user.tag} is ready!`)
});
