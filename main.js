angular.module('GoodLuck', [])
    .controller('DontDie', DontDieC)
    .factory('LuckyFac', LuckFac)

DontdieC.$inject = ['LucykFac'];




function DontDieC() {
    var Gctrl = this;
    console.log('yo!')

}




function LuckyFac() {




    function Room(Name, Description, Choices, Things) {
        this.Name = Name;
        this.Description = Description;
        this.Choices = Choices;
        this.Things = Things;
    }
    //  ************************HOME********************
    var Home = new Room({
        name: 'Home ...“ Fucking peace and quiet in the land with no sun.”',

        Description: [" Your eyelids droop at thought of staying awake any longer",
            "You lay there indecisively...",
            "You're hungry"
        ],

        Choices: ['Eat', 'Sleep', 'Scavenge', 'Leave'],

        Things = {
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
                'You wake in a cold sweat.... the only thing you remember is.... "Jethro"'

            ],
            'Scavenge': ['You found "Item"',
                'You found "Item" it brought back painful memories that you wish you could forget.',
                'You found nothing.',
                'You dropped " item" ',
                'You found " " You cried tears of joy.',
                ' Item(s)” were stolen from you',
                ' You’ve died…. Watch your back next time.'
            ]
        }
    });
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

        Things = {
            'Drink': ["That Moscow mule was amazing",
                " You ordered the cheapest whiskey.... as if you were punishing yourself.",
                "You guzzled it down... another?",
                "You didn’t finish it…",
                "Money's tight but you NEED this drink….."
            ],

            'Chill': [
                'You spilled  a drink on  “ Bifff”……',
                "As you sip on your drink, you hear a lover's quarrel going south…",
                'You notice a sketchy man at the bar…. You’ve never seen him before.',
            ],

            'ChillBad': [" Biff” Beat your ass like there was no tomorrow, no one came to your aid...or cared you died a cold meaningless death… repent",
                " You were feeling brave today…. Maybe today wasn’t such a good day to do so… Should've minded your business",
                "You lack the common sense that everyone else seems to have.,... Open your eyes!"
            ]
        }

    });

  //  ************************THE RUINS********************
    var TheRuins = new Room({
        Name: 'The Ruins...“ The single most important set of buildings in the land with no sun.”',

        Description: [
            'You seem to have an extreme dislike for this place… yet here you are',
            'There’s a picture of a blonde that you can’t keep your eyes off… Focus',
            'You want to get this done quickly'

        ],

        Choices: ['Gather Info', 'Research', 'Leave'],

        Things = {
            'Gather Info': [' “ Rumor is old man  Jenkins keeps a stash of “item!”',
                ' “ Rumor is you can find “ item(s)!” at “Room” ',
                ' “No new information for ya! Sorry”',
                "“Your plug didn't show up”"

            ],

            'Research': [' Building plans ',
                'schematics',
                ' agriculture',
                '	hunting'
            ],
        }

    });

}
  //  ************************THE SCAVENGER ROOMS********************
function ScavRooms(Name,Items,Choice){
    this.Name = Name;
    this.Items = Items;
    this.Choice = Choice;


var School = new ScavRooms ({
    Name: 'Ole Abandoned School',
     Choice:['Scavenge','Leave'],
    Items: ['Wood','scissors','Love note','money(small amounts)'],
    });
    
var Hole = new ScavRooms ({
    Name: 'The Hole...."After Dark"',
     Choice:['Scavenge','Leave'],
    Items: ['Alcohol','Puke','money(medium amounts)','Knife'],
    });
    
var Ruins = new ScavRooms ({
    Name: 'The Ruins...This is a bad idea....',
     Choice:['Scavenge','Leave'],
    Items: ['Stockpile of food','Stockpile of guns','Stolen Documents','money(Large amounts)','Vaccines'],
    });
    
var Forest = new ScavRooms ({
    Name: 'The Forest....Creepy',
     Choice:['Scavenge','Leave'],
    Items: ['Canabis', 'Fur','Meat'],
    });
    
var Graveyard = new ScavRooms ({
    Name: 'The Graveyard...Ghosts',
     Choice:['Scavenge','Leave'],
    Items: ['money(small amounts)', 'clothes','trinket'],
    });
    
var Neon = new ScavRooms ({
    Name: 'Neon Genesis... I have no idea about this place',
     Choice:['Scavenge','Leave'],
    Items: ['money(large amounts)', 'New Tech','Drugs(small amount)'
    ],
    });
    
}