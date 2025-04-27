
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

interface ServiceCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, detailedDescription, icon }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className={cn(
            "service-card p-6 rounded-xl h-full",
            "border border-gray-200/50",
            "flex flex-col items-center",
            isHovered ? "bg-blue-50/50" : ""
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-taxmagnet-blue mb-4 transform transition-transform duration-300 hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-center text-taxmagnet-darkblue">{title}</h3>
          <p className="text-gray-600 text-center animate-fade-in">{description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-white/90 backdrop-blur-sm p-4">
        <p className="text-sm text-gray-700">{detailedDescription}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServiceCard;
