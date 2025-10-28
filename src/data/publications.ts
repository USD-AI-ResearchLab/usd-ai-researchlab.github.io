export interface Publication {
  title: string;
  authors?: string;
  description: string;
  venue?: string;
  year?: string;
  paperUrl?: string;
  codeUrl?: string;
}

export interface Book {
  title: string;
  authors: string;
  description: string;
  publisher?: string;
  year?: string;
  isbn?: string;
  amazonUrl?: string;
  publisherUrl?: string;
}

export const PUBLICATIONS: Publication[] = [
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

export const BOOKS: Book[] = [
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
    title: "Document Processing Using Machine Learning",
    authors: "SK Md Obaidullah, KC Santosh, Teresa Gonçalves, Nibaran Das, Kaushik Roy",
    description: "This book focuses on machine learning approaches for document processing including text recognition, document classification, and information extraction from various document types.",
    publisher: "CRC Press",
    year: "2020",
    isbn: "978-0-429-27757-3",
    amazonUrl: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573",
    publisherUrl: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (RTIP2R)",
    authors: "KC Santosh, Ravindra S. Hegadi, Umapada Pal",
    description: "Conference proceedings covering cutting-edge research in image processing and pattern recognition with applications in medical imaging, computer vision, and artificial intelligence.",
    publisher: "Springer",
    year: "2021",
    isbn: "978-981-16-0507-9",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes"
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
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part I)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "First part of the comprehensive collection on recent advances in image processing and pattern recognition techniques with focus on theoretical foundations and practical applications.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9181-1",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9181-1",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9181-1"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part II)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "Second part focusing on advanced applications and emerging trends in image processing and pattern recognition for various domains including healthcare and security.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9184-2",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9184-2",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9184-2"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part III)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "Third part covering state-of-the-art techniques and future directions in image processing and pattern recognition with emphasis on deep learning approaches.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9187-3",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9187-3",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9187-3"
  },
  {
    title: "Computer Vision and Image Processing in Intelligent Systems and Multimedia Technologies",
    authors: "KC Santosh, et al.",
    description: "This book explores computer vision and image processing applications in intelligent systems and multimedia technologies, covering both theoretical foundations and practical implementations.",
    publisher: "Springer",
    year: "2018",
    isbn: "978-981-10-4859-3",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-10-4859-3",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-10-4859-3"
  }
];
