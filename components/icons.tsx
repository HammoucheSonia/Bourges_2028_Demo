import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function UsersIcon(props: P){return <svg {...base(props)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
export function DashboardIcon(props:P){return <svg {...base(props)}><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>}
export function ShieldIcon(props:P){return <svg {...base(props)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>}
export function ClipboardIcon(props:P){return <svg {...base(props)}><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="m9 14 2 2 4-4"/></svg>}
export function ActivityIcon(props:P){return <svg {...base(props)}><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>}
export function LeafIcon(props:P){return <svg {...base(props)}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5.1 18 2 18 2c0 5.2-1.8 9.4-5.4 11.7"/><path d="M2 21c0-3 1.85-5.36 5.08-6.94"/></svg>}
export function InfoIcon(props:P){return <svg {...base(props)}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>}
export function SearchIcon(props:P){return <svg {...base(props)}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>}
export function BellIcon(props:P){return <svg {...base(props)}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>}
export function CalendarIcon(props:P){return <svg {...base(props)}><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>}
export function MapPinIcon(props:P){return <svg {...base(props)}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
export function ArrowRightIcon(props:P){return <svg {...base(props)}><path d="M5 12h14M13 6l6 6-6 6"/></svg>}
export function CheckIcon(props:P){return <svg {...base(props)}><path d="m20 6-11 11-5-5"/></svg>}
export function LockIcon(props:P){return <svg {...base(props)}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>}
export function ServerIcon(props:P){return <svg {...base(props)}><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></svg>}
export function DatabaseIcon(props:P){return <svg {...base(props)}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></svg>}
export function CloudIcon(props:P){return <svg {...base(props)}><path d="M17.5 19H8a5 5 0 1 1 1.8-9.66A7 7 0 0 1 23 12.5 4.5 4.5 0 0 1 17.5 19Z"/></svg>}
export function MenuIcon(props:P){return <svg {...base(props)}><path d="M4 6h16M4 12h16M4 18h16"/></svg>}
export function XIcon(props:P){return <svg {...base(props)}><path d="M18 6 6 18M6 6l12 12"/></svg>}
export function ExternalLinkIcon(props:P){return <svg {...base(props)}><path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>}
