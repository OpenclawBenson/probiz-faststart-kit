export default function CancelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Cancel Icon */}
        <div className="text-8xl mb-6">😕</div>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          No worries! Your payment was cancelled and no charges were made.
        </p>
        
        {/* Info Box */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changed Your Mind?</h2>
          <p className="text-gray-700 mb-6">
            The ProBiz FastStart Kit is still available for just $37. Don't miss out on the system that helps you recruit your first contractor in 14 days!
          </p>
          
          <a 
            href="/#order" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-xl py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Complete Your Purchase →
          </a>
        </div>
        
        {/* Questions */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <p className="text-gray-700 mb-2">Have questions about the FastStart Kit?</p>
          <p className="text-gray-600">
            Contact us at: <a href="mailto:support@probizfaststart.com" className="text-blue-600 font-semibold hover:underline">support@probizfaststart.com</a>
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
