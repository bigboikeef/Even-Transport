"use client";

import { FormEvent, useState } from "react";
import { Lang, getContent } from "@/lib/content";

export default function ContactForm({lang}:{lang:Lang}) {
  const t=getContent(lang);
  const [copy,setCopy]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const name=String(data.get("name")||"");
    const email=String(data.get("email")||"");
    const phone=String(data.get("phone")||"");
    const message=String(data.get("message")||"");
    const subject=encodeURIComponent("Demande de contact — "+name);
    const body=encodeURIComponent("Nom : "+name+"\nEmail : "+email+"\nTéléphone : "+phone+"\n\n"+message);
    const cc=copy?"&cc="+encodeURIComponent(email):"";
    window.location.href="mailto:info@even.lu?subject="+subject+"&body="+body+cc;
  }
  return <form onSubmit={submit} className="contact-form">
    <label>{t.formName} *<input type="text" name="name" autoComplete="name" required/></label>
    <label>{t.formMail} *<input type="email" name="email" autoComplete="email" required/></label>
    <label>{t.formPhone}<input type="tel" name="phone" autoComplete="tel"/></label>
    <label>{t.formMessage} *<textarea name="message" rows={6} required/></label>
    <label className="checkbox-label"><input type="checkbox" checked={copy} onChange={e=>setCopy(e.target.checked)}/>{t.formCopy}</label>
    <button type="submit" className="button button-blue">{t.formSend}<span aria-hidden="true">↗</span></button>
    <p className="form-note">{t.formNotice}</p>
  </form>;
}
