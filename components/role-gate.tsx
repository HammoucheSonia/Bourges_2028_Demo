"use client";
import Link from "next/link";
import { LockIcon } from "@/components/icons";
import { useDemoSession, type ProfileKey } from "@/components/demo-session";
export function RoleGate({role,children}:{role:ProfileKey;children:React.ReactNode}){
 const {activeKey,profile}=useDemoSession();
 if(activeKey===role) return <>{children}</>;
 return <section className="roleDenied"><div className="roleDeniedIcon"><LockIcon/></div><p className="overline">ESPACE CLOISONNÉ PAR RÔLE</p><h1>Vous êtes connecté comme {profile.name}.</h1><p>Ce contenu appartient à un autre profil de démonstration. Le cloisonnement évite qu'un candidat, un lauréat, un juré ou un bénévole voie les données d'un autre contexte.</p><div><Link className="button buttonPrimary" href={profile.route}>Retour à mon espace</Link><Link className="button buttonSecondary" href="/connexion">Changer de compte</Link></div></section>
}
