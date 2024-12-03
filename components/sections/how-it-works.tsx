export function HowItWorks() {
    return (
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Crafting Joy, Step by Step</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <StepCard
              number={1}
              title="Select Your Masterpiece"
              description="Browse our curated collection of wooden houses, vehicles, and playsets."
            />
            <StepCard
              number={2}
              title="Embark on Assembly"
              description="Follow our intuitive guides to bring your chosen creation to life."
            />
            <StepCard
              number={3}
              title="Ignite Imagination"
              description="Watch as your child's creativity flourishes with their new, unique wooden toy."
            />
          </div>
        </div>
      </section>
    )
  }
  
  function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
    return (
      <div className="bg-secondary bg-opacity-10 p-8 rounded-lg text-center flex-1">
        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          {number}
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    )
  }
  
  