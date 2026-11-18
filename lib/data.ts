export const business = {
  name: 'Proffs Trafikskola',
  legalName: 'Proffs Trafikskola',
  url: 'https://proffstrafikskola.se',
  phone: '08-644 40 01',
  tel: '+4686444001',
  email: 'info@proffstrafikskola.se',
  street: 'Folkungavägen 10C',
  postal: '177 56',
  city: 'Järfälla',
  country: 'SE',
  region: 'Stockholms län',
  place: 'Jakobsberg, Järfälla',
  latitude: 59.4237,
  longitude: 17.835,
  booking: 'https://www.trafikskolaonline.se/sv/skola/proffs/kurser',
  shop: 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel',
  // Google Business Profile listing (CID of "Proffs Trafikskola", not the bare address).
  mapsCid: '16044583027216598461',
  mapsPlace: 'https://www.google.com/maps?cid=16044583027216598461',
  map: 'https://www.google.com/maps/dir/?api=1&destination=Proffs+Trafikskola%2C+Folkungav%C3%A4gen+10C%2C+177+56+J%C3%A4rf%C3%A4lla',
  socials: [
    ['Instagram', 'https://www.instagram.com/proffstrafikskola/'],
    ['Facebook', 'https://www.facebook.com/profile.php?id=61554745685622'],
    ['TikTok', 'https://www.tiktok.com/@proffstrafikskola'],
  ],
  hours: [
    ['Måndag - torsdag', '09:00 - 18:00'],
    ['Fredag', '09:00 - 16:00'],
  ],
  drivingHours: 'Vardagar 08:00 - 18:30',
  languages: ['svenska', 'engelska', 'arabiska', 'spanska'],
  // Order matters: the first two are highlighted as the school's home areas.
  serviceAreas: [
    'Järfälla',
    'Jakobsberg',
    'Tensta',
    'Rinkeby',
    'Spånga',
    'Sundbyberg',
    'Kista',
    'Vällingby',
    'Hässelby',
    'Bro',
    'Kungsängen',
    'Kallhäll',
    'Barkarby',
    'Viksjö',
    'Upplands Väsby',
    'Sollentuna',
    'Solna',
  ],
  description:
    'Proffs Trafikskola är en trafikskola i Järfälla, nära Jakobsberg och Barkarby, som erbjuder körlektioner för B-körkort, intensivkurser, teori, riskutbildning, taxiteori och stöd inför teoriprov och körprov.',
};
// Google Business Profile reviews. Copied from the public profile (5 top-ranked reviews,
// all 5 stars). Update rating/count/reviews by hand when the profile changes.
export const googleReviews = {
  rating: '5,0',
  count: 313,
  url: 'https://www.google.com/maps/place/Proffs+Trafikskola/@59.421215,17.837675,17z/data=!4m8!3m7!1s0x465fa15287df6883:0xdea9cf416281c5bd!8m2!3d59.421215!4d17.837675!9m1!1b1!16s%2Fg%2F11vlt4lps4?hl=sv',
  reviews: [
    {
      name: 'Top Hansa',
      text: 'Jag är verkligen jättenöjd med körskolan! Jag köpte 5 körlektioner och är så glad över hur mycket jag lärde mig på så kort tid. Läraren var jätteduktig, tålmodig och förklarade allt på ett enkelt och tydligt sätt. Jag rekommenderar varmt den här körskolan till alla som vill lära sig köra bil.',
    },
    {
      name: 'Bassam Malki',
      text: 'Shamoun är en otroligt pedagogisk, kunnig och engagerad trafiklärare som verkligen brinner för att hjälpa sina elever att lyckas. Jag rekommenderar er varmt till alla som vill ha professionell, pedagogisk och effektiv körundervisning.',
    },
    {
      name: 'Krishan Silva',
      text: 'Ett stort tack till Proffs Trafikskola för ert professionella stöd, ert tålamod och all hjälp på vägen till mitt körkort. Jag uppskattar verkligen ert engagemang och er vägledning. Rekommenderar er varmt!',
    },
    {
      name: 'Belghis Hosseini',
      text: 'Jag började från noll och har lärt mig otroligt mycket. Min resa fortsätter tills jag får mitt körkort! Stort tack till mina fantastiska lärare Schmon och Rani för ert tålamod, stöd och engagemang!',
    },
    {
      name: 'Garry',
      text: 'Riktigt bra och skön lärare. Förklarar på ett utmärkt och välutvecklat sätt med lite humor på vissa saker som får än att komma ihåg och förstå ännu bättre.',
    },
  ],
};
export const authority = {
  supervision:
    'https://www.transportstyrelsen.se/sv/om-oss/pressrum/nyhetsarkiv/2026/introduktionsutbildningen-tas-bort--det-har-behover-du-ha-koll-pa/',
  tests: 'https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/',
  permit: 'https://www.transportstyrelsen.se/sv/vagtrafik/korkort/ta-korkort/',
};
export const navigation = [
  ['Körlektioner', '/korlektioner'],
  ['Intensivkurs', '/intensivkurs'],
  ['Paket pris', '/paket'],
  ['Kontakt', '/kontakt'],
];
export type Price = { name: string; price: number; detail: string };
// Source: dedicated /korlektioner price content. TODO: confirm test duration (homepage says 50 min).
export const lessons: Price[] = [
  { name: 'Testlektion', price: 499, detail: '30-50 minuter' },
  { name: '1 körlektion', price: 810, detail: '50 minuter' },
  ...[
    [3, 2299],
    [5, 3799],
    [10, 7399],
    [15, 10799],
    [20, 14299],
    [30, 21199],
  ].map(([n, price]) => ({ name: `${n} körlektioner`, price, detail: `${n} × 50 minuter` })),
];
export const packages = ['Small', 'Medium', 'Large', 'X-Large', 'Mega'].map((name, i) => ({
  name,
  price: [4699, 8299, 11699, 15199, 22099][i],
  lessons: [5, 10, 15, 20, 30][i],
  detail: 'Riskettan + teori online på svenska/engelska',
}));
export const intensive = [10, 20, 30].map((n, i) => ({
  name: `Intensivkurs ${n} körlektioner`,
  lessons: n,
  price: [9999, 15999, 21999][i],
  duration: ['På en vecka', 'På två veckor', 'På en månad'][i],
  detail: 'Riskettan + Risktvåan + teori online på svenska/engelska',
}));
export const theoryPrices: Price[] = [
  { name: 'Teori online', price: 599, detail: 'Svenska / engelska' },
  { name: 'Teori online, andra språk', price: 749, detail: 'Kontakta oss för språkval' },
  { name: 'Taxiteori', price: 3500, detail: 'Teoriutbildning för taxiförarlegitimation' },
];
// TODO: homepage promotional price 499 vs dedicated price list 599; provider lists other prices. No expiry supplied.
export const courses = [
  {
    slug: 'riskettan',
    name: 'Riskettan',
    price: 499,
    regular: 599,
    caption: 'Förstå riskerna. Kör med insikt.',
    description:
      'Alkohol, droger, trötthet och beteenden i trafiken. Den teoretiska delen av riskutbildningen för B-körkort.',
    image: 'riskettan',
  },
  {
    slug: 'risktvaan',
    name: 'Risktvåan',
    price: 2200,
    regular: 2500,
    caption: 'Lär känna bilens gränser.',
    description:
      'Halkbanan är riskutbildningens praktiska del. Upplev hur underlag och svåra förhållanden påverkar körningen.',
    image: 'risketvan',
  },
  {
    slug: 'handledarkurs',
    name: 'Handledarstöd',
    price: 299,
    regular: 399,
    caption: 'En stabil grund för er privata övningskörning.',
    description:
      'Aktuell vägledning för elev och handledare efter att kravet på introduktionsutbildning slopades den 1 augusti 2026.',
    image: 'handledarutbildning',
  },
];
export const photos: Record<string, { src: string; alt: string; width: number; height: number }> = {
  herodraw: {
    src: '/images/herodraw.webp',
    alt: 'Illustration av Proffs Trafikskola övningsbil och vägskyltar mot körkort och frihet',
    width: 960,
    height: 480,
  },
  'proffs-car': {
    src: '/images/proffs-car.jpg',
    alt: 'Vit Volkswagen med Proffs Trafikskolas logotyp och övningskörningsskylt',
    width: 1200,
    height: 896,
  },
  storefront: {
    src: '/images/storefront.jpg',
    alt: 'Entrén till Proffs Trafikskola med skolans logotyp och trafikmärken i fönstret',
    width: 1200,
    height: 901,
  },
  classroom: {
    src: '/images/classroom.jpg',
    alt: 'Proffs Trafikskolas lektionssal med röda stolar, whiteboard och bildskärm',
    width: 1536,
    height: 1152,
  },
  school: {
    src: '/images/school.jpg',
    alt: 'Skolans interiör med informationsbanderoll om körkortsutbildningar',
    width: 1200,
    height: 896,
  },
  driving: {
    src: '/images/driving.jpg',
    alt: 'En förare håller båda händerna på ratten, sedd från baksätet',
    width: 1024,
    height: 683,
  },
  speedometer: {
    src: '/images/speedometer.jpg',
    alt: 'Närbild av en bils hastighetsmätare',
    width: 1024,
    height: 684,
  },
  risketvan: {
    src: '/images/risketvan.webp',
    alt: 'Handritad illustration för Risktvåan med övningsbil och vägskyltar',
    width: 960,
    height: 480,
  },
  handledarutbildning: {
    src: '/images/handledarutbildning.webp',
    alt: 'Illustration för Handledarutbildning med elev, handledare och övningskörningsbil framför Proffs Trafikskola',
    width: 960,
    height: 640,
  },
  riskettan: {
    src: '/images/riskettan.webp',
    alt: 'Illustration för Riskettan riskutbildning',
    width: 960,
    height: 480,
  },
};

