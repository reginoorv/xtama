
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const DiscoveryCallForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your discovery call has been scheduled. We'll be in touch soon!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-taxmagnet-darkblue">
        Schedule Your Discovery Call
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-taxmagnet-blue focus:border-transparent transition-all"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-taxmagnet-blue hover:bg-taxmagnet-darkblue text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-taxmagnet-lightblue focus:ring-opacity-50 disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Schedule Call'}
        </button>
      </form>
    </div>
  );
};

export default DiscoveryCallForm;
