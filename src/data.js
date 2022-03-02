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

const data = [
  {
    category: "UPSTATEMENT",
    projects: [
      {
        title: "threadable app",
        cardFront: {
          imgSrc: flowerCard1Front,
          imgAlt: "A pixel drawing of a pink lotus"
        },
        cardBack: {
          imgSrc: flowerCard1Back,
          imgAlt: "The flower has disappeared"
        },
        description: "a social reading platform where you can read books with friends and navigate the classics alongside the world's leading thinkers and writers.",
        links: [
          {
            url: "https://apps.apple.com/app/apple-store/id1550995547",
            text: "App Store Download"
          },
          {
            url: "https://upstatement.com/case-study/threadable/",
            text: "Case Study"
          }
        ]
      },
      {
        title: "threadablebooks.com",
        cardFront: {
          imgSrc: flowerCard2Front,
          imgAlt: "A pixel drawing of a yellow tulip",
        },
        cardBack: {
          imgSrc: flowerCard2Back,
          imgAlt: "The flower has disappeared"
        },
        description: "a marketing site that introduces new users to Threadable",
        links: [
          {
            url: "https://www.threadablebooks.com/",
            text: "Site"
          }
        ]
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
        description: "a platforming game where players collect flowers and try to avoid increasingly populous spiky enemies.",
        links: [
          {
            url: "https://concrete-world.herokuapp.com/",
            text: "Site"
          },
          {
            url: "https://github.com/sathytrench/ConcreteWorld",
            text: "Code"
          }
        ]
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
        description: "a Tetris clone where players can score extra points by learning Regex",
        links: [
          {
            url: "https://regextris.herokuapp.com/",
            text: "Site"
          },
          {
            url: "https://github.com/SA3-Games/RegExtris",
            text: "Code"
          }
        ]
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
        description: "drawing was my first love. visit my instagram to see my artwork",
        links: [
          {
            url: "https://www.instagram.com/a7n7a7h7i7t/",
            text: "instagram"
          }
        ]
      }
    ]
  }
]

export default data;