export const illustrations = {
  herodraw: {
    src: '/images/herodraw.webp',
    alt: 'Illustration av övningskörningsbil och vägskyltar mot körkort och frihet',
    width: 960,
    height: 480,
  },
  handledarutbildning: {
    src: '/images/handledarutbildning.webp',
    alt: 'Illustration för Handledarutbildning med elev, handledare och övningskörningsbil framför Proffs Trafikskola',
    width: 960,
    height: 640,
  },
  'vagen-till-korkort': {
    src: '/images/vagen-till-korkort.webp',
    alt: 'Illustration: Bli Ett Proffs – Vägen till körkort steg för steg',
    width: 960,
    height: 480,
  },
  villkor: {
    src: '/images/villkor.webp',
    alt: 'Illustration: Villkor och regler för bokning och utbildning hos Proffs Trafikskola',
    width: 960,
    height: 480,
  },
  riskettan: {
    src: '/images/riskettan.webp',
    alt: 'Illustration för Riskettan riskutbildning',
    width: 960,
    height: 480,
  },
  risketvan: {
    src: '/images/risketvan.webp',
    alt: 'Illustration för Risktvåan med övningsbil och vägskyltar',
    width: 960,
    height: 480,
  },
  intensivkurs: {
    src: '/images/intensivkurs.webp',
    alt: 'Illustration för intensivkurs med övningsbil och väg mot körkort',
    width: 960,
    height: 480,
  },
  paket: {
    src: '/images/paket.webp',
    alt: 'Illustration för körkortspaket hos Proffs Trafikskola',
    width: 960,
    height: 480,
  },
  kurser: {
    src: '/images/kurser.webp',
    alt: 'Illustration för kurser hos Proffs Trafikskola',
    width: 960,
    height: 480,
  },
  teori: {
    src: '/images/teori.webp',
    alt: 'Illustration för teoriutbildning hos Proffs Trafikskola',
    width: 960,
    height: 480,
  },
  korlektioner: {
    src: '/images/kolektioner.webp',
    alt: 'Illustration för körlektioner med övningsbil och väg mot körkort',
    width: 960,
    height: 480,
  },
};
export const faqs = [
  {
    q: 'Vilka utbildningar erbjuder Proffs Trafikskola?',
    a: 'Vi erbjuder körlektioner för B-körkort, intensivkurser, teori online, Riskettan, Risktvåan, taxiteori och stöd för dig som kombinerar trafikskola med privat övningskörning.',
  },
  {
    q: 'Kan jag gå en intensivkurs om jag vill ta körkort snabbt?',
    a: 'Ja. Våra intensivkurser planeras efter dina förkunskaper. Vi börjar med en testlektion och lägger sedan upp en kurs som kan vara från en vecka till en månad beroende på din nivå.',
  },
  {
    q: 'Vilka språk erbjuder ni undervisning på?',
    a: 'Vi erbjuder undervisning på svenska, engelska, arabiska och spanska. Vi har även digitala teoriböcker på flera språk.',
  },
  {
    q: 'Behöver jag gå Riskettan, Risktvåan eller introduktionsutbildning?',
    a: 'Riskettan och Risktvåan är obligatoriska delar av riskutbildningen för B-körkort. Kravet på introduktionsutbildning för handledare och elev vid privat övningskörning med personbil slopades den 1 augusti 2026, men handledaren måste fortfarande bli godkänd av Transportstyrelsen och eleven behöver körkortstillstånd.',
  },
  {
    q: 'Kan jag ta körkort hos er om jag bor i Jakobsberg?',
    a: 'Ja. Trafikskolan ligger i Järfälla, mellan Jakobsberg och Barkarby. Hos oss kan du ta körlektioner, gå intensivkurs, läsa körkortsteori och gå Riskettan och Risktvåan.',
  },
  {
    q: 'Var ligger trafikskolan och hur bokar jag?',
    a: 'Vi finns på Folkungavägen 10C i Järfälla, nära Jakobsberg och Barkarby. Du kan boka kurser och paket via vår e-handel eller kontakta oss om du vill ha hjälp att planera din utbildning.',
  },
];
export const steps = [
  {
    name: 'Steg 1: Skriv in dig hos oss',
    text: 'Vi hjälper dig med att ansöka om körkortstillstånd, genomföra synundersökning och planera din utbildning.',
  },
  {
    name: 'Steg 2: Teoriutbildning',
    text: 'Studera på egen hand eller delta i våra lärarledda lektioner. Vi ser till att du är väl förberedd inför provet!',
  },
  {
    name: 'Steg 3: Körutbildning',
    text: 'Vi har erfarna lärare och bilar som är redo att möta dina behov som elev. Vi hjälper dig genom att skapa en personlig plan för dina lektioner och erbjuder professionell vägledning. Våra bilar och utbildade instruktörer är här för att ge dig det stöd du behöver och förbereda dig grundligt inför körprovet.',
  },
  {
    name: 'Steg 4: Riskutbildning',
    text: 'Riskettan är obligatorisk och måste genomföras på en trafikskola som är godkänd av Transportstyrelsen. Vi är godkända och erbjuder Riskutbildning del 1.\n\nDel två av riskutbildningen, ofta kallad halkbanan, är också obligatorisk. Det är en praktisk utbildning där du får öva på att köra på halt underlag och uppleva svåra trafiksituationer på ett säkert sätt.',
  },
  {
    name: 'Steg 5: Teoriprov',
    text: 'För att gå vidare till körprovet måste du först klara av teoriprovet. Du behöver få minst 52 poäng för att bli godkänd. Provet innehåller frågor inom olika kategorier som trafikregler, miljö och fordonssäkerhet. Se till att förbereda dig noggrant för att öka dina chanser att lyckas.',
  },
  {
    name: 'Steg 6: Körprov',
    text: 'Nu är det dags att sätta all din kunskap på prov. Körprovet är den praktiska delen av din körutbildning. Det är viktigt att boka körprovet i god tid, eftersom du har endast 4 månader på dig att göra provet efter att du slutfört den teoretiska delen. Bokningen görs via Trafikverket.se/korkort. Vi hjälper gärna till med bokningen på plats.\n\nLycka till!',
  },
];
export type Page = {
  title: string;
  heading: string;
  intro: string;
  image?: string;
  factsTitle?: string;
  sections?: { title: string; body: string }[];
  description?: string;
  faqs?: { q: string; a: string }[];
  facts?: [string, string][];
};
export const pages: Record<string, Page> = {
  priser: {
    title: 'Priser för körkort i Järfälla',
    heading: 'Priser för körkort\ni Järfälla',
    intro:
      'En samlad överblick över körlektioner, paket, intensivkurs, kurser och teori.',
    image: 'herodraw',
    description:
      'Priser för körlektioner, körkortspaket, intensivkurser, Riskettan, Risktvåan och teori hos Proffs Trafikskola i Järfälla, nära Jakobsberg och Barkarby.',
    faqs: [
      {
        q: 'Vad kostar en körlektion?',
        a: 'En körlektion på 50 minuter kostar 810 kr. Köper du flera lektioner samtidigt blir priset per lektion lägre, till exempel 10 körlektioner för 7 399 kr.',
      },
      {
        q: 'Vad kostar en testlektion?',
        a: 'En testlektion kostar 499 kr. Under testlektionen ser vi var du ligger och planerar resten av din utbildning.',
      },
      {
        q: 'Vad kostar en intensivkurs?',
        a: 'Intensivkurs med 10 körlektioner kostar 9 999 kr, med 20 körlektioner 15 999 kr och med 30 körlektioner 21 999 kr. Riskettan, Risktvåan och teori online på svenska eller engelska ingår.',
      },
      {
        q: 'Vad kostar Riskettan och Risktvåan?',
        a: 'Riskettan kostar just nu 499 kr (ordinarie 599 kr) och Risktvåan (halkbana) 2 200 kr (ordinarie 2 500 kr).',
      },
    ],
  },
  kurser: {
    title: 'Kurser för B-körkort i Järfälla',
    heading: 'Kurser för B-körkort\ni Järfälla',
    intro:
      'Hitta rätt riskutbildning eller stöd för privat övningskörning hos Proffs Trafikskola.',
    image: 'kurser',
    description:
      'Kurser för B-körkort hos Proffs Trafikskola i Järfälla: Riskettan, Risktvåan, teori och stöd för handledare. För elever i Jakobsberg, Barkarby med omnejd.',
  },
  paket: {
    title: 'Körkortspaket i Järfälla',
    heading: 'Körkortspaket\ni Järfälla',
    intro: 'Välj ett paket som passar din nivå och fortsätt mot körkortet med tydliga priser.',
    image: 'paket',
    description:
      'Körkortspaket hos Proffs Trafikskola i Järfälla med 5 till 30 körlektioner, Riskettan och teori online. Spara pengar jämfört med att köpa lektioner styckvis.',
    facts: [
      ['Passar för', 'Elever som vill samla körlektioner, Riskettan och teori i ett paket.'],
      ['Ingår', '5, 10, 15, 20 eller 30 körlektioner, Riskettan och teori online.'],
      ['Bokning', 'Paket köps i skolans e-handel via Trafikskola Online.'],
    ],
  },
  kurserpris: {
    title: 'Priser för kurser i Järfälla',
    heading: 'Priser för kurser\ni Järfälla',
    intro: 'Aktuella priser för Riskettan, Risktvåan och andra kurser hos Proffs Trafikskola.',
    image: 'kurser',
    description:
      'Aktuella priser för Riskettan, Risktvåan (halkbana), handledarstöd och teori online hos Proffs Trafikskola i Järfälla, nära Jakobsberg och Barkarby.',
  },
  intensivkurs: {
    title: 'Intensivkurs i Järfälla & Jakobsberg',
    factsTitle: 'intensivkurs i Jakobsberg, Järfälla & Barkarby',
    heading: 'Boka intensivkurs i Jakobsberg, Järfälla & Barkarby',
    intro: 'Vill du ta körkortet snabbt planerar vi en intensivkurs efter din nivå, dina förkunskaper och din tillgängliga tid.',
    image: 'intensivkurs',
    description:
      'Intensivkurs för B-körkort i Järfälla och Jakobsberg. Ta körkort på en vecka till en månad med körlektioner, Riskettan, Risktvåan och teori online.',
    facts: [
      ['Plats', 'Järfälla, nära Jakobsberg och Barkarby.'],
      ['Längd', 'Vanligen 1 vecka, 2 veckor eller 1 månad beroende på paket och förkunskaper.'],
      ['Innehåll', 'Körlektioner, Riskettan, Risktvåan och teori online på svenska eller engelska.'],
      ['Start', 'Vi rekommenderar en testlektion så att kursen kan planeras efter din nivå.'],
    ],
    faqs: [
      {
        q: 'Vad ingår i intensivkursen?',
        a: 'Intensivkurserna innehåller körlektioner, Riskettan, Risktvåan och teori online på svenska eller engelska.',
      },
      {
        q: 'Hur lång tid tar en intensivkurs?',
        a: 'Proffs Trafikskola erbjuder intensivkurser på ungefär en vecka, två veckor eller en månad. Rätt upplägg beror på dina förkunskaper och hur mycket tid du kan lägga på utbildningen.',
      },
      {
        q: 'Kan jag gå intensivkurs om jag bor i Jakobsberg?',
        a: 'Ja. Proffs Trafikskola ligger på Folkungavägen 10C i Järfälla, mellan Jakobsberg och Barkarby, så du kan bo hemma under hela intensivkursen.',
      },
      {
        q: 'Vad kostar en intensivkurs för körkort?',
        a: 'Intensivkurs med 10 körlektioner kostar 9 999 kr, med 20 körlektioner 15 999 kr och med 30 körlektioner 21 999 kr. Riskettan, Risktvåan och teori online på svenska eller engelska ingår.',
      },
      {
        q: 'Kan nybörjare boka intensivkurs?',
        a: 'Ja. Kursen planeras efter din nivå, men en testlektion rekommenderas så att skolan kan bedöma hur många lektioner du behöver.',
      },
    ],
    sections: [
      {
        title: 'En effektiv intensivkurs i Jakobsberg, Järfälla och Barkarby',
        body: 'Hos Proffs Trafikskola på Folkungavägen 10C i Järfälla kan du gå intensivkurs för körkort, nära för dig som bor i Jakobsberg, Barkarby och övriga Järfälla.\n\nVi på Proffs Trafikskola specialanpassar intensivkursen utifrån din kunskap och erfarenhet men målet i slutet av kursen förblir detsamma, att du ska lyckas ta körkort vid kursens slut.\n\nIntensivkursen innehåller körlektioner, teorilektioner, Riskettan, Risktvåan och digital teori.\n\nVi erbjuder vår intensivutbildning på ett flertal språk, bland annat svenska, engelska, arabiska och spanska.\n\nAlla är välkomna att gå våra intensivkurser oavsett förkunskaper, se bara till att ha ett giltigt körkortstillstånd från Trafikverket och tillräckligt med tid att kunna fokusera på kursen.\n\nKontakta oss redan idag för att boka in en testlektion i steg mot ditt körkort.',
      },
      {
        title: 'Intensivkurs för dig som vill ta körkort snabbt',
        body: 'Våra erfarna pedagoger har lång erfarenhet av att utbilda elever till skickliga och säkra förare som klarar körprovet och teoriprovet inom den angivna tidsramen för kursen. Vi är experter på att motivera våra elever och hålla lektioner som effektivt överför körkunskap.\n\nVår intensivkurs är noggrant planerad med hänsyn till dina individuella förkunskaper. Detta innebär att dina lektioner är skräddarsydda för att fokusera på de områden du behöver förbättra för att framgångsrikt klara körprovet.\n\nEftersom det är mycket körlektioner under en kort tid minns våra elever det de lär sig under intensivkursen vilket gjort att det varit ett effektivt sätt för dem att ta körkort.',
      },
      {
        title: 'Varför välja vår intensivutbildning?',
        body: 'Vår intensivutbildning är ett prisvärt alternativ eftersom du slipper resa till en annan stad och bo på annan ort.\n\nVår trafikskola är centralt belägen i Järfälla, vilket gör att du kan bo hemma under hela kursen.\n\nGenom att bo i din vanliga miljö minskar du mängden nya intryck, vilket gör att du kan fokusera på dina lektioner och hemmiljön gör att du sover bättre. Detta förbättrar din koncentrationsförmåga och maximerar dina chanser att ta körkort i slutet av kursen.\n\nEftersom vår intensivutbildning också är specialanpassad efter dig är det en större chans att du tar körkort i slutet av kursen.',
      },
      {
        title: 'Vi lär dig bli en säker förare i trafiken',
        body: 'För att starta en intensivkurs hos oss bokar vi först in dig för en testlektion där vi ser hur mycket förkunskap du har. En intensivkurs för en person som aldrig suttit bakom ratten kommer se annorlunda ut än för den som övningskört i flera år. Men oavsett vart på skalan du faller ordnar vi så att du kommer ha möjlighet att ta körkort efter kursens slut.\n\nVåra pedagoger hjälper dig med teorin och övningskörningen för att du ska känna dig trygg och säker inför teoriprovet och körprovet.\n\nVi har genom åren hjälpt många elever att bli duktiga förare och vi ser fram emot att hjälpa dig att ta körkort!',
      },
    ],
  },
  korlektioner: {
    title: 'Körlektioner i Järfälla & Jakobsberg',
    factsTitle: 'körlektioner med automat och manuell bil i Järfälla',
    heading: 'Körlektioner i\nJärfälla & Jakobsberg',
    intro:
      'Lär dig köra med automat eller manuell bil. Personlig vägledning, 50 minuters körlektioner och en plan som passar din nivå.',
    image: 'korlektioner',
    description:
      'Körlektioner för B-körkort med automat eller manuell bil i Järfälla och Jakobsberg. Erfarna lärare, undervisning på flera språk. Testlektion från 499 kr.',
    facts: [
      ['Lektionstid', 'Ordinarie körlektioner är 50 minuter.'],
      ['Bilar', 'Undervisning erbjuds med automat och manuell bil.'],
      ['Pris', 'En körlektion kostar 810 kr enligt publicerad prislista.'],
      ['Första steg', 'Testlektion kan bokas för att planera rätt utbildningsnivå.'],
    ],
    faqs: [
      {
        q: 'Erbjuder ni körlektioner med både automat och manuell bil?',
        a: 'Ja. Proffs Trafikskola erbjuder körlektioner med både automat och manuell bil.',
      },
      {
        q: 'Hur lång är en körlektion?',
        a: 'En ordinarie körlektion är 50 minuter.',
      },
      {
        q: 'Vad kostar en körlektion?',
        a: 'En körlektion kostar 810 kr enligt skolans publicerade prislista. Paket med flera lektioner finns också.',
      },
      {
        q: 'Kan jag ta körlektioner om jag bor i Jakobsberg?',
        a: 'Ja. Skolan ligger på Folkungavägen 10C i Järfälla, mellan Jakobsberg och Barkarby, nära för dig som bor i Jakobsberg. Kontakta oss så hjälper vi dig att planera dina körlektioner.',
      },
      {
        q: 'Kan jag ta körlektioner på engelska, arabiska eller spanska?',
        a: 'Ja. Våra lärare undervisar på svenska, engelska, arabiska och spanska.',
      },
    ],
    sections: [
      {
        title: 'Körlektioner i Järfälla och Jakobsberg',
        body: 'Hos Proffs Trafikskola på Folkungavägen 10C i Järfälla kan du ta körlektioner för B-körkort. Skolan ligger mellan Jakobsberg och Barkarby, nära för dig som bor i Järfälla, Jakobsberg och närliggande områden.\n\nEn ordinarie körlektion är 50 minuter och kostar 810 kr. Körlektionerna genomförs vardagar mellan 08:00 och 18:30.',
      },
      {
        title: 'Automat eller manuell bil?',
        body: 'Du kan ta körlektioner med både automat och manuell bil. Med automat behöver du inte tänka på koppling och växlar, vilket kan kännas enklare i början.\n\nTänk på att ett körkort som tas med automatväxlad bil får ett villkor som innebär att du bara får köra automatväxlade bilar. Tar du körkort med manuell bil får du köra båda typerna. Är du osäker på vad som passar dig hjälper vi dig att välja.',
      },
      {
        title: 'Börja med en testlektion',
        body: 'Under en testlektion får läraren en bild av hur långt du har kommit i din körning. Utifrån det planerar ni hur många körlektioner du behöver och vad ni ska fokusera på.\n\nEn testlektion kostar 499 kr.',
      },
      {
        title: 'Spara pengar med fler körlektioner',
        body: 'Köper du flera körlektioner samtidigt blir priset per lektion lägre:\n\n• 3 körlektioner: 2 299 kr\n• 5 körlektioner: 3 799 kr\n• 10 körlektioner: 7 399 kr\n• 15 körlektioner: 10 799 kr\n• 20 körlektioner: 14 299 kr\n• 30 körlektioner: 21 199 kr\n\nDet finns även körkortspaket där Riskettan och teori online ingår, och intensivkurser för dig som vill ta körkort på kort tid.',
      },
      {
        title: 'Körlektioner på flera språk',
        body: 'Våra lärare undervisar på svenska, engelska, arabiska och spanska. Att få förklaringar på ett språk du förstår väl gör det lättare att ställa frågor och känna dig trygg bakom ratten.\n\nÖvningskör du privat med en handledare? Då kan körlektioner hos oss vara ett bra komplement, så att du får hjälp med de moment som behöver tränas mer.',
      },
    ],
  },
  riskettan: {
    title: 'Riskettan i Järfälla & Jakobsberg',
    heading: 'Riskettan i\nJärfälla & Jakobsberg',
    intro: 'Riskettan är den teoretiska delen av den obligatoriska riskutbildningen för B-körkort.',
    image: 'riskettan',
    description:
      'Riskettan i Järfälla för B-körkort, nära Jakobsberg och Barkarby. Teoretisk riskutbildning om alkohol, droger, trötthet och trafiksäkerhet. Boka hos oss.',
    facts: [
      ['Typ', 'Obligatorisk teoretisk riskutbildning, del 1, för B-körkort.'],
      ['Tid', 'Cirka 3 timmar med full närvaro.'],
      ['Pris', 'Publicerat erbjudande 499 kr, ordinarie 599 kr.'],
      ['Efter kursen', 'Godkänd utbildning registreras hos Transportstyrelsen.'],
    ],
    faqs: [
      {
        q: 'Vad är Riskettan?',
        a: 'Riskettan är den teoretiska delen av den obligatoriska riskutbildningen för B-körkort. Den handlar bland annat om alkohol, droger, trötthet, beteende och risker i trafiken.',
      },
      {
        q: 'Hur lång är Riskettan?',
        a: 'Riskettan varar i cirka 3 timmar och full närvaro krävs för att bli godkänd.',
      },
      {
        q: 'Vad kostar Riskettan i Järfälla?',
        a: 'Riskettan kostar just nu 499 kr (ordinarie 599 kr) enligt vår publicerade prislista.',
      },
      {
        q: 'Kan jag gå Riskettan om jag bor i Jakobsberg?',
        a: 'Ja. Skolan ligger på Folkungavägen 10C i Järfälla, mellan Jakobsberg och Barkarby. Du bokar ett kurstillfälle via Trafikskola Online.',
      },
    ],
    sections: [
      {
        title: 'Riskettan i Järfälla och Jakobsberg',
        body: 'Riskettan, som också kallas Risk 1, är den teoretiska delen av den obligatoriska riskutbildningen för B-körkort. Hos Proffs Trafikskola på Folkungavägen 10C i Järfälla, mellan Jakobsberg och Barkarby, kan du boka Riskettan.\n\nKursen tar cirka 3 timmar och kostar just nu 499 kr (ordinarie 599 kr). Proffs Trafikskola är godkänd av Transportstyrelsen för riskutbildning del 1, och efter genomförd utbildning registreras ditt godkännande hos Transportstyrelsen.',
      },
      {
        title: 'Varför Riskettan är viktig',
        body: 'När du förstår hur alkohol, droger, trötthet och andra faktorer påverkar körningen blir det lättare att göra säkra val som förare. Riskettan ger dig kunskap som du har nytta av långt efter att du har tagit körkort.\n\nRiskettan och Risktvåan är båda obligatoriska och behöver vara genomförda innan du kan göra körprovet. Du behöver ett giltigt körkortstillstånd för att gå riskutbildningen.',
      },
      {
        title: 'Boka din utbildning',
        body: 'Du bokar via Trafikskola Online, där du väljer bland tillgängliga kurstillfällen. Kontakta skolan om du behöver hjälp med bokningen eller har frågor om språk och upplägg.',
      },
      {
        title: 'Viktigt att tänka på inför kursen',
        body: '• Glöm inte att ta med giltig legitimation (ID-kort eller pass) till kurstillfället.\n• Kursen varar i cirka 3 timmar och full närvaro krävs för att bli godkänd.\n• Efter genomförd utbildning registrerar vi ditt godkännande direkt hos Transportstyrelsen.',
      },
    ],
  },
  risktvaan: {
    title: 'Risktvåan i Järfälla & Jakobsberg',
    factsTitle: 'Risktvåan halkbana i Järfälla',
    heading: 'Risktvåan i\nJärfälla & Jakobsberg',
    intro: 'Praktisk riskutbildning som hjälper dig förstå bilens beteende i svårare körlägen.',
    image: 'risketvan',
    description:
      'Risktvåan, ofta kallad halkbana, är den praktiska delen av riskutbildningen för B-körkort. Boka Risktvåan hos Proffs Trafikskola i Järfälla och Jakobsberg.',
    facts: [
      ['Typ', 'Obligatorisk praktisk riskutbildning, del 2, för B-körkort.'],
      ['Fokus', 'Bilens beteende, halt underlag, hastighet, säkerhetsmarginaler och riskbedömning.'],
      ['Pris', 'Publicerat pris 2 200 kr.'],
      ['Mål', 'Att du ska förstå bilens begränsningar och dina egna reaktioner i riskfyllda situationer.'],
    ],
    faqs: [
      {
        q: 'Vad är Risktvåan?',
        a: 'Risktvåan är den praktiska delen av riskutbildningen för B-körkort och kallas ofta halkbana.',
      },
      {
        q: 'Kan man bli underkänd på Risktvåan?',
        a: 'Ja. Om säkerhetsrutiner inte följs eller momenten inte genomförs på ett godtagbart sätt kan utbildningen behöva göras om.',
      },
      {
        q: 'Vad kostar Risktvåan i Järfälla?',
        a: 'Risktvåan kostar just nu 2 200 kr (ordinarie 2 500 kr) enligt vår publicerade prislista.',
      },
      {
        q: 'Behöver jag göra både Riskettan och Risktvåan?',
        a: 'Ja. Båda delarna är obligatoriska för B-körkort och behöver vara genomförda innan du kan göra körprovet.',
      },
    ],
    sections: [
      {
        title: 'Risktvåan i Järfälla och Jakobsberg',
        body: 'Hos Proffs Trafikskola i Järfälla kan du boka Risktvåan, som också kallas Risk 2 eller halkbana. Skolan ligger på Folkungavägen 10C, mellan Jakobsberg och Barkarby.\n\nRisktvåan kostar just nu 2 200 kr (ordinarie 2 500 kr). Själva halkbanan genomförs på en övningsbana för riskutbildning. Kontakta oss för information om plats, tider och hur du tar dig dit.',
      },
      {
        title: 'Vad är Risktvåan (halkbana)?',
        body: 'Risktvåan, eller halkbanan, är den praktiska delen av riskutbildningen för B-körkort. Under denna utbildning får du öva på att köra på halkiga och ojämna ytor för att uppleva hur bilen beter sig under sådana förhållanden. Målet är att ge dig erfarenhet av att hantera svåra trafik­situationer och att öka din förståelse för bilens begränsningar och din egen reaktionsförmåga i farliga situationer.',
      },
      {
        title: 'Kan jag bli underkänd?',
        body: 'Ja, det är möjligt att bli underkänd på Risktvåan (halkbanan). Om du inte kan hantera bilens rörelser på halt underlag eller inte följer säkerhetsrutinerna kan du få en bedömning som innebär att du behöver genomgå utbildningen igen för att få det godkänt. Syftet med halkbanan är att säkerställa att du kan hantera svåra körförhållanden på ett säkert sätt.',
      },
      {
        title: 'Så går Risktvåan till',
        body: 'Utbildningen består av en teoretisk genomgång och praktisk körning. Du får uppleva hur bilen beter sig på halt underlag och i olika hastigheter, och varför säkerhetsmarginaler, rätt hastighet och bilbälte är så viktiga.\n\nMålet är inte att du ska lära dig köra på halt underlag i hög fart, utan att du ska förstå bilens begränsningar och dina egna reaktioner, så att du kan undvika riskfyllda situationer i trafiken.',
      },
      {
        title: 'Inför Risktvåan',
        body: '• Ta med giltig legitimation, till exempel ID-kort eller pass.\n• Klä dig efter väder, eftersom delar av utbildningen sker utomhus.\n• Riskettan och Risktvåan behöver vara genomförda innan du kan göra körprovet.\n\nHar du frågor om bokning eller upplägg är du välkommen att kontakta oss på 08-644 40 01.',
      },
    ],
  },
  handledarkurs: {
    title: 'Handledare & övningskörning i Järfälla',
    factsTitle: 'handledare och privat övningskörning i Järfälla',
    heading: 'Handledare och privat\növningskörning i Järfälla',
    intro: 'Från 1 augusti 2026 krävs inte längre introduktionsutbildning för privat övningskörning med personbil, men handledare och elev måste fortfarande uppfylla Transportstyrelsens krav.',
    image: 'handledarutbildning',
    description:
      'Nya regler för handledare och privat övningskörning efter att introduktionsutbildningen slopades 1 augusti 2026. Stöd från Proffs Trafikskola i Järfälla.',
    facts: [
      ['Regeländring', 'Kravet på introduktionsutbildning för B-körkort slopades den 1 augusti 2026.'],
      ['Handledare', 'Handledaren måste ansöka och bli godkänd av Transportstyrelsen.'],
      ['Elev', 'Eleven behöver giltigt körkortstillstånd och måste uppfylla ålderskraven.'],
      ['Stöd från skolan', 'Proffs Trafikskola kan hjälpa med körlektioner, planering och råd inför privat övningskörning.'],
    ],
    faqs: [
      {
        q: 'Krävs handledarutbildning för privat övningskörning med personbil?',
        a: 'Nej. Kravet på introduktionsutbildning för handledare och elev vid privat övningskörning med personbil slopades den 1 augusti 2026.',
      },
      {
        q: 'Vad krävs fortfarande för att vara handledare?',
        a: 'Handledaren måste vara godkänd av Transportstyrelsen, ha fyllt 24 år, ha giltigt körkort för behörigheten och uppfylla kravet på körkortsinnehav under minst fem av de senaste tio åren.',
      },
      {
        q: 'Kan Proffs Trafikskola hjälpa om jag övningskör privat?',
        a: 'Ja. Skolan kan hjälpa eleven och handledaren med körlektioner, planering och råd om vad ni bör träna på mellan lektionerna.',
      },
    ],
    sections: [
      {
        title: 'Nya regler från 1 augusti 2026',
        body: 'Kravet på introduktionsutbildning, tidigare kallad handledarutbildning, är borttaget för privat övningskörning med personbil och lätt lastbil. Det betyder att elev och handledare inte längre behöver en giltig introduktionsutbildning för B-körkort.\n\nDet finns fortfarande viktiga krav. Handledaren måste ansöka och bli godkänd av Transportstyrelsen, och eleven behöver ett giltigt körkortstillstånd. För säker och strukturerad privat övningskörning rekommenderar vi att elev och handledare kompletterar med körlektioner hos trafikskola.',
      },
      {
        title: 'Viktigt att tänka på',
        body: 'För att bli godkänd som handledare för B-körkort krävs bland annat:\n\n• Du måste vara minst 24 år gammal.\n• Du ska ha ett giltigt körkort för behörigheten.\n• Du ska ha haft körkort för behörigheten i minst 5 av de senaste 10 åren.\n• Du måste ansöka om handledarskap och bli godkänd av Transportstyrelsen.\n\nFör eleven gäller bland annat:\n\n• Eleven behöver ett giltigt körkortstillstånd.\n• Eleven måste uppfylla ålderskravet för övningskörning.\n• Eleven ska kunna visa giltig ID-handling vid övningskörning.',
      },
    ],
  },
  teori: {
    title: 'Körkortsteori på olika språk i Järfälla & Jakobsberg',
    heading: 'Körkortsteori på flera språk\ni Järfälla & Jakobsberg',
    intro: 'Träna på körkortsteorin digitalt på svenska, engelska eller flera andra språk, och komplettera med stöd från våra lärare när du behöver struktur.',
    image: 'teori',
    description:
      'Körkortsteori online för B-körkort på svenska, engelska och flera andra språk. Teori från 599 kr hos Proffs Trafikskola i Järfälla, nära Jakobsberg.',
    faqs: [
      {
        q: 'Vilka språk finns körkortsteorin på?',
        a: 'Teori online på svenska och engelska kostar 599 kr. Digitala teoriböcker finns även på arabiska, albanska, bosniska, finska, franska, kroatiska, persiska, ryska, serbiska, somaliska, sorani, spanska, thailändska och tyska för 749 kr. Kontakta oss för att välja språk.',
      },
      {
        q: 'Kan jag få undervisning på andra språk än svenska?',
        a: 'Ja. Våra lärare undervisar på svenska, engelska, arabiska och spanska, både på körlektioner och teorilektioner.',
      },
      {
        q: 'Hur köper jag teori online?',
        a: 'Du köper teori online i vår e-handel hos Trafikskola Online. Teori online ingår också i våra körkortspaket och intensivkurser.',
      },
      {
        q: 'Var kan jag läsa körkortsteori nära Jakobsberg?',
        a: 'Proffs Trafikskola ligger på Folkungavägen 10C i Järfälla, mellan Jakobsberg och Barkarby. Teori online kan du läsa var du vill, och hos oss kan du komplettera med teorilektioner och körlektioner.',
      },
    ],
    sections: [
      {
        title: 'Körkortsteori i Järfälla och Jakobsberg',
        body: 'Teorin är en viktig del av vägen till B-körkort. Du behöver kunna trafikregler, vägmärken och hur du agerar säkert i trafiken för att klara teoriprovet hos Trafikverket.\n\nProffs Trafikskola ligger på Folkungavägen 10C i Järfälla, mellan Jakobsberg och Barkarby. Hos oss kan du kombinera körkortsteori online med teorilektioner, körlektioner och riskutbildning, nära för dig som bor i Järfälla, Jakobsberg och närliggande områden.',
      },
      {
        title: 'Teori online för B-körkort',
        body: 'Med teori online pluggar du digitalt i din egen takt, när det passar dig. Du kan repetera de delar som känns svåra så många gånger du behöver.\n\nTeori online på svenska eller engelska kostar 599 kr. Teori online ingår också i våra körkortspaket och intensivkurser. Du köper teorin i vår e-handel hos Trafikskola Online.',
      },
      {
        title: 'Körkortsteori på olika språk',
        body: 'Det är lättare att förstå trafikregler och vägmärken på ett språk du behärskar väl. Därför finns vår körkortsteori på flera språk.\n\n• Teori online på svenska och engelska kostar 599 kr.\n• Teori online och digitala teoriböcker på andra språk kostar 749 kr.\n\nDigitala teoriböcker finns på arabiska, albanska, bosniska, engelska, finska, franska, kroatiska, persiska, ryska, serbiska, somaliska, sorani, spanska, svenska, thailändska och tyska. Kontakta oss så hjälper vi dig att välja rätt språk.',
      },
      {
        title: 'Lärare som talar ditt språk',
        body: 'Våra lärare undervisar på svenska, engelska, arabiska och spanska, både på körlektioner och teorilektioner. Det gör det lättare att ställa frågor och förstå de moment som känns svåra.\n\nTeoriprovet görs hos Trafikverket. Kontrollera hos Trafikverket vilka språk provet finns på och hur du bokar det.',
      },
      {
        title: 'Så kombinerar du teori och körning',
        body: 'Teorin och körningen hänger ihop. Det du läser om i teorin, till exempel väjningsregler och placering i körfältet, blir lättare att förstå när du sedan övar på det under en körlektion.\n\nEtt vanligt upplägg är att börja med teori online, boka en testlektion och sedan planera körlektioner och riskutbildning utifrån din nivå. Riskettan och Risktvåan behöver vara genomförda innan du kan göra körprovet.',
      },
    ],
    facts: [
      ['Format', 'Digital teori för B-körkort.'],
      ['Språk', 'Svenska, engelska och flera andra språk beroende på paket.'],
      ['Pris', 'Teori online från 599 kr enligt publicerad prislista.'],
      ['Komplettering', 'Kan kombineras med körlektioner, intensivkurs och riskutbildning.'],
    ],
  },
  taxiteori: {
    title: 'Taxiteori i Järfälla',
    heading: 'Taxiteori i\nJärfälla',
    intro: 'Teoriutbildning för dig som förbereder dig för taxiförarlegitimation. Pris: 3 500 kr.',
    image: 'driving',
    description:
      'Taxiteori i Järfälla för dig som ska ta taxiförarlegitimation. Förbered dig inför teoriprovet hos Proffs Trafikskola, nära Jakobsberg. Pris 3 500 kr.',
    faqs: [
      {
        q: 'Vad kostar taxiteori?',
        a: 'Taxiteori kostar 3 500 kr enligt vår publicerade prislista.',
      },
      {
        q: 'Vad tar taxiteorin upp?',
        a: 'Utbildningen tar upp trafikregler, vägmärken, fordon, miljöpåverkan och ekonomi i taxiyrket, samt kundbemötande och hur du kan hjälpa personer med funktionsvariationer.',
      },
      {
        q: 'Hur anmäler jag mig till taxiteori?',
        a: 'Kontakta Proffs Trafikskola på 08-644 40 01 eller info@proffstrafikskola.se för information om nästa utbildningstillfälle, språk och upplägg.',
      },
    ],
    sections: [
      {
        title: 'Kunskap för yrket',
        body: 'Taxiteorin tar upp trafikregler, vägmärken, fordon och miljöpåverkan samt ekonomiska aspekter av taxiyrket. Utbildningen ska hjälpa dig att förbereda dig inför teoriprovet.',
      },
      {
        title: 'Säkerhet och kundbemötande',
        body: 'Du lär dig om hjälpmedel, kundbemötande och hur du kan bistå personer med funktionsvariationer och sjukdomar. Kursen tar också upp risker i arbetet som taxiförare och hur de kan hanteras.',
      },
      {
        title: 'Planera din utbildning',
        body: 'Kontakta Proffs Trafikskola för att få information om nästa utbildningstillfälle, språk och upplägg. Det publicerade priset för taxiteori är 3 500 kr.',
      },
    ],
    facts: [
      ['Målgrupp', 'Personer som förbereder sig för taxiförarlegitimation.'],
      ['Pris', '3 500 kr enligt publicerad prislista.'],
      ['Innehåll', 'Trafikregler, vägmärken, fordon, miljö, ekonomi, kundbemötande och säkerhet.'],
    ],
  },
  'vagen-till-korkort': {
    title: 'Vägen till B-körkort, steg för steg',
    heading: 'Vägen till körkort',
    intro:
      'Körkortstillstånd, teori, körning och prov. Vi hjälper dig att få överblick och planera vägen framåt.',
    image: 'vagen-till-korkort',
    description:
      'Steg för steg-guide till B-körkort: körkortstillstånd, teori, körlektioner, riskutbildning, teoriprov och körprov. Från Proffs Trafikskola i Järfälla.',
  },
  kontakt: {
    title: 'Kontakt och öppettider i Järfälla',
    heading: 'Kontakta oss\ni Järfälla',
    intro:
      'Boka en testlektion, fråga om en kurs eller kom förbi skolan. Vi hjälper dig med nästa steg.',
    image: 'herodraw',
    description:
      'Kontakta Proffs Trafikskola på Folkungavägen 10C i Järfälla, nära Jakobsberg och Barkarby. Telefon, e-post, öppettider och vägbeskrivning till skolan.',
    facts: [
      ['Adress', 'Folkungavägen 10C, 177 56 Järfälla.'],
      ['Telefon', '08-644 40 01.'],
      ['E-post', 'info@proffstrafikskola.se.'],
      ['Reception', 'Måndag-torsdag 09:00-18:00, fredag 09:00-16:00.'],
    ],
  },
  boka: {
    title: 'Boka körlektioner och kurser',
    heading: 'Boka körlektioner\noch kurser',
    intro:
      'Välj kursbokning eller e-handel hos Trafikskola Online. För en testlektion och personlig planering hjälper vi dig på telefon.',
    description:
      'Boka kurser eller köp körlektioner och körkortspaket hos Proffs Trafikskola i Järfälla via Trafikskola Online. Behöver du hjälp? Ring oss på 08-644 40 01.',
  },
  villkor: {
    title: 'Villkor och personuppgifter',
    description:
      'Villkor för utbildning, bokning och hantering av personuppgifter hos Proffs Trafikskola i Järfälla. Läs även villkoren som visas vid köp hos Trafikskola Online.',
    heading: 'Villkor och\npersonuppgifter',
    intro:
      'Här finns skolans publicerade villkor för utbildning, bokning och personuppgifter. Läs även villkoren som visas vid köp hos Trafikskola Online.',
    image: 'villkor',
  },
};
export const money = (n: number) => new Intl.NumberFormat('sv-SE').format(n) + ' kr';
