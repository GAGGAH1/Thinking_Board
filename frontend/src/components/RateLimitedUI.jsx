import { ZapIcon } from 'lucide-react'


const RateLimitedUI = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-base-300 shadow-md rounded-lg p-6 text-primary text-center">
        <ZapIcon className="size-12 mx-auto text-primary" />
        <h1 className="text-2xl font-bold mb-4">Rate Limit Exceeded</h1>
        <p className="text-gray-700 mb-4">
          You have exceeded the allowed number of requests. Please try again later.
        </p>
        <p className="text-gray-500 text-sm">
          If you believe this is an error, please contact support.
        </p>
      </div>
      
    </div>
  )
}

export default RateLimitedUI
