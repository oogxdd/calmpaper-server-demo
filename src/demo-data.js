const authors = [
  {
    id: 'author-mary',
    slug: 'mary-shelley',
    name: 'Mary Shelley',
    initials: 'MS',
    years: '1797 — 1851',
    location: 'London · Romantic era',
    bio: 'Novelist, editor, and keeper of bright questions about creation, responsibility, and belonging.',
    followersCount: 18420,
    following: ['jane-austen', 'homer', 'dante-alighieri'],
  },
  {
    id: 'author-jane',
    slug: 'jane-austen',
    name: 'Jane Austen',
    initials: 'JA',
    years: '1775 — 1817',
    location: 'Hampshire · Georgian era',
    bio: 'An exact observer of rooms, manners, money, and the distance between pride and affection.',
    followersCount: 22704,
    following: ['mary-shelley', 'william-shakespeare'],
  },
  {
    id: 'author-homer',
    slug: 'homer',
    name: 'Homer',
    initials: 'HO',
    years: 'c. 8th century BCE',
    location: 'Ionia · Archaic Greece',
    bio: 'An itinerant voice for difficult journeys, unreliable seas, and the long work of returning home.',
    followersCount: 31028,
    following: ['dante-alighieri', 'walt-whitman'],
  },
  {
    id: 'author-dante',
    slug: 'dante-alighieri',
    name: 'Dante Alighieri',
    initials: 'DA',
    years: 'c. 1265 — 1321',
    location: 'Florence · Late Middle Ages',
    bio: 'Poet, exile, and meticulous cartographer of the moral imagination.',
    followersCount: 15330,
    following: ['homer', 'william-shakespeare'],
  },
  {
    id: 'author-william',
    slug: 'william-shakespeare',
    name: 'William Shakespeare',
    initials: 'WS',
    years: '1564 — 1616',
    location: 'Stratford · English Renaissance',
    bio: 'Playwright and poet, currently typing, deleting, and typing the same fourteen lines again.',
    followersCount: 28991,
    following: ['homer', 'jane-austen', 'walt-whitman'],
  },
  {
    id: 'author-walt',
    slug: 'walt-whitman',
    name: 'Walt Whitman',
    initials: 'WW',
    years: '1819 — 1892',
    location: 'New York · American Renaissance',
    bio: 'Poet, printer, nurse, and enthusiastic correspondent with the multitudes.',
    followersCount: 12406,
    following: ['mary-shelley', 'homer'],
  },
]

const books = [
  {
    id: 'book-frankenstein',
    slug: 'frankenstein',
    title: 'Frankenstein',
    authorSlug: 'mary-shelley',
    year: '1818',
    description:
      'A frame of letters opens onto an experiment in life—and the loneliness that follows when invention outruns care.',
    genres: ['Gothic', 'Science fiction', 'Letters'],
    likes: 4920,
    readers: 18400,
    chapters: [
      {
        id: 'f-1',
        title: 'Letters from the north',
        excerpt:
          'The horizon had become a single pale thought. Then, against it, we saw a figure moving where no road could possibly be.',
      },
      {
        id: 'f-2',
        title: 'The work begins',
        excerpt:
          'I mistook attention for devotion. Each solved question made the unanswered one louder.',
      },
      {
        id: 'f-3',
        title: 'A voice in the mountains',
        excerpt:
          'Before you judge the shape of me, listen to the shape of my days: all doorways, all winter.',
      },
    ],
  },
  {
    id: 'book-pride',
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    authorSlug: 'jane-austen',
    year: '1813',
    description:
      'A bright social comedy about judgment, class, family, and the courage required to revise an opinion.',
    genres: ['Comedy', 'Romance', 'Society'],
    likes: 6112,
    readers: 22109,
    chapters: [
      {
        id: 'p-1',
        title: 'A new neighbour',
        excerpt:
          'By breakfast, the entire neighbourhood had furnished the stranger with an income and several intentions.',
      },
    ],
  },
  {
    id: 'book-odyssey',
    slug: 'the-odyssey',
    title: 'The Odyssey',
    authorSlug: 'homer',
    year: 'c. 8th century BCE',
    description:
      'A sea-borne epic of wit, endurance, hospitality, monsters, memory, and a household waiting.',
    genres: ['Epic', 'Adventure', 'Myth'],
    likes: 5780,
    readers: 19645,
    chapters: [
      {
        id: 'o-1',
        title: 'The absent king',
        excerpt:
          'They ate his father’s bread and called the waiting foolish. Telemachus counted the empty chairs.',
      },
    ],
  },
  {
    id: 'book-comedy',
    slug: 'the-divine-comedy',
    title: 'The Divine Comedy',
    authorSlug: 'dante-alighieri',
    year: '1321',
    description:
      'An exile walks through the architecture of consequence, learning what must be released.',
    genres: ['Epic', 'Poetry', 'Allegory'],
    likes: 4211,
    readers: 14775,
    chapters: [],
  },
  {
    id: 'book-sonnets',
    slug: 'the-sonnets',
    title: 'The Sonnets',
    authorSlug: 'william-shakespeare',
    year: '1609',
    description:
      'A sequence of compact arguments with beauty, desire, betrayal, memory, and the future reader.',
    genres: ['Poetry', 'Love', 'Time'],
    likes: 3872,
    readers: 13611,
    chapters: [],
  },
  {
    id: 'book-leaves',
    slug: 'leaves-of-grass',
    title: 'Leaves of Grass',
    authorSlug: 'walt-whitman',
    year: '1855',
    description:
      'An expanding democratic song of bodies, work, streets, fields, grief, comradeship, and the self.',
    genres: ['Poetry', 'Nature', 'Self'],
    likes: 2994,
    readers: 11028,
    chapters: [],
  },
]

const comments = [
  {
    id: 'comment-1',
    bookSlug: 'frankenstein',
    authorSlug: 'jane-austen',
    body:
      'The creature observes a room more carefully than most eligible gentlemen. The tragedy is that nobody permits him a proper introduction.',
    likes: 482,
  },
  {
    id: 'comment-2',
    bookSlug: 'frankenstein',
    authorSlug: 'homer',
    body:
      'A maker who refuses the duties of hospitality creates his own monster long before the lightning does.',
    likes: 367,
  },
]

const feed = [
  {
    id: 'activity-1',
    authorSlug: 'mary-shelley',
    action: 'published a new page in',
    targetBookSlug: 'frankenstein',
    body:
      'Revision note: the creature gets the last clear argument. Victor keeps the last word.',
    createdAt: '8 min ago',
  },
  {
    id: 'activity-2',
    authorSlug: 'jane-austen',
    action: 'commented on',
    targetBookSlug: 'frankenstein',
    body:
      'The creature observes a room more carefully than most eligible gentlemen.',
    createdAt: '18 min ago',
  },
  {
    id: 'activity-3',
    authorSlug: 'homer',
    action: 'started following',
    targetAuthorSlug: 'walt-whitman',
    body: 'Excellent catalogues. Very few ships, but excellent catalogues.',
    createdAt: '36 min ago',
  },
]

module.exports = {
  authors,
  books,
  comments,
  feed,
}
