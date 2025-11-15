export default function Home() {
  const products = [
    {
      id: 'sfi-s',
      name: 'SFI S',
      subtitle: 'With Weld Ends',
      description: 'Robust flow indicator with weld end connections for permanent pipeline integration',
      features: ['Weld end connections', 'DN 15 to DN 300', 'Pressure up to 40 bar', 'Temperature up to 280°C']
    },
    {
      id: 'sfi-f-vg',
      name: 'SFI F-VG',
      subtitle: 'Casted Version with Connecting Flanges',
      description: 'Heavy-duty casted design with flange connections for demanding industrial applications',
      features: ['Casted construction', 'Flange connections DIN/ANSI', 'Vacuum capable', 'Robust design']
    },
    {
      id: 'sfi-f-vs',
      name: 'SFI F-VS',
      subtitle: 'Welded Version with Connecting Flanges',
      description: 'Precision welded flow indicator with flanged connections for easy installation and maintenance',
      features: ['Welded construction', 'Flange connections', 'Easy maintenance', 'Customizable options']
    },
    {
      id: 'sfi-p',
      name: 'SFI P',
      subtitle: 'Pharmaceutical Version',
      description: 'Specialized design for sterile and pharmaceutical applications with cleanable surfaces',
      features: ['Dead space-free design', 'PTFE inner lining option', 'Polished to Ra < 0.4', 'Sterile applications']
    }
  ];

  const specifications = [
    { label: 'Nominal Sizes', value: 'DN 15 to DN 300 (0.5" to 12")' },
    { label: 'Operating Pressure', value: '10-40 bar, including vacuum' },
    { label: 'Max Temperature', value: '150°C or 280°C' },
    { label: 'Connections', value: 'DIN or ANSI compatible' }
  ];

  const addons = [
    { name: 'Light Fittings', description: 'Improve visibility in dark environments' },
    { name: 'Camera Systems', description: 'Enable remote monitoring and digital inspection' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">MAX MÜLLER</h1>
              <p className="text-sm mt-1 opacity-90">Engineering Excellence Since 1936</p>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#products" className="hover:underline">Products</a>
              <a href="#specs" className="hover:underline">Specifications</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Flow Indicators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional sight glasses and flow indicators for monitoring liquid flows and fill levels in industrial pipelines
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary">85+</div>
              <div className="text-gray-600 mt-2">Years of Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-gray-600 mt-2">Product Series</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-gray-600 mt-2">European Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Our Flow Indicators?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Safety</h4>
              <p className="text-gray-600">European-made components ensuring highest quality and safety standards</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Reliability</h4>
              <p className="text-gray-600">Founded in 1936, delivering proven engineering excellence for decades</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Customizable</h4>
              <p className="text-gray-600">Configurable to your specific requirements with multiple options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Product Series</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-primary to-primary-light p-6">
                  <h4 className="text-2xl font-bold text-white">{product.name}</h4>
                  <p className="text-white/90 mt-1">{product.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Specifications</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-700 border-b">{spec.label}</td>
                      <td className="px-6 py-4 text-gray-600 border-b">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Available Options:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Content/flow indicators with flaps, rotors, or balls</li>
                <li>• Designs without dead spaces for pharmaceutical applications</li>
                <li>• PTFE inner lining for chemical resistance</li>
                <li>• Mechanical polishing to Ra &lt; 0.4 for hygienic requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Recommended Add-ons</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addons.map((addon, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-primary">{addon.name}</h4>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">Contact us to discuss your specific requirements</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-3">MAX MÜLLER</h5>
              <p className="text-gray-400 text-sm">Leading manufacturer of sight glasses and flow indicators since 1936</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3">Products</h5>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Sight Glasses</li>
                <li>Flow Indicators</li>
                <li>Level Gauges</li>
                <li>Custom Solutions</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3">Industries</h5>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Pharmaceutical</li>
                <li>Food & Beverage</li>
                <li>Chemical Processing</li>
                <li>Oil & Gas</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MAX MÜLLER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
