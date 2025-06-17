import phoneImage from '../../src/assets/images.jpg'

const Hero = () => {
  return (
<>
 <section className="bg-white">
          <header className="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
        <div className="text-blue-600 text-xl font-bold">Appy</div>
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Business Solutions</a>
          <a href="#" className="hover:text-blue-600">Help Center</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
        </nav>
        <div className="flex gap-4">
          <button className="text-blue-600 hover:underline">Log In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Building apps just<br /> got easier
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in.
          </p>
          <div className="flex gap-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
              Get Started
            </button>
            <button className="text-blue-600 font-medium hover:underline">
              ▶ Watch Video
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={phoneImage} alt="Mobile App Preview" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
    </section>
</>
   
  );
};

export default Hero;
