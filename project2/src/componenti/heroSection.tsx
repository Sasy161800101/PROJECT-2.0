export function HeroSection(){
    return(
         <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
  <div className="container mx-auto px-4 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl">
            Discover Amazing Products
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Shop the latest trends and premium quality products at unbeatable prices.
            Your perfect purchase is just a click away.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#"
             className="group inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-white text-lg font-medium transition-transform hover:bg-teal-700">
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

          <a href="#"
             className="inline-flex items-center justify-center rounded-md border border-teal-600 px-6 py-3 text-lg font-medium text-teal-600 hover:bg-teal-50">
            Explore Categories
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    )


 }
