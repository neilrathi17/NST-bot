function hug(args)
{
    var hugarray=[
        'https://media.tenor.com/images/afbc39fcc4cbe67d9622f657d60d41cf/tenor.gif',
        'https://media.tenor.com/images/1e058dc8d0ccd337b6d26cbab43b6e30/tenor.gif',
        'https://media.tenor.com/images/1e058dc8d0ccd337b6d26cbab43b6e30/tenor.gif',
        'https://media.tenor.com/images/9d43ab74529bb6814a6d406a5d26e1cc/tenor.gif',
        'https://media.tenor.com/images/294a14e1112eff23490d0d91a948194b/tenor.gif'
    ];
    rng=Math.floor(Math.random()*5);
    var lol=getUserFromMention(args);
    return [hugarray[rng],lol]
}
function slap(args)
{
    slaparray=['https://i.pinimg.com/originals/31/fb/7f/31fb7faec49f0416534a06661c9cd75d.gif',
     'https://media.tenor.com/images/cc6dcb5108c39a67c6dd7f1eaf65ad09/tenor.gif',
    'https://media1.tenor.com/images/3c161bd7d6c6fba17bb3e5c5ecc8493e/tenor.gif?itemid=5196956',
    'https://media1.tenor.com/images/1b6050a64b46631c95087af09bcd0c56/tenor.gif?itemid=5685267',
    'https://media.tenor.com/images/b3701dcada582b6980d4efb9fd8efc7b/tenor.gif']
    rng=Math.floor(Math.random()*5);
    var lol=getUserFromMention(args);
    return [slaparray[rng],lol]
}
//--------------------------------------------------------------------------
//-------------------------------------------------------------------------
function checkbday(n)
    {
        console.log(n)
        n=n.substring(0,3);
        console.log(n)
        chk=0;
        switch(n)
        {
            case "7/8":var bday=['@everyone Happy birthday Uma', 1]
                            break;
            case "9/19":var bday=['@everyone Happy birthday Nika', 1]
                            break;
            case "10/6":var bday=['@everyone Happy birthday samson mc', 1]
                            break;
            case "12/7":var bday=['@everyone Happy birthday pratt', 1]
                            break;
            case "3/1":var bday=['@everyone Happy birthday Neil',1]
                            break;  
            case "3/22":var bday=['@everyone Happy birthday Saurav', 1]
                            break;
            case "3/25":var bday=['@everyone Happy birthday Nadia', 1]
                            break;
            case "4/11":var bday=['@everyone Happy birthday Tej', 1]
                            break;
            case "8/4":var bday=['@everyone Happy birthday Abhi', 1]
                            break;
            case "9/6":var bday=['@everyone Happy birthday Tina', 1]
                            break;
            case "2/12":var bday=['@everyone Happy birthday Rubie', 1]
                            break;
        }
        return bday;
    }
//-----------------------------------------------------------------------------------
//-------------------------tellme---------------------------------------------------
function tellme(args)
{
    if(args==="samson")
        return 'ultra simp \nApril 3rd is his favourite day \nloves tea truffles and roasted peanuts';
    else if(args==='dj')
        return 'lost samson\s diary and then laughed about it\n Then accused samson of pestering him\nAsked samson to make another diary for him';
    else if(args==='tej')
        return '1) must break samson\'s bones \n2) Stole samson\'s birthday gift for Dj';
    else if(args==='saurav')
        return 'When I was younger, maybe junior high, I got roped into watching my 3 month old niece while my sister got her hair done. So when there i am, sitting in the waiting area of a hair salon with my niece and who walks in but Saurav.I was nervous as fuck, and just kept looking at him, as he read a magazine and waited, but didn\'t know what to say. Pretty soon though my niece started crying, and I\'m trying to quiet her down because I didn\'t want her to bother Saurav, but she wouldn\'t stop. Pretty soon he gets up and walks over. He started running his hands through her hair and asking what was wrong. I replied that she was probably hungry or something. So, Saurav put down his magazine, picked up my niece and lifted his shirt. He breast fed her right there in the middle of a hair salon. Chill guy, really nice about it'
}
function dice()
{
    rng=(Math.random());
    console.log(rng)
    if(rng>0.5)
    return "heads"
    else
    return "tails"
}

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
		return mention;
	}
}
module.exports={hug,slap,checkbday,tellme,dice}


