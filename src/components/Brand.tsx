import Link from "next/link";
export default function Brand({ lang, inverse = false }: { lang: string; inverse?: boolean }) {
  return <Link className={"brand " + (inverse ? "brand-inverse" : "")} href={"/" + lang} aria-label="Transports Even — accueil">
    <span className="brand-mark" aria-hidden="true"><span className="brand-lane" /></span>
    <span className="brand-type"><span>TRANSPORTS</span><strong>EVEN<span className="brand-dot">.</span></strong></span>
  </Link>;
}
