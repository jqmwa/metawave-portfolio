export function CompanySection() {
  const dataPoints = [
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Awards Won", value: "3+" },
    { label: "Years Experience", value: "8+" },
  ]

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* About paragraph */}
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-6">About Metawave Studio</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a cutting-edge digital design agency specializing in cyberpunk aesthetics and futuristic interfaces.
            Our team of visionary designers and developers craft immersive experiences that push the boundaries of
            digital art. From Web3 platforms to AI-powered interfaces, we bring tomorrow's designs to life today.
          </p>
        </div>

        {/* Data points */}
        <div className="grid grid-cols-2 gap-6">
          {dataPoints.map((point) => (
            <div key={point.label} className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{point.value}</div>
              <div className="text-sm text-muted-foreground">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
