
interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, imageUrl }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-32 h-32 object-cover rounded-lg shadow-md mb-4"
      />
      <h3 className="font-bold text-lg text-taxmagnet-darkblue">{name}</h3>
      <p className="text-taxmagnet-blue">{role}</p>
    </div>
  );
};

export default TeamMember;
