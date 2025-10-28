import React from 'react';
import Footer from '../components/Footer';

interface Publication {
  title: string;
  authors?: string;
  description: string;
  venue?: string;
  year?: string;
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
      title: "Non-Uniform Illumination Attack for Fooling Convolutional Neural Networks",
      authors: "Akshay Jain, Shiv Ram Dubey, Satish Kumar Singh, KC Santosh, Bidyut Baran Chaudhuri",
      description: "Convolutional Neural Networks (CNNs) have made remarkable strides; however, they remain susceptible to vulnerabilities, particularly in the face of minor image perturbations. This study introduces a novel Non-Uniform Illumination (NUI) attack technique, where images are subtly altered using varying NUI masks. Extensive experiments are conducted on widely-accepted datasets including CIFAR10, TinyImageNet, and CalTech256, focusing on image classification with 12 different NUI attack models.",
      venue: "Pattern Recognition Journal",
      year: "2025",
      paperUrl: "https://www.ai-research-lab.org/paper/67db27caa299b9e333775f2e",
      codeUrl: "#"
    },
    {
      title: "Advances and Challenges in Meta-Learning: A Technical Review",
      authors: "Anna Vettoruzzo, Mohamed-Rafik Bouguelia, Joaquin Vanschoren, Thorsteinn Rögnvaldsson, KC Santosh",
      description: "Meta-learning empowers learning systems with the ability to acquire knowledge from multiple tasks, enabling faster adaptation and generalization to new tasks. This review provides a comprehensive technical overview of meta-learning, emphasizing its importance in real-world applications where data may be scarce or expensive to obtain.",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      year: "2024",
      paperUrl: "https://www.ai-research-lab.org/paper/67b7cba6c883bbe0626025f9",
      codeUrl: "#"
    },
    {
      title: "Advances in Deep Learning for Tuberculosis Screening using Chest X‑rays: The Last 5 Years Review",
      authors: "KC Santosh, Siva Allu, Sivaramakrishnan Rajaraman, Sameer Antani",
      description: "There has been an explosive growth in research over the last decade exploring machine learning techniques for analyzing chest X-ray (CXR) images for screening cardiopulmonary abnormalities. We review the research studies published over the last five years (2016-2021) and systematically review 54 peer-reviewed research articles.",
      venue: "Journal of Medical Systems, Springer",
      year: "2023",
      paperUrl: "https://www.ai-research-lab.org/paper/67bca50f4a13bcb220dac457",
      codeUrl: "#"
    },
    {
      title: "Guest Editorial Multimodal Learning in Medical Imaging Informatics",
      authors: "KC Santosh, Sameer Antani",
      description: "The papers in this special section focus on multimodal learning in medical imaging informatics. Enormous amounts of health-related data are produced daily, and the practice of modern medicine increasingly relies on data from multiple sources to guide better care.",
      venue: "IEEE Journal of Biomedical and Health Informatics",
      year: "2023",
      paperUrl: "https://www.ai-research-lab.org/paper/67b7ccc25a3833f684b80d76",
      codeUrl: "#"
    },
    {
      title: "Cervical cancerous cell classification: opposition‑based harmony search for deep feature selection",
      authors: "Nibaran Das, Bodhisatwa Mandal, KC Santosh, Linlin Shen, Sukanta Chakraborty",
      description: "Over 500K (per year) cervical cancer cases are reported with a high mortality rate (6–9%). We propose a tool that classifies cervical cancer cases from Pap smear cytology images using deep features. The proposed tool constitutes a Convolutional Neural Network (CNN) and a metaheuristic evolutionary algorithm called Opposition-based Harmony Search Algorithm (O-bHSA) for deep feature selection.",
      venue: "Soft Computing, Springer",
      year: "2024",
      paperUrl: "https://www.ai-research-lab.org/paper/67ce1e887185217817c985b4",
      codeUrl: "#"
    },
    {
      title: "SecureFed: federated learning empowered medical imaging technique to analyze lung abnormalities in chest X‑rays",
      authors: "Aaisha Makkar, KC Santosh",
      description: "Machine learning is an effective and accurate technique to diagnose COVID-19 infections using image data, and chest X-Ray (CXR) is no exception. We proposed SecureFed—a secure aggregation method—which ensures fairness and robustness in federated learning scenarios for medical imaging applications.",
      venue: "Neural Computing and Applications, Springer",
      year: "2024",
      paperUrl: "https://www.ai-research-lab.org/paper/67ce1e0ec9109ace1bbebeee",
      codeUrl: "#"
    }
  ];

  const books: Book[] = [
    {
      title: "Deep Learning Models for Medical Imaging",
      authors: "KC Santosh, Sameer Antani",
      description: "This book covers recent advances in deep learning approaches for medical imaging including CNN architectures, transfer learning, and domain adaptation. It provides comprehensive coverage of deep learning applications in radiology, pathology, and other medical imaging domains.",
      publisher: "Elsevier",
      year: "2021",
      isbn: "978-0-12-823504-1",
      amazonUrl: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1",
      publisherUrl: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1"
    },
    {
      title: "Recent Trends in Image Processing and Pattern Recognition",
      authors: "KC Santosh, Ravindra S. Hegadi",
      description: "This book presents recent advances in image processing and pattern recognition techniques. It covers topics including deep learning for computer vision, medical image analysis, document analysis, and biometric recognition systems.",
      publisher: "Springer",
      year: "2022",
      isbn: "978-981-19-3935-8",
      amazonUrl: "https://link.springer.com/book/10.1007/978-981-19-3935-8",
      publisherUrl: "https://link.springer.com/book/10.1007/978-981-19-3935-8"
    },
    {
      title: "Document Analysis and Text Recognition: Benchmarking State-of-the-Art Systems",
      authors: "KC Santosh, Laurent Wendling",
      description: "A comprehensive guide to document analysis and text recognition systems, providing benchmarking methodologies and state-of-the-art approaches for OCR, document layout analysis, and handwritten text recognition.",
      publisher: "Springer",
      year: "2020",
      isbn: "978-981-15-9658-1",
      amazonUrl: "https://www.springer.com/gp/book/9789811596810",
      publisherUrl: "https://www.springer.com/gp/book/9789811596810"
    },
    {
      title: "Intelligent Systems and Pattern Recognition: Challenges and Opportunities",
      authors: "KC Santosh, Nibaran Das, Krishanu Maity",
      description: "This book explores intelligent systems and pattern recognition with focus on machine learning algorithms, deep neural networks, and their applications in various domains including healthcare, security, and automation.",
      publisher: "Springer",
      year: "2021",
      isbn: "978-981-16-6767-1",
      amazonUrl: "https://link.springer.com/book/9789811667671",
      publisherUrl: "https://link.springer.com/book/9789811667671"
    },
    {
      title: "Medical Image Processing: Advanced Fuzzy Set Theoretic Techniques",
      authors: "Tamalika Chaira, KC Santosh",
      description: "Advanced techniques in medical image processing using fuzzy set theory. The book covers fuzzy image enhancement, segmentation, classification, and their applications in medical diagnosis and treatment planning.",
      publisher: "CRC Press",
      year: "2019",
      isbn: "978-0-429-02941-7",
      amazonUrl: "https://www.taylorfrancis.com/books/e/9780429029417",
      publisherUrl: "https://www.taylorfrancis.com/books/e/9780429029417"
    },
    {
      title: "Advances in Pattern Recognition and Artificial Intelligence",
      authors: "KC Santosh, Ravindra S. Hegadi, Umapada Pal",
      description: "Recent developments in pattern recognition and artificial intelligence covering machine learning, computer vision, natural language processing, and their interdisciplinary applications in real-world scenarios.",
      publisher: "Springer",
      year: "2024",
      isbn: "978-981-97-2720-9",
      amazonUrl: "https://link.springer.com/book/10.1007/978-981-97-2720-9",
      publisherUrl: "https://link.springer.com/book/10.1007/978-981-97-2720-9"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
          Publications
        </h1>
        <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        <p className="text-gray-600 mb-12 font-thin text-lg">Research papers, books, and publications from the USD AI Research Lab</p>
        
        {/* Research Papers Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Research Papers
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-thin text-gray-800 mb-2 leading-tight">
                  {publication.title}
                </h3>
                {publication.authors && (
                  <p className="text-sm text-gray-500 mb-2 font-thin">
                    Authors: {publication.authors}
                  </p>
                )}
                {publication.venue && publication.year && (
                  <p className="text-sm text-gray-500 mb-4 font-thin">
                    Venue: {publication.venue} ({publication.year})
                  </p>
                )}
                <p className="text-gray-600 mb-6 leading-relaxed font-thin">
                  {publication.description}
                </p>
                <div className="flex gap-4">
                  {publication.paperUrl && (
                    <a
                      href={publication.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-thin"
                      style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
                    >
                      Preview Paper
                    </a>
                  )}
                  {publication.codeUrl && publication.codeUrl !== "#" && (
                    <a
                      href={publication.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-thin"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Books
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <div key={index} className="bg-white p-6 hover:bg-gray-50 transition-colors border border-gray-100 rounded-lg">
                <h3 className="text-lg font-thin text-gray-800 mb-2 leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-thin">
                  by {book.authors}
                </p>
                {book.publisher && book.year && (
                  <p className="text-sm text-gray-500 mb-3 font-thin">
                    {book.publisher} • {book.year}
                  </p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed font-thin text-sm">
                  {book.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {book.publisherUrl && (
                    <a
                      href={book.publisherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity text-xs font-thin"
                      style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
                    >
                      View Book
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
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
      <Footer />
    </div>
  );
};

export default Publications;
