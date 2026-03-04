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
    description: "Introduces a Non‑Uniform Illumination (NUI) attack and evaluates defenses across CNNs.",
    venue: "IEEE Transactions on Artificial Intelligence",
    year: "2025",
    paperUrl: "https://doi.org/10.1109/TAI.2025.3549396",
    codeUrl: "#"
  },
  {
    title: "Advances and Challenges in Meta-Learning: A Technical Review",
    authors: "Anna Vettoruzzo, Mohamed-Rafik Bouguelia, Joaquin Vanschoren, Thorsteinn Rögnvaldsson, KC Santosh",
    description: "Comprehensive technical overview of meta‑learning and related areas.",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: "2024",
    paperUrl: "https://doi.org/10.1109/TPAMI.2024.3361491",
    codeUrl: "#"
  },
  {
    title: "Advances in Deep Learning for Tuberculosis Screening using Chest X‑rays: The Last 5 Years Review",
    authors: "KC Santosh, Siva Allu, Sivaramakrishnan Rajaraman, Sameer Antani",
    description: "Systematic review and meta‑analysis of DL‑based TB screening via CXRs.",
    venue: "Journal of Medical Systems (Springer)",
    year: "2022",
    paperUrl: "https://doi.org/10.1007/s10916-022-01870-8",
    codeUrl: "#"
  },
  {
    title: "Guest Editorial Multimodal Learning in Medical Imaging Informatics",
    authors: "KC Santosh, Sameer Antani",
    description: "Overview of multimodal learning across diverse healthcare data sources.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: "2023",
    paperUrl: "https://doi.org/10.1109/JBHI.2023.3241369",
    codeUrl: "#"
  },
  {
    title: "Cervical cancerous cell classification: opposition‑based harmony search for deep feature selection",
    authors: "Nibaran Das, Bodhisatwa Mandal, KC Santosh, Linlin Shen, Sukanta Chakraborty",
    description: "CNN deep features + Opposition‑based Harmony Search for cervical cancer classification.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01872-z",
    codeUrl: "#"
  },
  {
    title: "SecureFed: federated learning empowered medical imaging technique to analyze lung abnormalities in chest X‑rays",
    authors: "Aaisha Makkar, KC Santosh",
    description: "Secure aggregation improving fairness/robustness in federated medical imaging.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01789-7",
    codeUrl: "#"
  },
  {
    title: "AI Tools for Assessing Human Fertility Using Risk Factors: A State‑of‑the‑Art Review",
    authors: "Debasmita GhoshRoy, P. A. Alvi, KC Santosh",
    description: "Systematic review (42 studies) of AI for infertility risk factors.",
    venue: "Journal of Medical Systems",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s10916-023-01983-8",
    codeUrl: "#"
  },
  {
    title: "Hybrid approach for text categorization: A case study with Bangla news article",
    authors: "Ankita Dhar, Himadri Mukherjee, Kaushik Roy, KC Santosh, Niladri Sekhar Dash",
    description: "Hybrid text + graph features for Bangla news classification.",
    venue: "Journal of Information Science",
    year: "2023",
    paperUrl: "https://doi.org/10.1177/01655515211027770",
    codeUrl: "#"
  },
  {
    title: "Enabling clustering algorithms to detect clusters of varying densities through scale-invariant data preprocessing",
    authors: "Sunil Aryal, Jonathan R. Wells, Arbind Agrahari Baniya, KC Santosh",
    description: "ARES rank-based preprocessing stabilizes clustering across densities.",
    venue: "arXiv preprint",
    year: "2024",
    paperUrl: "https://arxiv.org/abs/2401.11402",
    codeUrl: "#"
  },
  {
    title: "Investigation of DNA discontinuity for detecting tuberculosis",
    authors: "Sonia Farhana Nimmy, Md. Golam Sarowar, Nilanjan Dey, Amira S. Ashour, KC Santosh",
    description: "Automated ML to assess breaks in long DNA sequences for TB detection.",
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    year: "2024",
    paperUrl: "https://doi.org/10.1007/s12652-018-0878-0",
    codeUrl: "#"
  },
  {
    title: "LIFA: Language identification from audio with LPCC-G features",
    authors: "Himadri Mukherjee, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Santanu Phadikar, Kaushik Roy, Umapada Pal",
    description: "LPCC‑G features + RF for language ID across 11 Indian languages.",
    venue: "Multimedia Tools and Applications",
    year: "2024",
    paperUrl: "https://doi.org/10.1007/s11042-023-17782-9",
    codeUrl: "#"
  },
  {
    title: "Leveraging Sampling Schemes on Skewed Class Distribution to Enhance Male Fertility Detection with Ensemble AI Learners",
    authors: "Debasmita GhoshRoy, P. A. Alvi, KC Santosh",
    description: "Benchmarks 14 re‑sampling approaches; highlights LightGBM + SMOTE‑ENN.",
    venue: "International Journal of Pattern Recognition and Artificial Intelligence",
    year: "2024",
    paperUrl: "https://doi.org/10.1142/S0218001424510030",
    codeUrl: "#"
  },
  {
    title: "Shallow Convolutional Neural Network for COVID-19 Outbreak Screening Using Chest X-rays",
    authors: "Himadri Mukherjee, Subhankar Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description: "Light‑weight CNN for CXR COVID‑19 screening; 5‑fold CV.",
    venue: "Cognitive Computation",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s12559-020-09775-9",
    codeUrl: "#"
  },
  {
    title: "Covid-19 Imaging Tools: How Big Data is Big?",
    authors: "KC Santosh, Sourodip Ghosh",
    description: "Perspective on dataset size, model (under/over)fitting, transfer learning, augmentation.",
    venue: "Journal of Medical Systems (Springer)",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10916-021-01747-2",
    codeUrl: "#"
  },
  {
    title: "SegFast‑V2: Semantic image segmentation with less parameters in deep learning for autonomous driving",
    authors: "Swarnendu Ghosh, Anisha Pal, Shourya Jaiswal, KC Santosh, Nibaran Das, Mita Nasipuri",
    description: "Compact semantic segmentation with fewer parameters; strong runtime gains.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2019",
    paperUrl: "https://doi.org/10.1007/s13042-019-01005-5",
    codeUrl: "#"
  },
  {
    title: "Deep features to detect pulmonary abnormalities in chest X-rays due to infectious disease: Covid-19, pneumonia, and tuberculosis",
    authors: "MK Mahbub, M Biswas, L Gaur, F Alenezi, KC Santosh",
    description: "Custom DNN for non‑healthy vs healthy CXR screening across diseases.",
    venue: "Information Sciences (Elsevier)",
    year: "2022",
    paperUrl: "https://doi.org/10.1016/j.ins.2022.01.062",
    codeUrl: "#"
  },
  {
    title: "A systematic review on cough sound analysis for Covid-19 diagnosis and screening: is my cough sound COVID-19?",
    authors: "KC Santosh, Nicholas Rasmussen, Mohammad Mamun, Saroj Aryal",
    description: "Systematic review (2020–2021) of AI‑guided cough sound analysis for COVID‑19.",
    venue: "PeerJ Computer Science",
    year: "2022",
    paperUrl: "https://doi.org/10.7717/peerj-cs.958",
    codeUrl: "#"
  },
  {
    title: "COVID-19 Prediction Models and Unexploited Data",
    authors: "KC Santosh",
    description: "Perspective on SEIR/agent‑based/curve‑fitting predictors and data limitations.",
    venue: "Journal of Medical Systems (Springer)",
    year: "2020",
    paperUrl: "https://doi.org/10.1007/s10916-020-01645-z",
    codeUrl: "#"
  },
  {
    title: "Truncated inception net: COVID-19 outbreak screening using chest X-rays",
    authors: "Dipayan Das, KC Santosh, Umapada Pal",
    description: "Truncated Inception architecture for CXR screening.",
    venue: "Physical and Engineering Sciences in Medicine",
    year: "2020",
    paperUrl: "https://doi.org/10.1007/s13246-020-00888-x",
    codeUrl: "#"
  },
  {
    title: "Deep neural network to detect COVID-19: one architecture for both CT Scans and Chest X-rays",
    authors: "Himansu Mukherjee, Soumyajit Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description: "Single DNN architecture trained on both CT and CXR.",
    venue: "Applied Intelligence (Springer)",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10489-020-01943-6",
    codeUrl: "#"
  },
  {
    title: "Socioeconomic impact due to COVID-19: An empirical assessment",
    authors: "Vikrant Gupta, KC Santosh, Richa Arora, Tommaso Ciano, Kousik Sankar Kalid, Satya Mohan",
    description: "Then/now socioeconomic analysis (India) across unemployment, IIP, trade, markets, FX, metals.",
    venue: "Information Processing & Management (Elsevier)",
    year: "2022",
    paperUrl: "https://doi.org/10.1016/j.ipm.2021.102810",
    codeUrl: "#"
  }
];

