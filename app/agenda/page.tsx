"use client";
import { useMemo,useState } from "react";
import Link from "next/link";
import { CalendarIcon,CheckIcon,MapPinIcon } from "@/components/icons";
import { agendaByProfile } from "@/lib/demo-data";
import { useDemoSession } from "@/components/demo-session";
export default function AgendaPage(){
 const {activeKey,profile}=useDemoSession(); const source=agendaByProfile[activeKey];
 const [view,setView]=useState("Liste"); const [filter,setFilter]=useState("Tous"); const [toast,setToast]=useState("");
 const types=useMemo(()=>Array.from(new Set(source.map(e=>e.type))),[source]); const visible=source.filter(e=>filter==="Tous"||e.type===filter);
 const period=activeKey==="benevole"?"Février — mars 2028":activeKey==="candidat"?"Octobre 2026":activeKey==="laureat"?"Novembre — décembre 2027":"Octobre 2026";
 const labels={benevole:"missions et rencontres",candidat:"échéances et rendez-vous de candidature",laureat:"jalons, livrables et comités de suivi",jury:"sessions d'évaluation et délibérations"}[activeKey];
 function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2200)}
 return <div className="workspaceShell">{toast&&<div className="toastPro"><CheckIcon/>{toast}</div>}<aside className="workspaceNav"><div className="profileBlock"><div className="profileAvatar">{profile.initials}</div><div><strong>{profile.name}</strong><span>{profile.label} · {profile.status}</span></div></div><nav><Link href={profile.route}>Espace {profile.label}</Link><Link href="/profil">Mon profil</Link><Link href="/agenda" className="active"><CalendarIcon/>Mon agenda</Link></nav><div className="contextCard"><small>Contexte connecté</small><strong>{profile.headline}</strong><span>Les données affichées appartiennent uniquement à ce compte.</span></div></aside>
 <section className="workspaceContent"><div className="appPageTitle"><div><p className="overline">AGENDA · {profile.name}</p><h1>{period}</h1><p>Vos {labels}, dans un agenda propre à votre profil.</p></div><div className="agendaTopActions"><select value={filter} onChange={e=>setFilter(e.target.value)}><option>Tous</option>{types.map(t=><option key={t}>{t}</option>)}</select><div className="segmented">{["Mois","Liste"].map(v=><button key={v} onClick={()=>setView(v)} className={view===v?"active":""}>{v}</button>)}</div></div></div>
 <div className="agendaSummary"><article><small>Compte</small><strong>{profile.name}</strong><span>{profile.label}</span></article><article><small>Éléments planifiés</small><strong>{source.length}</strong><span>{types.join(" · ")}</span></article><article><small>Statut</small><strong>{profile.status}</strong><span className="positive">Agenda personnalisé</span></article></div>
 {view==="Liste"?<div className="agendaList">{visible.map((e,i)=><article key={i}><div className="dateTile"><strong>{e.day}</strong><span>{e.month}</span></div><div className="agendaEventMain"><div><span className="statusBadge info">{e.status}</span><span className="eventType">{e.type}</span></div><h3>{e.title}</h3><p><CalendarIcon/>{e.time}<MapPinIcon/>{e.place}</p></div><button className="button buttonSecondary compact" onClick={()=>notify(`${e.title} · ouverture simulée`)}>Détails</button></article>)}</div>:<div className="calendarPersona"><div className="calendarPersonaHeader"><strong>{profile.label}</strong><span>{period}</span></div>{visible.map((e,i)=><button key={i} className="calendarPersonaEvent" onClick={()=>notify(e.title)}><span className="dateTile"><strong>{e.day}</strong><small>{e.month}</small></span><span><b>{e.title}</b><small>{e.time} · {e.place}</small></span><em>{e.type}</em></button>)}</div>}
 </section></div>
}
