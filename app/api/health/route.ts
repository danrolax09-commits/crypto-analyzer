import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'crypto-analyzer',
    timestamp: new Date().toISOString(),
  });
}
