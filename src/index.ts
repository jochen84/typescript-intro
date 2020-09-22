enum SponsorLogo {
  Tiger,
  Turtle,
  Fish,
  Rat
}

enum PrimaryColor {
  Black,
  White,
  Red
}

enum SecondaryColor {
  Brown,
  Blue,
  Yellow,
  Green
}

enum Size {
  S,
  M,
  L
}

interface Jersey {
  playerName: string;
  playerNumber: number;
  primaryColor: PrimaryColor;
  secondaryColor?: SecondaryColor;
  sponsorLogo?: SponsorLogo;
  size: Size;
}

class JerseyClass implements Jersey {
  playerName: string;
  playerNumber: number;
  primaryColor: PrimaryColor;
  secondaryColor?: SecondaryColor;
  sponsorLogo?: SponsorLogo;
  size: Size;
/*
  constructor(jersey: Jersey){
    this.playerName = jersey.playerName;
    this.playerNumber = jersey.playerNumber;
    this.primaryColor = jersey.primaryColor;
    this.secondaryColor = jersey.secondaryColor;
    this.sponsorLogo = jersey.sponsorLogo;
    this.size = jersey.size;
    }
  */

    constructor(playerName: string, playerNumber: number, primaryColor: PrimaryColor, size: Size, secondaryColor?: SecondaryColor, sponsorLogo?: SponsorLogo){
      this.playerName = playerName;
      this.playerNumber = playerNumber;
      this.primaryColor = primaryColor;
      this.size = size;
      this.secondaryColor = secondaryColor;
      this.sponsorLogo = sponsorLogo;
      }
}

let newJersey = new JerseyClass("Johan", 55, PrimaryColor.Red, Size.L);
let newJersey2 = new JerseyClass("JohanHansson", 49, PrimaryColor.Red, Size.L);
console.log(newJersey);


let ratJersey: Jersey = {
  playerName: "Oscar",
  playerNumber: 1,
  primaryColor: PrimaryColor.Black,
  secondaryColor: SecondaryColor.Brown,
  sponsorLogo: SponsorLogo.Rat,
  size: Size.M
} 

let fishJersey: Jersey = {
  playerName: "Benjamin",
  playerNumber: 69,
  primaryColor: PrimaryColor.White,
  secondaryColor: SecondaryColor.Blue,
  sponsorLogo: SponsorLogo.Fish,
  size: Size.S
} 

//et newJersey = new JerseyClass(ratJersey);

let retiredNumbers: number[] = [3, 5, 6, 49, 69];
let players: Jersey[] = [ratJersey, fishJersey, newJersey, newJersey2];

players.forEach((player) =>{
  checkRetired(player);
});

function checkRetired(player: Jersey){
  if(retiredNumbers.includes(player.playerNumber)){
    console.log(player.playerName + " is a retired player");
  }
}

