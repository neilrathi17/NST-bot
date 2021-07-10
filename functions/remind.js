const discord=require('discord.js');
const ms = require('ms');

async function execute(message,args)
{
    let time=args[0];
    if(!time)
    {
        return message.channel.send('you need to give a time')
    }
    // if(isNaN(args[0]))
    // {
    //     return message.channel.send('please enter a number')
    // }
    const reminder=args.join(" ").slice(args[0].length);
    if(reminder)
    {
        if(!args[1]){
            return message.channel.send('you need to set a reminder')
        }
     message.channel.send(`you have set a reminder, i will you remind you in ${time}`)
     setTimeout(function(){
        message.channel.send(`${message.author.toString()} reminder for ${reminder}`)
     },ms(time));
    }
}
module.exports={execute} 