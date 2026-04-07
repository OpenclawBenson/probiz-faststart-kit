export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            ProBiz <span className="text-orange-500">FastStart</span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-600 text-sm">
            <a href="#whats-inside" className="hover:text-orange-500 transition">What's Inside</a>
            <a href="#results" className="hover:text-orange-500 transition">Results</a>
            <a href="#guarantee" className="hover:text-orange-500 transition">Guarantee</a>
          </div>
          <a href="#buy" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
            Get It Now — $37
          </a>
        </div>
      </nav>

      {/* Hero Section - Large Image with Overlay Text */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&h=800&fit=crop" 
            alt="Business team success" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-orange-400 font-semibold mb-4 tracking-wide uppercase text-sm">
              ProBiz Member Approved
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Recruit Your First Contractor in 14 Days
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The exact email templates, scripts, and system I used to go from zero to 12 contractors in 6 months — without being salesy or pushy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#buy" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all text-center"
              >
                Get The FastStart Kit — $37
              </a>
              <a 
                href="#whats-inside" 
                className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all text-center backdrop-blur-sm"
              >
                See What's Inside
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              ✅ Instant Download  •  ✅ 30-Day Guarantee  •  ✅ 1,247+ Members Helped
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400">1,247+</div>
              <div className="text-sm text-gray-400">Members Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">14 Days</div>
              <div className="text-sm text-gray-400">Avg. First Signup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">$37</div>
              <div className="text-sm text-gray-400">One-Time Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">30-Day</div>
              <div className="text-sm text-gray-400">Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - With Image */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wide text-sm">The Problem</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                You Joined ProBiz Excited...<br />
                <span className="text-gray-500">Then Reality Hit</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                You saw the vision: recurring income, work from home, build a network. But when it's time to actually recruit?
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">You don't know what to say to contractors</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">You feel salesy and pushy</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">You "get organized" but never actually start</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                alt="Person frustrated at computer" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - What You Get */}
      <section id="whats-inside" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wide text-sm">The Solution</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Recruit Contractors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No more staring at blank screens. No more wondering what to say. Just copy, paste, and send.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop" 
                  alt="Email templates" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">10 Email Templates</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cold outreach, follow-ups, and subject lines that actually get opened. Just copy and customize.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Direct approach emails</li>
                  <li>• Value-first messages</li>
                  <li>• Social proof angles</li>
                  <li>• Follow-up sequences</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" 
                  alt="Conversation script" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conversation Script</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Word-for-word what to say when contractors respond. Handle every objection with confidence.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Opening lines that work</li>
                  <li>• Objection handlers</li>
                  <li>• Perfect closing timing</li>
                  <li>• 30-second ProBiz pitch</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" 
                  alt="Social media templates" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Pack</h3>
                <p className="text-gray-600 text-sm mb-4">
                  20 done-for-you posts to attract contractors on autopilot. Includes graphics and hashtags.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Facebook & Instagram posts</li>
                  <li>• Canva graphic templates</li>
                  <li>• Hashtag sets included</li>
                  <li>• Posting schedule</li>
                </ul>
              </div>
            </div>
          </div>

          {/* More Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="Tracking spreadsheet" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contractor Tracker</h3>
                <p className="text-gray-600 text-sm">
                  Google Sheets template to track every prospect. Never lose a lead in your inbox again.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop" 
                  alt="30 day roadmap" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">30-Day Roadmap</h3>
                <p className="text-gray-600 text-sm">
                  Day-by-day action plan. Know exactly what to do each day for your first month.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" 
                  alt="Video walkthrough" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Video Walkthrough</h3>
                <p className="text-gray-600 text-sm">
                  10-minute video showing exactly how to use every template. Watch once, reference anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop" 
                alt="Happy successful woman" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wide text-sm">Real Results</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Zero to 12 Contractors in 6 Months
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I was exactly where you are. I joined ProBiz excited but had no idea how to actually recruit contractors. I felt salesy, pushy, and kept "getting organized" without ever starting.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Then I discovered what the top 10% were doing differently. They had a system. Templates. Scripts. A roadmap. I copied what worked, refined it, and packaged it into the FastStart Kit.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8">
                <p className="text-gray-700 italic mb-2">
                  "I used the first email template and got a reply in 2 hours. Used the script and signed my first contractor that week. I was shocked it was that easy."
                </p>
                <p className="text-orange-600 font-semibold text-sm">
                  — Sarah M., ProBiz Member
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">14 Days</div>
                  <div className="text-xs text-gray-500">Avg. First Signup</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">$37</div>
                  <div className="text-xs text-gray-500">One-Time Cost</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">$480+</div>
                  <div className="text-xs text-gray-500">Monthly Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Works For You If */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wide text-sm">No Experience Required</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            This Works Even If...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-left">You've never recruited anyone before</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-left">You don't have a big network</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-left">You're "not a salesperson"</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-left">You only have 30 minutes a day</p>
            </div>
          </div>

          <div className="mt-12 bg-orange-100 p-8 rounded-2xl">
            <p className="text-xl text-gray-800">
              <strong>It's not about being pushy.</strong><br />
              <span className="text-orange-600">It's about having the right words at the right time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            30-Day "First Contractor" Guarantee
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Use the FastStart Kit for 30 days. Follow the system. Send the emails. Have the conversations.
          </p>
          <div className="bg-gray-900 text-white p-8 rounded-2xl inline-block">
            <p className="text-xl mb-2">
              If you don't sign at least <strong className="text-orange-400">one contractor</strong> in 30 days,
            </p>
            <p className="text-2xl font-bold">
              I'll refund every penny.
            </p>
          </div>
          <p className="text-gray-500 mt-6">
            No hoops. No "prove you tried." Just email me and I'll send your $37 back.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="buy" className="py-20 px-6 bg-orange-500">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 font-semibold mb-2 uppercase tracking-wide text-sm">Limited Time</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get The FastStart Kit Today
          </h2>
          <p className="text-xl text-white/90 mb-2">
            Regular Price: <span className="line-through">$67</span>
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl mb-8 inline-block">
            <p className="text-sm text-gray-500 mb-1">Launch Special</p>
            <div className="text-6xl font-bold text-orange-500">$37</div>
            <p className="text-gray-500 text-sm">One-time payment</p>
          </div>
          <p className="text-white/90 mb-8 text-lg">
            Less than the commission from 2 contractors. They'll pay you $40-80/month... every month.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-xl shadow-xl transition-all mb-6"
          >
            Get Instant Access — $37
          </a>
          <div className="flex justify-center space-x-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure Checkout
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Instant Download
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-Day Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2026 ProBiz FastStart Kit. All rights reserved.</p>
        <p className="mt-2">Questions? Email support@probizfaststart.com</p>
      </footer>
    </main>
  )
}