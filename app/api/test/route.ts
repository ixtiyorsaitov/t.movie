import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ success: true });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
