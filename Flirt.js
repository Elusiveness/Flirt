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
	"Do we go to the same school? Because I swear we have chemistry together!"
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
