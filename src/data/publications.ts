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
    description:
      "Introduces a Non-Uniform Illumination (NUI) attack and evaluates robustness/defenses across CNNs.",
    venue: "IEEE Transactions on Artificial Intelligence",
    year: "2025",
    paperUrl: "https://doi.org/10.1109/TAI.2025.3549396",
    codeUrl: "#"
  },
  {
    title: "Advances and Challenges in Meta-Learning: A Technical Review",
    authors: "Anna Vettoruzzo, Mohamed-Rafik Bouguelia, Joaquin Vanschoren, Thorsteinn Rögnvaldsson, KC Santosh",
    description:
      "Comprehensive technical overview of meta-learning and its connections to related areas.",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: "2024",
    paperUrl: "https://doi.org/10.1109/TPAMI.2024.3357847",
    codeUrl: "#"
  },
  {
    title: "Advances in Deep Learning for Tuberculosis Screening using Chest X‑rays: The Last 5 Years Review",
    authors: "KC Santosh, Siva Allu, Sivaramakrishnan Rajaraman, Sameer Antani",
    description:
      "Systematic review and meta-analysis of DL-based TB screening via chest X-rays.",
    venue: "Journal of Medical Systems (Springer)",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s10916-023-01925-1",
    codeUrl: "#"
  },
  {
    title: "Guest Editorial Multimodal Learning in Medical Imaging Informatics",
    authors: "KC Santosh, Sameer Antani",
    description:
      "Special section overview on multimodal learning across health data sources.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: "2023",
    paperUrl: "https://doi.org/10.1109/JBHI.2023.3241369",
    codeUrl: "#"
  },
  {
    title: "Cervical cancerous cell classification: opposition‑based harmony search for deep feature selection",
    authors: "Nibaran Das, Bodhisatwa Mandal, KC Santosh, Linlin Shen, Sukanta Chakraborty",
    description:
      "CNN deep features + O‑bHSA selection for cervical cancer classification on Pap smear/LBC datasets.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01872-z",
    codeUrl: "#"
  },
  {
    title: "SecureFed: federated learning empowered medical imaging technique to analyze lung abnormalities in chest X‑rays",
    authors: "Aaisha Makkar, KC Santosh",
    description:
      "Secure aggregation method improving fairness/robustness in federated medical imaging.",
    venue: "International Journal of Machine Learning and Cybernetics (Springer)",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01789-7",
    codeUrl: "#"
  },
  {
    title: "AI Tools for Assessing Human Fertility Using Risk Factors: A State‑of‑the‑Art Review",
    authors: "Debasmita GhoshRoy, P. A. Alvi, KC Santosh",
    description:
      "Systematic review (42 studies) and meta‑analysis on AI for fertility/risk factors.",
    venue: "Journal of Medical Systems",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s10916-023-01983-8",
    codeUrl: "#"
  },
  {
    title: "Hybrid approach for text categorization: A case study with Bangla news article",
    authors: "Ankita Dhar, Himadri Mukherjee, Kaushik Roy, KC Santosh, Niladri Sekhar Dash",
    description:
      "Hybrid text+graph features for Bangla news classification; Naïve Bayes Multinomial baseline.",
    venue: "Journal of Information Science",
    year: "2023",
    paperUrl: "https://doi.org/10.1177/01655515211027770",
    codeUrl: "#"
  },
  {
    title:
      "Enabling clustering algorithms to detect clusters of varying densities through scale-invariant data preprocessing",
    authors: "Sunil Aryal, Jonathan R. Wells, Arbind Agrahari Baniya, KC Santosh",
    description:
      "ARES rank‑based preprocessing to stabilize clustering across representations/densities.",
    venue: "arXiv (CoRR)",
    year: "2024",
    paperUrl: "https://doi.org/10.48550/arXiv.2401.11402",
    codeUrl: "#"
  },
  {
    title: "Investigation of DNA discontinuity for detecting tuberculosis",
    authors: "Sonia Farhana Nimmy, Md. Golam Sarowar, Nilanjan Dey, Amira S. Ashour, KC Santosh",
    description:
      "Automated ML to assess breaks in long DNA sequences for TB detection.",
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    year: "2024",
    paperUrl: "https://doi.org/10.1007/s12652-018-0878-0",
    codeUrl: "#"
  },
  {
    title: "LIFA: Language identification from audio with LPCC-G features",
    authors:
      "Himadri Mukherjee, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Santanu Phadikar, Kaushik Roy, Umapada Pal",
    description:
      "LPCC‑G features + RF for language ID of top‑11 Indian languages; >2,200 hours of audio.",
    venue: "Multimedia Tools and Applications",
    year: "2024",
    paperUrl: "https://doi.org/10.1007/s11042-023-17782-9",
    codeUrl: "#"
  },
  {
    title:
      "Leveraging Sampling Schemes on Skewed Class Distribution to Enhance Male Fertility Detection with Ensemble AI Learners",
    authors: "Debasmita GhoshRoy, P. A. Alvi, KC Santosh",
    description:
      "Benchmarks 14 re‑sampling approaches; LightGBM+SMOTE‑ENN highlighted.",
    venue: "International Journal of Pattern Recognition and Artificial Intelligence",
    year: "2024",
    paperUrl: "https://doi.org/10.1142/S0218001424510030",
    codeUrl: "#"
  },
  {
    title:
      "Shallow Convolutional Neural Network for COVID-19 Outbreak Screening Using Chest X-rays",
    authors:
      "Himadri Mukherjee, Subhankar Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description:
      "Lightweight shallow CNN for CXR COVID‑19 screening; 5‑fold CV; high sensitivity.",
    venue: "Cognitive Computation",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s12559-020-09775-9",
    codeUrl: "#"
  },
  {
    title: "Covid-19 Imaging Tools: How Big Data is Big?",
    authors: "KC Santosh, Sourodip Ghosh",
    description:
      "Perspective on dataset size, model (under/over)fitting, transfer learning, augmentation in COVID‑19 imaging.",
    venue: "Journal of Medical Systems (Springer)",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10916-021-01747-2",
    codeUrl: "#"
  },
  {
    title:
      "SegFast‑V2: Semantic image segmentation with less parameters in deep learning for autonomous driving",
    authors:
      "Swarnendu Ghosh, Anisha Pal, Shourya Jaiswal, KC Santosh, Nibaran Das, Mita Nasipuri",
    description:
      "Compact semantic segmentation with fewer parameters; runtime gains with comparable accuracy.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2019",
    paperUrl: "https://doi.org/10.1007/s13042-019-01005-5",
    codeUrl: "#"
  },
  {
    title:
      "Deep features to detect pulmonary abnormalities in chest X-rays due to infectious disease: Covid-19, pneumonia, and tuberculosis",
    authors: "MK Mahbub, M Biswas, L Gaur, F Alenezi, KC Santosh",
    description:
      "Lightweight DNN for non‑healthy vs healthy CXR screening across diseases.",
    venue: "Information Sciences (Elsevier)",
    year: "2022",
    paperUrl: "https://doi.org/10.1016/j.ins.2022.01.062",
    codeUrl: "#"
  },
  {
    title:
      "A systematic review on cough sound analysis for Covid-19 diagnosis and screening: is my cough sound COVID-19?",
    authors: "KC Santosh, Nicholas Rasmussen, Mohammad Mamun, Saroj Aryal",
    description:
      "Systematic review (2020–2021) of AI‑guided cough sound analysis for COVID‑19.",
    venue: "PeerJ Computer Science",
    year: "2022",
    paperUrl: "https://doi.org/10.7717/peerj-cs.958",
    codeUrl: "#"
  },
  {
    title: "COVID-19 Prediction Models and Unexploited Data",
    authors: "KC Santosh",
    description:
      "Perspective on SEIR/agent‑based/curve‑fitting models and overlooked uncertainties.",
    venue: "Journal of Medical Systems (Springer)",
    year: "2020",
    paperUrl: "https://doi.org/10.1007/s10916-020-01645-z",
    codeUrl: "#"
  },
  {
    title: "Truncated inception net: COVID-19 outbreak screening using chest X-rays",
    authors: "Dipayan Das, KC Santosh, Umapada Pal",
    description:
      "Truncated Inception architecture for CXR screening with mixed datasets.",
    venue: "Physical and Engineering Sciences in Medicine",
    year: "2020",
    paperUrl: "https://doi.org/10.1007/s13246-020-00888-x",
    codeUrl: "#"
  },
  {
    title:
      "Deep neural network to detect COVID-19: one architecture for both CT Scans and Chest X-rays",
    authors:
      "Himadri Mukherjee, Soumyajit Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description:
      "Single CNN‑tailored DNN architecture trained on both CT and CXR.",
    venue: "Applied Intelligence (Springer)",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10489-020-01943-6",
    codeUrl: "#"
  },
  {
    title: "Socioeconomic impact due to COVID-19: An empirical assessment",
    authors:
      "Vikrant Gupta, KC Santosh, Richa Arora, Tommaso Ciano, Kousik Sankar Kalid, Satya Mohan",
    description:
      "Then/now socioeconomic analysis (India) across unemployment, IIP, trade, markets, FX, metals.",
    venue: "Information Processing & Management (Elsevier)",
    year: "2022",
    paperUrl: "https://doi.org/10.1016/j.ipm.2021.102810",
    codeUrl: "#"
  }
];

