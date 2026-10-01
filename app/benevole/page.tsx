"use client";
import { RoleGate } from "@/components/role-gate";
import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarIcon, CheckIcon, MapPinIcon, SearchIcon, UsersIcon } from "@/components/icons";
import { missions } from "@/lib/demo-data";

export default function BenevolePage(){
  const [q,setQ]=useState(""); const [skill,setSkill]=useState("Toutes");
  const visible=useMemo(()=>missions.filter(m=>(m.title+" "+m.place).toLowerCase().includes(q.toLowerCase())&&(skill==="Toutes"||m.skills.includes(skill))),[q,skill]);
  return <RoleGate role="benevole"><div className="appLayout">
    <aside className="appSidebar">
      <div className="profileBlock"><div className="profileAvatar">CM</div><div><strong>Camille Martin</strong><span>Bénévole</span></div></div>
      <div className="profileProgress"><div><span>Profil complété</span><strong>92 %</strong></div><div className="progressBar"><span style={{width:"92%"}}/></div></div>
      <nav className="sideNav" aria-label="Espace bénévole"><Link href="/">← Accueil</Link><Link className="active" href="/benevole"><UsersIcon/>Mes missions</Link><Link href="/profil"><CheckIcon/>Mon profil</Link><Link href="/agenda"><CalendarIcon/>Mon agenda</Link></nav>
      <div className="sideHelp"><strong>Besoin d'aide ?</strong><p>Une question sur une mission ou votre profil ?</p><button className="button buttonTertiary">Contacter l'équipe</button></div>
    </aside>
    <section className="appContent" id="missions">
      <div className="appPageTitle"><div><p className="overline">ESPACE BÉNÉVOLE</p><h1>Bonjour Camille 👋</h1><p>Voici les prochaines missions qui correspondent à votre profil.</p></div><div className="availabilityChip"><span className="statusDot"/> Disponible ce week-end</div></div>
      <div className="dashboardGrid volunteerSummary">
        <article className="summaryCard accentCard"><span className="summaryLabel">Prochaine mission</span><div className="nextMission"><div className="bigDate"><b>12</b><span>FÉV.</span></div><div><strong>Accueil public — Parcours d'ouverture</strong><span><MapPinIcon/> Maison de la Culture</span><span><CalendarIcon/> 16h00 — 21h00</span></div></div><Link href="/mission" className="textArrow">Voir le briefing →</Link></article>
        <article className="summaryCard"><span className="summaryLabel">Votre impact</span><div className="impactNumber">18 <small>h</small></div><p>de participation planifiées</p><div className="impactMeta"><span>3 missions</span><span>2 lieux</span></div></article>
        <article className="summaryCard"><span className="summaryLabel">Profil</span><div className="skillsCloud"><span>Accueil</span><span>Anglais</span><span>Médiation</span></div><p>Votre profil correspond à <strong>8 missions</strong> actuellement.</p><button className="textButton">Mettre à jour mes préférences</button></article>
      </div>
      <div className="contentToolbar"><div><h2>Missions recommandées</h2><p>{visible.length} opportunité{visible.length>1?"s":""} selon vos disponibilités</p></div><div className="filterGroup"><label className="searchField"><SearchIcon/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Rechercher une mission"/></label><select value={skill} onChange={e=>setSkill(e.target.value)} aria-label="Filtrer par compétence"><option>Toutes</option><option>Accueil</option><option>Médiation</option><option>Logistique</option></select></div></div>
      <div className="missionListPro">{visible.map((m,i)=><article className="missionRowPro" key={m.id}><div className="dateTile"><strong>{new Date(m.date).getDate()}</strong><span>{new Date(m.date).toLocaleDateString("fr-FR",{month:"short"}).replace(".","").toUpperCase()}</span></div><div className="missionMain"><div className="missionTopline"><span className={i===0?"matchBadge high":"matchBadge"}>{i===0?"Excellent match":"Compatible"}</span><span>{m.slots-m.enrolled} places restantes</span></div><h3>{m.title}</h3><div className="missionMeta"><span><MapPinIcon/>{m.place}</span><span><CalendarIcon/>16h00 — 21h00</span></div><div className="tagRow">{m.skills.map(s=><span className="tag" key={s}>{s}</span>)}</div></div><Link className="button buttonSecondary compact" href="/mission">Consulter</Link></article>)}</div>
    </section>
  </div></RoleGate>
}
