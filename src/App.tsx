import React, { useState } from 'react';
import { AppTypeSelector } from './components/AppTypeSelector';
import { ThemeSelector } from './components/ThemeSelector';
import { AIIntegration } from './components/AIIntegration';
import { SuccessMessage } from './components/SuccessMessage';
import { Sparkles } from 'lucide-react';

function App() {
  const [step, setStep] = useState(1);
  const [selectedApp, setSelectedApp] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleComplete = () => {
    setStep(4);
  };

  const handleShare = () => {
    const text = `🚀 Yeni bir yapay zeka uygulaması geliştirdim! 2 saatte bitti ama 2 yıl konuşulacak! #AIdev #Innovation`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
  };

  const handleRestart = () => {
    setStep(1);
    setSelectedApp('');
    setSelectedTheme('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">
              AI Developer Simulator
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {step < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-600">İlerleme</h2>
                <div className="text-sm text-gray-500">{step}/3</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2 transition-all"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="space-y-8">
            {step === 1 && (
              <AppTypeSelector
                selectedApp={selectedApp}
                onSelect={(id) => {
                  setSelectedApp(id);
                  setStep(2);
                }}
              />
            )}
            {step === 2 && (
              <ThemeSelector
                selectedTheme={selectedTheme}
                onSelect={(id) => {
                  setSelectedTheme(id);
                  setStep(3);
                }}
              />
            )}
            {step === 3 && <AIIntegration onComplete={handleComplete} />}
            {step === 4 && (
              <SuccessMessage onShare={handleShare} onRestart={handleRestart} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;