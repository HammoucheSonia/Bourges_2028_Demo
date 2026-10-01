"use client";
import { useState } from "react";
import Link from "next/link";
import { LockIcon, ShieldIcon, UsersIcon, ClipboardIcon, CheckIcon } from "@/components/icons";
import { demoProfiles } from "@/lib/demo-data";
import { useDemoSession } from "@/components/demo-session";
type Role=keyof typeof demoProfiles;
const roleIcons:Record<Role,React.ReactNode>={benevole:<UsersIcon/>,candidat:<ClipboardIcon/>,laureat:<CheckIcon/>,jury:<ShieldIcon/>};
export default function ConnexionPage(){
 const {activeKey,setActiveKey}=useDemoSession(); const [role,setRole]=useState<Role>(activeKey); const p=demoProfiles[role];
 return <section className="loginPage loginPageWide"><div className="loginBrandPanel"><div><span className="loginLogo">28</span><p className="overline light">BOURGES 2028 · PARTICIPATION</p><h1>Quatre personnes. Quatre espaces réellement différents.</h1><p>Changer de compte modifie l'identité, le menu, le profil, l'agenda et les données métier. Aucun écran ne reste attaché à Camille.</p></div><div className="loginFeature"><ShieldIcon/><span><strong>Session de démonstration persistante</strong><small>Le profil choisi reste actif dans toute l'application.</small></span></div></div>
 <div className="loginFormPanel"><div className="loginFormBox loginFormBoxWide"><p className="overline">COMPTES DE DÉMONSTRATION</p><h2>Choisir une identité</h2><div className="roleGrid">{(Object.keys(demoProfiles) as Role[]).map(key=><button key={key} onClick={()=>setRole(key)} className={role===key?"roleCard active":"roleCard"}><span className="roleIcon">{roleIcons[key]}</span><span><strong>{demoProfiles[key].name}</strong><small>{demoProfiles[key].label} · {demoProfiles[key].status}</small></span></button>)}</div>
 <div className="selectedIdentity"><span className="profileAvatar small">{p.initials}</span><div><strong>{p.name}</strong><span>{p.headline}</span></div></div><label>Adresse e-mail<input value={p.email} readOnly/></label><label>Mot de passe<div className="inputWithIcon"><LockIcon/><input value="Demo2028!" readOnly type="password"/></div></label><Link className="button buttonPrimary full" href={p.route} onClick={()=>setActiveKey(role)}>Se connecter comme {p.name}</Link><div className="demoCredentials"><strong>Compte sélectionné</strong><span>{p.label} · {p.status}</span>{role==="jury"&&<span>Code 2FA : <code>202828</code></span>}</div></div></div></section>
}
