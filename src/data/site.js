// Single source of truth for everything the school office is likely to edit:
// contact details, the two schools' copy, navigation and the photo gallery.

export const site = {
  name: 'New Beginning Schools',
  strapline: 'Primary & Vocational Secondary',
  description:
    "New Beginning African Children's School and New Beginning Vocational Secondary School — a primary and a secondary school growing together on one campus in Uganda.",
  address: 'P.O. Box 11731, Kampala, Uganda',
  email: 'newbegvocs@gmail.com',
  phones: [
    { label: '+256 704 345 743', href: 'tel:+256704345743' },
    { label: '+256 709 806 330', href: 'tel:+256709806330' },
  ],
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Primary School', to: '/primary' },
  { label: 'Secondary School', to: '/secondary' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const schools = {
  primary: {
    slug: 'primary',
    theme: 'theme-primary',
    label: 'Primary School',
    name: "New Beginning African Children's School",
    motto: 'Train up a child in a way he should go',
    logo: '/images/logo-primary.jpg',
    applyUrl: 'https://primary.skolastik.app/apply/new-beginning-african-childrens-school',
    photo: '/images/primary-pupils.jpg',
    photoAlt: 'Primary pupils in colourful school uniforms gathered happily on the school compound',
    levels: 'Primary One to Primary Seven',
    summary:
      'A joyful, caring start to school life, where young children learn to read, count, question and grow in character.',
    intro: [
      "New Beginning African Children's School is where the journey starts. Our pupils are known by name, encouraged every day, and taught by teachers who believe that every child can do well.",
      'Our motto comes from Proverbs 22:6 — “Train up a child in the way he should go.” It shapes how we teach: patiently, purposefully, and with the whole child in mind.',
    ],
    glance: [
      { term: 'Classes', detail: 'Primary One to Primary Seven' },
      { term: 'Curriculum', detail: "Uganda's national primary curriculum, leading to the Primary Leaving Examination (PLE)" },
      { term: 'Motto', detail: 'Train up a child in a way he should go' },
    ],
    highlights: [
      {
        icon: 'book',
        title: 'Strong foundations',
        text: 'Reading, writing and number skills come first, built steadily from the earliest classes.',
      },
      {
        icon: 'heart',
        title: 'Character and faith',
        text: 'Honesty, respect and kindness are taught and practised alongside every lesson.',
      },
      {
        icon: 'users',
        title: 'Teachers who care',
        text: 'Pupils are known individually, so no child is left to struggle unnoticed.',
      },
      {
        icon: 'sprout',
        title: 'Room to grow',
        text: 'Play, sport, music and friendship are part of the school day, not an extra.',
      },
    ],
    subjectsTitle: 'What our pupils learn',
    subjects: [
      'English',
      'Mathematics',
      'Integrated Science',
      'Social Studies',
      'Religious Education',
      'Local language & literacy',
      'Creative arts & physical education',
    ],
    gallery: [],
    next: {
      title: 'Ready for the next step?',
      text: 'After Primary Seven, pupils can continue on the same campus at New Beginning Vocational Secondary School.',
      to: '/secondary',
      cta: 'Explore the secondary school',
    },
  },

  secondary: {
    slug: 'secondary',
    theme: 'theme-secondary',
    label: 'Secondary School',
    name: 'New Beginning Vocational Secondary School',
    motto: 'Belong · Believe · Behave',
    logo: '/images/logo-secondary.jpg',
    applyUrl: 'https://skolastik.app/apply/new-beginning-vocational-secondary-school',
    photo: '/images/reading.jpg',
    photoAlt: 'Secondary students in white shirts, red ties and blue uniforms reading together outside a classroom block',
    levels: 'Senior One onwards',
    summary:
      'Academic learning joined with practical, hands-on skills, so students leave with knowledge, confidence and something they can do.',
    intro: [
      'New Beginning Vocational Secondary School prepares young people for further study, for work, and for life. Students follow the national secondary curriculum while building practical skills they can put to use.',
      'Three words guide our community: Belong, Believe, Behave. Every student is part of the family, is encouraged to believe in what they can become, and is expected to carry themselves with discipline and respect.',
    ],
    glance: [
      { term: 'Classes', detail: 'Senior One onwards' },
      { term: 'Curriculum', detail: "Uganda's national secondary curriculum with vocational and practical skills" },
      { term: 'Motto', detail: 'Belong · Believe · Behave' },
    ],
    highlights: [
      {
        icon: 'graduation',
        title: 'Academic strength',
        text: 'Focused teaching and steady revision prepare students well for national examinations.',
      },
      {
        icon: 'hammer',
        title: 'Vocational skills',
        text: 'Practical, hands-on training runs alongside classroom subjects, so learning leads somewhere.',
      },
      {
        icon: 'monitor',
        title: 'Computer studies',
        text: 'Students learn ICT in the Larry Bell Family Computer Centre on our campus.',
      },
      {
        icon: 'shield',
        title: 'Discipline and belonging',
        text: 'A smart, orderly and friendly community where students look out for one another.',
      },
    ],
    subjectsTitle: 'What our students learn',
    subjects: [
      'English & Literature',
      'Mathematics',
      'Biology, Chemistry & Physics',
      'History & Geography',
      'Religious Education',
      'ICT & computer studies',
      'Entrepreneurship',
      'Vocational & practical skills',
    ],
    gallery: [
      {
        src: '/images/girls-computer-centre.jpg',
        alt: 'Secondary school girls standing in rows in front of the Larry Bell Family Computer Centre',
      },
      {
        src: '/images/boys-computer-centre.jpg',
        alt: 'Secondary school boys lined up with arms folded outside the computer centre',
      },
      {
        src: '/images/students-lounge.jpg',
        alt: 'Seven secondary students in uniform seated together',
      },
    ],
    next: {
      title: 'Have a younger child too?',
      text: "Brothers and sisters can start their schooling on the same campus at New Beginning African Children's School.",
      to: '/primary',
      cta: 'Explore the primary school',
    },
  },
}

export const values = [
  {
    word: 'Belong',
    text: 'Every child is known, welcomed and part of the New Beginning family from their first day.',
  },
  {
    word: 'Believe',
    text: 'We help learners believe in God, in themselves, and in what hard work can achieve.',
  },
  {
    word: 'Behave',
    text: 'Discipline, respect and good character are expected of everyone, in and out of class.',
  },
]

export const gallery = [
  {
    src: '/images/reading.jpg',
    alt: 'Secondary students reading together on a bench outside a classroom block',
    caption: 'Reading time outside the classroom block',
    school: 'Secondary',
  },
  {
    src: '/images/primary-pupils.jpg',
    alt: 'Primary pupils in colourful uniforms smiling on the school compound',
    caption: 'Primary pupils on the compound',
    school: 'Primary',
  },
  {
    src: '/images/campus-students.jpg',
    alt: 'Secondary students in two rows in front of a brightly painted school building',
    caption: 'Students in front of the school buildings',
    school: 'Secondary',
  },
  {
    src: '/images/girls-computer-centre.jpg',
    alt: 'Secondary school girls standing in rows in front of the Larry Bell Family Computer Centre',
    caption: 'Outside the Larry Bell Family Computer Centre',
    school: 'Secondary',
  },
  {
    src: '/images/boys-computer-centre.jpg',
    alt: 'Secondary school boys lined up with arms folded outside the computer centre',
    caption: 'Smart and ready for the term',
    school: 'Secondary',
  },
  {
    src: '/images/staff-students.jpg',
    alt: 'Students standing with teachers and staff on the steps of the school hall',
    caption: 'Students with their teachers',
    school: 'Secondary',
  },
  {
    src: '/images/prize-giving.jpg',
    alt: 'Students in uniform holding wrapped gifts during a school ceremony',
    caption: 'A school celebration',
    school: 'Secondary',
  },
  {
    src: '/images/class-photo.jpg',
    alt: 'Students and teachers holding up a framed class photograph',
    caption: 'Presenting the class photograph',
    school: 'Secondary',
  },
  {
    src: '/images/girls-group.jpg',
    alt: 'A large group of secondary school girls in uniform on the school lawn',
    caption: 'On the school lawn',
    school: 'Secondary',
  },
  {
    src: '/images/girls-line.jpg',
    alt: 'Secondary school girls in uniform standing in a line on the lawn',
    caption: 'Uniform day',
    school: 'Secondary',
  },
  {
    src: '/images/students-lounge.jpg',
    alt: 'Seven secondary students in uniform seated together',
    caption: 'Friends for life',
    school: 'Secondary',
  },
]
