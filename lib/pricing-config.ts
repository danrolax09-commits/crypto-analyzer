export const STRIPE_PRICES = {
  starter: 'price_1TChYPFE7rCAiPw0qvVcMhUF',
  professional: 'price_1TChYQFE7rCAiPw0PT5Yiel5',
  enterprise: 'price_1TChYQFE7rCAiPw0UDkBFuKC',
};

export const PRICING_TIERS = [
  {
    name: 'Starter',
    priceId: 'price_1TChYPFE7rCAiPw0qvVcMhUF',
    price: 19,
    description: 'Perfect for getting started',
    features: [
      'Basic features',
      'Up to 100 requests/month',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    priceId: 'price_1TChYQFE7rCAiPw0PT5Yiel5',
    price: 49,
    description: 'Most popular for teams',
    features: [
      'All Starter features',
      'Unlimited requests',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    priceId: 'price_1TChYQFE7rCAiPw0UDkBFuKC',
    price: 99,
    description: 'For large-scale operations',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
  },
];
