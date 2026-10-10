import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, getContent, IMAGES } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

const slugs=["presentation","services","fleet","careers","art","contact","legal"] as const;
type Slug=typeof slugs[number];
const sourceGallery="https://www.even.lu/fr/art-by-even-77304/art-by-even-77306";

export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata> {
  const {lang,slug}=await params;
  if(!isLang(lang)||!slugs.includes(slug as Slug)) return {};
  const t=getContent(lang);
  return {title:t.nav[slug as Slug]};
}

export default async function InnerPage({params}:{params:Promise<{lang:string;slug:string}>}) {
  const {lang,slug}=await params;
  if(!isLang(lang)||!slugs.includes(slug as Slug)) notFound();
  const t=getContent(lang);
  const link=(path:string)=>"/"+lang+"/"+path;
  const title=slug==="presentation"?t.presentationTitle:slug==="careers"?t.careerTitle:slug==="art"?t.artTitle:slug==="contact"?t.contactTitle:slug==="legal"?t.legalTitle:t.nav[slug as Slug];
  const intro=slug==="presentation"?t.presentationIntro:slug==="careers"?t.careerIntro:slug==="art"?t.artIntro:slug==="contact"?t.contactIntro:slug==="services"?t.serviceIntro:slug==="fleet"?t.fleetText:"";
  return <>
    <section className="interior-hero"><div className="container"><Link href={"/"+lang} className="breadcrumb">← {t.nav.home}</Link><p className="eyebrow"><span className="eyebrow-line"/>TRANSPORTS EVEN / {t.nav[slug as Slug].toUpperCase()}</p><h1>{title}</h1>{intro&&<p className="interior-lead">{intro}</p>}</div></section>
    {slug==="presentation"&&<section className="section"><div className="container split-page">
      <div className="story-photo"><img src={IMAGES.roadside} alt="Camion Transports Even" /></div>
      <div className="rich-copy"><p className="eyebrow"><span className="eyebrow-line"/>{t.aboutEyebrow}</p><h2>{t.aboutHeading}</h2><p>{t.aboutText}</p>
      <div className="timeline"><div><strong>1966</strong><p>Albert Even — premier camion Mercedes pour le transport de lait / first truck for milk transport.</p></div><div><strong>1991</strong><p>Marc Even rejoint l'entreprise familiale / joins the family business.</p></div><div><strong>1992</strong><p>Début du transport quotidien vers Paris avec Kuehne & Nagel / daily freight to Paris begins.</p></div><div><strong>1999</strong><p>Nouvelle étape pour l'entreprise familiale à Ell / the company expands its base in Ell.</p></div></div>
      <Link className="text-link" href={link("contact")}>{t.ctaButton} ↗</Link></div>
    </div></section>}
    {slug==="services"&&<section className="section"><div className="container"><div className="service-grid page-service-grid">{t.servicesList.map((s,i)=><div key={s} className="service-card static-service"><span className="service-number">0{i+1}</span><div className={"service-graphic graphic-"+i}><span /></div><h2>{s}</h2><p>{t.servicesDesc[i]}</p></div>)}</div>
      <div className="info-banner"><h2>TRUCK WASH</h2><p>{lang==="fr"?"Lavage de camions et de camionnettes sur demande. Entretien des remorques dans notre atelier à Ell.":lang==="de"?"LKW- und Transporterwäsche auf Anfrage. Wartung der Anhänger in unserer Werkstatt in Ell.":lang==="lu"?"Camion- a Camionnettenwäsch op Ufro. Ënnerhalt vun Unhänger an eisem Atelier zu Ell.":"Truck and van washing on request. Trailer maintenance at our workshop in Ell."}</p><Link className="text-link" href={link("contact")}>{t.ctaButton} ↗</Link></div>
    </div></section>}
    {slug==="fleet"&&<section className="section"><div className="container"><div className="gallery-grid">{[
      [IMAGES.hero,"Transports Even — semi-remorque"],[IMAGES.roadside,"Volvo Transports Even"],[IMAGES.daf,"DAF Transports Even"],[IMAGES.volvo,"Volvo — dépôt"],[IMAGES.renault,"Renault Transports Even"],[IMAGES.lorry,"Camion-remorque Transports Even"]
    ].map(([src,alt])=><figure key={src+"-"+alt}><img src={src} alt={alt} loading="lazy"/><figcaption>{alt}</figcaption></figure>)}</div></div></section>}
    {slug==="careers"&&<section className="section"><div className="container compact-content"><p>{t.careerBody}</p><div className="info-banner"><h2>Permis C / CE</h2><p>{lang==="de"?"Bewerbung und Lebenslauf per E-Mail an:":"Candidatures / applications:"} <a href="mailto:info@even.lu">info@even.lu</a></p><a className="button button-blue" href="mailto:info@even.lu?subject=Candidature%20chauffeur%20C%2FCE">{t.careerApply} ↗</a></div></div></section>}
    {slug==="art"&&<section className="section"><div className="container art-placeholder"><div className="art-decoration" aria-hidden="true"><span>ART</span><span>BY EVEN</span></div><div><h2>ART BY EVEN</h2><p>{t.artIntro}</p><a className="text-link" href={sourceGallery} target="_blank" rel="noopener noreferrer">{t.artButton} ↗</a></div></div></section>}
    {slug==="contact"&&<section className="section"><div className="container contact-grid"><div className="contact-details"><p className="eyebrow"><span className="eyebrow-line"/>{t.nav.contact}</p><h2>Transports Even</h2><address>62, Réidenerstrooss<br/>L-8530 Ell<br/>Luxembourg</address><div className="detail-group"><span>{t.mail}</span><a href="mailto:info@even.lu">info@even.lu</a></div><div className="detail-group"><span>{t.phone}</span><a href="tel:+35223621923">+352 23 62 19 23</a></div><div className="detail-group"><span>{t.mobile}</span><a href="tel:+352621371900">+352 621 371 900</a></div><div className="detail-group"><span>{t.opening}</span><p>{t.weekdays}</p></div><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=62+Reidenerstrooss+8530+Ell+Luxembourg" target="_blank" rel="noopener noreferrer">Google Maps ↗</a></div><ContactForm lang={lang}/></div></section>}
    {slug==="legal"&&<section className="section"><div className="container compact-content legal-content"><h2>Transports Even</h2><dl><dt>Adresse</dt><dd>62, Réidenerstrooss, L-8530 Ell, Luxembourg</dd><dt>TVA / VAT</dt><dd>LU17894555</dd><dt>Registre de commerce</dt><dd>B105184</dd><dt>Code NACE</dt><dd>49410 — Transports routiers de fret</dd><dt>E-mail</dt><dd><a href="mailto:info@even.lu">info@even.lu</a></dd></dl><p>{lang==="fr"?"Informations issues du site actuel, à valider avant publication.":"Information from the existing website; review before publication."}</p></div></section>}
  </>;
}
