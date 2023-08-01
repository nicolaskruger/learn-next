import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const auth = requestHeaders.get("auth");

  return NextResponse.json({
    msg: "Hello word",
    auth,
  });
}
