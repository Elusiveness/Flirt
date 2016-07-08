//javascript:(function(){$.getScript('http://donwwright.club/javascript/flirt.js');}());

pickupLines = [
	"If I flip a coin, what are the chances of me getting head?",
	"Are you an archaeologist? Because I gotta big bone for you to inspect.",
	"Are your legs made of Nutella? Because I'd like to spread them.",
	"I'm no weather man, but you can expect a few inches tonight.",
	"Did you sit in a pile of sugar? Cause you have a pretty sweet ass.",
	"Girl, I just gave you elevated permissions, You now have access to my D:",
	"My favourite hobby is sleeping, we should do it together some time.",
	"Are you a Sheep? Because you're so unBAAAlievable.",
	"Hey babe is that a phone in your pocket? Cause dat ass is calling me!",
	"Are you from Tennessee? Because you are the only Ten-I-See.",
	"Are you a camera? Because every time I look at you, I smile.",
	"The human body has 206 bones in it's body, would you like to add another?",
	"I dropped skittles down my pants, would you like to taste a rainbow?",
	"You remind me of a bolt, now let me teach you how to screw.",
	"Do we go to the same school? Because I swear we have chemistry together!",
	"You might be asked to leave soon. You are making the other women look bad.",
	"Which is easier? You getting into those tight pants or getting you out of them?",
	"On a scale of 1 to 10, you’re a 9. I’m the 1 you need.",
	"Hey girl, I heard you were looking for a knight in shining armor. I just so happen to be wearing the armor of God.",
	"Are you full of beryllium, gold, and titanium? Because you are be au ti.. Full!",
	"If you were a fruit, you'd be a fineapple.",
	"Are you from the moon? Cause your physique is out of this world.",
	"Do you have a name ? Or can I call you mine ?",
	"I'm not a photographer, but I can picture me and you together.",
	"I seem to have lost my phone number. Can I have yours?",
	"Did you invent the airplane? Cause you seem Wright for me.",
	"Do you have a map? I'm getting lost in your eyes.",
	"I don't have a library card, but do you mind if I check you out?",
	"I was feeling a little off today, but you definitely turned me on.",
	"Are you a parking ticket? 'Cause you've got fine written all over you.",
	"You look cold. Want to use me as a blanket?",
	"I'm not drunk, I'm just intoxicated by you.",
	"Is there an airport nearby or is that just my heart taking off?",
	"My doctor says I'm lacking Vitamin U.",
	"Damn, if being sexy was a crime, you'd be guilty as charged!",
	"Are you a banana? Because I find you a-peeling.",
	"I must be a snowflake, because I've fallen for you.",
	"You must be a hell of a thief because you stole my heart from across the room.",
	"You know I'd like to invite you over, but I'm afraid you're so hot that you'll skyrocket my air-conditioning bill.",
	"If I were to ask you out on a date, would your answer be the same as the answer to this question?",
	"Are you a campfire? Cause you are hot and I want s'more.",
	"You wanna know what's beautiful? Read the first word again.",
	"Of all the beautiful curves on your body, your smile is my favorite.",
	"Did you have lucky charms for breakfast? Because you look magically delicious!",
	"I'm no organ donor, but I'd be happy to give you my heart.",
	"Hershey's makes millions of kisses a day.. .all I'm asking for is one from you.",
	"If I received a nickel for everytime I saw someone as beautiful as you, I'd have five cents.",
	"Is your name Swiffer? 'Cause you just swept me off my feet.",
	"Your lips look so lonely.... Would they like to meet mine?",
	"Did the sun come out or did you just smile at me?",
	"Can I borrow a kiss? I promise I'll give it back.",
	"Are you Willy Wonka's daughter, 'cause you look sweet and delicious.",
	"I play the field, and it looks like I just hit a home run with you.",
	"What's on the menu? Me-n-U",
	"I must be in a museum, because you truly are a work of art.",
	"If kisses were snowflakes, I'd send you a blizzard",
	"I need a dollar, but I only have 90 cents... do you want to be my dime?",
	
];

cd = false;

API.on(API.CHAT,flirt);

function flirt(data){
	console.log(data);
	rank = API.getUser(data.uid).role

	if (rank > 0 && data.message.slice(0,6) === "!flirt" && cd === false){
		so = data.message.slice(7,255);
		API.sendChat(so+' '+pickupLines[Math.abs(Math.floor(Math.random()*pickupLines.length))]);
		cooldown(10);
	}
}

function cooldown(time){
	cd = true;
	setTimeout(function(){
		cd = false;
	},time*1000);
}
