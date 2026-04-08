export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Bold Gradient */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 ProBiz Member Exclusive
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Struggling to Recruit.
                <br />
                <span className="text-yellow-300">Start Signing Contractors.</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Get the exact copy-and-paste system that gets contractors to sign up in as little as 14 days — even if you hate selling.
              </p>
              
              {/* Benefits with checkmarks */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">10 proven email templates that get replies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Word-for-word conversation scripts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">20 social media posts to attract contractors</span>
                </div>
              </div>
              
              <a 
                href="#order" 
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Get The FastStart Kit — $37
              </a>
              
              <p className="text-blue-200 text-sm mt-4">
                🔒 Secure checkout • Instant download • 30-day guarantee
              </p>
            </div>
            
            {/* Right: Product Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=600&fit=crop" 
                  alt="ProBiz FastStart Kit"
                  className="rounded-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">$37</div>
                  <div className="text-sm">One-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Dark */}
      <section className="bg-gray-900 py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Does This Sound Familiar?
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            You joined ProBiz excited about passive income, but...
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-white font-semibold mb-2">You freeze up</h3>
              <p className="text-gray-400 text-sm">Don't know what to say to contractors</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">😔</div>
              <h3 className="text-white font-semibold mb-2">You feel salesy</h3>
              <p className="text-gray-400 text-sm">Hate every minute of "selling"</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-white font-semibold mb-2">No responses</h3>
              <p className="text-gray-400 text-sm">Emails go into the void</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Gradient */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Top 10% Have a System.
            <br />
            <span className="text-yellow-300">Now You Can Too.</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            While everyone else figures it out from scratch, they copy and paste proven templates.
          </p>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-700 text-lg mb-6 italic">
              "I used the first email template and got a reply in 2 hours. Signed my first contractor that week. 
              Now I have 7 contractors and make $280/month in passive income!"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                S
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-gray-500 text-sm">ProBiz Member — 7 Contractors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Cards */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Everything You Need to Start Recruiting
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The complete system for recruiting your first contractor in 14 days
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">10 Email Templates</h3>
              <p className="text-gray-600 text-sm">Copy-and-paste emails that get contractors to respond</p>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">Conversation Script</h3>
              <p className="text-gray-600 text-sm">Word-for-word what to say on calls</p>
            </div>
            
            {/* Item 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Social Media Pack</h3>
              <p className="text-gray-600 text-sm">20 posts to attract contractors</p>
            </div>
            
            {/* Item 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Contractor Tracker</h3>
              <p className="text-gray-600 text-sm">Never lose a lead again</p>
            </div>
            
            {/* Item 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-bold text-gray-900 mb-2">30-Day Roadmap</h3>
              <p className="text-gray-600 text-sm">Day-by-day action plan</p>
            </div>
            
            {/* Item 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="font-bold text-gray-900 mb-2">Video Walkthrough</h3>
              <p className="text-gray-600 text-sm">See exactly how to use it all</p>
            </div>
          </div>
        </div>
      </section>

      {/* This Works For */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            This Works Even If...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center bg-red-50 p-4 rounded-lg">
              <span className="text-red-500 text-xl mr-3">✕</span>
              <span className="text-gray-700">You've never recruited anyone</span>
            </div>
            <div className="flex items-center bg-red-50 p-4 rounded-lg">
              <span className="text-red-500 text-xl mr-3">✕</span>
              <span className="text-gray-700">You don't have a big network</span>
            </div>
            <div className="flex items-center bg-red-50 p-4 rounded-lg">
              <span className="text-red-500 text-xl mr-3">✕</span>
              <span className="text-gray-700">You're "not a salesperson"</span>
            </div>
            <div className="flex items-center bg-red-50 p-4 rounded-lg">
              <span className="text-red-500 text-xl mr-3">✕</span>
              <span className="text-gray-700">You only have 30 min/day</span>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-xl text-gray-700">
              It's not about being pushy. It's about having{' '}
              <span className="font-bold text-blue-600">the right words at the right time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            🛡️
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            30-Day "First Contractor" Guarantee
          </h2>
          <p className="text-xl text-green-100 mb-6">
            Use the FastStart Kit for 30 days. Follow the system. 
            If you don't sign at least one contractor, I'll refund every penny.
          </p>
          <div className="bg-white/20 rounded-xl p-4 inline-block">
            <p className="font-semibold">No hoops. No "prove you tried." Just email for a full refund.</p>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="bg-gray-900 py-16 md:py-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center">
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
                className="block w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] mb-4"
              >
                Get Instant Access →
              </a>
              
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">🔒 Secure</span>
                <span className="flex items-center gap-1">⚡ Instant</span>
                <span className="flex items-center gap-1">🛡️ Guaranteed</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 mt-6 text-center text-sm">
            Price increases to $67 soon. Lock in your discount today.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p className="text-lg font-semibold text-white mb-2">ProBiz FastStart</p>
          <p className="text-sm mb-2">© 2026 All rights reserved.</p>
          <p className="text-xs">Not affiliated with ProBiz Inc.</p>
        </div>
      </footer>
    </main>
  )
}
