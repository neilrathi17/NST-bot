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
        return 'ultra simp \nApril 3rd is his favourite day \nloves tea truffles and roasted peanuts\n has 60% probability of being cancelled when(if) he becomes successful';
    else if(args==='dj')
        return 'lost samson\s diary and then laughed about it\n Then accused samson of pestering him\nAsked samson to make another diary for him\nSays he "has a meeting" but actualy goes and plays valorant with his friends.\nChallenged samson to a 1V1, results yet to be decided';
    else if(args==='tej')
        return 'Number one. Steady hand. One day, Kim Jong Un need new heart. Tej do operation. But mistake! Kim Jong Un die! SSD very mad! tej hide in fishing boat, come to Kerala. No Malyalam, no food, no money. Samson give me fishing job. Now Tej have house, Mallu car and new woman. Samson save life. My big secret. Tej kill Kim Jong Un on purpose. I good surgeon. The best!';
    else if(args==='saurav')
        return 'When I was younger, maybe junior high, I got roped into watching my 3 month old niece while my sister got her hair done. So when there i am, sitting in the waiting area of a hair salon with my niece and who walks in but Saurav.I was nervous as fuck, and just kept looking at him, as he read a magazine and waited, but didn\'t know what to say. Pretty soon though my niece started crying, and I\'m trying to quiet her down because I didn\'t want her to bother Saurav, but she wouldn\'t stop. Pretty soon he gets up and walks over. He started running his hands through her hair and asking what was wrong. I replied that she was probably hungry or something. So, Saurav put down his magazine, picked up my niece and lifted his shirt. He breast fed her right there in the middle of a hair salon. Chill guy, really nice about it'
    else if(args=='tina')
        return 'Wowwwww, you meow like a cat! That means you are one, right? Shut the fuck up. If you really want to be put on a leash and treated like a domestic animal then that’s called a fetish, not “quirky” or “cute”. What part of you seriously thinks that any part of acting like a feline establishes a reputation of appreciation? Is it your lack of any defining aspect of personality that urges you to resort to shitty representations of cats to create an illusion of meaning in your worthless life? Wearing “cat ears” in the shape of headbands further notes the complete absence of human attribution to your false sense of personality, such as intelligence or charisma in any form or shape. Where do you think this mindset’s gonna lead you? You think you’re funny, random, quirky even? What makes you think that acting like a fucking cat will make a goddamn hyena laugh? I, personally, feel extremely sympathetic towards you as your only escape from the worthless thing you call your existence is to pretend to be an animal. But it’s not a worthy choice to assert this horrifying fact as a dominant trait, mainly because personality traits require an initial personality to lay their foundation on. You’re not worthy of anybody’s time, so go fuck off, “cat-girl”'
    
    else if(args==='nika')
        return "I\'m 💘 not sure 👍 who you 😎👉 think 💭 you're dealing 🤝 with, but 🍑 let 🙆 me assure 💯 you 👉😩👨 that I'm 💘 not some kind 🙁 of 13 ✋🏻☕ year 📅 old 👴 Roblox 🤖 \"developer 👓\". I 👁 am an experienced 🤳💨 graphic ❗📈📉 designer 🎨 and have the professional 😎 experience 👦💯 to support ❤ projects 👷 like 💖 SCR in my spare 🔯 time 🕐, creating 🔜 content 🌎 which is then used 🎶 under 😀 agreement 👍💯. You 👈 can think 🤔 what you 👈😱😡 want 😋 about \"false 👎❌ DMCA\", etc 📒, but 🍑 the reality 💯 is that I 👁 own the IP 💻🌐 for those elements ⚗ which are used 🆒🎶 under 😀 license 💳 by SCR. The same goes 🏃 for other assets 😂 created 💯 by devs 🤓, such as the game 🎮 logo ◼. You 👉🏻 wouldn't 😩 argue 🗣😬 if EA 🅱 or Microsoft 💹 filed 🗂 a report 📄 to remove 🚫 content 🌎 that used 🎶 their logo ◼ without ❌😖 permission ⁉, and this is no 🚫 different 😡/You 🗣👉 might 💪 think 🤔 you're dealing 🤝 with Roblox 🤖 developers 👩‍💻 and think 💭 that you're superior 👁👃, but 🍑 in the eyes 👀🧒 of the law ⚖☑, the application 📄 is irrelevant 😶. It's my/our content 🌍✔ and you're using ✍🏻 it without 🚫🙅 permission ⁉ or license 💳📇. Whether 🌩🌧 it's a game 🎮, a product 🏗🛤🏭, a company 🏢 or a performance 🎭, if it't 📤🇸🔫 got 🍸 something 😅 in it that I 👥 made 👑 and you're claiming 🇽🇰 it's yours or suggesting 💡🤔 that I'm 💘 affiliated, you 👈 can expect 😃 me to come 💦 knocking ✊🚪."
    else if(args==='neil')
        return 'Nani the fuck did you just fucking iimasu about watashi, you chiisai bitch desuka? Watashi’ll have anata know that watashi graduated top of my class in Nihongo 3, and watashi’ve been involved in iroirona Nihongo tutoring sessions, and watashi have over sanbyaku perfect test scores. Watashi am trained in kanji, and watashi is the top letter writer in all of southern California. Anata are nothing to watashi but just another weaboo. Watashi will korosu anata the fuck out with vocabulary the likes of which has never been mimasu’d before on this continent, mark watashino fucking words. Anata thinks anata can get away with hanashimasing that kuso to watashi over the intaaneto? Omou again, fucker. As we hanashimasu, watashi am contacting watashino secret netto of otakus across the USA, and anatano IP is being traced right now so you better junbishimasu for the ame, ujimushi. The ame that korosu’s the pathetic chiisai thing anata calls anatano life. You’re fucking shinimashita’d, akachan'
    else
        return "doesn't exist yet, coming soon"
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


