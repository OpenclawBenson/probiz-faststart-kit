export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-center py-3 text-sm font-bold animate-pulse">
        ⚠️ ATTENTION: This is a limited time launch price. Price increases to $67 soon.
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-6 border-b-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-3 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            ProBiz FastStart Kit
          </h1>
          <p className="text-yellow-400 text-lg md:text-2xl font-bold">
            The Exact System I Used To Recruit 12 Contractors In 6 Months
          </p>
        </div>
      </header>

      {/* Main Headline Section */}
      <section className="bg-gradient-to-b from-gray-100 via-white to-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-100 border-2 border-red-400 rounded-full px-6 py-2 mb-6">
            <span className="text-red-700 font-bold text-sm">🎯 NEW: Complete Recruiting System for ProBiz Members</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 uppercase leading-tight drop-shadow-sm">
            "Discover The Simple Copy-And-Paste System That Gets Contractors To Sign Up In As Little As 14 Days..."
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 font-semibold">
            (Even If You've Never Recruited Anyone Before And Hate Selling)
          </p>
          
          {/* Product Image Box */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden mb-10 max-w-3xl mx-auto shadow-2xl border-4 border-yellow-400">
            <div className="aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="text-center relative z-10 p-8">
                <div className="text-8xl mb-4">📦</div>
                <p className="text-white text-2xl font-black mb-2">ProBiz FastStart Kit</p>
                <p className="text-yellow-300 text-lg font-bold">10 Emails • 1 Script • 20 Social Posts • 30-Day Roadmap</p>
                <div className="mt-4 inline-block bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                  <span className="text-white font-bold">📥 Instant Digital Download</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="#order" 
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-2xl md:text-3xl py-6 px-12 rounded-xl shadow-2xl transform hover:scale-105 transition-all border-4 border-yellow-400 animate-bounce"
          >
            YES! Give Me The FastStart Kit »
          </a>
          <p className="text-gray-500 mt-4 text-sm font-semibold">
            🔒 Secure Checkout • Instant Download • 30-Day Guarantee
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-bold text-gray-700 mb-4">THE PROBLEM</span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              Does This Sound Familiar?
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-8 border-yellow-400 p-8 mb-8 rounded-r-xl shadow-lg">
            <p className="text-lg text-gray-800 mb-4 text-lg">
              You joined ProBiz excited about the opportunity to build recurring income from home...
            </p>
            <p className="text-lg text-gray-800 mb-4">
              You see the dashboard, you understand the concept, but when it's time to actually <strong>recruit your first contractor</strong>...
            </p>
            <p className="text-3xl font-black text-red-600 text-center mt-6">
              YOU FREEZE. 😰
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mr-4">❌</span>
              <div>
                <p className="text-gray-800 font-bold">You don't know what to say to contractors</p>
                <p className="text-gray-600 text-sm mt-1">Staring at a blank email, typing and deleting...</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mr-4">❌</span>
              <div>
                <p className="text-gray-800 font-bold">You feel salesy, pushy, and desperate</p>
                <p className="text-gray-600 text-sm mt-1">Hating every minute of "selling"</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mr-4">❌</span>
              <div>
                <p className="text-gray-800 font-bold">You send a few emails, get no responses</p>
                <p className="text-gray-600 text-sm mt-1">Then you give up and feel defeated</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mr-4">❌</span>
              <div>
                <p className="text-gray-800 font-bold">Weeks go by with zero contractors</p>
                <p className="text-gray-600 text-sm mt-1">While your membership fee keeps charging</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl text-center shadow-xl">
            <p className="text-xl font-bold mb-3">
              Meanwhile, the top 10% of ProBiz members are collecting <span className="text-yellow-400">$200, $500, even $1,000+</span> per month in passive income...
            </p>
            <p className="text-yellow-400 text-xl font-black">
              While you're still "getting organized."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-200 rounded-full px-4 py-1 text-sm font-bold text-green-800 mb-4">THE SOLUTION</span>
            <h3 className="text-3xl md:text-4xl font-black text-green-700 uppercase">
              Here's The Good News...
            </h3>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mr-4">💡</div>
              <p className="text-xl text-gray-700">
                I studied the top ProBiz members - the ones recruiting <strong>3, 5, even 10 contractors</strong> in their first month.
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              <strong>They weren't smarter.</strong> They didn't have special connections. They weren't "natural salespeople."
            </p>
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300 text-center">
              <p className="text-2xl font-black text-green-700">
                They simply had a SYSTEM.
              </p>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              While everyone else was figuring it out from scratch, they were <strong>copying and pasting proven templates</strong> that already worked.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-200 rounded-full px-4 py-1 text-sm font-bold text-blue-800 mb-4">WHAT YOU GET</span>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              Introducing: The ProBiz FastStart Kit
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to recruit your first contractor in the next 14 days...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Item 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">📧</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">10 Email Templates</h4>
              <p className="text-gray-700 text-sm mb-4">
                Copy-and-paste emails that get contractors to actually respond. Includes cold outreach, follow-ups, and subject lines that get opened.
              </p>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                ✓ Just customize and send
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Conversation Script</h4>
              <p className="text-gray-700 text-sm mb-4">
                Word-for-word what to say when contractors call you back. Handle every objection without being pushy.
              </p>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                ✓ Know exactly what to say
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">📱</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Social Media Pack</h4>
              <p className="text-gray-700 text-sm mb-4">
                20 done-for-you posts to attract contractors on Facebook and Instagram. Includes graphics and hashtags.
              </p>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                ✓ Copy, paste, and post
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Contractor Tracker</h4>
              <p className="text-gray-700 text-sm mb-4">
                Google Sheets template to track every prospect. Never lose a lead in your inbox again.
              </p>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                ✓ Stay organized and follow up
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border-2 border-red-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">📖</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">30-Day Roadmap</h4>
              <p className="text-gray-700 text-sm mb-4">
                Day-by-day action plan. Know exactly what to do each day for your first month. No guessing.
              </p>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                ✓ Follow the plan, get results
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border-2 border-teal-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">🎥</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Video Walkthrough</h4>
              <p className="text-gray-700 text-sm mb-4">
                10-minute video showing exactly how to use every template. Watch once, then get to work.
              </p>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                ✓ See it in action
              </div>
            </div>
          </div>

          {/* Value Stack */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl mb-10 border border-gray-300">
            <h4 className="text-2xl font-black text-center mb-6">Total Value: $297</h4>
            <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-700">Email Templates</span>
                <span className="line-through text-gray-500 font-bold">$67</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-700">Conversation Script</span>
                <span className="line-through text-gray-500 font-bold">$47</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-700">Social Media Pack</span>
                <span className="line-through text-gray-500 font-bold">$37</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-700">Contractor Tracker</span>
                <span className="line-through text-gray-500 font-bold">$27</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-700">30-Day Roadmap</span>
                <span className="line-through text-gray-500 font-bold">$67</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-700">Video Walkthrough</span>
                <span className="line-through text-gray-500 font-bold">$52</span>
              </div>
            </div>
            <div className="border-t-2 border-gray-400 pt-4 mt-4 text-center">
              <div className="text-2xl font-bold text-gray-600 line-through">$297 Total Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-yellow-400 relative">
            <div className="absolute -top-6 left-8 text-8xl text-yellow-300 font-serif">"</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-800 mb-8 italic leading-relaxed">
                I used the first email template and got a reply in 2 hours. Used the script on the call and signed my first contractor that week. I was shocked it was that easy. Now I have 7 contractors and make $280/month in passive income!
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mr-4 flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Sarah M.</p>
                  <p className="text-gray-600">ProBiz Member — 7 Contractors Signed</p>
                  <div className="flex text-yellow-400 text-xl mt-1">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Works For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              This Works Even If...
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-red-50 p-5 rounded-xl flex items-center border border-red-200">
              <span className="text-3xl mr-4">🚫</span>
              <span className="text-gray-700 font-semibold">You've never recruited anyone</span>
            </div>
            <div className="bg-red-50 p-5 rounded-xl flex items-center border border-red-200">
              <span className="text-3xl mr-4">🚫</span>
              <span className="text-gray-700 font-semibold">You don't have a big network</span>
            </div>
            <div className="bg-red-50 p-5 rounded-xl flex items-center border border-red-200">
              <span className="text-3xl mr-4">🚫</span>
              <span className="text-gray-700 font-semibold">You're "not a salesperson"</span>
            </div>
            <div className="bg-red-50 p-5 rounded-xl flex items-center border border-red-200">
              <span className="text-3xl mr-4">🚫</span>
              <span className="text-gray-700 font-semibold">You've failed before</span>
            </div>
            <div className="bg-red-50 p-5 rounded-xl flex items-center border border-red-200 md:col-span-2">
              <span className="text-3xl mr-4">🚫</span>
              <span className="text-gray-700 font-semibold">You only have 30 minutes a day</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl text-center border-2 border-green-300">
            <p className="text-xl text-gray-800 mb-2">
              <strong>It's not about being pushy.</strong>
            </p>
            <p className="text-green-700 font-black text-2xl">
              It's about having the right words at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 rounded-3xl shadow-2xl inline-block border-4 border-green-400">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase">
              30-Day "First Contractor" Guarantee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use the FastStart Kit for 30 days. Follow the system. Send the emails. Have the conversations.
            </p>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl mb-6">
              <p className="text-xl font-bold mb-2">
                If you don't sign at least ONE contractor in 30 days...
              </p>
              <p className="text-4xl font-black">
                I'll refund every penny.
              </p>
            </div>
            <p className="text-gray-600">
              No hoops. No "prove you tried." Just email me and I'll send your $37 back.
            </p>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
            ⚡ Limited Time Launch Price
          </div>
          <h3 className="text-4xl md:text-5xl font-black mb-8 uppercase">
            Get The Complete FastStart Kit
          </h3>
          
          <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl inline-block mb-8 max-w-md w-full border-4 border-yellow-400">
            <p className="text-gray-500 mb-2 text-lg">Regular Price: <span className="line-through text-red-500 font-bold text-2xl">$67</span></p>
            <p className="text-green-600 font-bold mb-2 text-xl">Today's Price:</p>
            <div className="text-7xl font-black text-green-600 mb-2">$37</div>
            <p className="text-gray-500 mb-8">One-time payment. No monthly fees.</p>
            
            <a 
              href="#" 
              className="block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-2xl py-5 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all border-4 border-yellow-400 mb-6"
            >
              YES! Give Me Instant Access »
            </a>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center">🔒 Secure Checkout</span>
              <span className="flex items-center">⚡ Instant Download</span>
              <span className="flex items-center">🛡️ 30-Day Guarantee</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl max-w-2xl mx-auto border border-gray-700">
            <p className="text-yellow-400 font-bold mb-4 text-xl">⚠️ WARNING: This Is A Limited Time Offer</p>
            <p className="text-gray-300 mb-4">
              The FastStart Kit will be selling for $67 after this launch period. Don't miss your chance to get it for just $37.
            </p>
            <p className="text-white font-bold text-lg">
              Click the button above to get started now.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center uppercase">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Will this work with my ProBiz membership level?</h4>
              <p className="text-gray-700">Yes! Whether you're on the $99 Founders plan or the $199 Full Member plan, these templates work exactly the same way.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Do I need any special software?</h4>
              <p className="text-gray-700">Nope! Everything works with free tools: Gmail, Google Sheets, and Canva (free version).</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">What if I'm not good at sales?</h4>
              <p className="text-gray-700">Perfect! These templates are designed for people who "aren't salespeople." They're conversational, helpful, and non-pushy.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">How fast will I get access?</h4>
              <p className="text-gray-700">Instant! As soon as you complete checkout, you'll get a download link with all files.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            Don't Wait. Start Recruiting Today.
          </h3>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Every day you wait is a day you're not earning. Get the system that works and recruit your first contractor in the next 14 days.
          </p>
          <a 
            href="#order" 
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl py-5 px-12 rounded-xl shadow-2xl transform hover:scale-105 transition-all border-4 border-white"
          >
            Get The FastStart Kit — $37 »
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold text-white mb-2">ProBiz FastStart Kit</p>
          <p className="text-sm mb-4">© 2026 All Rights Reserved.</p>
          <p className="text-xs text-gray-500">This site is not a part of the ProBiz website or ProBiz Inc.</p>
          <p className="text-xs text-gray-500 mt-2">Questions? Contact: support@probizfaststart.com</p>
        </div>
      </footer>
    </main>
  )
}
