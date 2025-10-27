import React from 'react';
import Footer from '../components/Footer';

interface Publication {
  title: string;
  description: string;
  paperUrl?: string;
  codeUrl?: string;
}

interface Book {
  title: string;
  authors: string;
  description: string;
  publisher?: string;
  year?: string;
  isbn?: string;
  amazonUrl?: string;
  publisherUrl?: string;
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

  const books: Book[] = [
    {
      title: "Introduction to Artificial Intelligence and Machine Learning",
      authors: "USD AI Research Lab Faculty",
      description: "A comprehensive guide to AI and ML fundamentals, covering neural networks, deep learning, and practical applications in research and industry.",
      publisher: "Academic Press",
      year: "2024",
      isbn: "978-0-123456-78-9",
      amazonUrl: "#",
      publisherUrl: "#"
    },
    {
      title: "Computer Vision and Image Processing: Modern Approaches",
      authors: "Dr. KC Santosh, Dr. Nand Yadav",
      description: "Advanced techniques in computer vision, image segmentation, and deep learning applications for medical imaging and autonomous systems.",
      publisher: "Springer",
      year: "2023",
      isbn: "978-3-031-12345-6",
      amazonUrl: "#",
      publisherUrl: "#"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-thin text-gray-800 mb-2">Publications</h1>
        <p className="text-gray-600 mb-12 font-thin">Research papers, books, and publications from the USD AI Research Lab</p>
        
        {/* Research Papers Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-thin text-gray-800 mb-8 flex items-center">
            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Research Papers
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-thin text-gray-800 mb-3 leading-tight">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-thin">
                  {publication.description}
                </p>
                <div className="flex gap-4">
                  {publication.paperUrl && (
                    <a
                      href={publication.paperUrl}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-thin"
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
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-thin"
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
        </div>

        {/* Books Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-thin text-gray-800 mb-8 flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Books
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-thin text-gray-800 mb-2 leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-thin">
                  by {book.authors}
                </p>
                {book.publisher && book.year && (
                  <p className="text-sm text-gray-500 mb-3 font-thin">
                    {book.publisher} • {book.year}
                    {book.isbn && ` • ISBN: ${book.isbn}`}
                  </p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed font-thin">
                  {book.description}
                </p>
                <div className="flex gap-4">
                  {book.amazonUrl && (
                    <a
                      href={book.amazonUrl}
                      className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm font-thin"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Amazon
                    </a>
                  )}
                  {book.publisherUrl && (
                    <a
                      href={book.publisherUrl}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-thin"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Publisher
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-thin">
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
      <Footer />
    </div>
  );
};

export default Publications;