export interface BookWithImage extends Book {
  imageUrl: string;
}

export const BOOKS: BookWithImage[] = [
  {
    title: "AI, Ethical Issues and Explainability—Applied Biometrics",
    authors: "KC Santosh",
    description: "Research on AI ethics, explainability, and biometric applications with focus on responsible AI development.",
    publisher: "KC Santosh Personal",
    year: "2024",
    isbn: "",
    amazonUrl: "https://kc-santosh.org/",
    publisherUrl: "https://kc-santosh.org/",
    imageUrl: "/images/books/book3.png"
  },
  {
    title: "CrackML: Machine Learning for Materials Science",
    authors: "KC Santosh, Casey Wall",
    description: "Advanced machine learning techniques applied to materials science and crack detection in structural systems.",
    publisher: "Springer",
    year: "2024",
    isbn: "978-981-97-2720-9",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-97-2720-9",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-97-2720-9",
    imageUrl: "/images/books/book-crackML.png"
  },
  {
    title: "Pattern Recognition and AI: Advanced Topics",
    authors: "KC Santosh, et al.",
    description: "Comprehensive coverage of advanced pattern recognition techniques and artificial intelligence applications.",
    publisher: "Springer",
    year: "2024",
    isbn: "978-981-99-7441-2",
    amazonUrl: "https://link.springer.com/book/9789819974412",
    publisherUrl: "https://link.springer.com/book/9789819974412",
    imageUrl: "/images/books/book5.png"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "Latest advances in computer vision, medical imaging, document analysis, and biometric recognition systems.",
    publisher: "Springer",
    year: "2022",
    isbn: "978-981-19-3935-8",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-19-3935-8",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-19-3935-8",
    imageUrl: "/images/books/book2.png"
  },
  {
    title: "AI and ML for Healthcare: Challenges and Opportunities",
    authors: "KC Santosh, Nibaran Das, Krishanu Maity",
    description: "Machine learning and deep learning algorithms for healthcare applications, security systems, and automation.",
    publisher: "Springer",
    year: "2021",
    isbn: "978-981-16-6767-1",
    amazonUrl: "https://link.springer.com/book/9789811667671",
    publisherUrl: "https://link.springer.com/book/9789811667671",
    imageUrl: "/images/books/book-ai-ml-healthcare.png"
  },
  {
    title: "Deep Learning Models for Medical Imaging",
    authors: "KC Santosh, Sameer Antani",
    description: "Comprehensive guide to deep learning approaches for medical imaging including CNNs, transfer learning, and domain adaptation.",
    publisher: "Elsevier",
    year: "2021",
    isbn: "978-0-12-823504-1",
    amazonUrl: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1",
    publisherUrl: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1",
    imageUrl: "/images/books/book-dl-medical-imaging2.png"
  },
  {
    title: "Document Image Analysis: Benchmarking State-of-the-Art Systems",
    authors: "KC Santosh, Laurent Wendling",
    description: "Benchmarking methodologies for OCR, layout analysis, handwritten text recognition, and document processing systems.",
    publisher: "Springer",
    year: "2017",
    isbn: "978-981-13-2339-3",
    amazonUrl: "https://link.springer.com/book/10.1007%2F978-981-13-2339-3",
    publisherUrl: "https://link.springer.com/book/10.1007%2F978-981-13-2339-3",
    imageUrl: "/images/books/book-coverS2017.png"
  },
  {
    title: "COVID-19: Prediction, Decision-Making, and its Impacts",
    authors: "KC Santosh, Amit Joshi",
    description: "Analysis of COVID-19 prediction models, decision-making frameworks, and socioeconomic impacts using AI and data science.",
    publisher: "Springer",
    year: "2020",
    isbn: "978-981-15-9681-0",
    amazonUrl: "https://www.springer.com/gp/book/9789811596810",
    publisherUrl: "https://www.springer.com/gp/book/9789811596810",
    imageUrl: "/images/books/book-covid1.png"
  },
  {
    title: "COVID-19: Technologies and Applications",
    authors: "KC Santosh, Laurent Wendling",
    description: "Technological solutions and applications for COVID-19 analysis, screening, and research methodologies.",
    publisher: "Springer",
    year: "2020",
    isbn: "978-981-15-6571-7",
    amazonUrl: "https://www.springer.com/gp/book/9789811565717",
    publisherUrl: "https://www.springer.com/gp/book/9789811565717",
    imageUrl: "/images/books/book-covid2.jpg"
  },
  {
    title: "Medical Image Processing: Advanced Fuzzy Set Theoretic Techniques",
    authors: "Tamalika Chaira, KC Santosh",
    description: "Advanced fuzzy set techniques for medical image enhancement, segmentation, classification, and analysis.",
    publisher: "CRC Press",
    year: "2019",
    isbn: "978-0-429-02941-7",
    amazonUrl: "https://www.taylorfrancis.com/books/e/9780429029417",
    publisherUrl: "https://www.taylorfrancis.com/books/e/9780429029417",
    imageUrl: "/images/books/book-MedImag.jpg"
  },
  {
    title: "Document Processing Using Machine Learning",
    authors: "SK Md Obaidullah, KC Santosh, Teresa Gonçalves, Nibaran Das, Kaushik Roy",
    description: "Machine learning approaches for document processing including text recognition, classification, and information extraction.",
    publisher: "CRC Press",
    year: "2020",
    isbn: "978-0-429-27757-3",
    amazonUrl: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573",
    publisherUrl: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573",
    imageUrl: "/images/books/book-doc.jpg"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition Vol. 1",
    authors: "KC Santosh, et al.",
    description: "Advanced techniques in pattern recognition and machine learning applications across multiple domains.",
    publisher: "Springer",
    year: "2023",
    isbn: "978-3-031-27762-7",
    amazonUrl: "https://link.springer.com/book/10.1007/978-3-031-27762-7",
    publisherUrl: "https://link.springer.com/book/10.1007/978-3-031-27762-7",
    imageUrl: "/images/books/book6.png"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition Vol. 2",
    authors: "KC Santosh, et al.",
    description: "Comprehensive coverage of machine learning applications and pattern recognition across various industries.",
    publisher: "Springer",
    year: "2023",
    isbn: "978-3-031-27609-5",
    amazonUrl: "https://link.springer.com/book/10.1007/978-3-031-27609-5",
    publisherUrl: "https://link.springer.com/book/10.1007/978-3-031-27609-5",
    imageUrl: "/images/books/book7.png"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition Vol. 3",
    authors: "KC Santosh, et al.",
    description: "Latest developments in image processing, pattern recognition, and artificial intelligence methodologies.",
    publisher: "Springer",
    year: "2023",
    isbn: "978-3-031-23599-3",
    amazonUrl: "https://link.springer.com/book/10.1007/978-3-031-23599-3",
    publisherUrl: "https://link.springer.com/book/10.1007/978-3-031-23599-3",
    imageUrl: "/images/books/book8.png"
  },
  {
    title: "IEEE Conference Proceedings on Computer Vision",
    authors: "KC Santosh, et al.",
    description: "Collection of IEEE proceedings on computer vision, machine learning, and pattern recognition.",
    publisher: "IEEE",
    year: "2022",
    isbn: "978-1-5386-6947-0",
    amazonUrl: "https://ieeexplore.ieee.org/xpl/conhome/9866947/proceeding",
    publisherUrl: "https://ieeexplore.ieee.org/xpl/conhome/9866947/proceeding",
    imageUrl: "/images/books/book1.png"
  },
  {
    title: "IEEE CBMS 2020 Proceedings",
    authors: "KC Santosh, et al.",
    description: "Proceedings of the 33rd International Symposium on Computer-Based Medical Systems focusing on medical informatics.",
    publisher: "IEEE",
    year: "2020",
    isbn: "978-1-7281-7350-4",
    amazonUrl: "https://ieeexplore.ieee.org/xpl/conhome/9169740/proceeding",
    publisherUrl: "https://ieeexplore.ieee.org/xpl/conhome/9169740/proceeding",
    imageUrl: "/images/books/cbms2020-proceedings.png"
  },
  {
    title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 1",
    authors: "KC Santosh, Ravindra S. Hegadi, Umapada Pal",
    description: "Conference proceedings covering latest research in image processing, pattern recognition, and artificial intelligence.",
    publisher: "Springer",
    year: "2021",
    isbn: "978-981-16-0507-9",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes",
    imageUrl: "/images/books/rtip2r-2020-1.png"
  },
  {
    title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 2",
    authors: "KC Santosh, Ravindra S. Hegadi, Umapada Pal",
    description: "Advanced research proceedings in image processing, machine learning, and pattern recognition applications.",
    publisher: "Springer",
    year: "2021",
    isbn: "978-981-16-0508-6",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes",
    imageUrl: "/images/books/rtip2r-2020-2.png"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part I)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "Part I covering theoretical foundations and applications in image processing and pattern recognition.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9181-1",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9181-1",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9181-1",
    imageUrl: "/images/books/part1.png"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part II)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "Part II focusing on advanced applications and emerging trends in computer vision and machine learning.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9184-2",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9184-2",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9184-2",
    imageUrl: "/images/books/part2.png"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part III)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description: "Part III covering state-of-the-art techniques with emphasis on deep learning and neural networks.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9187-3",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9187-3",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9187-3",
    imageUrl: "/images/books/part3.png"
  }
];
