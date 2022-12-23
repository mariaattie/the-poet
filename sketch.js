let demonyms = 
    ["go oute", "go to dinner by yourself", "cry your lungs out", " love", "risk it", "go after them", "go travel", "talk to them", "hold hands", "text them", "find a job you love", "go to Brazil", "kiss them as if it was the last time", "go dancing", "laugh your lungs out", "give them your number", "go dance in the shower", "go sing in the mirror", "tell your mom you love her", "tell your dad you love him", "feel love", "let yourself be loved", "go backpacking in Costa Rica", "go take photography classes", "go run in the middle of a beach", "go skinny dipping with your friends", "go surfing", "learn something new", "go get them!", "write a poem", "take a deep breath", "go on a sail trip", "go camping", "give them a hug", "scream out what you are feeling", "treat yourself", "don't give up", "go eat a burger", "go biking around the monuments", "go to Paris to find love", "go get some sushi", "go for a Cosmo", "go smoke one :)", "go get a dog", "go call your parents", "go call your brother", "make them a surprise", "sing your favorite song", "go dancing", "go drink some water", "smile", "laugh", "give them a smile", "go blind travelling", "go write a song", "have fun", "don't be so hard on yourself", "don't cry over them", "move on", "give yourself time", "go get a drink", "go to the movies", "go out with your friends", "go eat that chocolate", "go visit a new place", "go jump in the sea", "go kitesurfing", "learn to play a new instrument", "give yourself some love", "don't give up", "but you will always be loved", "but I'll be always here with you", "don't be scared", "have some courage", "go sleep with them", "let yourself fall in love", "give them a chance", "just call them", "go to a roadtrip", "go live in a van", "do what makes you happy", "surround yourself with special people", "be special", "make a difference", "make a change", "go help someone", "got get them a present", "send them a meme", "go backpacking in Europe", "go to Carnival in Brazil", "go bungee jumping", "go parachuting", "laugh with your best friend", "cook your favorite meal", "be honest with yourself", "let it go", "don't waste it", "smile to a random person", "always say good morning", "be grateful", "trust the universe", "trust your gut", "go get a petals bath", "go get a massage", "go do what you've always wanted to", "close your eyes and breath", "take a second to live it", "be present", "don't let them go away", "don't run away", "but it is better with you in it", "go save someone's life", "be spontaneous", "don't be mad", "forgive them", "go get crazy", "let yourself go sometimes", "go dress up tonight", "go find love", "go for a date", "this moment doesn't really matters", "everything passes", "go do yoga", "go eat a bagel", "go bake a cake", "go skiing", "don't waste it", "don't stay at the sofa", "don't watch it go by", "live it", "don't be lazy", "go out of your comfort zone", "show the world your best", "do the best you can", "everything will be okay", "don't isolate yourself", "go make a new friend", "be open for new opportunities", "go be happy", "let yourself enjoy it", "don't overthink it", "confess your love", "don't spend it in your phone", "get off your phone", "give them your number", "go get their number", "face time more often", "go visit your family", "go study something new", "be crazy", "treat them right", "be honest", "be brave", "go for a walk in the rain", "forgive yourself", "live your best for them", "you should live it", "go drink a beer", "go on a surprise trip with your friends", "go to a soccer game", "go kiss them", "make the right choices", "trust your choices", "you are never alone", "enjoy everyday", "go to Australia", "go on a blind date", "give them a present", "be healthy", "do your thing", "don't live by the rules", "what matters is that you're happy", "it's ok to be sad sometimes", "moveto a new place", "read a new book", "don't be so serious", "don't be mad", "go eat with your friends", "don't accept anything less than you deserve", "you deserve the best", "be light", "don't be shy", "have some faith", "trust the process", "be patient", "live to the fullest", "build something new", "make yourself happy", "make yourself proud", "go drink a watermelon juice", "go eat ice cream", "go hiking on a Volcano", "go watch Harry Potter", "go painting", "send them a song", "what will you do about it?", "how do you want to live it?", "are you living it right?", "go for a ride", "believe in magic", "go to a concert", "create something new", "tell them what you feel", "YOLO", "leave a good legacy", "make someone happy", "trust the ones you love", "feel it", "be a doer"];

let val = 0;

function preload() {
    // font = loadFont('Changa-SemiBold.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
        
    background(28,36,40);
    
    let demonym = random(demonyms);
    
    let sentence = demonym;
    
    fill (220,226,229);
    textSize(width*0.05);
    // textFont(font);
    textLeading(width*0.05);
    text('life is too short,', width/20, height/2.5);
    text(sentence, width/20, height/2.5 + width*0.05, width/1.1); 
  textFont('Georgia');
}


function c() {
    removeElements();
}

function mousePressed() {
    val = val + 1;

    if (val % 2 != 0) {
        noLoop();
    } else {
        loop();
    }; 
}

function touchStarted() {
    val = val + 1;

    if (val % 2 != 0) {
        noLoop();
    } else {
        loop();
    };     
}