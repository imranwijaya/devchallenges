import { NextRequest, NextResponse } from "next/server";
import type {
  ApiSuccessResponseBody,
  ApiErrorResponseBody,
} from "../../types/api-response-body";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = "https://quote-garden.onrender.com/api/v3/quotes/random";
  const res = await fetch(url, { method: "GET" });

  if (res.ok) {
    const resJson = await res.json();
    return NextResponse.json<ApiSuccessResponseBody>(resJson);
  }

  return NextResponse.json<ApiErrorResponseBody>(
    { statusCode: res.status, message: res.statusText },
    { status: res.status },
  );
}
