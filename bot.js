var Discord = require('discord.js');
var logger = require('winston');
//var auth = require('./auth.json');
const client = new Discord.Client();
var ytdl=require('ytdl-core')
const queue = new Map();


client.on('ready',function(message){
    console.log('bot is up');

    var checkminutes = 1440, checkthe_interval = checkminutes * 60 * 1000; //This checks every 10 minutes, change 10 to whatever minute you'd like
    setInterval(function() {
        var date=new Date();
        checkDate=date.toLocaleDateString();
        checkbday(checkDate);
}, checkthe_interval);
})
client.once("disconnect", () => {
    console.log("Disconnect!");
  });
//----------------------------------onmessage--------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

client.on("message",function(message)
{
    if(message.author.bot)
    return;
    var prefix="~"
    if(!message.content.startsWith(prefix))
    return;
   const commandBody = message.content.slice(prefix.length);
   const args = commandBody.split(' ');
   const command = args.shift().toLowerCase();
   const serverQueue = queue.get(message.guild.id);
   //tellme-------------------------------------------------------------------------------------------------
   if(command==='tellme')
   {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('##000000')
    if(args[0]==='samson')
    {
        exampleEmbed.title='too much attitude'
        message.reply(exampleEmbed)
    }
   
    else if(args[0]==="dj")
    {
        exampleEmbed.title='lost samson\s diary and then laughed about it\n Then accused samson of pestering him';
        message.reply(exampleEmbed)
    }
  
    else if(args[0]==='saurav')
    {
        exampleEmbed.title='leader of the jho bois'
        message.reply(exampleEmbed)
    }
    else if(args[0]==='tej')
    {
        exampleEmbed.title='1) must break samson\'s bones \n2) Stole samson\'s birthday gift for Dj';
        message.reply(exampleEmbed)
    }

   }
   else if(command==='showme')
   {
       if(args[0]==='saurav')
       message.reply({files:['assets/sauravlolz.jpeg']})

   }
  else if(command==="whereis")
   {
    if(args[0]==='saurav')
    message.reply({files:['https://img.jagranjosh.com/imported/images/E/GK/Bihar-facts.jpg']})
    if(args[0]==='samson')
    message.reply("he ate a dolphin",{files:['https://www.urban.org/sites/default/files/styles/optimized_default/public/shutterstock_365427041_crop.jpg?itok=kz1v0vOc']})
    if(args[0]==='tej')
    message.reply('stinky',{files:['https://www.healthcareitnews.com/sites/hitn/files/Hospital-HITN.jpg']})
   }
   else if(command==='av')
   {
    if(message.mentions.users.size){
        let member=message.mentions.users.first()
    if(member){
        const exampleEmbed=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
        message.channel.send(exampleEmbed)
        
    }
    else{
        message.channel.send("Sorry none found with that name")

    }
    }else{
        const exampleEmbed=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
        message.channel.send(exampleEmbed)
    }
   }
   else if(command==="help")
 {
     const exampleEmbed = new Discord.MessageEmbed()
     .setColor('##000000')
     .setTitle("the following commands exist:")
     .addFields(
         {name:'~tellme:',value:'dj \nsamson\nsaurav\ntej'},
         {name:'~whereis',value:'samson\nsaurav\ntej'},
         {name:'~showme',value:'saurav'},
         {name:'~av',value:'@someone'},
         {name:'~slap',value:'@someone'},
         {name:'~play',value:'\'best\': plays best song ever'},
         {name:'~play',value:'\'youtube link\' to play it'},
         {name:'~stop',value:'to disconnect the bot'}
     )
     message.reply(exampleEmbed)
 }
 //-------------------------------------------------------------------------------------------------------------
 //----------------------slap section---------------------------------------------------------------------------
 //-------------------------------------------------------------------------------------------------------------
 else if(command==='slap')
 {
    if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to slap them');
    }

    slaparray=['https://i.pinimg.com/originals/31/fb/7f/31fb7faec49f0416534a06661c9cd75d.gif',
     'https://media.tenor.com/images/cc6dcb5108c39a67c6dd7f1eaf65ad09/tenor.gif',
    'https://media1.tenor.com/images/3c161bd7d6c6fba17bb3e5c5ecc8493e/tenor.gif?itemid=5196956',
    'https://media1.tenor.com/images/1b6050a64b46631c95087af09bcd0c56/tenor.gif?itemid=5685267',
    'https://media.tenor.com/images/b3701dcada582b6980d4efb9fd8efc7b/tenor.gif']
    rng=Math.floor(Math.random()*6);
    var lol=getUserFromMention(args[0]);
     slapp(slaparray[rng],message,lol);
 }

 else if(command==='play')
 {
     execute(message,serverQueue)
     return
 }
 else if(command=='stop')
 {
     stop(message,serverQueue);
     return;
 }
 else if (command=="skip")
 {
    skip(message,serverQueue);
    return
 }
 else 
 {
    message.reply("not a valid command try ~help for more")
 }

});
client.login(process.env.token);
//----------------------------------------------------------------------------------------------
function checkbday(n)
{
    console.log(n)
    // n=n.substring(0,3);
    // console.log(n)
    // switch(n)
    // {
    //     case "7/8":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday UMA");
    //                     break;
    //     case "9/19":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday nika");
    //                     break;
    //     case "10/6":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday samson mcbc");
    //                     break;
    //     case "12/7":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday pratt");
    //                     break;
    //     case "3/1":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday Neil");
    //                     break;  
    //     case "3/22":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday saurav");
    //                     break;
    //     case "3/25":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday Nadia");
    //                     break;
    //     case "4/11":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday Tej");
    //                     break;
    //     case "8/4":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday Abhinav");
    //                     break;
    //     case "9/6":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday Tina");
    //                     break;
    //     case "2/12":client.channels.cache.get('691695334815957045').send("@everyone Happy birthday rubie");
    //                     break;
    // }
}
function slapp(string,message,name)
{
    let member = message.mentions.users.first();
        const Embed = new Discord.MessageEmbed()
    .setColor('##000000')
    .setTitle(`you just slapped @${name.username}`)
    .setImage(string)
    message.channel.send(Embed);
}

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
		return client.users.cache.get(mention);
	}
}

