
import type { Stars } from "./models";

type Podcast = {
  name: string;
  category: string;
  url: URL;
  stars: Stars;
  thoughts: string;
}
const volts: Podcast = {
  name: "Volts",
  category: "Clean Energy",
  url: new URL("https://open.spotify.com/show/3dYMY5T3UZJLDKFQaA3tFS"),
  stars: 5,
  thoughts: "The best podcast on clean energy. Unbiased and exhuastive in coverage.",
};

const thinkingBasketball: Podcast = {
  name: "Thinking Basketball",
  category: "Basketball",
  url: new URL("https://open.spotify.com/show/12kpkAvUj6LGxzViDIH0qH"),
  stars: 5,
  thoughts: "Tune in for the rigorous analytics, stay for the nonstop banter.",
};

const oddLots: Podcast = {
  name: "Odd Lots",
  category: "Business",
  url: new URL("https://open.spotify.com/show/1te7oSFyRVekxMBJUSethH?si=d2d82f97ac9342f5"),
  stars: 5,
  thoughts: "Warning: side effects include learning way too much about storing hydrogen in giant salt caverns.",
};

const fiveThirtyEight: Podcast = {
  name: "FiveThirtyEight",
  category: "Politics",
  url: new URL("https://open.spotify.com/show/3C0iP88KSoGZk5KNWmuyF1?si=def0be1da25842b3"),
  stars: 5,
  thoughts: "Make Politics Fun Again.",
};

const ventureUnlocked: Podcast = {
  name: "Venture Unlocked",
  category: "VC",
  url: new URL("https://open.spotify.com/show/1Z1jDhQG5g3BWh7hPtHAY8?si=6d9d8bae45484a80"),
  stars: 5,
  thoughts: "Down to brass tacks, no frills interviews with VC/LP leaders.",
};

const straightUpChicagoInvestor: Podcast = {
  name: "Straight Up Chicago Investor",
  category: "Real Estate",
  url: new URL("https://open.spotify.com/show/28VVT9DqcUiKZA9tQLiJGZ?si=d285378d497142fc"),
  stars: 5,
  thoughts: "For the 2 of you who live in Chicago and think real estate is cool.",
};

const investLikeTheBest: Podcast = {
  name: "Invest Like the Best",
  category: "Investing",
  url: new URL("https://open.spotify.com/show/22fi0RqfoBACCuQDv97wFO?si=c38f93f6219d42f2"),
  stars: 5,
  thoughts: "Great guests, great questions. Not much to add."
}

const catalyst: Podcast = {
  name: "Catalyst",
  category: "Clean Energy",
  url: new URL("https://open.spotify.com/show/4C5Qx3wJn0GeTnDxIVYcAR?si=caa10b1084b84397"),
  stars: 5,
  thoughts: "Shayle is one of the *good* VCs. He gets it."
};

const twentyVC: Podcast = {
  name: "20VC",
  category: "VC",
  url: new URL("https://open.spotify.com/show/6AVgt0Cx1Rnzrg2CBbEygM?si=5cfd7ff493b14a60"),
  stars: 5,
  thoughts: "Harry has an abrasive personality, but it means we get to hear great guests answer hard questions.",
};

const warOnTheRocks: Podcast = {
  name: "War on the Rocks",
  category: "Defense",
  url: new URL("https://open.spotify.com/show/5ec5TBvVh3w4aobgx0qgYj?si=0d3324740cc747a9"),
  stars: 5,
  thoughts: "The war in Ukraine has re-instilled public interest in defense. War on the Rocks provides an interesting dive into that side of the world.",
};

const russiaContingency: Podcast = {
  name: "Russia Contingency",
  category: "Defense",
  url: new URL("https://warontherocks.com/premium/therussiacontingency/"),
  stars: 4,
  thoughts: "Great premium pod from WotR. 4 stars only Michael Kofman has a bajillion other jobs and can only release a pod once in a while.",
};

const acquired: Podcast = {
  name: "Acquired",
  category: "Business",
  url: new URL("https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp?si=a58ff9ae8a5a4c4a"),
  stars: 4,
  thoughts: "Have 4 hours to learn the ins and outs of your favorite legendary company? This is the one for you.",
};

const tfr: Podcast = {
  name: "The Full Ratchet",
  category: "VC",
  url: new URL("https://open.spotify.com/show/31D2vzsDluqyobfpTbnTeY?si=d950071aa3d3466c"),
  stars: 4,
  thoughts: "Another no frills podcast on VC, with hints of the midwest.",
};

const yaidd: Podcast = {
  name: "Yet Another Infra Deep Dive",
  category: "Dev Infra",
  url: new URL("https://open.spotify.com/show/7qZ7hDmHEQdAOLaJvi7S9o?si=fd4ee22b4de04ec1"),
  stars: 4,
  thoughts: "At the forefront of structural changes in developer infrastructure.",
};

const yc: Podcast = {
  name: "Y Combinator",
  category: "Startups",
  url: new URL("https://open.spotify.com/show/1tgqafxZAB0Bjd8nkwVtE4?si=aa29c96fb8044e45"),
  stars: 4,
  thoughts: "Short, interesting episodes on startup concepts."
}

const podcasts: Podcast[] = [
  volts,
  thinkingBasketball,
  oddLots,
  fiveThirtyEight,
  ventureUnlocked,
  straightUpChicagoInvestor,
  investLikeTheBest,
  catalyst,
  twentyVC,
  warOnTheRocks,
  russiaContingency,
  acquired,
  tfr,
  yaidd,
  yc,
];

export { type Podcast, podcasts };
