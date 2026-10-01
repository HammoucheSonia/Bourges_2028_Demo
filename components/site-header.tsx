"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, MenuIcon } from "@/components/icons";
import { useDemoSession } from "@/components/demo-session";

export function SiteHeader(){
 const pathname=usePathname(); const {activeKey,profile}=useDemoSession();
 const roleLinks={
  benevole:[["/benevole","Tableau de bord"],["/profil","Mon profil"],["/agenda","Mon agenda"],["/mission","Mes missions"]],
  candidat:[["/candidat","Mon dossier"],["/profil","Mon profil"],["/agenda","Mon agenda"]],
  laureat:[["/laureat","Mon projet"],["/profil","Mon profil"],["/agenda","Mon agenda"]],
  jury:[["/jury","Mes évaluations"],["/profil","Mon profil"],["/agenda","Mon agenda"],["/security","Sécurité"]]
 }[activeKey];
 return <><a href="#contenu" className="skipLink">Aller au contenu</a><header className="siteHeader">
  <Link href="/" className="brand"><span className="brandMark"><span>28</span></span><span className="brandCopy"><strong>Bourges 2028</strong><small>Participation · démonstrateur</small></span></Link>
  <nav className="mainNav" aria-label="Navigation principale">{roleLinks.map(([href,label])=><Link key={href} href={href} className={pathname===href?"active":""}>{label}</Link>)}</nav>
  <div className="headerTools"><button className="iconButton" aria-label="Notifications"><BellIcon/><span className="notifDot"/></button><Link className="accountChip" href="/connexion"><span className="avatarSmall">{profile.initials}</span><span><strong>{profile.name}</strong><small>{profile.label} · changer</small></span></Link><button className="iconButton mobileMenu"><MenuIcon/></button></div>
 </header></>
}
