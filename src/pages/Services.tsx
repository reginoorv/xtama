
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const Services = () => {
  useEffect(() => {
    document.title = "TaxMagnet | Services";
  }, []);
  
  const services = [
    {
      title: "Tax Planning",
      description: "Strategic planning to minimize tax liabilities and maximize returns.",
      detailedDescription: "Our comprehensive tax planning services help you legally minimize your tax burden while ensuring compliance with all regulations. We analyze your financial situation to identify opportunities for tax savings and implement strategies tailored to your specific needs.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Business Advisory",
      description: "Expert guidance for business growth and optimization.",
      detailedDescription: "Our business advisory services provide strategic guidance to help your business thrive. We analyze your operations, identify areas for improvement, and develop actionable plans to boost profitability and efficiency.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Financial Planning",
      description: "Comprehensive planning for your financial future.",
      detailedDescription: "We create personalized financial plans that align with your goals and priorities. From retirement planning to investment strategies, we help you make informed decisions that secure your financial future.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Tax Compliance",
      description: "Ensuring your taxes are filed accurately and on time.",
      detailedDescription: "Our tax compliance services ensure that all your tax filings are accurate, complete, and submitted on time. We stay up-to-date with changing tax laws to keep you in full compliance and avoid penalties.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Retirement Planning",
      description: "Securing your financial future post-retirement.",
      detailedDescription: "Our retirement planning services help you prepare for a financially secure future. We assess your current situation, define your retirement goals, and create strategies to help you achieve the retirement lifestyle you desire.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Estate Planning",
      description: "Planning for the transfer of your wealth and assets.",
      detailedDescription: "Our estate planning services help you protect your assets and ensure they are distributed according to your wishes. We work with you to develop a comprehensive plan that minimizes taxes and provides for your loved ones.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: "Business Formation",
      description: "Guidance on selecting and forming the right business entity.",
      detailedDescription: "We help you choose and establish the most advantageous business structure for your needs. From sole proprietorships to corporations, we guide you through the formation process and ensure compliance with all legal requirements.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "IRS Representation",
      description: "Professional representation in dealings with tax authorities.",
      detailedDescription: "We provide expert representation before the IRS and other tax authorities. Whether you're facing an audit or have tax disputes, we'll advocate on your behalf and work to resolve issues efficiently and favorably.",
      icon: (
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold text-taxmagnet-darkblue mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive tax and business advisory services tailored to your unique needs.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={index} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  detailedDescription={service.detailedDescription}
                  icon={service.icon}
                />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-taxmagnet-gray py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-taxmagnet-darkblue">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our services can help you achieve your financial and business goals.
            </p>
            <a 
              href="/#discovery" 
              className="inline-block bg-taxmagnet-blue hover:bg-taxmagnet-darkblue text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:scale-105 text-lg"
            >
              Schedule a Discovery Call
            </a>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
