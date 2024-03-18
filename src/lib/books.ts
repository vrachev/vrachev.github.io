import type { Stars } from "./models";

type Book = {
  name: string;
  category: string;
  url: URL;
  stars: Stars;
  read: Date;
  fave: boolean;
  thoughts?: string;
}

const asoiaf: Book = {
  name: "A Song of Ice and Fire (1-5)",
  category: "Fiction",
  url: new URL("https://www.goodreads.com/book/show/12177850-a-song-of-ice-and-fire"),
  stars: 5,
  read: new Date(2023),
  fave: true,
  thoughts: "The universe GRRM has built truly feels alive.",
};

const creativeDestruction: Book = {
  name: "The Power of Creative Destruction",
  category: "Economics",
  url: new URL("https://www.goodreads.com/book/show/55503076-the-power-of-creative-destruction"),
  stars: 5,
  read: new Date(2021),
  fave: true,
  thoughts: "Introduced me to the idea of creative-destruction and the power of an economic model that balances opportunities for rent-seeking and rent-destruction.",
};

const innovatorsDilemma: Book = {
  name: "The Innovator's Dilemma",
  category: "Economics",
  url: new URL("https://www.goodreads.com/book/show/2615.The_Innovator_s_Dilemma"),
  stars: 5,
  read: new Date(2020),
  fave: true,
  thoughts: "A classic that's shaped the tech industry. Should be instinctual at this point, yet I still find myself coming to different conclusions when I consciously incorporate Christensen's lessons.",
};

const energySwitch: Book = {
  name: "The Energy Switch",
  category: "Energy",
  url: new URL("https://www.goodreads.com/book/show/54982958-the-energy-switch"),
  stars: 5,
  read: new Date(2020),
  fave: true,
  thoughts: "A comprehensive and tangible view of the omnipresent yet amorphous system we call 'The Grid' and it's evolution as we move away from traditional fossil fuel generation.",
};

const stalin1: Book = {
  name: "Stalin, Volume 1",
  category: "History",
  url: new URL("https://www.goodreads.com/en/book/show/20821221"),
  stars: 5,
  read: new Date(2023),
  fave: true,
  thoughts:
    "I love history, with WW2 and the USSR at the top of that list (I'm half-Russian). This series is a slog but really gets at the why's behind the USSR, Russia and Stalin himself. \
  As an aside, the 1917 revolution reads straight out of a fiction novel and that part of the book was an absolute page-turner."
};

const changeYourMind: Book = {
  name: "How to Change Your Mind",
  category: "Psychology",
  url: new URL("https://www.goodreads.com/en/book/show/36613747"),
  stars: 5,
  read: new Date(2018),
  fave: true,
  thoughts: "Straight-laced boomer journalist explores psychadelics and the potential benefits they may bring. Michael Pollan goes in without prior experience or assumptions, \
  and changes his mind in more than one way.",
};

const snowball: Book = {
  name: "Snowball",
  category: "Biography",
  url: new URL("https://www.goodreads.com/book/show/2054761.The_Snowball"),
  stars: 5,
  read: new Date(2021),
  fave: true,
  thoughts: "In-depth biography of Warren Buffett. Must read for all you Buffett stans.",
};

const steveJobs: Book = {
  name: "Steve Jobs",
  category: "Biography",
  url: new URL("https://www.goodreads.com/book/show/11084145-steve-jobs"),
  stars: 5,
  read: new Date("2021"),
  fave: true,
  thoughts: "Severe personality flaws aside, there are a lot of great insights to draw from the way Steve Jobs operates, the emphasis he places on user-experience and \
  how sheer willpower can move mountains.",
};

const elonMusk: Book = {
  name: "Elon Musk",
  category: "Biography",
  url: new URL("https://www.goodreads.com/en/book/show/122765395"),
  stars: 5,
  read: new Date("2023"),
  fave: true,
  thoughts: "Elon shares lots of parallels with Steve Jobs: dreadful personality flaws, a habit of shooting yourself in the foot, undying willpower and first-principles reasoning. \
  There's some real nuggets of wisdom in the way Elon approaches problems, more so than Jobs. If you ignore his social media outbursts (I've long muted him on twitter), you might \
  find this book pretty enjoyable.",
};

const wildSheepChase: Book = {
  name: "A Wild Sheep Chase",
  category: "Fiction",
  url: new URL("https://www.goodreads.com/book/show/11298.A_Wild_Sheep_Chase"),
  stars: 5,
  read: new Date("2018"),
  fave: true,
  thoughts: "I don't understand Murakami books, yet I can't look away. This is the first one I read and though I remember very little of it, I remember a feeling of nostalgia \
  for a weird upside down magical world that only exists in Murakami's mind.",
};

const liarsPoker: Book = {
  name: "Liar's Poker",
  category: "Memoir",
  url: new URL("https://www.goodreads.com/en/book/show/7865083"),
  stars: 5,
  read: new Date("2018"),
  fave: true,
  thoughts: "Michael Lewis set out to write a memoir of the debauchry and value destruction he saw at Wall Street. Instead kids \"read my book as a how-to manual\". \
  I can't blame them - The Big Swinging Dicks were having all the fun."
};

const hubris: Book = {
  name: "Hubris",
  category: "History",
  url: new URL("https://www.goodreads.com/book/show/237255.Hubris"),
  stars: 4,
  read: new Date("2022"),
  fave: true,
  thoughts: "I guess the Iraq War is technically history.. Anyways, it was interesting and infuriating to read about the utter idiocy that lead to the Iraq War, as well as the poor \
  tactical decisions that dug the US deeper and deeper into failure.",
};

const worldAfterCapital: Book = {
  name: "World After Capital",
  category: "Economics",
  url: new URL("https://www.goodreads.com/en/book/show/29890867"),
  stars: 4,
  read: new Date("2021"),
  fave: true,
  thoughts: "Splits humanity in 3 epochs based on the prevailing resource scarcity: (1) Land (hunter-gather up until Industrial Revolution, (2) Industrial Capital, (3) Human Attention. \
  It's an interesting, albeit surface-level, view into a world where the marginal cost of an increasing number of goods is 0 (eg: viewing a youtube video has a marginal cost of essentialy 0).",
};


const books: Book[] = [
  asoiaf,
  creativeDestruction,
  innovatorsDilemma,
  energySwitch,
  stalin1,
  changeYourMind,
  snowball,
  steveJobs,
  elonMusk,
  wildSheepChase,
  liarsPoker,
  hubris,
  worldAfterCapital,
];

export { type Book, books };
