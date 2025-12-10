export default function HeroTitle() {
  return (
    <h1 className="font-light leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
      <span className="text-black">The </span>
      <span 
        className="bg-clip-text text-transparent"
        style={{ 
          background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #E53E3E 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text'
        }}
      >
        USD AI Research <br />
        The AI powerhouse
      </span>
      <span className="text-black"> on</span>
      <br />
      <span 
        className="bg-clip-text text-transparent"
        style={{ 
          background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #E53E3E 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text'
        }}
      >
        of South Dakota
      </span>
      <span className="text-black"> from the</span>
      <br />
      <span className="text-black">heart of </span>
      <span 
        className="bg-clip-text text-transparent"
        style={{ 
          background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #E53E3E 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text'
        }}
      >
        Rushmore State
      </span>
    </h1>
  );
}
