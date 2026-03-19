export default function Home() {
  const topCoins = [
    { symbol: 'BTC', name: 'Bitcoin', price: 42500, change: 5.2, volume: '$28.5B' },
    { symbol: 'ETH', name: 'Ethereum', price: 2280, change: 3.8, volume: '$14.2B' },
    { symbol: 'SOL', name: 'Solana', price: 145, change: 8.5, volume: '$2.8B' },
    { symbol: 'XRP', name: 'Ripple', price: 2.45, change: -1.2, volume: '$1.9B' },
    { symbol: 'ADA', name: 'Cardano', price: 1.08, change: 2.3, volume: '$890M' },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0.38, change: 4.1, volume: '$580M' },
  ];

  const features = [
    { icon: '📈', title: 'Real-Time Charts', desc: 'Live price tracking with advanced technical analysis' },
    { icon: '🤖', title: 'AI Predictions', desc: 'Machine learning models predict market movements' },
    { icon: '⚠️', title: 'Risk Alerts', desc: 'Smart notifications when your portfolio hits thresholds' },
    { icon: '📊', title: 'Portfolio Analysis', desc: 'Deep insights into your holdings and diversification' },
    { icon: '💼', title: 'Tax Reports', desc: 'Automated tax calculation and reporting' },
    { icon: '🔐', title: 'Bank-Grade Security', desc: 'Encrypted, read-only API integration' },
    { icon: '🚀', title: 'Trading Signals', desc: 'AI-powered buy/sell recommendations based on technicals' },
    { icon: '💡', title: 'Market Insights', desc: 'Daily analysis and trend reports from AI experts' },
  ];

  const predictions = [
    { coin: 'BTC', prediction: 'Bullish', confidence: 82, nextTarget: '$48,000' },
    { coin: 'ETH', prediction: 'Strong Buy', confidence: 88, nextTarget: '$2,800' },
    { coin: 'SOL', prediction: 'Bullish', confidence: 75, nextTarget: '$165' },
    { coin: 'XRP', prediction: 'Hold', confidence: 62, nextTarget: '$2.60' },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Your AI Crypto Copilot</h1>
          <p>Real-time portfolio tracking, AI predictions, and risk analytics. Make smarter crypto decisions.</p>
          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Start Free Trial →
          </button>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Top Cryptocurrencies</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2d3748' }}>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#a0aec0' }}>Coin</th>
                  <th style={{ textAlign: 'right', padding: '1rem', color: '#a0aec0' }}>Price</th>
                  <th style={{ textAlign: 'right', padding: '1rem', color: '#a0aec0' }}>24h Change</th>
                  <th style={{ textAlign: 'right', padding: '1rem', color: '#a0aec0' }}>Volume</th>
                </tr>
              </thead>
              <tbody>
                {topCoins.map((coin) => (
                  <tr key={coin.symbol} style={{ borderBottom: '1px solid #2d3748' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                      {coin.symbol} <span style={{ color: '#a0aec0' }}>• {coin.name}</span>
                    </td>
                    <td style={{ textAlign: 'right', padding: '1rem', color: '#00d4ff', fontWeight: 'bold' }}>
                      ${coin.price.toLocaleString()}
                    </td>
                    <td style={{ textAlign: 'right', padding: '1rem', color: coin.change > 0 ? '#10b981' : '#ef4444' }}>
                      {coin.change > 0 ? '+' : ''}{coin.change}%
                    </td>
                    <td style={{ textAlign: 'right', padding: '1rem', color: '#a0aec0' }}>{coin.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Trading Signals */}
      <section style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
        <div className="container" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#fff' }}>🤖 AI Trading Predictions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {predictions.map((p) => (
              <div key={p.coin} className="card" style={{ background: '#0f1419', borderLeft: '4px solid #00d4ff' }}>
                <h3 style={{ marginBottom: '1rem' }}>{p.coin}</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: p.prediction === 'Strong Buy' ? '#10b981' : p.prediction === 'Bullish' ? '#3b82f6' : '#f59e0b', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {p.prediction}
                  </div>
                  <div style={{ color: '#a0aec0', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Confidence: {p.confidence}%
                  </div>
                </div>
                <div style={{ padding: '0.75rem', background: '#1a1f2e', borderRadius: '6px', marginBottom: '1rem' }}>
                  <div style={{ color: '#a0aec0', fontSize: '0.85rem' }}>Next Target:</div>
                  <div style={{ color: '#00d4ff', fontWeight: 'bold' }}>{p.nextTarget}</div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Trade {p.coin}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem', background: '#1a1f2e' }}>
        <div className="container" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Features</h2>
          <div className="grid">
            {features.map((f, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Simple Pricing</h2>
          <div className="grid">
            <div className="price-card">
              <h3>Free Tier</h3>
              <div className="price">$0</div>
              <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Per month</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Get Started
              </button>
              <ul style={{ textAlign: 'left', marginTop: '1.5rem', color: '#a0aec0', fontSize: '0.9rem' }}>
                <li>✓ 5 watchlists</li>
                <li>✓ Basic charts</li>
                <li>✓ Email alerts</li>
              </ul>
            </div>

            <div className="price-card featured">
              <h3>Pro</h3>
              <div className="price">$9.99</div>
              <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Per month</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Upgrade Now
              </button>
              <ul style={{ textAlign: 'left', marginTop: '1.5rem', color: '#a0aec0', fontSize: '0.9rem' }}>
                <li>✓ Everything in Free</li>
                <li>✓ AI predictions</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Portfolio tracking</li>
                <li>✓ Priority support</li>
              </ul>
            </div>

            <div className="price-card">
              <h3>Premium</h3>
              <div className="price">$24.99</div>
              <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Per month</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Subscribe
              </button>
              <ul style={{ textAlign: 'left', marginTop: '1.5rem', color: '#a0aec0', fontSize: '0.9rem' }}>
                <li>✓ Everything in Pro</li>
                <li>✓ Tax reporting</li>
                <li>✓ Custom alerts</li>
                <li>✓ API access</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #1a365d 0%, #2d1b4e 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00d4ff' }}>
            Ready to level up your crypto game?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#a0aec0' }}>
            Join thousands of traders using CryptoTracker Pro to make smarter investments.
          </p>
          <button className="btn btn-primary">Start Your Free Trial Today</button>
        </div>
      </section>

      <footer className="footer" style={{ borderTop: '1px solid #333', padding: '3rem 0', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>CryptoTracker Pro</h4>
              <p style={{ color: '#999', fontSize: '0.9rem' }}>AI-powered crypto analysis and trading insights.</p>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#features" style={{ color: '#999', textDecoration: 'none' }}>Features</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#pricing" style={{ color: '#999', textDecoration: 'none' }}>Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#contact" style={{ color: '#999', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#privacy" style={{ color: '#999', textDecoration: 'none' }}>Privacy</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#terms" style={{ color: '#999', textDecoration: 'none' }}>Terms</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>© 2026 CryptoTracker Pro. Powered by AI. Secured by cryptography.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
