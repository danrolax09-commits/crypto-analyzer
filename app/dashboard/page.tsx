// V4: Analytics Dashboard
'use client';

import { useEffect, useState } from 'react';

interface DashboardData {
  totalRevenue: number;
  monthlyRevenue: number;
  weeklyRevenue: number;
  totalUsers: number;
  paidUsers: number;
  conversionRate: number;
  churnRate: number;
  topProducts: Array<{ name: string; revenue: number }>;
  recentTransactions: Array<{ id: string; amount: number; date: string; status: string }>;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now
    setData({
      totalRevenue: 12450,
      monthlyRevenue: 4120,
      weeklyRevenue: 950,
      totalUsers: 342,
      paidUsers: 28,
      conversionRate: 8.2,
      churnRate: 2.1,
      topProducts: [
        { name: 'CryptoTracker Pro', revenue: 5320 },
        { name: 'Agent Marketplace', revenue: 3890 },
        { name: 'AI Jobs Board', revenue: 3240 },
      ],
      recentTransactions: [
        { id: '1', amount: 29.99, date: '2024-03-19', status: 'completed' },
        { id: '2', amount: 9.99, date: '2024-03-19', status: 'completed' },
        { id: '3', amount: 99.00, date: '2024-03-18', status: 'completed' },
      ],
    });
    setLoading(false);
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!data) return <div className="p-8">Error loading dashboard</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Revenue Dashboard</h1>
          <p className="text-slate-400">Real-time analytics across all products</p>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Total Revenue */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-white">${data.totalRevenue.toLocaleString()}</p>
            <p className="text-green-400 text-sm mt-2">↑ 12.5% from last month</p>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">This Month</p>
            <p className="text-3xl font-bold text-white">${data.monthlyRevenue.toLocaleString()}</p>
            <p className="text-blue-400 text-sm mt-2">On track for $12.4K</p>
          </div>

          {/* Total Users */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Total Users</p>
            <p className="text-3xl font-bold text-white">{data.totalUsers}</p>
            <p className="text-slate-400 text-sm mt-2">{data.paidUsers} paying</p>
          </div>

          {/* Conversion Rate */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Conversion Rate</p>
            <p className="text-3xl font-bold text-white">{data.conversionRate}%</p>
            <p className="text-slate-400 text-sm mt-2">Free → Paid</p>
          </div>
        </div>

        {/* Revenue by Product */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Revenue by Product</h2>
          <div className="space-y-4">
            {data.topProducts.map((product, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">{product.name}</span>
                  <span className="text-white font-bold">${product.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-slate-700 rounded h-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{
                      width: `${(product.revenue / data.totalRevenue) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400">ID</th>
                  <th className="text-left py-3 px-4 text-slate-400">Amount</th>
                  <th className="text-left py-3 px-4 text-slate-400">Date</th>
                  <th className="text-left py-3 px-4 text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.recentTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-slate-700">
                    <td className="py-3 px-4 text-slate-300">{tx.id}</td>
                    <td className="py-3 px-4 text-white font-bold">${tx.amount}</td>
                    <td className="py-3 px-4 text-slate-400">{tx.date}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-900 text-green-200 px-3 py-1 rounded text-sm">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
