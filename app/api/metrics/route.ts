import { NextResponse } from "next/server";
import { demoMetrics } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ demo: true, disclaimer: "Métriques fictives ou illustratives", ...demoMetrics }, { headers: { "Cache-Control": "no-store" } });
}
