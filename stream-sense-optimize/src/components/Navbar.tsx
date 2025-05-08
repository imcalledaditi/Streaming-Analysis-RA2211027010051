
import React from 'react';
import { Home, BarChart3, Wifi, Heart, Settings, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-16 bg-stream-dark border-r border-white/10 flex flex-col items-center py-6 z-10">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stream-purple to-stream-violet flex items-center justify-center mb-6">
          <span className="text-white font-bold text-lg">SS</span>
        </div>
        
        <NavItem icon={<Home size={20} />} active />
        <NavItem icon={<BarChart3 size={20} />} />
        <NavItem icon={<Wifi size={20} />} />
        <NavItem icon={<Heart size={20} />} />
      </div>
      
      <div className="mt-auto flex flex-col gap-2 items-center">
        <NavItem icon={<Settings size={20} />} />
        <NavItem icon={<User size={20} />} />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active = false }) => {
  return (
    <button 
      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 
      ${active 
        ? 'text-white bg-stream-purple shadow-lg shadow-stream-purple/30' 
        : 'text-gray-400 hover:text-white hover:bg-white/10'}`
      }
    >
      {icon}
    </button>
  );
};

export default Navbar;
