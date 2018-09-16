import { Injectable } from '@angular/core';

@Injectable()
export class IntraEventsService {

  MyEvents = [
    {
      name: `Robotics`,
      img: `ev-1`,
      categories: [
        {
          _CategoryName : `Robo Soccer`,
          img: `r-7`,
          _Quote: `Steer your bot expertly to score the maximum number of goals and win the match.`,
          _MAPS: [``],
          
          _ProblemDescription : `Design a manually controlled robot capable of pushing blocks along with scoring maximum
           number of goals against other robots avoiding different obstacles.
          `,
           _EventRules: [
              `A minimum of 3 members and a maximum of 4 members are allowed per team`,
              `The members must bring IDENTITY CARDS of the college`,
              `No person should be a member of two teams.`,
              `No bot can be shared by two teams.`,
              `The participants will be provided with 220 Volts, 50 Hz standard AC supply.`,
              `Participants will have to themselves arrange for any other power supply required for their robot.`,
              `Teams cannot tinker with their bots during the run`,
              `LEGO kits or its spare parts or pre-made mechanical parts are not allowed. `,
              `Any kind of damage to the arena by the robot will lead to direct disqualification`,
              `Any act of misbehavior or misconduct will lead to immediate disqualification of the team`,
              `The decision of the co-ordinators will be final and binding`
            ],
          _Specification: [
              `The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%`,
              `The bot with external mechanism must be fitted in the cubical box of given dimension.`,              
              `The maximum weight of the bot should not exceed 2.5 kg.`,
              `The robot can be powered on-board or off-board`,
              `The potential difference between any two electrical points on the bot must not exceed 20 volts throughout the run.`,
              `Violation of any rule will lead to disqualification.`,
              `The robot should not grab/hold the ball at any point of time during the match.`
          ],
          _Rounds: [`The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their
           specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions
            in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded in 2nd time-out.
             If the ball is kicked from specified place then team is awarded bonus points.`,
            `This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.`,
            `Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be
             allowed to hold the ball.`],
          _Scoring: [
            `FINAL SCORE: 200*(No. of blocks placed) + 2*(time left in sec)-30*(no. of hand touches)- 100*(for 2nd time-out)
            -300(for restart)`
          ],
          _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
              {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
              {name: 'Piyush Raj', phn: '+91-8282926317'}
          ]
      },
        {
              _CategoryName : `Robo Race`,
              img: `r-8`,
              _Quote: `Steer your bot expertly to score the maximum number of goals and win the match.`,
              _MAPS: [``],

              _ProblemDescription : `Design a manually controlled robot capable of pushing blocks along with scoring maximum number of
               goals against other robots avoiding different obstacles.`,
              
              _EventRules: [
                `A minimum of 3 members and a maximum of 4 members are allowed per team`,
                `The members must bring IDENTITY CARDS of the college.`,
                `No person should be a member of two teams.`,
                `No bot can be shared by two teams.`,
                `The participants will be provided with 220 Volts, 50 Hz standard AC supply.`,
                `Participants themselves will have to arrange for other power supply required for their robot.`,
                `Teams cannot tinker with their bots during the play-offs`,
                `LEGO kits or its spare parts or pre-made mechanical parts are not allowed.`,
                `Any kind of damage to the arena by the robot will lead to direct disqualification`,
                `No attack on the opponent's bot is allowed.`,
                `Any act of misbehavior or misconduct will lead to immediate disqualification of the team.`,
                `The decision of the coordinators will be final and binding.`,
                ],
              _Specification: [
                `The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%`,
                `The bot with external mechanism must be fitted in the cubical box of given dimension.`,
                `The maximum allowable weight of the robot is 2.5 KG without any tolerance.`,
                `The robot can be powered on-board or off-board.`,
                `The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.`,
                `External weights on the bot are not allowed.`,
                `The robot should not grab/hold the ball at any point of time during the match.`,
   
              ],
              _Rounds: [
                  `The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their
                   specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different
                    positions in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded
                     in 2nd time-out.If the ball is kicked from specified place then team is awarded bonus points.
                  `,
                  `This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.`,
                  `Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will
                   be allowed to hold the ball.`
              ],
              _Scoring: [
                `SCORE = 100*[Number of blocks placed] +150*[Number of goals] +200*[Number of jackpots] -20*[Number of obstacles touched]
                 -50*[Number of times ball touches blocks] -100*[Second timeout taken] + [time left]`,
                 `Whoever scores the maximum number of goals, wins the competition`
              ],
              _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
                  {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
                  {name: 'Piyush Raj', phn: '+91-8282926317'}
              ]
          },
          {
              _CategoryName : `Rumble`,
              img: `r-9`,
              _Quote: `It ain’t how hard you hit; it’s about how hard you can get hit, and still keep moving forward.`,
              _MAPS: [``],
              _ProblemDescription : `Fight with 3 other competitors to snatch the box that you’re supposed to take home.
              `,
              _EventRules: [
                `It will be a match of 4 manual bots.`,
                `Where each team should carry a bot with maximum dimension of 30x30x30(including the hand for dragging) with 10%
                 tolerance.`,
                `Each bot will be placed at the corners of the arena. There will be a box at the center of the arena, the team which is able
                 to successfully take the box towards its end (corner) wins the game.`,
                `You have to take the box to your respective corner. Bots may engage in fight to do so. If a bot is dragged out of the arena
                 that bot will be eliminated. If the box is kicked out of the arena then there will be no winner.`,
                `The round will be for 3mins. In case time runs out there will be no winner again.`,
                `The teams can just pay the entry fee and are eligible to play it. They can replay it as many times. But during a match,
                 once the bot falls off the arena at that time the bot is out of that game. The bot can then replay in another game only.`,
                `Additional weights are allowed but the total weight of the bot should not exceed 5kgs.`,
                `The coordinators present there should give out the final verdict. No arguments with the coordinators will be tolerated.`
              ],
              _Specification: [``
              ],
              _Rounds: [``
              ],
              _Scoring:[ ``
              ],
              _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
                  {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'}
                ]
          },
          {
            _CategoryName : `Seguidor`,
            img: `r-2`,
            _Quote: `If you want to lead one day, learn how to follow..`,
            _MAPS: [``],
            _ProblemDescription : `To build an autonomous line follower bot based on logic gates and capable of following
            a white path on black surface and detecting crossroads and white blocks along the side
            of the track.
            `,
            _EventRules: [
              `The maximum team size is four.`,
              `The four participants should be only from Techno India, Salt Lake.`,
              `No person can be in two teams of the same event.`,
              `Damaging the path will lead to immediate disqualification.`,
              `Decision of Coordinators would be final.`,
              `A team can have maximum of five hand touches in each round.`,
              `After every hand-touch, the bot will be placed on the line; the first hand touch will be
              free but further will lead to a penalty.`,
              `If a team wants a restart, the bot will be placed at the starting point.`,
              `The run shall start from a predefined starting point.`,
              `The decision of the event coordinator(s) will be final and binding.`
             ],
            _Specification: [
              `The dimensions of the bot should be within 25cm*25cm*25cm.`,
              `The width of line would be 2.5cm approx.`
            ],
            _Rounds: [
              `The maximum time allotted to complete the task is 4 minutes. The bot has to follow the line on its way from
               start to finish within the time limit.
              `,
              `The maximum time allotted to complete the task is 5 minutes. The bot also has to detect checkpoints placed at specified points
              along the track length and also detect blocks present along the side of the track.
              `
            ],
            _Scoring: [`ROUND 1 : 1000 - [150 if restart (allowed once)]-50*[No. of hand touch] - 2*[Time in
              seconds]-100*[No. of timeouts(allowed twice)]
              `,
              `ROUND 2: 1000 - [150 if restart (allowed once)]-100*[No. of timeouts (allowed twice)]-
              50*[No. of hand touch] + [50 for stop at end] -2*[Time in seconds]
              +50[checkpoints correctly detected] +50[blocks correctly detected]
              `],
            _Coordinators: [
              {name: 'Dwitam Ghosh', phn: '+91-8293929077'},
              {name: 'Utsav Shah', phn: '+91-8697108688'},
              {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'}
            ]
         },
          {
              _CategoryName : `Track Hunter`,
              img: `r-4`,
              _Quote: `Follow lines. Break walls. Let’s make hunting ethical.`,
              _MAPS: [``],
              _ProblemDescription : `Build an autonomous line follower bot based on microcontroller which is capable of following a white path on black surface as well as walls (where line is not present) and detecting crossroads.`,
              _EventRules: [
                `The maximum team size is four.`,
                `The four participants should be only from Techno India, Salt Lake.`,
                `No person can be in two teams of the same event.`,
                `Damaging the path will lead to immediate disqualification.`,
                `Decision of Coordinators would be final.`,
                `The dimension of the bot should be 25x25x25 cm.`,
                `The width of line would be 2.5cm. approx.`,
                `There will be a total of 2 rounds.`,
                `The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.`,
                `A team can have maximum of five hand-touch one restart in 1st round, five hand-touch`,
                `Two restarts in 2nd round and maximum of two timeouts in each round.`,
                `After every hand-touch, the bot will be placed on the line, the first hand touch will be free
                but further will lead to a penalty. For 2nd round, after the hand touch bot will be placed on
                previous check-point.`,
                `If a team wants a restart, the bot will be placed at the starting point.`,
                `The run shall start from a predefined starting point.`,
                `The decision of the event coordinator(s) will be final and binding.`,
                `In the first round, the bot has to follow the line as well as one wall (where line is not
                present).`,
                `The walls will be approx. 15X15cms and present at the distance of 12-15 cm from the line.`,
                `In the 2nd round, the bot has to follow the line as well as multiple walls (where line is not
                present), has to detect the crossroads (checkpoints) and has to stop at the finishing point.`
               ],
              _Specification: [``
              ],
              _Rounds: [
                `For this round the bots have to complete the arena in minimum time.
                In this round only one wall is present on the left side (no checkpoints).
                SCORE: 1000 - [150 if restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds]
                  + 50 [if the bot follow the wall properly]
                `,
                `For this round the bots have to complete the arena in minimum time.
                In this round multiple walls and checkpoints present.
                All walls are present on the left side.
                If any team wants to skip, the bot will be placed on the 2nd checkpoints.
                In this round bot have to stop at finishing point.
                SCORE: 1000-300*[No. of skips]-150 [If restart] - 100*[No. of timeouts] - 50*[No. of hand      touch] -
                2*[Time in seconds] + 50*[checkpoints correctly detected] + 50*[no of walls] +   100*[if stop at
                Finishing points]`
              ],
              _Scoring: [``],
              _Coordinators: [
                {name: 'Dwitam Ghosh', phn: '+91-8293929077'},
                {name: 'Utsav Shah', phn: '+91-8697108688'},
                {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'}
              ]
          },
          {
              _CategoryName : `Micro-Machina`,
              img: `r-6`,
              _Quote: `Being on the line, will make you shine…`,
              _MAPS: [``],
              _ProblemDescription : `Build an autonomous line follower bot based on microcontroller which is capable of following a white path on black surface and detecting crossroads and walls.             
              `,

              _EventRules: [
                  `The maximum team size is four.`,
                  `The four participants should be from Techno India, Saltlake.`,
                  `No person can be in two teams of the same event.`,
                  `Damaging the path will lead to immediate disqualification. `,
                  `Decision of Coordinators would be final.`,
                  `The dimension of the bot should be 25x25x25 cm.`,
                  `The width of line would be 2.5cm. approx.`,
                  `There will be a total of 2 rounds.`,
                  `The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.`,
                  `A team can have maximum of five hand-touchs & one restart in 1st round and five hand-touch & two restarts in 2nd round.`,
                  `After every hand-touch, the bot will be placed on the line, the first hand touch will be free but further will lead to a penalty. For 2nd round ,after the hand touch bot will be placed on previous check-point.`,
                  `If a team wants a restart, the bot will be placed at the starting point.`,
                  `The run shall start from a predefined starting point.`,
                  `The decision of the event coordinator(s) will be final and binding.`,
                  `In the first round, the bot has to follow the line and detect the check points present on its way.`,
                  `In the final round the bot also has to detect the walls present on sides. The walls will be approx.  15X15cms and at the distance of 12-15 cm from the line.`,
                  `The bot has to stop at the finishing point.
                  `
              ],
              _Specification: [``
              ],
              _Rounds: [
                `For this round the bots have to complete the arena in minimum time.
                In this round only checkpoints are present (no walls).
                 Scoring: 1000 - [150 if restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] +
                 50*[checkpoints correctly detected]
                 `,
                `For this round the bots have to complete the arena in minimum time.
                In this round checkpoints and walls are present.
                Walls are present on the right side.
                If any team wants to skip, the bot will be placed on the 2nd checkpoints.
                In this round bot have to stop at finishing points.
                Scoring: 1000 – 300*[No. of skips]-150 [If restart] - 100*[No. of timeouts] - 50*[No. of hand touch] -
                2*[Time in seconds] + 50*[checkpoints correctly detected] + 50*[no of walls] + 100*[if stop at
                finishing points]
                `],
              _Scoring: [``],
              _Coordinators: [
                {name: 'Dwitam Ghosh', phn: '+91-8293929077'},
                {name: 'Utsav Shah', phn: '+91-8697108688'},
                {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'}
              ]
          }
      ]
    },
    {
      name: 'Cyber Crusade',
      img: 'ev-3',
      categories: [
        {
          _CategoryName : 'Mini Militia',
          img: `cc-7`,
          _Quote: `Go in with all guns blazing and take down your foe`,
          _MAPS:[``
        ],
          _ProblemDescription : `Looking forward to an intense multi-player combat with your doodle army ? Cyber crusade at EDGE'18
           is the place for you`,
          _EventRules:[
            `Every team must consist of 3 members.`,
            `Single participants are also welcome. Their teams will be formed by us.`,
            `No mod, Pro-pack or cracked apk is allowed. Your current game in the phone will be uninstalled and game provided by
            us will be installed there only before starting of the game.`,
            `The Organiser has the right to disqualify any registered player from the tournament for any valid reason.`,
            `Everyone should obey the commands of the coordinators.`,
            `Participants should switch their device to "AirPlane mode"`,
            `Winners will be qualified for subsequent rounds`
            ],
            _Specification:[
              `Game mode - Deathmatch`,
              `Match length - 10:00 min`,
              `Map Selection - By Voting (In case of a draw, co-ordinator's decision will be final)`,
              `Maps allowed - Catacomb, Outpost or No escape (any one)`
            ],
            _Rounds:[``],
            _Scoring:[``],
          _Coordinators: [
            {name: `Arkaprava Banerjee`, phn:'+91-8101041843'
          },{
            name: `Abhinaba Ray`, phn: `+91-9474979853`
          }
        ]
      },
      {
        _CategoryName : '8-Ball Pool',
        img:`cc-8`,
         _Quote:`Take aim and shoot`,
         _MAPS:[``
      ],
         _ProblemDescription : `Have a few tricks up your sleeve to pocket the right balls? Well this time we have got you covered`,
        _EventRules:[
          `Game mode - pass n' play(offline) - A simple 1 vs 1 mode`,
          `Selection of cue - Any common cue by mutual agreement, else beginner cue.`,
          `Selection of break - Toss.`,
          `Wasting time or delaying your opponent is strictly forbidden. You have to hand the device over immediately in case of a miss.`,
          `Use of any hacks, mods, etc that alter the normal game play will result in disqualification.`,
          `Winners will be qualified for subsequent rounds.`
          ],
          _Specification:[``],
          _Rounds:[``],
          _Scoring:[``],
          _Coordinators: [
            {name: `Arkaprava Banerjee`, phn:'+91-8101041843'
          },{
            name: `Abhinaba Ray`, phn: `+91-9474979853`
          }
          ]
      },
      {
        _CategoryName : 'Fifa 11 and 09',
        img:`cc-4`,
        _Quote:`Tuned down gameplay and graphics of FIFA 11 and 09 here paves the way for a richer competition coming from
        years of experience.`,
        _MAPS: [``],
      _ProblemDescription : `This Event is open for all those who take foootball as an emotion. You got what it takes? Come show us.`,
      _EventRules:[
            `Classic 11 and World 11 are not allowed. `,
            `Start match with a back pass after Kickoff.`,
            `Legacy defending is not allowed.`,
            `No Custom Formations and Tactics.`,
            `Offside On, Injuries off`,
            `No updated squads are allowed`,
            `Prelims Match Duration : 4min`,
            `Semis Match Duration : 4min`,
            `Finals Match Duration : 6min`,
            `Bring your own controllers and the respective drivers needed (if required).`,
            `Participants must bring their college/school id card.`,
            `(NOTE: The admin’s decision, in any case, is final and irrevocable)`
       ],
       _Specification:[``],
       _Rounds:[``],
       _Scoring:[``],
      _Coordinators:[ {name: `Sayantan Mondal`,phn:`+91-7688091091`},
      {name: `Md. Imran Khan`, phn: `+91-9007272859`}
          
    ]
    },{
      _CategoryName : 'Counter Strike 1.6',
      img:`cc-2`,
      _Quote:`The legendary 18-year-old game, ever thrilling and ever amazing. Gear up for some intense 5v5 action,
       filled with headshots and bunny hops.`,
      _MAPS:[
        `1. De_dust2`,
        `2. De_inferno`,
        `3. De_nuke`,
        `4. De_train`,
        `5. De_mirage`,
        `6. De_cbble`,
        `7. De_tuscan`,
        `SIDE / MAP SELECTION`,
        `Map(s) are to be chosen by a mutual agreement between the 2 teams, else by a proper veto.`,
        `Side choice (CT/T) for every map is decided by a knife round.`
    ],
    _ProblemDescription : `It consists of team
     based action where two teams battle it out with gun and strategies. Restricted to Techno India college
      students only. 5v5 standard matchmaking rules as always.`,
    _EventRules: [
      `Map(s) are to be chosen by a mutual agreement between the 2 teams, else by a proper veto.`,
      `Side choice (CT/T) for every map is decided by a knife round.`,
      `SETTINGS`,
      `Standard WCG tournament rules apply here`,
      `Regulation Win Condition – Race to 16 rounds or 11 rounds (will be decided on-spot) Regulation Start Money - $800`,
      `Overtime Win Condition – Best out of 6 rounds`,
      `Overtime Start Money - $10,000`,
      `Overtime Side Selection - In overtime, teams first play the side they last played in regulation`,
      `(NOTE: In case of deadlocks, the admin’s decision is final and irrevocable)`
    ],
    _Specification: [``],
    _Rounds: [``],
    _Scoring:[``],
    _Coordinators: [{
      name: 'Neel Roy',
      phn:`+91-9830052618`
    },
    {
      name: `SWASTIK SAMADDAR CHOWDHURY`,
      phn: `+91-9874436481`
    }
    ]
    },
    {
      _CategoryName : 'Need For Speed',
      img: `cc-6`,
       _Quote: `Good old Most Wanted '05, simply because it’s still the best of the lot and we love it.`,
       _MAPS:[
        `Bay Bridge`,
        `Dunwich Bay`,
        `Omega `,
        `Diamond (will be decided by coordinators)`
      ],
       _ProblemDescription : `If You have everything under control, you're not moving fast enough. Hit the gas, steer the wheel , race to finish line.`,
      _EventRules:[
            `NOS is not allowed.`,
             `Speed breaker is not allowed.`,
            `Cars not allowed - all GT cars (ford GT, Carrera GT etc.), BMW M3 GTR (except qualifying round), Lamborghini Murcielago.`,
            `No Bonus Cars.`,
            `Tuning is not allowed. You can do performance upgrade only.`,
            `Body parts are not allowed.`,
            `Decision of the admin will be treated as final and binding.`
        ],
        _Specification:[
``
        ],
        _Rounds: [
        `This is a time based qualifying round. Map for this round is CITY PERIMETER and participants can use only BMW M3 GTR for this
         round. Depending upon time participants will be qualified for the next round.`,
         `There will be a LAN match among 4 qualified participants. Among them 1st and 2nd will be qualified for the next round again.
         Laps: 2 laps.`,
         `Final Round: 4 finalists will play a LAN match in final. Among them 1st 2nd 3rd winners will be decided.
         Laps: 3 laps.`
        ],
        _Scoring:[``],
      _Coordinators: [
        {name: `Sohail Khan`, phn: `+91-7278282148`},
        {name: `Sujoy Das`, phn: `91-9073107423`}
         
      ]
    }
    ]
  },
  {
    name: `Compute Aid`,
    img: `ev-2`,
    categories: [
    {
        _CategoryName : `BugHunt`,
        img: `ca-2`,
        _Quote: `A coder is all about perfection and
        identifying the cracks and holes to make a flawed
        algorithm picture perfect.`,
        _MAPS: [``],
        _ProblemDescription : `Do you often find faults in others' codes? Or are you always on the hunt for errors whenever you see a
        code? Well, then this event might just be for you. Find out the trickiest of bugs in the simplest codes and
        correct them in the shortest and smartest way possible. Beat the others to the finish and claim the prize.`,
        _EventRules: [`It is a solo participation event.`,
                      `The coordinators have the right to change the rules and judging criteria of the contest at any
                      time they deem fit.`
                      ],


            _Specification: [``],
            _Rounds: [ 
              `It is an MCQ round on languages C, C++ or JAVA. This round will test the fundamental skill of
               participants in the language they choose.
               Team qualifies on basis of performance.`,
               `It is going to be a Debugging Round. Again C, C++ and Java will be the
               languages of choice for the teams (Teams are allowed to choose a different
               language for this round). All the teams will be provided with some buggy code snippets and they will have
               to correct these code snippets in the minimum number of steps possible. Teams will be marked based on
                the number of steps they take to
               correct a code snippet and also the time taken to correct it.`
            ],
            _Scoring: [``],
        _Coordinators: [
          {name: 'Prince Kumar', phn: `+91-7059507444`},
          {name: `Indrajit Salui`, phn: `+91-7209127729`}
        ]
    },
    {
        _CategoryName : `CodeOut`,
        img: `ca-4`,
        _Quote: `A call out to all you hidden gem coders to
        prove your abilities in this online event.`,
        _MAPS:[``],
        _ProblemDescription : `Won’t be able to come to the onsite events? Or maybe coding is your passion and you always want
        more problems to solve? If yes, then this online event is for you. Gear up and get ready for a bout of
        coding on your favourite coding platform CodeChef and stand a chance to win exciting cash prizes from
        the comfort of your home. Are you up for the challenge?`,
        _EventRules: [`This is an individual event.`,
                      `Code Out is a coding contest which will be held on the CodeChef platform. This is going to be an
                      individual contest for the duration of 3 hours in which you need to solve a given number of
                      programming problems.`,
                      `For this event you need to have a CodeChef handle (an account) using which you can submit
                      your solutions. Also please go through the CodeChef Code of Conduct before participating in the
                      event and abide by all the rules of the platform.`,
                      `Link will be available on a later date.` 

        ],

        _Specification: [``],
        _Rounds: [``],
        _Scoring: [``],
        _Coordinators: [
          {name: `Saquib ul Hassan`, phn: `+91-9804887223`},
          {name: `Debanik Dawn`, phn: `+91-98830 66725`}
        ]
    },
    {
        _CategoryName : `CryptoQuest`,
        img: `ca-5`,
        _Quote: `Put your cryptography and
        deciphering skills to test by proving yourself while
        solving the clues.`,
        _MAPS: [``],
        _ProblemDescription : `Can you solve the cipher above and make a meaningful sentence out of it? Well if you can then you are
        made for this event. In this event you need to be calm and gather all your wits to make meaning of most
        of the questions.
        Get ready for a cryptic experience!!!`,

        _EventRules: [`It is a solo participation event.`,
                      `Various questions involving ciphers and steganography will be provided to you. You will simply
                      have to give us the flags, which will be hidden within the questions.`,
                      `Knowledge of computer programming won’t be required to solve the problems, although it may
                      help to solve some problems faster.`,
                      `The event will be conducted on a Linux Distro like Ubuntu. Basic knowledge of such an
                      environment, although not necessary, can prove helpful during the event`,
                      `Teams won’t be allowed to use any external electronic devices.`,
                      `Internet access may be provided to the participants if the co-ordinators decide that any
                      question will require it. In case it is not provided, we will provide you with almost all the
                      knowledge, you will require to crack the questions.`,
                      `In the event of a tie, the team to solve the most difficult questions first will be considered the
                      winner.`,
                      `The co-ordinators have the right to change the rules and judging criteria of the contest at any
                      time they deem fit.`

        ],
        _Specification: [``],
        _Rounds:[``],
        _Scoring: [``],
        _Coordinators: [
          {name: `Suyash Mittal`, phn: `+91-7044793121`},
          {name: `Priyadarshini Purkayastha`, phn: `+91-8584944024`},
          {name: `Radhika Mohta`, phn: `+91-9163981049`}
        ]
    },
    {
        _CategoryName : `FlawLess`,
        img: `ca-6`,
        _Quote: `Just like the name suggests, as flawless as
        one’s codes become the better chance they have of
        winning.`,
        _MAPS: [``],
        _ProblemDescription : `If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then
        this is the perfect event for you. Code your heart out and race with the others to win the battle of wits
        and will. Be Flawless!`,
        
        _EventRules: [`Each team can have either 2 or 3 members.`,
                      `This event will consist of a single round of coding`,
              ],
        _Specification: [``],
        _Rounds: [
          `It will be an elimination round where the participants will have to solve 5 questions in a duration of 2 hours.
           The teams will be judged based on the number of problems they will solve and the time taken to solve the problems.
            The top teams with the best performances will be chosen as winners.`
        ],
        _Scoring: [``],
        _Coordinators: [
          {name: `Saquib Ul Hassan`, phn: `+91-9804887223`},
          {name: `Shiv Kumar`, phn: `+91-8820315476`}
        ]
    },
    {
      _CategoryName : `Web Design`,
      img: `ca-3`,
      _Quote: `There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.`,
      _MAPS: [``],
      _ProblemDescription : `Tired of seeing same old inflexible websites. Try working on User Experience and Responsive Web Design.`,
      
      _EventRules: [`Each team can have either single or 2 members.`,
                    `This event will consist of two rounds`,
                    `Round 1 will be of 1.5 hrs and a 2 Hrs of Final Round`,
                    `The Judge's call will be final`,
                    `In final Round bettor design will get more credits`
            ],
      _Specification: [``],
      _Rounds: [
        `Basic MCQs on Frontend Technologies. A webpage will be given, tweak here and there to obtain a responsive web page`,
        `Build a website out of the given WireFrame.`
      ],
      _Scoring: [``],
      _Coordinators: [
        {name: `Saquib Ul Hassan`, phn: `+91-9804887223`},
        {name: `Sanjeev Kumar`, phn: `+91-7003566634`}
      ]
  }
]
},
  {
    name: `Infocus`,
    img: `ev-4`,
    categories: [
        {
            _CategoryName : `Shoot-'M'-Up`,
            img: `fo-1`,
            _Quote: `Where you capture the soul infatuation with your cell phone.`,
            _MAPS: [``],
            _ProblemDescription : `A mobile photography competition where your photographic skills combined with creative approach and innovative ideas can bag you the first prize.`,
            _EventRules: [
              `In this mobile photography event, your photos can be used with proper copyright statements for Geekonix beneficial.`,
              `The topic is open. So just give us the best of you.`,
              `Incoming photograph submissions shall be screened for originality, authenticity, copyright infringement and maintaining
               editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing,
                libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes
                 "You". So the author of the image retains full ownership of the copyright in each entry.`,
              `NOT ALLOWED: HDR, Selective Colouring, Manipulation of pictures are not allowed. Tempering with EXIF is also not allowed.`,
              `ALLOWED: Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed. Cropping upto 15%
               is allowed. Proper aspect ratios should be maintained.`,
              `SUBMISSION RULES- 

              PARTICIPANTS NEED TO FILL A GOOGLE FORM <a href="https://goo.gl/forms/s0pujZQulAYBc8vz1" target="_blank">https://goo.gl/forms/s0pujZQulAYBc8vz1</a>`,
              
              `Willing participants are requested to submit their photos via e-mail to ‘ infocus.edge@gmail.com ’ with subject “ Submission For Intra - Shoot-m-up”`, 
              
              `Last date of submission is 6th March, 2018`
            ],
            _Specification: [``],
            _Rounds: [``],
            _Scoring: [``],
  
            _Coordinators: [
              {name: `Shubhradeep Basu`, phn: `+91-9748234607`},
              {name: `Biswajit Banerjee` , phn: `+91-8436238707`},
              {name: `Rohit Deb` , phn: `+91-9038220806`}
              ]
        },
        {
            _CategoryName : `Crumbs`,
            img: `fo-4`,
            _Quote: ` Landscape photography? That’s too mainstream. Time to go against
            the tide and explore the elegance in the most inconspicuous items
            around. The topic is open so just give us the best of you.`,
            _MAPS: [``],
            _ProblemDescription : `Showcase your skills to win the prize in an event
            that will put your creativity and talent to the test.`,
            _EventRules: [
              `This is an open end event. Anyone from any field with any type of camera can participate. Your photos can be used with
               proper copyright statements for Geekonix beneficial.`,
               `
               The registration fee for this event is 
               <b>PARTICIPANTS MUST SUBMIT A HARDCOPY TOO.</b>`,
              `Incoming photograph submissions shall be screened for originality, authenticity , copyright infringement, maintaining
               editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing,
                libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content.`,
              `Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.`,
              `NOT ALLOWED: Framing are not allowed. HDR, Selective Colouring, Manipulation of pictures are not allowed. tempering with
               EXIF is also not allowed.`,
              `ALLOWED: Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed.`,
              `Cropping upto 15% is allowed.`,
              `Proper Aspect ratios should be maintained.`,
              `SUBMISSION RULES- 

              PARTICIPANTS NEED TO FILL A GOOGLE FORM  <a href="https://goo.gl/forms/s0pujZQulAYBc8vz1" target="_blank">https://goo.gl/forms/s0pujZQulAYBc8vz1</a>`,
              
              `Last date of submission is  6th March,2018`,
              
              `Participants are requested to submit the photos in that email id ‘ infocus.edge@gmail.com ‘ with subject – “Submission for Intra - Crumbs” , 
              with details like NAME, CONTACT Ni., STREAM and YEAR).`
            ],
            _Specification: [``],
            _Rounds:[``],
            _Scoring: [``],
            _Coordinators: [
              {name: `Priyanka Sengupta`, phn: `+91-9748234607`},
              {name: `Nilanjana Biswas` , phn: `+91-9800996502`},
              {name: `Karan Paul` , phn: `+91-8906833180`}
              ]
        }
      ]
    },
    {
      name: 'Newron',
      img: 'ev-7',
      categories: [
          {
              _CategoryName : 'The Quiz',
              img:`ne-1`,
              _Quote:`Being inquisitive is how you win this event that tests your general knowledge`,
              _MAPS:[``],
            _ProblemDescription : `It is a general quiz event that tests the knowledge of an individual about this world.
             Questions are based on a range of topics namely Music, Entertainment, Literature, Art and Sports abbreviated as MELAS.`,
            _EventRules:[
                  `This is a team event. Each team should consist of 3 members.`,
                  `Each team is required to register by arriving at least an hour before the scheduled start.`,
                  `This is a general quiz, format will be made public on the day of the quiz.`,
                  `Any form of cheating will lead to disqualification.`,
                  `In case of a dispute the ruling of the quizmaster is final.`,
                  `There are some star marked questions to decide which team will qualify in case of a tie.`,
                  `Questions can compose of both audio-visual rounds and workout able passages apart from straight questions.`    
              ],
              _Specification:[``],
              _Rounds:[
                `This round is conducted to decide the number of teams qualifying for the Finals. Depending on the number of participating teams 
                in the event the number of rounds and the number of questions are decided.Pouncing is not allowed.`,
                `In this round, the top 3 teams who are able to score the maximum points are declared as the winners.`
              ],
              _Scoring:[``],
            _Coordinators:[ 

              {name: `Samanway Banerjee`, phn: `+91-799812802`},
              {name: `Sankarshan Sur` , phn: `+91-9830792503`},
              {name: `Alvin Karkun` , phn: `+91-7890150690`}
              ]
          },
          {
                _CategoryName : 'Electronically Yours',
                img:`ne-2`,
                _Quote:`It is all about how well you handle pressure and ultimately win using your knowledge in the domain of electronics`,
                _MAPS: [``],
                _ProblemDescription : `This event tests your knowledge of Electronics. It is a pure electronics-based team event that
                 requires the basic knowledge of Electrical and Electronics Circuits along with its various components, microprocessors
                  & microcontrollers and circuit designing.`,
                _EventRules:[
                      `A team can be of a maximum of 3 members, each of whom should be a college student.`,
                      `Use of calculators, mobile phones or any other electronic gadgets is strictly prohibited.`,
                      `Use of any of the above mentioned equipment may lead to straight disqualification.`,
                      `Decision of the coordinators shall be final and binding.`,
                  ],
                  _Specification:[``],
                  _Rounds:[
                    `This round shall consist of 30 multiple choice questions from the subjects of electronics engineering to
                     be completed in 45 minutes.
                    Each correct answer will carry one mark and there is no penalty for wrong answer.
                    The teams with more than a pre-decided cut-off marks will qualify for the next round of the event.`,
                    `This will be a practical on spot round varying from electronics circuit design, microprocessor designing or
                     simulations. The top 3 teams with efficient results will be declared as the winners`
                  ],
                  _Scoring:[``],
                _Coordinators:[ 
                  {name: `Alvin Karkun` , phn: `+91-7890150690`}
                ]
              },
              {
                    _CategoryName : 'Youth Parliament',
                    img: `ne-3`,
                    _Quote:`If you have a keen interest in the Indian parliamentary proceedings then this is an event where you can excel`,
                    _MAPS:[``],
                    _ProblemDescription : `Youth parliament is a form of modern debate to explore your knowledge about Indian parliamentary
                     system. A topic will be given for discussion in the house. The more you research ,the better you will be able to debate.`,
                    _EventRules:[
                          `The participant can use either Hindi or English i.e there is no language barrier.`,
                          `Students are allowed to participate individually or in a group of two.`,
                          `The marking will be done on the basis of quality of material and the quality of representation by the speaker.`,
                          `No abusive words are allowed inside the house.`,
                          `Any changes in the rules will be notified prior to the day of the event.`,
                          `TOPIC: UNIFORM CIVIL CODE IN INDIA (UCC)`
                      ],
                      _Specification:[``],
                      _Rounds:[
                          `This is a constructive speech round, participants will be given maximum 2 minutes to speak, for participant in group only one can speak.`,
                          `This is a rebuttal round, anyone who is against the speaker can ask the question to the speaker and if speaker fails to answer, 
                          the question is open to the house to be answered by anyone who is in favour of the speaker.
                          The limitation of time in cross questioning will be decided by the committee member according to the situation.`
                      ],
                      _Scoring:[``],
                    _Coordinators:[ 
              {name: `Ankit Anjan`, phn: `+91-9020349610`},
              {name: `Alvin Karkun` , phn: `+91-7890150690`}
          
                    ]
                  },
          ]
    },

{
  name: `Elevation`,
  img: `ev-11`,
  categories: [
  {
      _CategoryName : `Nirmaan`,
      img: `el-2`,
      _Quote: `Build a model bridge good enough to take you over the competitors and take you towards the coveted winner's prize`,
      _MAPS:[``],
      _ProblemDescription : `This event tests your art of constructing Bridges.
       Bring out the Engineer inside you and create a marvel out of the raw materials provided.`,
      _EventRules: [
          `Team consists of maximum 4 members.`,
          `Wooden Popsicle sticks, white glue will be provided on spot.`,
          `All other necessary materials (scissors , art paper, blades/other cutting materials, thread, clips etc) may be
           brought by the participants themselves.`,
          `Only wooden Popsicle sticks and white glue can be used to construct the bridges. No other materials are permitted.
           The wooden sticks can be cut to fit as desired.The amount of sticks used in the bridge is limited only by the
            Dimensions and Weight restrictions.`,
          `Please note the following when you design and build your bridge:`,
          `During the strength-test of the bridge, one horizontal bar will be placed on the road deck of the bridge.
           A downward force will be applied onto the horizontal bar. By placing the bar on the deck in this manner, we ensure
            that the truss members of the bridge are stressed during the strength test. The builder of the model bridge shall ensure
             that there is one 3cm X 3cm opening,through the side of the bridge structure, immediately beside the bridge deck, to
              accomodate the load testing.`,
          `PENALTIES:`,
          `The self weight of the bridge must be less than 250gms. If the above mentioned limit is crossed then points will be deducted
           as per the following: upto 5gms over limit–for each 1gms- 0.5 point will be deducted. 5-10 gms over limit–for each gm, 1 point
           will be deducted. 10 & above over limit–for each 1gms-1.5points will be deducted.`,
          `2 points will deducted from the score if the bridge deck is narrower than 3cm.`,
          `5 points will be deducted for each 1cm (or portion there of) that the bridge's height exceeds 18cm.`,
          `2 point will be deducted for each 1cm that the bridge's width exceeds 14cm.`,
          `2 point will be deducted for each 1cm that the bridge's length exceeds 60cm.`,
          `Grounds For DISQUALIFICATION:`,
          `Entries will be disqualified if they use a material other than fevicol and wooden popsicle sticks.`,
          `Entries will be disqualified if the bridge length is shorter than 50cm.`,
          `Entries will be disqualified if the height of the bridge is less than one popsicle stick.`,
          `Entries will be disqualified if there is evidence of heat treating(baking, etc).`,
          `Suspension Bridge Model is not permitted in this event.`,
          `Entries will be disqulified if the bridge width is shorter than 10cm.`,
          `Entries will be disqualified if there is no road on the bridge.`,
           `DURATION OF EVENT:`,
          `Construction: 4 hours`,
          `Load Test Outcome: Load Testing will be conducted on the 3rd event day`,
          `JUDGING And TESTING Of Bridges:`,
          `The bridges will be sbjected to a Efficiency-test in which a downward force will be applied to the bridge and the force
           will be gradually increased until the bridge fails. This force will be recorded on the Evaluation Sheet.A bridge is
            considered to fail when at least one member of the bridge breaks. During the test, the bridge will rest on two blocks
             placed apart.These blocks are loose and will resist the downward force applied to the bridge.
          The Strength Factor will be computed using the formula:
           Efficiency=(applied force)/(self weight of the bridge)`,
          `The bridge with the highest Strength Factor will be given a score of 100. All other bridge entries with in the category
           will be given a score less than 100, based on the ratio of their Strength Factor score to the highest Strength Factor
            score.`,
          'Decisions taken by Judges will be Final'
       ],
       _Specification: [`The length of the bridge must be between 50 cm and 60cm at its base. This is critical and the bridge will be disqualified
       if it is shorter than 50cm and will be penalized if it is longer than 60cm at the base.`,
      `The road surface of the bridge must be atleast 3cm wide along its entire length (sufficient to allow a match box to pass
         through)`,
      `The overall width of the bridge must be between 10cm and 14cm. This is critical and the bridge will be disqualified if it is
       wider than 14cm or higher than 18cm. Height of a zero member will not be considered.`,
      `The weight of the bridge shall not exceed 250 gms. " Weight means weight, including stick, glue and inclues all attachments
       submitted with the bridge. Penalties will be assessed against overweight bridges."`
      ],
       _Rounds:[``],
       _Scoring: [`Keep the glued joints cleaned and trimmed. At the joints, be sure to overlap the sticks and wipe off excess glue.`,
       `If the edges of the bridge are intended to be straight, use a straight edge while building the bridge.`,
       `Try to use some artistic imagination`,
       `Try to use engineering principles, to transfer the force from the middle of the bridge to its supports.`,
       `Comply with the Weights and Dimensions restrictions to avoid penalties.`
       ],
      _Coordinators: [
   
        {name: `Hritu Raj`, phn: `+91-8282800821`},
        {name: `Mrityunjay`, phn: `+91-8961383442`},
        {name: `Ayush`, phn: `+91-8282874097`}

          ]
      }
      ]
    },
    {
      name: `Food for Fun`,
      img: `ev-5`,
      categories: [
          {
              _CategoryName : `Food Relay`,
              img: 'ff-1',
              _Quote: `Think your way through food to solve riddles and puzzles.`,
              _MAPS: [``],
              _ProblemDescription : `Food Relay consists of four consecutive games which are to be played one after the other. The games
              under Food Relay are Who am I, Memory Game, Spot the difference, Riddles that examine your
              capability to recognize, instincts, thinking power, leadership and memory.EDGE 2018 gives you a chance to show your skills in team game.`,
              _EventRules: [`Each team must consists of 4 members.`,
                          `Participants will have to solve 4 activities with one particpant in each team doing one particular activity.`,
                          `Participants cannot skip one activity to reach the next without completing it.`,
                          `The team that completes the set of tasks most effectively and in the least time will win.`,
                          `The decision of the judges will be final.`
              ],

            _Specification: [``],
            _Rounds: [``],
            _Scoring: [``],

              _Coordinators: [ 
                {name: 'Raptilekha', phn: `+91-9073853754`}
              ]
          },
          {
              _CategoryName : `2 Minutes to Sell`,
              img: 'ff-2',
              _Quote: `Can you sell it in given time?`,
              _MAPS: [``],
              _ProblemDescription : `A product will be given. You will have to sell that product in the market. The judges will be the
               industrialists and you will have to convince them to buy your product being the entrepreneur.
              `,
              _EventRules: [ 
                `You can participate alone or in a group of two`,
                `You will be given 5 minutes of time for preparing the event`,
                `It is a time bound game`
              ],

              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],
              _Coordinators: [ 
                {name: 'Raptilekha', phn: `+91-9073853754`}
                
              ]
          },
          {
              _CategoryName : `Slogan Writing`,
              img: 'ff-3',
              _Quote: `A slogan can change anything.`,
              _MAPS: [``],
              _ProblemDescription : `A game where creative writing meets technicality.
               You will be given a product to which you will have to add a catchy tag line to attract the customers. `,
              _EventRules: [
                `You can participate individually or in a group of two`,
                `Time bound game`
              ],
              _Specification: [``],
              _Rounds:[``],
              _Scoring: [``],
              _Coordinators: [ 
                {name: 'Raptilekha', phn: `+91-9073853754`}
              
              ]
          },
          {
              _CategoryName : `Food Product Labelling`,
              img: 'ff-4',
              _Quote: `Label the food products correctly
              to win this event.`,
              _MAPS: [``],
              _ProblemDescription : `This event will give you a chance to showcase your vision as an entrepreneur by designing your own food
              product to launch it in the market. Food Product Labelling is an analytical event where food packages
              are to be designed with the most suitable chemical composition of a particular food item given. In short,
              participants will have to design a food package similar to the branded packaged food items they come
              across regularly in shops and supermarkets.`,
              _EventRules: [`Each team should consists of 2 members.`,
                  `The designing of food package along with the chemical composition of the given food items is to be completed within one
                  hour.`,
                  `The team with the closest chemical composition and the more attractive packge design will be declared the winner.`,
                  `In case of any discrepancy, the decision of the judges will be final.`
              ],
              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],
              _Coordinators: [ 
                {name: 'Raptilekha', phn: `+91-9073853754`}
              
              ]
          },
          {
              _CategoryName : `WizCase`,
              img: 'ff-5',
              _Quote: `Hungry enough for the prize? Hunt your food down and satiate yourself.`,
              _MAPS:[``],
              _ProblemDescription : `Do you want to be an industrialist?
              So this game is for you! A real life problem will be given to you and you will have to solve it by discussing it amongst yourself.
              The best solution wins the game.
              `,
              _EventRules: [
                `You can participate in a group of 3-4`,
                `You will have to draw a conclusion to the problem to end the discussion`,
                `Time bound game`
              ],
              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],
              _Coordinators: [ 
                {name: 'Raptilekha', phn: `+91-9073853754`}
              
              ]
            },
      ]
  },
{
    name: `Create It`,
      img: `ev-9`,
      categories: [
      {
        _CategoryName : `Mekanix`,
        img: `in-4`,
        _Quote: `Knowledge and creativity go hand in hand in
        this event that tests how updated and polished your mind
        is.`,
        _MAPS:[``],
        _ProblemDescription : `The participants are tested on their technical domain and then given raw materials out of which they are required to build a model.`,
        _EventRules: [`A team may have maximum of 4 members.`,
                      `No person should be a member of two teams.`,
                      `The members must bring ID cards of their respective colleges.`,
                      `All the participating teams will have to be present on the event area in time or else they will
                      be disqualified.`,
                      `The participating team should not damage other's model or equipment.`,
                      `Any act of misbehavior or misconduct will lead to direct disqualification.`,
                      `The decision of the coordinators will be final and binding.`,
                      `This will be 2 rounds in the event. Each team will would be given only 1 chance for each of the
                      rounds and the best score will be considered as per the scoring procedure for each round.`,
                ],
                _Specification: [``],
                _Rounds:[
                      `In this Round only two members of the team will be allowed to participate. The quiz will be taken in 3 divisions. The first part will be a MCQ-Aptitude test
                      based on general mathematics and physics with 10 questions to be concluded
                      in 15 minutes. The second part is logic-based where the questions/situations will be
                      dictated and the team will have to answer verbally. The third part will be a rapid fire round with expeditious questioning
                      based on general technical questions.`,
                      `In this model making Round all the members of the team have to participate.
                       Each team will be allotted with some amount of virtual money. The
                      team will have to purchase the equipment and build the model with the same.`
                ],
                _Scoring: [``],
        _Coordinators: [
          {name: 'Aditi Kumari', phn: `+91-8276960454`},
          {name: 'Nabanita Bhandary', phn: `+91-7059485319`},
          {name: 'Medha Mishra', phn: `+91-8013290587`}
        ]
    }
  ]
  }
  ];

  getEvent() {
    return this.MyEvents;
  }

  getCategory(subevent: string) {
    const category = this.MyEvents.find(
      (s) => {
        return s.name === subevent;
      }
    );

    return category.categories;
  }

  getSubEventCategory(event: string, subevent: string) {
    const category = this.getCategory(event);

    const subCategory = category.find(
      (s) => {
        return s._CategoryName === subevent;
      }
    );
    return subCategory;
  }
}
