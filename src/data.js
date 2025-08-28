import flowerCard1Front from './assets/flowerCard1Front.png';
import flowerCard1Back from './assets/flowerCard1Back.png';
import flowerCard2Front from './assets/flowerCard2Front.png';
import flowerCard2Back from './assets/flowerCard2Back.png';
import flowerCard3Front from './assets/flowerCard3Front.png';
import flowerCard3Back from './assets/flowerCard3Back.png';
import flowerCard4Front from './assets/flowerCard4Front.png';
import flowerCard4Back from './assets/flowerCard4Back.png';
import flowerCard5Front from './assets/flowerCard5Front.png';
import flowerCard5Back from './assets/flowerCard5Back.png';

import concreteWorldImg from './assets/concreteWorldImg.PNG';
import artImg from './assets/artImg.PNG';
import regextrisImg from './assets/regextrisImg.PNG';
import threadableAppImg from './assets/threadableAppImg.PNG';
import civiqsImage from './assets/civiqsImage.png';

const data = [
  {
    category: "SOFTWARE",
    projects: [
      {
        title: "civiqs.com",
        cardFront: {
          imgSrc: flowerCard1Front,
          imgAlt: "A pixel drawing of a yellow tulip",
        },
        cardBack: {
          imgSrc: flowerCard1Back,
          imgAlt: "The flower has disappeared"
        },
        description: "built on a headless CMS, this user-facing site showcases a sample of civiqs's research and featured products to attract new clients",
        links: [
          {
            url: "https://www.civiqs.com/",
            text: "site"
          }
        ],
        projectImg: {
          imgSrc: civiqsImage,
          imgAlt: "Small snippet of Threadable's marketing site"
        }
      },
      {
        title: "threadable app",
        cardFront: {
          imgSrc: flowerCard2Front,
          imgAlt: "A pixel drawing of a pink lotus"
        },
        cardBack: {
          imgSrc: flowerCard2Back,
          imgAlt: "The flower has disappeared"
        },
        description: "this social e-reader app no longer exists due to the caprices of capitalism, but upstatement's case study lives on!",
        links: [
          {
            url: "https://upstatement.com/case-study/threadable/",
            text: "case study"
          }
        ],
        projectImg: {
          imgSrc: threadableAppImg,
          imgAlt: "Threadable app logo"
        }
      }
    ]
  },
  {
    category: "GAMES",
    projects: [
      {
        title: "concrete world",
        cardFront: {
          imgSrc: flowerCard3Front,
          imgAlt: "A pixel drawing of a blue cornflower",
        },
        cardBack: {
          imgSrc: flowerCard3Back,
          imgAlt: "The flower has disappeared"
        },
        description: "a platforming game where players collect flowers and avoid increasingly populous spiky enemies.",
        links: [
          {
            url: "https://concrete-world.netlify.app/",
            text: "site"
          },
          {
            url: "https://github.com/sathytrench/ConcreteWorld",
            text: "code"
          }
        ],
        projectImg: {
          imgSrc: concreteWorldImg,
          imgAlt: "Pixel girl standing next to a pixel flower in the game Concrete World"
        }
      },
      {
        title: "regextris",
        cardFront: {
          imgSrc: flowerCard4Front,
          imgAlt: "A pixel drawing of a pink freckled pansy",
        },
        cardBack: {
          imgSrc: flowerCard4Back,
          imgAlt: "The flower has disappeared"
        },
        description: "a Tetris clone where players can score extra points by learning Regex.",
        links: [
          {
            url: "https://regextris.netlify.app/",
            text: "site"
          },
          {
            url: "https://github.com/sathytrench/RegExtris",
            text: "code"
          }
        ],
        projectImg: {
          imgSrc: regextrisImg,
          imgAlt: "Blocks with characters on them from the Regextris game board"
        }
      }
    ]
  },
  {
    category: "ART",
    projects: [
      {
        title: "visual art",
        cardFront: {
          imgSrc: flowerCard5Front,
          imgAlt: "A pixel drawing of a blocky white flower",
        },
        cardBack: {
          imgSrc: flowerCard5Back,
          imgAlt: "The flower has disappeared"
        },
        description: "visit my instagram to see my drawings, prints, pixel animations, and other hand-made works.",
        links: [
          {
            url: "https://www.instagram.com/a7n7a7h7i7t/",
            text: "instagram"
          }
        ],
        projectImg: {
          imgSrc: artImg,
          imgAlt: "Drawing from Anahit's instagram portfolio"
        }
      }
    ]
  }
]

export default data;