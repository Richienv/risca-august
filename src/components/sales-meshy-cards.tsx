export default function SalesMeshyCards({ cardIndex }: { cardIndex: number }) {
  const cards = [
    {
      title: "Train to Sell",
      description: "Master teknik penjualan yang terbukti",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="m22 2-5 10-5-4-2 3"></path>
        </svg>
      ),
      stat: "300% closing rate",
      background: "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80)",
    },
    {
      title: "Get Client",
      description: "Sistem mendapatkan klien berkualitas",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" x2="19" y1="8" y2="14"></line>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      ),
      stat: "50+ klien/bulan",
      background: "url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80)",
    },
    {
      title: "Client Relationship",
      description: "Bangun hubungan jangka panjang",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <circle cx="12" cy="10" r="2"></circle>
          <line x1="8" x2="8" y1="2" y2="4"></line>
          <line x1="16" x2="16" y1="2" y2="4"></line>
        </svg>
      ),
      stat: "90% retention",
      background: "url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80)",
    },
    {
      title: "Handle Objection",
      description: "Atasi penolakan dengan percaya diri",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <path d="M9 12l2 2 4-4"></path>
          <path d="M21 12c.552 0 1-.449 1-1s-.448-1-1-1"></path>
          <path d="M3 12c-.552 0-1-.449-1-1s.448-1 1-1"></path>
          <path d="M12 21c.552 0 1-.449 1-1s-.448-1-1-1"></path>
          <path d="M12 3c-.552 0-1-.449-1-1s.448-1 1-1"></path>
          <path d="m16.24 7.76-.707-.707"></path>
          <path d="m8.54 16.54-.707-.707"></path>
          <path d="m16.24 16.24-.707.707"></path>
          <path d="m8.54 7.46-.707.707"></path>
        </svg>
      ),
      stat: "85% success rate",
      background: "url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80)",
    },
    {
      title: "Financial Planning",
      description: "Rencanakan keuangan yang sustainable",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      stat: "Financial freedom",
      background: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80)",
    },
  ];

  const card = cards[cardIndex] || cards[0];

  return (
    <div className="w-full h-full">
      <div
        className="scale-in group visible cursor-pointer h-full"
        style={{ transform: 'translateY(0px) scale(1)' }}
      >
        <div
          className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl h-full"
          style={{
            background: card.background,
            backgroundSize: 'cover',
          }}
        >
          <div className="relative h-full flex flex-col justify-between">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
              {card.icon}
            </div>
            <div>
              <h3 className="mb-2 font-sans text-lg font-medium text-white">
                {card.title}
              </h3>
              <p className="mb-4 font-sans text-sm text-white/80">
                {card.description}
              </p>
              <div className="flex items-center text-white/60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                <span className="font-sans text-xs">{card.stat}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}