// V3 Feature: Price Alerts & Notifications
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { coin, targetPrice, type, userEmail } = await request.json();

  // type can be 'above' or 'below'
  if (!coin || !targetPrice || !type || !userEmail) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const alert = {
    id: `alert_${Date.now()}`,
    coin,
    targetPrice,
    type,
    userEmail,
    active: true,
    createdAt: new Date(),
    notificationsSent: 0,
  };

  return NextResponse.json({
    success: true,
    alert,
    message: `Alert created. You'll be notified when ${coin} hits $${targetPrice} (${type}).`,
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userEmail = searchParams.get('email');

  if (!userEmail) {
    return NextResponse.json(
      { error: 'User email required' },
      { status: 400 }
    );
  }

  // Mock user alerts
  const alerts = [
    { id: 'alert_1', coin: 'BTC', targetPrice: 50000, type: 'above', active: true, triggered: false },
    { id: 'alert_2', coin: 'ETH', targetPrice: 2500, type: 'above', active: true, triggered: false },
    { id: 'alert_3', coin: 'SOL', targetPrice: 150, type: 'below', active: false, triggered: true },
  ];

  return NextResponse.json({
    userEmail,
    alerts,
    total: alerts.length,
    active: alerts.filter(a => a.active).length,
  });
}
