"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BellIcon, MenuIcon } from "@/components/icons";
import { useDemoSession } from "@/components/demo-session";

export function SiteHeader(){
 const pathname=usePathname();
 const {activeKey,profile}=useDemoSession();
 const [menuOpen,setMenuOpen]=useState(false);
 useEffect(()=>setMenuOpen(false),[pathname]);
 const roleLinks={
  benevole:[["/benevole","Tableau de bord"],["/profil","Mon profil"],["/agenda","Mon agenda"],["/mission","Mes missions"]],
  candidat:[["/candidat","Mon dossier"],["/profil","Mon profil"],["/agenda","Mon agenda"]],
  laureat:[["/laureat","Mon projet"],["/profil","Mon profil"],["/agenda","Mon agenda"]],
  jury:[["/jury","Mes évaluations"],["/profil","Mon profil"],["/agenda","Mon agenda"],["/security","Sécurité"]]
 }[activeKey];
 const links=[["/","Accueil"],...roleLinks] as [string,string][];
 return <>
  <a href="#contenu" className="skipLink">Aller au contenu</a>
  <header className="siteHeader">
   <Link href="/" className="brand" aria-label="Bourges 2028 — revenir à l'accueil"><span className="brandMark"><span>28</span></span><span className="brandCopy"><strong>Bourges 2028</strong><small>Participation · démonstrateur</small></span></Link>
   <nav className="mainNav" aria-label="Navigation principale">{links.map(([href,label])=><Link key={href} href={href} className={pathname===href?"active":""}>{label}</Link>)}</nav>
   <div className="headerTools"><button className="iconButton" aria-label="Notifications"><BellIcon/><span className="notifDot"/></button><Link className="accountChip" href="/connexion"><span className="avatarSmall">{profile.initials}</span><span><strong>{profile.name}</strong><small>{profile.label} · changer</small></span></Link><button className="iconButton mobileMenu" aria-label={menuOpen?"Fermer le menu":"Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(v=>!v)}><MenuIcon/></button></div>
  </header>
  {menuOpen&&<nav id="mobile-navigation" className="mobileNavPanel" aria-label="Navigation mobile">{links.map(([href,label])=><Link key={href} href={href} className={pathname===href?"active":""}>{label}</Link>)}<Link href="/connexion">Changer de profil</Link></nav>}
 </>
}
