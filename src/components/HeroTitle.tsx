export default function HeroTitle() {
  return (
    <div className="text-left">
      <h1 className="font-bold leading-[1.0] tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <span 
          className="bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #000 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          USD AI Research Lab
        </span>
      </h1>
      <h2 className="font-bold leading-[1.0] tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl mt-1">
        <span 
          className="bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #000 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          The South Dakota's AI Powerhouse
        </span>
      </h2>
    </div>
  );
}