//--------------------------------------------------------------------------------
//-------------------------------execute---------------------------------------------
async function execute(message,serverQueue)
{
    const args=message.content.split(' ')
    const voicechannel=message.member.voice.channel;
    if(!voicechannel)
    {
        return message.channel.send('you need to be in a voice channel to play music')
    }
    const permissions=voicechannel.permissionsFor(message.client.user)
    if(!permissions.has('CONNECT') || !permissions.has("SPEAK"))
    {
        return message.channel.send("bot requires permissions to join and speak")
    }
    var song ={}
    if(args[1]==='best')
    {
         song=
    {
        title:"best song ever",
        url:'https://www.youtube.com/watch?v=OQ113-EpZvM',
    };
    }
    else
    {
        const songinfo= await ytdl.getInfo(args[1]);
         song = {
            title: songinfo.videoDetails.title,
            url: songinfo.videoDetails.video_url,
       };
    }
   
    if(!serverQueue)
    {
        const queueConstruct={
            textChannel:message.channel,
            voicechannel:voicechannel,
            connection:null,
            songs:[],
            volume:5,
            playing:true
        };
        queue.set(message.guild.id,queueConstruct);
        queueConstruct.songs.push(song);
        try{
            var connection=await voicechannel.join();
            queueConstruct.connection=connection;
            play(message.guild,queueConstruct.songs[0]);            
        }
        catch(err)
        {
            console.log(err)
              queue.delete(message.guild.id);
              return message.channel.send(err);            
            }
    }
    else
    {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue`);
    }

}
//------------------------------stop function-----------------------------------
//------------------------------------------------------------------------------
function stop(message,serverQueue)
{
    if(!message.member.voice.channel)
    {
    return message.channel.send('you cant stop music if you are not in the voice channel');
    }
    if(!serverQueue)
    {
        return message.channel.send('no music to stop')
    }
    serverQueue.songs=[];
    serverQueue.connection.dispatcher.end();
}
//--------------------------------------play function--------------------------------------
//---------------------------------------------------------------------------------------
function play(guild,song)
{
    const serverQueue=queue.get(guild.id)
    if(!song)
    {
        serverQueue.voicechannel.leave();
        queue.delete(guild.id);
        return;
    }
    const dispatcher=serverQueue.connection
    .play(ytdl(song.url))
    .on("finish",()=>
    {
        serverQueue.songs.shift();
        play(guild,serverQueue.songs[0]);
    })
    .on("error",error=>console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume/5);
    serverQueue.textChannel.send(`start playing :: **${song.title}**`);
}
//------------------------------skip----------------------------------------------
//--------------------------------------------------------------------------------
function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }

//https://www.youtube.com/watch?v=OQ113-EpZvM