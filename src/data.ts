import {
  Heart, Trees, Stethoscope, UtensilsCrossed, Palette, Bus, Users, Home,
  Activity, Pill, Brain, HeartPulse, ClipboardCheck, Apple,
  BedDouble, Wind, Tv, Wifi, Sparkles, Shirt, Brush,
  Music, Film, Flame, PartyPopper, GraduationCap,
  Mountain, Bird, Sailboat, Tractor, MapPin, Tent, Sunrise, Bike, Fish,
  Plane, Ship, Globe2, Camera, CheckCircle2, Star, Award, Gift, Train,
  Droplets, Flower2, BookOpen, TreePine, Waves, Leaf,
  Smartphone, Bell, Watch, Mic, FileText, ScanFace, Satellite, Lightbulb,
  Cake, HeartHandshake, Trophy, Mic2, BookMarked,
  Church, HandHeart, Smile, Cat, Dog, Rabbit,
  Image, Calendar, Phone, ShieldAlert,
  Sun, CloudRain, Snowflake, Compass,
  QrCode, Bot, Video, Mail,
  ChefHat, Sprout, Briefcase, Recycle, Car,
  Coffee, Gamepad2, Puzzle, Clapperboard,
  Hammer, Zap, CableCar,
  Moon,
} from 'lucide-react';

