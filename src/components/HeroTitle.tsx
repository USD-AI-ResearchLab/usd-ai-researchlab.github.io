export default function HeroTitle() {
  return (
    <div>
      <h1 className="font-thin leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <span 
          className="bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #000 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          USD Artificial Intelligence Research
        </span>
      </h1>
      <h2 className="font-thin leading-[1.2] tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
        <span 
          className="bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(90deg, #000 0%, #C53030 50%, #000 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          the AI powerhouse of South Dakota
        </span>
      </h2>
    </div>
  );
}
