
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiscoveryCallForm from '@/components/DiscoveryCallForm';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const Index = () => {
  useEffect(() => {
    document.title = "TaxMagnet | Home";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-taxmagnet-darkblue mb-6 leading-tight">
                Welcome to TaxMagnet
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Helping you navigate tax and business decisions with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#services" 
                  className="bg-taxmagnet-blue hover:bg-taxmagnet-darkblue text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105"
                >
                  Our Services
                </a>
                <a 
                  href="#discovery" 
                  className="bg-white hover:bg-gray-100 text-taxmagnet-darkblue font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 border border-taxmagnet-blue"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tax and business advisory services" 
                className="rounded-lg shadow-xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-taxmagnet-darkblue">
              Why Choose TaxMagnet
            </h2>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ScrollAnimationWrapper className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-taxmagnet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-taxmagnet-darkblue">Expert Advisors</h3>
                <p className="text-gray-600">Our team consists of certified professionals with years of experience in tax and business advisory services.</p>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-taxmagnet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-taxmagnet-darkblue">Timely Solutions</h3>
                <p className="text-gray-600">We understand the importance of deadlines and deliver our services promptly without compromising quality.</p>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-taxmagnet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-taxmagnet-darkblue">Personalized Approach</h3>
                <p className="text-gray-600">We customize our services to meet your unique needs, ensuring the best possible outcomes for your specific situation.</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section id="services" className="py-16 md:py-24 bg-taxmagnet-gray">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-taxmagnet-darkblue">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We offer a comprehensive range of tax and business advisory services to help you achieve your financial goals.
            </p>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <ScrollAnimationWrapper key={i}>
                <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <svg className="h-6 w-6 text-taxmagnet-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-taxmagnet-darkblue">Tax Planning</h3>
                  <p className="text-gray-600 text-center">Strategic tax planning to minimize liabilities and maximize returns.</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="/services" 
              className="inline-block bg-taxmagnet-blue hover:bg-taxmagnet-darkblue text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-taxmagnet-darkblue">
              What Our Clients Say
            </h2>
          </ScrollAnimationWrapper>
          
          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "TaxMagnet provided exceptional guidance during a complex business restructuring. Their expertise saved us money and positioned our company for future growth. I highly recommend their services to any business owner."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-taxmagnet-gray overflow-hidden mr-4">
                    <div className="h-full w-full bg-taxmagnet-blue flex items-center justify-center text-white text-xl font-bold">
                      JD
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-taxmagnet-darkblue">Jane Doe</h4>
                    <p className="text-gray-600 text-sm">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
      
      {/* Call to Action / Contact Form */}
      <section id="discovery" className="py-16 md:py-24 bg-taxmagnet-gray">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-taxmagnet-darkblue">Ready to Get Started?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Schedule your discovery call today and let us help you navigate your tax and business challenges with confidence.
              </p>
              <ul className="space-y-4 mb-8">
                {['Personalized financial strategy', 'Tax optimization solutions', 'Business growth planning'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-taxmagnet-blue mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper>
              <DiscoveryCallForm />
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
