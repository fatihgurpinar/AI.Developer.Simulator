import React from 'react';
import { themes } from '../data/mockData';

interface Props {
  selectedTheme: string;
  onSelect: (id: string) => void;
}

export const ThemeSelector: React.FC<Props> = ({ selectedTheme, onSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">2. Tema Rengini Seç</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelect(theme.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedTheme === theme.id
                ? 'border-blue-500'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className={`w-full h-20 rounded-md ${theme.primary} mb-2`} />
            <p className="font-medium">{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};