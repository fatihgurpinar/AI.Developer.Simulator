import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

export const AIIntegration: React.FC<Props> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIntegration = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">3. Yapay Zekayı Ekle</h2>
      <button
        onClick={handleIntegration}
        disabled={isLoading}
        className="w-full p-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-xl hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            <span>Yapay Zeka Entegre Ediliyor...</span>
          </>
        ) : (
          <>
            <Sparkles />
            <span>Yapay Zekayı Ekle!</span>
          </>
        )}
      </button>
    </div>
  );
};