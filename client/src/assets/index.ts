// backgrounds
import saiman from './background/saiman.jpg';
import astral from './background/astral.jpg';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';

// cards
import ace from './images/Ace.png';
import bakezori from './images/Bakezori.png';
import blackSolus from './images/Black_Solus.png';
import calligrapher from './images/Calligrapher.png';
import chakriAvatar from './images/Chakri_Avatar.png';
import coalfist from './images/Coalfist.png';
import desolator from './images/Desolator.png';
import duskRigger from './images/Dusk_Rigger.png';
import flamewreath from './images/Flamewreath.png';
import furiosa from './images/Furiosa.png';
import geomancer from './images/Geomancer.png';
import goreHorn from './images/Gore_Horn.png';
import heartseeker from './images/Heartseeker.png';
import jadeMonk from './images/Jade_Monk.png';
import kaidoExpert from './images/Kaido_Expert.png';
import katara from './images/Katara.png';
import kiBeholder from './images/Ki_Beholder.png';
import kindling from './images/Kindling.png';
import lanternFox from './images/Lantern_Fox.png';
import mizuchi from './images/Mizuchi.png';
import orizuru from './images/Orizuru.png';
import scarletViper from './images/Scarlet_Viper.png';
import stormKage from './images/Storm_Kage.png';
import suzumebachi from './images/Suzumebachi.png';
import tuskBoar from './images/Tusk_Boar.png';
import twilightFox from './images/Twilight_Fox.png';
import voidTalon from './images/Void_Talon.png';
import whiplash from './images/Whiplash.png';
import widowmaker from './images/Widowmaker.png';
import xho from './images/Xho.png';

// logo
import logo from './images/logo.svg';

// icon
import attack from './images/attack.png';
import defense from './images/defense.png';
import alertIcon from './images/alertIcon.svg';
import AlertIcon from './images/AlertIcon';

// players
import player01 from './images/player01.png';
import player02 from './images/player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,
];

export {
  saiman,
  astral,
  eoaalien,
  panight,
  heroImg,

  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];