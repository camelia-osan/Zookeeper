import * as readlineSync from 'readline-sync';

// Make the habitats
let camel: string = `
Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \\
     |     \\    _.-'             \\
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;     
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
\nLook at that! Our little camel is sunbathing!\n`;

let lion: string = `
Switching on the camera in the lion habitat...
                                               ,w.
                                             ,YWMMw  ,M  ,
                        _.---.._   __..---._.'MMMMMw,wMWmW,
                   _.-""        '''           YP"WMMMMMMMMMb,
                .-' __.'                   .'     MMMMW^WMMMM;
    _,        .'.-'"; \`,       /\`     .--""      :MMM[==MWMW^;
 ,mM^"     ,-'.'   /   ;      ;      /   ,       MMMMb_wMW"  @\\
,MM:.    .'.-'   .'     ;     \`\\    ;     \`,     MMMMMMMW \`"=./\`-,
WMMm__,-'.'     /      _.\\      F'''-+,,   ;_,_.dMMMMMMMM[,_ / \`=_}
"^MP__.-'    ,-' _.--""   \`-,   ;       \\  ; ;MMMMMMMMMMW^\`\`; __|
           /   .'            ; ;         )  )\`{  \\ \`"^W^\`,   \\  :
          /  .'             /  (       .'  /     Ww._     \`.  \`"
         /  Y,              \`,  \`-,=,_{   ;      MMMP\`""-,  \`-._.-,
        (--, )                \`,_ / \`) \\/"")      ^"      \`-, -;"\\:
\nThe lion is roaring!\n`;

let deer: string = `
Switching on the camera in the deer habitat...
   /|       |\\
\`__\\\\       //__'
   ||      ||
 \\__\`\\     |'__/
   \`_\\\\   //_'
   _.,:---;,._
   \\_:     :_/
     |@. .@|
     |     |
     ,\\.-./ \\
     ;;\`-'   \`---__________-----.-.
     ;;;                         \\_\\
     ';;;                         |
      ;    |                      ;
       \\   \\     \\        |      /
        \\_, \\    /        \\     |\\
          |';|  |,,,,,,,,/ \\    \\ \\_
          |  |  |           \\   /   |
          \\  \\  |           |  / \\  |
           | || |           | |   | |
           | || |           | |   | |
           | || |           | |   | |
           |_||_|           |_|   |_|
          /_//_/           /_/   /_/
\nOur 'Bambi' looks hungry. Let's go to feed it!\n`;

let goose: string = `
Switching on the camera in the goose habitat...

                                    _
                                ,-"" "".
                              ,'  ____  \`.
                            ,'  ,'    \`.  \`._
   (\`.         _..--.._   ,'  ,'        \\    \\
  (\`-.\\    .-""        ""'   /          (  d _b
 (\`._  \`-"" ,._             (            \`-(   \\
 <_  \`     (  <\`<            \\              \`-._\\
  <\`-       (__< <           :
   (__        (_<_<          ;
    \`------------------------------------------
\nThe goose is staring intently at you... Maybe it's time to change the channel?\n`;

let bat: string = `
Switching on the camera in the bat habitat...
_________________               _________________
 ~-.              \\  |\\___/|  /              .-~
     ~-.           \\ / o o \\ /           .-~
        >           \\\\  W  //           <
       /             /~---~\\             \\
      /_            |       |            _\\
         ~-.        |       |        .-~
            ;        \\     /        i
           /___      /\\   /\\      ___\\
                ~-. /  \\_/  \\ .-~
                   V         V
\nThis bat looks like it's doing fine.\n`;

let rabbit: string = `
Switching on the camera in the rabbit habitat...
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \\
\\//\\/      .- \\
 Y        /    Y
 l       I     !
 ]\\      _\\    /"\\
(" ~----( ~   Y.  )
\nIt looks like we will soon have more rabbits!\n`;


// The list of existing animals
let animalsList: string[] = [camel, lion, deer, goose, bat, rabbit];


// Display the greetings message
console.log("Welcome to the Zoo!");
console.log("Which habitat would you like to see? >\n1- Camel\n2- Lion\n3- Deer\n4- Goose\n5- Bat\n6- Rabbit\ne- Close the program.");
let answer = readlineSync.question("Enter text: ");   // Get user input

// Display the habitat based on the user's input
while (answer !== 'e') {
   if (answer === '1') {
      console.log(animalsList[0]);
   } else if (answer === '2') {
      console.log(animalsList[1]);
   } else if (answer === '3') {
      console.log(animalsList[2]);
   } else if (answer === '4') {
      console.log(animalsList[3]);
   } else if (answer === '5') {
      console.log(animalsList[4]);
   } else if (answer === '6') {
      console.log(animalsList[5]);
   } else if (answer === 'e') {
      break;
   } else {
      console.log("\nPlease select an existing habitat.\n");   // In case the user types something different than the given choices
   }
   
// Loop until the user decides to close the program
console.log("Which habitat would you like to see? >\n1- Camel\n2- Lion\n3- Deer\n4- Goose\n5- Bat\n6- Rabbit\ne- Close the program.");
answer = readlineSync.question("Enter text: ");
}

// When the user closes the program
console.log("\nSee you later!");