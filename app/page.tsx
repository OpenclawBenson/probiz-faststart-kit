export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">
            ProBiz FastStart
          </div>
          <div className="hidden md:flex space-x-8 text-gray-600 text-sm">
            <a href="#what-you-get" className="hover:text-orange-500 transition">What You Get</a>
            <a href="#how-it-works" className="hover:text-orange-500 transition">How It Works</a>
            <a href="#guarantee" className="hover:text-orange-500 transition">Guarantee</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean White Style */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Your Complete Guide to<br />
                <span className="text-orange-500">Recruiting Contractors</span>
              </h1>
              <p className="text-lg mb-4 text-orange-600 font-medium">
                Beyond Guesswork | Proven Templates | Real Results
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Hey! I&apos;m Nicky, your ProBiz insider who went from zero to 12 contractors in 6 months. 
                Let me show you the exact system that works—from the first email to your first signup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#offer" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Get The Kit — $37
                </a>
                <a 
                  href="#what-you-get" 
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  See What&apos;s Inside
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Instant download • 30-day guarantee • No subscription
              </p>
            </div>
            
            {/* Right: Image Collage Style */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 relative overflow-hidden">
                {/* Main Feature Box */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <div className="text-orange-500 text-sm font-semibold mb-2">PROBIZ FASTSTART KIT</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Everything You Need to</h3>
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">Recruit Your First Contractor</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ 10 Email Templates</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Scripts</span>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg shadow-md p-4 transform rotate-2">
                    <div className="text-3xl mb-2">📧</div>
                    <div className="text-sm font-semibold text-gray-800">Email Swipes</div>
                    <div className="text-xs text-gray-500">Copy & Paste Ready</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 transform -rotate-1">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-sm font-semibold text-gray-800">Scripts</div>
                    <div className="text-xs text-gray-500">Word-for-Word</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 transform -rotate-2">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="text-sm font-semibold text-gray-800">Social Posts</div>
                    <div className="text-xs text-gray-500">20 Templates</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 transform rotate-1">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-sm font-semibold text-gray-800">Tracker</div>
                    <div className="text-xs text-gray-500">Never Lose Leads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Clean Style */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            The Real Problem Isn&apos;t ProBiz.<br />
            <span className="text-orange-500">It&apos;s the Starting Line.</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-1">Recurring Income</h3>
                <p className="text-gray-500 text-sm">$20-40/month per contractor</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-semibold text-gray-900 mb-1">Work From Home</h3>
                <p className="text-gray-500 text-sm">Build your network remotely</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-semibold text-gray-900 mb-1">Passive Growth</h3>
                <p className="text-gray-500 text-sm">Network grows while you sleep</p>
              </div>
            </div>

            <div className="border-t pt-8">
              <p className="text-lg mb-4 text-gray-700 text-center">
                You log in. You see the dashboard. You understand the concept.
              </p>
              <p className="text-lg mb-6 text-gray-700 text-center">
                But when it&apos;s time to actually recruit your first contractor?
              </p>
              <p className="text-4xl font-bold text-orange-500 text-center mb-6">
                Crickets.
              </p>
              <p className="text-gray-600 text-center max-w-xl mx-auto">
                You don&apos;t know what to say. You don&apos;t know where to find them. 
                You don&apos;t want to sound salesy or desperate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Separates Top 10% - Clean Style */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            What Separates the Top 10% from Everyone Else?
          </h2>
          <p className="text-lg mb-10 text-gray-600 text-center max-w-2xl mx-auto">
            I studied the ProBiz members who hit the ground running—the ones who recruited 3, 5, even 10 contractors in their first month.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <p className="text-2xl font-bold text-center mb-8 text-gray-900">
              They simply had a <span className="text-orange-500">system</span>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <span className="bg-orange-100 text-orange-600 rounded-lg p-3 mr-4 text-xl">✉️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">The Exact Email</h4>
                  <p className="text-gray-500 text-sm">That gets contractors to reply</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <span className="bg-blue-100 text-blue-600 rounded-lg p-3 mr-4 text-xl">📝</span>
                <div>
                  <h4 className="font-semibold text-gray-900">The Conversation Script</h4>
                  <p className="text-gray-500 text-sm">That turns interest into signups</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <span className="bg-green-100 text-green-600 rounded-lg p-3 mr-4 text-xl">📱</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Social Media Posts</h4>
                  <p className="text-gray-500 text-sm">That attract local businesses</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <span className="bg-purple-100 text-purple-600 rounded-lg p-3 mr-4 text-xl">📊</span>
                <div>
                  <h4 className="font-semibold text-gray-900">The Tracking System</h4>
                  <p className="text-gray-500 text-sm">That keeps follow-ups on track</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg font-semibold text-center text-gray-700">
            They didn&apos;t reinvent the wheel. They used a template that already worked.
          </p>
        </div>
      </section>

      {/* The Offer - Clean Style */}
      <section id="what-you-get" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Introducing: The ProBiz FastStart Kit
          </h2>
          <p className="text-lg mb-4 text-orange-600 text-center font-medium">
            This isn&apos;t theory. This isn&apos;t &quot;motivational advice.&quot;
          </p>
          <p className="text-lg mb-10 text-gray-600 text-center max-w-3xl mx-auto">
            This is the <strong className="text-gray-900">actual recruiting system</strong> that top ProBiz members used to get their first contractors fast—including the exact words they used, the templates they copied, and the sequence they followed.
          </p>

          <h3 className="text-2xl font-bold mb-8 text-center text-orange-500">Here&apos;s What You Get:</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Email Swipe File</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 10 pre-written emails</li>
                <li>• Cold outreach templates</li>
                <li>• Follow-up sequences</li>
                <li>• Subject lines that get opened</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Conversation Script</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Word-for-word script</li>
                <li>• 30-second ProBiz explanation</li>
                <li>• Objection handlers</li>
                <li>• Perfect closing timing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Social Media Pack</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 20 post templates</li>
                <li>• Canva graphics included</li>
                <li>• Hashtag sets</li>
                <li>• Posting schedule</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Contractor Tracker</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Google Sheets template</li>
                <li>• Track all prospects</li>
                <li>• Never lose a lead</li>
                <li>• Pipeline visualization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">30-Day Roadmap</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Day-by-day action plan</li>
                <li>• Exactly what to do</li>
                <li>• Milestone checklists</li>
                <li>• Emergency tactics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Walkthrough Video</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 10-minute tutorial</li>
                <li>• Real member examples</li>
                <li>• Setup instructions</li>
                <li>• Reference anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* This Works Even If */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-800">
            This Works Even If...
          </h2>
          <p className="text-center text-gray-600 mb-12">No experience? No network? No problem.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-center bg-red-50 p-5 rounded-xl border border-red-100">
              <span className="text-red-500 mr-4 text-2xl">✗</span>
              <span className="text-slate-700">You&apos;ve never recruited anyone before</span>
            </div>
            <div className="flex items-center bg-red-50 p-5 rounded-xl border border-red-100">
              <span className="text-red-500 mr-4 text-2xl">✗</span>
              <span className="text-slate-700">You don&apos;t have a big network</span>
            </div>
            <div className="flex items-center bg-red-50 p-5 rounded-xl border border-red-100">
              <span className="text-red-500 mr-4 text-2xl">✗</span>
              <span className="text-slate-700">You&apos;re &quot;not a salesperson&quot;</span>
            </div>
            <div className="flex items-center bg-red-50 p-5 rounded-xl border border-red-100">
              <span className="text-red-500 mr-4 text-2xl">✗</span>
              <span className="text-slate-700">You&apos;ve tried and failed before</span>
            </div>
            <div className="flex items-center bg-red-50 p-5 rounded-xl border border-red-100 md:col-span-2">
              <span className="text-red-500 mr-4 text-2xl">✗</span>
              <span className="text-slate-700">You only have 30 minutes a day</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-8 rounded-2xl">
            <p className="text-lg text-center text-slate-700">
              The FastStart Kit isn&apos;t about being pushy or salesy.<br />
              <strong className="text-orange-600 text-xl">It&apos;s about having the right words at the right time.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800">
            The Math That Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-500 mb-2">$20-40</div>
              <p className="text-gray-600">Per contractor<br/>per month</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-500 mb-2">3</div>
              <p className="text-gray-600">Contractors to<br/>cover your investment</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-500 mb-2">$200-400</div>
              <p className="text-gray-600">Monthly income<br/>with 10 contractors</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white p-8 rounded-2xl">
            <p className="text-xl mb-4">
              <strong>The only question is: How fast do you want to get there?</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/20 p-4 rounded-xl">
                <p className="font-semibold mb-2">DIY Approach</p>
                <p className="text-3xl font-bold">60-90 days</p>
                <p className="text-sm opacity-80">to first contractor</p>
              </div>
              <div className="bg-white/30 p-4 rounded-xl border-2 border-white">
                <p className="font-semibold mb-2">With FastStart Kit</p>
                <p className="text-3xl font-bold">14 days</p>
                <p className="text-sm opacity-80">average time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Options */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800">
            Your Two Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-500">Option 1: Do It Yourself</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Spend weeks testing what works</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Write emails from scratch</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Figure out the &quot;right&quot; way to approach contractors</li>
                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Learn from trial and error</li>
              </ul>
              <div className="bg-red-100 p-4 rounded-xl">
                <p className="font-semibold text-red-600">
                  Time to first contractor:<br/>
                  <span className="text-2xl">60-90 days</span> (if ever)
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-2xl border-2 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Option 2: FastStart Kit</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> Start recruiting today with proven templates</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> Send emails that actually get responses</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> Know exactly what to say in every conversation</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> Follow a system that&apos;s already worked</li>
              </ul>
              <div className="bg-green-500/20 p-4 rounded-xl border border-green-500">
                <p className="font-semibold text-green-400">
                  Time to first contractor:<br/>
                  <span className="text-2xl text-white">14 days</span> average
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            30-Day &quot;First Contractor&quot; Guarantee
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <p className="text-lg mb-6 text-slate-700">
              Here&apos;s my promise:
            </p>
            <p className="text-xl mb-6 text-slate-800 font-semibold">
              Use the FastStart Kit for 30 days. Follow the system. Send the emails. Have the conversations.
            </p>
            <div className="bg-orange-100 p-6 rounded-xl mb-6">
              <p className="text-lg text-slate-700">
                If you don&apos;t sign at least <strong className="text-orange-600 text-xl">one contractor</strong> in 30 days, I&apos;ll refund every penny.
              </p>
            </div>
            <p className="text-gray-600">
              No hoops. No &quot;prove you tried.&quot; Just email me and I&apos;ll send your $37 back.
            </p>
          </div>
          <p className="text-lg text-slate-700">
            <strong>Why can I offer this?</strong>
          </p>
          <p className="text-lg text-slate-600">
            Because when you use these templates, signing your first contractor isn&apos;t a matter of &quot;if&quot;—it&apos;s a matter of &quot;when.&quot;
          </p>
        </div>
      </section>

      {/* Final CTA - Clean Style */}
      <section id="offer" className="py-16 px-4 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Limited Launch Price
          </h2>
          <p className="text-lg mb-4 opacity-90">
            The FastStart Kit will eventually sell for <strong>$67</strong>.
          </p>
          <p className="text-base mb-6 opacity-90">
            But during this initial launch:
          </p>
          <div className="bg-white text-gray-900 p-6 rounded-2xl mb-6 inline-block shadow-lg">
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-1">$37</div>
            <p className="text-gray-600">One-time payment</p>
          </div>
          <p className="text-base mb-6">
            <strong>Less than the commission from 2 contractors.</strong>
          </p>
          <p className="text-base mb-8 opacity-90">
            Those 2 contractors will pay you $40-80/month... <strong>every month.</strong>
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all mb-4"
          >
            Get The FastStart Kit — $37
          </a>
          <div className="flex justify-center space-x-4 text-sm">
            <span>🔒 Secure checkout</span>
            <span>💾 Instant download</span>
            <span>🛡️ 30-day guarantee</span>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800">
            What Happens Next
          </h2>
          <div className="space-y-4">
            <div className="flex items-center bg-white p-5 rounded-xl shadow-sm">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-5 flex-shrink-0 font-bold">1</span>
              <span className="text-slate-700">Click the button and complete your purchase</span>
            </div>
            <div className="flex items-center bg-white p-5 rounded-xl shadow-sm">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-5 flex-shrink-0 font-bold">2</span>
              <span className="text-slate-700">Get instant access to all templates, scripts, and the video</span>
            </div>
            <div className="flex items-center bg-white p-5 rounded-xl shadow-sm">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-5 flex-shrink-0 font-bold">3</span>
              <span className="text-slate-700">Download the 30-Day Roadmap and start Day 1 today</span>
            </div>
            <div className="flex items-center bg-white p-5 rounded-xl shadow-sm">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-5 flex-shrink-0 font-bold">4</span>
              <span className="text-slate-700">Send your first email using the swipe file (takes 5 minutes)</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-xl shadow-lg">
              <span className="bg-white text-green-600 rounded-full w-10 h-10 flex items-center justify-center mr-5 flex-shrink-0 font-bold">5</span>
              <span className="font-semibold">Watch your first contractor signup within 14 days!</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-800">
            Questions You Might Have
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-slate-800">Will this work with my ProBiz membership level?</h3>
              <p className="text-gray-600">Yes. Whether you&apos;re on the $99 Founders plan or the $199 Full Member plan, these templates work the same way.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-slate-800">Do I need any special software?</h3>
              <p className="text-gray-600">Nope. Everything works with free tools: Gmail, Google Sheets, and Canva (free version).</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-slate-800">What if I&apos;m not good at sales?</h3>
              <p className="text-gray-600">Perfect. These templates are designed for people who &quot;aren&apos;t salespeople.&quot; They&apos;re conversational, helpful, and non-pushy.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-slate-800">How fast will I get access?</h3>
              <p className="text-gray-600">Instant. As soon as you complete checkout, you&apos;ll get a download link with all files.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-slate-800">What&apos;s your refund policy?</h3>
              <p className="text-gray-600">30-day guarantee. Use the kit for 30 days. If you don&apos;t sign at least one contractor, I&apos;ll refund every penny.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA 2 - Clean Style */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Window Is Open (For Now)
          </h2>
          <p className="text-lg mb-4 text-gray-400">
            Every day you wait is a day you&apos;re not earning.
          </p>
          <p className="text-lg mb-4 text-gray-400">
            The contractors you could have recruited today are still out there... but someone else might get to them first.
          </p>
          <p className="text-xl mb-4 text-orange-400 font-semibold">
            The FastStart Kit gives you the system to move fast.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            But only if you actually use it.
          </p>
          <a 
            href="#" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all mb-4"
          >
            Get The FastStart Kit — $37
          </a>
          <p className="text-sm text-gray-500">
            Price increases to $67 soon
          </p>
        </div>
      </section>

      {/* Footer - Clean Style */}
      <footer className="py-6 px-4 bg-gray-950 text-gray-500 text-center text-sm">
        <p>© 2026 ProBiz FastStart Kit. All rights reserved.</p>
        <p className="mt-1">Questions? Email support@probizfaststart.com</p>
      </footer>
    </main>
  )
}
