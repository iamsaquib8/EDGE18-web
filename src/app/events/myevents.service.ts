
export class MyeventsService {

   MyEvents = [
    {
      name: `Robotics`,
      img: `ev-1`,
      categories: [
        {
          _CategoryName : `Pick a Parcel`,
          img: `r-1`,
          _Quote: `Put the right effort and things will get rightly placed.`,
          _MAPS: [``],
          
          _ProblemDescription : `Build a terrestrial bot that is capable of picking blocks through different hurdles and
           capable of placing them.`,
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
              `The decision of the co-ordinators will be final and binding`,
              `The bot has to solely traverse through the track picking and placing blocks.`,
              `The bot will start from the point marked as “START” on the arena and will have to complete the task in maximum
               5 minutes.`,
              `There will be penalty of 300 points for restart.`,
              `Placing each block at the correct position will fetch each team positive marks and the time remaining (in seconds)
               will be added as bonus to the final score. Each team is allowed a single restart in which negative points will be
               given to the team and they can begin again resetting the timer.`,
              `In case if the teams find their robots stuck at some position they can take hand touch. In such a case the bot will be
               placed in a position (by the co-ordinator) where it can move freely and negative points will be given on each Hand
               touch.`,
              `Each team will be provided with maximum 2 technical time-outs of 2 minutes; the first one is free while the second
               one will have a penalty of 100 during which they can repair their bots`
              ],
          _Specification: [
            `Maximum allowable dimensions of the bot will be 25cm x 25cm x 25cm with a tolerance of 10%.`,
              `The maximum weight of the bot should not exceed 2.5 kg.`,
              `The robot can be powered on-board or off-board`,
              `The potential difference between any two electrical points on the bot must not exceed 20 volts throughout the run.`,
              `Violation of any rule will lead to disqualification.`
          ],
          _Rounds: [``],
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
              _CategoryName : `Line Follower`,
              img: `r-2`,
              _Quote: `Follow the trail and glory
              waits for you at the finishing line.`,
              _MAPS: [``],
              
              _ProblemDescription : `To build an autonomously controlled robot capable of following a white line on a black
              surface or black line on white surface.`,
              _EventRules: [
                  `A team can consist of maximum 4 members.`,
                  `The candidates may or may not be from different colleges.`,
                  `No person can be in two teams of the same event.`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams.`,
                  `Any kind of damage to the arena by the robot will lead to direct disqualification.`,
                  `Any act of misbehaviour or misconduct will lead to immediate disqualification of the team.`,
                  `Damaging the path will lead to immediate disqualification.`,
                  `The decision of the co-ordinators will be final and binding.`,
                  `After every reset, the bot will be placed at the last check point but each will lead to a penalty
                  (the timer will not be paused during reset).`,
                 `If a team wants a restart, the bot will be placed at the starting point.`,
                 `The run shall start from a predefined starting zone.`,
                 `The decision of the event coordinator(s) will be final and binding.`,
                 `The maximum time allotted to complete the task is 4 minutes in the prelims and 6 minutes in the finals.`,
              ],
              _Specification: [
                  `The width of line will be 2.5cm (approx.).`
              ],
              _Rounds: [
                  `A team can have maximum of three resets and one restart.`,
                  `A team can have maximum of five resets and three restarts.`,
                  `A team can have maximum of five resets and three restarts. For this round the arena may contain inclinations
                   and see-saw and the path may also be blocked by cubical blocks which should be avoided by the bot.`
              ],
              _Scoring: [
                  `20 Points will be awarded for successfully crossing each checkpoint.`,
                  `100 points will be awarded for successfully reaching the end point.`,
                  `150 Points will be awarded for stopping at the end point.`,
                  `Penalty of 20 points will be imposed for each reset.`,
                  `Penalty of 50 points will be imposed for each restart.`
              ],
              _Coordinators: [
                {name: 'Utsav Shah', phn: '+91-896710868'},
                {name: 'Dwitam Ghosh', phn: '+91-8293929077'}
                ]
          },
          {
              _CategoryName : `Maze Solver`,
              img: `r-3`,
              _Quote: `Only the craze to solve the
              maze can help you win and be subjected to praise.`,
              _MAPS: [``],
              
              _ProblemDescription : `To build an autonomously controlled bot capable of finding its way through a maze and
               arrive at the final destination.`,
              _EventRules: [
                  `A team consist of maximum 4 members`,
                  `The candidates may or maynot be from different colleges`,
                  `No person can be in two teams of the same event`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams.`,
                  `Any kind of damage to the arena by the robot will lead to direct disqualification.`,
                  `Any act of misbehavior or misconduct will lead to immediate disqualification of the team.`,
                  `Damaging the path will lead to immediate disqualification.`,
                  `The decision of the coordinators will be final and binding.`,
                  `The bot has to stop at the finish point.`,
                  `The maximum time allotted to complete the task is 5 minutes in the prelims and 10minutes in the finals.`,
                  `If a team wants a restart, the bot will have to start from a predefined starting point with timer reset and a penalty.`,
                  `The decision of the event coordinator(s) will be final and binding.`
              ],
              _Specification: [
                `The arena will have white surface with black line of width 2.5cm (approx.)`,
                `Bot dimension must not exceed 25cm*25cm*25cm (tolerance of 10% is accepted for each parameter).`
              ],
              _Rounds: [
                `The bot has to move from starting point to finish point in the minimum time. A team can have maximum of three reset
                 and one restart in this round`,
                `Once the bot reaches the finish point it will be placed at the starting point again
                 and the bot has to reach the finish point once more using the shortest path possible and in this round five resets
                  and three restarts are allowed.`
              ],
              _Scoring: [
                `150 Points will be awarded for reaching the finish point.`,
                `100 Points will be awarded for stopping at the finish point.`,
                `Penalty of 20 Points will be imposed for each resets.`,
                `Penalty of 50 Points will be imposed for each restart.`
              ],
              _Coordinators: [
                {name: 'Dwitam Ghosh', phn: '+91-8293929077'},
                  
                {name: 'Utsav Shah', phn: '+91-896710868'}
                
              ]
          },
          {
              _CategoryName : `Wall Street`,
              img: `r-4`,
              _Quote: `Follow the trail and glory
              waits for you at the finishing line.`,
              _MAPS: [``],
              _ProblemDescription : `Build an autonomous line follower bot based on microcontroller which is capable of following lines as
               well as walls (where line may or may not present) and detecting crossroads.`,
               
              _EventRules: [
                  `A team can consist of maximum 4 members.`,
                  `The candidates may or may not be from different colleges.`,
                  `No person can be in two teams of the same event.`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams.`,
                  `Any kind of damage to the arena by the robot will lead to direct disqualification.`,
                  `Any act of misbehaviour or misconduct will lead to immediate disqualification of the team.`,
                  `Damaging the path will lead to immediate disqualification.`,
                  `The decision of the co-ordinators will be final and binding.`,
                `The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.`,
                `The run will start from a predefined starting point.`,
                `A team can have maximum of six hand-touches, two restarts, and two timeouts in each round.`,
                `If a team wants a restart, the bot will be placed at the starting point.`,
                `After every hand-touch, the bot will be placed on previous check-point.`,
                `The walls will present at a distance of 12-15 cm from the path of the robot.`,
                `Any collision with the wall treat as penalty.`,
                `When the robot follow the wall bot has to indicate that by glowing and LED or by sounds buzzer.`,
              ],
              _Specification: [
                `The dimension of the bot should be 25x25x25 cm.`,
                `The width of line would be 2.5cm approx.`
              ],
              _Rounds: [
                `The bot has to follow the line as well as the wall, detect check points and indicate wall.`,
                `The bot has to follow the line as well as the wall, detect check points, indicate wall
                and has to stop at the finishing point.`,
                `Same as Round 2`
              ],
              _Scoring: [
                `Penalty of 150 points will be imposed for number of restarts taken.`,
                `Penalty of 100 points will be imposed for number of timeouts taken.`,
                `Penalty of 30 points will be imposed for each hand touch.`,
                `Penalty of 100 points will be imposed for each skip.`,
                `Penalty of 20 points will be imposed for each collision with wall.`,
                `50 points will be awarded for each wall if indicated properly.`,
                `50 points will be awarded for each detection of checkpoint.`,
                `100 points will be awarded for stopping at finishing point.`
              ],
              _Coordinators: [
                {name: 'Dwitam Ghosh', phn: '+91-8293929077'},
                  
                {name: 'Utsav Shah', phn: '+91-896710868'}
              ]
          },
          {
              _CategoryName : `Marino Drift`,
              img: `r-5`,
              _Quote: `Strategize with your bot to win glory on both the terrains.`,
              _MAPS: [``],
              _ProblemDescription : `Build terrestrial bot that is capable of traversing the arena and pushing/picking the blocks and 
              an aquatic robot capable of placing the floating blocks/balls in water.`,

              _EventRules: [
                  `A minimum of 3 members and a maximum of 4 members are allowed per team.`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams.`,
                  `The participants will be provided with 220 Volts, 50 Hz standard AC supply`,
                  `Participants will have to themselves arrange for any other power supply required for their robot`,
                  `Teams cannot tinker with their bots during the run.`,
                  `LEGO kits or its spare parts or pre-made mechanical parts are not allowed`,
                  `Any kind of damage to the arena by the robot will lead to direct disqualification`,
                  `Any act of misbehavior or misconduct will lead to immediate disqualification of the team`,
                  `The decision of the co-ordinators will be final and binding`,
                  `Each team should have both terrestrial robot and an aquatic robot to participate in this event`,
                  `The terrestrial robots can use either picking or pushing mechanism for placing the blocks. `,
                  
              ],
              _Specification: [
                `Maximum allowable dimension for the terrestrial bot will be 25cm x 25cm x 25cm with a tolerance of 10%`,
                `The weight of the robot should not exceed 2kg.`,
                `The robot can be provided on-board or off-board`,
                `The Potential difference between any two electrical points and the robot must not exceed 22 volts throughout the run`
              ],
              _Rounds: [
                `Every team will be given a puzzle, every team will have to solve the puzzle
                and perform the given task in minimum time by finding and placing the respective blocks containing the digits of the
                 answer at the specific locations. The terestial bot will be given a total of 4 minutes and the aquatic bot will be
                 given 3 minutes.Placing each block at their correct position will fetch each team positive marks and the time 
                 remaining (in seconds) will be added as bonus to the final score. If the team finds their robot stuck at some position
                they can take a hand touch and the bot will be placed in a position (by the co-ordinator) where 
                it can move freely which will fetch negative points. Only 1 technical timeout of 3 minutes and 1 restart is allowed 
                (with negative points).`,
                `A knockout round (similar to that of Round 1 with slight On-spot modifications) in which two teams will complete against 
                each other. The first team to complete the task will win and qualify for the 3rd Round.`,
               `A time trial round (similar to that of Round 1 with slight On-spot modifications) where the total time taken 
               (in seconds) to complete the task will be the final score of the team. The winners will be declared on the basis of final score.`
                ],
              _Scoring: [
                `Placing each block at its correct position: +100 points`,
                `Completely placing all blocks: +100 points `,
                `Restart: -200 points `,
                `Hand-touch: -20 points`,
                `Time remaining Bonus (terrestrial): Time remaining (in seconds) points`,
                `Time remaining Bonus (aquatic): Time remaining (in seconds) *2 points`,
                `Final score: Summation of the above scores.`
                ],
              _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
              {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
              {name: 'Piyush Raj', phn: '+91-8282926317'}
              ]
          },
          {
              _CategoryName : `Double-Up`,
              img: `r-6`,
              _Quote: `You want to double-up, then first toe the line.`,
              _MAPS: [``],
              _ProblemDescription : `A fun filled event in which your bot has to compete with three other bots to take glory home`,
              
              _EventRules: [
                  `All the events are one round event.`,
                  `Multiple registrations are allowed i.e. after completing one round, team may try again with fresh registration. `,
                  `Only On-spot registrations will take place for the events under this category`,
                  `Method of mobility used for the robot which leads the robot to lose contact with the ground is not allowed.`,
                  `The decisions taken by the coordinators will be final and binding.`
              ],
              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],
              _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
              {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
              {name: 'Piyush Raj', phn: '+91-8282926317'}
              ]
          },
          {
              _CategoryName : `Robo Soccer`,
              img: `r-7`,
              _Quote: `Steer your bot expertly to
              score the maximum number of goals and win the match.`,
              _MAPS: [``],
              _ProblemDescription : `Design a manually controlled robot capable of pushing blocks along with scoring maximum
               number of goals against other robots avoiding different obstacles.`,
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
                  `No attack on the opponent bot is allowed.`,
                  `Any act of misbehavior or misconduct will lead to immediate disqualification of the
                  team.`,
                  `The decision of the coordinators will be final and binding`
                ],
              _Specification: [
                `The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%`,
                `The bot with external mechanism must be fitted in the cubical box of given dimension.`,
                `The maximum allowable weight of the robot is 2.5 KG without any tolerance.`,
                `The robot can be powered on-board or off-board.`,
                `The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.`,
                  `External weights on bot are not allowed.`,
                  `The robot should not grab/hold the ball at any point of time during the match.`
              ],
              _Rounds: [
                `The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their specified places.
                 First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions in arena. Two time-outs 
                 provided of 2 minutes. If Mechanical fault occured, negative points will be awarded in 2nd time-out. Ball kicked from specified place
                  awarded bonus points.`,                  
                  `This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.`,
                  `Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be allowed to hold the ball`
              ],
              _Scoring: [
                `SCORE = 100*[Number of blocks placed] +150*[Number of goals] +200*[Number of jackpots]
                  -20*[Number of obstacles touched] -50*[Number of times ball touches blocks] -100*[Second timeout taken] + [time left]`,
                `Whoever scores the maximum number of goals, wins the competition`
              ],
              _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
              {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
              {name: 'Piyush Raj', phn: '+91-8282926317'}
              ]
          },
          {
            _CategoryName : `Blitzkrieg`,
            img: `r-9`,
            _Quote: `A moment of pain is worth a
            lifetime of glory. The bot that survives till the end emerges
            as the victor.`,
            _MAPS: [``],
            _ProblemDescription : `Design & construct a manually controlled robot  capable of fighting a one on one tournament.
            Think of a robot with sophisticated weapons that can destroy your enemy and make you win .`,
            _EventRules: [
                `Team Specification: Any team can participate in Blitzkrieg. A team should consist of a minimum of 4 participants.
                 These participants can be from same or different institutes. `,
                `Team Name: Every team must have a name which must be unique. EDGE reserves the right to reject entries from any Team whose
                 name it deems inappropriate, offensive or conflicting. Organizers must be notified if a team's name has been changed.`,
                `Team Representative: Each team must specify their Team Representative (Leader) at the time of registration. All important
                 communications between EDGE and the registered teams will be done through their Team Representative. The Team
                  Representatives must submit valid contact details (phone no., email ID etc.) at the time of registration.`,
                `There will be three rounds, FOUR minutes each. Any team that is not ready at the time specified will be disqualified.
                 The name of your machine must be prominently displayed on the machine.`,
                `In no case should the arena be damaged by any bot. The competition will be played on a knock-out basis. `,
                `A bot will be declared 'KNOCKED-OUT' if it is unable to travel a distance of 6 inches in 30 seconds.`,
                `If no bot immobilizes then winner will be declared on the basis of the points scored.`,
                `The organizers reserve the rights to change any or all of the above rules as they deem fit. Change in rules,
                 if any will be notified to the registered teams.`,
                `Violation of any of the above rules will lead to disqualification.`,
                `Decision of organizers will be final and binding on all.`,
                `Safety Rules: Compliance with all event rules is mandatory. It is expected that competitors stay within the rules and procedures of their
                 own accord and do not require constant policing.`,
                `Special care should be taken to protect the on-board batteries and pneumatics, robot without proper protection will not
                 be allowed to compete.`,
                `If you have a robot or weapon design that does not fit within the categories set forth in these rules or is in some way
                 ambiguous or borderline, please contact the event organizers. Safe innovation is always encouraged, but surprising the
                organizers with your brilliant exploitation of a loophole may cause your robot to be disqualified before it even competes.`,
                `Each event has safety inspections. It is at their sole discretion that your robot is allowed to compete.
                 As a builder you are obligated to disclose all operating principles and potential dangers to the inspection staff.`,
                `Proper activation and deactivation of robots is critical. Robots must only be activated in the arena, testing areas,
                 or with expressed consent of the event coordinators.`,
            ],
            _Specification: [
              `All weapons must have a safety cover on any sharp edges.`,
                `All participants have to build and operate robots at their own risk. Combat robotics is inherently dangerous.
                 There is no amount of regulation that can encompass all the dangers involved. Please take care to not hurt yourself
                  or others when building, testing or competing`,
                `Any kind of activity (repairing, battery handling, pneumatics systems etc.) which may cause damage to the surroundings
                 during the stay of the teams in the competition area should not be carried out without the consent of organizers.
                  Not following this rule may result in disqualification. `,
                `All the resources provided at the time of competition from the organizers.`,
                `Once the robots have entered into the arena, no team member can enter into the arena at any point of time.
                 In case if a fight has to be halted in between and some changes have to be done in the arena or condition on the robot(s),
                  it will be done by organizers only.`,
                `Dimensons and Fabrications : The machine should fit in a box of dimensions 600mm x 600mm x 350mm (l x b x h) at any given point during the match. `,
                `The external device used to control the machine or any external tank is not included in the size constraint. `,
                `The machine should not exceed 50 kg in weight including the weight of pneumatic source/tank. In case of wireless robot,
                 if the battery is on-board then the weight should not exceed 60 kg. `,
                `Power Sources: The machine can be powered electrically only. Use of an IC engine in any form is not allowed. `,
                `Each team must prepare its own power sources. Only 220V volt AC sources will be provided at the arena, but can only be
                 used in the form of DC voltage. The teams have to bring their own battery eliminators.`,
                `The voltage difference between any two points in the machine should not be more than 36V DC at any point of time.`,
                `All connections should be made safe to prevent short circuits and battery fires. Any unsafe circuitry may be asked to
                 be replaced; failure to do so will result in disqualification.`,
                `Use of damaged, non-leak proof batteries may lead to disqualification.`,
                `Change of battery will not be allowed during the match.`,
                `It is suggested to have extra batteries ready and charged up during competition so that on advancing to next level,
                 you don't have to wait or suffer due to uncharged battery. `,
                `If a team do not show up on allotted slot, they will be disqualified. `,
                `Mobility : All bots must have clearly visible and controlled mobility mechanism in order to compete.`,
                `Methods of mobility may include: Rolling (wheels, tracks or the whole robot),
                 Walking (linear actuated legs with no rolling or cam operated motion) & Shuffling (rotational cam operated legs).`,
                `Jumping and hopping is not allowed`,
                `Flying (using aerofoil, helium balloons, ornithopters, etc.) is not allowed.`,
                `Any other method of mobility which leads the robot to lose contact with the ground is not allowed.`,
                `Robot control requirements: Both wired and wireless remote controls are allowed in the event. `,
                `All wires coming out of the robot should be bundled as a single unit`,
                `The wires should be properly protected and insulated. `,
                `The wire should be sufficiently long so as to remain slack at all time during the competition. `,
                `In case of wireless remote controls, the remote should have atleast two frequency operations to prevent interference
                 with other team.`,
                `Teams are recommended to attach a pipe to bot in vertical direction through which wires come out. The length of pipe
                 will not be considered in bot dimension.`,
                `Weapon Systems: Robots can have any kind of cutters, flippers, saws, lifting devices,spinning hammers etc. as weapons with following
                 exceptions.`,
                `Limitations: Any kind of inflammable liquid / liquid based weapons. `,
                `Smoke or dust weapons.`,
                `Flame-based Weapons.`,
                `Any kind of explosive or interionally ignited solid or potentially ignitable solid.`,
                `Nets, tape, glue, or any other entanglement device.`,
                `High power magnets or electromagnets.`,
                `Radio Jamming, Tasers, Tesla coils, or any other high-voltage device.`,
                `Tethered or un-tethered projectiles.`,
                `Spinning weapons which do not come in contact with the arena at any point of time are allowed.`,
                `Pneumatics and hydraulics: `,
                `The robot must use non-inflammable and non-corrosive fluids to power pneumatic and hydraulic devices. `,
                `Maximum pressure in the tank containing pneumatic fluid should not exceed the limit of 10 bars and there should be a
                 provision to check the pressure in the tank. `,
                `All hydraulic liquids are required to be non-corrosive and your device should be leak proof. The maximum pressure in
                 cylinder should not exceed the rated pressure at any point of time.`,
                `Participants must be able to indicate the used pressure with integrated or temporarily fitted pressure gauge.`,
                `You must have a safe way of refilling the system `,
                `All pneumatic components on board a robot must be securely mounted. Care must be taken while mounting the pressure
                 vessel and armour to ensure that if ruptured it will not escape the robot. `,
            ],
            _Rounds: [``],
            _Scoring:[
              `Points will be awarded, once in a round, if the bot reaches opponent's starting point, which can be referred to as
               safe zone.`,
              `Points of the opponent team will be deducted if their bot is pushed into the danger zone (Remaining corners of the
                arena apart from safe zone).`,
              `Points will be awarded for pushing the opponent's bot out of the arena.`,
              `Specific scoring will be updated soon.`
            ],
            _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
            {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
            {name: 'Piyush Raj', phn: '+91-8282926317'}
            ]
        },
          {
              _CategoryName : `Robo Race`,

              img: `r-8`,
              _Quote: `The better you maneuver,
              the farther you reach.`,
              _MAPS: [``],
              _ProblemDescription : `Build a bot (wired/wireless) that is capable of traversing the arena manually bypassing
               the hurdles in its path.`,
              _EventRules: [
                  `A minimum of 3 members and a maximum of 4 members are allowed per team.`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams`,
                  `The participants will be provided with 220 Volts, 50 Hz standard AC supply.`,
                  `Participants will have to themselves arrange for any other power supply required for their robot`,
                  `Team cannot tinker with bots during the run.`,
                  `LEGO kits or its spare parts or pre-made mechanical parts are not allowed`,
                  `Any kind of damage to the arena by the robot will lead to direct disqualification`,
                  `Any act of misbehaviour or misconduct will lead to direct disqualification.`,
                  `Any act of misbehaviour or misconduct will lead to immediate disqualification.`,
                  `Any decision of the co-ordinators will be final and binding`,
                  `ROUND 1: BEAT THE CLOCK`,
                  `In this round, the bot has to solely traverse the track.`,
                  `The bot will start from the point marked as “START” on the arena and will have to complete the arena in
                  maximum 5 minutes.`,
                  `The track will be sub divided into several checkpoints.`,
                  `Bots will start from the point marked as “START” on the arena.`,
                  `Teams qualifying this round will be considered for the next round.`,
              ],
              _Specification: [
                  `Maximum allowable dimensions of the bot will be 25cm x 25cm x 25cm with a tolerance of 10%`,
                  `The maximum weight of the bot should not exceed 2 kg.`,
                  `The robot can be powered on-board or off-board.`,
                  `The potential difference between any two electrical points on the bot must not exceed 2 volts throughout the run.`,
                  `Violation of any rule will lead to disqualification.`,
                  ` Arena Specification :`,
                  `The arena will contain obstacles in the form of sand, gravel, mud, bumpers, stone chips, marble balls, broken
                   glasses etc. `,
                  `The arena will be 10-25 metres in length. `,
                  `The length and constituents of the track may keep varying from round to round. `,
                  `The width of the arena will be approximately 3ft (92 cm). `,
                  `The arena will also include obstacles like cliffs, ramps, bridges, bumps, dips, rotating discs, see-saw, banks and
                   water bodies. `,
                  `The height of the waterbeds will vary between 3 cm to 8 cm.`,
                  `Maximum inclination of the inclined planes will not exceed 45 degrees. `,
                  `All individual arena parameters are measured under a tolerance level of 10%. `,
                  `There may be some typical bypasses for shorter paths and for following the bypasses properly there might or might not
                   be bonus points. `,
                  `If a robot damages the arena, a penalty might be imposed on the teams overall score. The magnitude of the penalty will
                   depend on the amount of damage caused, and will be decided by the coordinators.`,
              ],
              _Rounds: [
                `BEAT THE CLOCK: the bot has to solely traverse the track from "START" point and complete the arena in maximum 5 minutes.
                 The Track is subdivided into several check points. Any Number of hand-touches can be taken during the run if there is any
                  mishap/toppling. Bot will be placed again at the point of discontinuity. Only 3 hurdles can be skipped and 1 restart will be allowed.
                   Penalty of 20 seconds for each hand-touch while 100 seconds for each skip. There will be penalty of 300 seconds for restart. 
                   After 5 min the team will be given points on the basis of number of checkpoints crossed. 
                   Selection of teams for next round will be on the basis of time taken and the number of checkpoints crossed
                `,
                `SURVIVAL OF THE FASTEST:  For further Rounds, a one-on-one event will take place in which two bots will take on each other at a time. Each bot has to try
                 to finish the race first.`
              ],
              _Scoring: [
                `BEAT THE CLOCK: SCORE = 1000 – 2 *(Time taken in seconds) – 20 * (no. of hand touch) – 100 * (no. of skips)
                   –50 * (no. of time-outs) – 300 (for restart) `,
                  `SURVIVAL OF THE FASTEST: There is no score system. Whoever reaches the “FINISH” point first, wins the race.
                   However, a team cannot opt for more than 2 TIMEOUTS.`
              ],
              _Coordinators: [{name: 'Sagar Sangam', phn : '+91-7991186092'},
              {name: 'Saurabh Kumar Gupta', phn: '+91-8697474145'},
              {name: 'Piyush Raj', phn: '+91-8282926317'}
              ]
          },
      ]
    },
    {
      name: 'Cyber Crusade',
      img: 'ev-3',
      categories: [
        {
            _CategoryName : 'Cs GO Pro-League',
            img:`cc-1`,
            _Quote: `The PRO CSGO League , for all hardcore CS Gamers and learners alike.`,
            _MAPS: [
              `(Valve official versions of the maps in the Active Duty Map Group)`,
              `De_cache`,
              `De_cbble`,
              `De_inferno`,
              `De_nuke`,
              `De_mirage`,
              `De_train`,
              `De_overpass`,
              `Map Selection:`,
              `A coin flip decides which is Team B`,
              `Best of one: Ban A-Ban B - Ban A - Ban B - Ban A - Ban B - Last map is the map to be played.`,
              `Best of three: Ban B - Ban A - Pick B - Pick A - Ban A - Ban B - Last map remaining is the tie breaker.`,
              `Side choice (CT/T) for every map is decided by a knife round.`
          ],
          _ProblemDescription : `Tailor crafted for the professionals. Bigger platform. Bigger stakes. CSGO.
           5v5 standard matchmaking rules as always.`,
          _EventRules:[
              'Freeze Time - 15 seconds ',
              `Round Time - One minute and 55 seconds`,
              `Regulation Start Money - $800 `,
              `Regulation Side Selection - Knife for sides `,
              `Overtime Max Rounds - 6`,
              `Overtime Start Money - $10,000`,
              `Overtime Side Selection - In overtime, teams first play the side they last played in regulation`,
              `(NOTE: In case of deadlocks, the admin’s decision is final and irrevocable)`
          ],
          _Specification:[``],
          _Rounds:[``],
          _Scoring:[``],
          _Coordinators: [
            {name: 'Neel Roy', phn: '+91-983052618'},
            {name: 'Swastik Samaddar Chowdhury', phn: '+91-9874436481'}
             
          ]
        },
      {
          _CategoryName : 'CS GO College-League',
          img:`cc-2`,
          _Quote:`For the action frenzy college studying aficionados who got a trigger for an arm and
          flashbang for the other`,
          _MAPS:[
            `(Valve official versions of the maps in the Active Duty Map Group)`,
            `De_cache`,
            `De_cbble`,
            `De_dust2`,
            `De_inferno`,
            `De_mirage`,
            `De_train`,
            `De_overpass`,
            `Map Selection:`,
            `A coin flip decides which is Team B.`,
            `Best of one: Ban A - Ban B - Ban A - Ban B - Ban A - Ban B - Last map is the map to be played.`,
            `Best of three: Ban B - Ban A - Pick B - Pick A - Ban A - Ban B - Last map remaining is the tie breaker. `,
            `Side choice (CT/T) for every map is decided by a knife round.`,
        ],
        _ProblemDescription : `CSGO, the fourth game in the 'Counter-Strike' series, consists of team based action where two teams battle it out with gun and
         strategies.Restricted to college students only.5v5 standard matchmaking rules as always.`,
        _EventRules: [
            `All players in a team must be from the same college.`,
            `All participants must bring their college/school id card.`,
            `Freeze Time - 15 seconds `,
            `Round Time - One minute and 55 seconds`,
            `Regulation Start Money - $800 `,
            `Regulation Side Selection - Knife for sides `,
            `Overtime Max Rounds - 6`,
            `Overtime Start Money - $10,000`,
            `Overtime Side Selection - In overtime, teams first play the side they last played in regulation`,
            `(NOTE: In case of deadlocks, the admin’s decision is final and irrevocable)`
        ],
        _Specification:[``],
        _Rounds:[``],
        _Scoring:[``],
        _Coordinators: [{
          name: 'Prangshu Shyam',
          phn:`+91-7551833860`
        },
        {
          name: `Agnideep Mukherjee`,
          phn: `+91-8478954693`
        }
        ]
      },
      {
          _CategoryName : 'DOTA 2',
          img:`cc-3`,
          _Quote:`It’s time to choose the sides. Would you choose the might of the dark or the glory of the light?`,
          _MAPS: [``],
        _ProblemDescription : `The most popular MOBA game in the world; Enter into battle with one of over a hundred DOTA heroes. Here there is always something new to discover`,
        _EventRules:[
          `Game used : DOTA 2`,
          `Competition method: 5 versus 5`,
          `Game mode: Captain's Mode (CM)`,
          `Side and first ban will be determined by toss`,
          `Victory condition: The first team to destroy the other team’s ancient.`,
          `Players must be prepared before their scheduled games [Practice time will not be provided]`,
          `All competitors must be present 15 minutes prior to their scheduled match.`,
          `Players who are registered must be the one to play.`,
          `If a reserve is needed, only the registered reserves will be allowed to play.`,
          `Only two (2) reserves are allowed per team. They should be registered separately.`,
          `No player is allowed to play for more than one team.`,
          `If any player disconnects during a match, the game will be paused instantly until the player has reconnected.`,
          `Other than above issues each team can only pause the game for not more than 3 minutes.`,
          `GAMING ETIQUETTE:`,
          `Trash talking or violence will not be tolerated and suitable action will be taken.`,
          `Any cheats, hacks or exploits are illegal and not allowed in play. A punishment will be served to the
           offender which will be determined by the administration.`,
          `A game is finished, when an Ancient Fortress is destroyed.`,
          `Any team that fails to appear for any scheduled Standard Match will be charged with a forfeit. Similarly, a forfeit will
           result when a team does not have the minimum number of required players in the time allocated to start a match.
            A Standard Match forfeit will count as a loss.`,
          `In case of any other issues Admin’s decision is final.`,
        ],
        _Specification:[``],
        _Rounds:[``],
        _Scoring:[``],
        _Coordinators:[ {
          name: `Abhirup Saha`,
          phn: `+91-9434250077`
        },
        {
          name: `Jyotishman Chakraborty`,
          phn: `+91-8910664354`
        }]
      },
      {
          _CategoryName : 'Fifa 14 College League',
          img:`cc-4`,
          _Quote:`Tuned down gameplay and graphics of FIFA 14 here paves the way for a richer competition coming from
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
              `Bring your own controllers and the respective drivers needed (if required) 
              Participants must bring their college/school id card.`,
              `(NOTE: The admin’s decision, in any case, is final and irrevocable)`,
         ],
         _Specification:[``],
         _Rounds:[``],
         _Scoring:[``],
        _Coordinators:[ {name: `Avishek Chakraborty`,phn:`+91-7063280262`},
        {name: `Tamesh Chakraborty`, phn: `+91-9831764352`}
            
      ]
      },
      {
          _CategoryName : 'Fifa 18 Pro League',
          img:`cc-5`,
          _Quote:`For the Hard and Tough FIFA veterans out there , come battle it out`,
          _MAPS:[``],
        _ProblemDescription : `Experience the all new FIFA 18 with stakes higher than ever. Enough said.`,
        _EventRules:[
              `Classic 11 and World 11 are not allowed.`,
              `Start match with a back pass after Kickoff.`,
              `Legacy defending is not allowed.`,
              `Offside On, Injuries off`,
              `No updated squads are allowed`,
              `Prelims Match Duration is 4min`,
              `Semis Match Duration is 4min`,
              `Finals Match Duration is 6min`,
              `Bring your own controllers and the respective drivers needed (if required)`,
              `(NOTE: The admin’s decision, in any case, is final and irrevocable)`
          ],
        _Specification:[``],
        _Rounds:[``],
        _Scoring:[``],
        _Coordinators:[ {name: `Sayantan Mondal`, phn:`+91-768091091`},
        {name: `Md. Imran Khan`, phn: `+91-9007272859`}
        ]
      },
      {
        _CategoryName : 'Need For Speed most wanted',
        img:`cc-6`,
         _Quote: `Put your feet down on the throttle to burn the tires with raging speed.`,
         _MAPS:[
          `Bay Bridge`,
          `Dunwich Bay`,
          `Omega `,
          `Diamond (will be decided by coordinators)`,
          `Laps: 2 Laps`
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
            `This is a time based qualifying round. Map for this round is CITY PERIMETER and participants can use only BMW M3 GTR for this round. Depending upon time participants will be qualified for the next round.`,
            `In this Round there will be a LAN match among 4 qualified participants.
             Among them 1st and 2nd will be  qualified for the next round again.`,
            `4 finalists will play a LAN match in final. Among them 1st 2nd 3rd winners will be decided.Laps: 3 laps.`
          ],
          _Rounds:[``],
          _Scoring:[``],
        _Coordinators: [
          {name: `Sohail Khan`, phn: `+91-7278282148`},
          {name: `Sujoy Das`, phn: `91-9073107423`}
           
        ]
      },
      {
        _CategoryName : 'Mini Militia',
        img: `cc-7`,
         _Quote: `Go in all guns blazing and take down your foe`,
         _MAPS:[``
      ],
         _ProblemDescription : `Looking forward to intense multi-player combat with your doodle army ? Cyber crusade at EDGE'18 is the place for you`,
        _EventRules:[
          `Every team must consist of 3 members.`,
          `Single participants are also welcome. Their teams will be formed by us.`,
          `No mod, Pro-pack or cracked apk is allowed. Your current game in the phone will be uninstalled and game provided by
           us will be installed there only before starting of the game.`,
           `The Organiser has the right to disqualify any registered player from the tournament for any valid reason.`,
          `Everyone should obey the commands of the coordinators.`,
          `Participants should switch their device to "Air Plane mode"`,
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
          _Specification:[``
          ],
          _Rounds:[``],
          _Scoring:[``],
          _Coordinators: [
            {name: `Arkaprava Banerjee`, phn:'+91-8101041843'
          },{
            name: `Abhinaba Ray`, phn: `+91-9474979853`
          }
          ]
      }
    
    ]
    },
    {
      name: `Compute Aid`,
      img: `ev-2`,
      categories: [
      {
          _CategoryName : `Blind Coding`,
          img: `ca-1`,
          _Quote: `Practice in coding makes a coder
          perfect. But to the extent where you can code
          blindfolded?`,
          _MAPS: [``],
          _ProblemDescription : `Do you have complete faith in your brain and your hand? Can your hands produce what your brain
          thinks? Well maybe this is the event you have been waiting for. A coding event with a twist. Blind
          Coding is something which will bring out your power of concentration and will.`,
          _EventRules: [
            `This is an individual event.`,
            `This a single round event where the participants will be given a set of questions.`,
            `For each question, before the participant starts coding the cursor will be placed at the top left
                        corner of the editor and then the monitor will be switched off.`,
                        `The participants have to code without looking at the screen. After the participant completes
                        coding, the code will be checked for correctness.`,
                        `Each question will have some marks assigned to it. If a participant gets the code correct in the
                        first try then they will be given the full marks. If not, then we will allow him to take a look at the
                        code and again place the cursor at the top left corner of the screen and turn off the monitor.`,
                        `For each turn the participant gets the code incorrect, 5 marks will be deducted from the total
                        marks they can obtain. In cases of a tie the time taken for coding will be considered. And if there
                        is a tie even after that then the most efficient algorithm will be considered to break the tie.`,
                        `The coordinators have the right to change the rules and judging criteria of the contest at any
                        time they deem fit.`
                  ],

              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],
          _Coordinators: [{
            name: 'Amar Bathwal',
            phn: "+91-8820549897"
          },{
            name: 'Meghna roy',
            phn:`+91-7059306878`
          }
          ]
      },
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
          _EventRules: [`Each team can have either 1 or 2 members.`,
                        `The coordinators have the right to change the rules and judging criteria of the contest at any
                        time they deem fit.`
                        ],


              _Specification: [``],
              _Rounds: [ 
                `It is an MCQ round on languages C, C++ or JAVA. This round will test the fundamental skill of participants in the language they choose.
                 Team qualifies on basis of performance.`,
                 `It is going to be a Debugging Round. Again C, C++ and Java will be the
                 languages of choice for the teams (Teams are allowed to choose a different
                 language for this round). All the teams will be provided with some buggy code snippets and they will have
                 to correct these code snippets in the minimum number of steps possible. Teams will be marked based on the number of steps they take to
                 correct a code snippet and also the time taken to correct it.`
              ],
              _Scoring: [``],
          _Coordinators: [
            {name: `Raunak Roy`, phn: `+91-9831079974`},
            {name: 'Prince Kumar', phn: `+91-7059507444`},
            {name: `Indrajit Salui`, phn: `+91-7209127729`}
          ]
      },
      {
          _CategoryName : `CodanWars`,
          img: `ca-3`,
          _Quote: `The Coder who can conquer the
          maximum regions with their algorithmic virtuosity will
          triumph.`,
          _MAPS: [``],
          _ProblemDescription : `Does gaming run through your veins and yet coding intrigues you? Well this event provides you with a
          flair of both. Welcome, to the world of the Codans. All they want to do is collect precious resources and
          show the others Codans their strength. This time round they are inviting you to be a part of their world.
          Are you up for the task of Conquering and Capturing?`,
          _EventRules: [ `This is an individual event where you are the ruler of a kingdom. Your sole aim is to earn more
                          resources and prove your dominance oven your enemies.`,
                         `Initially you and 3 other rulers will be assigned a region. To prove your dominance in that region
                         you have to collect as many resources as possible and expand your kingdom. Your resources are
                         equivalent to points.`,
                         `After every 6 hours new regions will be assigned to all the new rulers. To make the assignment
                         fair, rulers of (almost) equal strength will be grouped together for the region. Strength is
                         measured by the total amount of resource the ruler has at the end of the previous rounds. At
                         end of every six hours the leader board will display the points all the rules have got. The final
                         leader board standings will decide the winners.`,
                         `CONQUERING A REGION : Each one of the 4 rulers trying to conquer the region will be given a castle on the map.
                         To conquer the region, you have to traverse through the map, starting from the castle,
                         and collect as much resource as you can. You can take any path you want.`,
                         `The resources are present as rewards at different points in the map. To win the
                         resource at any point you have to solve the question present at those points. On solving
                         a question, you get the resources available at that point and capture that point.`,
                         `You can try capturing a point only if you have captured the previous resource on that
                         path.`,
                         `Being a ruler you have special powers. Once you obtain the resource at one of the
                         points on the map, you control that point till the end of the round. No one else can
                         capture that resource further nor can they challenge you for that resource for that
                         round.`,
                         `How can you use it to your advantage? I think you can figure that out ;( Hint: Paths in a
                         map eventually can intersect.)`,
                         `SOLVING A QUESTION : On selecting an available point on the graph, a problem statement will be provided
                         along with all the requirements and constraint. Once you think you have a solution
                         prepared you can request for a set of inputs. A file containing the inputs will be given to
                         you, and 2 minute countdown will start. You have to generate a file containing the
                         outputs for each input.`,
                         `To solve the question successfully, you have to upload 2 files: Your correct solution(the code) and your Output file for the given input file`,
                         `This whole event will be spanned over 48 hours. So the participants playing throughout will get
                         to play on 8 regions over the span of two days and get a lot of chances to showcase their skills in
                         coding.`,
                         `Link will be made available on a later date.`
          ],
          _Specification: [``],
          _Rounds: [``],
          _Scoring: [``],
          _Coordinators: [
            {name: `Suraj Kumar`, phn: `+91-8820070440`},
            {name: `Ritwik Datta`, phn: `+91-8334881521`}
            
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
            {name: `Shiv Kumar`, phn: `+91-8820315476`},
            {name: `Neelarghya Mandal`, phn: `+91-9163616724`},
            {name: `Suyash Mittal`, phn: `+91-7044793121`}
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

          _EventRules: [`Each team can have either 1 or 2 members.`,
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
            {name: `Priyadarshini purkayastha`,phn: `+91-8584944024`},
            {name: `Radhika Mohta`, phn: `+91-9163981049`}
          ]
      },
      {
          _CategoryName : `FlawLess`,
          img: `ca-6`,
          _Quote: `Just like the name suggests , as flawless as
          one’s codes become the better chance they have of
          winning.`,
          _MAPS: [``],
          _ProblemDescription : `If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then
          this is the perfect event for you. Code your heart out and race with the others to win the battle of wits
          and will. Be Flawless!`,
          
          _EventRules: [`Each team can have either 1 or 2 members.`,
                        `This event will consist of 2 rounds of coding: Preliminary Round & Final Round`,
                ],
          _Specification: [``],
          _Rounds: [
            `It will be an elimination round where the participants will have to
            solve 5 questions in a duration of 3 hours. The teams will be judged based on
            the number of problems they will solve and the time taken to solve the
            problems. The teams with the best performances will qualify for the next round.`, 
            `The ultimate showdown will take place between the teams selected from the
            previous round. The duration of this round is going to be 3 hours. The number
            of questions in this round will be declared on spot on the day of the finals.
            Again, like the prelims the teams will be judged based on the number of
            problems they will solve and the time taken to solve the problems.`
          ],
          _Scoring: [``],
          _Coordinators: [
            {name: `Saquib Ul Hassan`, phn:`+91-9804887223`},
            {name: `Suyash Mittal`, phn: `+91-7044793121`}
        
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
          _Quote: `In this live photography competition you
          need to think on your feet and be creative at the same
          time.`,
          _MAPS: [``],
          _ProblemDescription :`“Where you capture the soul infatuation with your cell phone.” This mobile photography competition where your photographic skills combined
          with creative approach and innovative ideas can bag you the first prize.`,
          _EventRules: [
              `In this mobile photography event, your photos can be used with proper
              copyright statements for Geekonix beneficial.`,
              `The topic is open. So just give us the best of you.`,
              `
              Incoming photograph submissions shall be screened for originality,
              authenticity, copyright infringement and maintaining editing regulation issues.
              No entry should contain any infringing, threatening, false, misleading, abusive,
              harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
              pornographic or profane content.
              Geekonix recognizes "You". So the author of the image retains full ownership
              of the copyright in each entry.`,
              `NOT ALLOWED: 
              HDR, Selective Colouring, Manipulation of pictures are not allowed.
              tempering with EXIF is also not allowed.`,
              `ALLOWED: 
              Mild post processing like Colour correction, Light editing, Sharpness
              enhancements are allowed.
              Cropping up to 15% is allowed.
              Proper aspect ratios should be maintained.`,
              `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
              soon)`,
              `AFTER SUCCESSFUL REGISTRATION, PARTICIPANTS
              WILL BE PROVIDED WITH A RECEIPT NO., WHICH THEY NEED TO
              MENTION WHILE SUBMITTING PHOTOS AND MONEY.`,
              `You can submit the registration fee in college registration desk or by
              PAYTM or to the submission centres. (Final names of
              those centres will be updated soon)`,
              `Willing participants are requested to submit their photos via e-mail to 
               "infocus.edge@gmail.com" with subject "Submission For Shootmup"
              or in a CD/DVD to the collectors of respective submission centres.
              (Names will be provided soon)`,
              `Last date of submission is 6th April 2018.`,
              `After qualifying for the final screening selected participants will be
              asked to be present on the final day of the event on 8th April at 12
              noon in the college premises.`
          ],
          _Specification: [``],
          _Rounds: [``],
          _Scoring: [``],

          _Coordinators: [
            {name: `Priyanka Sengupta`, phn: `+91-9748234607`},
            {name: `Biswajit Banerjee` , phn: `+91-78090100127`}
            ]
      },
      {
          _CategoryName : `Insta-Film`,
          img: `fo-2`,
          _Quote: `Live EDGE and thread the frames. The best
          mobile video with a creative approach , shot on the spot ,
          gets rewarded.`,
          _MAPS: [``],
          _ProblemDescription : `Bring out your creativity and innovation to capture the emotions with your magical real-story to 
          bag the prize.`,
          _EventRules: [
              `Incoming photograph submissions shall be screened for originality,
              authenticity, copyright infringement and maintaining editing regulation issues.
              No entry should contain any infringing, threatening, false, misleading, abusive,
              harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
              pornographic or profane content.
              Geekonix recognizes "You". So the author of the image retains full ownership
              of the copyright in each entry.`,
              `Video must be shot on campus`,
              `Any kind of video editor or app or software can be used`,
              `Any kind of presets or plug in cannot be used`,
              `If any soundtrack is needed, you have to mention the
              courtesy.`,
              `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
              soon)`,
              `AFTER SUCCESSFULLY REGISTRATION OF THE FORM,
              PARTICIPANTS WILL BE PROVIDED WITH A RECEIPT NO.,
              WHICH THEY NEED TO MENTION WHILE SUBMITTING
              PHOTOS AND MONEY.`,
              `You have to register yourself and submit the registration fees
              for the event Instaclick even at the registration desk at the
              event time or you can by Paytm`,
              `WILLING PARTICIPANTS HAVE TO SUBMIT THEIR PHOTOS
              TO THE ALLOTTED REGESTRATION DESK EVENT DAYS.`
          ],
          _Specification: [``],
          _Rounds: [``],
          _Scoring: [``],
          _Coordinators: [{name : 'Sayantan Bhattacharya', phn:`+91-9163480278`},
                {name: `Biswajit Banarjee`, phn:`+91-7890100127`}
        
          ]
      },
      {
          _CategoryName : `Insta-Click`,
          img: `fo-3`,
          _Quote: `Capture the moment that’s gone and impossible to reproduce.
          Shoot in the moment.`,
          _MAPS: [``],
          _ProblemDescription : `A Live Event photography competition that will
          measure your creativity as well as innovative approach to
          photography.The best and the most extraordinary photograph clicked on the event day gets
          awarded.
          `,
          _EventRules: [
              `
              Incoming photograph submissions shall be screened for originality,
              authenticity, copyright infringement and maintaining editing regulation issues.
              No entry should contain any infringing, threatening, false, misleading, abusive,
              harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
              pornographic or profane content.
              Geekonix recognizes "You". So the author of the image retains full ownership
              of the copyright in each entry.`,
              `No post-processing is allowed`,
              `Only cropping upto 15% is allowed`,
              `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
              soon)`,
              `AFTER SUCCESSFULLY REGISTRATION OF THE FORM,
              PARTICIPANTS WILL BE PROVIDED WITH A RECEIPT No.,
              WHICH THEY NEED TO MENTION WHILE SUBMITTING
              PHOTOS AND MONEY.`,
              `You have to register yourself and submit the registration fees
              for the event Instaclick even at the registration desk at the
              event time or you can by PAYTM`,
              `WILLING PARTICIPANTS HAVE TO SUBMIT THEIR PHOTOS
              TO THE ALOTTED REGESTRATION DESK EVENT DAYS.`
          ],
          _Specification: [``],
          _Rounds: [``],
          _Scoring: [``],
          _Coordinators: [
            {name: `Subhradeep Basu`, phn: `+91-8436238707`},
            {name: `Nilanjana Biswas`, phn: `+91-9800996502`}
          ]
      },
      {
          _CategoryName : `Crumbs`,
          img: `fo-4`,
          _Quote: ` Landscape photography?That’s too mainstream.Time to go against
          the tide and explore the elegance in the most inconspicuous items
          around. The topic is open. So just give us the best of you.`,
          _MAPS:[``],
          _ProblemDescription : `Showcase your skills to win the prize in an event
          that will put your creativity and talent to the test.`,
          _EventRules: [
              `This is an open end event. Anyone from any field with any type of
              camera can participate. Your photos can be used with proper
              copyright statements for Geekonix beneficial.`,
              `Incoming photograph submissions shall be screened for originality, authenticity
              , copyright infringement, maintaining editing regulation issues. No entry
              should contain any infringing, threatening, false, misleading, abusive, harassing,
              libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
              pornographic or profane content.`,
              `Geekonix recognizes "You". So the author of the image retains full ownership
              of the copyright in each entry.`,
              `NOT ALLOWED:
              Framing are not allowed.
              HDR, Selective Colouring, Manipulation of pictures are not allowed.
              tempering with EXIF is also not allowed.`,
              `ALLOWED:
              Mild post processing like Colour correction, Light editing, Sharpness
              enhancements are allowed.`,
              `Cropping up to 15% is allowed.`,
              `Proper Aspect ratios should be maintained.`,
              `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
              soon)`,
              `AFTER SUCCESSFUL REGISTRATION,
              PARTICIPANTS WILL BE PROVIDED WITH A RECEIPT No.,
              WHICH THEY NEED TO MENTION WHILE SUBMITTING
              PHOTOS AND MONEY.`,
              `Willing participants are requested to submit their photos/ films in the
              understated centres. (Final names of those centres will be updated
              soon)`,
              `Submission fees should be given to the respective collectors in the
              respective centres. (Names will be provided soon)`,
              `Last date of submission is 5th April, 2018.`,
              `Or you can submit the registration fee in college registration
              desk or submission centres or by PAYTM`,
              `Participants are requested to submit the photos in a CD/DVD
              (mandatory for participants for Kolkata) or via email id 
              "infocus.edge@gmail.com " with subject – "Submission for
              Crumbs" , with details like (NAME, CONTACT NO., NO. OF
              PHOTOS, INSTITUTION NAME (if applicable), ADDRESS,
              EMAIL ID) written in a WORD file.`,
              `After qualifying for the final screening selected participants will be
              asked to be present on the final day of the event on 8th April at 12
              noon in the college premises.`
          ],
          _Specification: [``],
          _Rounds:[``],
          _Scoring: [``],
          _Coordinators: [
            {name: `Priyanka Sengupta`, phn: `+91-9748234607`},
            {name: `Subhradeep Basu` , phn: `+91-8436238707`}
            ]
      },
      {
          _CategoryName : `Odyssey`,
          img: `fo-5`,
          _Quote: `If it can be written or thought, it can be filmed”
          A picture is worth a thousand words . Tell us your story as you capture the
          mobility.`,
          _MAPS:[``],
          _ProblemDescription : `If film making is what intrigues you, then this
          is the event for you. You stand the chance of getting
          recognition from stalwarts of the film industry.`,
          _EventRules: [
              `Incoming films shall be screened for originality, authenticity &amp;
              copyright infringement issues. No entry should contain any
              infringing, threatening, false, misleading, abusive, harassing,
              libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
              pornographic or profane content. Judge's decision will be final to
              determine whether the content is inappropriate or not and
              accordingly your work might get disqualified.`,
              `Run time – 15 minutes is the maximum time period, which will be provided for
              each film screening. Shorter films can get extra points according to the judge.`,
              `Statutory warnings should be included as per the needs.`,
              `**English subtitles should be included.`,
              `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
              soon)`,
              `AFTER SUCCESSFUL REGISTRATION, PARTICIPANTS
              WILL BE PROVIDED WITH A RECEIPT NO, WHICH THEY NEED TO
              MENTION WHILE SUBMITTING PHOTOS AND MONEY.`,
              `Willing participants are requested to submit their films in the
              understated centres. (Final names of those centres will be updated
              soon)`,
              `Submission fees should be given to the respective collectors in the
              respective centres. (Names will be provided soon)`,
              `Last date of submission is 7th April 2018.`,
              `Participants are requested to submit the film in a CD/DVD, or via
              Google Drive and mail the link to 'infocus.edge@gmail.com ', with
              details like (NAME, CONTACT NO., TITLE OF THE FILM, INSTITUTION
              NAME (if applicable), ADDRESS, EMAIL ID) written in a WORD file.`,
              `You need to submit the registration fee in college registration desk or
              at submission centres or by PAYTM`,
              `Once a film has been selected it cannot be withdrawn from the Festival
              program during the event.`
          ],
          _Specification: [``],
          _Rounds:[``],
          _Scoring: [``],
          _Coordinators: [
            
            {name: `Priyanka Sengupta`, phn: `+91-9748234607`},
            {name: `Biswajit Banerjee` , phn: `+91-78090100127`}
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
        _ProblemDescription : `It is a general quiz event that tests the knowledge of an individual about this world. Questions are based on a range of topics namely Music, Entertainment, Literature, Art and Sports abbreviated as MELAS.`,
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
            `This Round is conducted to decide the number of teams qualifying for the Finals. Depending on the number of participating teams 
            in the event the number of rounds and the number of questions are decided.Pouncing is not allowed.`,
            `In this Round the top 3 teams who are able to score the maximum points are declared as the winners.`
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
            _ProblemDescription : `This event tests your knowledge of Electronics. It is a pure electronics-based team event that requires the basic knowledge of Electrical and Electronics Circuits along with its various components, microprocessors and microcontrollers and circuit designing.`,
            _EventRules:[
                  `A team can be of a maximum of 3 members, each of whom should be a college student`,
                  `Use of calculators, mobile phones or any other electronic gadgets is strictly prohibited.`,
                  `Use of any of the above mentioned equipment may lead to straight disqualification.`,
                  `Decision of the coordinators shall be final and binding.`,
              ],
              _Specification:[``],
              _Rounds:[
                `This round shall consist of 30 multiple choice questions from the subjects of electronics engineering to be completed in 45 minutes.
                Each correct answer will carry one mark and there is no penalty for wrong answer.
                The teams with more than a pre decided cut-off marks will qualify for the next round of the event.`,
                `This will be a practical on spot round varying from electronics circuit design, microprocessor designing or simulations. The top 3 teams with efficient results will be declared as the winners`
              ],
              _Scoring:[``],
            _Coordinators:[ 
              {name: `Alvin Karkun` , phn: `+91-7890150690`}    
            ]
          },
          {
                _CategoryName : 'Youth Parliament',
                img:`ne-3`,
                _Quote:`If you have a keen interest in the Indian parliamentary proceedings then this is an event where you can excel`,
                _MAPS:[``],
                _ProblemDescription : `Youth parliament is a form of modern debate to explore your knowledge about Indian parliamentary system. A topic will be given for discussion in the house. The more you research ,the better you will be able to debate.`,
                _EventRules:[
                      `All the participants must be from Techno India.`,
                      `The participant can use either Hindi or English i.e there is no language barrier.`,
                      `Students are allowed to participate individually or in a group of two.`,
                      `The marking will be done on the basis of quality of material and the quality of representation by the speaker.`,
                      `No abusive words are allowed inside the house.`,
                      `Any changes in the rules will be notified prior to the day of the event.`
                  ],
                  _Specification:[``],
                  _Rounds:[
                      `This is a constructive speech round, participants will be given maximum two minutes to speak, for participant in group only one can speak.`,
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
      _CategoryName : `Cad-O-Mania`,
      img: `el-1`,
      _Quote: `Showcase your expertise with AutoCAD by taking on the provided challenge head-on and give a suitable solution `,
      _MAPS:[``],
      _ProblemDescription : `This is an on the spot event of making Plan and Elevation of a building in AutoCAD. 
      Problem statement of the event will be given on the spot`,
      _EventRules: [
          `Each group consists of a maximum of 2 members.`,
          `No person is allowed to be in two different teams`,
          `Decisions taken by Judges will be final`,
          `Participants should finish and submit their drawing within 180 minutes.`,
          `Participants should make their drawing according to the specified AREA and FLOOR-AREA RATIO.`,
          `Points will be deducted if the drawing requirements mentioned in the Problem Statement are not fulfilled.`,
          `Participants are not allowed to use any resources available over
          internet and are expected to be honest.`,
          `Additional points will be given on completing the drawing before the given time period.`
      ],

      _Specification: [``],
      _Rounds:[``],
      _Scoring: [``],
      _Coordinators: [
        {name: `Hritu Raj`, phn: `+91-8282800821`}
    
      ]
  },
  {
      _CategoryName : `Nirmaan`,
      img: `el-2`,
      _Quote: `Build a model bridge good enough to take you over the competitors towards the coveted winner's prize`,
      _MAPS:[``],
      _ProblemDescription : `This event tests your art of constructing Bridges. Bring out the Engineer inside you and create a marvel out of the raw materials provided.`,
      _EventRules: [
          `TEAM: Maximum 4 members per team`,
          `Wooden Popsicle sticks, white glue will be provided on spot`,
          `All other necessary materials (scissors , art paper, blades/other cutting materials, thread, clips etc) may be
           brought by the participantes themselves`,
          `Only wooden Popsicle sticks and white glue can be used to construct the bridges. No other materials are permitted.
           The wooden sticks can be cut to fit as desired.The amount of sticks used in the bridge is limited only by the
            Dimensions and Weight restrictions.`,
          `Please note that following when you design and build your bridge`,
          `During the strength test of the bridge, one horizontal bar will be placed on the road deck of the bridge.
           A downward force will be applied onto the horizontal bar. By placing the bar on the deck in this manner, we ensure
            that the truss members of the bridge are stressed during the strength test. The builder of the model bridge shall ensure
             that there is one 3cm X 3cm opening,through the side of the bridge structure, immediately beside the bridge deck, to
              accomodate the load testing.`,
          `PENALTIES:`,
          `The self weight of the bridge must be less than 250gms. If the above mentioned limit is crossed then points will be deducted
           as per the following: upto 5gms over limit–for each 1gms- 0.5 point will be deducted. 5-10 gms over limit–for each gm, 1 point
           will be deducted. 10 & above over limit–for each 1gms-1.5points will be deducted.`,
          `2 points will deducted from the score if the bridge deck is narrower than 3cm`,
          `5 points will be deducted for each 1cm (or portion there of) that the bridge's height exceeds 18cm.`,
          `2 point will be deducted for each 1cm that the bridge's width exceeds 14cm`,
          `2 point will be deducted for each 1cm that the bridge's length exceeds 60cm`,
          `Grounds For DISQUALIFICATION`,
          `Entries will be disqualified if they use a material other than fevicol and wooden popsicle sticks.`,
          `Entries will be disqualified if the bridge length is shorter than 50cm`,
          `Entries will be disqualified if the height of the bridge is less than one popsicle stick.`,
          `Entries will be disqualified if there is evidence of heat treating(baking, etc)`,
          `Suspension Bridge Model is not permitted in this event.`,
          `Entries will be disqulified if the bridge width is shorter than 10cm.`,
          `Entries will be disqualified if there is no road`,
           `DURATION OF EVENT:`,
          `Construction: 4 hours`,
          `Load Test Outcome: Load Testing will be conducted on the 3rd event day`,
          `JUDGING And TESTING Of Bridges:`,
          `The bridges will be sbjected to a Efficiency test in which a downward force will be applied to the bridge and the force
           will be gradually increased until the bridge fails. This force will be recorded on the Evaluation Sheet.A bridge is
            considered to fail when at least one member of the bridge breaks. During the test, the bridge will rest on two blocks
             placed apart.These blocks are loose and will resist the downward force applied to the bridge.
          The Strength Factor will be compute using the formula:
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
      `The overall width of the bridge must be between 10cm and 14cm. This is critical and the bridge will be penalized if it is
       wider than 14cm or higher than 18cm. Height of a zero member will not be considered.`,
      `The weight of the bridge shall not exceed 25gms. " Weight means weight, including stick, glue and inclues all attachments
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
   
        {name: `Hritu Raj`, phn: `+91-8282800821`}
      ]
  }
  ]
},
{
  name: 'Money Matters',
  img: 'ev-8',
  categories: [
    {
        _CategoryName : 'B-PLAN',
        img: 'mm-1',
        _Quote: `If you fail to plan, you plan to fail.`,
        _MAPS:[``],
        _ProblemDescription : `Young entrepreneurs with a prudent business plan
        can present their ideas and stand a chance to get
        rewarded handsomely. Since the advent of time humans have relied on
       their selling skills to survive.If you think you can dazzle the audience by your impromptu thinking and
         wit, then come and be a part of the most challenging competition of Edge, which will provide you with the perfect
          platform to show your magic.`,
      _EventRules: [
          `Team can consist of maximum of 3 members.`,
          `The judges will evaluate the presentations based on the following CRITERIA:`,
          `Background Study`,
          `Originality in the research work.`,
          `Volume of the work carried out.`,
          `Novelty in thinking`,
          `Oral presentation skill of the presenter`,
          `Ability to answer questions at the end of the presentation.`

      ],
      _Specification: [``],
      _Rounds:[
        `In this Round each team of 3 members will have to send their entry in
        a presentation/document by 5th April 2018 to 'edgemoneymatters@gmail.com'. The cover page should contain: Team Name & Member
        names along with address, e-mail and telephone number. The best entries will be asked to participate in the main event at EDGE 2018 at our campus`,
        `In this Round  the selected teams will be called to present their business idea to an open audience during Edge.
        Tentative duration is 10 min. of presentation followed by 5 minutes of Question & Answer.`
      ],
      _Scoring: [``],
      _Coordinators:[
   
        {name: `Kirti`, phn: `+91-9038870176`},
   
        {name: `Punit Ojha`, phn: `+91-9163413293`}
   
      ]
    },
    {
      _CategoryName : 'Stock It',
      img: 'mm-2',
      _Quote: `Traverse the turbulent waters of the stock
      market in this online event that simulates the thrill of the
      stock market without any of the risks involved.`,
      _MAPS:[``],
    _ProblemDescription : `The Stock Market Challenge is an online simulation trading game where you create and
     manage your own portfolio and compete with other players in a risk free environment.
      Access financial information on stocks to get better insight on its potential and fundamentals.`,
    _EventRules:[ 
        `Every challenger is assigned Rs. 10,00,000 play money in the beginning.`,
        `The objective is to maximize this amount by intelligently and smartly investing in the Stock Market`,
        `This Stock Market Challenge is almost as real as it happens on Bombay Stock Exchange (BSE).`,
        `The practical issues faced when a stock hits a circuit or the illiquidity of a stock etc. are all captured and
         simulated so as to ensure a realistic experience of the markets.`,
        `The Corporate Benefits as in Dividend, Bonus, Split, Mergers, De-Mergers etc are all also considered and applied.`,
    ],

    _Specification: [``],
    _Rounds:[``],
    _Scoring: [``],
    _Coordinators: [
      
      {name: `Harsh H Sheth`, phn: `+91-968125345`}
    ]
  },
  {
      _CategoryName : 'B-Quiz',
      img: 'mm-3',
      _Quote: `A one of it's kind BizTech quiz that puts your knowledge of technology and business mindedness to test.`,
      _MAPS:[``],
    _ProblemDescription: `This is a team event where each team is quizzed on relevant business topics and the market scenario.`,
      _EventRules: [
        `Team can consist of maximum of 3 members (even solo participation accepted).`,
        `This quiz is open to anyone under 25 years of age.`,
        `Cross college/school teams are allowed.`,
        `Valid ID cards need to be produced at the time of on-spot registration.`,
        `Each member has to be registered individually.`,
        `Any form of cheating will lead to direct disqualification.`,
        `The Prelims will be a set of 25 questions.`,
        `The top 8 teams will make it to the finals.`,
        `It is a BizTech quiz. The questions will be from the fields of Technology and Business both.`
    ],
    _Specification: [``],
    _Rounds:[``],
    _Scoring: [``],
    
    _Coordinators: [
      {name: `Kirti`, phn: `+91-9038870176`},
 
      {name: `Punit Ojha`, phn: `+91-9163413293`}
    ]
  },
  {
    _CategoryName : 'AddoMedia',
    img: 'mm-4',
    _Quote: `Without innovation, advertisement won't grab attention. With innovation , it will also grab you a handsome prize money.`,
      _MAPS:[``],
    _ProblemDescription : `
    The idea of this event is to allow the players to explore their creativity as well as
    their marketing power. The Event is based on a marketing theme, participants
    will have to pick any product real or fictional of their choice and device an
    ad campaign to sell the said product.`,
    _EventRules: [
          `Team should consist of 3 members`,
          `Content should be original, anyone found adopting any unfair means will be disqualified.`,
          `40% weightage will be given to the look and design of the ad, and 60% to the idea behind the campaign.`
    ],

    _Specification: [``],
    _Rounds:[
      `In this Round each team of 3 members will have to send their entry in
      a presentation/document by 5th April 2018 to 'edgemoneymatters@gmail.com'. The cover page should contain: Team Name & Member
      names along with address, e-mail and telephone number. The best entries will be asked to participate in the main event at EDGE 2018 at our campus`,
      `In this Round one has to prepare a video or a ppt describing their proposed ad campaign, their brand positioning
      and target audience.`
    ],
    _Scoring: [``],
    _Coordinators: [


      {name: `Saptarshi`, phn: `+91-9474092342`},
   
      {name: `Punit Ojha`, phn: `+91-947492342`}
        
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
                capability to recognize, instincts, thinking power, leadership and memory. A chance is given to you by
                EDGE 2018 to show your skills in team game.`,
                _EventRules: [`Each team must consists of 4 members.`,
                            `Particiants will have to solve 4 activities with one particpant in each team doing one particular activity.`,
                            `Participants cannot skip one activity to reach the next without completing it.`,
                            `The team that completes the tasks most effectively and in the least time possible, will be judged the winner.`,
                            `The decision by the judges will be final`
                ],

              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],

                _Coordinators: [ 
                  {name: 'Raptilekha', phn: `+91-9073853754`}
                ]
            },
            {
                _CategoryName : `Creation-X-Nihilo`,
                img: 'ff-2',
                _Quote: `Create a machine with the raw materials
                and take away the prize for your creative thinking.`,
                _MAPS: [``],
                _ProblemDescription : `Creation-X- Nihilo gives you an opportunity to construct a miniature model of objects used in industries. 
                This is an event where you can showcase your creativity and vision differing from others.`,
                _EventRules: [ `Each team can consists of 2-4 members.`,
                    `Each team will be given some virtual money and things are to be purchased by that virtual money.`,
                    `The team that constructs the most efficient target model within the given time period shall win.`,
                    `This is a time bound game. The model should be constructed within the time period given.`
                ],

                _Specification: [``],
                _Rounds: [``],
                _Scoring: [``],
                _Coordinators: [ 
                  {name: 'Raptilekha', phn: `+91-9073853754`}
                  
                ]
            },
            {
                _CategoryName : `X-Quiz-IT`,
                img: 'ff-3',
                _Quote: `Unleash your brain cells and win this informative
                quiz on a wide spectrum of topics.`,
                _MAPS: [``],
                _ProblemDescription : `This event gives
                 you a platform to gain and share knowledge. X-Quiz IT under FOOD for FUN is not only about food but you also get a chance to show us
                 how good you are when it comes to quiz.`,
                _EventRules: [`Each team can consists of 2-4 members`,
                   `A Round will be held which consists of 20 questions with 5 starred questions and the time period will be of
                   20 minutes.`,
                   `Questions will be held on a wide range of topics from Food Technology, Microbiology, Food Chemistry, Mechanics, general
                   knowledge and other fields.`,
                    `The team with the highest points at the end of all the rounds will be declared as the winner.`,
                    `In case of any discrepancy, the decision of the judges will be final.`
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
                are to be designed with the most suitable chemical composition of a particular food item given. In short
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
                _CategoryName : `Food Hunt`,
                img: 'ff-5',
                _Quote: `Hungry enough for the prize? Hunt your food down and satiate yourself.`,
                _MAPS:[``],
                _ProblemDescription : `Food Hunt is an interesting event where each team having 4 members will be trying to find hidden
                objects or places by following a series of clues or riddles. This is almost similar to treasure hunt, but only
                difference is in Food Hunt teams will have to solve a given riddle to reach a place where they will find
                another riddle that hides an ingredient of the final treasure food and that ingredient is to be reported.
                This event enables exploration and discovery, sharpens navigational skills, builds teamwork and relieves
                stress.`,
                _EventRules: [`Each team must consists of 4 members.`,
                    `Places found and ingredients must be kept secrets from other teams to ensure your victory.`,
                    `Riddle for the next place hiding another riddle indicating the next ingredient, will be given if the previous 
                    ingredient reported is correct.`,
                    `10 riddles are to be solved in 5 rounds, 2 in each round as mentioned above in least time to win the event.`,
                    `Each round should be completed in 30 minutes.`
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
      name: `Innovati`,
      img: `ev-10`,
      categories: [
      {
          _CategoryName : `Project View`,
          img: `in-1`,
          _Quote: `Ideas exploring the technical field that is
          advancing with every passing day need a push and here we
          give it to you.`,
          _MAPS: [``],
          _ProblemDescription : `Any completed/under-development engineering based college project, either hardware implemented,
          simulated or software implemented will be considered. Any undergraduate
          level engineering project is welcome, and will be encouraged towards holistic improvement.
           A worthy project would be appraised and duly rewarded, along with assistance towards
          development, patenting and publication.
          NOTE: IF ANYONE HAS NO WORKING MODEL THEN THEY CAN COME UP WITH THEIR INNOVATIVE IDEAS
          WITH A POWERPOINT PRESENTATION ON ANY OF THE ABOVE MENTIONED TOPIC.`,
          _EventRules: [``],
          _Specification: [``],
          _Rounds: [``],
          _Scoring: [``],
          _Coordinators: [
            {name: 'Aditi Kumari', phn: `+91-8276960454`},
            {name: 'Nabanita Bhandary', phn: `+91-7059485319`},
            {name: 'Medha Mishra', phn: `+91-8013290587`}
             ]
      }
    ]
  },
 {
      name: `Create It`,
        img: `ev-9`,
        categories: [
        { 
        _CategoryName : `Rags to Riches`,
          img: `in-3`,
          _Quote: `If creativity from scratch is your strength,
          rags to riches is definitely your platform.`,
          _MAPS:[``],
          _ProblemDescription : `This gives you scrap to build your creations.Start with rags and end with riches. Problem statement to be given on the spot.
          As an example we have the problem:
           Participants were given paint, poster colours etc.
           They were required to make something creative out of it and paint a member in their team.
           They were also supposed to give a description of it.`,
          _EventRules: [`There shall be a maximum of 3 members in a team. Team members may be from different
              institutions/colleges.`,
                        `All the requirements will be provided.`,
                        `The time allotted will be 1 hour.`,
                        `Each member should have a valid ID card of his/her institute.`,
                        `The right spirit of participation is expected from all the participants.`
                  ],
                  _Specification: [``],
                  _Rounds:[``],
                  _Scoring: [``],
          _Coordinators: [
            {name: 'Nabanita Bhandary', phn: `+91-7059485319`},
            {name: 'Aditi Kumari', phn: `+91-8276960454`},
            {name: 'Medha Mishra', phn: `+91-8013290587`}
             ]
        },
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
  },
    
  {
    name: `Just Like That`,
      img: `ev-6`,
      categories: [
        {
          _CategoryName : `Khul Ja Sim Sim`,
          img: `in-2`,
          _Quote: `Decipher the clues provided as the
          hidden treasure awaits you.`,
          _MAPS: [``],
          _ProblemDescription : `It is a treasure hunt with a technical twist in the clues.`,
          _EventRules: [`There shall be 3 or 4 members in a team. Team members may be from different
              institutions/colleges.`,
                        `No programming skills required.`,
                        `Each member should have a valid id card of his/her institute/college.`,
                        `The right spirit of participation is expected from all the participants.`,
                        `The organizing committee reserves the right to make any last minute changes.`
                  ],
                  _Specification: [``],
                  _Rounds: [``],
                  _Scoring: [``],
          _Coordinators: [
            {name: 'Aditi Kumari', phn: `+91-8276960454`},
          {name: 'Nabanita Bhandary', phn: `+91-7059485319`},
          {name: 'Medha Mishra', phn: `+91-8013290587`}
           
          ]
      },
      {
        _CategoryName : `Boomerang`,
        img: `boom-1`,
        _Quote: `Loop in back and forth, secure the maximum likes and take home exciting goodies`,
        _MAPS: [``],
        _ProblemDescription : `Obsessed with quirky videos that add an humorous side to your charisma? Then Boomerang is tailor-made for you. Boomerang makes everyday moments fun and unexpected. Create captivating mini videos that loop back and forth. Find something (or someone!) that's moving and record it or create a selfie-video by switching to the front-facing camera.`,
        _EventRules: [`You can either use instagram to record your Boomerang video or use any other app used for creating Boomerangs.`,
        `You have to mail the videos to ‘justlikethat.edge18@gmail.com’ along with your details(Name,Year,College).The videos received shall be subjected to screening and will be checked if they comply with the given rules and regulations.`,
        `Only appropriate videos shall be uploaded from the official page of the Event and the most innovative Boomerang video with maximum number of likes and reacts is likely to win exciting goodies.`,
        `There is no limit on the number of individuals appearing in the Boomerang video but such a video can be submitted by only one individual.`,
        'An individual can submit only one Boomerang video.Multiple submissions shall not be considered.',
        `You can share and promote your own videos from the Event page as much as you want by tagging your facebook friends,however only the likes and reacts on the video originally posted from the Event page shall be considered for evaluation.`,
        `Any inappropriate video will lead to direct disqualification.`,
        `Using autoliker will lead to disqualification.`,
        `Keep yourselves updated about the event by following our official page on facebook.`
     ],
                _Specification: [``],
                _Rounds: [``],
                _Scoring: [``],
        _Coordinators: [
          {name: 'Neha Roy', phn: `+91-8327640533`}
              
      ]
    },
    {
      _CategoryName : `Musical.Ly`,
      img: `boom-2`,
      _Quote: `Perform to your hearts content and your creativity will bag you exciting prizes.`,
      _MAPS: [``],
      _ProblemDescription : `From ‘Raj, naam toh suna hi hoga’ to shaking your leg to ‘Moves like Jagger’ if you’re a person who believes in expressing, then we’re looking for you !  Musical.ly is an app through which users can create 15-second to 1-minute videos and choose sound tracks to accompany them. Not only can you select different speed options like time-lapse, slow, normal, fast or epic but also add preset filters and effects. Now, all of this you probably knew; what you didn’t know was that you could use this to bag exciting goodies. So bring out the performer in you and get ready to impress.`,
      _EventRules: [`You have to use only the Musical.ly app to record your videos. Use of any other app is prohibited. `,
      `You have to mail the videos to ‘justlikethat.edge18@gmail.com’ along with your details(Name,year,College).The videos received shall be subjected to screening and will be checked if they comply with the given rules and regulations.`,
      `Only appropriate videos shall be uploaded from the official page of the Event and the most innovative Musical.ly video with maximum number of likes and reacts is likely to win exciting goodies. `,
      'There is no limit on the number of individuals appearing in the Musical.ly video but such a video can be submitted by only one individual.',
      'An individual can submit only one Musical.ly video.Multiple submissions shall not be considered.',
      `You can share and promote your own videos from the Event page as much as you want by tagging your facebook friends,however only the likes and reacts on the video originally posted from the Event page shall be considered for evaluation.`,
      `Any inappropriate video will lead to direct disqualification.`,
      `Using autoliker will lead to disqualification.`,
      `Keep yourselves updated about the event by following our official page on facebook.`
   ],
              _Specification: [``],
              _Rounds: [``],
              _Scoring: [``],
      _Coordinators: [   {name: 'Neha Roy', phn: `+91-8327640533`}
    ]
    }
    ]
  },
  {
    name: `Fun Events`,
    img: `ev-12`,
    categories: [
    {
        _CategoryName : `Body Zorbing`,
        img: `fe-1`,
        _Quote: `This fun event procures the highest participation every year since this high energy, fun-filled activity has been a treat for the participants. Here participants secured themselves in transparent balls and set everybody else laughing their hearts out while they fell down, bumped on each other or rolled down, trying to overthrow their opponents.`,
        _MAPS: [``],
        _ProblemDescription : ``,
        _EventRules: [``],
        _Specification: [``],
        _Rounds: [``],
        _Scoring: [``],
        _Coordinators: [
          {name: 'Rishi Vardhan', phn: `+91-7980729431`}
        ]
    },
    {
      _CategoryName : `Red Bull Pong`,
      img: `fe-2`,
      _Quote: `Sponsored by Red Bull this event became quite popular amongst the youth. This event judged how many balls each player could land into the red bull cups. The player with the maximum
      score was awarded by Red Bull.`,
      _MAPS: [``],
      _ProblemDescription : ``,
      _EventRules: [``],
      _Specification: [``],
      _Rounds: [``],
      _Scoring: [``],
      _Coordinators: [
        {name: 'Ravi Gupta', phn: `+91-9831923564`}
        
      ]
    },
    {
      _CategoryName : `Paint Ball`,
      img: `fe-3`,
      _Quote: `Get, set, shoot! Yes. An event where you are given a paintball gun and you have to use your sniper skills to aim, shoot and win exciting prizes.`,
      _MAPS: [``],
      _ProblemDescription : ``,
      _EventRules: [``],
      _Specification: [``],
      _Rounds: [``],
      _Scoring: [``],
      _Coordinators: [
        {name: 'Rahul Kumar Goel', phn: `+91-9804150874`}
      ]
    },
    {
      _CategoryName : `Hit the can`,
      img: `fe-4`,
      _Quote: `This is a simple event that involves taking aim and hitting the target. Topple the maximum number of cans with your aim to edge out your competition.`,
      _MAPS: [``],
      _ProblemDescription : ``,
      _EventRules: [``],
      _Specification: [``],
      _Rounds: [``],
      _Scoring: [``],
      _Coordinators: [
        {name: 'Ganesh Ranjan', phn: `+91-8334017410`}
        
      ]
    },
    {
      _CategoryName : `Electric Bull`,
      img: `fe-5`,
      _Quote: `Ride the bull to win glory. In this event the one lasting the longest on the moving electric bull will emerge victorious.`,
      _MAPS: [``],
      _ProblemDescription : ``,
      _EventRules: [``],
      _Specification: [``],
      _Rounds: [``],
      _Scoring: [``],
      _Coordinators: [
        {name: 'Suman Kumar', phn: `+91-8100114097`}
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
    let category: {
      _CategoryName: string;
      img: string;
      _Quote: string;
      _MAPS: any[];
      _ProblemDescription: string;
      _EventRules: string[];
      _Specification: string[];
      _Rounds: string[];
      _Scoring: string[]; _Coordinators: ({
        name: string;
        phn: string;
    } | {
        namme: string;
        phn: string;
    })[]}[];
      category = this.getCategory(event);

    const subCategory = category.find(
      (s) => {
        return s._CategoryName === subevent;
      }
    );
    return subCategory;
  }
}
