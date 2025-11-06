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
    title: "Cervical cancerous cell classification: opposition‑based harmony search for deep feature selection", 
    authors: "Nibaran Das, Bodhisatwa Mandal, KC Santosh, Linlin Shen, Sukanta Chakraborty",
    description: "Over 500K (per year) cervical cancer cases are reported with a high mortality rate (6–9%). We propose a tool that classifies cervical cancer cases from Pap smear cytology images using deep features. The proposed tool constitutes a Convolutional Neural Network (CNN) and a metaheuristic evolutionary algorithm called Opposition-based Harmony Search Algorithm (O-bHSA) for deep feature selection. These features are classified using standard classifiers: SVM, MLP, and KNN.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01872-z",
    codeUrl: "#"
  },
  {
    title: "Deep features to detect pulmonary abnormalities in chest X-rays due to infectious disease: Covid-19, pneumonia, and tuberculosis",
    authors: "MK Mahbub, M Biswas, L Gaur, F Alenezi, KC Santosh",
    description: "On three diverse publicly accessible and fully categorized datasets, for non-healthy versus healthy CXR screening, the proposed DNN produced the following accuracies: 99.87% on Covid-19 versus healthy, 99.55% on Pneumonia versus healthy, and 99.76% on TB versus healthy.",
    venue: "Information Sciences, Elsevier",
    year: "2022",
    paperUrl: "https://doi.org/10.1016/j.ins.2022.01.062",
    codeUrl: "#"
  },
  {
    title: "SecureFed: federated learning empowered medical imaging technique to analyze lung abnormalities in chest X‑rays",
    authors: "Aaisha Makkar, KC Santosh",
    description: "Machine learning is an effective and accurate technique to diagnose COVID-19 infections using image data, and chest X-Ray (CXR) is no exception. We proposed SecureFed—a secure aggregation method—which ensures fairness and robustness in federated learning scenarios for medical imaging applications.",
    venue: "International Journal of Machine Learning and Cybernetics, Springer",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01789-7",
    codeUrl: "#"
  },
  {
    title: "A systematic review on cough sound analysis for Covid-19 diagnosis and screening: is my cough sound COVID-19?",
    authors: "KC Santosh, Nicholas Rasmussen, Mohammad Mamun, Saroj Aryal",
    description: "For COVID-19, the need for robust, inexpensive, and accessible screening becomes critical. For mass screening in resource-constrained regions, artificial intelligence (AI)-guided tools have progressively contributed to detect/screen COVID-19 infections.",
    venue: "PeerJ Computer Science",
    year: "2022",
    paperUrl: "https://doi.org/10.7717/peerj-cs.958",
    codeUrl: "#"
  },
  {
    title: "COVID-19 Prediction Models and Unexploited Data",
    authors: "KC Santosh",
    description: "For COVID-19, predictive modeling, in the literature, uses broadly SEIR/SIR, agent-based, curve-fitting techniques/models. Predictions aim at making states and citizens aware of possible threats/consequences. However, for COVID-19 outbreak, state-of-the-art techniques are limited to use the amount of data we have.",
    venue: "Journal of Medical Systems, Springer",
    year: "2020",
    paperUrl: "https://doi.org/10.1007/s10916-020-01645-z",
    codeUrl: "#"
  },
  {
    title: "Truncated inception net: COVID-19 outbreak screening using chest X-rays",
    authors: "Dipayan Das, KC Santosh, Umapada Pal",
    description: "Since December 2019, the Coronavirus Disease (COVID-19) pandemic has caused world-wide turmoil in a short period of time, and the infection, caused by SARS-CoV-2, is spreading rapidly. The proposed model achieved an accuracy of 99.96%.",
    venue: "Physical and Engineering Sciences in Medicine",
    year: "2020",
    paperUrl: "https://doi.org/10.1007/s13246-020-00888-x",
    codeUrl: "#"
  },
  {
    title: "Covid-19 Imaging Tools: How Big Data is Big?",
    authors: "KC Santosh, Soumyajit Ghosh",
    description: "In this paper, considering year 2020 and Covid-19, we analyze medical imaging tools and their performance scores in accordance with the dataset size and their complexity. Also, using transfer learning, with fewer data, one could possibly build Covid-19 detection tools.",
    venue: "Journal of Medical Systems, Springer",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10916-021-01747-2",
    codeUrl: "#"
  },
  {
    title: "Shallow Convolutional Neural Network for COVID-19 Outbreak Screening Using Chest X-rays",
    authors: "Himansu Mukherjee, Soumyajit Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description: "Among radiological imaging data, Chest X-rays (CXRs) are of great use in observing COVID-19 manifestations. For mass screening, using CXRs, a computationally efficient AI-driven tool is the must to detect COVID-19-positive cases from non-COVID ones.",
    venue: "Cognitive Computation, Springer",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s12559-020-09775-9",
    codeUrl: "#"
  },
  {
    title: "Deep neural network to detect COVID-19: one architecture for both CT Scans and Chest X-rays",
    authors: "Himansu Mukherjee, Soumyajit Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description: "Since December 2019, the novel COVID-19's spread rate is exponential, and AI-driven tools are used to prevent further spreading. In the literature, AI-driven tools are limited to one data type either CT scan or CXR to detect COVID-19 positive cases.",
    venue: "Applied Intelligence, Springer",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10489-020-01943-6",
    codeUrl: "#"
  },
  {
    title: "Socioeconomic impact due to COVID-19: An empirical assessment",
    authors: "Vikrant Gupta, KC Santosh, Richa Arora, Tommaso Ciano, Kousik Sankar Kalid, Satya Mohan",
    description: "Starting from December 2019, the novel COVID-19 threatens human lives and economies across the world. It was a matter of grave concern for the governments of all the countries as the deadly virus started expanding its paws over neighboring regions of infected areas.",
    venue: "Information Processing & Management, Elsevier",
    year: "2022",
    paperUrl: "https://doi.org/10.1016/j.ipm.2021.102810",
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
