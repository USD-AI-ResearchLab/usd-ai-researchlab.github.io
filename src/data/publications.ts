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
    description: "Convolutional Neural Networks (CNNs) have made remarkable strides; however, they remain susceptible to vulnerabilities, particularly in the face of minor image perturbations that humans can easily recognize. This study introduces a novel Non-Uniform Illumination (NUI) attack technique, where images are subtly altered using varying NUI masks. Extensive experiments are conducted on widely-accepted datasets including CIFAR10, TinyImageNet, and CalTech256, focusing on image classification with 12 different NUI attack models.",
    venue: "IEEE Transactions on Artificial Intelligence",
    year: "2025",
    paperUrl: "https://doi.org/10.1109/TAI.2025.3549396",
    codeUrl: "#"
  },
  {
    title: "Advances and Challenges in Meta-Learning: A Technical Review",
    authors: "Anna Vettoruzzo, Mohamed-Rafik Bouguelia, Joaquin Vanschoren, Thorsteinn Rögnvaldsson, KC Santosh",
    description: "Meta-learning empowers learning systems with the ability to acquire knowledge from multiple tasks, enabling faster adaptation and generalization to new tasks. This review provides a comprehensive technical overview of meta-learning, emphasizing its importance in real-world applications where data may be scarce or expensive to obtain.",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: "2024",
    paperUrl: "https://doi.org/10.1109/TPAMI.2024.3357847",
    codeUrl: "#"
  },
  {
    title: "Advances in Deep Learning for Tuberculosis Screening using Chest X‑rays: The Last 5 Years Review",
    authors: "KC Santosh, Siva Allu, Sivaramakrishnan Rajaraman, Sameer Antani",
    description: "There has been an explosive growth in research over the last decade exploring machine learning techniques for analyzing chest X-ray (CXR) images for screening cardiopulmonary abnormalities. In particular, we have observed a strong interest in screening for tuberculosis (TB). We systematically review 54 peer-reviewed research articles and perform meta-analysis.",
    venue: "Journal of Medical Systems, Springer",
    year: "2022",
    paperUrl: "https://doi.org/10.1007/s10916-022-01870-8",
    codeUrl: "#"
  },
  {
    title: "Guest Editorial Multimodal Learning in Medical Imaging Informatics",
    authors: "KC Santosh, Sameer Antani",
    description: "The papers in this special section focus on multimodal learning in medical imaging informatics. Enormous amounts of health-related data are produced daily, such as those from personal devices, e.g., fitness trackers or mobile applications, ambient sensors, clinical data in electronic health records, pathology reports, lab results, medical images, voice recordings, etc.",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: "2023",
    paperUrl: "https://doi.org/10.1109/JBHI.2023.3241369",
    codeUrl: "#"
  },
  {
    title: "Cervical cancerous cell classification: opposition‑based harmony search for deep feature selection", 
    authors: "Nibaran Das, Bodhisatwa Mandal, KC Santosh, Linlin Shen, Sukanta Chakraborty",
    description: "Over 500K (per year) cervical cancer cases are reported with a high mortality rate (6–9%). We propose a tool that classifies cervical cancer cases from Pap smear cytology images using deep features. The proposed tool constitutes a Convolutional Neural Network (CNN) and a metaheuristic evolutionary algorithm called Opposition-based Harmony Search Algorithm (O-bHSA) for deep feature selection.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s13042-023-01872-z",
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
    title: "AI Tools for Assessing Human Fertility Using Risk Factors: A State‑of‑the‑Art Review",
    authors: "Debasmita GhoshRoy, P. A. Alvi, KC Santosh",
    description: "Infertility has massively disrupted social and marital life, resulting in stressful emotional well-being. Early diagnosis is the utmost need for faster adaption to respond to these changes, which makes possible via AI tools. We systematically reviewed 42 articles and performed a meta-analysis.",
    venue: "Journal of Medical Systems",
    year: "2023",
    paperUrl: "https://doi.org/10.1007/s10916-023-01983-8",
    codeUrl: "#"
  },
  {
    title: "Hybrid approach for text categorization: A case study with Bangla news article",
    authors: "Ankita Dhar, Himadri Mukherjee, Kaushik Roy, KC Santosh, Niladri Sekhar Dash",
    description: "The incredible expansion of online texts due to the Internet has intensified and revived the interest of sorting, managing and categorising the documents into their respective domains. This article presents a hybrid approach that works elegantly by combining text-based and graph-based features for Bangla text categorization.",
    venue: "Journal of Information Science",
    year: "2023",
    paperUrl: "https://doi.org/10.1177/01655515211027770",
    codeUrl: "#"
  },
  {
    title: "Enabling clustering algorithms to detect clusters of varying densities through scale-invariant data preprocessing",
    authors: "Sunil Aryal, Jonathan R. Wells, Arbind Agrahari Baniya, KC Santosh",
    description: "In this paper, we show that preprocessing data using a variant of rank transformation called 'Average Rank over an Ensemble of Sub-samples (ARES)' makes clustering algorithms robust to data representation and enable them to detect varying density clusters.",
    venue: "arXiv (CoRR)",
    year: "2024",
    paperUrl: "https://doi.org/10.48550/arXiv.2401.11402",
    codeUrl: "#"
  },
  {
    title: "Investigation of DNA discontinuity for detecting tuberculosis",
    authors: "Sonia Farhana Nimmy, Md. Golam Sarowar, Nilanjan Dey, Amira S. Ashour, KC Santosh",
    description: "Discontinuity in long Deoxyribonucleic Acid (DNA) sequences creates harmful diseases. This study developed an automated machine learning technique to assess the total number of such breaks in the long DNA sequences for tuberculosis detection.",
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    year: "2024",
    paperUrl: "https://doi.org/10.1007/s12652-018-0878-0",
    codeUrl: "#"
  },
  {
    title: "LIFA: Language identification from audio with LPCC-G features",
    authors: "Himadri Mukherjee, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Santanu Phadikar, Kaushik Roy, Umapada Pal",
    description: "In Western countries, speech recognition-based technologies have significantly developed compared to the countries of the South Asian subcontinent like India. We propose LIFA: Language Identification From Audio - a fully automated tool that can identify the spoken language from the top-11 spoken languages in India.",
    venue: "Multimedia Tools and Applications",
    year: "2024",
    paperUrl: "https://doi.org/10.1007/s11042-023-17782-9",
    codeUrl: "#"
  },
  {
    title: "Leveraging Sampling Schemes on Skewed Class Distribution to Enhance Male Fertility Detection with Ensemble AI Learners",
    authors: "Debasmita GhoshRoy, P. A. Alvi, KC Santosh",
    description: "Designing effective AI models becomes a challenge when dealing with imbalanced/skewed class distributions in datasets. In this investigation, we delve into the male fertility dataset, exploring 14 re-sampling approaches to understand their impact on enhancing predictive model performance.",
    venue: "International Journal of Pattern Recognition and Artificial Intelligence",
    year: "2024",
    paperUrl: "https://doi.org/10.1142/S0218001424510030",
    codeUrl: "#"
  },
  {
    title: "Shallow Convolutional Neural Network for COVID-19 Outbreak Screening Using Chest X-rays",
    authors: "Himadri Mukherjee, Subhankar Ghosh, Ankita Dhar, Sk Md Obaidullah, KC Santosh, Kaushik Roy",
    description: "Among radiological imaging data, Chest X-rays (CXRs) are of great use in observing COVID-19 manifestations. We proposed a light-weight Convolutional Neural Network (CNN)-tailored shallow architecture that can automatically detect COVID-19-positive cases using CXRs, with no false negatives.",
    venue: "Cognitive Computation",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s12559-020-09795-9",
    codeUrl: "#"
  },
  {
    title: "Covid-19 Imaging Tools: How Big Data is Big?",
    authors: "KC Santosh, Sourodip Ghosh",
    description: "In this paper, considering year 2020 and Covid-19, we analyze medical imaging tools and their performance scores in accordance with the dataset size and their complexity. We elaborate on their strengths and weaknesses by taking important factors into account.",
    venue: "Journal of Medical Systems, Springer",
    year: "2021",
    paperUrl: "https://doi.org/10.1007/s10916-021-01707-2",
    codeUrl: "#"
  },
  {
    title: "SegFast‑V2: Semantic image segmentation with less parameters in deep learning for autonomous driving",
    authors: "Swarnendu Ghosh, Anisha Pal, Shourya Jaiswal, KC Santosh, Nibaran Das, Mita Nasipuri",
    description: "Semantic image segmentation can be used in various driving applications, such as automatic braking, road sign alerts, park assists, and pedestrian warnings. The key contribution of this work is to promote the possibility of compact semantic image segmentation for deployment in less expensive vehicles.",
    venue: "International Journal of Machine Learning and Cybernetics",
    year: "2019",
    paperUrl: "https://doi.org/10.1007/s13042-019-01005-5",
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
