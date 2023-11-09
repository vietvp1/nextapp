import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  
  const { geo } = req

  return NextResponse.json({
    country: geo?.country || 'AU',
    city: geo?.city || 'Sydney',
    region: geo?.region || '',
    geo
  })
}
