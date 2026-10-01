"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockIcon } from "@/components/icons";
import { useDemoSession, type ProfileKey } from "@/components/demo-session";

export function RoleGate({role,children}:{role:ProfileKey;children:React.ReactNode}){
 const {activeKey,profile,setActiveKey}=useDemoSession();
 const router=useRouter();
 if(activeKey===role) return <>{children}</>;
 const labels:Record<ProfileKey,string>={benevole:"Bénévole",candidat:"Candidat CRI",laureat:"Lauréat CRI",jury:"Jury / équipe"};
 function openDemo(){ setActiveKey(role); router.refresh(); }
 return <section className="roleDenied"><div className="roleDeniedIcon"><LockIcon/></div><p className="overline">DÉMONSTRATION DES HABILITATIONS</p><h1>Ce parcours appartient au contexte {labels[role]}.</h1><p>Vous êtes actuellement connecté comme <strong>{profile.name}</strong> ({profile.label}). Les données sont cloisonnées par contexte pour illustrer le contrôle d’accès.</p><div><button className="button buttonPrimary" onClick={openDemo}>Ouvrir la démo comme {labels[role]}</button><Link className="button buttonSecondary" href={profile.route}>Retour à mon espace</Link><Link className="button buttonTertiary" href="/connexion">Changer de compte</Link></div></section>
}
