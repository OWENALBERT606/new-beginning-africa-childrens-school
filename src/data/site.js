// Single source of truth for everything the school office is likely to edit:
// contact details, the two schools' copy, navigation and the photo gallery.

export const site = {
  name: 'New Beginning African Children Schools',
  strapline: 'Primary & Vocational Secondary',
  description:
    "New Beginning African Children's School and New Beginning Vocational Secondary School — a primary and a secondary school growing together in Buikwe District, Uganda.",
  membership: 'A member of African Children Schools',
  services: [
    { day: 'Sunday', time: '10:00am – 1:00pm', name: 'Sunday service' },
    { day: 'Wednesday', time: '4:00pm', name: 'Midweek service' },
  ],
  theme: {
    year: '2026',
    text: 'A rope made of three cords is hard to break',
    reference: 'Ecclesiastes 4:12',
    call: 'A call for teachers, parents, pupils and students working together for the success of our schools.',
  },
  location: 'Bugeye LC 1 village, Lubanyi Parish, Buikwe District',
  address: 'P.O. Box 11731, Kampala, Uganda',
  map: {
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.747174808938!2d33.00984227349239!3d0.34216496398904855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dd98df0368469%3A0xcfd66f8241075237!2sNew%20beginning%20africa%20school!5e0!3m2!1sen!2sug!4v1792223552481!5m2!1sen!2sug',
    lat: 0.34216496398904855,
    lng: 33.00984227349239,
    link: 'https://www.google.com/maps/search/?api=1&query=0.34216496398904855,33.00984227349239',
  },
  email: 'newbegvocs@gmail.com',
  // WhatsApp number in international format, digits only.
  whatsapp: '256704345743',
  phones: [
    { label: '+256 704 345 743', href: 'tel:+256704345743' },
    { label: '+256 709 806 330', href: 'tel:+256709806330' },
  ],
}

// The school anthem, as supplied by the school. `repeat` is how many times the part is sung.
export const anthem = [
  { label: 'Chorus', repeat: 2, lines: ['We are one', 'We are family', 'Born to win', 'Because we are one'] },
  { label: 'Stanza 1', repeat: 2, lines: ['African children', 'Born for excellence', 'Living to love', 'And loving to learn'] },
  { label: 'Chorus', repeat: 2, lines: ['We are the New Beginning', 'We are family', 'Born to win', 'Because we are one'] },
  { label: 'Stanza 2', repeat: 2, lines: ['You’re my brother', 'You’re my sister', 'Born to win', 'Because we are one'] },
  { label: 'Chorus', repeat: 2, lines: ['We are one', 'We are family', 'Born to win', 'Because we are one'] },
]

