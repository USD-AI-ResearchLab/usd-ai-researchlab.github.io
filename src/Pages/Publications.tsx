import React from 'react';

interface Publication {
  title: string;
  description: string;
  paperUrl?: string;
  codeUrl?: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: "DeepWhaleNet: Climate Change‑aware FFT‑based Deep Neural Network for Passive Acoustic Monitoring",
      description: "FFT‑based DNN for passive acoustic whale‑call detection with climate‑aware considerations; built for UPAM workflows.",
      paperUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Non‑Uniform Illumination Attack for Fooling Convolutional Neural Networks",
      description: "NUI masks degrade CNNs; simple defense via NUI‑augmented training across CIFAR‑10, TinyImageNet, Caltech‑256.",
      paperUrl: "#",
      codeUrl: "#"
    },
    {
      title: "SegFast‑V2: Semantic image segmentation with fewer parameters",
      description: "Compact encoder‑decoder with kernel factorization & depthwise deconvs; CPU‑friendly yet competitive.",
      paperUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Publications</h1>
        <p className="text-gray-600 mb-12">Research papers and publications from the USD AI Research Lab</p>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                {publication.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {publication.description}
              </p>
              <div className="flex gap-4">
                {publication.paperUrl && (
                  <a
                    href={publication.paperUrl}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Paper
                  </a>
                )}
                {publication.codeUrl && (
                  <a
                    href={publication.codeUrl}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            For more publications, visit our research portal at{' '}
            <a 
              href="https://www.ai-research-lab.org/publication" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ai-research-lab.org/publication
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publications;
