angular.module('GoodLuck', [])
    .controller('DontDie', DontDieC)
    .factory('LuckyFactory', LuckyFactory);


DontDieC.$inject = ['LuckyFactory', '$timeout'];




function DontDieC(LuckyFactory, $timeout) {
    var Gctrl = this;
    console.log(LuckyFactory);
    window.Gctrl = Gctrl;
    window.LuckyFactory = LuckyFactory;



    Gctrl.StartGame = function() {
            Gctrl.ActiveRoom = LuckyFactory.Room['Home']
            console.log('play works')
            this.Goaway = false;
            Gctrl.isLeaving = false;
            this.Goaway2 = false;


        }
        /* ************CHOICES FUNCTIONS*******EAT*******  */
    Gctrl.DoEat = function(Home) {
            // console.log("Things: " , LuckyFactory)
            Gctrl.Eat = LuckyFactory.Room['Home']
            console.info('working?');
        }
        /* ************CHOICES FUNCTIONS SLEEP **************  */
    Gctrl.DoSleep = function(Home) {
            // console.log("Things: " , LuckyFactory)
            Gctrl.Sleep = LuckyFactory.Room['Home']
            console.info('working?');
        }
        /* ************CHOICES FUNCTIONS   SCAVENGE **************  */
    Gctrl.DoScavenge = function(Home) {
            // console.log("Things: " , LuckyFactory)
            Gctrl.Scavenge = LuckyFactory.Room['Home']
            console.info('working?');
        }
        /* ************CHOICES FUNCTIONS   LEAVE  **************  */
    Gctrl.DoLeave = function() {
        // console.log("Things: " , LuckyFactory)
        //Gctrl.Leave = LuckyFactory.Room[]
        console.log("Room choices: ", Gctrl.ActiveRoom.Leave);
        Gctrl.isLeaving = true;
        console.info('working?');
       


    }

    Gctrl.ChangeRoom = function(room) {
        Gctrl.isLeaving = false;
        Gctrl.ActiveRoom = LuckyFactory.Room[room];
        console.log("Changed room to: ", room)
         Gctrl.ChoiceText = ""
    }
    Gctrl.Des = function(Description) {
        var rand = Math.floor((Math.random() * Gctrl.ActiveRoom.Description.length))
        Gctrl.Description = null;
    }


    Gctrl.dothing = function(Choice) {

        if (Choice == "Leave") {
            console.log("Choice to leave: ", Choice);
            Gctrl.DoLeave();
        } else {
            var rand = Math.floor((Math.random() * Gctrl.ActiveRoom.Things[Choice].length))
            console.log(rand, Gctrl.ActiveRoom.Things[Choice])
            Gctrl.ChoiceText = null;
            $timeout(function() {
                Gctrl.ChoiceText = Gctrl.ActiveRoom.Things[Choice][rand]
            }, 10)


        }

        console.log('nahmeen')
    }


};




