export interface SiteEvent {
  slug: string
  title: string
  date: string
  image: string
  description: string
  /** Longer copy used on the event detail page. */
  about: string
}

export const EVENTS: SiteEvent[] = [
  {
    slug: 'green-runway',
    title: 'Green Runway',
    date: 'Aug 20, 2025',
    image: '/images/event-1.webp',
    description:
      'An eclipsed line of colour and cloth — stitched entirely from what others threw away.',
    about:
      'Our flagship show returns with a full evening of collections built from reclaimed fabric, deadstock denim and plant-based dyes. Twenty designers. One rule: nothing new. Watch garments walk the runway that were pulled from landfill just months ago, then meet the makers backstage. The night closes with the Green Runway Award, voted by the audience, and an after-party powered by the sun — literally. Bring a friend, bring a tote, and bring your loudest applause.',
  },
  {
    slug: 'eco-market-day',
    title: 'Eco Market Day',
    date: 'Sep 12, 2025',
    image: '/images/event-2.webp',
    description:
      'Handmade, homegrown and honest — a full day of conscious stalls and slow fashion.',
    about:
      'Sixty stalls of handmade clothing, natural skincare and plant-based food, all under one roof. Every vendor is vetted for fair wages, low-waste packaging and locally sourced materials. Bring your own cup for free drinks refills, swap your old clothes at the repair station, and leave with pieces that have a story. Kids are welcome — the plant-a-pot corner keeps them busy while you browse. Entry is free; kindness is mandatory.',
  },
  {
    slug: 'thrift-and-threads',
    title: 'Thrift & Threads',
    date: 'Oct 04, 2025',
    image: '/images/event-3.webp',
    description:
      'Learn to mend, restyle and fall back in love with the wardrobe you already own.',
    about:
      'A hands-on workshop day for anyone who has ever loved a garment to pieces. Master the invisible mend, the sashiko patch and the thirty-minute restyle under the guidance of tailors and designers who repair for a living. Bring three items from your wardrobe and leave with them transformed. All tools, threads and thrifted materials are provided, and every ticket includes a take-home mending kit so the habit sticks.',
  },
  {
    slug: 'urban-garden-popup',
    title: 'Urban Garden Pop-Up',
    date: 'Oct 25, 2025',
    image: '/images/event-4.webp',
    description:
      'Fashion displays bloom between planters on a rooftop, six storeys above the city.',
    about:
      'A rooftop greenhouse turned catwalk for one night only. Collections are displayed among citrus trees and herb planters while the skyline does the lighting. Expect botanical cocktails, a live string quartet, and a guided tour of the roof’s hydroponic farm that supplies the venue’s kitchen. Dress code: anything you feel green in. Limited to two hundred guests, so grab a ticket before the garden fills up.',
  },
  {
    slug: 'rewear-festival',
    title: 'Re-Wear Festival',
    date: 'Nov 15, 2025',
    image: '/images/event-5.webp',
    description:
      'Racks of second-hand gems, live music and a zero-waste promise from gate to stage.',
    about:
      'A full-day festival celebrating the second life of clothes. Thousands of pre-loved pieces organised by decade and style, live sets from local artists, and a silent disco under the warehouse lights. Every cup, plate and napkin on site is compostable, and the team audits the venue live on a giant board — watch the waste counter stay at zero. Come for the vintage finds, stay for the music, leave with a lighter footprint.',
  },
  {
    slug: 'sustainable-style-summit',
    title: 'Sustainable Style Summit',
    date: 'Dec 06, 2025',
    image: '/images/event-6.webp',
    description:
      'Panels and talks with the minds reshaping fashion — designers, farmers and founders.',
    about:
      'One day, three stages and thirty speakers from across the supply chain: regenerative cotton farmers, circular-economy founders, material scientists and the designers proving that green can be glamorous. Talks are short, sharp and followed by open Q&As — no lectures, just conversations. Includes a networking lunch sourced from surplus food, plus an evening reception where ideas become partnerships.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'James K.',
    role: 'Traveller',
    avatar: '/images/avatar-1.webp',
    quote:
      'I would like to personally thank you for reminding us about our environment with an actionable solution.',
  },
  {
    name: 'Ben',
    role: 'Event Regular',
    avatar: '/images/avatar-2.webp',
    quote:
      'This is exactly what I was looking for. Thank you for a painless, pleasant and, most of all, memorable experience.',
  },
]

export const BRANDS = [
  { name: 'CHANEL', className: 'font-sans font-semibold tracking-[0.45em]' },
  { name: 'LOUIS VUITTON', className: 'font-serif font-medium tracking-[0.12em]' },
  { name: 'PRADA', className: 'font-serif font-bold tracking-[0.3em]' },
  { name: 'Calvin Klein', className: 'font-sans font-light tracking-[0.28em]' },
  { name: 'DENIM', className: 'font-sans font-black tracking-[0.45em]' },
]

export const NAV_LINKS = [
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
  { label: 'Find a green event', to: '/events' },
]
