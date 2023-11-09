//Messages

//Anxiety 
var control = "You don't have to control your thoughts; you just have to stop letting them control you." 
var confidence = "Confidence is not believing that everything will be ok. Its understanding that whatever happens, you will be ok. "
//Depression
var allBadThings = "All bad things come to an end."
var deserve = "You deserve to be happy."
var troubles = "Your troubles have not come to stay, they have come to pass." 
var closer = "Happiness is often closer than you think."
var stronger = "Be stronger than your sadness."
var brain = "There is hope, even when your brain tells you there isn’t."
var darkness = "No darkness lasts forever. And even there, there are stars."
var lies = "Depression lies. It tells you you’ve always felt this way, and you always will. But you haven’t, and you won’t."
var begins = "Life begins on the other side of despair."
var human = "You are allowed to feel messed up and inside out. It doesn’t mean you’re defective. It just means you’re human."
//Domestic Abuse 
var trapped = "It is easy to believe you will be trapped forever. You are not doomed to suffer. You can be safe and happy. "
//Loneliness 
var value = "Your value is not based on others inability to see it."
var connected = "We all feel alone sometimes, and in this we are connected."
var reconnected = "The loneliness you feel is actually an opportunity to reconnect with others and yourself."
var needToBeAlone = "Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself."
var abnormal = "There’s nothing abnormal about loneliness."
var innate = "Loneliness is proof that your innate search for connection is intact."
var season = "A season of loneliness and isolation is when the caterpillar gets its wings. Remember that next time you feel alone."
var worst = "The worst loneliness is to not be comfortable with yourself."
var walls = "People are lonely because they build walls instead of bridges."
var unloneliest = " Loneliness is the unloneliest feeling in the world, as everyone has experienced it."
//Low Self-esteem
var become = "It is not about what you are, it is about what you can become."

//Self-harm 
var healing = "Healing is not a linear process."
var kindness = "The world will not always be kind to you, so be kind to yourself. "
//Suicide 
var better = "Stay and give yourself a chance to make things better."

//Arrays

var anxiety = [control, confidence]
var depression = [allBadThings, deserve, troubles, closer, stronger, brain, darkness, lies, begins, human]
var domesticAbuse = [trapped]
var loneliness = [value, connected, reconnected, needToBeAlone, abnormal, innate, season, worst, walls, unloneliest]
var lowSelfEsteem = [become]
var selfHarm = [healing, kindness]
var suicide = [better]

//Display Functions 
//Anxiety 
let anxietyElement = anxiety[Math.floor(Math.random() * anxiety.length)];

function displayAnxietyMessage(){

    document.getElementById('message').innerHTML = anxietyElement
}

//Depression
let depressionElement = depression[Math.floor(Math.random() * depression.length)];

function displayDepressionMessage(){

    document.getElementById('message').innerHTML = depressionElement
}
//Domestic Abuse 
let domesticAbuseElement = domesticAbuse[Math.floor(Math.random() * domesticAbuse.length)];

function displayDomesticAbuseMessage(){

    document.getElementById('message').innerHTML = domesticAbuseElement
}
//Loneliness 
let lonelinessElement = loneliness[Math.floor(Math.random() * loneliness.length)];

function displayLonelinessMessage(){

    document.getElementById('message').innerHTML = lonelinessElement
}
//Low Self-esteem 
let lowSelfEsteemElement = lowSelfEsteem[Math.floor(Math.random() * lowSelfEsteem.length)];

function displayLowSelfEsteemMessage(){

    document.getElementById('message').innerHTML = lowSelfEsteemElement
}
//Self Harm
let selfHarmElement = selfHarm[Math.floor(Math.random() * selfHarm.length)];

function displaySelfHarmMessage(){

    document.getElementById('message').innerHTML = selfHarmElement
}
//Suicide 
let suicideElement = suicide[Math.floor(Math.random() * suicide.length)];

function displaySuicideMessage(){

    document.getElementById('message').innerHTML = suicideElement
}
