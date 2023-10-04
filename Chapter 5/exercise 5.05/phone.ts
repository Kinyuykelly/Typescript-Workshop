import { reduce } from "lodash";

class Phone {
  powerButton: boolean;
  mic: boolean;
  speaker: boolean;
  serialNumber: string;
  powerOn: boolean = false;
  restart: boolean = false;

  constructor(
    powerButton: boolean,
    mic: boolean,
    speaker: boolean,
    serialNumber: string
  ) {
    this.mic = mic;
    this.powerButton = powerButton;
    this.speaker = speaker;
    this.serialNumber = serialNumber;
  }
  togglePower(): void {
    this.powerOn = true;
  }
  reboot(): void {
    this.restart = true;
  }
}
class Smart extends Phone {
  touchScreen: boolean = true;
  fourG: boolean = true;

  playVidoe(fileName: string): boolean {
    return true;
  }
}
class Standard extends Phone {
  dialPad: boolean = true;
  threeG: boolean = true;

  constructor(serial: string,) {
    super(true, true, true, serial);
  }
  NumberToLetter(number: number): string {
    const letter = ["a", "b", "c", "d"];
    return letter[number];
  }
}

const smartPhone = new Smart(true, true, true, '1234567');
const standardPhone = new Standard('67890');
console.log(smartPhone.playVidoe('videoOne'));
console.log(standardPhone.NumberToLetter(3));
console.log(smartPhone)
console.log(standardPhone)
