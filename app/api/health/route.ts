import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "bourges-2028-demo", node: "demo", timestamp: new Date().toISOString() }, { headers: { "Cache-Control": "no-store" } });
}