export const aboutLinks = [
  { label: 'Our History', to: '/about/history' },
  { label: 'School Anthem', to: '/about/anthem' },
  { label: 'School Profile', to: '/about/profile' },
  { label: 'Director’s Message', to: '/about/directors-message' },
  { label: 'Administration', to: '/about/administration' },
]

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about', children: aboutLinks },
  { label: 'Primary School', to: '/primary' },
  { label: 'Secondary School', to: '/secondary' },
  { label: 'Church', to: '/church' },
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
      text: 'After Primary Seven, pupils can continue at New Beginning Vocational Secondary School.',
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
    levels: 'Senior One to Senior Three',
    summary:
      'An inclusive day and boarding school in Buikwe, joining academic learning with hands-on skills for the transformation of Africa.',
    intro: [
      'New Beginning Vocational Secondary School – Buikwe is a private sponsored school, started in 2025 by Bishop Edward Ssemango and Pastor Eva Nabaggala Ssemango of Seeta Lumuli, Mukono District, under the patronage of Dr. Peter Nalos.',
      'It was started with a vision to provide a sense of belonging and holistic education for the transformation of Africa. It is an inclusive day and boarding secondary school.',
      'The school is built on a born-again Christian foundation but embraces all religious denominations. Students are never pressed to give up their own religious beliefs while at school.',
    ],
    glance: [
      { term: 'Classes', detail: 'Senior One to Senior Three' },
      { term: 'Day or boarding', detail: 'Both — an inclusive day and boarding school' },
      { term: 'Founded', detail: '2025' },
      { term: 'Location', detail: 'Bugeye LC 1 village, Lubanyi Parish, Buikwe District' },
      { term: 'Motto', detail: 'Belong · Believe · Behave' },
    ],
    highlights: [
      {
        icon: 'graduation',
        title: 'Arts and sciences',
        text: 'A comprehensive curriculum taught by vibrant, qualified staff in smart, projector-equipped classes.',
      },
      {
        icon: 'hammer',
        title: 'Hands-on training',
        text: 'Practical skills such as tailoring and agriculture, to nurture self-dependable citizens.',
      },
      {
        icon: 'monitor',
        title: 'Science and computing',
        text: 'A state-of-the-art science laboratory and the Larry Bell Family Computer Centre.',
      },
      {
        icon: 'shield',
        title: 'Belonging and service',
        text: 'A community that looks out for one another and takes community service seriously.',
      },
    ],
    mission: 'Nurturing a generation that honours God, lives to love, loves to learn and strives for excellence.',
    vision: 'A community school providing a sense of belonging and holistic education for the transformation of Africa.',
    coreValues: [
      'Honesty',
      'Decency',
      'Academic excellence',
      'Compassion',
      'Servanthood',
      'Godly character',
      'Balanced education',
    ],
    offers: {
      photo: '/images/tailoring.jpg',
      photoAlt: 'A student sewing at a tailoring machine during a hands-on training lesson',
      items: [
        'Smart classes with projector facilities',
        'Spacious classroom facilities',
        'An optimal learning environment',
        'Vibrant, qualified staff',
        'A comprehensive curriculum: arts and sciences',
        'A state-of-the-art science laboratory',
        'Innovative leadership',
        'Community service and social responsibility',
      ],
    },
    inside: [
      {
        src: '/images/science-lab.jpg',
        label: 'Science laboratory',
        alt: 'Students standing at the benches of the school science laboratory',
      },
      {
        src: '/images/science-practical.jpg',
        label: 'Science practicals',
        alt: 'Students carrying out a science experiment with a teacher',
      },
      {
        src: '/images/smart-classroom.jpg',
        label: 'Smart classroom',
        alt: 'A teacher leading a lesson with a projector in a bright classroom',
      },
      {
        src: '/images/ict-lesson.jpg',
        label: 'ICT lessons',
        alt: 'A teacher helping two students working on a laptop',
      },
      {
        src: '/images/computer-lab.jpg',
        label: 'Computer lab',
        alt: 'Students working at desktop computers with a teacher',
      },
      {
        src: '/images/tailoring-workshop.jpg',
        label: 'Tailoring workshop',
        alt: 'A student at a sewing machine in the tailoring workshop',
      },
      {
        src: '/images/agriculture.jpg',
        label: 'Agriculture',
        alt: 'Students tending crops in the school garden',
      },
      {
        src: '/images/library.jpg',
        label: 'Reading and library',
        alt: 'Three students reading books together',
      },
    ],
    fees: {
      note: 'Amounts are in Uganda shillings. A mattress and blanket are provided free at school.',
      rows: [
        { item: 'Admission', amount: '30,000' },
        { item: 'Fees per term (S.1 – S.3), boarding', amount: '750,000' },
        { item: 'Fees per term (S.1 – S.3), day students', amount: '350,000' },
        { item: 'Development', amount: '50,000' },
        { item: 'Uniform', amount: '360,000' },
        { item: 'DIT (Directorate of Industrial Training)', amount: '30,000' },
        { item: 'One text book', amount: '25,000' },
        { item: 'ID card / passport photos', amount: '15,000' },
      ],
    },
    contact: {
      email: 'vcsuganda8@gmail.com',
      phones: [
        { label: '0704 345 743', href: 'tel:+256704345743' },
        { label: '0777 084 215', href: 'tel:+256777084215' },
        { label: '0751 920 619', href: 'tel:+256751920619' },
      ],
    },
    subjectsTitle: 'What our students learn',
    subjects: [
      'English & Literature',
      'Mathematics',
      'Biology, Chemistry & Physics',
      'History & Geography',
      'Religious Education',
      'ICT & computer studies',
      'Entrepreneurship',
      'Tailoring',
      'Agriculture',
    ],
    gallery: [
      {
        src: '/images/exam-hall.jpg',
        alt: 'Secondary students writing an examination at their desks in a large hall',
      },
      {
        src: '/images/girls-computer-centre.jpg',
        alt: 'Secondary school girls standing in rows in front of the Larry Bell Family Computer Centre',
      },
      {
        src: '/images/classroom-block.jpg',
        alt: 'A classroom block with orange pillars beside a paved courtyard and lawn',
      },
    ],
    next: {
      title: 'Have a younger child too?',
      text: "Brothers and sisters can start their schooling at New Beginning African Children's School.",
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
    src: '/images/students-praying.jpg',
    alt: 'Pupils in checked uniforms kneeling and praying during a worship service',
    caption: 'Worship and prayer',
    school: 'Church',
  },
  {
    src: '/images/girl-praying.jpg',
    alt: 'A young pupil standing with eyes closed in prayer during a service',
    caption: 'A moment of prayer',
    school: 'Church',
  },
  {
    src: '/images/visitor-shoe.jpg',
    alt: 'A visitor kneeling to fasten a young pupil’s shoe on the school compound',
    caption: 'Caring for our little ones',
    school: 'Church',
  },
  {
    src: '/images/human-pyramid.jpg',
    alt: 'Three pupils standing on the shoulders of three smiling visitors surrounded by schoolmates',
    caption: 'Fun with visiting friends',
    school: 'Church',
  },
  {
    src: '/images/visitors-team-group.jpg',
    alt: 'Pupils gathered on the field around two seated visitors and a football',
    caption: 'After the match',
    school: 'Church',
  },
  {
    src: '/images/visitor-peace.jpg',
    alt: 'A smiling visitor crouching beside a young pupil, both making a peace sign',
    caption: 'Friends of the school',
    school: 'Church',
  },
  {
    src: '/images/rugby-visitors.jpg',
    alt: 'Pupils and visitors running across the field playing a game of rugby',
    caption: 'Game time with visitors',
    school: 'Church',
  },
  {
    src: '/images/football-visitor.jpg',
    alt: 'Pupils cheering as a visitor plays football with them in front of a school building',
    caption: 'Football on the field',
    school: 'Church',
  },
  {
    src: '/images/dance-visitor.jpg',
    alt: 'A visitor and pupils dancing with arms raised on the school field',
    caption: 'Dancing together',
    school: 'Church',
  },
  {
    src: '/images/visitor-students.jpg',
    alt: 'A visitor standing among a smiling group of pupils on the field',
    caption: 'All smiles',
    school: 'Church',
  },
  {
    src: '/images/piggyback.jpg',
    alt: 'A visitor giving a smiling pupil a piggyback ride',
    caption: 'Piggyback rides',
    school: 'Church',
  },
  {
    src: '/images/visitor-classroom.jpg',
    alt: 'A visitor waving among a classroom full of excited pupils',
    caption: 'A classroom visit',
    school: 'Church',
  },
  {
    src: '/images/visitors-field-group.jpg',
    alt: 'Visitors and pupils posing together on the school field',
    caption: 'Visitors on the field',
    school: 'Church',
  },
  {
    src: '/images/visitors-building-group.jpg',
    alt: 'A team of visitors standing with a large group of pupils in front of a school building',
    caption: 'Welcoming our visitors',
    school: 'Church',
  },
  {
    src: '/images/visitor-little-boy.jpg',
    alt: 'A visitor standing with a young pupil outside a classroom',
    caption: 'A new friend',
    school: 'Church',
  },
  {
    src: '/images/evening-talk.jpg',
    alt: 'A visitor talking with a boy in the evening on the school grounds',
    caption: 'An evening conversation',
    school: 'Church',
  },
  {
    src: '/images/primary-girl-smile.jpg',
    alt: 'A young pupil in a checked dress laughing and looking up',
    caption: 'Pure joy',
    school: 'Primary',
  },
  {
    src: '/images/primary-peace.jpg',
    alt: 'A smiling young pupil in a checked dress making a peace sign against a red wall',
    caption: 'Peace!',
    school: 'Primary',
  },
  {
    src: '/images/primary-boys-tree.jpg',
    alt: 'Primary boys in checked shirts and dark shorts posing around a tree',
    caption: 'Friends under the tree',
    school: 'Primary',
  },
  {
    src: '/images/primary-running.jpg',
    alt: 'A young pupil in sports uniform running across the grass by the playground',
    caption: 'Running and playing',
    school: 'Primary',
  },
  {
    src: '/images/primary-seesaw.jpg',
    alt: 'Young pupils playing on a colourful seesaw',
    caption: 'Playground fun',
    school: 'Primary',
  },
  {
    src: '/images/primary-slide.jpg',
    alt: 'A teacher watching young pupils come down a playground slide',
    caption: 'On the slide',
    school: 'Primary',
  },
  {
    src: '/images/primary-writing.jpg',
    alt: 'A primary pupil writing in his exercise book at a wooden desk',
    caption: 'Hard at work',
    school: 'Primary',
  },
  {
    src: '/images/nursery-dance.jpg',
    alt: 'Young pupils in colourful costumes and face paint performing with their teacher',
    caption: 'A nursery performance',
    school: 'Primary',
  },
  {
    src: '/images/cultural-dance.jpg',
    alt: 'Pupils in traditional skirts performing a cultural dance',
    caption: 'Cultural dance',
    school: 'Primary',
  },
  {
    src: '/images/flags-building.jpg',
    alt: 'A school building with a row of flags on the lawn in front',
    caption: 'Flags flying on campus',
    school: 'Campus',
  },
  {
    src: '/images/girls-home.jpg',
    alt: 'A long building with columns and a red roof labelled Linda Sue Porter Girls Home',
    caption: 'Linda Sue Porter Girls Home',
    school: 'Campus',
  },
  {
    src: '/images/school-grounds.jpg',
    alt: 'Lawns, palm trees and a school building beside the driveway',
    caption: 'The school grounds',
    school: 'Campus',
  },
  {
    src: '/images/primary-classroom.jpg',
    alt: 'Primary pupils in checked uniforms clapping at their desks in a bright classroom',
    caption: 'A lively primary classroom',
    school: 'Primary',
  },
  {
    src: '/images/aerial-campus.jpg',
    alt: 'Aerial view of red-roofed school buildings, lawns and paths surrounded by trees',
    caption: 'The campus from the air',
    school: 'Campus',
  },
  {
    src: '/images/primary-meal.jpg',
    alt: 'Young pupils in checked dresses seated at a table with plates of food',
    caption: 'Meal time for our youngest learners',
    school: 'Primary',
  },
  {
    src: '/images/block-front.jpg',
    alt: 'A long classroom block with orange pillars and blue walls behind a planted lawn',
    caption: 'Classroom block and lawn',
    school: 'Campus',
  },
  {
    src: '/images/primary-choir.jpg',
    alt: 'Primary pupils in checked uniforms standing together and singing in a hall',
    caption: 'Singing together',
    school: 'Primary',
  },
  {
    src: '/images/staff-team.jpg',
    alt: 'A long row of staff standing in front of a school building marked African Children Schools',
    caption: 'Our team',
    school: 'Community',
  },
  {
    src: '/images/aerial-classroom-block.jpg',
    alt: 'Aerial view of an L-shaped classroom block around a lawn, with hills beyond',
    caption: 'Classrooms around the courtyard',
    school: 'Campus',
  },
  {
    src: '/images/primary-lunch-line.jpg',
    alt: 'Primary pupils queuing with plates as lunch is served outdoors',
    caption: 'Lunch is served',
    school: 'Primary',
  },
  {
    src: '/images/courtyard.jpg',
    alt: 'A classroom block with blue doors and orange pillars facing an open courtyard',
    caption: 'The courtyard',
    school: 'Campus',
  },
  {
    src: '/images/visitor.jpg',
    alt: 'A smiling visitor holding a young pupil in a checked school dress',
    caption: 'With a friend of the school',
    school: 'Community',
  },
  {
    src: '/images/aerial-wide.jpg',
    alt: 'Wide aerial view of school buildings and grounds at dusk',
    caption: 'A growing campus',
    school: 'Campus',
  },
  {
    src: '/images/aerial-village.jpg',
    alt: 'Aerial view of school buildings among gardens and banana plants',
    caption: 'Our school from above',
    school: 'Campus',
  },
  {
    src: '/images/reading.jpg',
    alt: 'Secondary students reading together on a bench outside a classroom block',
    caption: 'Reading time outside the classroom block',
    school: 'Secondary',
  },
  {
    src: '/images/primary-reading.jpg',
    alt: 'A primary pupil in a checked uniform reading a textbook at his desk in a yellow classroom',
    caption: 'Reading in class',
    school: 'Primary',
  },
  {
    src: '/images/tailoring.jpg',
    alt: 'A student sewing at a tailoring machine during a hands-on training lesson',
    caption: 'Hands-on training in tailoring',
    school: 'Secondary',
  },
  {
    src: '/images/primary-smile.jpg',
    alt: 'A young primary pupil in a checked uniform smiling at his desk',
    caption: 'A happy learner',
    school: 'Primary',
  },
  {
    src: '/images/campus-buildings.jpg',
    alt: 'Two red-roofed school buildings across a green lawn under a blue sky',
    caption: 'Our campus in Buikwe',
    school: 'Campus',
  },
  {
    src: '/images/fun-day.jpg',
    alt: 'Primary pupils in colourful uniforms watching mascots in bear and rabbit costumes',
    caption: 'A fun day with the mascots',
    school: 'Primary',
  },
  {
    src: '/images/exam-hall.jpg',
    alt: 'Secondary students writing an examination at their desks in a large hall',
    caption: 'Examination time',
    school: 'Secondary',
  },
  {
    src: '/images/primary-girl.jpg',
    alt: 'A primary pupil in a checked dress posing with a hand on her hip',
    caption: 'On a school trip',
    school: 'Primary',
  },
  {
    src: '/images/classroom-block.jpg',
    alt: 'A classroom block with orange pillars beside a paved courtyard and lawn',
    caption: 'Classroom block',
    school: 'Campus',
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
    src: '/images/primary-sports.jpg',
    alt: 'A primary pupil smiling in the school sports uniform of a light blue polo shirt and red shorts',
    caption: 'In sports uniform',
    school: 'Primary',
  },
  {
    src: '/images/computer-centre.jpg',
    alt: 'The Larry Bell Family Computer Centre seen across the lawn, with water tanks in the foreground',
    caption: 'The Larry Bell Family Computer Centre',
    school: 'Campus',
  },
  {
    src: '/images/girls-computer-centre.jpg',
    alt: 'Secondary school girls standing in rows in front of the Larry Bell Family Computer Centre',
    caption: 'Outside the computer centre',
    school: 'Secondary',
  },
  {
    src: '/images/primary-assembly.jpg',
    alt: 'Primary pupils in checked uniforms and face masks lined up on the compound',
    caption: 'Primary pupils lined up on the compound',
    school: 'Primary',
  },
  {
    src: '/images/boys-computer-centre.jpg',
    alt: 'Secondary school boys lined up with arms folded outside the computer centre',
    caption: 'Smart and ready for the term',
    school: 'Secondary',
  },
  {
    src: '/images/primary-lunch.jpg',
    alt: 'A primary pupil smiling and holding a full plate of food',
    caption: 'Lunch time',
    school: 'Primary',
  },
  {
    src: '/images/fun-day-secondary.jpg',
    alt: 'A secondary student smiling between two mascots in bear and panda costumes',
    caption: 'Fun day',
    school: 'Secondary',
  },
  {
    src: '/images/boarding-welcome.jpg',
    alt: 'Students wrapped in new blankets standing beside new mattresses in front of a school building',
    caption: 'New mattresses and blankets for our learners',
    school: 'Campus',
  },
  {
    src: '/images/assembly-flags.jpg',
    alt: 'Secondary students standing in a long row in front of a classroom block',
    caption: 'Students on the school lawn',
    school: 'Secondary',
  },
  {
    src: '/images/staff-students.jpg',
    alt: 'Students standing with teachers and staff on the steps of the school hall',
    caption: 'Students with their teachers',
    school: 'Secondary',
  },
  {
    src: '/images/wheelchair-fitting.jpg',
    alt: 'Visitors and helpers fitting an elderly man into a new wheelchair',
    caption: 'A new wheelchair for a neighbour',
    school: 'Community',
  },
  {
    src: '/images/community-wheelchairs.jpg',
    alt: 'A large group of community members seated in new wheelchairs with visitors standing behind them at the school',
    caption: 'Serving our community: a wheelchair distribution day',
    school: 'Community',
  },
  {
    src: '/images/prize-giving.jpg',
    alt: 'Students in uniform holding wrapped gifts during a school ceremony',
    caption: 'A school celebration',
    school: 'Secondary',
  },
  {
    src: '/images/campus-grounds.jpg',
    alt: 'The school driveway and landscaped grounds under a wide sky',
    caption: 'The school grounds',
    school: 'Campus',
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
