export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="text-8xl mb-6">🎉</div>
        
        <h1 className="text-4xl md:text-5xl font-black text-green-600 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Thank you for your purchase! Your ProBiz FastStart Kit is ready.
        </p>
        
        {/* Order Details Box */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next:</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <span className="text-2xl mr-3">📧</span>
              <div>
                <p className="font-semibold text-gray-800">Check Your Email</p>
                <p className="text-gray-600">We've sent your download link to your email address.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📥</span>
              <div>
                <p className="font-semibold text-gray-800">Download Your Kit</p>
                <p className="text-gray-600">Click the link in your email to access all files instantly.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🚀</span>
              <div>
                <p className="font-semibold text-gray-800">Start Recruiting!</p>
                <p className="text-gray-600">Follow the 30-Day Roadmap and recruit your first contractor.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Support */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <p className="text-gray-700 mb-2">Questions or issues?</p>
          <p className="text-gray-600">
            Email us at: <a href="mailto:support@probizfaststart.com" className="text-blue-600 font-semibold hover:underline">support@probizfaststart.com</a>
          </p>
        </div>
        
        {/* Back to Home */}
        <div className="mt-8">
          <a 
            href="/" 
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
