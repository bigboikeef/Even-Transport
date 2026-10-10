import Link from "next/link";
import { isLang, getContent, IMAGES } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function Home({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if (!isLang(lang)) notFound();
  const t=getContent(lang);
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" style={{backgroundImage:'url("' + IMAGES.hero + '")'}} />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <p className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.kicker}</p>
        <h1 id="hero-title">{t.hero1}<br/><em>{t.hero2}</em></h1>
        <p className="hero-description">{t.heroText}</p>
        <div className="hero-buttons"><Link className="button button-blue" href={"/"+lang+"/services"}>{t.discover}<span aria-hidden="true">↗</span></Link><Link className="button button-outline" href={"/"+lang+"/presentation"}>{t.ourStory}<span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="hero-side-tag">EST. 1966 <span>—</span> LUXEMBOURG</div>
      <div className="hero-bottom"><div className="container"><span>01 / 03</span><span className="hero-bottom-line"/><span>TRANSPORTS EVEN</span></div></div>
    </section>

    <section className="facts-strip" aria-label="Company highlights"><div className="container facts-grid">
      <div className="fact"><span className="fact-symbol">01</span><div><strong>1966</strong><small>{t.established}</small></div></div>
      <div className="fact"><span className="fact-symbol">02</span><div><strong>ELL</strong><small>{t.based}</small></div></div>
      <div className="fact"><span className="fact-symbol">03</span><div><strong>EUROPE</strong><small>{t.coverage}</small></div></div>
    </div></section>

    <section className="section services-section"><div className="container">
      <div className="section-intro"><div><p className="eyebrow"><span className="eyebrow-line"/>{t.serviceEyebrow}</p><h2>{t.serviceHeading}</h2></div><p>{t.serviceIntro}</p></div>
      <div className="service-grid">{t.servicesList.map((title,i)=><Link className="service-card" href={"/"+lang+"/services"} key={title}><span className="service-number">0{i+1}</span><div className={"service-graphic graphic-"+i}><span /></div><h3>{title}</h3><p>{t.servicesDesc[i]}</p><span className="service-arrow" aria-hidden="true">↗</span></Link>)}</div>
    </div></section>

    <section className="about-section"><div className="about-photo"><img src={IMAGES.roadside} alt="Camion Volvo Transports Even en déplacement" loading="lazy" /></div><div className="about-copy"><div className="about-copy-inner"><p className="eyebrow"><span className="eyebrow-line"/>{t.aboutEyebrow}</p><h2>{t.aboutHeading}</h2><p>{t.aboutText}</p><div className="about-year"><strong>1966</strong><span>{t.since}</span></div><Link className="text-link" href={"/"+lang+"/presentation"}>{t.aboutButton}<span aria-hidden="true">↗</span></Link></div></div></section>

    <section className="section fleet-section"><div className="container"><div className="section-intro fleet-intro"><div><p className="eyebrow"><span className="eyebrow-line"/>{t.fleetEyebrow}</p><h2>{t.fleetHeading}</h2></div><div><p>{t.fleetText}</p><Link className="text-link" href={"/"+lang+"/fleet"}>{t.fleetButton}<span aria-hidden="true">↗</span></Link></div></div>
      <div className="fleet-photos"><img src={IMAGES.volvo} alt="Camion Volvo Transports Even" loading="lazy"/><img src={IMAGES.daf} alt="Camion DAF Transports Even" loading="lazy"/><img src={IMAGES.renault} alt="Camion Renault Transports Even" loading="lazy"/></div>
    </div></section>

    <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-line"/>{t.ctaEyebrow}</p><h2>{t.ctaHeading}</h2><p>{t.ctaText}</p></div><Link className="button button-white" href={"/"+lang+"/contact"}>{t.ctaButton}<span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
