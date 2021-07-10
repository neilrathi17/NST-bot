var Discord = require('discord.js');
var logger = require('winston');
//var auth = require('./auth.json');
const client = new Discord.Client();
var ytdl=require('ytdl-core')
var functions=require('./functions/interactions')
var remind=require('./functions/remind')

const queue = new Map();


client.on('ready',function(message){
    console.log('bot is up');

    var checkminutes = 1440, checkthe_interval = checkminutes * 60 * 1000; //This checks every 10 minutes, change 10 to whatever minute you'd like
    setInterval(function() {
        var date=new Date();
        checkDate=date.toLocaleDateString();
        bday=functions.checkbday(checkDate);
        if(bday[1]==1)
        {
            client.channels.cache.get('691695334815957045').send(bday[0]);
                }
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
       var tellme=functions.tellme(args[0])
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('##000000')
     exampleEmbed.title=tellme
    message.reply(exampleEmbed)
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
    if(args[0]==='neil')
    message.reply("in your mum")
    if(args[0]==='dj')
    message.reply({files:['https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-5-Prestige-St-Johns-Wood-Bangalore-5006802_406_561_310_462.jpg']})
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
           {name:'~whereis',value:'samson\nsaurav\ntej\ndj\nneil'},
           {name:'~showme',value:'saurav'},
           {name:'~av',value:'@someone'},
           {name:'~slap',value:'@someone'},
           {name:"~hug",value:"@someone"},
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
    var arr=[]
    arr=functions.slap(args[0]);
    mention=client.users.cache.get(arr[1]);
    const Embed = new Discord.MessageEmbed()
    .setColor('##000000')
    .setTitle(`you just slapped @${mention.username}`)
    .setImage(arr[0])
    message.channel.send(Embed);
}
else if(command==='hug')
{
   if (!message.mentions.users.size) {
       return message.reply('you need to tag a user in order to slap them');
   }
   var arr=[]
   arr=functions.hug(args[0]);
   mention=client.users.cache.get(arr[1]);
   const Embed = new Discord.MessageEmbed()
   .setColor('##000000')
   .setTitle(`you hugged @${mention.username}`)
   .setImage(arr[0])
   message.channel.send(Embed);

}
else if(command==='remindme')
{
    remind.execute(message,args)
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

