export interface Point {
  n: string;
  head: string;
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Stage {
  id: string;
  label: string;
  type?: 'read' | 'video' | 'practice' | 'quiz' | 'case';
  title: string;
  source: string;
  intro: string;
  points: Point[];
  examples: string[];
  quiz?: QuizQuestion;
  quizzes?: QuizQuestion[];
  keyTakeaway?: string;
}

export interface Module {
  id: string;
  number: number;
  kicker: string;
  title: string;
  citation: string;
  meta: string;
  colorTheme: {
    bg: string;
    border: string;
    accent: string;
    badge: string;
    lightBg: string;
    buttonBg: string;
  };
  stages: Stage[];
}

export const MODULES_DATA: Module[] = [
  {
    id: "m1",
    number: 1,
    kicker: "Module 1",
    title: "How Everyday Things Communicate",
    citation: "Norman, The Design of Everyday Things, Chapters 1–2",
    meta: "Norman, Ch. 1–2 · 73 pages",
    colorTheme: {
      bg: "bg-[#f59e0b]",
      border: "border-[#b45309]",
      accent: "#d97706",
      badge: "bg-amber-100 text-amber-900 border-amber-300",
      lightBg: "bg-[#fef3c7]",
      buttonBg: "bg-[#fbbf24] hover:bg-[#f59e0b]",
    },
    stages: [
      {
        id: "m1-s1",
        label: "Discoverability",
        type: "read",
        title: "Doors, and the failure of discoverability",
        source: "Ch. 1, pages. 1–5",
        intro: "Norman opens with the door he is now famous for: push doors that should be pulled, pull doors that should be pushed. A door is about as simple a device as possible — you can open it or shut it — and yet it routinely defeats people.",
        points: [
          {
            n: "1",
            head: "Two characteristics of good design",
            text: "Discoverability: is it possible to figure out what actions are possible, and where and how to perform them? Understanding: what does it all mean, how is the product supposed to be used, what do the controls and settings mean?"
          },
          {
            n: "2",
            head: "Components must be visible and say the right thing",
            text: "Whether the device is a door, a stove, a phone or a nuclear plant, the relevant parts must communicate what actions are possible and where they should be done."
          },
          {
            n: "3",
            head: "Signals need not spoil the aesthetics",
            text: "A vertical plate on the side to be pushed, or visible supporting pillars, are natural signals, naturally interpreted — and no label is needed."
          }
        ],
        examples: [
          "The post-office entrance with six frameless glass doors: with no visible pillars or hinges, a distracted visitor pushed on the hinge side and became trapped between two rows of doors. Attractive, stylish, probably won a design prize.",
          "The Italian washer-dryer with multisymbol controls for everything imaginable: the husband refused to touch it, the wife memorized one setting and ignored the rest, and the manual was as confusing as the machine."
        ],
        quiz: {
          question: "According to Don Norman, what does a door needing a 'PUSH' or 'PULL' sign indicate?",
          options: [
            "Helpful and thorough user instruction",
            "A design failure where discoverability and affordance failed",
            "High aesthetic standard required for commercial buildings",
            "An unavoidable requirement of modern architecture"
          ],
          correctIndex: 1,
          explanation: "If a simple device like a door needs a written sign to explain how to operate it, its visual cues and physical form have failed to signify the proper action."
        },
        quizzes: [
          {
          question: "According to Don Norman, what does a door needing a 'PUSH' or 'PULL' sign indicate?",
          options: [
            "Helpful and thorough user instruction",
            "A design failure where discoverability and affordance failed",
            "High aesthetic standard required for commercial buildings",
            "An unavoidable requirement of modern architecture"
          ],
          correctIndex: 1,
          explanation: "If a simple device like a door needs a written sign to explain how to operate it, its visual cues and physical form have failed to signify the proper action."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Discoverability means a user can immediately determine what actions are possible without requiring external instruction."
      },
      {
        id: "m1-s2",
        label: "Human-centered design",
        type: "read",
        title: "Complexity, and human-centered design",
        source: "Ch. 1, pages. 5–10",
        intro: "All artificial things are designed — furniture layouts, garden paths, electronics, and also services, lectures, rules, procedures and organizational structures, which have no physical mechanism but whose rules of operation still have to be designed.",
        points: [
          {
            n: "1",
            head: "Three fields overlap here",
            text: "Industrial design emphasizes form and material; interaction design emphasizes understandability and usability; experience design emphasizes the emotional quality of the whole encounter."
          },
          {
            n: "2",
            head: "Human-centered design starts with the need",
            text: "It is a process that puts human needs, capabilities and behavior first, then designs to accommodate them — rather than requiring people to accommodate the technology."
          },
          {
            n: "3",
            head: "Solve the right problem",
            text: "Great designers do not accept the stated problem at face value; they study what people are really trying to accomplish before deciding what to build."
          },
          {
            n: "4",
            head: "Complexity is not the enemy — confusion is",
            text: "Many products defy understanding simply because they have too many functions and controls. Faced with a bewildering array, people memorize one or two fixed settings and ignore the rest."
          }
        ],
        examples: [
          "Home appliances that look like Hollywood's idea of a spaceship control room: the whole purpose of the design is lost.",
          "Thermostats where users set the dial to 90° believing it will heat faster, creating massive temperature overshoots."
        ],
        quiz: {
          question: "What is the core philosophy of Human-Centered Design (HCD)?",
          options: [
            "Training users to think with mechanical and mathematical logic",
            "Putting human needs, capabilities, and behavior first rather than forcing people to accommodate technology",
            "Adding maximum features to guarantee product competitiveness",
            "Relying solely on designer intuition and aesthetic awards"
          ],
          correctIndex: 1,
          explanation: "HCD starts with understanding human psychology and physical limitations, adapting technology to users rather than vice-versa."
        },
        quizzes: [
          {
          question: "What is the core philosophy of Human-Centered Design (HCD)?",
          options: [
            "Training users to think with mechanical and mathematical logic",
            "Putting human needs, capabilities, and behavior first rather than forcing people to accommodate technology",
            "Adding maximum features to guarantee product competitiveness",
            "Relying solely on designer intuition and aesthetic awards"
          ],
          correctIndex: 1,
          explanation: "HCD starts with understanding human psychology and physical limitations, adapting technology to users rather than vice-versa."
        },
          {
            question: "Why do users often turn a thermostat to 90° when they only want 70° in the room?",
            options: [ "Because thermostats are intentionally designed to throttle power", "Because they hold a flawed folk model (valve theory) believing it will heat faster", "Because digital sensors always lag by 20 degrees", "Because human body temperature is approximately 98.6°F" ],
            correctIndex: 1,
            explanation: "Users frequently hold an incorrect conceptual model that the thermostat acts like a faucet/valve rather than a simple on/off switch with a target sensor."
          },
          {
            question: "When faced with an overly complex device with dozens of mysterious controls, what is the typical human response?",
            options: [ "Read the 200-page manual thoroughly before operating", "Memorize one or two basic settings and ignore the rest of the functionality", "Immediately return the product to the store", "Deconstruct the hardware to understand internal logic" ],
            correctIndex: 1,
            explanation: "Norman notes that when presented with overwhelming complexity and confusion, users retreat to a minimal safe routine and ignore the rest."
          }
        ],
        keyTakeaway: "Human-centered design adapts technology to human psychology rather than demanding people behave like machines."
      },
      {
        id: "m1-s3",
        label: "Affordances",
        type: "read",
        title: "Affordances: relationships between object and agent",
        source: "Ch. 1, pages. 10–13",
        intro: "An affordance is a relationship between the properties of an object and the capabilities of the person, determining how the thing could possibly be used. It is not a property of the object alone.",
        points: [
          {
            n: "1",
            head: "A relationship, not a feature",
            text: "A chair affords support and therefore sitting; it affords lifting for a strong adult but not for a small child. The affordance exists only in the pairing of object and person."
          },
          {
            n: "2",
            head: "Glass affords transparency and blocking",
            text: "Its anti-affordance — preventing passage — is what makes an invisible glass door hazardous, which is why safety standards require markings on large panes."
          },
          {
            n: "3",
            head: "Affordances can be present without being perceivable",
            text: "This is the point where the concept of the signifier becomes necessary: the affordance determines what is possible, but something must communicate it."
          }
        ],
        examples: [
          "A flat plate on a door affords pushing; a graspable handle affords pulling or turning. When the affordance and the required action disagree, the door needs a sign — and a sign is a design failure."
        ],
        quiz: {
          question: "Why is an affordance defined as a relationship rather than a static property?",
          options: [
            "Because an object only exists when being observed",
            "Because whether an action is possible depends on both the physical object's properties and the specific actor's capabilities",
            "Because it changes whenever software updates",
            "Because J.J. Gibson was interested in marketing terms"
          ],
          correctIndex: 1,
          explanation: "An affordance requires both an object with specific physical properties and an agent with capabilities to act upon those properties (e.g. a heavy chair affords lifting for an adult, but not for a toddler)."
        },
        quizzes: [
          {
          question: "Why is an affordance defined as a relationship rather than a static property?",
          options: [
            "Because an object only exists when being observed",
            "Because whether an action is possible depends on both the physical object's properties and the specific actor's capabilities",
            "Because it changes whenever software updates",
            "Because J.J. Gibson was interested in marketing terms"
          ],
          correctIndex: 1,
          explanation: "An affordance requires both an object with specific physical properties and an agent with capabilities to act upon those properties (e.g. a heavy chair affords lifting for an adult, but not for a toddler)."
        },
          {
            question: "Which statement about affordances is true?",
            options: [ "Affordances are purely visual graphical buttons in software", "An affordance is not a property of an object alone, but a relationship between object and agent", "Only manufactured digital tools have affordances", "Affordances must always be explicitly labeled in English" ],
            correctIndex: 1,
            explanation: "Affordances depend on both the object's physical attributes and the agent's physical capabilities (e.g. a heavy boulder affords lifting for an elephant, but not for a human)."
          },
          {
            question: "What did J.J. Gibson originally coin the term 'affordance' to describe?",
            options: [ "The economic price point of consumer products", "The actionable possibilities between an organism and its environment", "The software architecture of user interfaces", "Graphic design aesthetics in print media" ],
            correctIndex: 1,
            explanation: "Gibson coined the term in ecological psychology to refer to the actionable possibilities between an animal and its environment."
          }
        ],
        keyTakeaway: "Affordances represent what physical actions are possible between an object and a specific actor."
      },
      {
        id: "m1-s4",
        label: "Signifiers",
        type: "read",
        title: "Signifiers: communicating where the action takes place",
        source: "Ch. 1, pages. 13–19",
        intro: "Affordances determine what actions are possible; signifiers communicate where the action should take place. People need signifiers more than they need affordances, because signifiers are what actually tell them what to do.",
        points: [
          {
            n: "1",
            head: "Any perceivable indicator counts",
            text: "A signifier can be deliberate — a PUSH label, a handle, an arrow — or accidental, such as a worn path across a field, or the sight of other passengers on a train platform telling you the train has not yet come."
          },
          {
            n: "2",
            head: "Signifiers can be misleading",
            text: "A signifier that points to an action the device cannot perform is worse than none at all."
          },
          {
            n: "3",
            head: "Signs on doors indicate design failure",
            text: "If a door needs a sign to say which way it opens, its design has failed to signify naturally."
          }
        ],
        examples: [
          "Screen interfaces: arrows and icons are signifiers — they show that swiping up reveals more of a menu, or that content continues below the fold."
        ],
        quiz: {
          question: "What is the key difference between an affordance and a signifier?",
          options: [
            "Affordances are for digital UI, signifiers are for physical hardware",
            "Affordances determine what actions are possible; signifiers communicate where and how the action should take place",
            "Affordances are always printed words, signifiers are always icons",
            "There is no difference between them"
          ],
          correctIndex: 1,
          explanation: "Affordances are possible actions; signifiers are the perceivable signals (visual, auditory, tactile) that tell users where and how to interact."
        },
        quizzes: [
          {
          question: "What is the key difference between an affordance and a signifier?",
          options: [
            "Affordances are for digital UI, signifiers are for physical hardware",
            "Affordances determine what actions are possible; signifiers communicate where and how the action should take place",
            "Affordances are always printed words, signifiers are always icons",
            "There is no difference between them"
          ],
          correctIndex: 1,
          explanation: "Affordances are possible actions; signifiers are the perceivable signals (visual, auditory, tactile) that tell users where and how to interact."
        },
          {
            question: "Which of the following serves as an 'accidental' signifier?",
            options: [ "A printed 'PULL' plaque on a brass handle", "A worn dirt path across grass showing where people frequently walk", "A flashing red LED light warning of low battery", "An arrow icon pointing right for next page" ],
            correctIndex: 1,
            explanation: "Desire lines (worn paths in grass) are accidental signifiers created by physical wear that communicate where other people travel."
          },
          {
            question: "Why can a misleading signifier be worse than no signifier at all?",
            options: [ "It increases the retail cost of the product", "It misdirects the user into executing an inappropriate action with false confidence", "It violates international font licensing standards", "It slows down hardware processor speeds" ],
            correctIndex: 1,
            explanation: "A misleading signifier causes users to form incorrect intentions and execute false actions, leading to slips, mistakes, and frustration."
          }
        ],
        keyTakeaway: "Signifiers are perceivable indicators that tell users where and how an action should occur."
      },
      {
        id: "m1-s5",
        label: "Mapping",
        type: "read",
        title: "Natural Mapping and Spatial Correspondence",
        source: "Ch. 1, pages. 19–22",
        intro: "Mapping is the relationship between the elements of two sets of things — controls and the results they produce. Natural mapping takes advantage of spatial analogies and of perceptual or cultural standards, so understanding is immediate.",
        points: [
          {
            n: "1",
            head: "Spatial correspondence is the strongest",
            text: "To move an object up, move the control up. Arrange light switches in the same spatial pattern as the lights they control."
          },
          {
            n: "2",
            head: "Cultural and biological standards work too",
            text: "A rising level meaning more is nearly universal; the direction of writing and reading is not, so mappings that rely on left-to-right order vary by culture."
          },
          {
            n: "3",
            head: "Bad mapping is a persistent everyday failure",
            text: "Stove burners and their controls are the classic case: four burners in a rectangle, four controls in a row, and no natural correspondence between them."
          }
        ],
        examples: [
          "Car seat adjusters shaped like the seat itself: the control is a small model of the thing it moves, so no learning is required.",
          "Stove burner controls arranged in a 2x2 grid matching the 2x2 burner layout."
        ],
        quiz: {
          question: "Which example best demonstrates 'Natural Mapping'?",
          options: [
            "A row of 6 identical toggle switches for ceiling lights",
            "A car power-seat adjuster shaped like a miniature seat where pushing the backrest reclines the actual seat",
            "A long instruction manual explaining which knob controls which burner",
            "A numbered keypad requiring code lookup"
          ],
          correctIndex: 1,
          explanation: "When a control mirrors the physical shape or spatial layout of the controlled object, the user needs zero memorization."
        },
        quizzes: [
          {
          question: "Which example best demonstrates 'Natural Mapping'?",
          options: [
            "A row of 6 identical toggle switches for ceiling lights",
            "A car power-seat adjuster shaped like a miniature seat where pushing the backrest reclines the actual seat",
            "A long instruction manual explaining which knob controls which burner",
            "A numbered keypad requiring code lookup"
          ],
          correctIndex: 1,
          explanation: "When a control mirrors the physical shape or spatial layout of the controlled object, the user needs zero memorization."
        },
          {
            question: "What is the classic example Norman uses of poor spatial mapping in everyday homes?",
            options: [ "Refrigerator temperature dials labeled A through E", "Four stove burners in a rectangle with four control knobs in a straight line", "Television remotes with color-coded volume buttons", "Ceiling fans with pull chains of equal length" ],
            correctIndex: 1,
            explanation: "Stove controls arranged in a straight line for burners arranged in a 2x2 grid force users to guess or memorize which knob controls which burner."
          },
          {
            question: "How does natural mapping reduce cognitive load for users?",
            options: [ "It uses spatial correspondence, cultural conventions, or physical analogies so understanding is immediate", "It forces users to read tooltips before any button click", "It eliminates all mechanical controls in favor of voice assistants", "It encrypts user inputs for privacy" ],
            correctIndex: 0,
            explanation: "Natural mapping aligns controls with their real-world effects in space or convention, eliminating the need to memorize mappings."
          }
        ],
        keyTakeaway: "Natural mapping uses spatial analogies and cultural conventions so controls directly mirror their effects."
      },
      {
        id: "m1-s6",
        label: "Feedback",
        type: "read",
        title: "Feedback: immediate, informative, and prioritized",
        source: "Ch. 1, pages. 23–26",
        intro: "Feedback is communicating the results of an action, and it must be immediate. A delay of even a tenth of a second can be disconcerting; longer delays lead people to give up or, worse, to repeat the action.",
        points: [
          {
            n: "1",
            head: "Feedback must be informative",
            text: "Poor feedback can be worse than none, because it distracts and irritates without answering the question the person actually has."
          },
          {
            n: "2",
            head: "It must be prioritized",
            text: "Unimportant information should be presented in an unobtrusive fashion; important signals should be presented so they command attention. Too many alerts and everything gets ignored or switched off."
          },
          {
            n: "3",
            head: "It must be planned, not sprayed",
            text: "Every device now beeps, and each beep is uninterpretable — the same sound for success, failure and warning teaches people nothing."
          }
        ],
        examples: [
          "Hospital equipment where dozens of instruments each sound their own alarm gives medical staff no way to tell urgent from routine, so alarms are silenced — occasionally with fatal results."
        ],
        quiz: {
          question: "What happens when a system provides excessive, unprioritized audible feedback?",
          options: [
            "Users become faster at troubleshooting",
            "Alarm fatigue sets in, causing operators to ignore or silence critical safety warnings",
            "The system becomes compliant with aviation standards",
            "Error rates drop to zero"
          ],
          correctIndex: 1,
          explanation: "When everything beeps urgently, workers suffer from sensory overload and silence alarms, creating severe hazards."
        },
        quizzes: [
          {
          question: "What happens when a system provides excessive, unprioritized audible feedback?",
          options: [
            "Users become faster at troubleshooting",
            "Alarm fatigue sets in, causing operators to ignore or silence critical safety warnings",
            "The system becomes compliant with aviation standards",
            "Error rates drop to zero"
          ],
          correctIndex: 1,
          explanation: "When everything beeps urgently, workers suffer from sensory overload and silence alarms, creating severe hazards."
        },
          {
            question: "What is a major design risk of providing too much or overly loud feedback?",
            options: [ "Users become habituated or annoyed and disable/ignore the warnings entirely", "It causes battery depletion within seconds", "It renders screen readers unable to parse HTML", "It voids the hardware manufacturer warranty" ],
            correctIndex: 0,
            explanation: "Excessive or uninformative beeps and alerts lead to alarm fatigue, causing users to ignore or disable critical safety signals."
          },
          {
            question: "For feedback to be truly effective in human-centered design, it must be:",
            options: [ "Delayed by at least 5 seconds so users can reflect", "Immediate, informative, and unobtrusive", "Auditory only, never visual or tactile", "Configured solely through an admin command line" ],
            correctIndex: 1,
            explanation: "Effective feedback provides immediate, clear confirmation of system state change without overwhelming the user."
          }
        ],
        keyTakeaway: "Feedback must be immediate, informative, and prioritized to prevent cognitive overload and alarm fatigue."
      },
      {
        id: "m1-s7",
        label: "Conceptual models",
        type: "read",
        title: "Conceptual models and the system image",
        source: "Ch. 1, pages. 25–31",
        intro: "A conceptual model is an explanation, usually highly simplified, of how something works. It does not have to be technically accurate to be useful — it has to be useful.",
        points: [
          {
            n: "1",
            head: "Models come from what is available",
            text: "People build them from the device's appearance, from what they have read, from what others have told them, and from prior experience with similar things."
          },
          {
            n: "2",
            head: "The system image is all designers really control",
            text: "Designers cannot talk to each user. Everything the person will use to build a model — the device itself, the instructions, the labels, the website — is the system image. If the system image does not make the design model clear, the user builds the wrong model."
          },
          {
            n: "3",
            head: "Good models predict; bad models mislead",
            text: "A model that explains why a thing behaves as it does lets people act confidently and recover from surprises. Where no model is available, people invent one, and their invention may be wrong."
          }
        ],
        examples: [
          "Home thermostats: people who believe the dial is a valve turn it to maximum to heat the room faster. It is not — it is a switch with a target temperature, and the room warms at the same rate either way."
        ],
        quiz: {
          question: "What is the 'System Image' in Norman's mental model framework?",
          options: [
            "The designer's internal source code repository",
            "The total physical, visual, and operational evidence of the product through which the user forms their mental model",
            "A screenshot saved in a user manual",
            "The marketing billboard for the product"
          ],
          correctIndex: 1,
          explanation: "Because designers cannot speak directly to users, the user constructs their mental model exclusively from the system image (physical product, displays, documentation, feedback)."
        },
        quizzes: [
          {
          question: "What is the 'System Image' in Norman's mental model framework?",
          options: [
            "The designer's internal source code repository",
            "The total physical, visual, and operational evidence of the product through which the user forms their mental model",
            "A screenshot saved in a user manual",
            "The marketing billboard for the product"
          ],
          correctIndex: 1,
          explanation: "Because designers cannot speak directly to users, the user constructs their mental model exclusively from the system image (physical product, displays, documentation, feedback)."
        },
          {
            question: "What is the 'System Image' in Norman's model of design?",
            options: [ "The marketing photograph on the product box", "The physical structure, interface, manual, and behavior of the device from which the user deduces a mental model", "The operating system kernel source code", "The designer's personal drawing sketchbook" ],
            correctIndex: 1,
            explanation: "The designer cannot speak directly to the user; all communication happens through the System Image (the product, its documentation, and its feedback)."
          },
          {
            question: "What happens when the designer's conceptual model and the user's mental model do not match?",
            options: [ "The software automatically recompiles itself", "The user misinterprets device states and makes systematic errors", "The user receives an academic citation", "The device speed increases by 50%" ],
            correctIndex: 1,
            explanation: "When models diverge, users make incorrect assumptions about how the system operates, leading to frustration and operational mistakes."
          }
        ],
        keyTakeaway: "The system image is the sole communication bridge between the designer's model and the user's mental model."
      },
      {
        id: "m1-s8",
        label: "Paradox of technology",
        type: "read",
        title: "The paradox of technology",
        source: "Ch. 1, pages. 31–36",
        intro: "Technology offers the potential to make life easier and more enjoyable; each new technology also provides increased benefits. At the same time, added complexities increase difficulty and frustration.",
        points: [
          {
            n: "1",
            head: "Added functions cost usability",
            text: "As devices absorb more capabilities, controls must be added or overloaded. The same clock that once had one setting now has dozens of functions squeezed into the same few buttons."
          },
          {
            n: "2",
            head: "The paradox is not inevitable",
            text: "The difficulty is a consequence of the design, not of the technology. Better design can restore simplicity at higher levels of capability."
          },
          {
            n: "3",
            head: "Design must fit the whole life of the product",
            text: "Ease of purchase, first use, everyday use, maintenance and repair all pull in different directions and must be traded off deliberately."
          }
        ],
        examples: [
          "Watches: once single-purpose instruments, now general-purpose computers whose few buttons must be shared among timers, alarms, stopwatches and displays."
        ],
        quiz: {
          question: "What is the Paradox of Technology?",
          options: [
            "Computers get smaller while screens get larger",
            "The same technology that offers power and benefits often increases complexity and user frustration if poorly designed",
            "Modern devices always cost less than vintage items",
            "Software cannot be patented"
          ],
          correctIndex: 1,
          explanation: "As technology adds more functions to smaller form factors, the design challenge of maintaining discoverability and simplicity grows exponentially."
        },
        quizzes: [
          {
          question: "What is the Paradox of Technology?",
          options: [
            "Computers get smaller while screens get larger",
            "The same technology that offers power and benefits often increases complexity and user frustration if poorly designed",
            "Modern devices always cost less than vintage items",
            "Software cannot be patented"
          ],
          correctIndex: 1,
          explanation: "As technology adds more functions to smaller form factors, the design challenge of maintaining discoverability and simplicity grows exponentially."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Technological power must be paired with disciplined human-centered design to avoid creating unmanageable complexity."
      },
      {
        id: "m1-s9",
        label: "The two gulfs",
        type: "read",
        title: "The Gulfs of Execution and Evaluation",
        source: "Ch. 2, pages. 38–40",
        intro: "Every interaction faces two gaps. The Gulf of Execution is the gap between what a person wants to do and the actions the device makes available. The Gulf of Evaluation is the gap between the state the device is in and how hard it is to tell.",
        points: [
          {
            n: "1",
            head: "Bridging execution",
            text: "Signifiers, constraints, mappings and a conceptual model tell the person what actions are possible and how to perform them — the information Norman calls feedforward."
          },
          {
            n: "2",
            head: "Bridging evaluation",
            text: "Feedback and a conceptual model let the person determine the new state of the device and whether the goal was met."
          },
          {
            n: "3",
            head: "The gulfs are the designer's job to close",
            text: "Where the person has to work to bridge them, the design has offloaded its work onto the user."
          }
        ],
        examples: [
          "The two gulfs are why an unlabeled control panel feels impossible even to a competent person: nothing tells them what can be done, and nothing tells them what happened when they tried."
        ],
        quiz: {
          question: "How does a designer bridge the Gulf of Execution?",
          options: [
            "By writing longer error messages",
            "Through feedforward: clear signifiers, constraints, natural mappings, and an intuitive conceptual model",
            "By adding more buttons to the panel",
            "By disabling user undo options"
          ],
          correctIndex: 1,
          explanation: "Feedforward answers: 'What can I do, and how do I do it?' via signifiers, constraints, and mappings."
        },
        quizzes: [
          {
          question: "How does a designer bridge the Gulf of Execution?",
          options: [
            "By writing longer error messages",
            "Through feedforward: clear signifiers, constraints, natural mappings, and an intuitive conceptual model",
            "By adding more buttons to the panel",
            "By disabling user undo options"
          ],
          correctIndex: 1,
          explanation: "Feedforward answers: 'What can I do, and how do I do it?' via signifiers, constraints, and mappings."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Designers must bridge the Gulf of Execution (doing) and Gulf of Evaluation (interpreting results)."
      },
      {
        id: "m1-s10",
        label: "Seven stages of action",
        type: "read",
        title: "The Seven Stages of Action",
        source: "Ch. 2, pages. 40–43",
        intro: "There are two parts to an action: executing it and evaluating the result — doing and interpreting. Both require understanding of how the item works and what results it produces, and both can affect our emotional state.",
        points: [
          { n: "1", head: "Goal", text: "Form the goal. Sitting reading as the light fades, the goal becomes: get more light." },
          { n: "2", head: "Plan", text: "Choose among possible plans — open the curtains, move to a brighter seat, turn on a lamp." },
          { n: "3", head: "Specify", text: "Specify the action sequence: which hand, which switch, or ask someone else." },
          { n: "4", head: "Perform", text: "Execute the sequence." },
          { n: "5", head: "Perceive", text: "Perceive the state of the world after acting." },
          { n: "6", head: "Interpret", text: "Make sense of what was perceived." },
          { n: "7", head: "Compare", text: "Compare the outcome with the goal — and start again if it does not match." }
        ],
        examples: [
          "For a skilled driver, turning left is one thought; for a learner, every stage is conscious — brakes, mirrors, signals, hand position, pedestrians. Same seven stages, different levels of automaticity."
        ],
        quiz: {
          question: "Which of the following represents the correct order of the Seven Stages of Action?",
          options: [
            "Perform -> Plan -> Goal -> Perceive -> Interpret -> Compare -> Specify",
            "Goal -> Plan -> Specify -> Perform -> Perceive -> Interpret -> Compare",
            "Perceive -> Goal -> Perform -> Plan -> Interpret -> Compare -> Specify",
            "Plan -> Specify -> Perform -> Goal -> Interpret -> Perceive -> Compare"
          ],
          correctIndex: 1,
          explanation: "Execution starts from Goal -> Plan -> Specify -> Perform; Evaluation continues with Perceive -> Interpret -> Compare against the goal."
        },
        quizzes: [
          {
          question: "Which of the following represents the correct order of the Seven Stages of Action?",
          options: [
            "Perform -> Plan -> Goal -> Perceive -> Interpret -> Compare -> Specify",
            "Goal -> Plan -> Specify -> Perform -> Perceive -> Interpret -> Compare",
            "Perceive -> Goal -> Perform -> Plan -> Interpret -> Compare -> Specify",
            "Plan -> Specify -> Perform -> Goal -> Interpret -> Perceive -> Compare"
          ],
          correctIndex: 1,
          explanation: "Execution starts from Goal -> Plan -> Specify -> Perform; Evaluation continues with Perceive -> Interpret -> Compare against the goal."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Action flows in a continuous cycle: Goal -> Plan -> Specify -> Perform -> Perceive -> Interpret -> Compare."
      },
      {
        id: "m1-s11",
        label: "Three levels of processing",
        type: "read",
        title: "Mostly subconscious: visceral, behavioral, reflective",
        source: "Ch. 2, pages. 49–58",
        intro: "Most of what people do, they do subconsciously. Human cognition and emotion operate at three levels of processing, and design has to work at all three.",
        points: [
          {
            n: "1",
            head: "Visceral",
            text: "The fastest, most basic level — biological, automatic responses to smoothness, sharpness, brightness, sudden loud sounds. It produces the startle reflex and the instant like or dislike, but no interpretation."
          },
          {
            n: "2",
            head: "Behavioral",
            text: "The level of learned, routine skill. Actions here are largely subconscious; what matters most is that every action carries an expectation, and feedback either confirms it or produces a jolt of frustration."
          },
          {
            n: "3",
            head: "Reflective",
            text: "The conscious, slow level — reasoning, self-image, memory of the experience, and the story the person will tell about it afterwards. This is where the deepest emotions, and brand loyalty, live."
          },
          {
            n: "4",
            head: "Design must address all three",
            text: "The visceral level determines first impressions, the behavioral level determines whether use feels good, and the reflective level determines what is remembered and recommended."
          }
        ],
        examples: [
          "Flow: when the challenge of an activity matches the person's skill, behavioral processing takes over and people become absorbed and lose track of time."
        ],
        quiz: {
          question: "Which level of emotional processing is responsible for memory, self-image, and product recommendations?",
          options: [
            "Visceral level",
            "Behavioral level",
            "Reflective level",
            "Autonomic level"
          ],
          correctIndex: 2,
          explanation: "The reflective level is conscious, slow, and evaluates meaning, personal identity, and long-term memories."
        },
        quizzes: [
          {
          question: "Which level of emotional processing is responsible for memory, self-image, and product recommendations?",
          options: [
            "Visceral level",
            "Behavioral level",
            "Reflective level",
            "Autonomic level"
          ],
          correctIndex: 2,
          explanation: "The reflective level is conscious, slow, and evaluates meaning, personal identity, and long-term memories."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Visceral drives first impressions, Behavioral governs routine usability, and Reflective creates lasting stories and loyalty."
      },
      {
        id: "m1-s12",
        label: "People as storytellers",
        type: "read",
        title: "People as storytellers; blaming the wrong thing",
        source: "Ch. 2, pages. 58–65",
        intro: "People are storytellers. Faced with an unexplained event, they invent a causal account — and conceptual models are essentially those stories. The stories are often wrong, because the cause blamed is frequently just whatever happened to be present at the time.",
        points: [
          {
            n: "1",
            head: "Coincidence gets mistaken for cause",
            text: "If an action is followed by a result, people assume the two are related, even when they are not."
          },
          {
            n: "2",
            head: "Blame lands on the person, not the design",
            text: "When people have trouble with a device, they blame themselves — and so, unfortunately, do the designers, the courts and the accident reports, which call it human error."
          },
          {
            n: "3",
            head: "Machines that offer no feedback invite self-blame",
            text: "If the device gives no way to tell what state it is in, the user cannot know whether they have made a mistake or the machine has."
          }
        ],
        examples: [
          "The computer company that asked Norman to evaluate a new product: even the highly skilled users blamed themselves for failing at a step the design had made impossible to get right."
        ],
        quiz: {
          question: "Why do users frequently blame themselves for technology failures?",
          options: [
            "Because users never read technical documentation",
            "Because lack of feedback and faulty system images make the true cause invisible, causing people to assume personal incompetence",
            "Because users are legally liable for operating errors",
            "Because modern interfaces have zero software bugs"
          ],
          correctIndex: 1,
          explanation: "When systems fail silently or lack clear feedback, users assume they made an error, hiding systematic design flaws."
        },
        quizzes: [
          {
          question: "Why do users frequently blame themselves for technology failures?",
          options: [
            "Because users never read technical documentation",
            "Because lack of feedback and faulty system images make the true cause invisible, causing people to assume personal incompetence",
            "Because users are legally liable for operating errors",
            "Because modern interfaces have zero software bugs"
          ],
          correctIndex: 1,
          explanation: "When systems fail silently or lack clear feedback, users assume they made an error, hiding systematic design flaws."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "When users blame themselves for technology failures, the root cause is almost always poor design and lack of clear feedback."
      },
      {
        id: "m1-s13",
        label: "Learned helplessness",
        type: "read",
        title: "Learned helplessness and false self-blame",
        source: "Ch. 2, pages. 61–68",
        intro: "Repeated failure at a task teaches people that they cannot do it at all — so they stop trying, even at tasks they could easily manage.",
        points: [
          {
            n: "1",
            head: "Technology phobia is often taught",
            text: "A few bad experiences with confusing devices generalize into a belief about oneself: 'I am not good with computers.'"
          },
          {
            n: "2",
            head: "Mathematics is the classic case",
            text: "In a curriculum where each lesson depends on the last, a few missed days produce failure, then avoidance, then a lifelong conviction of incapacity."
          },
          {
            n: "3",
            head: "Positive psychology, applied to design",
            text: "Treat failures as normal and informative. Do not call the person's action an error; give constructive help, and let the person feel in control."
          },
          {
            n: "4",
            head: "Designers should assume the fault is theirs",
            text: "If people misuse a product, the design should be changed so the misuse is impossible or harmless."
          }
        ],
        examples: [
          "Rather than an error message, a system can treat the input as an approximation of the intent and help complete it — the way a search engine handles a misspelled query."
        ],
        quiz: {
          question: "What is 'Taught Helplessness' in human-computer interaction?",
          options: [
            "A deliberate design pattern for enterprise security",
            "A state where poorly designed interfaces cause users to believe they are personally incapable of using technology",
            "A technique used in video games to increase difficulty",
            "An educational technique for novice programmers"
          ],
          correctIndex: 1,
          explanation: "Confusing systems trigger false self-blame, creating a self-fulfilling belief that the user is incapable."
        },
        quizzes: [
          {
          question: "What is 'Taught Helplessness' in human-computer interaction?",
          options: [
            "A deliberate design pattern for enterprise security",
            "A state where poorly designed interfaces cause users to believe they are personally incapable of using technology",
            "A technique used in video games to increase difficulty",
            "An educational technique for novice programmers"
          ],
          correctIndex: 1,
          explanation: "Confusing systems trigger false self-blame, creating a self-fulfilling belief that the user is incapable."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Treat user mistakes as approximations of intent and provide constructive assistance rather than scolding error dialogs."
      },
      {
        id: "m1-s14",
        label: "Seven design principles",
        type: "read",
        title: "Seven fundamental principles of design",
        source: "Ch. 2, pages. 71–74",
        intro: "The seven stages give a checklist of questions the person will ask: What do I want to accomplish? What are the alternatives? What can I do now? How do I do it? What happened? What does it mean? Is this okay? Anyone using a product should always be able to answer all seven — which puts the burden on the designer.",
        points: [
          { n: "1", head: "Discoverability", text: "It is possible to determine what actions are possible and the current state of the device." },
          { n: "2", head: "Feedback", text: "There is full and continuous information about the results of actions and the current state; after an action, the new state is easy to determine." },
          { n: "3", head: "Conceptual model", text: "The design projects all the information needed to build a good conceptual model, leading to understanding and a feeling of control." },
          { n: "4", head: "Affordances", text: "The proper affordances exist to make the desired actions possible." },
          { n: "5", head: "Signifiers", text: "Effective use of signifiers ensures discoverability and makes the feedback intelligible." },
          { n: "6", head: "Mappings", text: "The relationship between controls and their actions follows good mapping, enhanced by spatial layout and temporal contiguity." },
          { n: "7", head: "Constraints", text: "Physical, logical, semantic and cultural constraints guide actions and ease interpretation." }
        ],
        examples: [
          "Feedforward is the information that answers the questions of doing — signifiers, constraints, mappings and the conceptual model. Feedback answers the questions of interpreting what happened.",
          "Next time a hotel shower control defeats you, ask which of the seven stages failed and which principle was missing."
        ],
        quiz: {
          question: "Which principle ensures that a user can always tell the current state of a device and the outcome of their action?",
          options: [
            "Affordance",
            "Feedback",
            "Creeping featurism",
            "Procedural memory"
          ],
          correctIndex: 1,
          explanation: "Feedback provides continuous, immediate information about what just occurred and the new system state."
        },
        quizzes: [
          {
          question: "Which principle ensures that a user can always tell the current state of a device and the outcome of their action?",
          options: [
            "Affordance",
            "Feedback",
            "Creeping featurism",
            "Procedural memory"
          ],
          correctIndex: 1,
          explanation: "Feedback provides continuous, immediate information about what just occurred and the new system state."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "The 7 Principles: Discoverability, Feedback, Conceptual Model, Affordances, Signifiers, Mappings, Constraints."
      }
    ]
  },
  {
    id: "m2",
    number: 2,
    kicker: "Module 2",
    title: "Knowledge, Constraints and Visibility",
    citation: "Norman, The Design of Everyday Things, Chapters 3–4",
    meta: "Norman, Ch. 3–4 · 51 pages",
    colorTheme: {
      bg: "bg-[#10b981]",
      border: "border-[#047857]",
      accent: "#059669",
      badge: "bg-emerald-100 text-emerald-900 border-emerald-300",
      lightBg: "bg-[#d1fae5]",
      buttonBg: "bg-[#34d399] hover:bg-[#10b981]",
    },
    stages: [
      {
        id: "m2-s1",
        label: "Knowledge in the world",
        type: "read",
        title: "Precise behavior from imprecise knowledge",
        source: "Ch. 3, pages. 54–57",
        intro: "People function well with knowledge that is incomplete, imprecise and often simply wrong, because behavior is jointly determined by knowledge in the head and knowledge in the world. Whenever the information needed to do a task is available in the world, the need to learn it diminishes.",
        points: [
          { n: "1", head: "The tradeoff is chosen, not fixed", text: "There is a tradeoff between the amount of mental knowledge and the amount of external knowledge a task requires, and people move freely along it." },
          { n: "2", head: "Typing shows the whole spectrum", text: "Hunt-and-peck typists rely on the labels — knowledge in the world — and stay slow. Learning touch-typing moves the knowledge into the head, at the cost of hours of instruction and months to expertise, and buys speed, accuracy and lower mental load." },
          { n: "3", head: "We recognize far more than we recall", text: "Fewer than half of American college students shown a set of drawings could pick the correct US penny — and it does not matter, because in real life we only have to tell a penny from other coins, not from other pennies." }
        ],
        examples: [
          "Internal knowledge need only be precise enough to sustain the quality of behavior you want; the environment supplies the rest."
        ],
        quiz: {
          question: "Why could fewer than half of college students identify the exact drawing of a US penny?",
          options: [
            "Students lack visual perception skills",
            "Human memory only stores descriptions precise enough to discriminate between alternatives present in real life (a penny vs a nickel/dime)",
            "The US Mint changes coin designs too frequently",
            "Declarative memory does not work for metal objects"
          ],
          correctIndex: 1,
          explanation: "Memory only stores the minimal distinctions required to function in context, relying on the world for the rest."
        },
        quizzes: [
          {
          question: "Why could fewer than half of college students identify the exact drawing of a US penny?",
          options: [
            "Students lack visual perception skills",
            "Human memory only stores descriptions precise enough to discriminate between alternatives present in real life (a penny vs a nickel/dime)",
            "The US Mint changes coin designs too frequently",
            "Declarative memory does not work for metal objects"
          ],
          correctIndex: 1,
          explanation: "Memory only stores the minimal distinctions required to function in context, relying on the world for the rest."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Knowledge in the world relieves internal memory by placing cues directly in the user's environment."
      },
      {
        id: "m2-s2",
        label: "Constraints & precision",
        type: "read",
        title: "Great precision is not required",
        source: "Ch. 3, pages. 57–62",
        intro: "Three things combine so that imprecise knowledge produces precise behavior: information is in the world, great precision is not required, and natural and cultural constraints are present.",
        points: [
          { n: "1", head: "Precision only has to be sufficient", text: "The knowledge in the head has to distinguish among the alternatives that actually occur, not among all conceivable ones." },
          { n: "2", head: "Constraints cut the alternatives down", text: "Natural and artificial constraints restrict what is possible, so the remaining choices can be resolved with very little internal knowledge." },
          { n: "3", head: "Learning follows the same economy", text: "Where the world is reliable, people learn as little as they can get away with — and that is efficient, not lazy." }
        ],
        examples: [
          "Typing a familiar password, finding a light switch in your own home, locating the milk in your own refrigerator: none require detailed recall, only enough to discriminate among the few options present."
        ],
        quiz: {
          question: "What happened in France when the 10-franc coin was introduced?",
          options: [
            "It was instantly loved for its modern Marianne drawing",
            "It was so close in size and weight to the existing half-franc coin that users constantly confused them, forcing its cancellation",
            "It was accepted only in vending machines",
            "It doubled the speed of commerce"
          ],
          correctIndex: 1,
          explanation: "Because the old memory representations only distinguished coins by size/weight, introducing a similar coin caused massive confusion."
        },
        quizzes: [
          {
          question: "What happened in France when the 10-franc coin was introduced?",
          options: [
            "It was instantly loved for its modern Marianne drawing",
            "It was so close in size and weight to the existing half-franc coin that users constantly confused them, forcing its cancellation",
            "It was accepted only in vending machines",
            "It doubled the speed of commerce"
          ],
          correctIndex: 1,
          explanation: "Because the old memory representations only distinguished coins by size/weight, introducing a similar coin caused massive confusion."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Behavior requires precision only to the extent needed to differentiate between existing contextual alternatives."
      },
      {
        id: "m2-s3",
        label: "Structure of memory",
        type: "read",
        title: "Memory is knowledge in the head",
        source: "Ch. 3, pages. 65–67",
        intro: "The memory of the just-present is immediate, clear and effortless. Recovering what you ate for dinner three days ago is a different experience: slower, less clear, and effortful. Psychologists separate the two as short-term and long-term memory.",
        points: [
          { n: "1", head: "Short-term memory is small and fragile", text: "Around five to seven items, or ten to twelve with rehearsal. It holds a postal code or a phone number from lookup to use — as long as nothing distracts you. Get distracted and the contents vanish." },
          { n: "2", head: "Long-term memory is vast but slow", text: "It takes time to store and time and effort to retrieve, and it holds experiences as interpreted, not as recordings. The difficulty is organization, not capacity." },
          { n: "3", head: "Retrieval depends on interpretation", text: "What is stored under one interpretation often cannot be found under another. Material that makes sense, and fits what is already known, is far easier to store and to retrieve." }
        ],
        examples: [
          "Nine- or ten-digit numbers give trouble; beyond that, write it down or break it into shorter segments."
        ],
        quiz: {
          question: "What is the typical capacity limit of human Short-Term Memory (STM)?",
          options: [
            "100 to 200 items",
            "5 to 7 items (or chunks) of information",
            "Unlimited capacity",
            "Exactly 1 megabyte"
          ],
          correctIndex: 1,
          explanation: "Short-term working memory can hold approximately 5 to 7 items at once and is extremely fragile when interrupted."
        },
        quizzes: [
          {
          question: "What is the typical capacity limit of human Short-Term Memory (STM)?",
          options: [
            "100 to 200 items",
            "5 to 7 items (or chunks) of information",
            "Unlimited capacity",
            "Exactly 1 megabyte"
          ],
          correctIndex: 1,
          explanation: "Short-term working memory can hold approximately 5 to 7 items at once and is extremely fragile when interrupted."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Short-term memory is limited to ~5-7 chunks; interfaces must never require users to memorize temporary data across screens."
      },
      {
        id: "m2-s4",
        label: "Three kinds of memory",
        type: "read",
        title: "Arbitrary, meaningful, and explained",
        source: "Ch. 3, pages. 67–72",
        intro: "Three categories of remembering matter to design, and they differ in how much work they demand of the person.",
        points: [
          { n: "1", head: "Memory for arbitrary things", text: "Items with no meaning and no relationship to anything already known — the alphabet, tying shoes, most computer commands. Learned by rote, forgotten easily, and the most expensive kind of knowledge to demand." },
          { n: "2", head: "Memory for meaningful relationships", text: "When items relate to each other or to prior knowledge, the relationship carries part of the load, and less has to be stored." },
          { n: "3", head: "Memory through explanation", text: "The material need not be remembered at all, because it can be derived from a mental model of how the thing works. This is the cheapest and most robust of the three." }
        ],
        examples: [
          "A person who understands why a refrigerator's two controls interact can derive the right setting; a person given only arbitrary labels must memorize a table — and will get it wrong."
        ],
        quiz: {
          question: "Which form of memory is the most robust and requires the least rote memorization?",
          options: [
            "Memory for arbitrary codes",
            "Memory through explanation (derived from a clear mental model)",
            "Memory for 12-digit random numbers",
            "Rote syntax memorization"
          ],
          correctIndex: 1,
          explanation: "When a user understands the underlying model, they can deduce what to do in novel situations without memorizing arbitrary rules."
        },
        quizzes: [
          {
          question: "Which form of memory is the most robust and requires the least rote memorization?",
          options: [
            "Memory for arbitrary codes",
            "Memory through explanation (derived from a clear mental model)",
            "Memory for 12-digit random numbers",
            "Rote syntax memorization"
          ],
          correctIndex: 1,
          explanation: "When a user understands the underlying model, they can deduce what to do in novel situations without memorizing arbitrary rules."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Memory through explanation allows users to deduce correct actions rather than memorizing brittle rote procedures."
      },
      {
        id: "m2-s5",
        label: "Reminding",
        type: "read",
        title: "Reminding: signal and message",
        source: "Ch. 3, pages. 72–74",
        intro: "External knowledge is only available if you are there when it matters. Out of sight, out of mind. Reminding is the interplay between knowledge in the head and knowledge in the world, and every reminder has two parts.",
        points: [
          { n: "1", head: "The signal", text: "Knowing that something is to be remembered." },
          { n: "2", head: "The message", text: "Knowing what it is that is to be remembered." },
          { n: "3", head: "Most reminders supply only one", text: "A string tied around your finger is a signal with no message. A note to yourself is a message that never reminds you to look at it. The ideal reminder carries both." },
          { n: "4", head: "Put the burden on the thing itself", text: "Leave the book against the front door; put your car keys on the item you must not forget. Now the world does the reminding at exactly the right moment." }
        ],
        examples: [
          "Norman's neighbours who want a lift to the airport are asked to phone the night before: the burden of remembering moves to the people who care most about the outcome."
        ],
        quiz: {
          question: "What are the two essential components of an effective reminder?",
          options: [
            "Volume and Pitch",
            "Signal (knowing that something must be remembered) and Message (knowing WHAT is to be remembered)",
            "Calendar and Clock",
            "Hardware and Operating System"
          ],
          correctIndex: 1,
          explanation: "A complete reminder must both alert the user at the right moment (Signal) and communicate the specific information (Message)."
        },
        quizzes: [
          {
          question: "What are the two essential components of an effective reminder?",
          options: [
            "Volume and Pitch",
            "Signal (knowing that something must be remembered) and Message (knowing WHAT is to be remembered)",
            "Calendar and Clock",
            "Hardware and Operating System"
          ],
          correctIndex: 1,
          explanation: "A complete reminder must both alert the user at the right moment (Signal) and communicate the specific information (Message)."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "A complete reminder requires both a Signal (time to act) and a Message (what to do)."
      },
      {
        id: "m2-s6",
        label: "Natural mappings",
        type: "read",
        title: "Natural mappings in control layouts",
        source: "Ch. 3, pages. 75–80",
        intro: "When the layout of controls corresponds to the layout of the things they control, no arbitrary knowledge has to be stored at all — the mapping is the memory.",
        points: [
          { n: "1", head: "Spatial correspondence removes learning", text: "Left switch, left light. Controls arranged in the shape of the burners they operate. The relationship is read off the world rather than recalled." },
          { n: "2", head: "Bad mappings force arbitrary memory", text: "Four burners in a rectangle and four controls in a line generate twenty-four possible arrangements, and the cook has to learn — or misread — which is which, every time." },
          { n: "3", head: "Labels are the fallback, not the solution", text: "A label is proof that the mapping failed; it moves knowledge into the world but slows every use." }
        ],
        examples: [
          "Auditorium lighting panels laid out as a map of the room let anyone operate them; the same switches in a row require a trained operator."
        ],
        quiz: {
          question: "How many possible mappings exist between 4 burners arranged in a 2x2 grid and 4 control knobs in a straight line?",
          options: [
            "4",
            "12",
            "24",
            "64"
          ],
          correctIndex: 2,
          explanation: "4! (4 × 3 × 2 × 1) = 24 possible permutations, creating immense potential for operator error."
        },
        quizzes: [
          {
          question: "How many possible mappings exist between 4 burners arranged in a 2x2 grid and 4 control knobs in a straight line?",
          options: [
            "4",
            "12",
            "24",
            "64"
          ],
          correctIndex: 2,
          explanation: "4! (4 × 3 × 2 × 1) = 24 possible permutations, creating immense potential for operator error."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "When controls mirror the physical layout of their targets, mapping is self-evident and needs no labels."
      },
      {
        id: "m2-s7",
        label: "World vs. head",
        type: "read",
        title: "The tradeoff between the world and the head",
        source: "Ch. 3, pages. 79–80",
        intro: "Both kinds of knowledge are essential, and a design can lean on either — but gaining the advantages of one means losing the advantages of the other.",
        points: [
          { n: "1", head: "Knowledge in the world", text: "Retrievable whenever visible or audible; learning is not required, because interpretation substitutes for it; easy at first encounter. But use is slowed by having to find and interpret the information, and a lot of it on display leads to clutter." },
          { n: "2", head: "Knowledge in the head", text: "Very efficient in use, and nothing need be visible, which frees the designer aesthetically. But it is not readily retrievable, requires memory search or reminding, and demands learning that can be considerable." },
          { n: "3", head: "How easy interpretation is depends on the design", text: "Information in the world is only easy to read if it exploits natural mappings and constraints; learning in the head is only easy if the material has meaningful structure or a good mental model." }
        ],
        examples: [
          "Expert users want shortcuts (head); first-time users want visible controls (world). Interfaces that provide both are serving two different points on the same tradeoff."
        ],
        quiz: {
          question: "What is the primary trade-off of relying purely on Knowledge in the Head?",
          options: [
            "It requires high upfront learning and is fragile if forgotten or interrupted",
            "It clutters the visual interface with too many buttons",
            "It is slower than hunting and pecking on a keyboard",
            "It cannot be used for expert software"
          ],
          correctIndex: 0,
          explanation: "Knowledge in the head allows fast, uncluttered execution for experts, but requires significant training and is prone to forgetting."
        },
        quizzes: [
          {
          question: "What is the primary trade-off of relying purely on Knowledge in the Head?",
          options: [
            "It requires high upfront learning and is fragile if forgotten or interrupted",
            "It clutters the visual interface with too many buttons",
            "It is slower than hunting and pecking on a keyboard",
            "It cannot be used for expert software"
          ],
          correctIndex: 0,
          explanation: "Knowledge in the head allows fast, uncluttered execution for experts, but requires significant training and is prone to forgetting."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Great systems offer visible world-cues for novices while enabling internalized keyboard shortcuts for experts."
      },
      {
        id: "m2-s8",
        label: "Four constraints",
        type: "read",
        title: "A classification of everyday constraints",
        source: "Ch. 4, pages. 82–87",
        intro: "Norman gave people the thirteen parts of a Lego motorcycle with no instructions and no picture of the finished object. They could still build it, because the appropriate role of every single piece is determined by constraints. Four classes appear to be universal and sufficient.",
        points: [
          { n: "1", head: "Physical", text: "Physical limitations restrict possible operations: a large peg will not fit a small hole; the windshield fits one place, one orientation. No training is required, but the constraint works best when it is easy to see, so the wrong action is ruled out before it is attempted rather than after." },
          { n: "2", head: "Semantic", text: "The meaning of the situation restricts the possibilities: the rider must face forward, and the windshield must be in front of the rider because its purpose is to protect the rider's face." },
          { n: "3", head: "Cultural", text: "Accepted conventions decide the rest: signs are meant to be read right side up; red is the stop light and goes at the rear; white or yellow is the headlight and goes in front; a blue flashing light sits on top of a police vehicle." },
          { n: "4", head: "Logical", text: "Logic fills the last gap: all the pieces must be used and there is only one place left, so the remaining light is placed by elimination. Natural mappings work by exactly this kind of logical constraint." }
        ],
        examples: [
          "Cultural constraints are represented in the mind as schemas — the reason you know how to behave in a restaurant you have never entered, and the reason unfamiliar machines feel so awkward: no conventions for them exist yet.",
          "A well-designed car key works in either orientation, or gives a clear physical signal for the right one — no small matter when you are standing outside in a storm with both arms full."
        ],
        quiz: {
          question: "Which of the four constraint types relies on shared societal conventions (such as red for stoplights)?",
          options: [
            "Physical constraint",
            "Cultural constraint",
            "Logical constraint",
            "Semantic constraint"
          ],
          correctIndex: 1,
          explanation: "Cultural constraints are learned societal schemas and standards that guide expected behavior."
        },
        quizzes: [
          {
          question: "Which of the four constraint types relies on shared societal conventions (such as red for stoplights)?",
          options: [
            "Physical constraint",
            "Cultural constraint",
            "Logical constraint",
            "Semantic constraint"
          ],
          correctIndex: 1,
          explanation: "Cultural constraints are learned societal schemas and standards that guide expected behavior."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Four universal constraints: Physical, Semantic, Cultural, and Logical."
      },
      {
        id: "m2-s9",
        label: "Doors and switches",
        type: "read",
        title: "Applying affordances and constraints",
        source: "Ch. 4, pages. 87–98",
        intro: "Doors and light switches are the standing test cases. Both have a small number of possible actions, and both are routinely designed so that the person cannot tell which one applies.",
        points: [
          { n: "1", head: "The problem with doors", text: "The door must signal on which side to act and whether to push or pull. A flat plate affords only pushing; a graspable handle affords pulling. Getting these to agree with the actual mechanism removes the need for any sign." },
          { n: "2", head: "The problem with switches", text: "Rows of identical switches on a wall have no mapping to the lights they control, so people learn them by trial and error and never learn them well." },
          { n: "3", head: "Group and map instead of labeling", text: "Norman's own solution was to move the switches into a spatial layout matching the room, so the arrangement itself says which switch does what." },
          { n: "4", head: "Forcing functions where the stakes are high", text: "Where an error would be serious, design so the wrong action cannot be completed at all, rather than warning about it afterwards." }
        ],
        examples: [
          "If a door has to be labeled PUSH, the label is doing work the design should have done."
        ],
        quiz: {
          question: "How should a push door be designed so that users never pull by mistake?",
          options: [
            "Add a larger pull handle with a neon PUSH sign",
            "Use a flat push plate on the opening side with no graspable handle",
            "Require a keycard swipe",
            "Sound a buzzer whenever touched"
          ],
          correctIndex: 1,
          explanation: "A flat plate physically affords only pushing, completely eliminating the possibility of a pull action."
        },
        quizzes: [
          {
          question: "How should a push door be designed so that users never pull by mistake?",
          options: [
            "Add a larger pull handle with a neon PUSH sign",
            "Use a flat push plate on the opening side with no graspable handle",
            "Require a keycard swipe",
            "Sound a buzzer whenever touched"
          ],
          correctIndex: 1,
          explanation: "A flat plate physically affords only pushing, completely eliminating the possibility of a pull action."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Hardware affordances should physically guide the correct action and make wrong actions impossible."
      },
      {
        id: "m2-s10",
        label: "Visibility & sound",
        type: "read",
        title: "Visibility and feedback through natural sound",
        source: "Ch. 4, pages. 99–103",
        intro: "Two further principles govern knowing what to do: make the relevant parts visible, and give each action an immediate and obvious effect.",
        points: [
          { n: "1", head: "The questions a novel object must answer", text: "Which parts move and which are fixed? Where should it be grasped? What kind of movement is possible — pushing, pulling, turning, rotating? How much force, how far, and how is success gauged?" },
          { n: "2", head: "Visibility is violated constantly", text: "Handles are hidden for the sake of clean lines; door and drawer cracks are minimized; on/off switches are put underneath typewriters and behind computers. The result is a smooth expanse of material with no sign of how it works." },
          { n: "3", head: "Making the invisible visible improves systems dramatically", text: "A good display of the current state turns an unusable device into a workable one." },
          { n: "4", head: "Sound conveys what cannot be seen", text: "The click of a bolt sliding home, the zzz of a working zipper, the whistle of a kettle, the rise in pitch of a clogged vacuum cleaner. Natural sound tells us about things we cannot see, while our eyes are busy elsewhere." }
        ],
        examples: [
          "Most devices use sound only as a signal — buzzers, beeps, tones — which is as limited as restricting all visual cues to flashing colored lights.",
          "Sounds should be generated with an understanding of the natural relationship between the sound and the information: the clicks and hums during a telephone connection are informative; remove them and you are less sure the call is going through."
        ],
        quiz: {
          question: "What unique benefit does natural auditory feedback provide over visual displays?",
          options: [
            "It uses less battery power",
            "It conveys information about internal states while the user's visual attention is focused elsewhere",
            "It never annoys nearby bystanders",
            "It eliminates the need for software code"
          ],
          correctIndex: 1,
          explanation: "Auditory feedback informs users about physical states (e.g. clicks, pitch shifts) without requiring visual fixation."
        },
        quizzes: [
          {
          question: "What unique benefit does natural auditory feedback provide over visual displays?",
          options: [
            "It uses less battery power",
            "It conveys information about internal states while the user's visual attention is focused elsewhere",
            "It never annoys nearby bystanders",
            "It eliminates the need for software code"
          ],
          correctIndex: 1,
          explanation: "Auditory feedback informs users about physical states (e.g. clicks, pitch shifts) without requiring visual fixation."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Make critical system states visible, and use rich, natural sound to inform users when eyes are occupied."
      }
    ]
  },
  {
    id: "m3",
    number: 3,
    kicker: "Module 3",
    title: "To Err Is Human, and the Design Challenge",
    citation: "Norman, The Design of Everyday Things, Chapters 5–6",
    meta: "Norman, Ch. 5–6 · 60 pages",
    colorTheme: {
      bg: "bg-[#3b82f6]",
      border: "border-[#1d4ed8]",
      accent: "#2563eb",
      badge: "bg-blue-100 text-blue-900 border-blue-300",
      lightBg: "bg-[#dbeafe]",
      buttonBg: "bg-[#60a5fa] hover:bg-[#3b82f6]",
    },
    stages: [
      {
        id: "m3-s1",
        label: "Slips",
        type: "read",
        title: "Slips: intending one action, doing another",
        source: "Ch. 5, pages. 105–107",
        intro: "Most everyday errors are slips. Intend to do one action, find yourself doing another. Slips show up most frequently in skilled behavior — we don't make so many slips in things we are still learning — and they result in part from a lack of attention. On the whole, people can consciously attend to only one primary thing at a time, yet we routinely do many things at once.",
        points: [
          { n: "1", head: "Automaticity is what makes slips possible", text: "We can do more than one thing at a time only if most of the actions are done automatically, subconsciously, with little or no need for conscious attention. The same automaticity that makes skill possible is what lets the wrong routine take over." },
          { n: "2", head: "Skilled performance requires it", text: "To play the piano we move the fingers over the keyboard while reading the music, working the pedals and listening — and to play well, all of that must be automatic so conscious attention can go to style and phrasing." },
          { n: "3", head: "Slips are not deep pathology", text: "The study of slips is the study of the psychology of everyday errors — what Freud called the psychopathology of everyday life. Some may have hidden meanings, but most are accounted for by simple events in our mental mechanisms." }
        ],
        examples: [
          "A colleague drove off, realized he had forgotten his briefcase, returned, stopped the car, turned off the engine — and unbuckled his wristwatch instead of his seat belt."
        ],
        quiz: {
          question: "Why do slips occur most frequently in skilled, experienced users rather than novices?",
          options: [
            "Skilled users do not pay any attention to their work",
            "Skilled performance relies on automatic, subconscious execution routines that can be captured by competing habits when attention wanders",
            "Novices make no mistakes whatsoever",
            "Slips are purely hardware glitches"
          ],
          correctIndex: 1,
          explanation: "Automated routines allow experts to multitask, but when attention is diverted, a similar familiar routine can hijack execution."
        },
        quizzes: [
          {
          question: "Why do slips occur most frequently in skilled, experienced users rather than novices?",
          options: [
            "Skilled users do not pay any attention to their work",
            "Skilled performance relies on automatic, subconscious execution routines that can be captured by competing habits when attention wanders",
            "Novices make no mistakes whatsoever",
            "Slips are purely hardware glitches"
          ],
          correctIndex: 1,
          explanation: "Automated routines allow experts to multitask, but when attention is diverted, a similar familiar routine can hijack execution."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Slips occur when subconscious execution routines stray during automated, skilled performance."
      },
      {
        id: "m3-s2",
        label: "Six kinds of slip",
        type: "read",
        title: "Six categories of slip",
        source: "Ch. 5, pages. 107–110",
        intro: "Some slips result from the similarity of actions. An event in the world may automatically trigger an action. Sometimes our own thoughts remind us of unintended actions, which we then perform. Norman sorts them into six categories.",
        points: [
          { n: "1", head: "Capture errors", text: "A frequently done activity suddenly takes charge instead of the one intended. It appears whenever two action sequences share their initial stages, one unfamiliar and one well practiced — and seldom, if ever, does the unfamiliar sequence capture the familiar one. Counting copies: '1, 2, 3 … Jack, Queen, King.'" },
          { n: "2", head: "Description errors", text: "The internal description of the intention was not precise enough, so it matched the wrong object. These usually mean performing the correct action on the wrong object, and they occur most when the right and wrong objects are physically near each other. A student threw his sweaty shirt into the toilet instead of the laundry basket, in a different room." },
          { n: "3", head: "Data-driven errors", text: "Automatic actions are triggered by the arrival of sensory data, and that data can intrude into an ongoing sequence. Norman meant to dial the department secretary — a number he knew well — and instead dialed the room number that was in sight." },
          { n: "4", head: "Associative activation errors", text: "Internal thoughts and associations trigger actions the same way external data does. 'My office phone rang. I picked up the receiver and bellowed 'Come in' at it.' These are the slips Freud studied." },
          { n: "5", head: "Loss-of-activation errors", text: "Forgetting part of the act while the rest continues unimpaired — walking to the kitchen, opening the refrigerator, and wondering why you are there. The activation of the goal has decayed." },
          { n: "6", head: "Mode errors", text: "The action appropriate in one mode means something different in another. Mode errors are inevitable any time equipment has more possible actions than controls, so controls do double duty — and especially likely where the mode is not visible. The stopwatch button that lights the display in one mode cleared the time in the other." }
        ],
        examples: [
          "Long rows of identical switches are perfect setups for description errors: intend to flip one, flip a similar-looking one. It happens in industrial plants, aircraft and homes.",
          "Slips are more likely when we are distracted, bored, involved in other activities, under stress, or otherwise not paying full attention."
        ],
        quiz: {
          question: "Which slip occurs when a control performs a destructive action because the device was in an unexpected state?",
          options: [
            "Capture error",
            "Mode error",
            "Loss-of-activation error",
            "Data-driven error"
          ],
          correctIndex: 1,
          explanation: "Mode errors occur when controls do double duty across hidden states (e.g. typing in an editor while in command mode instead of insert mode)."
        },
        quizzes: [
          {
          question: "Which slip occurs when a control performs a destructive action because the device was in an unexpected state?",
          options: [
            "Capture error",
            "Mode error",
            "Loss-of-activation error",
            "Data-driven error"
          ],
          correctIndex: 1,
          explanation: "Mode errors occur when controls do double duty across hidden states (e.g. typing in an editor while in command mode instead of insert mode)."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Six slip types: Capture, Description, Data-Driven, Associative Activation, Loss of Activation, and Mode errors."
      },
      {
        id: "m3-s3",
        label: "Detecting slips",
        type: "read",
        title: "Detecting slips, and the problem of level",
        source: "Ch. 5, pages. 110–112",
        intro: "Slips are relatively easy to detect because there is a clear discrepancy between goal and result — but detection can only take place if there is feedback. If the result of the action is not visible, how can a misaction be detected?",
        points: [
          { n: "1", head: "Detection is not diagnosis", text: "Even when an error has been detected, it may not be clear what the error was, or even that one occurred — the person may not believe it." },
          { n: "2", head: "Actions exist at many levels at once", text: "Driving to the bank, turning into the lot, making a right turn, rotating the wheel, moving the hands, tensing a muscle. All are active simultaneously; any one of them might be in error." },
          { n: "3", head: "Correction usually starts at the bottom", text: "In every case Norman examined, people begin correcting at the lowest level and slowly work upward — which is why a problem at a high level goes uncorrected for so long." }
        ],
        examples: [
          "Alice meant to ask her passenger to adjust the mirror and said 'window' instead. Her correction strategy was to repeat the erroneous sentence more and more loudly — she was monitoring the wrong level.",
          "The key that won't work: hold it straighter, flip it over, try another key, wiggle the door, hit it, decide the lock is broken, walk around to the other door — and only then realize it is the wrong car."
        ],
        quiz: {
          question: "When humans detect an error in an action sequence, at which level do they almost always attempt correction first?",
          options: [
            "At the highest conceptual goal level",
            "At the lowest mechanical/motor level (e.g. pushing harder, wiggling the key)",
            "By immediately re-reading the entire user manual",
            "By writing a bug report"
          ],
          correctIndex: 1,
          explanation: "People instinctively retry low-level muscle actions first (e.g. turning key harder) before diagnosing high-level goal errors (wrong car)."
        },
        quizzes: [
          {
          question: "When humans detect an error in an action sequence, at which level do they almost always attempt correction first?",
          options: [
            "At the highest conceptual goal level",
            "At the lowest mechanical/motor level (e.g. pushing harder, wiggling the key)",
            "By immediately re-reading the entire user manual",
            "By writing a bug report"
          ],
          correctIndex: 1,
          explanation: "People instinctively retry low-level muscle actions first (e.g. turning key harder) before diagnosing high-level goal errors (wrong car)."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Error correction starts at the lowest motor level; clear feedback must expose the true level of discrepancy."
      },
      {
        id: "m3-s4",
        label: "Lessons from slips",
        type: "read",
        title: "Design lessons from the study of slips",
        source: "Ch. 5, pages. 112–114",
        intro: "Two kinds of lesson can be drawn: one for preventing slips before they occur, one for detecting and correcting them when they do. The solutions follow directly from the analysis — mode errors, for instance, are minimized by minimizing modes, or at least by making modes visible.",
        points: [
          { n: "1", head: "Make similar things different", text: "Engine compartments hold oil, transmission fluid, brake fluid, washer solution, coolant and battery water. Manufacturers reduce these description-and-mode errors by giving the compartments different shapes and opening sizes and coloring the fluids. Here design largely prevents error." },
          { n: "2", head: "Confirmation dialogs do not catch slips", text: "The request comes just after the person initiated the action and is still content with the choice, so the user confirms the action, not the file name. It is more appropriate to eliminate irreversible actions." },
          { n: "3", head: "Make the irreversible reversible", text: "Deletion should move the file to a temporary holding place, giving time for reconsideration and recovery." },
          { n: "4", head: "Error-tolerant mechanisms must be reliable", text: "When you build one, people come to depend on it — so it had better work." }
        ],
        examples: [
          "The taxi with four identical buttons: three radio channels and one that resets every setting, costing thirty minutes to restore. The driver hit it regularly.",
          "Norman's lab used seven trash cans labeled by day of the week, emptied a week later. People kept neater records because throwing something away was recoverable for a week."
        ],
        quiz: {
          question: "Why are confirmation dialogs ('Are you sure you want to delete?') ineffective at preventing slips?",
          options: [
            "Users cannot read dialogue text",
            "The confirmation appears immediately after the user commanded the action while still confident, so they reflexively confirm the command rather than the specific target",
            "Web browsers automatically click 'Yes'",
            "Confirmation boxes increase computer processing time"
          ],
          correctIndex: 1,
          explanation: "Users confirm their intention, not the target file; making actions reversible (like a Trash bin) is vastly superior."
        },
        quizzes: [
          {
          question: "Why are confirmation dialogs ('Are you sure you want to delete?') ineffective at preventing slips?",
          options: [
            "Users cannot read dialogue text",
            "The confirmation appears immediately after the user commanded the action while still confident, so they reflexively confirm the command rather than the specific target",
            "Web browsers automatically click 'Yes'",
            "Confirmation boxes increase computer processing time"
          ],
          correctIndex: 1,
          explanation: "Users confirm their intention, not the target file; making actions reversible (like a Trash bin) is vastly superior."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Rather than annoying confirmation dialogs, make destructive actions reversible with undo or temporary holding bins."
      },
      {
        id: "m3-s5",
        label: "Mistakes",
        type: "read",
        title: "Mistakes: errors of thought",
        source: "Ch. 5, pages. 114–118",
        intro: "Mistakes result from the choice of inappropriate goals. A person makes a poor decision, misclassifies a situation, or fails to take all the relevant factors into account. Many mistakes arise from the vagaries of human thought, because people rely on remembered experience rather than systematic analysis.",
        points: [
          { n: "1", head: "Memory biases the decision", text: "We decide on what is in memory, and memory is biased toward overgeneralization of the commonplace and overemphasis on the discrepant." },
          { n: "2", head: "Thought is not logic", text: "Human thought and its close relatives, problem solving and planning, are rooted more in past experience than in logical deduction. Mental life hops, skips and jumps from idea to idea — which is also the source of creative discovery and of great robustness." },
          { n: "3", head: "Schemas, networks and default values", text: "The prominent theory holds that individual structures have logic and order, that memory is associative, and that much deductive power comes from using one schema to deduce the properties of another. Once I learn that all living animals breathe, I need not learn it for each animal — unless an exception, like the flightless bird, shows otherwise." }
        ],
        examples: [
          "Memory is not a photo album or a tape recording: it mushes things together, confuses one event with another, combines events and leaves out parts."
        ],
        quiz: {
          question: "What is the fundamental difference between a Slip and a Mistake?",
          options: [
            "Slips are made by computers, mistakes by humans",
            "A slip occurs when the right goal is executed incorrectly; a mistake occurs when an incorrect or inappropriate goal is chosen",
            "Slips take days to diagnose, mistakes take milliseconds",
            "Mistakes are always physical slips of the finger"
          ],
          correctIndex: 1,
          explanation: "Slips are execution failures of valid goals; mistakes are cognitive errors where the user formed the wrong goal or plan."
        },
        quizzes: [
          {
          question: "What is the fundamental difference between a Slip and a Mistake?",
          options: [
            "Slips are made by computers, mistakes by humans",
            "A slip occurs when the right goal is executed incorrectly; a mistake occurs when an incorrect or inappropriate goal is chosen",
            "Slips take days to diagnose, mistakes take milliseconds",
            "Mistakes are always physical slips of the finger"
          ],
          correctIndex: 1,
          explanation: "Slips are execution failures of valid goals; mistakes are cognitive errors where the user formed the wrong goal or plan."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Slips are execution errors of valid goals; Mistakes are cognitive errors in formulating the goal itself."
      },
      {
        id: "m3-s6",
        label: "Structure of tasks",
        type: "read",
        title: "Wide, deep, shallow and narrow",
        source: "Ch. 5, pages. 119–125",
        intro: "Everyday activities are conceptually simple, and the simplicity lies in the structure of the tasks. Chess produces a wide and deep decision tree — eight moves at each point gives over 30,000 possibilities five moves ahead. Everyday activities are not like that.",
        points: [
          { n: "1", head: "Shallow structures", text: "Many alternatives, but each is simple, with few decisions after the top-level choice — the menu of an ice cream store. The difficulty is competing alternatives, not prolonged search." },
          { n: "2", head: "Narrow structures", text: "Only a small number of alternatives at each point, each leading to one or two further choices — a cookbook recipe. Narrow and deep." },
          { n: "3", head: "Everyday tasks are shallow or narrow by necessity", text: "They must be done quickly, often alongside other activities, so they structure themselves to minimize conscious planning and mental computation. If the structure is shallow, width does not matter; if narrow, depth does not matter." },
          { n: "4", head: "Wide and deep belongs to games", text: "Chess, bridge, mystery novels — deliberately and artificially difficult, because that is the point of them. We do not want to spend deep thought opening a can of food." }
        ],
        examples: [
          "Tic-tac-toe is easy and the numeric game of 15 is hard, though they are the same game. Tic-tac-toe exploits perception and memorized openings; the numbers force conscious search."
        ],
        quiz: {
          question: "Why are everyday tasks typically structured to be either shallow or narrow?",
          options: [
            "Because deep and wide trees require heavy conscious computation and multi-step lookahead that overwhelm working memory",
            "Because shallow structures are cheaper to program",
            "Because users only make one decision per day",
            "Because wide structures only work in chess"
          ],
          correctIndex: 0,
          explanation: "Everyday life requires fast, low-mental-effort execution; deep-and-wide structures belong to intellectual leisure games."
        },
        quizzes: [
          {
          question: "Why are everyday tasks typically structured to be either shallow or narrow?",
          options: [
            "Because deep and wide trees require heavy conscious computation and multi-step lookahead that overwhelm working memory",
            "Because shallow structures are cheaper to program",
            "Because users only make one decision per day",
            "Because wide structures only work in chess"
          ],
          correctIndex: 0,
          explanation: "Everyday life requires fast, low-mental-effort execution; deep-and-wide structures belong to intellectual leisure games."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Everyday tasks are structured to be either shallow or narrow to minimize conscious cognitive burden."
      },
      {
        id: "m3-s7",
        label: "Conscious & subconscious",
        type: "read",
        title: "Two modes of thought, and the rare event",
        source: "Ch. 5, pages. 125–127",
        intro: "Subconscious thought matches patterns, finding the best available match between past experience and the present. It is rapid, automatic, effortless — and good at detecting general trends and generalizing from few examples. Conscious thought is slow, labored and serial.",
        points: [
          { n: "1", head: "Each has its failure mode", text: "Subconscious matching can find matches that are inappropriate or wrong, and it may not distinguish the common from the rare. Conscious thought is limited by short-term memory — five or six items." },
          { n: "2", head: "Organization defeats the memory limit", text: "Fifteen unrelated things cannot be held at once; organized into a structure, only the structure has to be held. This is why explanation and understanding are essential components of conscious thought." },
          { n: "3", head: "Mistakes come from mismatch", text: "We match the present against the past, and the match is biased toward the prototypical or toward the unique. Events that are simply rare — neither common nor unique — get misclassified as one or the other, and both are wrong." }
        ],
        examples: [
          "The transformations that make tic-tac-toe easy also make it boring — which is exactly what everyday tasks ought to be, so conscious attention can go to the important things."
        ],
        quiz: {
          question: "Why do rare events cause severe cognitive mistakes?",
          options: [
            "Because memory is biased toward either frequent prototypes or dramatic unique events, misclassifying rare anomalies as normal occurrences",
            "Because computers cannot calculate small probabilities",
            "Because sensory organs stop functioning under stress",
            "Because rare events never happen in aviation"
          ],
          correctIndex: 0,
          explanation: "Subconscious pattern matching forces ambiguous data into familiar common schemas, causing operators to explain away warning signs."
        },
        quizzes: [
          {
          question: "Why do rare events cause severe cognitive mistakes?",
          options: [
            "Because memory is biased toward either frequent prototypes or dramatic unique events, misclassifying rare anomalies as normal occurrences",
            "Because computers cannot calculate small probabilities",
            "Because sensory organs stop functioning under stress",
            "Because rare events never happen in aviation"
          ],
          correctIndex: 0,
          explanation: "Subconscious pattern matching forces ambiguous data into familiar common schemas, causing operators to explain away warning signs."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Subconscious pattern-matching excels at common trends but misclassifies rare anomalies into familiar schemas."
      },
      {
        id: "m3-s8",
        label: "Explaining away",
        type: "read",
        title: "Explaining away errors, and social pressure",
        source: "Ch. 5, pages. 127–130",
        intro: "Mistakes that involve misinterpreting the situation can take a very long time to be discovered, because the interpretation is quite reasonable at the time. The situation looks like others we have been in, and we confuse the rare event with the frequent one.",
        points: [
          { n: "1", head: "Rationalizing is usually correct — until it isn't", text: "Hear a sound like a pistol shot and explain it as a car backfiring. Most of the time we are right. When we are not, the explanations look stupid in hindsight." },
          { n: "2", head: "Accidents are chains, not single failures", text: "Most major accidents follow a series of breakdowns and errors, each making the next more likely, with no single step appearing serious. In many cases people noted the problem and explained it away." },
          { n: "3", head: "Hindsight distorts the record", text: "Fischhoff found people predicted outcomes only at chance level, but when told the outcome, judged it plausible and likely. It is a lot easier to determine what is obvious after it has happened." },
          { n: "4", head: "Social pressure is part of the system", text: "For understanding mistakes, social structure is every bit as essential as physical structure — and punishment for following a safety procedure is never wise." }
        ],
        examples: [
          "Korean Air 007: the inertial navigation system could not be reprogrammed in flight, and the airline had warned that the next pilot to return to the airport would be punished.",
          "Tenerife, 1977, and the Air Florida crash at the 14th Street bridge: in each, time and economic pressures combined with the explaining away of discrepant observations."
        ],
        quiz: {
          question: "What is Hindsight Bias in disaster investigation?",
          options: [
            "Blaming weather rather than pilots",
            "The cognitive distortion where past outcomes seem completely obvious and predictable after the fact, despite being unpredictable in real time",
            "A flight recorder hardware protocol",
            "Assuming every failure is caused by software bugs"
          ],
          correctIndex: 1,
          explanation: "In hindsight, all warning signs seem obvious; in the moment, operators were rationalizing ambiguous cues amidst intense operational pressure."
        },
        quizzes: [
          {
          question: "What is Hindsight Bias in disaster investigation?",
          options: [
            "Blaming weather rather than pilots",
            "The cognitive distortion where past outcomes seem completely obvious and predictable after the fact, despite being unpredictable in real time",
            "A flight recorder hardware protocol",
            "Assuming every failure is caused by software bugs"
          ],
          correctIndex: 1,
          explanation: "In hindsight, all warning signs seem obvious; in the moment, operators were rationalizing ambiguous cues amidst intense operational pressure."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Accidents are cascading chains where warning signals are rationalized under social and economic pressure."
      },
      {
        id: "m3-s9",
        label: "Designing for error",
        type: "read",
        title: "Designing for error",
        source: "Ch. 5, pages. 131–132",
        intro: "Error is often thought of as something done by unskilled or unmotivated people. But everyone makes errors, and designers make the mistake of not taking error into account — inadvertently making it easy to err and hard to discover or recover.",
        points: [
          { n: "1", head: "Understand the causes", text: "Understand the causes of error and design to minimize them." },
          { n: "2", head: "Make actions reversible", text: "Make it possible to undo actions — or make it harder to do what cannot be reversed." },
          { n: "3", head: "Make errors discoverable and correctable", text: "Make it easier to find the errors that do occur, and easier to fix them." },
          { n: "4", head: "Change the attitude toward error", text: "Think of the user as attempting a task, getting there by imperfect approximations. Don't think of the user as making errors; think of the actions as approximations of what is desired." }
        ],
        examples: [
          "Warning signals are usually not the answer. The door buzzer cannot distinguish deliberate actions from erroneous ones, so people tape them over, silence the bell and unscrew the bulb.",
          "In a nuclear control room or an aircraft cockpit, many signals sound the same, most report what is already known, and in a real emergency they all go off at once — each competing to be heard."
        ],
        quiz: {
          question: "How should modern designers view user errors?",
          options: [
            "As negligence to be penalized with account lockouts",
            "As natural, imperfect approximations of human intent that the system should help guide, clarify, and easily undo",
            "As reasons to disable all user modifications",
            "As proof that users should not be allowed near software"
          ],
          correctIndex: 1,
          explanation: "Error is universal; designers must build systems that tolerate, forgive, and easily reverse imperfect human input."
        },
        quizzes: [
          {
          question: "How should modern designers view user errors?",
          options: [
            "As negligence to be penalized with account lockouts",
            "As natural, imperfect approximations of human intent that the system should help guide, clarify, and easily undo",
            "As reasons to disable all user modifications",
            "As proof that users should not be allowed near software"
          ],
          correctIndex: 1,
          explanation: "Error is universal; designers must build systems that tolerate, forgive, and easily reverse imperfect human input."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Design for error: make actions reversible, discoverable, and treat mistakes as collaborative approximations of user intent."
      },
      {
        id: "m3-s10",
        label: "Forcing functions",
        type: "read",
        title: "Forcing functions: interlocks, lockins, lockouts",
        source: "Ch. 5, pages. 132–139",
        intro: "Forcing functions are a form of physical constraint in which failure at one stage prevents the next step from happening. Starting a car has one — you must put the key in the ignition. Cars whose doors lock only from outside with the key have another: if you want to lock the door you cannot leave the key inside.",
        points: [
          { n: "1", head: "Interlock", text: "Forces operations to take place in the proper sequence. Microwave ovens and television sets disconnect the power the instant the door is opened or the back removed; the pin on a fire extinguisher and the safety on a rifle work the same way." },
          { n: "2", head: "Lockin", text: "Keeps an operation active, preventing someone from stopping it prematurely. A soft power switch signals the program to quit, checks that files are saved, and only then cuts power." },
          { n: "3", head: "Lockout", text: "Prevents entry to somewhere dangerous. Stairwells in US public buildings do not run straight from the ground floor to the basement, so people fleeing a fire are not trapped below." },
          { n: "4", head: "The cost has to be paid deliberately", text: "Forcing functions almost always are a nuisance in normal usage. The clever designer minimizes the nuisance while retaining the safety — and makes sure the mechanism is reliable and can distinguish legitimate violations from illegitimate ones." }
        ],
        examples: [
          "The seatbelt interlock of the 1970s was so disliked that drivers had mechanics disconnect it, or buckled the belts permanently and stuffed them under the seat. The law was quickly changed.",
          "The restroom shelf held vertical by a spring blocks the cubicle door when lowered — so you must clear it to leave, and cannot forget your packages. Clever design."
        ],
        quiz: {
          question: "Which forcing function prevents an application from shutting down until open files are safely saved?",
          options: [
            "Lockout",
            "Lockin",
            "Interlock",
            "Buzzer alarm"
          ],
          correctIndex: 1,
          explanation: "A lockin keeps an operation active or prevents premature termination until required maintenance actions finish."
        },
        quizzes: [
          {
          question: "Which forcing function prevents an application from shutting down until open files are safely saved?",
          options: [
            "Lockout",
            "Lockin",
            "Interlock",
            "Buzzer alarm"
          ],
          correctIndex: 1,
          explanation: "A lockin keeps an operation active or prevents premature termination until required maintenance actions finish."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Three forcing functions: Interlock (proper sequence), Lockin (prevents premature exit), Lockout (blocks hazard entry)."
      },
      {
        id: "m3-s11",
        label: "Natural evolution",
        type: "read",
        title: "The natural evolution of design",
        source: "Ch. 6, pages. 141–144",
        intro: "Much good design evolves: it is tested, problem areas are discovered and modified, and it is retested and remodified until time, energy and resources run out. This is characteristic of products built by craftspeople — rugs, pottery, hand tools, furniture — each new object modified slightly from the last.",
        points: [
          { n: "1", head: "Hill-climbing", text: "Move your foot in one direction; if it is downhill, try another; if uphill, take a step. Keep going until every step would be downhill. Bad features get modified into good ones and the good ones are kept." },
          { n: "2", head: "Time and complexity break the process", text: "There must be enough time for it, and the item must be simple. Most of today's items are too complex, with too many variables, for this slow sifting of improvements." },
          { n: "3", head: "The market works against it", text: "New models are already in design before the old ones ship, and mechanisms for feeding back customer experience seldom exist. Each year a new, improved model must appear, usually not using the old as a starting point." },
          { n: "4", head: "The curse of individuality", text: "Designers must make their mark, and competing companies must differ. If one company made the perfect product, another would have to change it — making it worse — to show that it was different." }
        ],
        examples: [
          "The Bell System telephone was refined over decades: key size and spacing tested for the whole population, a tone fed back when a button is pressed, a measured percentage of your own voice returned so you regulate your volume, and a plastic ridge shielding the switch hook so a dropped phone does not disconnect the call."
        ],
        quiz: {
          question: "What market pressure frequently breaks the slow, beneficial evolution of product design?",
          options: [
            "Lack of raw materials",
            "The curse of individuality and rapid annual redesign cycles that abandon proven refinements for arbitrary novelty",
            "Over-standardization by ISO",
            "Lack of computer speed"
          ],
          correctIndex: 1,
          explanation: "Commercial pressures to stand out force companies to discard perfected functional details just to appear distinct each model year."
        },
        quizzes: [
          {
          question: "What market pressure frequently breaks the slow, beneficial evolution of product design?",
          options: [
            "Lack of raw materials",
            "The curse of individuality and rapid annual redesign cycles that abandon proven refinements for arbitrary novelty",
            "Over-standardization by ISO",
            "Lack of computer speed"
          ],
          correctIndex: 1,
          explanation: "Commercial pressures to stand out force companies to discard perfected functional details just to appear distinct each model year."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Natural design evolution climbs toward perfection, but commercial novelty often discards hard-won usability details."
      },
      {
        id: "m3-s12",
        label: "Why designers go astray",
        type: "read",
        title: "Why designers go astray: aesthetics vs usability",
        source: "Ch. 6, pages. 151–158",
        intro: "If everyday design were ruled by aesthetics, life might be more pleasing to the eye but less comfortable; if ruled by usability, more comfortable but uglier. Each consideration has its place. Trouble occurs when one dominates all the others.",
        points: [
          { n: "1", head: "The reward structure puts aesthetics first", text: "Design collections feature prize-winning clocks that are unreadable, alarms that cannot easily be set, can openers that mystify. 'It probably won a prize' is a disparaging phrase in this book." },
          { n: "2", head: "Designers are not typical users", text: "They become so expert with the object that they cannot believe anyone else has problems. There is a big difference between the expertise required to be a designer and that required to be a user: designers are expert with the device, users are expert at the task." },
          { n: "3", head: "Designers work from the head; users work from the world", text: "Deep familiarity means the designer operates almost entirely from knowledge in the head, while the first-time or infrequent user must rely almost entirely on knowledge in the world. Innocence lost is not easily regained." },
          { n: "4", head: "The client may not be the user", text: "Appliances are bought by developers and landlords, office equipment by purchasing departments — interested in price, size and appearance, almost certainly not usability. Without user feedback reaching them, designers must build the cheapest possible product, because that is what sells." }
        ],
        examples: [
          "The Seattle FAA offices, planned with heavy employee participation, produced more satisfied workers and a 7 percent improvement in rated job performance. The conventionally designed Los Angeles building won the awards; one juror cited Seattle's 'residential quality' and 'lack of discipline and control of the interiors' — which was what the employees liked most."
        ],
        quiz: {
          question: "Why can't designers rely on their own personal evaluation of a product's ease of use?",
          options: [
            "Designers do not possess smartphones",
            "Designers have intimate internal knowledge in the head and can no longer experience the confusion of a first-time user relying on knowledge in the world",
            "Designers are legally barred from testing their own products",
            "Aesthetics and usability are mathematically identical"
          ],
          correctIndex: 1,
          explanation: "Once a designer masters a product, they lose the innocence of a novice and cannot predict what will confuse an outside user."
        },
        quizzes: [
          {
          question: "Why can't designers rely on their own personal evaluation of a product's ease of use?",
          options: [
            "Designers do not possess smartphones",
            "Designers have intimate internal knowledge in the head and can no longer experience the confusion of a first-time user relying on knowledge in the world",
            "Designers are legally barred from testing their own products",
            "Aesthetics and usability are mathematically identical"
          ],
          correctIndex: 1,
          explanation: "Once a designer masters a product, they lose the innocence of a novice and cannot predict what will confuse an outside user."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Designers cannot evaluate their own work as novices; testing with real users in realistic context is irreplaceable."
      },
      {
        id: "m3-s13",
        label: "The faucet",
        type: "read",
        title: "The faucet: a case history of design difficulties",
        source: "Ch. 6, pages. 158–172",
        intro: "Design is the successive application of constraints until only a unique product is left. A water faucet looks easy — start and stop the flow of water — and is not.",
        points: [
          { n: "1", head: "Every solution creates a new problem", text: "A spring-operated faucet turns itself off but must be held while you wet your hands. Add a timer and you add cost, lower reliability, and still cannot decide how long the water should run. A foot pedal makes the control invisible; an automatic sensor is expensive, invisible, and gives no control over temperature or volume." },
          { n: "2", head: "The controls we can build are not the ones we want", text: "The user cares about temperature and volume. Water arrives in two pipes, so the two easiest things to control are the volumes of hot and of cold. Hence the designer's dilemma — two mapping problems and one evaluation problem." },
          { n: "3", head: "There is no average person", text: "Handbooks give percentile ranges, but designing for the 95th percentile in a country of 250 million leaves out 12.5 million people; the 99th still leaves 2.5 million." },
          { n: "4", head: "The detail load is enormous", text: "A felt-tip pen has six diameters on the body and two on the cap, four substances, and internal structures that hold the cap and stop the tip drying. Make it too thin and it breaks under schoolchildren; too thick and it cannot be controlled — but arthritic hands may need it thick." }
        ],
        examples: [
          "The Ranmoor House dormitory issued guests a pamphlet explaining that the basin taps are operated by pushing down gently. A large show of hands had tried to turn them; one woman walked the halls until she found someone to explain. When simple things need instructions, it is a certain sign of poor design."
        ],
        quiz: {
          question: "What is the core user need versus physical reality mismatch in sink faucet design?",
          options: [
            "Users want cold water first, pipes supply hot water first",
            "Users want to control Temperature and Volume; plumbing physics separates Hot and Cold water supplies",
            "Faucets only operate with digital chips",
            "Water pressure is constant across the globe"
          ],
          correctIndex: 1,
          explanation: "Users desire control over Temperature & Flow Rate, but mechanical inputs traditionally map to Hot valve & Cold valve volumes."
        },
        quizzes: [
          {
          question: "What is the core user need versus physical reality mismatch in sink faucet design?",
          options: [
            "Users want cold water first, pipes supply hot water first",
            "Users want to control Temperature and Volume; plumbing physics separates Hot and Cold water supplies",
            "Faucets only operate with digital chips",
            "Water pressure is constant across the globe"
          ],
          correctIndex: 1,
          explanation: "Users desire control over Temperature & Flow Rate, but mechanical inputs traditionally map to Hot valve & Cold valve volumes."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Match controls to user goals (temperature and volume) rather than underlying physical mechanics (hot and cold pipes)."
      },
      {
        id: "m3-s14",
        label: "Two deadly temptations",
        type: "read",
        title: "Creeping featurism and the worshipping of false images",
        source: "Ch. 6, pages. 172–177",
        intro: "Two temptations await the unwary designer, and both lead to products that are overly complex and that drive users to distraction.",
        points: [
          { n: "1", head: "Creeping featurism", text: "The tendency to add features beyond all reason. Complexity probably increases as the square of the features: double the features, quadruple the complexity; ten times the features, one hundred times the complexity." },
          { n: "2", head: "It is a disease that comes innocently", text: "Analyze a task and you see how it can be made easier, so adding features seems virtuous. But each feature adds a control, a display, a button, an instruction — and more must be made invisible, in violation of all the principles of design." },
          { n: "3", head: "Two cures: restraint and modularization", text: "Allow the features that are absolutely necessary and steel yourself to do without the rest. Then organize: create separate functional modules, each with a limited set of controls, so the proper division of a complex set of controls lets you conquer complexity." },
          { n: "4", head: "The worshipping of false images", text: "Complexity gets bought as a signal of sophistication. Law firms bought the most feature-laden copiers and placed them in the front office where clients waited; the machines were too complex for the staff to master, and it did not matter, because appearance alone did the job." }
        ],
        examples: [
          "A Bang & Olufsen remote handles many features simply: buttons grouped into functional modules, a display giving feedback, and infrequently used controls hidden beneath a panel.",
          "A colleague with a PhD in computer science had to write three pages of instructions for her own audio-video components — each designed with care, in isolation from the others."
        ],
        quiz: {
          question: "What are the two primary design cures for Creeping Featurism?",
          options: [
            "Add more icons and lower the price",
            "Restraint (doing without non-essential features) and Modularization (organizing functions into distinct, dedicated modules)",
            "Remove all user manuals",
            "Make every button do four separate commands"
          ],
          correctIndex: 1,
          explanation: "Disciplined restraint prevents runaway clutter, and modularization isolates related features so complexity does not multiply."
        },
        quizzes: [
          {
          question: "What are the two primary design cures for Creeping Featurism?",
          options: [
            "Add more icons and lower the price",
            "Restraint (doing without non-essential features) and Modularization (organizing functions into distinct, dedicated modules)",
            "Remove all user manuals",
            "Make every button do four separate commands"
          ],
          correctIndex: 1,
          explanation: "Disciplined restraint prevents runaway clutter, and modularization isolates related features so complexity does not multiply."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Combat creeping featurism through ruthless restraint and modularization."
      }
    ]
  },
  {
    id: "m4",
    number: 4,
    kicker: "Module 4",
    title: "User-Centered Design",
    citation: "Norman, The Design of Everyday Things, Chapter 7",
    meta: "Norman, Ch. 7 · 32 pages",
    colorTheme: {
      bg: "bg-[#8b5cf6]",
      border: "border-[#6d28d9]",
      accent: "#7c3aed",
      badge: "bg-purple-100 text-purple-900 border-purple-300",
      lightBg: "bg-[#ede9fe]",
      buttonBg: "bg-[#a78bfa] hover:bg-[#8b5cf6]",
    },
    stages: [
      {
        id: "m4-s1",
        label: "The philosophy",
        type: "read",
        title: "What user-centered design asks of a design",
        source: "Ch. 7, pages. 187–188",
        intro: "User-centered design is a philosophy based on the needs and interests of the user, with an emphasis on making products usable and understandable. Four things a design should do:",
        points: [
          { n: "1", head: "Make the possible actions evident", text: "Make it easy to determine what actions are possible at any moment — make use of constraints." },
          { n: "2", head: "Make things visible", text: "Including the conceptual model of the system, the alternative actions, and the results of actions." },
          { n: "3", head: "Make the current state easy to evaluate", text: "The person should be able to tell what is going on without inference or memory." },
          { n: "4", head: "Follow natural mappings", text: "Between intentions and required actions, between actions and their effects, and between what is visible and the interpretation of the system state." }
        ],
        examples: [
          "In other words: the user can figure out what to do, and the user can tell what is going on.",
          "The test of an explanation: it should make the person say 'of course' or 'yes, I see.' If it makes them think 'how am I going to remember that?', the design has failed."
        ],
        quiz: {
          question: "What is Norman's golden test for an explanation of a system's operation?",
          options: [
            "It requires passing a certification exam",
            "It makes the person say 'Of course' or 'Yes, I see' rather than 'How am I going to remember that?'",
            "It contains at least 50 pages of mathematical specifications",
            "It can only be read on a desktop terminal"
          ],
          correctIndex: 1,
          explanation: "If an explanation feels natural and obvious, the design aligns with human intuition; if it demands memorization, the design has failed."
        },
        quizzes: [
          {
          question: "What is Norman's golden test for an explanation of a system's operation?",
          options: [
            "It requires passing a certification exam",
            "It makes the person say 'Of course' or 'Yes, I see' rather than 'How am I going to remember that?'",
            "It contains at least 50 pages of mathematical specifications",
            "It can only be read on a desktop terminal"
          ],
          correctIndex: 1,
          explanation: "If an explanation feels natural and obvious, the design aligns with human intuition; if it demands memorization, the design has failed."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "UCD core rule: Make sure the user can figure out what to do, and can effortlessly tell what is going on."
      },
      {
        id: "m4-s2",
        label: "Knowledge, both kinds",
        type: "read",
        title: "Use both knowledge in the world and in the head",
        source: "Ch. 7, pages. 188–191",
        intro: "The first of seven principles. People learn better and feel more comfortable when the knowledge required for a task is available externally — but external knowledge is only useful if the relationship between it and what it conveys is natural and easily interpreted.",
        points: [
          { n: "1", head: "Do not impede the expert", text: "When a user internalizes the knowledge, performance is faster and more efficient. Design should let people go back and forth, combining the two, using whichever is more readily available without interfering with the other." },
          { n: "2", head: "Three conceptual models", text: "The design model (the designer's), the user's model, and the system image — everything the person can actually perceive of the product. The designer talks to the user only through the system image." },
          { n: "3", head: "The role of manuals", text: "If the system image does not make the design model clear, the manual is left to do work the product itself should have done." }
        ],
        examples: [
          "The design should as much as possible operate without instructions or labels, and any necessary instruction should be needed only once."
        ],
        quiz: {
          question: "Why is a manual often considered an indicator of design shortcomings for everyday devices?",
          options: [
            "Printing paper costs too much",
            "If the system image were coherent and self-evident, users would deduce the correct model directly without consulting documentation",
            "Manuals are only for industrial robots",
            "Users always discard the manual upon unboxing"
          ],
          correctIndex: 1,
          explanation: "When simple devices require instructions, it proves the system image failed to naturally convey operations."
        },
        quizzes: [
          {
          question: "Why is a manual often considered an indicator of design shortcomings for everyday devices?",
          options: [
            "Printing paper costs too much",
            "If the system image were coherent and self-evident, users would deduce the correct model directly without consulting documentation",
            "Manuals are only for industrial robots",
            "Users always discard the manual upon unboxing"
          ],
          correctIndex: 1,
          explanation: "When simple devices require instructions, it proves the system image failed to naturally convey operations."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Allow seamless blending of external world knowledge and internalized mental expertise."
      },
      {
        id: "m4-s3",
        label: "Simplify tasks",
        type: "read",
        title: "Simplify the structure of tasks",
        source: "Ch. 7, pages. 191–199",
        intro: "Tasks should be simple in structure, minimizing the planning or problem solving they require. Short-term memory means a person should not have to hold more than about five unrelated items; long-term memory is slow to retrieve and error-prone; attention is severely limited, so the system should minimize interruption and help recover the exact status of an interrupted operation.",
        points: [
          { n: "1", head: "Keep the task the same, but provide mental aids", text: "Do not underestimate the power of simple notes, notepads, watches, timers, calculators and computer alarms — external memory for the facts essential to everyday functioning that we cannot trust ourselves to hold." },
          { n: "2", head: "Make visible what would otherwise be invisible", text: "Instruments in a car or aircraft do not change the task; they make the state of the engine visible. Microscopes, telescopes, cameras and displays make possible what otherwise would not be. Modern graphics have the power to show a complete image matching the person's mental model — and the power to keep hidden what is irrelevant." },
          { n: "3", head: "Automate, but keep the task much the same", text: "Automatic spark advance and automatic instruments were universal improvements. Others are debatable — automatic transmission lightens the mental burden but takes control from people who take pleasure in the task. In the best of worlds we would be able to choose automation or full control." },
          { n: "4", head: "Change the nature of the task", text: "When a task is inherently complex because of the manual skill it demands, technology can restructure it into a different, simpler task rather than merely assisting the old one." }
        ],
        examples: [
          "On the fear of losing skills to technology: if the skill is easily automated, it wasn't essential. Norman's spelling improved through the corrector that points out errors and suggests fixes but changes nothing without approval — continual feedback plus useful advice."
        ],
        quiz: {
          question: "How does Velcro hook-and-loop fastening illustrate 'Changing the nature of the task'?",
          options: [
            "It makes shoelaces thinner",
            "It transforms a complex fine-motor knot-tying skill into a simple press-and-pull action usable by young children and infirm adults",
            "It doubles the cost of athletic shoes",
            "It makes sports performance automatic"
          ],
          correctIndex: 1,
          explanation: "Technology restructured the entire physical task into a simpler, lower-skill action rather than just assisting lace tying."
        },
        quizzes: [
          {
          question: "How does Velcro hook-and-loop fastening illustrate 'Changing the nature of the task'?",
          options: [
            "It makes shoelaces thinner",
            "It transforms a complex fine-motor knot-tying skill into a simple press-and-pull action usable by young children and infirm adults",
            "It doubles the cost of athletic shoes",
            "It makes sports performance automatic"
          ],
          correctIndex: 1,
          explanation: "Technology restructured the entire physical task into a simpler, lower-skill action rather than just assisting lace tying."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Technology simplifies tasks through mental aids, making invisible states visible, automation, and task restructuring."
      },
      {
        id: "m4-s4",
        label: "Don't take away control",
        type: "read",
        title: "Automation and the limits of control",
        source: "Ch. 7, pages. 199–204",
        intro: "Automation that removes the person from the loop creates its own class of problem. The task changes from doing to monitoring, and monitoring is something people do poorly.",
        points: [
          { n: "1", head: "Partial automation is the hazard", text: "When the machine handles the routine and hands back only the exceptional, the person is out of practice at exactly the moment the hardest judgment is required." },
          { n: "2", head: "Keep the person informed", text: "Control depends on knowing the state of the system; automation that hides its own state takes control away even when it leaves the switches in reach." },
          { n: "3", head: "Offer the choice", text: "Where feasible, let people select the level of automation rather than imposing one." }
        ],
        examples: [
          "The instruments of ships and aircraft improved matters greatly because they made the state visible rather than making the decisions."
        ],
        quiz: {
          question: "What is the primary danger of partial automation that leaves humans in a passive monitoring role?",
          options: [
            "Machines consume too much electricity",
            "Humans are notoriously poor monitors; when an emergency occurs, they are out-of-the-loop and lack situation awareness to intervene quickly",
            "Pilots refuse to fly modern aircraft",
            "Factory lines stop moving"
          ],
          correctIndex: 1,
          explanation: "Passive monitoring leads to loss of situational awareness and rusty skills exactly when emergency human judgment is crucial."
        },
        quizzes: [
          {
          question: "What is the primary danger of partial automation that leaves humans in a passive monitoring role?",
          options: [
            "Machines consume too much electricity",
            "Humans are notoriously poor monitors; when an emergency occurs, they are out-of-the-loop and lack situation awareness to intervene quickly",
            "Pilots refuse to fly modern aircraft",
            "Factory lines stop moving"
          ],
          correctIndex: 1,
          explanation: "Passive monitoring leads to loss of situational awareness and rusty skills exactly when emergency human judgment is crucial."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Avoid overautomation that leaves humans as passive, out-of-the-loop monitors during critical failures."
      },
      {
        id: "m4-s5",
        label: "Visibility & mappings",
        type: "read",
        title: "Make things visible; get the mappings right",
        source: "Ch. 7, pages. 204–213",
        intro: "The third and fourth principles bridge the two gulfs. Visibility bridges evaluation by showing the state; mapping bridges execution by making the relation between intention and action obvious.",
        points: [
          { n: "1", head: "Bridge the Gulf of Execution", text: "Make the possible actions perceivable, so the person can see what to do without consulting anything." },
          { n: "2", head: "Bridge the Gulf of Evaluation", text: "Make the results of actions perceivable, so the person can tell what happened and whether the goal was met." },
          { n: "3", head: "Exploit spatial and cultural analogy", text: "Correct mappings come from spatial layout, from temporal contiguity between action and effect, and from cultural standards the person already holds." }
        ],
        examples: [
          "Where a mapping cannot be made natural, the alternative is a label — and a label slows every future use."
        ],
        quiz: {
          question: "Why should designers prefer natural spatial mapping over explanatory labels?",
          options: [
            "Labels require ink while spatial mapping is free",
            "Spatial mapping is perceived immediately without reading and translating text labels on every single use",
            "Labels are banned in aviation cockpits",
            "All humans speak the same language"
          ],
          correctIndex: 1,
          explanation: "Natural mappings exploit spatial analogies and visual perception directly, eliminating cognitive lookup delays."
        },
        quizzes: [
          {
          question: "Why should designers prefer natural spatial mapping over explanatory labels?",
          options: [
            "Labels require ink while spatial mapping is free",
            "Spatial mapping is perceived immediately without reading and translating text labels on every single use",
            "Labels are banned in aviation cockpits",
            "All humans speak the same language"
          ],
          correctIndex: 1,
          explanation: "Natural mappings exploit spatial analogies and visual perception directly, eliminating cognitive lookup delays."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Spatial and cultural mappings bridge execution and evaluation without requiring textual deciphering."
      },
      {
        id: "m4-s6",
        label: "Constraints & error",
        type: "read",
        title: "Exploit constraints; design for error",
        source: "Ch. 7, pages. 213–219",
        intro: "The fifth and sixth principles. Constraints reduce the alternatives before the person has to choose; designing for error assumes the person will still get it wrong.",
        points: [
          { n: "1", head: "Use natural and artificial constraints", text: "Physical, semantic, cultural and logical constraints together can make only one interpretation possible — the Lego motorcycle assembles correctly with no instructions at all." },
          { n: "2", head: "Assume every error will be made", text: "Plan for it, make the actions recoverable, and make the recovery cheap." },
          { n: "3", head: "Forcing functions where the stakes justify them", text: "Where an error would be serious, constrain the sequence so the wrong action cannot complete — accepting the nuisance that comes with it." }
        ],
        examples: [
          "Treat the user's action as an approximation of the intent, and help complete it, rather than reporting an error."
        ],
        quiz: {
          question: "What design assumption must be made regarding human error in interface design?",
          options: [
            "Assume users are perfectly trained and never distracted",
            "Assume that every error that can be made will be made, and design systems where actions are easily discoverable, recoverable, and reversible",
            "Assume error handling is the responsibility of customer support",
            "Assume errors only occur on desktop computers"
          ],
          correctIndex: 1,
          explanation: "Universal design law: If an error is physically possible, users will eventually make it. Make recovery safe and cheap."
        },
        quizzes: [
          {
          question: "What design assumption must be made regarding human error in interface design?",
          options: [
            "Assume users are perfectly trained and never distracted",
            "Assume that every error that can be made will be made, and design systems where actions are easily discoverable, recoverable, and reversible",
            "Assume error handling is the responsibility of customer support",
            "Assume errors only occur on desktop computers"
          ],
          correctIndex: 1,
          explanation: "Universal design law: If an error is physically possible, users will eventually make it. Make recovery safe and cheap."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Constrain options upfront, and assume every possible error will eventually occur."
      },
      {
        id: "m4-s7",
        label: "Standardize",
        type: "read",
        title: "When all else fails, standardize",
        source: "Ch. 7, pages. 219–226",
        intro: "The seventh principle is the fallback. When no natural mapping is possible and constraints cannot resolve the ambiguity, standardize the arbitrary choice so it has to be learned only once.",
        points: [
          { n: "1", head: "Standards convert arbitrary knowledge into universal knowledge", text: "Learn it once and it applies everywhere — the cost of learning is paid a single time by each person, instead of at every new device." },
          { n: "2", head: "Cars are the worked example", text: "Arbitrary aspects of driving had to be standardized: which side of the road, where the pedals sit, what the controls look like. None follows from nature; all had to be agreed." },
          { n: "3", head: "The timing of standardization is the hard part", text: "Standardize too early and you freeze an immature design; too late and too many incompatible versions are already in use." }
        ],
        examples: [
          "Standardization is admitted only after the other six principles fail — it solves the problem by convention rather than by design."
        ],
        quiz: {
          question: "Why is standardization considered the 'solution of last resort'?",
          options: [
            "Because standards are illegal in consumer electronics",
            "Because it relies on arbitrary knowledge that must be explicitly memorized, whereas the first six principles make design naturally intuitive without training",
            "Because standardization eliminates patents",
            "Because cars cannot be standardized"
          ],
          correctIndex: 1,
          explanation: "Standardization replaces natural affordances with arbitrary conventions. It is powerful because it is learned only once, but still inferior to natural design."
        },
        quizzes: [
          {
          question: "Why is standardization considered the 'solution of last resort'?",
          options: [
            "Because standards are illegal in consumer electronics",
            "Because it relies on arbitrary knowledge that must be explicitly memorized, whereas the first six principles make design naturally intuitive without training",
            "Because standardization eliminates patents",
            "Because cars cannot be standardized"
          ],
          correctIndex: 1,
          explanation: "Standardization replaces natural affordances with arbitrary conventions. It is powerful because it is learned only once, but still inferior to natural design."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "When natural mappings are impossible, standardize so arbitrary knowledge is learned only once."
      },
      {
        id: "m4-s8",
        label: "Making things difficult",
        type: "read",
        title: "Deliberately making things difficult",
        source: "Ch. 7, pages. 226–232",
        intro: "Not everything should be easy. Some things are meant to be hard — for security, for privacy, for safety, or because the difficulty is the point.",
        points: [
          { n: "1", head: "Difficulty as a feature", text: "Games, sports and puzzles exist to be hard; removing the difficulty removes the activity." },
          { n: "2", head: "Difficulty as protection", text: "Controls that should not be operated casually — dangerous machinery, secure doors — deserve deliberate resistance." },
          { n: "3", head: "Easy-looking is not easy to use", text: "In designing a game, Norman found that to make something easy to use you match the number of controls to the number of functions; to make it hard, you deliberately mismatch them. A clean face with too few controls hides the functions behind modes." }
        ],
        examples: [
          "The school for handicapped children where doors were deliberately made difficult, so that opening them was itself the exercise.",
          "Dual-key missile launch sequences and childproof prescription pill bottle caps."
        ],
        quiz: {
          question: "How do designers deliberately create difficulty for security or game challenges?",
          options: [
            "By increasing computer screen brightness",
            "By systematically inverting usability rules: hiding critical components, introducing unnatural mappings, and requiring physical dexterity",
            "By offering one-click shortcuts",
            "By printing large green push buttons"
          ],
          correctIndex: 1,
          explanation: "Deliberate difficulty reverses the rules of design: hiding signifiers and requiring precise timing/coordination."
        },
        quizzes: [
          {
          question: "How do designers deliberately create difficulty for security or game challenges?",
          options: [
            "By increasing computer screen brightness",
            "By systematically inverting usability rules: hiding critical components, introducing unnatural mappings, and requiring physical dexterity",
            "By offering one-click shortcuts",
            "By printing large green push buttons"
          ],
          correctIndex: 1,
          explanation: "Deliberate difficulty reverses the rules of design: hiding signifiers and requiring precise timing/coordination."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Difficulty is deliberately engineered for safety, security, and game challenge by systematically inverting usability rules."
      },
      {
        id: "m4-s9",
        label: "Design & the future",
        type: "read",
        title: "Design, writing, and the home of the future",
        source: "Ch. 7, pages. 232–240",
        intro: "Norman closes on how tools shape the work done with them, and on what the same forces will do to the house.",
        points: [
          { n: "1", head: "Writing method affects style", text: "From quill and ink to keyboard and microphone, the medium changes what gets written: outline processors and hypertext restructure the thinking, not only the typing." },
          { n: "2", head: "The home of the future", text: "A place of comfort or a new source of frustration — the same creeping featurism that defeated the audio set is arriving in the house, and the same principles decide which it becomes." },
          { n: "3", head: "The design of everyday things is a design of everyday life", text: "The objects are trivial individually; collectively they set the terms of daily competence." }
        ],
        examples: [
          "The argument returns to where it began: if a simple thing needs instructions, the design has failed — and the failure was avoidable."
        ],
        quiz: {
          question: "What is Norman's ultimate verdict on everyday object design?",
          options: [
            "Everyday objects are too trivial to matter",
            "If a simple thing needs instructions, the design has failed — and the failure was completely avoidable through human-centered design",
            "Users should be required to pass a test before buying home appliances",
            "Aesthetics must always triumph over function"
          ],
          correctIndex: 1,
          explanation: "The overarching theme of the book: simple everyday things should be intuitively usable without manuals."
        },
        quizzes: [
          {
          question: "What is Norman's ultimate verdict on everyday object design?",
          options: [
            "Everyday objects are too trivial to matter",
            "If a simple thing needs instructions, the design has failed — and the failure was completely avoidable through human-centered design",
            "Users should be required to pass a test before buying home appliances",
            "Aesthetics must always triumph over function"
          ],
          correctIndex: 1,
          explanation: "The overarching theme of the book: simple everyday things should be intuitively usable without manuals."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "If a simple thing needs instructions, the design has failed — and good design enhances the quality of everyday life."
      }
    ]
  },
  {
    id: "m5",
    number: 5,
    kicker: "Module 5",
    title: "Usability of Interactive Systems",
    citation: "Shneiderman, Designing the User Interface, Chapter 1",
    meta: "Shneiderman, Ch. 1 · 25 pages",
    colorTheme: {
      bg: "bg-[#f43f5e]",
      border: "border-[#be123c]",
      accent: "#e11d48",
      badge: "bg-rose-100 text-rose-900 border-rose-300",
      lightBg: "bg-[#ffe4e6]",
      buttonBg: "bg-[#fb7185] hover:bg-[#f43f5e]",
    },
    stages: [
      {
        id: "m5-s1",
        label: "Introduction to HCI",
        type: "read",
        title: "The Interdisciplinary Science of Human-Computer Interaction",
        source: "Ch. 1, pages. 25–32",
        intro: "User-interface designers are the heroes of a profound transformation, turning complex mainframes and command lines into intuitive mobile and social experiences. Human-Computer Interaction (HCI) integrates experimental psychology with computer science, ergonomics, and sociology to serve human needs.",
        points: [
          { n: "1", head: "HCI as an empirical design science", text: "Applying experimental psychology to computer systems created measurable user experience research." },
          { n: "2", head: "Transformative individual impact", text: "Empowering physicians with accurate diagnostic records, pilots with safer cockpits, and users with disabilities with assistive technologies." },
          { n: "3", head: "Societal and organizational scale", text: "Connected communities enable open governance and citizen science, while raising critical challenges around privacy, digital literacy, and trust." }
        ],
        examples: [
          "Zombies, Run! audio game combining GPS sensors with gamified exercise narrative.",
          "NASA mission control centers utilizing multi-wall displays and synchronized operator dashboards."
        ],
        quiz: {
          question: "Which fields were combined to create the interdisciplinary foundation of HCI?",
          options: [
            "Nuclear physics and mechanical drawing",
            "Experimental psychology and computer science, augmented by ergonomics, sociology, and design",
            "Marketing research and corporate finance alone",
            "Pure hardware electrical engineering"
          ],
          correctIndex: 1,
          explanation: "HCI bridges human behavioral science with computing and ergonomics to build usable interactive systems."
        },
        quizzes: [
          {
          question: "Which fields were combined to create the interdisciplinary foundation of HCI?",
          options: [
            "Nuclear physics and mechanical drawing",
            "Experimental psychology and computer science, augmented by ergonomics, sociology, and design",
            "Marketing research and corporate finance alone",
            "Pure hardware electrical engineering"
          ],
          correctIndex: 1,
          explanation: "HCI bridges human behavioral science with computing and ergonomics to build usable interactive systems."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "HCI combines cognitive psychology and computer science to ensure technology serves human capability."
      },
      {
        id: "m5-s2",
        label: "5 Usability Measures",
        type: "read",
        title: "The Five Measurable Usability Goals",
        source: "Ch. 1, pages. 33–35",
        intro: "Successful designers go beyond vague notions of 'user friendliness' to precise, quantifiable benchmark metrics. ISO 9241 identifies effectiveness, efficiency, and satisfaction, which translate into five practical evaluation measures.",
        points: [
          { n: "1", head: "Time to learn", text: "How long it takes typical users in the community to learn relevant actions for benchmark tasks." },
          { n: "2", head: "Speed of performance", text: "How long it takes to execute standard benchmark tasks once learned." },
          { n: "3", head: "Rate of errors by users", text: "How many and what kinds of errors users make during task execution, and how easily they recover." },
          { n: "4", head: "Retention over time", text: "How well users maintain their operational knowledge after an hour, a day, a week, or months of non-use." },
          { n: "5", head: "Subjective satisfaction", text: "How much users enjoy using the interface, measured by interviews and standardized satisfaction surveys (e.g. SUS)." }
        ],
        examples: [
          "In high-frequency commerce or air traffic control, trimming 10% off transaction time can save millions in staffing costs and prevent operator fatigue."
        ],
        quiz: {
          question: "Which of the following is NOT one of Shneiderman's 5 Measurable Usability Goals?",
          options: [
            "Time to learn",
            "Speed of performance",
            "Rate of errors by users",
            "Server CPU clock speed"
          ],
          correctIndex: 3,
          explanation: "The 5 measures are: Time to learn, Speed of performance, Error rate, Retention over time, and Subjective satisfaction."
        },
        quizzes: [
          {
          question: "Which of the following is NOT one of Shneiderman's 5 Measurable Usability Goals?",
          options: [
            "Time to learn",
            "Speed of performance",
            "Rate of errors by users",
            "Server CPU clock speed"
          ],
          correctIndex: 3,
          explanation: "The 5 measures are: Time to learn, Speed of performance, Error rate, Retention over time, and Subjective satisfaction."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "The 5 Usability Metrics: Time to learn, Speed of performance, Error rates, Retention over time, and Subjective satisfaction."
      },
      {
        id: "m5-s3",
        label: "Domain Motivations",
        type: "read",
        title: "Usability Motivations Across Application Domains",
        source: "Ch. 1, pages. 35–40",
        intro: "Different application domains impose drastically different priorities on usability tradeoffs. A life-critical cockpit demands zero errors regardless of training time; consumer e-commerce demands instant ease of learning because use is discretionary.",
        points: [
          { n: "1", head: "Consumer electronics & e-commerce", text: "High competition and discretionary use require instant discoverability; users abandon confusing websites in seconds." },
          { n: "2", head: "Life-critical systems", text: "Air traffic control, nuclear reactors, intensive care units. Long training times are acceptable to achieve rapid, error-free performance under extreme stress." },
          { n: "3", head: "Industrial & commercial systems", text: "Banking, airline reservations, utility billing. Operator training cost and speed of performance govern total lifetime operational expenses." },
          { n: "4", head: "Exploratory & creative tools", text: "Design suites, data visualization, music composition. The interface should vanish into a direct-manipulation world of action." },
          { n: "5", head: "Sociotechnical systems", text: "E-voting, citizen science, healthcare networks. Must establish trust, transparency, and accountability for diverse public roles." }
        ],
        examples: [
          "ClearBallot electronic voting audit system providing high-speed visual verification of digitized voter paper ballots."
        ],
        quiz: {
          question: "In life-critical systems (e.g. air-traffic control), which usability trade-off is prioritized?",
          options: [
            "Instant ease of learning for total novices with zero training",
            "Rapid, zero-error performance under high stress, accepting lengthy professional training periods",
            "Playful animations and decorative fonts",
            "Lowest possible hardware screen resolution"
          ],
          correctIndex: 1,
          explanation: "In life-critical environments, reliability and error-free execution under crisis are paramount; extensive training is expected."
        },
        quizzes: [
          {
          question: "In life-critical systems (e.g. air-traffic control), which usability trade-off is prioritized?",
          options: [
            "Instant ease of learning for total novices with zero training",
            "Rapid, zero-error performance under high stress, accepting lengthy professional training periods",
            "Playful animations and decorative fonts",
            "Lowest possible hardware screen resolution"
          ],
          correctIndex: 1,
          explanation: "In life-critical environments, reliability and error-free execution under crisis are paramount; extensive training is expected."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Domain dictates design priorities: consumer apps prioritize zero learning curve; life-critical systems prioritize zero errors."
      }
    ]
  },
  {
    id: "m6",
    number: 6,
    kicker: "Module 6",
    title: "Universal Usability & Diversity",
    citation: "Shneiderman, Designing the User Interface, Chapter 2",
    meta: "Shneiderman, Ch. 2 · 25 pages",
    colorTheme: {
      bg: "bg-[#0d9488]",
      border: "border-[#0f766e]",
      accent: "#0d9488",
      badge: "bg-teal-100 text-teal-900 border-teal-300",
      lightBg: "bg-[#ccfbf1]",
      buttonBg: "bg-[#2dd4bf] hover:bg-[#0d9488]",
    },
    stages: [
      {
        id: "m6-s1",
        label: "Universal Usability",
        type: "read",
        title: "The Vision of Universal Usability",
        source: "Ch. 2, pages. 57–60",
        intro: "Universal usability means designing interactive products so they are usable by the broadest possible population without requiring stigmatizing modifications. Designing for diversity enriches the experience for everyone.",
        points: [
          { n: "1", head: "The 'Curb Cut' effect", text: "Physical sidewalk ramps designed for wheelchair users benefit parents with strollers, delivery workers with carts, and travelers with luggage. Digital accessibility features produce identical universal benefits." },
          { n: "2", head: "Plasticity of design", text: "The capacity of an interface to smoothly adapt across varied display form-factors, networks, languages, and user input modalities without loss of meaning." },
          { n: "3", head: "Not 'dumbing down'", text: "Accommodating diversity means creating flexible multi-layered interfaces, not stripping away power." }
        ],
        examples: [
          "Closed captions developed for deaf individuals now enable millions to watch video in noisy gyms or quiet transit without sound."
        ],
        quiz: {
          question: "What is the 'Curb Cut Effect' in universal design?",
          options: [
            "A software bug that cuts text lines short",
            "Features designed to accommodate specific disabilities that end up delivering massive convenience and benefits to all users",
            "A hardware discount for municipal departments",
            "Removing advanced features to simplify code"
          ],
          correctIndex: 1,
          explanation: "Accessibility innovations (captions, speech-to-text, autocompletion) benefit the entire general population in diverse situational contexts."
        },
        quizzes: [
          {
          question: "What is the 'Curb Cut Effect' in universal design?",
          options: [
            "A software bug that cuts text lines short",
            "Features designed to accommodate specific disabilities that end up delivering massive convenience and benefits to all users",
            "A hardware discount for municipal departments",
            "Removing advanced features to simplify code"
          ],
          correctIndex: 1,
          explanation: "Accessibility innovations (captions, speech-to-text, autocompletion) benefit the entire general population in diverse situational contexts."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Universal usability creates flexible designs that accommodate diversity while improving usability for everyone."
      },
      {
        id: "m6-s2",
        label: "Physical & Sensory",
        type: "read",
        title: "Physical Ergonomics & Sensory Diversity",
        source: "Ch. 2, pages. 60–65",
        intro: "Accommodating human anthropometry and sensory variations requires rigorous ergonomic engineering. Designers must account for 5th to 95th percentile physical ranges and visual/auditory diversity.",
        points: [
          { n: "1", head: "Anthropometry", text: "Static dimensions (hand size, reach, eye height) and dynamic measures (typing speed, tap precision, lifting strength) vary widely across age and sex." },
          { n: "2", head: "Visual accommodation", text: "Color deficiency (affecting ~8% of males), glare, contrast thresholds, and foveal vs peripheral visual perception." },
          { n: "3", head: "Workstation ergonomics", text: "Display height, leg clearance, posture, lighting (200-500 lux), and glare reduction directly impact error rates and operator health." }
        ],
        examples: [
          "Color palettes that avoid pairing red and green as sole status indicators, using redundant shape coding or text badges."
        ],
        quiz: {
          question: "Why must designers avoid using color alone to convey crucial state information?",
          options: [
            "Color monitors are more expensive",
            "Approximately 8% of male users have color vision deficiencies (e.g. red-green colorblindness)",
            "Colors look identical on all operating systems",
            "Text is faster to parse than color"
          ],
          correctIndex: 1,
          explanation: "Relying solely on color makes systems inaccessible to color-blind users; redundant text labels or icons are required by WCAG standards."
        },
        quizzes: [
          {
          question: "Why must designers avoid using color alone to convey crucial state information?",
          options: [
            "Color monitors are more expensive",
            "Approximately 8% of male users have color vision deficiencies (e.g. red-green colorblindness)",
            "Colors look identical on all operating systems",
            "Text is faster to parse than color"
          ],
          correctIndex: 1,
          explanation: "Relying solely on color makes systems inaccessible to color-blind users; redundant text labels or icons are required by WCAG standards."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Never rely on color alone; provide redundant shapes, text, and flexible contrast adjustments."
      },
      {
        id: "m6-s3",
        label: "Accessibility & WCAG",
        type: "read",
        title: "Users with Disabilities & WCAG 2.0 Guidelines",
        source: "Ch. 2, pages. 66–70",
        intro: "Equal access to digital systems is an essential human right and economic necessity. The Web Content Accessibility Guidelines (WCAG) provide measurable standards for building accessible digital experiences.",
        points: [
          { n: "1", head: "Perceivable", text: "Provide text alternatives for non-text content, captions for multimedia, and distinguishable contrast ratios." },
          { n: "2", head: "Operable", text: "Make all functionality accessible via keyboard alone without timing traps or seizure-inducing flashing elements." },
          { n: "3", head: "Understandable", text: "Make text readable, navigation predictable, and provide input assistance with descriptive error recovery." },
          { n: "4", head: "Robust", text: "Maximize compatibility with assistive technologies including screen readers (VoiceOver, JAWS) and braille displays." }
        ],
        examples: [
          "Section 508 of the US Rehabilitation Act and European Mandate 376 legally enforcing WCAG standards for government and public accommodation services."
        ],
        quiz: {
          question: "What are the four core principles (POUR) of the Web Content Accessibility Guidelines (WCAG)?",
          options: [
            "Practical, Orderly, Useful, Reliable",
            "Perceivable, Operable, Understandable, Robust",
            "Programmed, Organized, Universal, Rapid",
            "Pixelated, Optimized, Unified, Responsive"
          ],
          correctIndex: 1,
          explanation: "WCAG is built upon the POUR framework: Perceivable, Operable, Understandable, and Robust."
        },
        quizzes: [
          {
          question: "What are the four core principles (POUR) of the Web Content Accessibility Guidelines (WCAG)?",
          options: [
            "Practical, Orderly, Useful, Reliable",
            "Perceivable, Operable, Understandable, Robust",
            "Programmed, Organized, Universal, Rapid",
            "Pixelated, Optimized, Unified, Responsive"
          ],
          correctIndex: 1,
          explanation: "WCAG is built upon the POUR framework: Perceivable, Operable, Understandable, and Robust."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "WCAG POUR principles: Perceivable, Operable, Understandable, and Robust."
      }
    ]
  },
  {
    id: "m7",
    number: 7,
    kicker: "Module 7",
    title: "Guidelines, Principles & Theories",
    citation: "Shneiderman, Designing the User Interface, Chapter 3",
    meta: "Shneiderman, Ch. 3 · 38 pages",
    colorTheme: {
      bg: "bg-[#6366f1]",
      border: "border-[#4338ca]",
      accent: "#4f46e5",
      badge: "bg-indigo-100 text-indigo-900 border-indigo-300",
      lightBg: "bg-[#e0e7ff]",
      buttonBg: "bg-[#818cf8] hover:bg-[#6366f1]",
    },
    stages: [
      {
        id: "m7-s1",
        label: "Hierarchy of Guidance",
        type: "read",
        title: "Guidelines, Principles, and Theories",
        source: "Ch. 3, pages. 81–85",
        intro: "Interface design knowledge is structured into three ascending tiers: specific low-level guidelines, mid-level architectural principles, and high-level predictive theories.",
        points: [
          { n: "1", head: "Guidelines", text: "Low-level, specific advice for displays, input forms, and navigation (e.g. 'Standardize task sequences', 'Use radio buttons for mutually exclusive choices')." },
          { n: "2", head: "Principles", text: "Mid-level fundamental strategies for analyzing tradeoffs (e.g. The Eight Golden Rules, accommodating user skill levels)." },
          { n: "3", head: "Theories", text: "High-level frameworks that describe, explain, prescribe, or predict performance (e.g. GOMS model, Information Foraging, Stages-of-Action)." }
        ],
        examples: [
          "Fitts's Law predicting exact pointing and target acquisition times based on distance and button size."
        ],
        quiz: {
          question: "How do Principles differ from Guidelines?",
          options: [
            "Principles are written in code, guidelines in English",
            "Guidelines provide specific, narrow rules (like button formatting), while Principles are fundamental, broadly applicable architectural strategies (like error prevention)",
            "Principles are only for academic research",
            "There is no conceptual difference"
          ],
          correctIndex: 1,
          explanation: "Guidelines provide concrete rulebooks; Principles are enduring, cross-domain strategies that guide design tradeoffs."
        },
        quizzes: [
          {
          question: "How do Principles differ from Guidelines?",
          options: [
            "Principles are written in code, guidelines in English",
            "Guidelines provide specific, narrow rules (like button formatting), while Principles are fundamental, broadly applicable architectural strategies (like error prevention)",
            "Principles are only for academic research",
            "There is no conceptual difference"
          ],
          correctIndex: 1,
          explanation: "Guidelines provide concrete rulebooks; Principles are enduring, cross-domain strategies that guide design tradeoffs."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Knowledge hierarchy: Guidelines (low-level rules), Principles (mid-level strategies), Theories (high-level predictive models)."
      },
      {
        id: "m7-s2",
        label: "The 8 Golden Rules",
        type: "read",
        title: "The Eight Golden Rules of Interface Design",
        source: "Ch. 3, pages. 95–98",
        intro: "Derived from thirty years of empirical experience, these eight golden rules provide an essential checklist for designers across desktop, web, and mobile environments.",
        points: [
          { n: "1", head: "1. Strive for consistency", text: "Consistent action sequences, terminology, colors, fonts, layout, and capitalization across all screens." },
          { n: "2", head: "2. Seek universal usability", text: "Design for plasticity, supporting novice explanations up to expert shortcuts." },
          { n: "3", head: "3. Offer informative feedback", text: "Immediate, visible response for every single user action." },
          { n: "4", head: "4. Design dialogs to yield closure", text: "Organize sequences into beginning, middle, and end with clear completion confirmation." },
          { n: "5", head: "5. Prevent errors", text: "Gray out invalid choices, validate fields in place, and provide constructive repair instructions." },
          { n: "6", head: "6. Permit easy reversal of actions", text: "Support undo to relieve user anxiety and encourage confident exploration." },
          { n: "7", head: "7. Keep users in control", text: "Make users the initiators of actions rather than feeling tyrannized by unexpected machine behavior." },
          { n: "8", head: "8. Reduce short-term memory load", text: "Keep displays simple, avoid requiring re-entry of data across screens, and rely on recognition over recall." }
        ],
        examples: [
          "Amazon checkout organizing the purchasing process into 4 clear sequential stages with a definitive 'Order Placed' confirmation screen yielding total closure."
        ],
        quiz: {
          question: "Which of the Eight Golden Rules emphasizes providing an explicit 'Order Placed / Success' screen to relieve cognitive tension?",
          options: [
            "Strive for consistency",
            "Design dialogs to yield closure",
            "Reduce short-term memory load",
            "Seek universal usability"
          ],
          correctIndex: 1,
          explanation: "Yielding closure provides a clear signal that a multi-step sequence is complete, allowing users to drop contingency plans from memory."
        },
        quizzes: [
          {
          question: "Which of the Eight Golden Rules emphasizes providing an explicit 'Order Placed / Success' screen to relieve cognitive tension?",
          options: [
            "Strive for consistency",
            "Design dialogs to yield closure",
            "Reduce short-term memory load",
            "Seek universal usability"
          ],
          correctIndex: 1,
          explanation: "Yielding closure provides a clear signal that a multi-step sequence is complete, allowing users to drop contingency plans from memory."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "The Eight Golden Rules: Consistency, Universal Usability, Feedback, Closure, Error Prevention, Reversible Actions, User Control, Reduced Memory Load."
      },
      {
        id: "m7-s3",
        label: "Interaction Styles",
        type: "read",
        title: "The Five Primary Interaction Styles",
        source: "Ch. 3, pages. 91–95",
        intro: "Choosing the appropriate interaction style depends on user skill levels and task domain constraints. Five primary styles dominate interactive systems.",
        points: [
          { n: "1", head: "Direct Manipulation", text: "Visual representation of objects with rapid, reversible gestures (drag-and-drop, sliders). Highly intuitive for novices and memorable for intermittent users." },
          { n: "2", head: "Menu Selection", text: "Structured decision trees where users recognize options rather than recalling commands. Reduces learning time and keystrokes." },
          { n: "3", head: "Form Fill-in", text: "Structured data entry fields with clear labels and immediate validation. Ideal for transactional data gathering." },
          { n: "4", head: "Command Language", text: "Typed syntax providing immense power, concise scripting, and macro capability for expert frequent users." },
          { n: "5", head: "Natural Language", text: "Spoken or typed conversational queries (voice assistants, search boxes). Flexible, but requires clarification dialogs when ambiguous." }
        ],
        examples: [
          "Progression of date entry: from typed command prompt > text box > dropdown selectors > interactive 2D calendar date picker."
        ],
        quiz: {
          question: "Why is Direct Manipulation preferred for visual creative tools and desktop environments?",
          options: [
            "It requires typing complex regular expressions",
            "It provides immediate visual feedback, makes actions reversible, and substitutes recognition for memorization",
            "It runs only in terminal emulators",
            "It eliminates the need for computer displays"
          ],
          correctIndex: 1,
          explanation: "Direct manipulation creates a continuous representation of the world of action where users see changes happen immediately."
        },
        quizzes: [
          {
          question: "Why is Direct Manipulation preferred for visual creative tools and desktop environments?",
          options: [
            "It requires typing complex regular expressions",
            "It provides immediate visual feedback, makes actions reversible, and substitutes recognition for memorization",
            "It runs only in terminal emulators",
            "It eliminates the need for computer displays"
          ],
          correctIndex: 1,
          explanation: "Direct manipulation creates a continuous representation of the world of action where users see changes happen immediately."
        },
          {
            question: "What key principle should designers prioritize regarding this topic?",
            options: [
              "Relying entirely on user manuals rather than interface cues",
              "Clear feedback and discoverable signifiers that match user expectations",
              "Hiding controls to maximize visual minimalism",
              "Prioritizing engineering convenience over user mental models"
            ],
            correctIndex: 1,
            explanation: "Effective design bridges user goals and system state through discoverable signifiers, immediate feedback, and clear conceptual models."
          }
        ],
        keyTakeaway: "Match the interaction style (Direct Manipulation, Menus, Forms, Commands, Natural Language) to user task frequency and skill."
      }
    ]
  }
];
