
var ftl=require("findthelyrics")
var discord=require('discord.js')
function execute(args,message)
{
  
        if(typeof args != "undefined" && args != null && args.length != null && args.length > 0)
        {
            var q=args.join(' ');
            var lyrics="";
            ftl.find(q ,function(err, resp)
             {
                if (!err) {
                    lyrics=resp;
                    // console.log(lyrics)
                } 
                else
                 {
                    console.log(err)
                    if(err['code']==='noData')
                    {
                        lyrics='There was no data available for your search.\nMake sure you spelled the song correctly.'
                    }
                    else
                    {
                        lyrics="there was a problem in retriving the song lyrics. please make sure it is spelt right"
                    }
                    console.log(lyrics)
                }
                const Embed = new discord.MessageEmbed()
            .setColor('#85850d')
            //.setTitle(args)
            Embed.description=lyrics
             message.reply(Embed)
        
            }); 
        }
        else
        {
            message.reply('you need to enter a song')
        }
   
    
  
}
module.exports={execute}