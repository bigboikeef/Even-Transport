export const LANGUAGES = ["fr", "de", "lu", "en"] as const;
export type Lang = (typeof LANGUAGES)[number];
export function isLang(value: string): value is Lang {
  return LANGUAGES.includes(value as Lang);
}
export const IMAGES = {
  hero: "https://www.even.lu/images/a482960676c14fb3ac019ccc86ea9caf.jpg",
  roadside: "https://www.even.lu/images/06ede5c202a3465199d5a48faabda3d1.jpg",
  daf: "https://www.even.lu/images/29f911b3ad3a4a6681f6101b9f67d4fc.jpg",
  volvo: "https://www.even.lu/images/c515d5e66b7c431fbc2267f07a08fead.jpg",
  renault: "https://www.even.lu/images/2b918ce36a99470592495283c5efc3b9.jpg",
  wash: "https://www.even.lu/images/a482960676c14fb3ac019ccc86ea9caf.jpg",
  lorry: "https://www.even.lu/images/5446cd18be474c339c2b210cd03b0027.jpg",
} as const;

type Messages = {
  nav: {home:string; presentation:string; services:string; fleet:string; careers:string; art:string; contact:string; legal:string};
  location:string; kicker:string; hero1:string; hero2:string; heroText:string; discover:string; ourStory:string;
  since:string; established:string; based:string; coverage:string; where:string;
  serviceEyebrow:string; serviceHeading:string; serviceIntro:string; servicesList:[string,string,string]; servicesDesc:[string,string,string];
  aboutEyebrow:string; aboutHeading:string; aboutText:string; aboutButton:string;
  fleetEyebrow:string; fleetHeading:string; fleetText:string; fleetButton:string;
  ctaEyebrow:string; ctaHeading:string; ctaText:string; ctaButton:string;
  contactTitle:string; contactIntro:string; mail:string; phone:string; mobile:string; opening:string; weekdays:string;
  formName:string; formMail:string; formPhone:string; formMessage:string; formCopy:string; formSend:string; formNotice:string;
  presentationTitle:string; presentationIntro:string;
  careerTitle:string; careerIntro:string; careerBody:string; careerApply:string;
  artTitle:string; artIntro:string; artButton:string;
  legalTitle:string; moreInfo:string; photoCredit:string;
};
export const CONTENT: Record<Lang, Messages> = {
  fr: {
    nav:{home:"Accueil",presentation:"Présentation",services:"Services",fleet:"Nos véhicules",careers:"Carrières",art:"Art by Even",contact:"Contact",legal:"Mentions légales"},
    location:"Ell · Luxembourg",kicker:"TRANSPORT ROUTIER · DEPUIS 1966",hero1:"DES ROUTES.",hero2:"DES LIENS.",heroText:"Une entreprise familiale luxembourgeoise au service du transport routier de marchandises, au Luxembourg et au-delà de ses frontières.",discover:"Nos services",ourStory:"Notre histoire",
    since:"Depuis 1966",established:"Une histoire de famille",based:"Basés à Ell",coverage:"France · Belgique · Luxembourg",where:"Notre réseau",
    serviceEyebrow:"CE QUE NOUS FAISONS",serviceHeading:"Le transport, notre métier.",serviceIntro:"Des solutions de transport routier adaptées aux marchandises et aux besoins de nos clients.",
    servicesList:["Marchandises générales","Transport en vrac","Transport volumineux"],servicesDesc:["Transport routier de marchandises générales.","Solutions de transport routier pour produits en vrac.","Prise en charge de marchandises volumineuses."],
    aboutEyebrow:"UNE HISTOIRE DE FAMILLE",aboutHeading:"Sur la route depuis 1966.",aboutText:"Tout a commencé lorsqu'Albert Even a acheté son premier camion pour transporter du lait. Depuis, l'entreprise familiale a grandi, tout en restant fidèle à ses racines à Ell.",aboutButton:"Découvrir notre histoire",
    fleetEyebrow:"SUR LA ROUTE",fleetHeading:"Notre flotte, notre fierté.",fleetText:"Des véhicules aux couleurs de Transports Even, prêts à assurer nos transports au quotidien.",fleetButton:"Voir nos véhicules",
    ctaEyebrow:"PRENONS LA ROUTE ENSEMBLE",ctaHeading:"Un transport à organiser ?",ctaText:"Parlons de vos besoins. Notre équipe est à votre écoute.",ctaButton:"Nous contacter",
    contactTitle:"Parlons de votre transport.",contactIntro:"Une question, une demande ou un projet ? Contactez directement notre équipe à Ell.",
    mail:"E-mail",phone:"Téléphone",mobile:"Mobile",opening:"Horaires",weekdays:"Lun. – Ven. · 08:00 – 17:30",
    formName:"Nom et prénom",formMail:"E-mail",formPhone:"Téléphone",formMessage:"Votre message",formCopy:"M'envoyer une copie",formSend:"Préparer l'e-mail",formNotice:"Le formulaire prépare un e-mail dans votre messagerie. Il n'envoie pas directement de message depuis le site.",
    presentationTitle:"Notre histoire.",presentationIntro:"Une entreprise familiale luxembourgeoise, née sur les routes en 1966.",
    careerTitle:"Rejoignez l'équipe.",careerIntro:"Les Transports Even recrutent régulièrement des chauffeurs routiers titulaires du permis C ou CE.",careerBody:"Vous êtes ponctuel, autonome, à l'aise en équipe et expérimenté dans le transport ? Contactez-nous pour échanger.",careerApply:"Envoyer mon CV",
    artTitle:"Art by Even.",artIntro:"Découvrez l'univers artistique de Transports Even. La galerie historique comporte 11 entrées et sera intégrée prochainement.",artButton:"Voir la galerie actuelle",
    legalTitle:"Mentions légales.",moreInfo:"En savoir plus",photoCredit:"Photos : Transports Even · site actuel"
  },
  de: {
    nav:{home:"Startseite",presentation:"Über uns",services:"Leistungen",fleet:"Unsere Fahrzeuge",careers:"Karriere",art:"Art by Even",contact:"Kontakt",legal:"Impressum"},
    location:"Ell · Luxemburg",kicker:"GÜTERTRANSPORT · SEIT 1966",hero1:"WEGE.",hero2:"DIE VERBINDEN.",heroText:"Ein luxemburgisches Familienunternehmen für Straßengütertransporte in Luxemburg und über die Grenzen hinaus.",discover:"Unsere Leistungen",ourStory:"Unsere Geschichte",
    since:"Seit 1966",established:"Ein Familienunternehmen",based:"Standort Ell",coverage:"Frankreich · Belgien · Luxemburg",where:"Unser Netzwerk",
    serviceEyebrow:"UNSERE LEISTUNGEN",serviceHeading:"Transport ist unser Beruf.",serviceIntro:"Straßentransportlösungen für Waren und unterschiedliche Kundenanforderungen.",
    servicesList:["Stück- und allgemeine Güter","Schüttguttransporte","Großvolumige Transporte"],servicesDesc:["Straßentransport allgemeiner Güter.","Transportlösungen für Schüttgut.","Transporte für großvolumige Güter."],
    aboutEyebrow:"FAMILIENTRADITION",aboutHeading:"Unterwegs seit 1966.",aboutText:"Alles begann mit Albert Evens erstem Lastwagen für den Milchtransport. Seitdem ist das Familienunternehmen gewachsen und fest in Ell verwurzelt.",aboutButton:"Geschichte entdecken",
    fleetEyebrow:"UNTERWEGS",fleetHeading:"Unsere Flotte. Unser Stolz.",fleetText:"Fahrzeuge in den Farben von Transports Even für den täglichen Transport.",fleetButton:"Fahrzeuge ansehen",
    ctaEyebrow:"LASSEN SIE UNS SPRECHEN",ctaHeading:"Ein Transportvorhaben?",ctaText:"Unser Team freut sich auf Ihre Anfrage.",ctaButton:"Kontakt aufnehmen",
    contactTitle:"Sprechen wir über Transport.",contactIntro:"Frage, Anfrage oder Projekt? Kontaktieren Sie unser Team in Ell.",
    mail:"E-Mail",phone:"Telefon",mobile:"Mobil",opening:"Öffnungszeiten",weekdays:"Mo. – Fr. · 08:00 – 17:30",
    formName:"Vor- und Nachname",formMail:"E-Mail",formPhone:"Telefon",formMessage:"Nachricht",formCopy:"Kopie an mich",formSend:"E-Mail vorbereiten",formNotice:"Das Formular öffnet Ihr E-Mail-Programm. Es versendet keine Nachricht direkt über die Website.",
    presentationTitle:"Unsere Geschichte.",presentationIntro:"Ein luxemburgisches Familienunternehmen, unterwegs seit 1966.",
    careerTitle:"Arbeiten bei Even.",careerIntro:"Wir suchen regelmäßig Berufskraftfahrerinnen und Berufskraftfahrer mit Führerschein C oder CE.",careerBody:"Sie sind pünktlich, selbstständig, teamfähig und erfahren im Transport? Melden Sie sich bei uns.",careerApply:"Lebenslauf senden",
    artTitle:"Art by Even.",artIntro:"Entdecken Sie die künstlerische Seite von Transports Even. Die historische Galerie mit 11 Einträgen wird noch übertragen.",artButton:"Bisherige Galerie öffnen",
    legalTitle:"Impressum.",moreInfo:"Mehr erfahren",photoCredit:"Fotos: Transports Even · bisherige Website"
  },
  lu: {
    nav:{home:"Startsäit",presentation:"Iwwer eis",services:"Servicer",fleet:"Eis Gefierer",careers:"Karriär",art:"Art by Even",contact:"Kontakt",legal:"Rechtlech Informatiounen"},
    location:"Ell · Lëtzebuerg",kicker:"STROOSSENTRANSPORT · ZËNTER 1966",hero1:"MIR VERBANNEN",hero2:"DESTINATIOUNEN.",heroText:"E Lëtzebuerger Familljebetrib fir de Stroossentransport vu Wueren, zu Lëtzebuerg an iwwer d'Grenzen eraus.",discover:"Eis Servicer",ourStory:"Eis Geschicht",
    since:"Zënter 1966",established:"E Familljebetrib",based:"Zu Ell doheem",coverage:"Frankräich · Belsch · Lëtzebuerg",where:"Eist Netz",
    serviceEyebrow:"WAT MIR MAACHEN",serviceHeading:"Transport ass eist Handwierk.",serviceIntro:"Stroossentransport fir verschidde Wueren an Ufuerderungen.",
    servicesList:["Allgemeng Wueren","Transport vu Schëttwueren","Groussvolumegen Transport"],servicesDesc:["Stroossentransport vun allgemenge Wueren.","Transport vu Schëttwueren.","Transport vu voluminéise Wueren."],
    aboutEyebrow:"FAMILLJENTRADITIOUN",aboutHeading:"Ënnerwee zënter 1966.",aboutText:"Et huet ugefaange mam Albert Even sengem éischte Camion fir Mëllech ze transportéieren. Haut ass de Familljebetrib weiderhin zu Ell verwuerzelt.",aboutButton:"Eis Geschicht entdecken",
    fleetEyebrow:"OP DER STROOSS",fleetHeading:"Eis Flott. Eise Stolz.",fleetText:"Gefierer an de Faarwe vun Transports Even, all Dag am Asaz.",fleetButton:"Eis Gefierer gesinn",
    ctaEyebrow:"KOMME MIR AN D'GESPRÉICH",ctaHeading:"Eppes ze transportéieren?",ctaText:"Eist Team freet sech op Är Ufro.",ctaButton:"Kontaktéiert eis",
    contactTitle:"Schwätze mir iwwer Transport.",contactIntro:"Eng Fro oder eng Ufro? Kontaktéiert eis Ekipp zu Ell.",
    mail:"E-Mail",phone:"Telefon",mobile:"Handy",opening:"Ëffnungszäiten",weekdays:"Mé. – Fr. · 08:00 – 17:30",
    formName:"Vir- an Numm",formMail:"E-Mail",formPhone:"Telefon",formMessage:"Äre Message",formCopy:"Kopie u mech",formSend:"E-Mail virbereeden",formNotice:"De Formulaire mécht Ären E-Mail-Programm op. Et gëtt näischt direkt vun dëser Säit geschéckt.",
    presentationTitle:"Eis Geschicht.",presentationIntro:"E Lëtzebuerger Familljebetrib op der Strooss zënter 1966.",
    careerTitle:"Gitt Deel vun eisem Team.",careerIntro:"Mir sichen reegelméisseg Camionschauffere mat Führerschäin C oder CE.",careerBody:"Dir sidd pünktlech, selbststänneg an teamfäeg? Kontaktéiert eis.",careerApply:"CV schécken",
    artTitle:"Art by Even.",artIntro:"Entdeckt d'kreativ Säit vun Transports Even. Déi ursprénglech Galerie gëtt nach iwwerholl.",artButton:"Originalgalerie kucken",
    legalTitle:"Rechtlech Informatiounen.",moreInfo:"Méi gewuer ginn",photoCredit:"Fotoen: Transports Even · aktuell Websäit"
  },
  en: {
    nav:{home:"Home",presentation:"About us",services:"Services",fleet:"Our vehicles",careers:"Careers",art:"Art by Even",contact:"Contact",legal:"Legal notice"},
    location:"Ell · Luxembourg",kicker:"ROAD FREIGHT · SINCE 1966",hero1:"MOVING GOODS.",hero2:"CONNECTING PLACES.",heroText:"A Luxembourg family-owned road transport company, serving customers at home and across borders.",discover:"Explore services",ourStory:"Our story",
    since:"Since 1966",established:"A family business",based:"Based in Ell",coverage:"France · Belgium · Luxembourg",where:"Our network",
    serviceEyebrow:"WHAT WE DO",serviceHeading:"Transport is what we do.",serviceIntro:"Road freight solutions tailored to different types of cargo and customer needs.",
    servicesList:["General freight","Bulk transport","High-volume freight"],servicesDesc:["Road transport for general goods.","Road freight solutions for bulk products.","Transport for large-volume consignments."],
    aboutEyebrow:"A FAMILY STORY",aboutHeading:"On the road since 1966.",aboutText:"It began when Albert Even bought his first truck to transport milk. The family company has grown while staying true to its roots in Ell, Luxembourg.",aboutButton:"Discover our story",
    fleetEyebrow:"ON THE ROAD",fleetHeading:"Our fleet. Our pride.",fleetText:"Vehicles wearing the Transports Even colours, working every day for our customers.",fleetButton:"Explore the fleet",
    ctaEyebrow:"LET'S GET MOVING",ctaHeading:"Have goods to move?",ctaText:"Tell us what you need. Our team is here to help.",ctaButton:"Get in touch",
    contactTitle:"Let's talk transport.",contactIntro:"A question, request or project? Contact our team in Ell directly.",
    mail:"Email",phone:"Phone",mobile:"Mobile",opening:"Opening hours",weekdays:"Mon. – Fri. · 08:00 – 17:30",
    formName:"Full name",formMail:"Email",formPhone:"Phone",formMessage:"Your message",formCopy:"Send me a copy",formSend:"Prepare email",formNotice:"This form opens an email draft in your mail app. It does not send directly from the website.",
    presentationTitle:"Our story.",presentationIntro:"A Luxembourg family company on the road since 1966.",
    careerTitle:"Join the team.",careerIntro:"Transports Even regularly recruits truck drivers with a C or CE licence.",careerBody:"Are you punctual, independent, a good team player and experienced in transport? Get in touch.",careerApply:"Send my CV",
    artTitle:"Art by Even.",artIntro:"Explore the creative side of Transports Even. The original 11-item gallery is being prepared for migration.",artButton:"View original gallery",
    legalTitle:"Legal notice.",moreInfo:"Learn more",photoCredit:"Photos: Transports Even · existing website"
  }
};
export function getContent(lang: Lang) { return CONTENT[lang]; }
export const NAV_KEYS = ["presentation", "services", "fleet", "careers", "art", "contact"] as const;
