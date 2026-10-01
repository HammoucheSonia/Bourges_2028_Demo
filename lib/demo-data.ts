export type Mission = { id:number; title:string; date:string; place:string; slots:number; enrolled:number; skills:string[] };
export const missions:Mission[]=[
{id:1,title:"Accueil public — Parcours d'ouverture",date:"2028-02-12",place:"Maison de la Culture",slots:18,enrolled:13,skills:["Accueil","Français","Anglais"]},
{id:2,title:"Médiation — Installation participative",date:"2028-03-04",place:"Centre-ville de Bourges",slots:12,enrolled:8,skills:["Médiation","Pédagogie"]},
{id:3,title:"Logistique légère — Rencontre européenne",date:"2028-03-22",place:"Palais d'Auron",slots:20,enrolled:16,skills:["Logistique","Disponibilité soirée"]}
];
export const candidates=[
{name:"Camille Martin",type:"Bénévole",status:"Validé",completeness:100},
{name:"Nora Benali",type:"Candidat CRI",status:"À instruire",completeness:92},
{name:"Léo Petit",type:"Bénévole mineur",status:"Attestation requise",completeness:76},
{name:"Emma Bernard",type:"Lauréate CRI",status:"Validé",completeness:100}
];
export const demoProfiles={
 benevole:{key:"benevole" as const,label:"Bénévole",name:"Camille Martin",initials:"CM",email:"demo.benevole@bourges2028.fr",phone:"06 12 34 56 78",city:"Bourges",route:"/benevole",subtitle:"Missions, disponibilités, compétences et agenda",status:"Profil actif",statusTone:"ok",headline:"Bénévole accueil & médiation",completion:92,roles:["Bénévole"],skills:["Accueil","Médiation","Anglais B2"],bio:"Disponible sur les temps forts culturels et les missions d'accueil public."},
 candidat:{key:"candidat" as const,label:"Candidat CRI",name:"Nora Benali",initials:"NB",email:"demo.candidat@bourges2028.fr",phone:"06 45 18 27 90",city:"Vierzon",route:"/candidat",subtitle:"Dossier, pièces, échéances et échanges",status:"Dossier en instruction",statusTone:"info",headline:"Porteuse du projet « Les Voix du Canal »",completion:92,roles:["Candidat CRI"],skills:["Production","Arts vivants","Coordination"],bio:"Porteuse de projet culturel candidate au dispositif CRI 2028."},
 laureat:{key:"laureat" as const,label:"Lauréat CRI",name:"Emma Bernard",initials:"EB",email:"demo.laureat@bourges2028.fr",phone:"06 73 14 22 61",city:"Bourges",route:"/laureat",subtitle:"Convention, livrables, calendrier et suivi",status:"Projet lauréat",statusTone:"ok",headline:"Responsable du projet « Traversées »",completion:100,roles:["Lauréat CRI","Ancien candidat CRI"],skills:["Direction artistique","Production","Partenariats"],bio:"Suivi contractuel, livrables et coordination du projet lauréat Traversées."},
 jury:{key:"jury" as const,label:"Jury / équipe",name:"Marc Leroy",initials:"ML",email:"demo.jury@bourges2028.fr",phone:"02 48 00 28 28",city:"Bourges",route:"/jury",subtitle:"Dossiers affectés, grille d'évaluation et décisions",status:"Session ouverte",statusTone:"warn",headline:"Membre du jury CRI",completion:100,roles:["Jury CRI"],skills:["Évaluation","Arts visuels","Politiques culturelles"],bio:"Membre de jury habilité uniquement sur les dossiers qui lui sont affectés."}
};
export type DemoProfileKey=keyof typeof demoProfiles;
export const agendaByProfile:Record<DemoProfileKey,{day:number;month:string;time:string;title:string;place:string;type:string;status:string}[]>={
 benevole:[
  {day:12,month:"FÉV.",time:"16:00–21:00",title:"Accueil public — Parcours d'ouverture",place:"Maison de la Culture",type:"Mission",status:"Confirmé"},
  {day:18,month:"FÉV.",time:"18:30–19:30",title:"Briefing bénévoles",place:"Visioconférence",type:"Rencontre",status:"Inscrit"},
  {day:4,month:"MARS",time:"14:00–18:00",title:"Médiation — Installation participative",place:"Centre-ville",type:"Mission",status:"Confirmé"}],
 candidat:[
  {day:6,month:"OCT.",time:"10:00–11:00",title:"Atelier d'aide au dépôt CRI",place:"Visioconférence",type:"Accompagnement",status:"Inscrit"},
  {day:12,month:"OCT.",time:"14:30–15:00",title:"Point dossier avec l'équipe CRI",place:"Bourges 2028",type:"Rendez-vous",status:"Confirmé"},
  {day:18,month:"OCT.",time:"23:59",title:"Clôture de la candidature",place:"Plateforme",type:"Échéance",status:"À venir"}],
 laureat:[
  {day:8,month:"NOV.",time:"09:30–10:30",title:"Réunion de production — Traversées",place:"Bourges 2028",type:"Suivi projet",status:"Confirmé"},
  {day:15,month:"NOV.",time:"23:59",title:"Dépôt note d'étape artistique",place:"Plateforme",type:"Livrable",status:"À déposer"},
  {day:2,month:"DÉC.",time:"11:00–12:00",title:"Comité de suivi financier",place:"Visioconférence",type:"Suivi projet",status:"Planifié"}],
 jury:[
  {day:7,month:"OCT.",time:"09:00–11:00",title:"Session d'évaluation — lot A",place:"Salle jury",type:"Jury",status:"Confirmé"},
  {day:14,month:"OCT.",time:"17:00",title:"Fin d'évaluation des dossiers affectés",place:"Plateforme",type:"Échéance",status:"À venir"},
  {day:21,month:"OCT.",time:"09:30–12:30",title:"Comité de délibération",place:"Bourges 2028",type:"Jury",status:"Confirmé"}]
};
export const demoMetrics={activeUsers:600,missions:428,openMissions:37,availability:99.5,medianPageKb:282,medianRequests:24,ecoScore:"B"};
