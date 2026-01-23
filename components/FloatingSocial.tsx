
import React from 'react';
import { ICONS } from '../constants';

const FloatingSocial: React.FC = () => {
  const actions = [
    { icon: <ICONS.WhatsApp className="w-5 h-5" />, color: 'bg-[#25D366]', label: 'WhatsApp' },
    { icon: <ICONS.Instagram className="w-5 h-5" />, color: 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]', label: 'Instagram' },
    { icon: <ICONS.LinkedIn className="w-5 h-5" />, color: 'bg-[#0077b5]', label: 'LinkedIn' },
  ];

  return (
    <div className="fixed right-6 bottom-6 flex flex-col space-y-4 z-[100]">
      {actions.map((action, i) => (
        <button
          key={i}
          className={`${action.color} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center group`}
          aria-label={action.label}
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:pr-3 text-sm font-bold">
            {action.label}
          </span>
          {action.icon}
        </button>
      ))}
    </div>
  );
};

export default FloatingSocial;
