import Link from "next/link";
import Brand from "./Brand";
import { NAV_KEYS, Lang, getContent } from "@/lib/content";
export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand"><Brand lang={lang} inverse /><p>{t.heroText}</p><span className="footer-small">{t.since} · {t.location}</span></div>
      <div className="footer-links"><h3>EXPLORE</h3>{NAV_KEYS.map(key => <Link href={"/" + lang + "/" + key} key={key}>{t.nav[key]}</Link>)}</div>
      <div className="footer-address"><h3>TRANSPORTS EVEN</h3><p>62, Réidenerstrooss<br/>L-8530 Ell<br/>Luxembourg</p><a href="tel:+35223621923">+352 23 62 19 23</a><a href="mailto:info@even.lu">info@even.lu</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Transports Even</span><span>{t.photoCredit}</span><Link href={"/" + lang + "/legal"}>{t.nav.legal}</Link></div>
  </footer>;
}
