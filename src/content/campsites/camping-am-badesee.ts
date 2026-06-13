import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-am-badesee";

const campingAmBadesee: CampsiteConfig = {
  name: "Camping am Badesee",
  shortName: "Badesee",
  slug: "camping-am-badesee",
  ort: "Mühlen am Zirbitzkogel",
  region: "Steiermark",
  brandKind: "Naturpark-Camping",
  see: "Mühlner See",
  regionLong: "Naturpark Zirbitzkogel-Grebenzen · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Kleiner Naturpark-Campingplatz am Badesee",
  claimEmphasis: "am Badesee",
  emailDetail: "euer eigener Badestrand direkt am Mühlner See",
  intro:
    "Am Fuße des Zirbitzkogels findest du unseren kleinen Naturpark-Campingplatz direkt am 7 Hektar großen Badesee, der im Sommer bis zu 26 Grad warm wird — mit eigenem Badestrand, 60 terrassierten Stellplätzen und gemütlichem Gasthaus.",

  logo: { src: `${IMG}/logo-3a09c5586f.png`, alt: "Camping am Badesee Logo" },

  statement: {
    text: "Morgens wecken dich die Vögel aus den Birken, abends geht es über den eigenen Steg ins 26 Grad warme Wasser.",
    emphasis: "über den eigenen Steg",
  },

  pillars: [
    {
      title: "Direkt am Badesee",
      text: "Eigener Badestrand mit Steg am 7 Hektar großen Mühlner See — an der Sonnenseite der Seetaler Alpen.",
      image: { src: `${IMG}/activity-009c4b0b20.webp`, alt: "Badestrand mit Steg am Mühlner See" },
    },
    {
      title: "Mitten im Naturpark",
      text: "Terrassierte Wiesenstellplätze im Naturpark Zirbitzkogel-Grebenzen, ringsum Wald, Wiesen und Berge.",
      image: { src: `${IMG}/gallery-9d05bad522.webp`, alt: "Stellplätze des Campingplatzes mit Bergblick" },
    },
    {
      title: "Zirbitzlamm vom eigenen Hof",
      text: "Zum Platz gehört ein Bio-Schafbauernhof — das „Zirbitzlamm“ landet als Spezialität im Gasthaus.",
      image: { src: `${IMG}/gallery-a74c0b051a.webp`, alt: "Schafe auf der Weide am Bio-Schafbauernhof" },
    },
  ],

  usps: [
    "Eigener Badestrand am See",
    "60 terrassierte Stellplätze",
    "Gasthaus mit Sonnenterrasse",
    "Frühstücksgebäck-Service",
    "Hunde willkommen",
    "Umweltzeichen-Betrieb",
  ],

  trust: {
    heading: "Klein, familiär und mitten in der Natur",
    headingEmphasis: "familiär",
    intro:
      "Familie Wernig führt den Platz persönlich: 60 Stellplätze, ausgezeichnet als erster Campingplatz Österreichs mit Wandergütesiegel und mit dem Umweltzeichen — bewertet mit 4,9 auf camping.info.",
  },

  awards: [
    { label: "Österreichisches & Europäisches Umweltzeichen" },
    {
      label: "1. Wandergütesiegel-Campingplatz Österreichs",
      image: { src: `${IMG}/award-f1fc434e71.png`, alt: "Österreichisches Wandergütesiegel" },
    },
  ],

  saison: { von: "Ende April", bis: "Ende September" },

  hero: {
    aerial: {
      src: `${IMG}/activity-bed197c7fa.webp`,
      alt: "Camping am Badesee: Stellplätze und Badestrand am Mühlner See",
    },
  },

  breather: {
    image: { src: `${IMG}/gallery-76539e49af.webp`, alt: "Luftaufnahme des Campingplatzes am Mühlner See" },
    line: "Zwischen Seetaler Alpen und Wald — dein Platz liegt direkt am Wasser.",
  },

  camping: {
    heading: "Dein Stellplatz am Mühlner See",
    intro:
      "Terrassenförmig zum Wasser angelegt, mit kurzen Wegen zu Strand, Sanitärhaus und Gasthaus — hier ist alles für entspannte Campingtage beisammen.",
    features: [
      {
        title: "Eigener Badesteg & Strand",
        text: "Vom Stellplatz sind es nur wenige Schritte zum eigenen Badestrand mit Steg am 7 Hektar großen Mühlner See.",
        image: { src: `${IMG}/activity-dd1a329860.webp`, alt: "Badesteg am Campingstrand des Mühlner Sees" },
      },
      {
        title: "60 terrassierte Stellplätze",
        text: "Der Platz ist terrassenförmig zum See angelegt — 60 Stellplätze für Zelt, Wohnwagen und Wohnmobil, mitten in der Natur.",
        image: { src: `${IMG}/gallery-85a0591c6d.webp`, alt: "Familie beim Camping zwischen den Zelten" },
      },
      {
        title: "Gasthaus mit Sonnenterrasse",
        text: "Im Gasthaus gibt es hausgemachte Gerichte, Mehlspeisen und Eisbecher sowie Spezialitäten vom hofeigenen Zirbitzlamm.",
        image: { src: `${IMG}/gallery-b79d839f27.webp`, alt: "Gasthaus mit Sonnenterrasse am Campingplatz" },
      },
      {
        title: "Frühstücksgebäck-Service",
        text: "Täglich ab 8 Uhr frisches Gebäck, hausgemachte Marmeladen, Bio-Honig, Bauernbutter und frische Flaschenmilch — abholen oder im Gasthaus genießen.",
        image: { src: `${IMG}/gallery-e8c29928e9.webp`, alt: "Frühstücksgebäck mit Marmelade, Honig und Milch" },
      },
      {
        title: "Baby- & Kleinkindpflege",
        text: "Für die Kleinsten stehen Wickeltisch, Badewanne, Flaschenwärmer und Töpfchen bereit — die Sanitäranlagen wurden frisch renoviert.",
        image: { src: `${IMG}/gallery-b04b421dea.webp`, alt: "Wickelraum mit Babybadewanne im Sanitärhaus" },
      },
      {
        title: "Hunde willkommen",
        text: "Dein Hund darf mit: an der Leine über den Platz, mit drei Gratis-Sackerlautomaten und einer Badestelle im Abflussbereich des Sees.",
        image: { src: `${IMG}/gallery-e522188823.webp`, alt: "Kinder mit Hund am Campingplatz" },
      },
    ],
  },

  kinder: {
    heading: "Was Kinder hier den ganzen Tag machen",
    intro:
      "Spielplatz, Streicheltiere und im Sommer Kinderanimation ab 3 Jahren — bei uns wird Kindern garantiert nicht langweilig.",
    features: [
      {
        title: "Spielplatz & Sandkiste",
        text: "Sandkiste, große Nestschaukel, Rutsche, Trampoline und Tischtennis liegen direkt am Platz und gut im Blick.",
        image: { src: `${IMG}/kids-cdd66ad80c.webp`, alt: "Kinder spielen in der Sandkiste am Spielplatz" },
      },
      {
        title: "Ziegen & Hasen zum Streicheln",
        text: "Gleich neben dem Spielplatz wohnen Ziegen und Hasen — sie freuen sich über frische Kräuter, Äpfel und Karotten.",
        image: { src: `${IMG}/kids-f7ee25189b.webp`, alt: "Kinder führen eine Ziege über die Wiese" },
      },
      {
        title: "Kinderanimation ab 3 Jahren",
        text: "In den Ferien gibt es wöchentlich Kinderolympiade, Kinderschminken, Filzen, Kräuterwanderung und Lagerfeuer mit Steckerlbrot.",
        image: { src: `${IMG}/kids-745542195f.webp`, alt: "Kinder beim Bogenschießen mit Betreuer" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Der Naturpark beginnt am Vorzelt",
    intro:
      "Baden, angeln, wandern oder biken — der Naturpark Zirbitzkogel-Grebenzen und die Wanderregion Murau liegen direkt vor der Tür.",
    items: [
      {
        title: "Baden bei jedem Wetter",
        text: "Der Badesee wird im Sommer bis zu 26 Grad warm — und wie es bei uns heißt: Es gibt kein schlechtes Badewetter.",
        image: { src: `${IMG}/gallery-25dac3817c.webp`, alt: "Kind beim Baden im See unter einem Regenschirm" },
      },
      {
        title: "Angeln am Mühlner See",
        text: "Der 7 Hektar große See zählt zu den schönsten Fischgewässern der Steiermark — den Karpfen fürs Mittagessen angelst du selbst.",
        image: { src: `${IMG}/activity-d9df1dd2fb.webp`, alt: "Angelruten am Ufer des Mühlner Sees" },
      },
      {
        title: "14 Gipfel über 2.000 m",
        text: "Über 100 km markierte Wanderwege führen durch den Naturpark — als erster Campingplatz Österreichs mit Wandergütesiegel.",
        image: { src: `${IMG}/hero-453a7a86f4.webp`, alt: "Gipfelkreuz mit Panorama der Seetaler Alpen" },
      },
      {
        title: "Radfahren & Mountainbiken",
        text: "Vom See aus starten zahlreiche Touren durch den Naturpark Zirbitzkogel-Grebenzen und die Wanderregion Murau.",
        image: { src: `${IMG}/activity-346544db65.webp`, alt: "Radfahrer an einem Waldsee in der Naturparkregion" },
      },
      {
        title: "Sautrogregatta & Bootsspaß",
        text: "Am See sorgen die beliebte Sautrogregatta und allerhand Bootsspaß für gute Laune bei großen und kleinen Gästen.",
        image: { src: `${IMG}/activity-d7b261eab6.webp`, alt: "Sautrogregatta am Mühlner See" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Mühlen am Zirbitzkogel",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S36 Murtal Schnellstraße bis Judenburg oder Neumarkt in der Steiermark, dann nach Mühlen am Zirbitzkogel — der Platz ist ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Neumarkt in der Steiermark, von dort weiter mit Bus oder Taxi nach Mühlen.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Klagenfurt und Graz liegen jeweils rund eine Stunde mit dem Auto entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Badesee",
    headingEmphasis: "Sommer",
    intro:
      "Vom Steg ins kühle Nass, Kesselgulasch am Abend und ein Ferienhaus mit eigenem Strand — ein paar Eindrücke vom Platz.",
    tag: "Ende April bis Ende September",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-2057ec484b.webp`, alt: "Kesselgulasch über dem offenen Feuer" },
      { src: `${IMG}/gallery-9fab504c22.webp`, alt: "Frisch gezapftes Bier an der Bar im Gasthaus" },
      { src: `${IMG}/accommodation-5449e0501a.webp`, alt: "Ferienhaus mit Terrasse am Campingplatz" },
      { src: `${IMG}/activity-c2ac3b0c14.webp`, alt: "Wanderpaar im Naturpark Zirbitzkogel-Grebenzen" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Wasser",
    headingEmphasis: "am Wasser",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Wernig meldet sich persönlich mit einem passenden Angebot. Direktbuchung per E-Mail oder Telefon ist am günstigsten.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise laut Website · Mobile Home „Birkenbaum“ ab € 140 / Nacht (1–4 Personen) · Stellplatz- und Ferienhaus-Preise auf Anfrage.",
    highlight: {
      title: "Direkt am Badesee",
      text: "Vom Stellplatz sind es nur wenige Schritte bis zum eigenen Strand.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz am See" },
      { id: "mobilehome", label: "Mobile Home „Birkenbaum“", perNight: 140 },
      { id: "ferienhaus", label: "Ferienhaus für 7 Personen" },
    ],
  },

  kontakt: {
    coords: { lat: 47.036945, lng: 14.486816 },
    tel: "+43 3586 2418",
    telHref: "tel:+4335862418",
    mail: "office@camping-am-badesee.at",
    facebook: "https://www.facebook.com/Camping-am-Badesee-322639027811715/",
    adresse: "Hitzmannsdorf 2 · 8822 Mühlen am Zirbitzkogel · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Kinder", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingAmBadesee;