export const navLinks = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Hero', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Why Choose Us', href: '/#why-choose-us' },
      { label: 'Life at Second Innings', href: '/#life' },
      { label: 'Signature Experiences', href: '/#signature-experiences' },
      { label: 'Testimonials', href: '/#testimonials' },
    ],
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
    children: [
      { label: 'Dream Board', href: '/lifestyle#dream-board' },
      { label: 'Memory Lane', href: '/lifestyle#memory-lane' },
      { label: 'Story Studio', href: '/lifestyle#story-studio' },
      { label: 'Family Tree', href: '/lifestyle#family-tree' },
      { label: 'Memory Book', href: '/lifestyle#memory-book' },
      { label: 'Love & Companionship', href: '/lifestyle#love' },
      { label: 'Grandkids Experience', href: '/lifestyle#grandkids' },
      { label: 'Legacy Program', href: '/lifestyle#legacy' },
    ],
  },
  {
    label: 'Wellness',
    href: '/wellness',
    children: [
      { label: 'Health Ecosystem', href: '/wellness#health' },
      { label: 'Emotional Wellness', href: '/wellness#emotional' },
      { label: 'Brain Wellness', href: '/wellness#brain' },
      { label: 'Wellness Center', href: '/wellness#wellness-center' },
      { label: 'Pet Therapy', href: '/wellness#pets' },
      { label: 'Spiritual', href: '/wellness#spiritual' },
      { label: 'Travel', href: '/wellness#travel' },
    ],
  },
  {
    label: 'Experiences',
    href: '/experiences',
    children: [
      { label: 'Entertainment', href: '/experiences#entertainment' },
      { label: 'Adventures', href: '/experiences#adventures' },
      { label: 'Safe Adventure', href: '/experiences#safe-adventure' },
      { label: 'Bucket List', href: '/experiences#bucket-list' },
      { label: 'Around India Club', href: '/experiences#india-club' },
      { label: 'Celebrity Visits', href: '/experiences#celebrity' },
      { label: 'Night Experiences', href: '/experiences#night' },
      { label: 'Food Festival', href: '/experiences#food-festival' },
      { label: 'Gaming & Workshop', href: '/experiences#gaming' },
      { label: 'Memory Scanner', href: '/experiences#memory-scanner' },
      { label: 'Daily Schedule', href: '/experiences#daily-schedule' },
      { label: 'Nature', href: '/experiences#nature' },
      { label: 'Signature Experiences', href: '/experiences#signature-experiences' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      { label: 'Family Portal', href: '/community#family' },
      { label: 'Family Ecosystem', href: '/community#family-ecosystem' },
      { label: 'Technology', href: '/community#technology' },
      { label: 'Community Events', href: '/community#community-events' },
      { label: 'Hall of Legends', href: '/community#legends' },
      { label: 'Memory Wall', href: '/community#memory-wall' },
      { label: 'Creative Studios', href: '/community#creative-studios' },
      { label: 'Social Impact', href: '/community#social-impact' },
      { label: 'Contribution', href: '/community#contribution' },
      { label: 'Sustainability', href: '/community#sustainability' },
      { label: 'Rewards', href: '/community#rewards' },
      { label: 'Events Calendar', href: '/community#events' },
      { label: 'Testimonials', href: '/community#testimonials' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const whyChooseUs = [
  { icon: Heart, title: 'Dignified Living', desc: 'Every resident is treated with respect, autonomy, and grace.' },
  { icon: Trees, title: 'Nature Lifestyle', desc: 'Surrounded by gardens, lakes, and forest trails.' },
  { icon: Stethoscope, title: '24×7 Medical Care', desc: 'Doctors, nurses, and emergency response always on call.' },
  { icon: UtensilsCrossed, title: 'Healthy Meals', desc: 'Personalized, nutritionist-designed dining for every diet.' },
  { icon: Palette, title: 'Daily Activities', desc: 'From painting to poetry, every day brings a new joy.' },
  { icon: Bus, title: 'Weekly Trips', desc: 'Curated outings to temples, hills, heritage sites, and more.' },
  { icon: Users, title: 'Family Connected', desc: 'A dedicated app keeps families close, always.' },
  { icon: Home, title: 'Luxury Rooms', desc: 'Private suites, garden views, and smart-home comfort.' },
];

export const healthcareServices = [
  { icon: Stethoscope, label: '24×7 Doctors' },
  { icon: HeartPulse, label: 'Nurse Support' },
  { icon: ShieldAlert, label: 'Emergency Response' },
  { icon: Activity, label: 'Physiotherapy' },
  { icon: Brain, label: 'Mental Wellness' },
  { icon: Pill, label: 'Medication Management' },
  { icon: HeartPulse, label: 'Health Monitoring' },
  { icon: ClipboardCheck, label: 'Monthly Checkups' },
  { icon: Apple, label: 'Nutrition Planning' },
];

export const accommodationFeatures = [
  { icon: BedDouble, label: 'Private Rooms' },
  { icon: Users, label: 'Shared Rooms' },
  { icon: Sparkles, label: 'Luxury Suites' },
  { icon: Trees, label: 'Garden View Rooms' },
  { icon: Wind, label: 'Balcony Rooms' },
  { icon: Brush, label: 'Housekeeping' },
  { icon: Shirt, label: 'Laundry' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Wifi, label: 'WiFi' },
];

export const diningOptions = [
  'Personalized Diet', 'Vegetarian', 'Non-Vegetarian', 'Diabetes Diet',
  'Low Salt Meals', 'Evening Snacks', 'Fresh Fruits', 'Organic Vegetables', 'Celebration Dinners',
];

export const experiencePrograms = [
  { icon: Music, title: 'Music Evenings', desc: 'Live singing under the stars with fellow music lovers.' },
  { icon: Film, title: 'Movie Nights', desc: 'Classic cinema screenings with popcorn and friends.' },
  { icon: Flame, title: 'Campfire Nights', desc: 'Storytelling, tea, and music around a warm fire.' },
  { icon: PartyPopper, title: 'Dance Evenings', desc: 'Old Bollywood, retro night, garba, and couple dances.' },
  { icon: PartyPopper, title: 'Festival Celebrations', desc: 'Diwali, Holi, Christmas, Eid, Lohri, and every birthday month.' },
  { icon: Brush, title: 'Hobby Club', desc: 'Painting, photography, writing, gardening, poetry, chess, yoga.' },
  { icon: GraduationCap, title: 'Skill Learning', desc: 'Smartphones, digital payments, English, computers, AI for seniors.' },
];

export const adventurePrograms = [
  { icon: Mountain, title: 'Easy Nature Trek' },
  { icon: Bird, title: 'Bird Watching' },
  { icon: Sailboat, title: 'Boating' },
  { icon: Tractor, title: 'Farm Visit' },
  { icon: MapPin, title: 'Hill Picnic' },
  { icon: Tent, title: 'Camping' },
  { icon: Sunrise, title: 'Sunrise Walk' },
  { icon: MapPin, title: 'Temple Tour' },
  { icon: Award, title: 'Wildlife Safari' },
  { icon: Bike, title: 'Cycling' },
  { icon: Fish, title: 'Fishing' },
  { icon: Sailboat, title: 'Riverside Picnic' },
  { icon: MapPin, title: 'Heritage Walk' },
  { icon: Flower2, title: 'Gardening Day' },
];

export const premiumAdventures = [
  { icon: Flame, title: 'Hot Air Balloon', tag: 'Premium' },
  { icon: Plane, title: 'Helicopter Joy Ride', tag: 'Premium' },
  { icon: Ship, title: 'Cruise Tour', tag: 'Premium' },
  { icon: Globe2, title: 'International Senior Trip', tag: 'Premium', sub: 'Japan · Singapore · Dubai · Bali' },
];

export const bucketList = [
  'Fly in an airplane', 'Ride a horse', 'See snowfall', 'Visit the Taj Mahal',
  'Ride a train through the mountains', 'Learn the guitar', 'Plant 100 trees',
  'Meet an old friend', 'Dance again', 'Watch the sunrise from a hilltop',
  'Write a letter to a grandchild', 'Learn to paint',
];

export const dailySchedule = [
  { time: '6:00 AM', activity: 'Morning Yoga', icon: Flower2 },
  { time: '7:30 AM', activity: 'Breakfast', icon: UtensilsCrossed },
  { time: '8:30 AM', activity: 'Nature Walk', icon: Trees },
  { time: '10:00 AM', activity: 'Reading Club', icon: BookOpen },
  { time: '11:30 AM', activity: 'Music & Hobby', icon: Music },
  { time: '1:00 PM', activity: 'Lunch', icon: UtensilsCrossed },
  { time: '2:00 PM', activity: 'Rest', icon: BedDouble },
  { time: '4:00 PM', activity: 'Games & Tea', icon: PartyPopper },
  { time: '5:30 PM', activity: 'Evening Garden', icon: Leaf },
  { time: '7:00 PM', activity: 'Movie / Cultural', icon: Film },
  { time: '8:30 PM', activity: 'Dinner', icon: UtensilsCrossed },
  { time: '9:30 PM', activity: 'Meditation', icon: Brain },
];

export const wellnessServices = [
  { icon: Sparkles, label: 'Spa' },
  { icon: HeartHandshake, label: 'Massage' },
  { icon: Brain, label: 'Meditation' },
  { icon: Droplets, label: 'Hydro Therapy' },
  { icon: Flame, label: 'Steam' },
  { icon: Flower2, label: 'Yoga' },
  { icon: Activity, label: 'Acupressure' },
  { icon: HeartHandshake, label: 'Counselling' },
];

export const natureFeatures = [
  { icon: Tractor, label: 'Organic Farm' },
  { icon: Apple, label: 'Fruit Garden' },
  { icon: Flower2, label: 'Flower Garden' },
  { icon: Bird, label: 'Butterfly Garden' },
  { icon: MapPin, label: 'Walking Trails' },
  { icon: Waves, label: 'Lake' },
  { icon: Droplets, label: 'Pond' },
  { icon: TreePine, label: 'Meditation Forest' },
  { icon: BookOpen, label: 'Open Library' },
  { icon: Home, label: 'Gazebo' },
  { icon: Bird, label: 'Bird Feeding Area' },
];

export const familyFeatures = [
  { icon: Smartphone, label: 'Family Mobile App' },
  { icon: Image, label: 'View Photos' },
  { icon: FileText, label: 'Health Reports' },
  { icon: Phone, label: 'Video Call' },
  { icon: Calendar, label: 'Book a Visit' },
  { icon: Bell, label: 'Emergency Alerts' },
  { icon: Pill, label: 'Medicine Updates' },
  { icon: Calendar, label: 'Event Calendar' },
  { icon: Cake, label: 'Birthday Reminders' },
  { icon: Gift, label: 'Gift Delivery' },
];

export const technologyFeatures = [
  { icon: Brain, label: 'AI Health Monitoring' },
  { icon: Bell, label: 'Smart Emergency Button' },
  { icon: Watch, label: 'Wearable Tracking' },
  { icon: Mic, label: 'Voice Assistant' },
  { icon: Pill, label: 'Medicine Reminder' },
  { icon: FileText, label: 'Digital Health Records' },
  { icon: ScanFace, label: 'Face Recognition Entry' },
  { icon: Satellite, label: 'GPS Tracking' },
  { icon: Lightbulb, label: 'Smart Room Controls' },
];

export const communityEvents = [
  { icon: Cake, label: 'Birthday Celebration' },
  { icon: Heart, label: 'Anniversary Celebration' },
  { icon: Trophy, label: 'Talent Show' },
  { icon: Mic2, label: 'Poetry Night' },
  { icon: Star, label: 'Senior Fashion Show' },
  { icon: UtensilsCrossed, label: 'Cooking Competition' },
  { icon: Flower2, label: 'Gardening Competition' },
  { icon: Palette, label: 'Painting Exhibition' },
  { icon: BookMarked, label: 'Book Club' },
  { icon: Award, label: 'Chess Tournament' },
  { icon: Mic2, label: 'Karaoke Night' },
];

export const spiritualFeatures = [
  { icon: Church, label: 'Temple' },
  { icon: Brain, label: 'Meditation Hall' },
  { icon: HandHeart, label: 'Prayer Room' },
  { icon: Music, label: 'Bhajan Evening' },
  { icon: Mic, label: 'Spiritual Talks' },
  { icon: HandHeart, label: 'Festival Prayer' },
];

export const emotionalWellness = [
  { icon: HeartHandshake, label: 'Life Coach' },
  { icon: HeartHandshake, label: 'Counsellor' },
  { icon: Brain, label: 'Memory Therapy' },
  { icon: Smile, label: 'Laughing Club' },
  { icon: Users, label: 'Friendship Circle' },
  { icon: Users, label: 'Group Discussion' },
  { icon: Cat, label: 'Pet Therapy' },
];

export const petTherapy = [
  { icon: Dog, label: 'Dogs' },
  { icon: Cat, label: 'Cats' },
  { icon: Rabbit, label: 'Rabbits' },
  { icon: Bird, label: 'Birds' },
  { icon: Fish, label: 'Fish Aquarium' },
];

export const premiumExperiences = [
  { icon: Sunrise, title: 'Sunrise Tea Point', desc: 'Begin each day with chai at a viewpoint overlooking the valley.' },
  { icon: TreePine, title: 'Forest Meditation Walks', desc: 'Guided silent walks through our meditation forest.' },
  { icon: Train, title: 'Heritage Train Journeys', desc: 'Nostalgic rail trips through mountain scenery.' },
  { icon: Tent, title: 'Nature Camping', desc: 'Senior-friendly camping under a sky full of stars.' },
  { icon: Sailboat, title: 'Lake Boating', desc: 'Gentle boat rides on our private lake at golden hour.' },
  { icon: Flame, title: 'Hot Air Balloon', desc: 'Float above the hills at sunrise — a memory forever.' },
  { icon: Plane, title: 'Dream Destination Trip', desc: 'One annual trip chosen by residents, planned together.' },
  { icon: Droplets, title: 'First Rain Celebration', desc: 'When the monsoon arrives, we dance in it.' },
  { icon: Cake, title: 'Birthday Under the Stars', desc: 'Every birthday celebrated outdoors with live music.' },
  { icon: PartyPopper, title: 'Retro Bollywood Nights', desc: 'Costumes, classics, and dancing to golden-era songs.' },
  { icon: Camera, title: 'Family Photoshoots', desc: 'Professional portraits with three generations together.' },
  { icon: Flower2, title: 'Cherry Blossom Tour', desc: 'Seasonal trips to see blossoms in full bloom.' },
  { icon: Star, title: 'Stargazing Nights', desc: 'Telescope evenings with an astronomy guide.' },
  { icon: UtensilsCrossed, title: 'Family Picnic Weekends', desc: 'Curated picnic baskets for visiting families.' },
  { icon: Leaf, title: 'Plant a Tree, Leave a Legacy', desc: 'Each resident plants a tree that grows in their name.' },
  { icon: CheckCircle2, title: 'Fulfill My Dream', desc: 'Our signature bucket-list initiative — dreams come true.' },
  { icon: Users, title: 'Grandparents Day', desc: 'Local school children visit for a day of shared joy.' },
  { icon: BookOpen, title: 'Life Stories Café', desc: 'Residents share inspiring stories over tea, every week.' },
];

export const galleryCategories = [
  'Nature', 'Rooms', 'Dining', 'Yoga', 'Adventure', 'Festivals', 'Travel', 'Birthdays', 'Family',
];

export const upcomingEvents = [
  { date: 'Jul 5', title: 'Sunrise Yoga Camp', category: 'Wellness' },
  { date: 'Jul 12', title: 'Free Medical Camp', category: 'Health' },
  { date: 'Jul 18', title: 'Retro Music Night', category: 'Music' },
  { date: 'Jul 22', title: 'Hilltop Picnic', category: 'Adventure' },
  { date: 'Jul 27', title: 'Temple Heritage Visit', category: 'Spiritual' },
  { date: 'Aug 2', title: 'Painting Workshop', category: 'Hobby' },
  { date: 'Aug 8', title: 'Birthday Celebration', category: 'Community' },
];

export const testimonials = [
  {
    name: 'Mr. Ramesh Iyer',
    age: 68,
    text: 'I came here thinking my best years were behind me. Six months later, I learned to paint, went on a trek, and made twelve new friends. This place gave me my life back.',
    role: 'Resident since 2023',
  },
  {
    name: 'Mrs. Lakshmi Nair',
    age: 71,
    text: 'My children live abroad and I was lonely. Now I have a full calendar — music evenings, gardening, and video calls with my grandchildren every week. I am happy again.',
    role: 'Resident since 2022',
  },
  {
    name: 'Dr. Suresh Patil',
    age: 74,
    text: 'As a retired doctor, I was particular about healthcare. The 24×7 medical team here is exceptional. I feel safe, respected, and genuinely cared for.',
    role: 'Resident since 2021',
  },
  {
    name: 'The Mehta Family',
    age: 0,
    text: 'The family app gives us peace of mind. We see photos, health updates, and can video call anytime. Mom is happier than she has been in years.',
    role: 'Family of a resident',
  },
];

export const pricingPlans = [
  {
    name: 'Garden Private',
    price: '₹45,000',
    period: '/month',
    desc: 'A private garden-view room with all core services.',
    features: ['Private room with garden view', 'All meals & snacks', '24×7 medical support', 'Daily activities', 'Housekeeping & laundry', 'Family app access'],
    highlighted: false,
  },
  {
    name: 'Premium Suite',
    price: '₹65,000',
    period: '/month',
    desc: 'A spacious suite with balcony and premium experiences.',
    features: ['Everything in Garden Private', 'Luxury suite with balcony', 'Priority adventure programs', 'Wellness center access', 'Personalized diet plan', 'Monthly health checkup', 'Birthday under the stars'],
    highlighted: true,
  },
  {
    name: 'Heritage Villa',
    price: '₹95,000',
    period: '/month',
    desc: 'An independent villa with full-service living.',
    features: ['Everything in Premium Suite', 'Independent villa', 'Private garden', 'Dedicated care manager', 'All premium experiences included', 'Annual dream destination trip', 'Legacy program & memory wall'],
    highlighted: false,
  },
];

export const faqs = [
  {
    q: 'Is this an old-age home?',
    a: 'No. Second Innings House is a premium senior living community — a retirement resort, wellness retreat, and vibrant community in one. Residents come to live fully, not to wait. They travel, learn, celebrate, and create new memories every day.',
  },
  {
    q: 'What ages do you accept?',
    a: 'We welcome residents aged 55 and above. Couples are welcome, and we accommodate a range of independence levels — from fully independent living to assisted care.',
  },
  {
    q: 'Can my family visit anytime?',
    a: 'Yes. Families can book visits through our app, join weekend picnics, attend celebrations, and video call anytime. We believe family connection is essential to happiness.',
  },
  {
    q: 'What if there is a medical emergency?',
    a: 'We have 24×7 doctors and nurses on site, an emergency response team, ambulance access, and hospital tie-ups. A one-tap emergency button is available in every room and via wearable devices.',
  },
  {
    q: 'Do residents really go on adventures?',
    a: 'Absolutely. From nature treks and bird watching to hot air balloon rides and international trips, our adventure programs are designed to be senior-friendly and deeply fulfilling. Every dream on a resident\'s bucket list is something we actively help complete.',
  },
  {
    q: 'What is the Bucket List Program?',
    a: 'Every resident writes their "Dream List" when they join — things they always wanted to do. Our staff works with them to make each dream come true, from riding a train through the mountains to seeing snowfall for the first time.',
  },
  {
    q: 'Can I try it before committing?',
    a: 'Yes. We offer a trial stay of 3–7 days so you can experience life here firsthand. Book a visit through our website or contact us to arrange one.',
  },
  {
    q: 'What dietary options are available?',
    a: 'Our kitchen prepares personalized meals for every need — vegetarian, non-vegetarian, diabetic, low-salt, and more. All meals are nutritionist-designed and use fresh, often organic ingredients.',
  },
];

// ===== ECOSYSTEM EXPANSION DATA =====

export const dreamBoardItems = [
  { text: 'See snowfall', icon: Snowflake, done: true },
  { text: 'Ride a horse', icon: Mountain, done: true },
  { text: 'Visit Kashmir', icon: MapPin, done: false },
  { text: 'Learn guitar', icon: Music, done: false },
  { text: 'Meet old school friends', icon: Users, done: true },
  { text: 'Plant 100 trees', icon: TreePine, done: false },
  { text: 'Fly in a helicopter', icon: Plane, done: false },
  { text: 'Go on a cruise', icon: Ship, done: false },
];

export const memoryLaneEvents = [
  { year: '1965', title: 'Marriage', desc: 'The day two lives became one.', img: 'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { year: '1970', title: 'First Job', desc: 'The beginning of a long, proud career.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { year: '1975', title: 'First Child', desc: 'The day everything changed.', img: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { year: '2010', title: 'Retirement', desc: 'A career completed. A new chapter waiting.', img: 'https://images.pexels.com/photos/3387156/pexels-photo-3387156.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { year: 'Today', title: 'Second Innings', desc: 'Where the most beautiful chapter begins.', img: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const storyStudioThemes = [
  { title: 'My Journey', desc: 'The full story — from childhood to today.', icon: Compass },
  { title: 'My Love Story', desc: 'How you met, fell in love, and built a life.', icon: Heart },
  { title: 'Life Lessons', desc: 'Wisdom you want your grandchildren to carry.', icon: BookOpen },
  { title: 'Army Experience', desc: 'Service, sacrifice, and pride.', icon: ShieldAlert },
  { title: 'Business Journey', desc: 'The risks, the wins, and what you learned.', icon: Briefcase },
];

export const familyTreeData = {
  name: 'Ramesh Iyer',
  role: 'Grandfather',
  children: [
    {
      name: 'Anil Iyer',
      role: 'Son',
      children: [
        { name: 'Aarav', role: 'Grandson' },
        { name: 'Diya', role: 'Granddaughter' },
      ],
    },
    {
      name: 'Priya Sharma',
      role: 'Daughter',
      children: [{ name: 'Kabir', role: 'Grandson' }],
    },
  ],
};

export const entertainmentFeatures = [
  { icon: Film, title: 'Retro Cinema', desc: 'Old Bollywood, black & white classics, and golden-era songs on the big screen.', img: 'https://images.pexels.com/photos/2526255/pexels-photo-2526255.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Music, title: 'Music Room', desc: 'Harmonium, tabla, piano, and karaoke — make music alone or together.', img: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: PartyPopper, title: 'Dance Hall', desc: 'Retro nights, garba, couple dances — the floor is always open.', img: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Star, title: 'Open Air Theatre', desc: 'Movies under the stars, live music, stand-up, and storytelling.', img: 'https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const hobbyMarketItems = [
  { icon: Palette, label: 'Paintings' },
  { icon: Sparkles, label: 'Craft' },
  { icon: Shirt, label: 'Knitting' },
  { icon: BookOpen, label: 'Poetry Books' },
  { icon: UtensilsCrossed, label: 'Home-made Food' },
  { icon: Camera, label: 'Photography' },
];

export const expandedNatureFeatures = [
  { icon: Flower2, title: 'Butterfly Garden', desc: 'A special flower area designed to attract butterflies — pure joy to walk through.', img: 'https://images.pexels.com/photos/3601057/pexels-photo-3601057.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: TreePine, title: 'Meditation Forest', desc: 'A silent zone among the trees — for reflection, breathing, and stillness.', img: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Apple, title: 'Fruit Garden', desc: 'Residents pick fresh, seasonal fruits straight from the trees.', img: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Sprout, title: 'Organic Farming', desc: 'Residents grow their own vegetables — soil, seeds, and satisfaction.', img: 'https://images.pexels.com/photos/2255968/pexels-photo-2255968.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Leaf, title: 'Herbal Garden', desc: 'Ayurvedic and medicinal plants, grown and used in our kitchen and wellness center.', img: 'https://images.pexels.com/photos/1683822/pexels-photo-1683822.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Bird, title: 'Bird Watching Tower', desc: 'A morning activity — spot and identify local and migratory birds.', img: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Droplets, title: 'Lake Deck', desc: 'Tea, reading, and meditation by the water — the most peaceful spot on campus.', img: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Sunrise, title: 'Sunset Point', desc: 'The evening gathering spot — where the day ends with beauty and friends.', img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const emotionalWellnessExpanded = [
  { icon: Users, title: 'Friendship Match', desc: 'AI suggests friends with the same interests — chess, travel, music, poetry. Because loneliness is the real illness of aging.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Cake, title: 'Birthday Surprise Planner', desc: 'Families book surprises — cake, decoration, video messages, and live music. Every birthday is unforgettable.', img: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: HeartHandshake, title: 'Grandparent Adoption', desc: 'Nearby schools visit weekly. Children read, play, and share stories with residents — joy flows both ways.', img: 'https://images.pexels.com/photos/8430352/pexels-photo-8430352.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Cat, title: 'Pet Companion', desc: 'Residents can adopt a dog, cat, rabbit, bird, or fish. Unconditional love, every single day.', img: 'https://images.pexels.com/photos/4060141/pexels-photo-4060141.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const smileMeterOptions = [
  { emoji: '😊', label: 'Happy', color: 'forest' },
  { emoji: '😐', label: 'Normal', color: 'sand' },
  { emoji: '😞', label: 'Sad', color: 'gold' },
];

export const healthFeatures = [
  { icon: HeartPulse, title: 'Smart Health Dashboard', desc: 'Heart rate, BP, sugar, weight, medicine, and doctor visits — all in one place, tracked daily.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Bell, title: 'Medicine Reminder', desc: 'Phone, watch, and voice assistant reminders — never miss a dose again.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Activity, title: 'Fall Detection', desc: 'Wearable sensors alert staff instantly if a fall is detected — help in seconds.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: ShieldAlert, title: 'Emergency SOS Watch', desc: 'One button connects to doctor, staff, and family simultaneously — 24×7.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Brain, title: 'AI Health Prediction', desc: 'Detects poor sleep, low activity, stress, and high BP risk — before it becomes a problem.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: FileText, title: 'Medical History', desc: 'Complete digital records — accessible to doctors, staff, and family anytime.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const travelFeatures = [
  { icon: Globe2, title: 'Senior World Tour', desc: 'Japan, Dubai, Bali, Europe, Kerala, Kashmir — curated international and domestic trips.', img: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: UtensilsCrossed, title: 'Weekend Picnic', desc: 'Every Saturday — a new spot, a new view, a new memory.', img: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Church, title: 'Spiritual Tours', desc: 'Vaishno Devi, Haridwar, Rishikesh, Golden Temple, Tirupati — journeys of the soul.', img: 'https://images.pexels.com/photos/8473089/pexels-photo-8473089.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Ship, title: 'Cruise Experience', desc: 'An annual cruise trip — the sea, the sun, and the freedom of the open water.', img: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const diningExpanded = [
  { icon: ChefHat, title: 'Live Kitchen', desc: 'Residents watch their meals being prepared — fresh, transparent, and interactive.', img: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: UtensilsCrossed, title: 'Family Dinner Booking', desc: 'Families reserve a table and dine with their loved ones — home-cooked, restaurant-served.', img: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Cake, title: 'Birthday Dinner', desc: 'Private dining for special days — personalized menu, decoration, and cake.', img: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Globe2, title: 'Regional Food Week', desc: 'Punjab, Gujarat, South India, Bengal, Rajasthan — a new regional cuisine every week.', img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const learningFeatures = [
  { icon: GraduationCap, title: 'University for Seniors', desc: 'Painting, AI, smartphone basics, photography, cooking, English, and music — it\'s never too late to learn.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Mic, title: 'Guest Speakers', desc: 'Doctors, authors, scientists, army officers, and celebrities — inspiring talks every month.', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: BookOpen, title: 'Reading Club', desc: 'Books, newspapers, and audiobooks — shared reading and lively discussion.', img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const digitalFeatures = [
  { icon: Smartphone, title: 'Resident App', desc: 'Activities, health, events, food, trips, and photos — everything in one app.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Users, title: 'Family App', desc: 'Live updates, photos, medicine tracking, health reports, and video calls — peace of mind for families.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: QrCode, title: 'QR Room', desc: 'Every room has a QR code. Scan to see resident profile, health, medicine, and emergency contacts.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Mic, title: 'Voice Assistant', desc: '"Turn on lights." "Call my daughter." "Today\'s menu." "Play bhajans." — hands-free living.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Bot, title: 'AI Companion', desc: 'Talk, jokes, games, health tips, prayer, stories, and memory exercises — a friend that\'s always there.', img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const familyFeaturesExpanded = [
  { icon: Calendar, title: 'Family Timeline', desc: 'Upcoming birthdays, doctor visits, trips, and festivals — so families always know what\'s coming.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Video, title: 'Live Camera', desc: 'Garden, temple, dining, and event feeds — permission-based, so families can see their loved ones anytime.', img: 'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Mail, title: 'Digital Letters', desc: 'Grandchildren send drawings, letters, and videos — delivered digitally, received with tears of joy.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const creativeFeatures = [
  { icon: Palette, title: 'Art Gallery', desc: 'A dedicated gallery displaying resident paintings — because art has no age limit.', img: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Trophy, title: 'Talent Show', desc: 'Music, dance, poetry, comedy — a stage for every hidden talent to shine.', img: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Mic, title: 'Podcast Studio', desc: 'Residents host their own podcasts — sharing stories, opinions, and wisdom with the world.', img: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Video, title: 'YouTube Studio', desc: 'Record interviews, travel vlogs, and life advice — residents become creators.', img: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const contributionPrograms = [
  { icon: Briefcase, title: 'Mentor Program', desc: 'Retired professionals mentor startups and students — decades of wisdom, passed forward.', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: GraduationCap, title: 'Teach Young Generation', desc: 'Coding, business, life skills, banking, and career guidance — residents become teachers.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: HandHeart, title: 'Volunteer Opportunities', desc: 'NGOs, schools, plantation drives, and charity — giving back gives meaning.', img: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const sustainabilityFeatures = [
  { icon: Sun, label: 'Solar Energy' },
  { icon: CloudRain, label: 'Rainwater Harvesting' },
  { icon: Sprout, label: 'Organic Farm' },
  { icon: Leaf, label: 'Plastic Free Campus' },
  { icon: Car, label: 'Electric Vehicles' },
  { icon: Bird, label: 'Bird Feeders' },
  { icon: Recycle, label: 'Composting' },
];

export const rewardActions = [
  { action: 'Attend yoga', points: 10, icon: Flower2 },
  { action: 'Join an event', points: 15, icon: PartyPopper },
  { action: 'Plant a tree', points: 25, icon: TreePine },
  { action: 'Read a book', points: 10, icon: BookOpen },
  { action: 'Help another resident', points: 20, icon: HeartHandshake },
];

export const rewardRedemptions = [
  { reward: 'Spa session', cost: 100, icon: Sparkles },
  { reward: 'Special dinner', cost: 80, icon: UtensilsCrossed },
  { reward: 'Weekend trip', cost: 300, icon: Bus },
  { reward: 'Gift hamper', cost: 150, icon: Gift },
];

export const signatureExperiencesExpanded = [
  { icon: Sunrise, title: 'Sunrise Breakfast in Nature', desc: 'Begin the day with breakfast served at a viewpoint, surrounded by birdsong.' },
  { icon: Star, title: 'Night Sky Telescope Sessions', desc: 'Stargazing with a telescope and an astronomy guide — the universe, up close.' },
  { icon: Flame, title: 'Hot Air Balloon Day', desc: 'Float above the valley at sunrise. A memory that lasts a lifetime.' },
  { icon: Plane, title: 'Helicopter Joy Ride', desc: 'See the world from above — a thrill that knows no age.' },
  { icon: Train, title: 'Heritage Train Experience', desc: 'A nostalgic journey through mountain scenery on a heritage railway.' },
  { icon: Waves, title: 'Beach Vacation for Seniors', desc: 'Sand, sea, and sunsets — a fully planned senior-friendly beach holiday.' },
  { icon: Snowflake, title: 'Snowfall Experience Trip', desc: 'For many, the first time they see snow. We make it happen.' },
  { icon: Ship, title: 'Houseboat Stay', desc: 'Drift on calm waters — a night on a houseboat, dinner under the stars.' },
  { icon: PartyPopper, title: 'Retro Bollywood Carnival', desc: 'Costumes, classics, dancing, and a full carnival celebrating golden-era cinema.' },
  { icon: ChefHat, title: 'Cook with Celebrity Chef', desc: 'A live cooking session with a visiting celebrity chef.' },
  { icon: Mic, title: 'Meet Famous Personalities', desc: 'Authors, actors, athletes, and leaders — up close and personal.' },
  { icon: Palette, title: 'Art & Craft Festivals', desc: 'A campus-wide festival of creativity — exhibitions, workshops, and sales.' },
  { icon: Camera, title: 'Annual Family Portrait Day', desc: 'Professional photographers capture three generations together.' },
  { icon: Heart, title: 'Vow Renewal Ceremony', desc: 'Couples renew their vows — surrounded by family, friends, and community.' },
  { icon: Cake, title: '100 Years Celebration', desc: 'When a resident turns 100, the whole community celebrates — for a week.' },
  { icon: Globe2, title: 'One New Dream Every Year', desc: 'Every resident picks one new dream each year. We make it come true.' },
];

export const websiteFeatures = [
  '3D Virtual Campus Tour', 'Interactive Campus Map', 'Online Room Selection',
  'Availability Calendar', 'AI Chat Assistant', 'Health Assessment Before Admission',
  'Personalized Stay Recommendations', 'Family Login Portal', 'Digital Event Calendar',
  'Online Bill Payments', 'Emergency Contact Management', 'Document Upload & Verification',
  'Testimonials with Resident Stories', 'Volunteer & Career Portal', 'Donation Section',
  'Blog on Healthy Aging', 'Multi-language Support', 'Accessibility Controls',
];

// ===== STARTUP-LEVEL ECOSYSTEM DATA =====

export const loveCompanions = [
  { icon: Coffee, label: 'Coffee Meetups' },
  { icon: Users, label: 'Walking Partners' },
  { icon: Star, label: 'Chess Partners' },
  { icon: Plane, label: 'Travel Buddies' },
];

export const grandkidsActivities = [
  { icon: BookOpen, label: 'Story Nights' },
  { icon: Sprout, label: 'Farming' },
  { icon: Palette, label: 'Pottery' },
  { icon: TreePine, label: 'Tree Plantation' },
  { icon: Tent, label: 'Camping' },
];

export const aroundIndiaThemes = [
  { region: 'Punjab Week', items: ['Punjabi Food', 'Bhangra', 'Culture'], img: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { region: 'Kerala Week', items: ['Sadya', 'Kathakali', 'Coconut Workshop'], img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { region: 'Japan Week', items: ['Sushi Workshop', 'Origami', 'Tea Ceremony'], img: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const dreamPassportStamps = [
  'Kashmir', 'Goa', 'River Rafting', 'Safari', 'Hill Picnic', 'Temple Tour',
  'Beach Vacation', 'Snowfall', 'Heritage Train', 'Houseboat',
];

export const brainGymActivities = [
  { icon: Puzzle, label: 'Puzzles' },
  { icon: Brain, label: 'Sudoku' },
  { icon: Star, label: 'Memory Cards' },
  { icon: Award, label: 'Chess' },
  { icon: BookOpen, label: 'Language Games' },
];

export const memoryCafeActivities = [
  { icon: Music, label: 'Old Songs' },
  { icon: Image, label: 'Old Photos' },
  { icon: PartyPopper, label: 'Childhood Games' },
  { icon: BookOpen, label: 'Story Sessions' },
];

export const celebrityTypes = [
  { icon: Mic, label: 'Singers' },
  { icon: Clapperboard, label: 'Actors' },
  { icon: ShieldAlert, label: 'Army Officers' },
  { icon: Sparkles, label: 'Motivational Speakers' },
  { icon: BookOpen, label: 'Authors' },
  { icon: Church, label: 'Spiritual Leaders' },
];

export const personalTVContent = [
  'Birthday Wishes', 'Announcements', 'Yoga Sessions', 'Weather',
  'Resident Interviews', 'Family Messages',
];

export const hallOfLegends = [
  { icon: BookOpen, label: 'Teachers' },
  { icon: ShieldAlert, label: 'Army Officers' },
  { icon: Stethoscope, label: 'Doctors' },
  { icon: Briefcase, label: 'Entrepreneurs' },
  { icon: Brain, label: 'Scientists' },
  { icon: Palette, label: 'Artists' },
];

export const legacyProjects = [
  { icon: BookOpen, label: 'Library Donation' },
  { icon: TreePine, label: 'Plant 500 Trees' },
  { icon: GraduationCap, label: 'Scholarship' },
  { icon: Cat, label: 'Animal Shelter Support' },
  { icon: GraduationCap, label: 'Teach 100 Kids' },
];

export const workshopActivities = [
  { icon: Hammer, label: 'Woodworking' },
  { icon: Palette, label: 'Pottery' },
  { icon: Brush, label: 'Painting' },
  { icon: Sparkles, label: 'DIY' },
  { icon: Sparkles, label: 'Handicrafts' },
];

export const gamingZone = [
  { icon: Globe2, label: 'VR Travel' },
  { icon: Gamepad2, label: 'Wii Bowling' },
  { icon: Award, label: 'Golf Simulator' },
  { icon: Star, label: 'Carrom' },
  { icon: Award, label: 'Chess' },
  { icon: Star, label: 'Cards' },
];

export const safeAdventures = [
  { icon: Plane, label: 'Helicopter Ride' },
  { icon: Flame, label: 'Hot Air Balloon' },
  { icon: Zap, label: 'Zipline (Light)' },
  { icon: CableCar, label: 'Cable Car' },
  { icon: Train, label: 'Luxury Train' },
  { icon: Tent, label: 'Glamping' },
  { icon: Star, label: 'Stargazing Camp' },
  { icon: Ship, label: 'Houseboat' },
  { icon: MapPin, label: 'Desert Safari' },
  { icon: Snowflake, label: 'Snow Camp' },
];

export const dressUpDays = [
  { day: 'Monday', theme: 'Retro Bollywood' },
  { day: 'Tuesday', theme: 'Village Theme' },
  { day: 'Wednesday', theme: 'Royal Theme' },
  { day: 'Thursday', theme: 'Traditional' },
  { day: 'Friday', theme: 'Favorite Color' },
  { day: 'Saturday', theme: 'International' },
  { day: 'Sunday', theme: 'Family Day' },
];

export const foodFestivalCuisines = [
  'Italian', 'Punjabi', 'Gujarati', 'South Indian', 'Thai', 'Japanese', 'Mexican',
];

export const nightExperiences = [
  { icon: Flame, label: 'Bonfire' },
  { icon: Star, label: 'Telescope' },
  { icon: Moon, label: 'Moon Walk' },
  { icon: Music, label: 'Live Guitar' },
  { icon: Mic, label: 'Open Mic' },
  { icon: BookOpen, label: 'Poetry' },
];

export const timeCapsuleOptions = ['5 Years', '10 Years', 'Birthday', 'Anniversary'];

export const socialImpactOptions = [
  { icon: GraduationCap, label: 'Teach Poor Children' },
  { icon: Briefcase, label: 'Mentor Startups' },
  { icon: GraduationCap, label: 'Career Guidance' },
  { icon: BookOpen, label: 'Language Classes' },
  { icon: Briefcase, label: 'Financial Literacy' },
];

export const wisdomLibraryTopics = [
  'Quotes', 'Advice', 'Life Lessons', 'Mistakes', 'Success Stories',
];

export const brandIdentityUSPs = [
  { num: '01', icon: Star, title: 'Dream Fulfillment Program', desc: 'Every resident has a dream. We make it come true.' },
  { num: '02', icon: TreePine, title: 'Nature Resort Living', desc: 'Forest, lake, gardens, and sunrise points — every day.' },
  { num: '03', icon: Plane, title: 'Monthly Adventure Trips', desc: 'Safe, curated travel designed specifically for seniors.' },
  { num: '04', icon: Video, title: 'Legacy Studio', desc: 'Record life stories, podcasts, and documentaries.' },
  { num: '05', icon: Users, title: 'Family Connect Platform', desc: 'Live updates, messages, visits — always connected.' },
  { num: '06', icon: Brain, title: 'Brain & Wellness Center', desc: 'Cognitive fitness, emotional support, and memory care.' },
  { num: '07', icon: PartyPopper, title: '365 Days of Celebrations', desc: 'Festivals, birthdays, theme nights — every single day.' },
  { num: '08', icon: GraduationCap, title: 'University After Retirement', desc: 'Learn anything at any age. It\'s never too late.' },
  { num: '09', icon: HandHeart, title: 'Give Back Program', desc: 'Mentor youth, teach skills, and serve the community.' },
  { num: '10', icon: Heart, title: 'Second Innings Promise', desc: 'No one grows old here. Everyone keeps living.' },
];
