import { NextRequest, NextResponse } from 'next/server'

import { geolocation } from "@vercel/functions";

export async function GET(req: NextRequest) {
  const {} = req

  const geo = geolocation(req);

  return NextResponse.json({
    country: geo?.country || 'AU',
    city: geo?.city || 'Sydney',
    region: geo?.region || '',
    geo
  })
}
