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

client.login(process.env.TOKEN);

client.on("ready", async () => {
    console.log(`Logged in as : ${client.user.tag}`);
    console.log(`${client.user.tag} is ready!`)
});
