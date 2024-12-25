import React from 'react';
import { Trophy, Share2 } from 'lucide-react';

interface Props {
  onShare: () => void;
  onRestart: () => void;
}

export const SuccessMessage: React.FC<Props> = ({ onShare, onRestart }) => {
  return (
    <div className="text-center space-y-6">
      <Trophy className="w-20 h-20 text-yellow-500 mx-auto" />
      <h1 className="text-3xl font-bold text-gray-800">
        Tebrikler! Dünyayı Değiştirecek Bir Uygulama Geliştirdin! 🎉
      </h1>
      <p className="text-gray-600 text-lg">
        Sadece birkaç tıklama ile geleceğin uygulamasını yarattın!
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={onShare}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
        >
          <Share2 className="w-5 h-5" />
          <span>Başarını Paylaş</span>
        </button>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Yeni Uygulama Yap
        </button>
      </div>
    </div>
  );
};