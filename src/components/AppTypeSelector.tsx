import React from 'react';
import { appTypes } from '../data/mockData';

interface Props {
  selectedApp: string;
  onSelect: (id: string) => void;
}

export const AppTypeSelector: React.FC<Props> = ({ selectedApp, onSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">1. Uygulama Türünü Seç</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {appTypes.map((app) => (
          <button
            key={app.id}
            onClick={() => onSelect(app.id)}
            className={`p-6 rounded-lg border-2 transition-all ${
              selectedApp === app.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="text-4xl mb-2">{app.icon}</div>
            <h3 className="font-bold text-lg">{app.name}</h3>
            <p className="text-gray-600">{app.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};