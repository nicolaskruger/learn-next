import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");

  return NextResponse.json({ msg: "Hello word", token });
}
