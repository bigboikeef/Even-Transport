import Link from "next/link";
import Brand from "./Brand";
import { LANGUAGES, NAV_KEYS, Lang, getContent } from "@/lib/content";

export default function SiteHeader({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  return <header className="site-header">
    <div className="topbar"><div className="container topbar-inner">
      <span>{t.kicker}</span><div className="topbar-right"><a href="tel:+35223621923">+352 23 62 19 23</a><span className="topbar-rule" /><span>{t.location}</span></div>
    </div></div>
    <div className="container nav-row">
      <Brand lang={lang} />
      <nav className="desktop-nav" aria-label="Main navigation">
        {NAV_KEYS.map(key => <Link key={key} href={"/" + lang + "/" + key}>{t.nav[key]}</Link>)}
      </nav>
      <div className="header-actions">
        <div className="language-picker" aria-label="Language">{LANGUAGES.map(code => <Link key={code} className={code === lang ? "active" : ""} href={"/" + code} lang={code}>{code.toUpperCase()}</Link>)}</div>
        <Link className="nav-contact" href={"/" + lang + "/contact"}>{t.nav.contact}<span aria-hidden="true"> ↗</span></Link>
      </div>
      <details className="mobile-menu"><summary aria-label="Open menu"><span></span><span></span><span></span></summary>
        <nav aria-label="Mobile navigation"><Link href={"/" + lang}>{t.nav.home}</Link>{NAV_KEYS.map(key => <Link key={key} href={"/" + lang + "/" + key}>{t.nav[key]}</Link>)}<div className="mobile-languages">{LANGUAGES.map(code => <Link key={code} href={"/" + code}>{code.toUpperCase()}</Link>)}</div></nav>
      </details>
    </div>
  </header>;
}
