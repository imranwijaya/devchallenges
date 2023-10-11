import { NextRequest, NextResponse } from "next/server";
import type {
  ApiSuccessResponseBody,
  ApiErrorResponseBody,
} from "../../types/api-response-body";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const author = `author=${searchParams.get("author") ?? ""}`;
  const limit = `limit=${searchParams.get("limit") ?? "3"}`;

  const url = `https://quote-garden.onrender.com/api/v3/quotes?${author}&${limit}`;
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