function LuckyFactory() {



    //console.log('work!')





    function Room(roomInfo) {
        this.Name = roomInfo.name;
        this.Description = roomInfo.Description;
        this.Choices = roomInfo.Choices;
        this.Things = roomInfo.Things;
        this.Leave = roomInfo.Leave;
    };
    //  ************************HOME********************
    var Home = new Room({
        name: 'Home ...“ Fucking peace and quiet in the land with no sun.”',

        Description: [" Your eyelids droop at thought of staying awake any longer",
            "You lay there indecisively...",
            "You're hungry"
        ],

        Choices: ['Eat', 'Sleep', 'Scavenge', 'Leave'],

        Things: {
            'Eat': ["You pig out!",
                "You ate waaay too much!",
                "You’re elated!",
                "You’re still hungry",
                "You weren't that hungry"
            ],
            'Sleep': ["Sleep my child",
                " You slept tight",
                "You were awakened by the sounds of Coldplay and gunshots",
                " You tossed and turned  all night",
                " You awake from your slumber to find you're still alive... you try to find the strength to    carry on.",
                "You were on the cusp of remembering something important... It's bothering you.",
                "You can't remember your dreams... It drives you crazy",
                'You wake in a cold sweat.... the only thing you remember is.... "Je..th...ro"'

            ],
            'Scavenge': ['You found 2 dollars...PRAISE BABY JESUS',
                'You found 3.5 dollars...PRAISE BABY JESUS',
                'You found a picture... it brought back painful memories that you wish you could forget.',
                'You found nothing.',
                'You dropped money ',
                'You found Toliet paper You cried tears of joy.',
                ' Masked assaliants kicked your sorry ass and stole your money...',

            ],


        },
        Leave: ['TheHole', 'TheRuins']
    });

    //console.log(Home);
    //console.info(Room)
    //  ************************THE HOLE********************

    var TheHole = new Room({
        Name: 'The Hole...“ A place for fun in the land with no sun.”',

        Description: [
            "You arrived! The Hole looks extra shitty today. You notice a blonde sitting by herself.",
            " There's a lot more people than usual",
            " The hole seems weird today... Plus john is here",
            " .... You could cut the tension with a knife",
            " Drew looks at you in disgust and refuses to give you a drink"

        ],

        Choices: ['Drink', 'Chill', 'Leave'],

        Things: {
            'Drink': ['Meh',
                "That Moscow mule was amazing",
                " You ordered the cheapest whiskey.... as if you were punishing yourself.",
                "You guzzled it down... another?",
                "You didn’t finish it…",
                "Money's tight but you NEED this drink….."
            ],

            'Chill': [
                'You spilled your drink...Good Job',
                "As you sip on your drink, you hear a lover's quarrel going south…",
                'You notice a sketchy man at the bar…. You’ve never seen him before.',
                'You staring out the window....Leaves you fucking breathless...',
                "You're thinking too much...DRINK",
                "You're drinking too much...You should go home ",
                "You hear someone humming....sounds like I believe in a thing called love..."
            ],

            'ChillBad': [" Biff” Beat your ass like there was no tomorrow, no one came to your aid...or cared you died a cold meaningless death… repent",
                " You were feeling brave today…. Maybe today wasn’t such a good day to do so… Should've minded your business",
                "You lack the common sense that everyone else seems to have.,... Open your eyes!"
            ]
        },
        Leave: ['Home', 'TheRuins']

    });
    //console.info(TheHole)
    //  ************************THE RUINS********************
    var TheRuins = new Room({
        Name: 'The Ruins...“ The single most important set of buildings in the land with no sun.”',

        Description: [
            'You seem to have an extreme dislike for this place… yet here you are',
            'There’s a picture of a blonde that you can’t keep your eyes off… Focus',
            'You want to get this done quickly'

        ],

        Choices: ['Gather Info', 'Research', 'Leave'],

        Things: {
            'Gather Info': [' “ Rumor is old man  Jenkins keeps a stash of drugs!',
                ' “ Rumor is you can find  A good time at TheHole ',
                ' “No new information for ya! Sorry”',
                "“Your plug didn't show up”"

            ],

            'Research': [' Building plans ',
                'you learned about schematics',
                ' you learned about agriculture',
                'you learned about	hunting'
            ],
        },
        Leave: ['TheHole', 'Home']

    });
    //console.info(TheRuins);
    //  ************************THE SCAVENGER ROOMS********************
    function ScavRooms(roomInfo) {
        this.Name = roomInfo.Name;
        this.Items = roomInfo.Items;
        this.Choice = roomInfo.Choice;
    }

    var School = new ScavRooms({
        Name: 'Ole Abandoned School',
        Choice: ['Scavenge', 'Leave'],
        Items: ['Wood', 'scissors', 'Love note', 'money(small amounts)'],
    });

    var Hole = new ScavRooms({
        Name: 'The Hole...."After Dark"',
        Choice: ['Scavenge', 'Leave'],
        Items: ['Alcohol', 'Puke', 'money(medium amounts)', 'Knife'],
    });

    var Ruins = new ScavRooms({
        Name: 'The Ruins...This is a bad idea....',
        Choice: ['Scavenge', 'Leave'],
        Items: ['Stockpile of food', 'Stockpile of guns', 'Stolen Documents', 'money(Large amounts)', 'Vaccines'],
    });

    var Forest = new ScavRooms({
        Name: 'The Forest....Creepy',
        Choice: ['Scavenge', 'Leave'],
        Items: ['Cananbis', 'Fur', 'Meat'],
    });

    var Graveyard = new ScavRooms({
        Name: 'The Graveyard...Ghosts',
        Choice: ['Scavenge', 'Leave'],
        Items: ['money(small amounts)', 'clothes', 'trinket'],
    });

    var Neon = new ScavRooms({
        Name: 'Neon Genesis... I have no idea about this place',
        Choice: ['Scavenge', 'Leave'],
        Items: ['money(large amounts)', 'New Tech', 'Drugs(small amount)'],
    });
    var ScavList = ScavRooms
    var RoomList = Room
        // }
        //console.info(ScavRooms)
    return {
        ScavRooms: {
            School: School,
            Hole: Hole,
            Ruins: Ruins,
            Forest: Forest,
            Graveyard: Graveyard,
            Neon: Neon
        },
        Room: {
            Home: Home,
            TheHole: TheHole,
            TheRuins: TheRuins,

        }
    };
}