export const BOOKS: Book[] = [
  {
    title: "Deep Learning Models for Medical Imaging",
    authors: "KC Santosh, Sameer Antani",
    description:
      "Recent advances in deep learning for medical imaging—CNNs, transfer learning, domain adaptation.",
    publisher: "Elsevier",
    year: "2021",
    isbn: "978-0-12-823504-1",
    amazonUrl: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1",
    publisherUrl: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description:
      "Advances in CV/medical imaging, document analysis, biometrics, etc.",
    publisher: "Springer",
    year: "2022",
    isbn: "978-981-19-3935-8",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-19-3935-8",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-19-3935-8"
  },
  {
    title: "Intelligent Systems and Pattern Recognition: Challenges and Opportunities",
    authors: "KC Santosh, Nibaran Das, Krishanu Maity",
    description:
      "ML/DL algorithms and applications across healthcare, security, automation.",
    publisher: "Springer",
    year: "2021",
    isbn: "978-981-16-6767-1",
    amazonUrl: "https://link.springer.com/book/9789811667671",
    publisherUrl: "https://link.springer.com/book/9789811667671"
  },
  {
    title: "Document Analysis and Text Recognition: Benchmarking State-of-the-Art Systems",
    authors: "KC Santosh, Laurent Wendling",
    description:
      "Benchmarking for OCR, layout analysis, handwritten text recognition.",
    publisher: "Springer",
    year: "2020",
    isbn: "978-981-15-9658-1",
    amazonUrl: "https://www.springer.com/gp/book/9789811596810",
    publisherUrl: "https://www.springer.com/gp/book/9789811596810"
  },
  {
    title: "Medical Image Processing: Advanced Fuzzy Set Theoretic Techniques",
    authors: "Tamalika Chaira, KC Santosh",
    description:
      "Fuzzy enhancement, segmentation, classification in medical imaging.",
    publisher: "CRC Press",
    year: "2019",
    isbn: "978-0-429-02941-7",
    amazonUrl: "https://www.taylorfrancis.com/books/e/9780429029417",
    publisherUrl: "https://www.taylorfrancis.com/books/e/9780429029417"
  },
  {
    title: "Document Processing Using Machine Learning",
    authors:
      "SK Md Obaidullah, KC Santosh, Teresa Gonçalves, Nibaran Das, Kaushik Roy",
    description:
      "ML for document processing—text recognition, classification, information extraction.",
    publisher: "CRC Press",
    year: "2020",
    isbn: "978-0-429-27757-3",
    amazonUrl:
      "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573",
    publisherUrl:
      "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (RTIP2R)",
    authors: "KC Santosh, Ravindra S. Hegadi, Umapada Pal",
    description:
      "Proceedings on image processing, pattern recognition, AI applications.",
    publisher: "Springer",
    year: "2021",
    isbn: "978-981-16-0507-9",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes"
  },
  {
    title: "Advances in Pattern Recognition and Artificial Intelligence",
    authors: "KC Santosh, Ravindra S. Hegadi, Umapada Pal",
    description:
      "Recent developments in PR & AI—methods and applications.",
    publisher: "Springer",
    year: "2024",
    isbn: "978-981-97-2720-9",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-97-2720-9",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-97-2720-9"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part I)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description:
      "Theoretical foundations and practical applications in IP/PR.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9181-1",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9181-1",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9181-1"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part II)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description:
      "Advanced applications and emerging trends incl. healthcare/security.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9184-2",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9184-2",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9184-2"
  },
  {
    title: "Recent Trends in Image Processing and Pattern Recognition (Part III)",
    authors: "KC Santosh, Ravindra S. Hegadi",
    description:
      "State‑of‑the‑art techniques and future directions; strong DL focus.",
    publisher: "Springer",
    year: "2019",
    isbn: "978-981-13-9187-3",
    amazonUrl: "https://rd.springer.com/book/10.1007/978-981-13-9187-3",
    publisherUrl: "https://rd.springer.com/book/10.1007/978-981-13-9187-3"
  },
  {
    title:
      "Computer Vision and Image Processing in Intelligent Systems and Multimedia Technologies",
    authors: "KC Santosh, et al.",
    description:
      "CV and image processing for intelligent systems/multimedia; theory to practice.",
    publisher: "Springer",
    year: "2018",
    isbn: "978-981-10-4859-3",
    amazonUrl: "https://link.springer.com/book/10.1007/978-981-10-4859-3",
    publisherUrl: "https://link.springer.com/book/10.1007/978-981-10-4859-3"
  }
];
