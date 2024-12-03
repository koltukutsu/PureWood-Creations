export function BenefitsSection() {
    return (
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The PureWood Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <BenefitCard
              icon="🌿"
              title="Sustainably Sourced"
              description="Our toys are crafted from responsibly harvested wood, ensuring a better future for our planet."
            />
            <BenefitCard
              icon="🧠"
              title="Cognitive Development"
              description="Each toy is designed to stimulate problem-solving skills and enhance spatial awareness through play."
            />
            <BenefitCard
              icon="🛠️"
              title="Family Bonding"
              description="Create lasting memories as you and your child work together to bring these wooden wonders to life."
            />
          </div>
        </div>
      </section>
    )
  }
  
  function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
      <div className="text-center">
        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    )
  }
  
  