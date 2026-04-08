export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
              P
            </div>
            <span className="font-bold text-xl text-gray-900">ProBiz FastStart</span>
          </div>
          <div className="text-sm text-gray-600">
            Trusted by 500+ ProBiz Members
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="mr-2">🎯</span>
            New: Complete Recruiting System for ProBiz Members
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Recruit Your First Contractor in{' '}
            <span className="text-blue-600">14 Days</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The exact copy-and-paste system that gets contractors to sign up — 
            even if you've never recruited anyone before
          </p>
          
          {/* Product Preview Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-10 max-w-2xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">
                📦
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">ProBiz FastStart Kit</h2>
            <p className="text-gray-600 mb-4">Everything you need to start recruiting today</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">10 Email Templates</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Conversation Script</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">20 Social Posts</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">30-Day Roadmap</span>
            </div>
          </div>
          
          {/* Price & CTA */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto border-2 border-blue-100">
            <div className="text-gray-500 line-through text-lg mb-1">$67</div>
            <div className="text-5xl font-bold text-gray-900 mb-2">$37</div>
            <div className="text-gray-600 mb-6">One-time payment • Instant access</div>
            
            <a 
              href="#order" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              Get Instant Access →
            </a>
            
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center">🔒 Secure</span>
              <span className="flex items-center">⚡ Instant</span>
              <span className="flex items-center">🛡️ 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sound Familiar?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
              <div className="flex items-start">
                <span className="text-2xl mr-3">😰</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">You don't know what to say</h3>
                  <p className="text-gray-600 text-sm">Staring at blank emails, typing and deleting...</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
              <div className="flex items-start">
                <span className="text-2xl mr-3">😔</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">You feel salesy and pushy</h3>
                  <p className="text-gray-600 text-sm">Hating every minute of "selling"</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📭</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">No responses to your outreach</h3>
                  <p className="text-gray-600 text-sm">Sending emails into the void...</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
              <div className="flex items-start">
                <span className="text-2xl mr-3">⏰</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Weeks go by, zero progress</h3>
                  <p className="text-gray-600 text-sm">Still haven't recruited anyone</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-xl text-gray-700">
              Meanwhile, top ProBiz members are earning{' '}
              <span className="font-bold text-blue-600">$200, $500, even $1,000+</span>{' '}
              per month in passive income...
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Difference? They Had a System.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            While everyone else figured it out from scratch, they were copying and pasting 
            proven templates that already worked.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-6xl mb-6">💡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Introducing: The ProBiz FastStart Kit
            </h3>
            <p className="text-gray-600 text-lg">
              Everything you need to recruit your first contractor in the next 14 days
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What's Inside
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                📧
              </div>
              <h3 className="font-bold text-gray-900 mb-2">10 Email Templates</h3>
              <p className="text-gray-600 text-sm">Copy-and-paste emails that get contractors to respond</p>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Conversation Script</h3>
              <p className="text-gray-600 text-sm">Word-for-word what to say on calls</p>
            </div>
            
            {/* Item 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                📱
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Social Media Pack</h3>
              <p className="text-gray-600 text-sm">20 posts to attract contractors organically</p>
            </div>
            
            {/* Item 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                📊
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contractor Tracker</h3>
              <p className="text-gray-600 text-sm">Never lose a lead in your inbox again</p>
            </div>
            
            {/* Item 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                📅
              </div>
              <h3 className="font-bold text-gray-900 mb-2">30-Day Roadmap</h3>
              <p className="text-gray-600 text-sm">Day-by-day action plan to your first contractor</p>
            </div>
            
            {/* Item 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🎥
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Video Walkthrough</h3>
              <p className="text-gray-600 text-sm">See exactly how to use every template</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 text-xl">
                ★★★★★
              </div>
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
              "I used the first email template and got a reply in 2 hours. Used the script on the call 
              and signed my first contractor that week. I was shocked it was that easy. Now I have 
              7 contractors and make $280/month in passive income!"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-gray-500 text-sm">ProBiz Member — 7 Contractors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Works For */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            This Works Even If...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-red-500 mr-3">✕</span>
              <span className="text-gray-700">You've never recruited anyone</span>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-red-500 mr-3">✕</span>
              <span className="text-gray-700">You don't have a big network</span>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-red-500 mr-3">✕</span>
              <span className="text-gray-700">You're "not a salesperson"</span>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-red-500 mr-3">✕</span>
              <span className="text-gray-700">You only have 30 minutes a day</span>
            </div>
          </div>
          
          <div className="mt-10 bg-green-50 rounded-xl p-8">
            <p className="text-xl text-gray-800">
              It's not about being pushy. It's about having{' '}
              <span className="font-bold text-green-700">the right words at the right time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              🛡️
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              30-Day "First Contractor" Guarantee
            </h2>
            <p className="text-gray-600 mb-6">
              Use the FastStart Kit for 30 days. Follow the system. If you don't sign 
              at least one contractor, I'll refund every penny.
            </p>
            <div className="bg-green-500 text-white rounded-xl p-6">
              <p className="text-lg font-semibold">
                No hoops. No "prove you tried." Just email me for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 md:py-20 px-4 bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Limited Time Price
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Get The FastStart Kit
            </h2>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-gray-400 line-through text-xl">$67</span>
              <span className="text-5xl font-bold text-gray-900">$37</span>
            </div>
            
            <p className="text-gray-500 mb-8">One-time payment • Instant access</p>
            
            <a 
              href="https://checkout.stripe.com/c/pay/cs_live_a1rDCYr9Lm7GhXUoeFEZVOGC7TxRC5Lzwp8jsHGqSwtgqQI9L4G8uAXU2f#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWkpiYFB2VV1ASm1KM1RKcGlOcl81XWRCMScpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyYyYTYzNDInKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] mb-4"
            >
              Get Instant Access →
            </a>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">🔒 Secure</span>
              <span className="flex items-center gap-1">⚡ Instant</span>
              <span className="flex items-center gap-1">🛡️ Guaranteed</span>
            </div>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            Price increases to $67 soon. Lock in your discount today.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Will this work with my ProBiz membership?</h3>
              <p className="text-gray-600">Yes! Works with both the $99 Founders and $199 Full Member plans.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do I need special software?</h3>
              <p className="text-gray-600">Nope! Just Gmail, Google Sheets, and Canva (all free).</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What if I'm not good at sales?</h3>
              <p className="text-gray-600">Perfect! These templates are designed for people who "aren't salespeople."</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How fast do I get access?</h3>
              <p className="text-gray-600">Instant! Download link sent immediately after purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold mr-2">
              P
            </div>
            <span className="font-bold text-lg text-gray-900">ProBiz FastStart</span>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            © 2026 ProBiz FastStart Kit. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Not affiliated with ProBiz Inc.
          </p>
        </div>
      </footer>
    </main>
  )
}
