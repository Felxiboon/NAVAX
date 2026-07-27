// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
//
// Every word on the site lives in this file and only this file. Edit the text
// here and it updates everywhere it appears. You never need to touch the
// components to change copy.
//
// Apostrophes (it's, don't) are safe inside these quotes. If you need a double
// quote inside a string, write it as \" — that's the only gotcha.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Northstar',
  tagline: 'Four factions, one treasury',
  status: 'In development',
  discordInvite: 'https://discord.gg/9MdMvchxhG',
  fundingContact: 'Flexiboon',
}

export const nav = [
  { id: 'about', tick: '01', label: 'About' },
  { id: 'factions', tick: '02', label: 'Factions' },
  { id: 'funding', tick: '03', label: 'Funding' },
  { id: 'updates', tick: '04', label: 'Updates' },
]

export const hero = {
  kicker: 'Four factions, one treasury',
  title: 'Northstar',
  lede: 'An immersive Roblox PvP game where four rival factions battle for control of a single shared economy.',
  primaryCta: 'Join the Discord',
  secondaryCta: 'How it works',
}

// `value` is animated up from zero, so it has to stay numeric; `prefix` and
// `suffix` wrap it for display. Use `text` instead of `value` for a stat that
// isn't a number — it renders as-is, with no count-up.
export const stats = [
  { value: 4, label: 'Rival factions', ticks: 4 },
  { value: 1, prefix: '$', suffix: 'M', label: 'Starting treasury' },
  { value: 5, suffix: 'mo', label: 'Cycle length' },
  { text: 'Roblox', label: 'Platform' },
]

export const about = {
  eyebrow: 'The premise',
  title: 'One economy. Four rivals. No neutral ground.',
  body: [
    'Northstar drops four rival factions into one shared economy. Money moves between them as the fight plays out — there is no separate scoreboard, only the treasury.',
    'Whichever faction is holding the most money when the cycle turns takes a major advantage over the rest. Then the next cycle starts from an uneven line.',
  ],
  cycle: [
    {
      tick: '01',
      title: 'Accumulate',
      copy: 'Four factions fight for control across a five-month stretch, pulling money toward their own side.',
    },
    {
      tick: '02',
      title: 'The cycle turns',
      copy: 'The books close on whatever each faction is holding at that exact moment.',
    },
    {
      tick: '03',
      title: 'Advantage carries',
      copy: 'The richest faction opens the next cycle with a major advantage over the other three.',
    },
  ],
}

export const factions = {
  eyebrow: 'The four',
  title: 'Four banners, one prize',
  lede: 'Faction identities are still under wraps. They get revealed in the Discord as development progresses.',
  cards: [
    { tick: '01', codename: 'Faction I', state: 'Classified' },
    { tick: '02', codename: 'Faction II', state: 'Classified' },
    { tick: '03', codename: 'Faction III', state: 'Classified' },
    { tick: '04', codename: 'Faction IV', state: 'Classified' },
  ],
}

export const funding = {
  eyebrow: 'Support',
  title: 'Help fund the build',
  body: 'Support the project by helping fund development, assets and future updates. Contributors may receive exclusive in-game perks as a thank-you.',
  supports: [
    { title: 'Development', copy: 'The systems behind the factions, the treasury and the cycle.' },
    { title: 'Assets', copy: 'Maps, models and the art that gives each faction its identity.' },
    { title: 'Future updates', copy: 'Keeping the cycles running after launch.' },
  ],
  ctaLabel: 'DM on Discord',
  note: 'Message first — every contribution is arranged directly.',
}

export const updates = {
  eyebrow: 'Stay close',
  title: 'Development updates post first in the Discord',
  body: 'Use the invite below to follow progress on Northstar as it gets built.',
  ctaLabel: 'Open the invite',
}

export const footer = {
  disclaimer: 'Northstar is an independent project and is not affiliated with, endorsed by, or sponsored by Roblox Corporation.',
  photoCredit: {
    text: 'Hero photograph by SnapSaga on Unsplash',
    href: 'https://unsplash.com/photos/6ca227cbc6f1',
  },
}

export const heroImage =
  'https://images.unsplash.com/photo-1693417793767-6ca227cbc6f1?auto=format&fit=crop&w=2000&q=80'
