
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const About = () => {
  useEffect(() => {
    document.title = "TaxMagnet | About Us";
  }, []);
  
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Tax Director",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Michael Brown",
      role: "Business Advisor",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Emily Davis",
      role: "Financial Planner",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold text-taxmagnet-darkblue mb-6">About TaxMagnet</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our mission is to provide exceptional tax and business advisory services that empower our clients to make confident financial decisions.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper>
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="TaxMagnet office" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper>
              <h2 className="text-3xl font-bold mb-6 text-taxmagnet-darkblue">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, TaxMagnet began with a simple vision: to make expert tax and business advisory services accessible to individuals and businesses of all sizes.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, John Smith, recognized that many people struggled with complex tax regulations and business decisions without proper guidance. He assembled a team of experienced professionals dedicated to providing clear, actionable advice.
              </p>
              <p className="text-gray-700">
                Over the years, we've grown from a small consultancy to a trusted advisor for hundreds of clients nationwide. Despite our growth, we maintain a personalized approach, ensuring that each client receives the attention and expertise they deserve.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-taxmagnet-gray">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-12 text-taxmagnet-darkblue">Our Values</h2>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimationWrapper className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-taxmagnet-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-taxmagnet-darkblue">Integrity</h3>
              <p className="text-gray-700">
                We adhere to the highest ethical standards in all our dealings. Honesty and transparency are the foundation of our client relationships.
              </p>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-taxmagnet-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-taxmagnet-darkblue">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do. Our team continuously improves their skills and knowledge to deliver the best possible service.
              </p>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-taxmagnet-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-taxmagnet-darkblue">Client Focus</h3>
              <p className="text-gray-700">
                Our clients are at the center of everything we do. We listen carefully to their needs and provide personalized solutions that help them achieve their goals.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-12 text-taxmagnet-darkblue">Meet Our Team</h2>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimationWrapper key={index}>
                <TeamMember 
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <blockquote className="text-center">
              <svg className="h-12 w-12 text-taxmagnet-blue mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                "TaxMagnet has been an invaluable partner for our business. Their strategic tax planning has saved us thousands of dollars, and their business advice has helped us grow consistently year after year."
              </p>
              <footer className="text-taxmagnet-darkblue font-bold">
                Robert Johnson, CEO of Johnson Enterprises
              </footer>
            </blockquote>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-taxmagnet-gray">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-6 text-taxmagnet-darkblue">Join Our Satisfied Clients</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience the TaxMagnet difference. Contact us today to schedule your discovery call.
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

export default About;
