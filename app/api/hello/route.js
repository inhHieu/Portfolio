import { NextResponse } from "next/server";



export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: 'helo' }, { status: 200 });
}

export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: `got data ` }, { status: 200 });
}
