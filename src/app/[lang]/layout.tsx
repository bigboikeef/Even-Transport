import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { isLang } from "@/lib/content";

export default async function LanguageLayout({children,params}:{
  children:React.ReactNode;params:Promise<{lang:string}>
}) {
  const {lang}=await params;
  if (!isLang(lang)) notFound();
  return <><SiteHeader lang={lang}/><main id="main-content">{children}</main><SiteFooter lang={lang}/></>;
}
