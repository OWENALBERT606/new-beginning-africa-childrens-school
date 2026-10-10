// Answers for the website help assistant. Nothing here is generated: every
// reply is written out below from the facts in site.js, and questions are
// matched to a reply by keywords.
import { schools, site } from './site.js'

const { primary, secondary } = schools
const fee = (label) => secondary.fees.rows.find((row) => row.item.toLowerCase().includes(label))?.amount

const contactLinks = [
  { label: `Call ${site.phones[0].label}`, href: site.phones[0].href },
  { label: 'Contact page', to: '/contact' },
]

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Hello New Beginning, I would like to ask about ',
)}`

export const greeting = {
  text: 'Hello! I am the New Beginning website helper. I can answer questions using the information on this website. Pick a topic below or type your question.',
}

export const fallback = {
  text: 'Sorry, I could not find that on this website. I can only answer from what is published here. Try one of the topics below, or reach the school office directly.',
  links: [{ label: 'Chat on WhatsApp', href: whatsappUrl }, ...contactLinks],
}

export const topics = [
  {
    id: 'admissions',
    chip: 'Admissions',
    keywords: ['admission', 'apply', 'application', 'enrol', 'enroll', 'join', 'register', 'vacanc', 'intake'],
    text: 'Admissions are open for both schools, and you can apply online. Choose the school your child is joining.',
    links: [
      { label: 'Apply — Primary School', href: primary.applyUrl },
      { label: 'Apply — Secondary School', href: secondary.applyUrl },
      { label: 'How admissions work', to: '/admissions' },
    ],
  },
  {
    id: 'fees',
    chip: 'School fees',
    keywords: ['fee', 'cost', 'price', 'pay', 'tuition', 'how much', 'money', 'uniform', 'shilling'],
    text: `Secondary school fees (S.1 – S.3), in Uganda shillings: ${secondary.fees.rows
      .map((row) => `${row.item} ${row.amount}/=`)
      .join('; ')}. A mattress and blanket are provided free at school. Primary school fees are not published on this website, so please ask the office.`,
    links: [{ label: 'Secondary school page', to: '/secondary' }, ...contactLinks],
  },
  {
    id: 'location',
    chip: 'Location',
    keywords: ['where', 'location', 'located', 'address', 'direction', 'map', 'find you', 'buikwe', 'village'],
    text: `We are at ${site.location}. Our postal address is ${site.address}.`,
    links: [{ label: 'Contact page', to: '/contact' }],
  },
  {
    id: 'contact',
    chip: 'Contacts',
    keywords: ['contact', 'phone', 'call', 'number', 'email', 'mail', 'reach', 'talk', 'office', 'whatsapp', 'speak'],
    text: `School office: ${site.phones.map((phone) => phone.label).join(' or ')}, ${site.email}. Secondary school: ${secondary.contact.phones
      .map((phone) => phone.label)
      .join(', ')}, ${secondary.contact.email}.`,
    links: [{ label: 'Chat on WhatsApp', href: whatsappUrl }, ...contactLinks],
  },
  {
    id: 'classes',
    chip: 'Classes',
    keywords: ['class', 'level', 'grade', 'senior', 's1', 's.1', 'p1', 'p.1', 'p7', 'primary one', 'which year', 'age'],
    text: `The primary school (${primary.name}) takes pupils from ${primary.levels}. The secondary school (${secondary.name}) offers ${secondary.levels}.`,
    links: [
      { label: 'Primary school', to: '/primary' },
      { label: 'Secondary school', to: '/secondary' },
    ],
  },
  {
    id: 'boarding',
    chip: 'Boarding',
    keywords: ['boarding', 'boarder', 'day school', 'day student', 'day scholar', 'dorm', 'hostel', 'mattress', 'blanket', 'sleep'],
    text: `The secondary school is an inclusive day and boarding school. Per term, boarding is ${fee('boarding')}/= and day students pay ${fee('day')}/=. A mattress and blanket are provided free at school.`,
    links: [{ label: 'Secondary school page', to: '/secondary' }],
  },
  {
    id: 'subjects',
    keywords: ['subject', 'learn', 'teach', 'curriculum', 'course', 'study', 'tailoring', 'agriculture', 'ict', 'computer', 'science', 'vocational', 'skill', 'laboratory'],
    text: `Primary pupils learn ${primary.subjects.join(', ')}. Secondary students learn ${secondary.subjects.join(', ')}.`,
    links: [
      { label: 'Primary school', to: '/primary' },
      { label: 'Secondary school', to: '/secondary' },
    ],
  },
  {
    id: 'motto',
    keywords: ['motto', 'slogan'],
    text: `Primary school motto: “${primary.motto}”. Secondary school motto: “${secondary.motto}”.`,
  },
  {
    id: 'mission',
    keywords: ['mission', 'vision', 'value', 'stand for', 'purpose'],
    text: `Mission: ${secondary.mission} Vision: ${secondary.vision} Core values: ${secondary.coreValues.join(', ')}.`,
    links: [{ label: 'School profile', to: '/about/profile' }],
  },
  {
    id: 'history',
    keywords: ['history', 'founder', 'founded', 'started', 'began', 'owner', 'bishop', 'pastor', 'patron', 'when was', 'who started', 'story'],
    text: `${secondary.name} – Buikwe was started in 2025 by Bishop Edward Ssemango and Pastor Eva Nabaggala Ssemango, under the patronage of Dr. Peter Nalos.`,
    links: [{ label: 'Our history', to: '/about/history' }],
  },
  {
    id: 'ranking',
    keywords: ['rank', 'best', 'top school', 'performance', 'ple', 'result', 'position', 'weekend vision', 'newspaper'],
    text: `${primary.name} was listed first in Buikwe District in Weekend Vision’s “Top schools per district” table, published 31 January – 1 February 2026.`,
    links: [{ label: 'Primary school', to: '/primary' }],
  },
  {
    id: 'theme',
    keywords: ['theme', 'rope', 'cords', 'ecclesiastes'],
    text: `Our ${site.theme.year} theme is “${site.theme.text}” (${site.theme.reference}). ${site.theme.call}`,
  },
  {
    id: 'church',
    chip: 'Church',
    keywords: ['church', 'faith', 'christian', 'religio', 'denomination', 'pray', 'worship', 'service time', 'sunday', 'born again', 'muslim', 'catholic'],
    text: 'Our schools are built on a born-again Christian foundation and embrace all religious denominations. Church service times are not published on this website yet, so please ask the office.',
    links: [{ label: 'Church page', to: '/church' }, ...contactLinks],
  },
  {
    id: 'gallery',
    keywords: ['photo', 'picture', 'gallery', 'image', 'video', 'pics'],
    text: 'You can see photos of our pupils, students, staff and campus in the gallery.',
    links: [{ label: 'Open the gallery', to: '/gallery' }],
  },
  {
    id: 'visit',
    keywords: ['visit', 'tour', 'come', 'see the school', 'appointment', 'open day'],
    text: 'You are welcome to visit. Please call or message the office to arrange a time.',
    links: [{ label: 'Chat on WhatsApp', href: whatsappUrl }, ...contactLinks],
  },
  {
    id: 'donate',
    chip: 'Donate',
    keywords: ['donat', 'sponsor', 'support the school', 'give', 'giving', 'contribut', 'help the school', 'gift', 'charity', 'fund'],
    text: 'Thank you for wanting to support our learners. Online giving is not set up on this website yet, so the school office shares giving details directly.',
    links: [{ label: 'Donate page', to: '/donate' }, { label: 'Chat on WhatsApp', href: whatsappUrl }, ...contactLinks],
  },
  {
    id: 'membership',
    keywords: ['african children schools', 'member', 'affiliat', 'network'],
    text: `${site.name}: ${site.membership.charAt(0).toLowerCase()}${site.membership.slice(1)}.`,
  },
  {
    id: 'people',
    keywords: ['anthem', 'principal', 'head teacher', 'headteacher', 'headmaster', 'director', 'staff', 'teacher', 'administration'],
    text: 'That information is still being prepared and is not on the website yet. Please ask the school office.',
    links: [{ label: 'Administration', to: '/about/administration' }, ...contactLinks],
  },
  {
    id: 'dates',
    keywords: ['term', 'holiday', 'calendar', 'opening', 'reporting', 'dates', 'when do', 'timetable', 'time table'],
    text: 'Term dates are not published on this website yet. Please ask the school office.',
    links: [{ label: 'Chat on WhatsApp', href: whatsappUrl }, ...contactLinks],
  },
  {
    id: 'hello',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'gyebale'],
    text: 'Hello! What would you like to know about New Beginning?',
  },
  {
    id: 'thanks',
    keywords: ['thank', 'webale', 'okay', 'ok'],
    text: 'You are welcome. Is there anything else you would like to know?',
  },
]

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const matchers = topics.map((topic) => ({
  topic,
  // \b at the start only, so "fee" also matches "fees" but "ict" does not match "district".
  tests: topic.keywords.map((keyword) => ({ pattern: new RegExp(`\\b${escape(keyword)}`, 'i'), weight: keyword.length })),
}))

// Returns the reply whose keywords best match the question, or the fallback.
export function findAnswer(question) {
  let best = null
  let bestScore = 0
  for (const { topic, tests } of matchers) {
    const score = tests.reduce((total, test) => (test.pattern.test(question) ? total + test.weight : total), 0)
    if (score > bestScore) {
      best = topic
      bestScore = score
    }
  }
  return best ?? fallback
}
