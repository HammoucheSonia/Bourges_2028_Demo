"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { demoProfiles } from "@/lib/demo-data";

export type ProfileKey = keyof typeof demoProfiles;
type SessionValue = {
  activeKey: ProfileKey;
  setActiveKey: (key: ProfileKey) => void;
  profile: (typeof demoProfiles)[ProfileKey];
};
const Ctx = createContext<SessionValue | null>(null);

export function DemoSessionProvider({children}:{children:React.ReactNode}){
  const [activeKey,setActiveKeyState]=useState<ProfileKey>("benevole");
  useEffect(()=>{
    const saved=window.localStorage.getItem("bourges-demo-active-profile") as ProfileKey | null;
    if(saved && saved in demoProfiles) setActiveKeyState(saved);
  },[]);
  function setActiveKey(key:ProfileKey){
    setActiveKeyState(key);
    window.localStorage.setItem("bourges-demo-active-profile",key);
  }
  const value=useMemo(()=>({activeKey,setActiveKey,profile:demoProfiles[activeKey]}),[activeKey]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useDemoSession(){
  const v=useContext(Ctx); if(!v) throw new Error("DemoSessionProvider missing"); return v;
}
