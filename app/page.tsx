export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-bold">
        ⚠️ ATTENTION: This is a limited time launch price. Price increases to $67 soon.
      </div>

      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tight">
            ProBiz FastStart Kit
          </h1>
          <p className="text-yellow-400 text-lg md:text-xl font-bold">
            The Exact System I Used To Recruit 12 Contractors In 6 Months
          </p>
        </div>
      </header>

      {/* Main Headline Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-red-600 mb-6 uppercase leading-tight">
            "Discover The Simple Copy-And-Paste System That Gets Contractors To Sign Up In As Little As 14 Days..."
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
            (Even If You've Never Recruited Anyone Before And Hate Selling)
          </p>
          
          {/* Video Placeholder Box */}
          <div className="bg-black rounded-lg overflow-hidden mb-8 max-w-3xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-white text-lg font-bold">Watch This Short Video</p>
                <p className="text-gray-400 text-sm">(Then claim your copy below)</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="#order" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-2xl md:text-3xl py-6 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition-all border-4 border-yellow-400"
          >
            YES! Give Me The FastStart Kit »
          </a>
          <p className="text-gray-500 mt-4 text-sm">
            🔒 Secure Checkout • Instant Download • 30-Day Guarantee
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center uppercase">
            Does This Sound Familiar?
          </h3>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="text-lg text-gray-800 mb-4">
              You joined ProBiz excited about the opportunity to build recurring income from home...
            </p>
            <p className="text-lg text-gray-800 mb-4">
              You see the dashboard, you understand the concept, but when it's time to actually <strong>recruit your first contractor</strong>...
            </p>
            <p className="text-2xl font-black text-red-600 text-center">
              YOU FREEZE.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-start bg-red-50 p-4 rounded">
              <span className="text-red-600 font-bold mr-3 text-xl">✗</span>
              <p className="text-gray-700">You don't know what to say to contractors</p>
            </div>
            <div className="flex items-start bg-red-50 p-4 rounded">
              <span className="text-red-600 font-bold mr-3 text-xl">✗</span>
              <p className="text-gray-700">You feel salesy, pushy, and desperate</p>
            </div>
            <div className="flex items-start bg-red-50 p-4 rounded">
              <span className="text-red-600 font-bold mr-3 text-xl">✗</span>
              <p className="text-gray-700">You send a few emails, get no responses, and give up</p>
            </div>
            <div className="flex items-start bg-red-50 p-4 rounded">
              <span className="text-red-600 font-bold mr-3 text-xl">✗</span>
              <p className="text-gray-700">Weeks go by and you still haven't recruited anyone</p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">
              Meanwhile, the top 10% of ProBiz members are collecting $200, $500, even $1,000+ per month in passive income...
            </p>
            <p className="text-yellow-400 text-lg">
              While you're still "getting organized."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-green-700 mb-6 text-center uppercase">
            Here's The Good News...
          </h3>
          
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              I studied the top ProBiz members - the ones recruiting 3, 5, even 10 contractors in their first month.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>They weren't smarter.</strong> They didn't have special connections. They weren't "natural salespeople."
            </p>
            <p className="text-2xl font-black text-center text-green-600 mb-4">
              They simply had a SYSTEM.
            </p>
            <p className="text-lg text-gray-700">
              While everyone else was figuring it out from scratch, they were <strong>copying and pasting proven templates</strong> that already worked.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 text-center uppercase">
            Introducing: The ProBiz FastStart Kit
          </h3>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Everything you need to recruit your first contractor in the next 14 days...
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Item 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
              <div className="text-4xl mb-3">📧</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">10 Email Templates</h4>
              <p className="text-gray-700 text-sm mb-3">
                Copy-and-paste emails that get contractors to actually respond. Includes cold outreach, follow-ups, and subject lines that get opened.
              </p>
              <p className="text-green-600 font-bold text-sm">✓ Just customize and send</p>
            </div>

            {/* Item 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Conversation Script</h4>
              <p className="text-gray-700 text-sm mb-3">
                Word-for-word what to say when contractors call you back. Handle every objection without being pushy.
              </p>
              <p className="text-green-600 font-bold text-sm">✓ Know exactly what to say</p>
            </div>

            {/* Item 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Social Media Pack</h4>
              <p className="text-gray-700 text-sm mb-3">
                20 done-for-you posts to attract contractors on Facebook and Instagram. Includes graphics and hashtags.
              </p>
              <p className="text-green-600 font-bold text-sm">✓ Copy, paste, and post</p>
            </div>

            {/* Item 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Contractor Tracker</h4>
              <p className="text-gray-700 text-sm mb-3">
                Google Sheets template to track every prospect. Never lose a lead in your inbox again.
              </p>
              <p className="text-green-600 font-bold text-sm">✓ Stay organized and follow up</p>
            </div>

            {/* Item 5 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-200">
              <div className="text-4xl mb-3">📖</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">30-Day Roadmap</h4>
              <p className="text-gray-700 text-sm mb-3">
                Day-by-day action plan. Know exactly what to do each day for your first month. No guessing.
              </p>
              <p className="text-green-600 font-bold text-sm">✓ Follow the plan, get results</p>
            </div>

            {/* Item 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border-2 border-teal-200">
              <div className="text-4xl mb-3">🎥</div>
              <h4 className="text-xl font-black text-gray-900 mb-2">Video Walkthrough</h4>
              <p className="text-gray-700 text-sm mb-3">
                10-minute video showing exactly how to use every template. Watch once, then get to work.
              </p>
              <p className="text-green-600 font-bold text-sm">✓ See it in action</p>
            </div>
          </div>

          {/* Value Stack */}
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-black text-center mb-4">Total Value: $297</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Email Templates ($67 value)</span>
                <span className="line-through text-gray-500">$67</span>
              </div>
              <div className="flex justify-between">
                <span>Conversation Script ($47 value)</span>
                <span className="line-through text-gray-500">$47</span>
              </div>
              <div className="flex justify-between">
                <span>Social Media Pack ($37 value)</span>
                <span className="line-through text-gray-500">$37</span>
              </div>
              <div className="flex justify-between">
                <span>Contractor Tracker ($27 value)</span>
                <span className="line-through text-gray-500">$27</span>
              </div>
              <div className="flex justify-between">
                <span>30-Day Roadmap ($67 value)</span>
                <span className="line-through text-gray-500">$67</span>
              </div>
              <div className="flex justify-between">
                <span>Video Walkthrough ($52 value)</span>
                <span className="line-through text-gray-500">$52</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Value:</span>
                  <span className="line-through text-gray-500">$297</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-yellow-400">
            <div className="text-6xl text-yellow-400 mb-4">"</div>
            <p className="text-xl text-gray-800 mb-6 italic">
              I used the first email template and got a reply in 2 hours. Used the script on the call and signed my first contractor that week. I was shocked it was that easy. Now I have 7 contractors and make $280/month in passive income!
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-gray-900">Sarah M.</p>
                <p className="text-gray-600 text-sm">ProBiz Member - 7 Contractors Signed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Works For */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center uppercase">
            This Works Even If...
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-red-50 p-4 rounded flex items-center">
              <span className="text-red-600 text-2xl mr-3">✗</span>
              <span className="text-gray-700">You've never recruited anyone</span>
            </div>
            <div className="bg-red-50 p-4 rounded flex items-center">
              <span className="text-red-600 text-2xl mr-3">✗</span>
              <span className="text-gray-700">You don't have a big network</span>
            </div>
            <div className="bg-red-50 p-4 rounded flex items-center">
              <span className="text-red-600 text-2xl mr-3">✗</span>
              <span className="text-gray-700">You're "not a salesperson"</span>
            </div>
            <div className="bg-red-50 p-4 rounded flex items-center">
              <span className="text-red-600 text-2xl mr-3">✗</span>
              <span className="text-gray-700">You've failed before</span>
            </div>
            <div className="bg-red-50 p-4 rounded flex items-center md:col-span-2">
              <span className="text-red-600 text-2xl mr-3">✗</span>
              <span className="text-gray-700">You only have 30 minutes a day</span>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-lg text-center">
            <p className="text-xl text-gray-800">
              <strong>It's not about being pushy.</strong><br />
              <span className="text-green-700 font-bold text-2xl">It's about having the right words at the right time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase">
              30-Day "First Contractor" Guarantee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Use the FastStart Kit for 30 days. Follow the system. Send the emails. Have the conversations.
            </p>
            <div className="bg-green-500 text-white p-6 rounded-lg mb-6">
              <p className="text-xl font-bold mb-2">
                If you don't sign at least ONE contractor in 30 days...
              </p>
              <p className="text-3xl font-black">
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
      <section id="order" className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 font-bold mb-2 uppercase tracking-wide">Limited Time Launch Price</p>
          <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase">
            Get The Complete FastStart Kit
          </h3>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl inline-block mb-8 max-w-md w-full">
            <p className="text-gray-500 mb-2">Regular Price: <span className="line-through text-red-500 font-bold">$67</span></p>
            <p className="text-green-600 font-bold mb-2">Today's Price:</p>
            <div className="text-6xl font-black text-green-600 mb-2">$37</div>
            <p className="text-gray-500 text-sm mb-6">One-time payment. No monthly fees.</p>
            
            <a 
              href="#" 
              className="block bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-5 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-all border-4 border-yellow-400 mb-4"
            >
              YES! Give Me Instant Access »
            </a>
            
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <span>🔒 Secure Checkout</span>
              <span>⚡ Instant Download</span>
              <span>🛡️ 30-Day Guarantee</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-yellow-400 font-bold mb-4">⚠️ WARNING: This Is A Limited Time Offer</p>
            <p className="text-gray-300 mb-4">
              The FastStart Kit will be selling for $67 after this launch period. Don't miss your chance to get it for just $37.
            </p>
            <p className="text-white font-bold">
              Click the button above to get started now.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center uppercase">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Will this work with my ProBiz membership level?</h4>
              <p className="text-gray-700">Yes! Whether you're on the $99 Founders plan or the $199 Full Member plan, these templates work exactly the same way.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Do I need any special software?</h4>
              <p className="text-gray-700">Nope! Everything works with free tools: Gmail, Google Sheets, and Canva (free version).</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">What if I'm not good at sales?</h4>
              <p className="text-gray-700">Perfect! These templates are designed for people who "aren't salespeople." They're conversational, helpful, and non-pushy.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">How fast will I get access?</h4>
              <p className="text-gray-700">Instant! As soon as you complete checkout, you'll get a download link with all files.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase">
            Don't Wait. Start Recruiting Today.
          </h3>
          <p className="text-white/90 text-lg mb-8">
            Every day you wait is a day you're not earning. Get the system that works and recruit your first contractor in the next 14 days.
          </p>
          <a 
            href="#" 
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl py-5 px-10 rounded-lg shadow-xl transform hover:scale-105 transition-all"
          >
            Get The FastStart Kit — $37 »
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2026 ProBiz FastStart Kit. All Rights Reserved.</p>
        <p className="mt-2">This site is not a part of the ProBiz website or ProBiz Inc.</p>
        <p className="mt-1">Questions? Contact: support@probizfaststart.com</p>
      </footer>
    </main>
  )
}