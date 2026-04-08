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

      {/* Hero Section with Image */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="mr-2">🎯</span>
                New: Complete Recruiting System
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Recruit Your First Contractor in{' '}
                <span className="text-blue-600">14 Days</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                The exact copy-and-paste system that gets contractors to sign up — 
                even if you've never recruited anyone before
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#order" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all"
                >
                  Get Instant Access — $37
                </a>
              </div>
              
              <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">🔒 Secure Checkout</span>
                <span className="flex items-center gap-1">⚡ Instant Download</span>
                <span className="flex items-center gap-1">🛡️ 30-Day Guarantee</span>
              </div>
            </div>
            
            {/* Right: Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" 
                  alt="ProBiz FastStart Kit"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="mt-6 text-white">
                  <h3 className="font-bold text-xl mb-2">ProBiz FastStart Kit</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">10 Emails</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Scripts</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">20 Posts</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">Roadmap</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">500+ Members</div>
                    <div className="text-sm text-gray-500">Already using this</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Image */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=500&fit=crop" 
                alt="Frustrated with recruiting"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            {/* Right: Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sound Familiar?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start bg-red-50 p-4 rounded-xl">
                  <span className="text-red-500 text-xl mr-3 mt-0.5">✕</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">You don't know what to say</h3>
                    <p className="text-gray-600 text-sm">Staring at blank emails, typing and deleting...</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-red-50 p-4 rounded-xl">
                  <span className="text-red-500 text-xl mr-3 mt-0.5">✕</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">You feel salesy and pushy</h3>
                    <p className="text-gray-600 text-sm">Hating every minute of "selling"</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-red-50 p-4 rounded-xl">
                  <span className="text-red-500 text-xl mr-3 mt-0.5">✕</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">No responses to outreach</h3>
                    <p className="text-gray-600 text-sm">Sending emails into the void...</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-red-50 p-4 rounded-xl">
                  <span className="text-red-500 text-xl mr-3 mt-0.5">✕</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Zero progress for weeks</h3>
                    <p className="text-gray-600 text-sm">Still haven't recruited anyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with Image */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Difference? They Had a System.
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                While everyone else figured it out from scratch, top ProBiz members were 
                copying and pasting proven templates that already worked.
              </p>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 italic">
                  "I used the first email template and got a reply in 2 hours. Signed my first 
                  contractor that week. Now I have 7 contractors and make $280/month!"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-500">ProBiz Member</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Image */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop" 
                alt="Success with system"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included with Icons */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Inside The Kit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to recruit your first contractor in 14 days
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                📧
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">10 Email Templates</h3>
              <p className="text-gray-600">Copy-and-paste emails that get contractors to actually respond</p>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                💬
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Conversation Script</h3>
              <p className="text-gray-600">Word-for-word what to say when contractors call you back</p>
            </div>
            
            {/* Item 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                📱
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Social Media Pack</h3>
              <p className="text-gray-600">20 posts to attract contractors on Facebook and Instagram</p>
            </div>
            
            {/* Item 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                📊
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Contractor Tracker</h3>
              <p className="text-gray-600">Never lose a lead in your inbox again</p>
            </div>
            
            {/* Item 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                📅
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">30-Day Roadmap</h3>
              <p className="text-gray-600">Day-by-day action plan to your first contractor</p>
            </div>
            
            {/* Item 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                🎥
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Video Walkthrough</h3>
              <p className="text-gray-600">See exactly how to use every template</p>
            </div>
          </div>
        </div>
      </section>

      {/* This Works For */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              This Works Even If...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <span className="text-red-500 mr-3 text-xl">✕</span>
                <span className="text-gray-700">You've never recruited anyone</span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <span className="text-red-500 mr-3 text-xl">✕</span>
                <span className="text-gray-700">You don't have a big network</span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <span className="text-red-500 mr-3 text-xl">✕</span>
                <span className="text-gray-700">You're "not a salesperson"</span>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <span className="text-red-500 mr-3 text-xl">✕</span>
                <span className="text-gray-700">You only have 30 minutes a day</span>
              </div>
            </div>
            
            <div className="mt-8 text-center bg-green-50 rounded-xl p-6">
              <p className="text-xl text-gray-800">
                It's not about being pushy. It's about having{' '}
                <span className="font-bold text-green-700">the right words at the right time.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              🛡️
            </div>
            <h2 className="text-3xl font-bold mb-4">
              30-Day "First Contractor" Guarantee
            </h2>
            <p className="text-lg mb-6 text-green-100">
              Use the FastStart Kit for 30 days. Follow the system. If you don't sign 
              at least one contractor, I'll refund every penny.
            </p>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="font-semibold">
                No hoops. No "prove you tried." Just email me for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 md:py-20 px-4 bg-gray-900">
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
          </div>
          
          <p className="text-gray-400 mt-6 text-center text-sm">
            Price increases to $67 soon. Lock in your discount today.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Will this work with my ProBiz membership?</h3>
              <p className="text-gray-600">Yes! Works with both the $99 Founders and $199 Full Member plans.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Do I need special software?</h3>
              <p className="text-gray-600">Nope! Just Gmail, Google Sheets, and Canva (all free).</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What if I'm not good at sales?</h3>
              <p className="text-gray-600">Perfect! These templates are designed for people who "aren't salespeople."</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How fast do I get access?</h3>
              <p className="text-gray-600">Instant! Download link sent immediately after purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4">
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
