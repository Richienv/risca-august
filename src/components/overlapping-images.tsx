export default function OverlappingImages({ solutionIndex }: { solutionIndex: number }) {
  const imagePairs = [
    // Train to Sell
    {
      image1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80&fit=crop&crop=faces",
    },
    // Get Client
    {
      image1: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80&fit=crop&crop=faces",
    },
    // Client Relationship
    {
      image1: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&fit=crop&crop=faces",
    },
    // Handle Objection
    {
      image1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80&fit=crop&crop=faces",
    },
    // Financial Planning
    {
      image1: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=faces",
    },
  ];

  const pair = imagePairs[solutionIndex] || imagePairs[0];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* First Image - Back/Left */}
      <div 
        className="absolute w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-lg shadow-lg overflow-hidden transform -rotate-3 translate-x-2 translate-y-1 sm:translate-x-4 sm:translate-y-2 z-10"
        style={{
          background: `url(${pair.image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Grain/Film overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Second Image - Front/Right */}
      <div 
        className="relative w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-lg shadow-xl overflow-hidden transform rotate-2 -translate-x-2 -translate-y-1 sm:-translate-x-4 sm:-translate-y-2 z-20"
        style={{
          background: `url(${pair.image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Grain/Film overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Ambient shadow behind images */}
      <div className="absolute inset-0 bg-black/5 rounded-xl blur-xl scale-110 -z-10"></div>
    </div>
  );
}