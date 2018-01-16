
export class MyeventsService {

   MyEvents = [
    {
      name: `Robotics`,
      img: `ev-1`,
      categories: [
        {
          _CategoryName : `Affiliator`,
          img: `r-1`,
          _Quote: `Put the right effort and things will get rightly placed.`,
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
          _Scoring: [
            `FINAL SCORE: 200*(No. of blocks placed) +2*(time left in sec)-30*(no. of hand touches)- 100*(for 2nd time-out)
            -300(for restart)`
          ],
          _Coordinators: [`Sagar Sangam : +917991186092`,
              `Saurabh Kumar Gupta : +918697474145`,
              `Piyush Raj : 8282926317`
          ]
      },
        {
              _CategoryName : `Stalker`,
              img: `r-2`,
              _Quote: `Follow the trail and glory
              waits for you at the finishing line.`,
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
                  `The decision of the co-ordinators will be final and binding.`
              ],
              _Specification: [
                `The width of line will be 2.5cm (approx.).`,
                  `There will be a total of 3 rounds.`,
                  `The maximum time allotted to complete the task is 4 minutes in the prelims and 6 minutes in the finals.`,
                  `A team can have maximum of three resets &amp; one restart in 1 st round and five resets &amp; three restart
                   in 2 nd and 3 rd rounds.`,
                  `For the final round the arena may contain inclinations and see-saw and The path may also be blocked by
                   cubical blocks which should be avoided by the bot.`,
                  `After every reset, the bot will be placed at the last check point but each will lead to a penalty
                   (the timer will not be paused during reset).`,
                  `If a team wants a restart, the bot will be placed at the starting point.`,
                  `The run shall start from a predefined starting zone.`,
                  `The decision of the event coordinator(s) will be final and binding.`
              ],
              _Scoring: [
                  `20 Points will be awarded for successfully crossing each checkpoint.`,
                  `100 points will be awarded for successfully reaching the end point.`,
                  `150 Points will be awarded for stopping at the end point.`,
                  `Penalty of 20 points will be imposed for each reset.`,
                  `Penalty of 50 points will be imposed for each restart.`
              ],
              _Coordinators: [
                  `Utsav Shah : +91896710868`,
                  `Dwitam Ghosh : +918293929077`
              ]
          },
          {
              _CategoryName : `JigSaw`,
              img: `r-3`,
              _Quote: `Only the craze to solve the
              maze can help you win and be subjected to praise.`,
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
                  `The decision of the coordinators will be final and binding.`
              ],
              _Specification: [
                `The arena will have white surface with black line of width 2.5cm (approx.)`,
                `Bot dimension must not exceed 25cm*25cm*25cm (tolerance of 10% is accepted for each parameter).`,
              ],
              _Scoring: [
                `There will be a total of 2 rounds.`,
                `In the 1st round the bot has to move from starting point to finish point in the minimum time.`,
                `In the 2nd round, once the bot reaches the finish point it will be placed at the starting point again
                 and the bot has to reach the
                 finish point once more using the shortest path possible.`,
                `The bot has to stop at the finish point.`,
                `The maximum time allotted to complete the task is 5 minutes in the prelims and 10minutes in the finals.`,
                `A team can have maximum of three reset &amp; one restart in 1st round and five resets &amp; three restart in 2nd round.`,
                `If a team wants a restart, the bot will have to start from a predefined starting point with timer reset and a penalty.`,
                `The decision of the event coordinator(s) will be final and binding.`,
                `Scoring:`,
                `150 Points will be awarded for reaching the finish point.`,
                `100 Points will be awarded for stopping at the finish point.`,
                `Penalty of 20 Points will be imposed for each resets.`,
                `Penalty of 50 Points will be imposed for each restart.`
              ],
              _Coordinators: [
                  `Dwitam Ghosh : +918293929077`,
                  `Utsav Shah : +91896710868`
              ]
          },
          {
              _CategoryName : `Wall Street`,
              img: `r-4`,
              _Quote: `Follow the trail and glory
              waits for you at the finishing line.`,
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
                  `The decision of the co-ordinators will be final and binding.`
              ],
              _Specification:[
                `The dimension of the bot should be 25x25x25 cm.`,
                  `The width of line would be 2.5cm. approx.`
              ],
              _Scoring: [
                `There will be a total of 3 rounds.`,
                `The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.`,
                `The run will start from a predefined starting point.`,
                `A team can have maximum of six hand-touches, two restarts, and two timeouts in each round.`,
                `If a team wants a restart, the bot will be placed at the starting point.`,
                `After every hand-touch, the bot will be placed on previous check-point.`,
                `The walls will present at a distance of 12-15 cm from the path of the robot.`,
                `Any collision with the wall treat as penalty.`,
                `When the robot follow the wall bot has to indicate that by glowing and LED or by sounds buzzer.`,
                `In the first round, the bot has to follow the line as well as wall, detect check points and indicate wall.`,
                `In the remaining two rounds, the bot has to follow the line as well as walls, detectcheck points, indicate wall
                 and has to stop at the finishing point.`,
                `Scoring :`,
                `Penalty of 150 points will be imposed for no of restarts taken.`,
                `Penalty of 100 points will be imposed for no of timeouts taken.`,
                `Penalty of 30 points will be imposed for each hand touch.`,
                `Penalty of 100 points will be imposed for each skips.`,
                `Penalty of 20 points will be imposed for each collision with wall.`,
                `50 points will be awarded for each wall if indicating properly.`,
                `50 points will be awarded for each detection of checkpoint.`,
                `100 points will be awarded for stopping at finishing point.`
              ],
              _Coordinators: [
                  `Dwitam Ghosh : +918293929077`,
                  `Utsav Shah : +91896710868`
              ]
          },
          {
              _CategoryName : `Marino Drift`,
              img: `r-5`,
              _Quote: `Strategize with your bot to win
              glory on both the terrains.`,
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
                  `In first round every team will be given a puzzle, every team will have to solve the puzzle
                  and perform the given task in minimum time.`,
                  `The terrestrial robot will have to find and place the respective blocks containing the
                  digits of the answer at their specific location.`,
                  `The terrestrial robots can use either picking or pushing mechanism for placing the blocks. `,
                  `A total of 4 minutes will be provided for the terrestrial bot to place the blocks at their correct position.`,
                  `After having placed the blocks, the aquatic robot will have to place the floating blocks at their correct positions.`,
                  `A total of 3 minutes will be provided for the aquatic robot to place the blocks at their correct position.`,
                  `Placing each block at their correct position will fetch each team positive marks and the time remaining (in seconds)
                   will be added as bonus to the final score.`,
                  `Each team is allowed a single restart in which negative points will be given to the team and they can begin their
                   again resetting the timer.`,
                  `In case if the teams find their robots stuck at some position they can take hand touch. In such a case the bot will be
                   placed in a position (by the co-ordinator) where it can move freely and negative points will be
                   given on each Hand touch.`,
                  `Each team will be provided with only 1 technical time-out of 3 minutes during which
                  they can repair their robots.`,
                  `Teams scoring the maximum points will proceed to the next round`,
                  `Round 2 will be a knockout Round`,
                  ` Two teams wil complete against each other. The Task will be similar to the task in round 1 with slight modifications
                   which will be disclosed during the event`,
                  ` the first team to complete the task will win and qualify for the 3rd round while the other team will get eliminated
                   from the competition`,
                  `Round 3 will be a time trial round`,
                  `The total time taken (in seconds) to complete the task will be the final score of the team`,
                  `The task will be similar to that of round 1 with slight modifications which will be disclosed during the event. `,
                  `The winners will be declared on the basis of final score. `
              ],
              _Specification: [
                `Maximum allowable dimension for the terrestrial bot will be 25cm x 25cm x 25cm with atollerance of 10%`,
                `The weight of the robot should not exceed 2kg.`,
                `The robot can be provided on-board or off-board`,
                `The Potential difference between any two electrical points n the robot must not exceed 22 volts throughout hte run`
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
              _Coordinators: [
                  `Sagar Sangam : +917991186092`,
                  `Saurabh Kumar Gupta : +918697474145`,
                  `Piyush Raj : 8282926317`
              ]
          },
          {
              _CategoryName : `Double-Up`,
              img: `r-6`,
              _Quote: `A fun filled event for both
              manual and autonomous bots.`,
              _ProblemDescription : `You want to double-up, then first toe the line.`,
              _EventRules: [
                  `All the events are one round event.`,
                  `Multiple registrations are allowed i.e. after completing one round, team may try again with fresh registration. `,
                  `Only on spot registrations will take place for the events under this category`,
                  `Method of mobility used for the robot which leads the robot to lose contact with the ground is not allowed.`,
                  `The decisions taken by the coordinators will be final and binding.`
              ],
              _Specification: [],
              _Scoring: [],
              _Coordinators: [
                  `Sagar Sangam : +917991186092`,
                  `Saurabh Kumar Gupta : +918697474145`,
                  `Piyush Raj : 8282926317`
              ]
          },
          {
              _CategoryName : `Robo Soccer`,
              img: `r-7`,
              _Quote: `Steer your bot expertly to
              score the maximum number of goals and win the match.`,
              _ProblemDescription : `Design a manually controlled robot capable of pushing blocks along with scoring maximum
               number of goals against other robots avoiding different obstacles.`,
              _EventRules: [
                  `A minimum of 3 members and a maximum of 4 members are allowed per team`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams.`,
                  `The participants will be provided with 220 Volts, 50 Hz standard AC supply.`,
                  `Participants will have to themselves arrange for any other power supply required for their robot.`,
                  `Teams cannot tinker with their bots during the play offs`,
                  `LEGO kits or its spare parts or pre-made mechanical parts are not allowed.`,
                  `Any kind of damage to the arena by the robot will lead to direct disqualification`,
                  `No attack on the opponent bot is allowed.`,
                  `Any act of misbehavior or misconduct will lead to immediate disqualification of the
                  team.`,
                  `The decision of the coordinators will be final and binding`,
                 
                  `First Round :`,
                  `The game will be of maximum 3 minutes`,
                  `The bot has to place maximum number of balls and blocks in a given time.`,
                  `Balls and blocks must be placed on their specified places.`,
                  `The bot has to place the blocks first then after they would have kick of the balls`,
                  `While moving, the bots have to avoid obstacles placed at different positions in arena.`,
                  `Two timeouts of 2 minutes each will be provided in case of any mechanical fault in the bot with negative points awarded 
                  for the second timeout.`,
                  `The teams with highest score will be selected for further rounds.`,
                  `Balls kicked from specified place awarded bonus point (jackpot)`,
                  `Scoring: SCORE = 100*[Number of blocks placed] +150*[Number of goals] +200*[Number of jackpots]
                  -20*[Number of obstacles touched] -50*[Number of times ball touches blocks] -100*[Second timeout taken] + [time left]`,
                  `Qualifiers :`,
                  `The game will be of maximum of 5 minutes`,
                  `This round will be a kockout round`,
                  `The team scoring the maximum goal wins`,
                  `Winner team will be selected for further rounds`,
                  `Semi Finals:`,
                  `This will be a knockout round`,
                  `The game will be of maximum of 5 minutes in two halves of 2.5 minutes each`,
                  `The bot has to score maximum numbr of goals against their opponents in given time`,
                  `A maximum of 10 seconds will be allowed to hold the ball`,
                  `The winner team will be selected for further rounds`,
                  `Scoring : Whoever scores the maximum number of goals, wins the competition`,
                  `The Final Blow:- The rules will be same as semifinals`,
                  `Scoring: Whoever scores the maximum number of goals,wins the competition`
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
              _Scoring: [
                `Whoever scores the maximum number of goals, wins the competition`
              ],
              _Coordinators: [
                  `Sagar Sangam : +917991186092`,
                  `Saurabh Kumar Gupta : +918697474145`,
                  `Piyush Raj : 8282926317`
              ]
          },
          {
            _CategoryName : `Robo-War`,
            img: `r-9`,
            _Quote: `A moment of pain is worth a
            lifetime of glory. The bot that survives till the end emerges
            as the victor.`,
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
                `Safety Rules:`,
                `Compliance with all event rules is mandatory. It is expected that competitors stay within the rules and procedures of their
                 own accord and do not require constant policing.`,
                `Special care should be taken to protect the on-board batteries and pneumatics, robot without proper protection will not
                 be allowed to compete.`,
                `If you have a robot or weapon design that does not fit within the categories set forth in these rules or is in some way
                 ambiguous or borderline, please contact the event organizers. Safe innovation is always encouraged, but surprising the
                organizers with your brilliant exploitation of a loophole may cause your robot to be disqualified before it even competes.`,
                `Each event has safety inspections. It is at their sole discretion that your robot is allowed to compete.
                 As a builder you are obligated to disclose all operating principles and potential dangers to the inspection staff.`,
                ` Proper activation and deactivation of robots is critical. Robots must only be activated in the arena, testing areas,
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
                `Bot Specifications:`,
                `Dimensons and Fabrications:`,
                `The machine should fit in a box of dimensions 600mm x 600mm x 350mm (l x b x h) at any given point during the match. `,
                `The external device used to control the machine or any external tank is not included in the size constraint. `,
                `The machine should not exceed 50 kg in weight including the weight of pneumatic source/tank. In case of wireless robot,
                 if the battery is on-board then the weight should not exceed 60 kg. `,
                `Power Sources:`,
                `The machine can be powered electrically only. Use of an IC engine in any form is not allowed. `,
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
                `Mobility`,
                `All bots must have clearly visible and controlled mobility mechanism in order to compete.`,
                `Methods of mobility may include: Rolling (wheels, tracks or the whole robot),
                 Walking (linear actuated legs with no rolling or cam operated motion) & Shuffling (rotational cam operated legs).`,
                `Jumping and hopping is not allowed`,
                `Flying (using aerofoil, helium balloons, ornithopters, etc.) is not allowed.`,
                `Any other method of mobility which leads the robot to lose contact with the ground is not allowed.`,
                `Robot control requirements: `,
                `Both wired and wireless remote controls are allowed in the event. `,
                `All wires coming out of the robot should be bundled as a single unit`,
                `The wires should be properly protected and insulated. `,
                `The wire should be sufficiently long so as to remain slack at all time during the competition. `,
                `In case of wireless remote controls, the remote should have atleast two frequency operations to prevent interference with other team.`,
                `Teams are recommended to attach a pipe to bot in vertical direction through which wires come out. The length of pipe will not be considered in bot dimension.`,
                `Weapon Systems:`,
                `Robots can have any kind of cutters, flippers, saws, lifting devices,spinning hammers etc. as weapons with following exceptions and limitations: `,
                `Any kind of inflammable liquid / liquid based weapons. `,
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
                `Maximum pressure in the tank containing pneumatic fluid should not exceed the limit of 10 bars and there should be a provision to check the pressure in the tank. `,
                `All hydraulic liquids are required to be non-corrosive and your device should be leak proof. The maximum pressure in cylinder should not exceed the rated pressure at any point of time.`,
                `Participants must be able to indicate the used pressure with integrated or temporarily fitted pressure gauge.`,
                `You must have a safe way of refilling the system `,
                `All pneumatic components on board a robot must be securely mounted. Care must be taken while mounting the pressure vessel and armour to ensure that if ruptured it will not escape the robot. `,
            ],
            _Scoring:[
              `Points will be awarded, once in a round, if the bot reaches opponent's starting point, which can be referred to as safe zone.`,
              `Points of the opponent team will be deducted if their bot is pushed into the danger zone (Remaining corners of the arena apart from safe zone).`,
              `Points will be awarded for pushing the opponent's bot out of the arena.`,
              `Specific scoring will be updated soon.`
            ],
            _Coordinators: [
                `Sagar Sangam : +917991186092`,
                `Saurabh Kumar Gupta : +918697474145`,
                `Piyush Raj : 8282926317`
            ]
        },
          {
              _CategoryName : `Robo Race`,

              img: `r-8`,
              _Quote: `The better you maneuver,
              the farther you reach.`,
              _ProblemDescription : `Build a bot (wired/wireless) that is capable of traversing the arena manually bypassing
               the hurdles in its path.`,
              _EventRules: [
                  ` General Rules :`,
                  `A minimum of 3 members and a maximum of 4 members are allowed per team.`,
                  `The members must bring IDENTITY CARDS of the college.`,
                  `No person should be a member of two teams.`,
                  `No bot can be shared by two teams`,
                  `The participants will be provided with 220 Volts, 50 Hz standard AC supply.`,
                  `Participants will have to themselves arrange for any other power supply required for their robot`,
                  `Team cannot tinker with bots during the run.`,
                  `LEGO kits or its spare parts or pre-made mechanical parts are not allowed`,
                  `Any kind of damae to the arena by the robot will lead to direct disqualification`,
                  `Any act of misbehaviour or misconduct will lead to direct disqualification.`,
                  `Any act of misbehaviour or misconduct will lead to immediate disqualification.`,
                  `Any decision of the co-ordinators will be final and binding`,
                  `ROUND 1: BEAT THE CLOCK`,
                  `In this round, the bot has to solel traverse the track.`,
                  `The bot will start from the point marked as “START” on the arena and will have to complete the arena in
                  maximum 5 minutes.`,
                  `The track will be sub divided into several checkpoints.`,
                  `Any Number of hand-touches can be taken during the run if there is any mishap/toppling. Bots will be 
                  placed again at the point of discontinuity.`,
                  `Only 3 hurdles can be skipped.`,
                  `Only 1 restart will be allowed. (The bot will be placed back at the starting position)`,
                  `There will be penalty of 20 seconds for each hand-touch while 100 seconds for each skip.`,
                  `There will be penalty of 300 seconds for restart.`,
                  `After 5 min the team will be given points on the basis of number of checkpoints crossed`,
                  `Selection of teams for next round will be on the basis of time taken and the number of checkpoints crossed
                   while traversing the arena.`,
                  `Round 2: Survival Of The Fastest `,
                  `In this round, two bots will compete against each other.`,
                  `This is a one-on-one event in which two bots will take on each other at a time.`,
                  `Each bot has to try finishing the race first.`,
                  `Bots will start from the point marked as “START” on the arena.`,
                  `Teams qualifying this round will be considered for the next round.`,
              ],
              _Specification: [
                ` Bot Specifications:`,
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
              _Scoring: [
                `BEAT THE CLOCK: SCORE = 1000 – 2 *(Time taken in seconds) – 20 * (no. of hand touch) – 100 * (no. of skips)
                   –50 * (no. of time-outs) – 300 (for restart) `,
                  `SURVIVAL OF THE FASTEST: There is no score system. Whoever reaches the “FINISH” point first, wins the race.
                   However, a team cannot opt for more than 2 TIMEOUTS.`
              ],
              _Coordinators: [
                  `Sagar Sangam : +917991186092`,
                  `Saurabh Kumar Gupta : +918697474145`,
                  `Piyush Raj : 8282926317`
              ]
          },
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
          _ProblemDescription : `Do you have complete faith in your brain and your hand? Can your hands produce what your brain
          thinks? Well maybe this is the event you have been waiting for. A coding event with a twist. Blind
          Coding is something which will bring out your power of concentration and will.`,
          _EventRules: [`This is an individual event.`,
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

              _Specification: [],
              _Scoring: [],
          _Coordinators: [`Amar Bathwal : +918820549897`,
                           `Meghna Roy : +917059306878`
          ]
      },
      {
          _CategoryName : `BugHunt`,
          img: `ca-2`,
          _Quote: `A coder is all about perfection and
          identifying the cracks and holes to make a flawed
          algorithm picture perfect.`,
          _ProblemDescription : `Do you often find faults in others’ codes? Or are you always on the hunt for errors whenever you see a
          code? Well, then this event might just be for you. Find out the trickiest of bugs in the simplest codes and
          correct them in the shortest and smartest way possible. Beat the others to the finish and claim the prize.`,
          _EventRules: [`Each team can have either 1 or 2 members.`,
                        `The event consists of 2 rounds: Preliminary Round & Final Round`,
                        `Preliminary Round is going to be an MCQ round on the languages C, C++ and Java.`,
                        `A team may choose any one of the three languages.`,
                        `This round will test the fundamental skill of the participants in the
                        language they choose.`,
                        `The teams with the best performance will qualify for the next round.`,
                        `Final Round is going to be a Debugging round. Again C, C++ and Java will be the
                        languages of choice for the teams (Teams are allowed to choose a different
                        language or this round).`,
                        `ii. All the teams will be provided with some buggy code snippets and they will have
                        to correct these code snippets in the minimum number of steps possible.`,
                        `Teams will be marked based on the number of steps they take to
                        correct a code snippet and also the time taken to correct it.`,
                        `The coordinators have the right to change the rules and judging criteria of the contest at any
                        time they deem fit.`
                        ],

              _Specification: [],
              _Scoring: [],
          _Coordinators: [`Raunak Roy : +919831079974`,
                          `Prince Kumar : +917059507444`,
                          `Indrajit salul : +917209127729`
          ]
      },
      {
          _CategoryName : `CodanWars`,
          img: `ca-3`,
          _Quote: `The Coder who can conquer the
          maximum regions with their algorithmic virtuosity will
          triumph.`,
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
                         `Conquering a region :- `,
                         `Each one of the 4 rulers trying to conquer the region will be given a castle on the map.
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
                         `Solving a Question:`,
                         `On selecting an available point on the graph, a problem statement will be provided
                         along with all the requirements and constraint. Once you think you have a solution
                         prepared you can request for a set of inputs. A file containing the inputs will be given to
                         you, and 2 minute countdown will start. You have to generate a file containing the
                         outputs for each input.`,
                         `To solve the question successfully, you have to upload 2 files.`,
                         ` Your correct solution(the code)`,
                         ` Your Outpt file fr the given input file`,
                         `This whole event will be spanned over 48 hours. So the participants playing throughout will get
                         to play on 8 regions over the span of two days and get a lot of chances to showcase their skills in
                         coding.`,
                         `Link will be made available on a later date.`
          ],
          _Specification: [],
          _Scoring: [],
          _Coordinators: [`Suraj Kumar : +918820070440`,
                          `Ritwik Datta : +918334881521`
          ]
      },
      {
          _CategoryName : `CodeOut`,
          img: `ca-4`,
          _Quote: `A call out to all you hidden gem coders to
          prove your abilities in this online event.`,
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

          _Specification: [],
          _Scoring: [],
          _Coordinators: [`Shiv Kumar : +918820315476`,
                          `Neelarhya Mandal : +919163616724`,
                          `Suyash Mittal : +917044793121`
          ]
      },
      {
          _CategoryName : `CryptoQuest`,
          img: `ca-5`,
          _Quote: `Put your cryptography and
          deciphering skills to test by proving yourself while
          solving the clues.`,
          _ProblemDescription : `When cryptography is outlawed, bayl bhgynjf jvyy unir cevinpl.
          - John Perry Barlow
          Can you solve the cipher above and make a meaningful sentence out of it? Well if you can then you are
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
          _Specification: [],
          _Scoring: [],
          _Coordinators: [`Suyash Mittal : +917044793121`,
                          `Priyadarhini purkayastha : +918584944024`,
                          `Radhika Mohta : +919163981049`
          ]
      },
      {
          _CategoryName : `FlawLess`,
          img: `ca-6`,
          _Quote: `Just like the name suggests , as flawless as
          one’s codes become the better chance they have of
          winning.`,
          _ProblemDescription : `If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then
          this is the perfect event for you. Code your heart out and race with the others to win the battle of wits
          and will. Be Flawless!`,
          _EventRules: [`Each team can have either 1 or 2 members.`,
                        `This event will consist of 2 rounds of coding: Preliminary Round & Final Round`,
                        `The first round will be an elimination round where the participants will have to
                        solve 5 questions in a duration of 3 hours. The teams will be judged based on
                        the number of problems they will solve and the time taken to solve the
                        problems. The teams with the best performances will qualify for the next round.`,
                        `The ultimate showdown will take place between the teams selected from the
                        previous round. The duration of this round is going to be 3 hours. The number
                        of questions in this round will be declared on spot on the day of the finals.
                        Again, like the prelims the teams will be judged based on the number of
                        problems they will solve and the time taken to solve the problems.`,
                        `The coordinators have the right to change the rules and judging criteria of the contest at any
                        time they deem fit.`

          ],
          _Specification: [],
          _Scoring: [],
          _Coordinators: [`Saquib Ul Hassan : +919804887223`,
                          `Suyash Mittal : +917044793121`
          ]
      }

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
          _ProblemDescription : `Any completed or underdevelopment engineering based college project, either hardware implemented
          or simulated, or software based implementation, may be offered for consideration. Any undergraduate
          level engineering project is welcome, and would most likely be encouraged towards improvement
          holistically. A worthy project would be appraised and duly rewarded, along with assistance towards
          development, patenting and publication.
          NOTE: IF ANYONE HAS NO WORKING MODEL THEN THEY CAN COME UP WITH THEIR INNOVATIVE IDEAS
          WITH A POWERPOINT PRESENTATION ON ANY OF THE ABOVE MENTIONED TOPIC. THIS IS A DIFFERENT
          CATEGORY WITH ATTRACTIVE PRIZE MONEY OTHER THAN EXHIBITION.`,
          _EventRules: [],
          _Specification: [],
          _Scoring: [],
          _Coordinators: [`Nabanita Bhandar : +917059485319`,
                           `Medha Mishra : +918013290587`,
                           `Aditi Kumari : +918276960454`
          ]
      }
  },

    {
        name: `Food for Fun`,
        img: `ev-5`,
        categories: [
            {
                _CategoryName : `Food Relay`,
                img: 'ff-1',
                _Quote: `Think your way through food to solve riddles and puzzles.`,
                _ProblemDescription : `Food Relay consists of four consecutive games which are to be played one after the other. The games
                under Food Relay are Who am I, Memory Game, Spot the difference, Riddles that examines your
                capability to recognize, instincts, thinking power, leadership and memory. A chance is given to you by
                EDGE 2018 to show your skills in team game in Food Relay.`,
                _EventRules: [`Each team must consists of 4 members.`,
                            `Particiants will have to solve 4 activities with one particpant in each team doing one particular activity.`,
                            `Participants cannot skip one activity to reach the next without completing it.`,
                            `The team that completes the tasks most effectively and in the least time possible, will be judged the winner.`,
                            `The decision by the judges will be final`
                ],

              _Specification: [],
              _Scoring: [],
                _Coordinators: [ `abc: +911234567890`,
                `DEF: +911234567890`]
            },
            {
                _CategoryName : `Creation-X-Nihilo`,
                img: 'ff-2',
                _Quote: `Create a machine with the raw materials
                and take away the prize for your creative thinking.`,
                _ProblemDescription : `Creation-X- Nihilo gives you an opportunity to construct a miniature of a model which is used in the
                industry with the help of commodities used in daily life. This is an event where you can showcase your
                creativity and vision differing from others.`,
                _EventRules: [ `Each team can consists of 2-4 members.`,
                    `Each team will be given some virtual money and things are to be purchased by that virtual money.`,
                    `The team that constructs the most efficient target model should be constructed within the time period`,
                    `This is a time bound game. The model should be constructed within the time period given.`
                ],
                _Specification: [],
                _Scoring: [],
                _Coordinators: [ `abc: +911234567890`,
                `DEF: +911234567890`]
            },
            {
                _CategoryName : `X-Quiz-IT`,
                img: 'ff-3',
                _Quote: `Unleash your brain cells and win this informative
                quiz on a wide spectrum of topics.`,
                _ProblemDescription : `Wisdom is not a product of schooling but of the lifelong attempt to acquire it. This event gives
                 you a platform to gain and share knowledge. X-Quiz IT under FOOD for FUN is not only about food. Show us
                 how good you are when it comes to quiz.`,
                _EventRules: [`Each team can consists of 2-4 members`,
                   `A preliminary round will be held which consists of 20 questions with 5 starred questions and the time period will be of
                   20 minutes.`,
                   `Questions will be held on a wide range of topics from Food Technology, Microbiology, Food Chemistry, Mechanis, general
                   knowledge and other fields.`,
                    `The team with the highest points at the end of all the rounds will be declared the winner.`,
                    `In case of any discrepency, the decision of the judges will be final.`
                ],
                _Specification: [],
                _Scoring: [],
                _Coordinators: [ `abc: +911234567890`,
                `DEF: +911234567890`]
            },
            {
                _CategoryName : `Food Product Labelling`,
                img: 'ff-4',
                _Quote: `Label the food products correctly
                to win this event.`,
                _ProblemDescription : `This event will give you a chance to showcase your vision as an entrepreneur, design your own food
                product and launch it in the market. Food Product Labelling is an analytical event where food packages
                are to be designed with the most suitable chemical composition of a particular food item given. In short
                participants will have to design a food package similar to the branded packaged food items they come
                across regularly in shops and supermarkets.`,
                _EventRules: [`Each team should consists of 2 members.`,
                    `The designig of food package along with the chemical composition of the given food items is to be completed within one
                    hour.`,
                    `The team with the closest chemical composition and the more attractive packge design will be declared the winner.`,
                    `In case of any discrepancy, the decision of the judges will be final.`
                ],
                _Specification: [],
                _Scoring: [],
                _Coordinators: [ `abc: +911234567890`,
                                `DEF: +911234567890`]
            },
            {
                _CategoryName : `Food Hunt`,
                img: 'ff-5',
                _Quote: `Hungry enough for the prize? Hunt your food down and satiate yourself.`,
                _ProblemDescription : `Food Hunt is an interesting event where each team having 4 members will be trying to find hidden
                objects or places by following a series of clues or riddles. This is almost similar to treasure hunt, but only
                difference is in Food Hunt teams will have to solve a given riddle to reach a place where they will find
                another riddle that hides an ingredient of the final treasure food and that ingredient is to be reported.
                This event enables exploration and discovery, sharpens navigational skills, builds teamwork and relieves
                stress. If you love adrenaline rush, this is for you.`,
                _EventRules: [`Each team must consists of 4 members.`,
                    `Places found and ingredients must be kept secrets from other teams to ensure your victory.`,
                    `Ridle for the next place hiding another riddle indicating the next ingredient, will be given if the previous 
                    ingredient reported is correct.`,
                    `10 riddles are to be solved in 5 rounds, 2 in each round as mentioned above in least time to be declared the winner.`,
                    `Each round should be completed n 30 minutes.`
                ],
                _Specification: [],
                _Scoring: [],
                _Coordinators: [ `abc: +911234567890`,
                `DEF: +911234567890`]
            },
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
              _ProblemDescription : `What makes you to pull out the cell phone from your pocket and to take an
              awesome photo?
              A mobile photography competition where your photographic skills combined
              with creative approach and innovative ideas can bag you the first prize.`,
              _EventRules: [
                  `“Where you capture the soul infatuation with your cell phone.”
                  This is a mobile photography event. Your photos can be used with proper
                  copyright statements for Geekonix beneficial.`,
                  `The topic is open. So just give us the best of you.`,
                  `GENERAL REGULATION-
                  Incoming photograph submissions shall be screened for originality,
                  authenticity &amp; copyright infringement &amp; maintaining editing regulation issues.
                  No entry should contain any infringing, threatening, false, misleading, abusive,
                  harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
                  pornographic or profane content.
                  Geekonix recognizes &quot;You&quot;. So the author of the image retains full ownership
                  of the copyright in each entry.`,
                  `NOT ALLOWED
                  HDR, Selective Colouring, Manipulation of pictures are not allowed.
                  tempering with EXIF is also not allowed.`,
                  `ALLOWED
                  Mild post processing like Colour correction, Light editing, Sharpness
                  enhancements are allowed.
                  Cropping up to 15% is allowed.
                  Proper Aspect ratios should be maintained.`,
                  `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
                  soon)`,
                  `AFTER SUCCESSFULLY REGISTRATION OF THE FORM, PARTICIPANTS
                  WILL BE PROVIDED WITH A RECEIPT NO, WHICH THEY NEED TO
                  MENTION WHILE SUBMITTING PHOTOS AND MONEY.`,
                  `You can submit the registration fee in college registration desk or by
                  PAYTM ( 9748234607 ) or to the submission centres. (Final names of
                  those centres will be updated soon)`,
                  `Willing participants are requested to submit their photos via e-mail to ‘
                  infocus.edge@gmail.com ’ with subject “ Submission For Shootmup ”
                  or in a CD/DVD to the collectors of respective submission centres.
                  (Names will be provided soon)`,
                  `Last date of submission is 6th April 2018.`,
                  `After qualifying for the final screening selected participants will be
                  asked to be present on the final day of the event on 8th April at 12
                  noon in the college premises.`
              ],
              _Specification: [],
              _Scoring: [],
              _Coordinators: [`Priyanka SenGupta : +919748234607`,
                  `Biswajit Banerjee : +9178090100127`
              ]
          },
          {
              _CategoryName : `Insta-Film`,
              img: `fo-2`,
              _Quote: `Live EDGE and thread the frames. The best
              mobile video with a creative approach , shot on the spot ,
              gets rewarded.`,
              _ProblemDescription : `Bring out your creativity and innovation to capture the emotions with tour magical real-story to 
              bag the prizes`,
              _EventRules: [
                  `GENERAL REGULATION-
                  Incoming photograph submissions shall be screened for originality,
                  authenticity &amp; copyright infringement &amp; maintaining editing regulation issues.
                  No entry should contain any infringing, threatening, false, misleading, abusive,
                  harassing, *libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
                  pornographic or profane content.
                  Geekonix recognizes &quot;You&quot;. So the author of the image retains full ownership
                  of the copyright in each entry.`,
                  `Video must be shot on campus`,
                  `Any kind of video editor or app or software can be used`,
                  `Any kind of presets or plug in can not be used`,
                  `If any soundtrack is needed, you have mention the
                  courtesy.`,
                  `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
                  soon)`,
                  `AFTER SUCCESSFULLY REGISTRATION OF THE FORM,
                  PARTICIPANTS WILL BE PROVIDED WITH A RECEIPT NO,
                  WHICH THEY NEED TO MENTION WHILE SUBMITTING
                  PHOTOS AND MONEY.`,
                  `You have to register yourself and submit the registration fees
                  for the event Instaclick even at the registration desk at the
                  event time or you can by Paytm`,
                  `WILLING PARTICIPANTS HAVE TO SUBMIT THEIR PHOTOS
                  TO THE ALOTTED REGESTRATION DESK EVENT DAYS.`
              ],
              _Specification: [],
              _Scoring: [],
              _Coordinators: [`Sayantan Bhattacharya : +919163480278`,
                  `Biswajit Banarjee : +917890100127`
              ]
          },
          {
              _CategoryName : `Insta-Click`,
              img: `fo-3`,
              _Quote: `An on spot photography competition that will
              measure your creativity as well as innovative approach to
              photography.`,
              _ProblemDescription : `“Capture the moment that’s gone and impossible to reproduce.
              Shoot in the moment.”
              The best and the most extraordinary photograph clicked on the event day gets
              awarded.
              Live Event Photography`,
              _EventRules: [
                  `GENERAL REGULATION-
                  Incoming photograph submissions shall be screened for originality,
                  authenticity &amp; copyright infringement &amp; maintaining editing regulation issues.
                  No entry should contain any infringing, threatening, false, misleading, abusive,
                  harassing, *libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
                  pornographic or profane content.
                  Geekonix recognizes &quot;You&quot;. So the author of the image retains full ownership
                  of the copyright in each entry.`,
                  `No post-processing is allowed`,
                  `Only cropping upto 15% is allowed`,
                  `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
                  soon)`,
                  `AFTER SUCCESSFULLY REGISTRATION OF THE FORM,
                  PARTICIPANTS WILL BE PROVIDED WITH A RECEIPT NO,
                  WHICH THEY NEED TO MENTION WHILE SUBMITTING
                  PHOTOS AND MONEY.`,
                  `You have to register yourself and submit the registration fees
                  for the event Instaclick even at the registration desk at the
                  event time or you can by Paytm`,
                  `WILLING PARTICIPANTS HAVE TO SUBMIT THEIR PHOTOS
                  TO THE ALOTTED REGESTRATION DESK EVENT DAYS.`
              ],
              _Specification: [],
              _Scoring: [],
              _Coordinators: [`Subhradeep Basu : +918436238707`,
                  `Nilanjana Biswas : +919800996502`
              ]
          },
          {
              _CategoryName : `Crumbs`,
              img: `fo-4`,
              _Quote: `Showcase your skills to win the prize in an event
              that will put your creativity and talent to the test.`,
              _ProblemDescription : `Landscape photography?That’s too mainstream.Time to go against
              the tide and explore the elegance in the most inconspicuous items
              around. The topic is open. So just give us the best of you. `,
              _EventRules: [
                  `This is an open end event. Anyone from any field with any type of
                  camera can participate. Your photos can be used with proper
                  copyright statements for Geekonix beneficial.`,
                  `Incoming photograph submissions shall be screened for originality, authenticity
                  &amp; copyright infringement &amp; maintaining editing regulation issues. No entry
                  should contain any infringing, threatening, false, misleading, abusive, harassing,
                  *libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
                  pornographic or profane content.`,
                  `Geekonix recognizes &quot;You&quot;. So the author of the image retains full ownership
                  of the copyright in each entry.`,
                  `NOT ALLOWED
                  Framing are not allowed.
                  HDR, Selective Colouring, Manipulation of pictures are not allowed.
                  tempering with EXIF is also not allowed.`,
                  `ALLOWED
                  Mild post processing like Colour correction, Light editing, Sharpness
                  enhancements are allowed.`,
                  `Cropping up to 15% is allowed.`,
                  `Proper Aspect ratios should be maintained.`,
                  `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
                  soon)`,
                  `AFTER SUCCESSFULLY REGISTRATION OF THE FORM,
                  PARTICIPANTS WILL BE PROVIDED WITH A RECEIPT NO.,
                  WHICH THEY NEED TO MENTION WHILE SUBMITTING
                  PHOTOS AND MONEY.`,
                  `Willing participants are requested to submit their photos/ films in the
                  understated centres. (Final names of those centres will be updated
                  soon)`,
                  `Submission fees should be given to the respective collectors in the
                  respective centres. (Names will be provided soon)`,
                  `Last date of submission is 5 th April, 2018.`,
                  `Or you can submit the registration fee in college registration
                  desk or submission centres or by PAYTM`,
                  `Participants are requested to submit the photos in a CD/DVD
                  (mandatory for participants for Kolkata) or via email id ‘
                  infocus.edge@gmail.com ‘ with subject – “Submission for
                  Crumbs” , with details like (NAME, CONTACT NO., NO. OF
                  PHOTOS, INSTITUTION NAME (if applicable), ADDRESS,
                  EMAIL ID) written in a WORD file.`,
                  `After qualifying for the final screening selected participants will be
                  asked to be present on the final day of the event on 8th April at 12
                  noon in the college premises.`
              ],
              _Specification: [],
              _Scoring: [],
              _Coordinators: [`Priyanka senGupta : +919748234607`,
                  `Subhradeep Basu : +918436238707`
              ]
          },
          {
              _CategoryName : `Odyssey`,
              img: `fo-5`,
              _Quote: `If filmmaking is what intrigues you and then this
              is the event for you. You stand the chance of getting
              recognition from stalwarts of the film industry.`,
              _ProblemDescription : `“If it can be written or thought, it can be filmed”
              A picture is worth a thousand words . Tell us your story as you capture the
              mobility.`,
              _EventRules: [
                  `Incoming films shall be screened for originality, authenticity &amp;
                  copyright infringement issues. No entry should contain any
                  infringing, threatening, false, misleading, abusive, harassing,
                  *libellous, defamatory, vulgar, obscene, scandalous, inflammatory,
                  pornographic or profane content. Judge&#39;s decision will be final to
                  determine whether the content is inappropriate or not and
                  accordingly your work might get disqualified.`,
                  `Run time – 15 minutes is the maximum time period, which will be provided for
                  each film screening. Shorter films can get extra points according to judge’s
                  willing.`,
                  `Statutory warnings should be included as per the needs.`,
                  `**English subtitles should be included.`,
                  `PARTICIPANTS NEED TO FILL A GOOGLE FORM (Link will be provided
                  soon)`,
                  `AFTER SUCCESSFULLY REGISTRATION OF THE FORM, PARTICIPANTS
                  WILL BE PROVIDED WITH A RECEIPT NO, WHICH THEY NEED TO
                  MENTION WHILE SUBMITTING PHOTOS AND MONEY.`,
                  `Willing participants are requested to submit their films in the
                  understated centres. (Final names of those centres will be updated
                  soon)`,
                  `Submission fees should be given to the respective collectors in the
                  respective centres. (Names will be provided soon)`,
                  `Last date of submission is 7th April 2018.`,
                  `Participants are requested to submit the film in a CD/DVD, or via
                  Google Drive and mail the link to ‘ infocus.edge@gmail.com ’, with
                  details like (NAME, CONTACT NO., TITLE OF THE FILM, INSTITUTION
                  NAME (if applicable), ADDRESS, EMAIL ID) written in a WORD file.`,
                  `You need to submit the registration fee in college registration desk or
                  at submission centres or by PAYTM`,
                  `Once a film has been selected it cannot be withdrawn from the Festival
                  program during the event.`,
                  `Once a film has been selected it cannot be withdrawn from the Festival
                  program during the event.`
              ],
              _Specification: [],
              _Scoring: [],
              _Coordinators: [`Priyanka SenGupta : +919748234607`,
                  `Biswajit Banerjee : 7890100127` 
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
          hidden treasure awaits .`,
          _ProblemDescription : `It's a treasure hunt with a technical twwist in the clues.`,
          _EventRules: [`There shall be 3 or 4 members in a team. Team members may be from different
              institutions/colleges.`,
                        `No programming skills required.`,
                        `Each member should have a valid id card of his/her institute/college.`,
                        `The right spirit of participation is expected from all the participants.`,
                        `The organizing committee reserves the right to make any last minute changes.`
                  ],
                  _Specification: [],
                  _Scoring: [],
          _Coordinators: [`Nabanita Bhandar : +917059485319`,
              `Medha Mishra : +918013290587`,
              `Aditi Kumari : +918276960454`
          ]
      }
  },
 {
      name: `Create It`,
        img: `ev-9`,
        categories: [
        { 
        _CategoryName : `Rags to Riches`,
          img: `in-3`,
          _Quote: `if creativity from scratch is your strength,
          rags to riches is definitely your platform.`,
          _ProblemDescription : `With sand and water, the world he stitches Grant us power, grant our wishes Gives you scrap to build
          your creations Start with rags and ends with riches. Problem statement to be given on the spot.
          As an example we have the problem:
          o Participants were given paint, poster colours etc.
          o They were required to make something creative out of it and paint a member in their team
          o They were also supposed to give a description of it.`,
          _EventRules: [`There shall be a maximum of 3 members in a team. Team members may be from different
              institutions/colleges.`,
                        `All the requirements will be provided.`,
                        `The time allotted will be 1 hour.`,
                        `Each member should have a valid ID card of his/her institute.`,
                        `The right spirit of participation is expected from all the participants.`
                  ],
                  _Specification: [],
                  _Scoring: [],
          _Coordinators: [`Nabanita Bhandar : +917059485319`,
              `Medha Mishra : +918013290587`,
              `Aditi Kumari : +918276960454`
          ]
        },
        {
          _CategoryName : `Mekanix`,
          img: `in-4`,
          _Quote: `Knowledge and creativity go hand in hand in
          this event that tests how updated and polished your mind
          is.`,
          _ProblemDescription : `Give me a lever long enough and much space to stand and I will move the whole world.`,
          _EventRules: [`A team may have maximum of 4 members.`,
                        `No person should be a member of two teams.`,
                        `The members must bring ID cards of their respective colleges.`,
                        `All the participating teams will have to be present on the event area in time or else they will
                        be disqualified.`,
                        `The participating team should not damage other’s model or equipment. Any misbehavior will
                        lead to direct disqualification.`,
                        `Any act of misbehavior or misconduct will lead to direct disqualification.`,
                        `The decision of the coordinators will be final and binding.`,
                        `The decision of the coordinators will be final and binding.`,
                        `The rules are subject to change.`,
                        `This will be 2 rounds in the event. Each team will would be given only 1 chance for each of the
                        rounds and the best score will be considered as per the scoring procedure for each round.`,
                        `In First Round : `,
                        `i. Only two members of the team will be allowed to participate in this round.`,
                        `ii. The quiz will be taken in 3 divisions. The first part will be a MCQ-Aptitude test
                        based on general mathematics and physics with 10 questions to be concluded
                        in 15 minutes.`,
                        `The second part is logic-based where the questions/situations will be
                        dictated and the team will have to answer verbally.`,
                        `The third part will be a rapid fire round with expeditious questioning
                        based on general technical questions.`,
                        `Second Round : `,
                        `i. All the members of the team have to participate in this round.`,
                        `ii. This will be a model making round.`,
                        `iii. Each team will be allotted with some amount of virtual money. The
                        team will have to purchase the equipment and build the model with the same.`
                  ],
                  _Specification: [],
                  _Scoring: [],
          _Coordinators: [`Nabanita Bhandar : +917059485319`,
              `Medha Mishra : +918013290587`,
              `Aditi Kumari : +918276960454`
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
      _ProblemDescription: string;
      _EventRules: string[];
      _Specification: string[];
      _Scoring: string[];
      _Coordinators: string[]}[];
      category = this.getCategory(event);

    const subCategory = category.find(
      (s) => {
        return s._CategoryName === subevent;
      }
    );
    return subCategory;
  }
}
