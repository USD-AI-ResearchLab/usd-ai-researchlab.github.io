export interface SamplePublication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  note?: string; // e.g. "revision 2", "major revision", "under review"
  linkUrl?: string;
  linkLabel?: string; // "DOI", "arXiv", "URL"
}

export interface YearSection {
  year: string;
  summary?: string; // e.g. "10 journal articles, 0 book chapters and 19 conference proceedings"
  publications: SamplePublication[];
  conferenceProceedings?: string;
  bookChapters?: string;
}

// --- Few Samples (highlight papers) ---
export const FEW_SAMPLES: SamplePublication[] = [
  {
    authors: "C Wall, L Wang, R Rizk, KC Santosh",
    title: "Winsor-CAM: Human-Tunable Visual Explanations from Deep Networks via Layer-Wise Winsorization",
    venue: "IEEE Transactions on Pattern Analysis & Machine Intelligence",
    year: "2026",
    linkUrl: "https://arxiv.org/abs/2507.10846",
    linkLabel: "arXiv"
  },
  {
    authors: "A Jain, SR Dubey, SK Singh, KC Santosh, BB Chaudhuri",
    title: "Non-Uniform Illumination Attack for Fooling Convolutional Neural Networks",
    venue: "IEEE Transactions on Artificial Intelligence",
    year: "2025",
    linkUrl: "https://doi.org/10.1109/TAI.2025.3549396",
    linkLabel: "DOI"
  },
  {
    authors: "L Wang, I Uddin, KC Santosh",
    title: "Expert-Guided Explainable Few-Shot Learning with Active Sample Selection for Medical Image Analysis",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: "2025"
  },
  {
    authors: "A Vettoruzzo, MR Bouguelia, J Vanschoren, T Rognvaldsson, KC Santosh",
    title: "Advances and Challenges in Meta-Learning: A Technical Review",
    venue: "IEEE Transactions on Pattern Analysis & Machine Intelligence",
    year: "2024",
    linkUrl: "https://doi.org/10.1109/TPAMI.2024.3361491",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh and S. Antani",
    title: "Multimodal Learning in Medical Imaging and Informatics",
    venue: "IEEE Journal of Biomedical & Health Informatics",
    year: "2023",
    linkUrl: "https://doi.org/10.1109/JBHI.2023.3241369",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh, S Ghosh, D GhoshRoy",
    title: "Deep Learning for Covid-19 Screening using Chest X-rays in 2020: A Systematic Review",
    venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
    year: "2022",
    linkUrl: "https://doi.org/10.1142/S0218001422500434",
    linkLabel: "DOI"
  },
  {
    authors: "Md S Kamal, L Chowdhury, S Hasan, N Dey, and KC Santosh",
    title: "Explainable AI for Glaucoma Prediction Analysis to Understand Risk Factors in Treatment Planning",
    venue: "IEEE Transactions on Instrumentation & Measurement",
    year: "2022",
    linkUrl: "https://doi.org/10.1109/TIM.2022.3187700",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh, S Allu, S Rajaraman, S Antani",
    title: "Advances in Deep Learning for Tuberculosis Screening using Chest X-rays: The last 5-Year Systematic Review",
    venue: "Journal of Medical Systems, Springer",
    year: "2022",
    linkUrl: "https://doi.org/10.1007/s10916-022-01870-8",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh and S Ghosh",
    title: "Covid-19 versus Lung Cancer: Understanding chest CT images through Deep Ensemble Neural Networks",
    venue: "International Journal of Artificial Intelligence Tools, World Scientific",
    year: "2022",
    linkUrl: "https://doi.org/10.1142/S021821302250049X",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh and S Ghosh",
    title: "Covid-19 medical imaging tools: how big data is big?",
    venue: "Journal of Medical Systems, Springer",
    year: "2021",
    linkUrl: "https://doi.org/10.1007/s10916-021-01747-2",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh",
    title: "COVID-19 Prediction Models and Unexploited Data",
    venue: "Journal of Medical Systems, Springer",
    year: "2020",
    linkUrl: "https://doi.org/10.1007/s10916-020-01645-z",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh",
    title: "AI-driven tools for coronavirus outbreak: Need of active learning and cross-population train/test models on multitudinal/multimodal data",
    venue: "Journal of Medical Systems, Springer",
    year: "2020",
    linkUrl: "https://doi.org/10.1007/s10916-020-01562-1",
    linkLabel: "DOI"
  },
  {
    authors: "S Ghosh, A Pal, S Jaiswal, KC Santosh, N Das, M Nassipuri",
    title: "segFast-02: Semantic-based image segmentation using encoder-decoder compression architecture",
    venue: "International Journal of Machine Learning & Cybernetics, Springer",
    year: "2019",
    linkUrl: "https://doi.org/10.1007/s13042-019-01005-5",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh and L Wendling",
    title: "Angular relational signature-based chest radiograph image view classification",
    venue: "Medical & Biological Engineering & Computing, Springer",
    year: "2018",
    linkUrl: "https://doi.org/10.1007/s11517-018-1786-3",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh and S Antani",
    title: "Automated chest X-ray screening: can lung section symmetry help detect pulmonary abnormalities?",
    venue: "IEEE Transactions on Medical Imaging",
    year: "2018",
    linkUrl: "https://doi.org/10.1109/TMI.2017.2775636",
    linkLabel: "DOI"
  },
  {
    authors: "KC Santosh and P Roy",
    title: "Arrow detection in biomedical images using sequential classifier",
    venue: "International Journal of Machine Learning & Cybernetics, Springer",
    year: "2018",
    linkUrl: "https://doi.org/10.1007/s13042-016-0623-y",
    linkLabel: "DOI"
  },
  {
    authors: "M Bouguelia, S Nowaczyk, KC Santosh, Antanas Verikas",
    title: "Agreeing to disagree: active learning with noisy labels without crowdsourcing",
    venue: "International Journal of Machine Learning & Cybernetics, Springer",
    year: "2018"
  },
  {
    authors: "KC Santosh, L Wendling, S Antani, G Thoma",
    title: "Overlaid Arrow Detection for Labeling Biomedical Image Regions",
    venue: "IEEE Intelligent Systems (special issue: Pattern Recognition)",
    year: "2016",
    linkUrl: "https://doi.org/10.1109/MIS.2016.24",
    linkLabel: "URL"
  },
  {
    authors: "KC Santosh",
    title: "g-DICE: Graph mining-based Document Information Content Exploitation",
    venue: "International Journal on Document Analysis and Recognition, Springer",
    year: "2015",
    linkUrl: "https://doi.org/10.1007/s10032-015-0253-z",
    linkLabel: "DOI"
  }
];

// --- Year-by-year sections ---
export const PUBLICATIONS_BY_YEAR: YearSection[] = [
  {
    year: "2025",
    summary: "10 journal articles, 0 book chapters and 19 conference proceedings",
    publications: [
      {
        authors: "C Wall, L Wang, R Rizk, KC Santosh",
        title: "Winsor-CAM: Human-Tunable Visual Explanations from Deep Networks via Layer-Wise Winsorization",
        venue: "IEEE Transactions on Pattern Analysis & Machine Intelligence",
        year: "2025",
        note: "revision 2",
        linkUrl: "https://arxiv.org/abs/2507.10846",
        linkLabel: "arXiv"
      },
      {
        authors: "H Wang, X Xiong, M Lan, Y Chu, Z Jiang, KC Santosh, S Wang, R Zhong",
        title: "PC-SNN: Predictive Coding-based Local Hebbian Plasticity Learning in Spiking Neural Networks",
        venue: "Neurocomputing",
        year: "2025",
        note: "major revision",
        linkUrl: "https://arxiv.org/abs/2309.01807",
        linkLabel: "arXiv"
      },
      {
        authors: "NR Rasmussen, R Rizk, L Wang, KC Santosh",
        title: "Ecologically Valid Benchmarking and Adaptive Attention: Scalable Marine Bioacoustic Monitoring",
        venue: "IEEE Transactions on Artificial Intelligence",
        year: "2025",
        note: "under review",
        linkUrl: "https://arxiv.org/abs/2405.02327",
        linkLabel: "arXiv"
      },
      {
        authors: "Shomoita Jahid Mitin, Rodrigue Rizk, Maximilian Scherer, Thomas Koeglsperger, Daniel Lench, KC Santosh, Arun Singh",
        title: "Bi-cephalic self-attended model to classify Parkinson\u2019s disease patients with freezing of gait",
        venue: "European Journal of Neuroscience",
        year: "2025",
        note: "minor revision",
        linkUrl: "https://arxiv.org/abs/2409.07703",
        linkLabel: "arXiv"
      },
      {
        authors: "L Wang, I Uddin, KC Santosh",
        title: "Expert-Guided Explainable Few-Shot Learning with Active Sample Selection for Medical Image Analysis",
        venue: "IEEE Journal of Biomedical and Health Informatics",
        year: "2025"
      },
      {
        authors: "Shotabdi Roy, Joseph Nuamah, Taylor J Bosch, Richa Barsainya, Maximilian Scherer, Thomas Koeglsperger, KC Santosh, Arun Singh",
        title: "EEG-Based Classification of Parkinson\u2019s Disease With Freezing of Gait Using Midfrontal Beta Oscillations",
        venue: "Journal of Integrative Neuroscience",
        year: "2025",
        linkUrl: "https://doi.org/10.31083/JIN39023",
        linkLabel: "DOI"
      },
      {
        authors: "A Jain, SR Dubey, SK Singh, KC Santosh, BB Chaudhuri",
        title: "Non-Uniform Illumination Attack for Fooling Convolutional Neural Networks",
        venue: "IEEE Transactions on Artificial Intelligence",
        year: "2025",
        linkUrl: "https://doi.org/10.1109/TAI.2025.3549396",
        linkLabel: "DOI"
      },
      {
        authors: "A Goenka, S Mitra, KC Santosh, M Naskar, N Das",
        title: "An algorithmic approach to construct the library of universal logic gates beyond NAND and NOR",
        venue: "Integration, Elsevier",
        year: "2025",
        linkUrl: "https://www.sciencedirect.com/science/article/pii/S0167926025001713",
        linkLabel: "URL"
      },
      {
        authors: "J Dhar, M Haghighat, N Zaidi, F Sohel, B-Q Vo, KC Santosh",
        title: "Towards Building Robust Models for Unimodal and Multimodal Medical Imaging Data",
        venue: "Information Fusion, Elsevier",
        year: "2025",
        linkUrl: "https://www.sciencedirect.com/science/article/pii/S156625352500884X",
        linkLabel: "URL"
      },
      {
        authors: "Mohammed A Chowdhury, Rodrigue Rizk, Conroy Chiu, Jing J Zhang, Jamie L Scholl, Taylor J Bosch, Arun Singh, Lee A Baugh, Jeffrey S McGough, KC Santosh, William CW Chen",
        title: "The heart of transformation: exploring artificial intelligence in cardiovascular disease",
        venue: "Biomedicines",
        year: "2025",
        linkUrl: "https://doi.org/10.3390/biomedicines13010102",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "ICDM (1), NeurIPS (1), MICCAI (1), ICIP (1), AAAI (2), IEEE COgMI (1, invited paper - vision), ISPR (1, best paper award), IHCI (1, best paper award), IEEE ISBI (1), IEEE CAI (5, best paper award(1)), RTIP2R (4, best paper award (1))"
  },
  {
    year: "2024",
    summary: "2 journal articles, 0 book chapters and 13 conference proceedings",
    publications: [
      {
        authors: "A Vettoruzzo, MR Bouguelia, J Vanschoren, T Rognvaldsson, KC Santosh",
        title: "Advances and Challenges in Meta-Learning: A Technical Review",
        venue: "IEEE Transactions on Pattern Analysis & Machine Intelligence",
        year: "2024",
        linkUrl: "https://doi.org/10.1109/TPAMI.2024.3361491",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, A Dhar, Sk Md Obaidullah, KC Santosh, S Phadikar, K Roy, U Pal",
        title: "LIFA: Language Identification From Audio with LPCC-G Features",
        venue: "Multimedia Tools & Applications, Springer",
        year: "2024",
        linkUrl: "https://doi.org/10.1007/s11042-023-17782-9",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "IEEE CAI (3), IEEE CogMI (1), CIPR (3), RTIP2R (2, best paper award (1)), CVMI (3), DAL (2)"
  },
  {
    year: "2023",
    summary: "9 journal articles, 0 book chapters and 7 conference proceedings",
    publications: [
      {
        authors: "KC Santosh and S. Antani",
        title: "Multimodal Learning in Medical Imaging and Informatics",
        venue: "IEEE Journal of Biomedical & Health Informatics",
        year: "2023",
        linkUrl: "https://doi.org/10.1109/JBHI.2023.3241369",
        linkLabel: "DOI"
      },
      {
        authors: "D GhoshRoy, PA Alvi, KC Santosh",
        title: "Leveraging sampling schemes on skewed class distribution to enhance male fertility detection with ensemble AI learners",
        venue: "International Journal of Artificial Intelligence Tools, World Scientific",
        year: "2023",
        linkUrl: "https://doi.org/10.1142/S0218001424510030",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, D GhoshRoy, S Nakarmi",
        title: "A Systematic Review on Deep Structured Learning for COVID-19 Screening Using Chest CT from 2020 to 2022",
        venue: "Healthcare, MDPI",
        year: "2023",
        linkUrl: "https://doi.org/10.3390/healthcare11050683",
        linkLabel: "DOI"
      },
      {
        authors: "D GhoshRoy, PA Alvi, and KC Santosh",
        title: "Unboxing industry-standard AI models for male fertility prediction with SHAP",
        venue: "Healthcare, MDPI",
        year: "2023",
        linkUrl: "https://doi.org/10.3390/healthcare11020187",
        linkLabel: "DOI"
      },
      {
        authors: "A Makkar and KC Santosh",
        title: "SecureFed: Federated learning empowered medical imaging technique to analyze lung abnormalities in chest x-rays",
        venue: "International Journal of Machine Learning and Cybernetics, Springer",
        year: "2023",
        linkUrl: "https://doi.org/10.1007/s13042-023-01789-7",
        linkLabel: "DOI"
      },
      {
        authors: "N Das, KC Santosh, L Shen, S Chakraborty",
        title: "Cervical Cancerous Cell Classification: Opposition-based Harmony Search for Deep Feature Selection",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2023",
        linkUrl: "https://doi.org/10.1007/s13042-023-01872-z",
        linkLabel: "DOI"
      },
      {
        authors: "D GhoshRoy, PA Alvi, and KC Santosh",
        title: "AI Tools for Assessing Human Fertility using Risk Factors: A State-of-the-Art Review",
        venue: "Journal of Medical Systems, Springer",
        year: "2023",
        linkUrl: "https://doi.org/10.1007/s10916-023-01983-8",
        linkLabel: "DOI"
      },
      {
        authors: "S Roy and KC Santosh",
        title: "Analyzing Non-biological Foreign Objects in Chest X-rays \u2013 Clinical Significance and AI tools",
        venue: "Healthcare, MDPI",
        year: "2023",
        linkUrl: "https://doi.org/10.3390/healthcare11030384",
        linkLabel: "DOI"
      },
      {
        authors: "D GhoshRoy, PA Alvi, and KC Santosh",
        title: "eXplainable AI to predict male fertility using extreme gradient boosting algorithm with SMOTE",
        venue: "Electronics, MDPI",
        year: "2023",
        linkUrl: "https://doi.org/10.3390/electronics12030540",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "IEEE CAI (4), RTIP2R (3)"
  },
  {
    year: "2022",
    summary: "10 journal articles, 0 book chapters and 10 conference proceedings",
    publications: [
      {
        authors: "T Ghosh, S Sen, Sk Md Obaidullah, KC Santosh, K Roy, and U Pal",
        title: "Advances in Online Handwritten Recognition in the last decades",
        venue: "Computer Science Review, Elsevier",
        year: "2022",
        linkUrl: "https://doi.org/10.1016/j.cosrev.2022.100515",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, S Allu, S Rajaraman, S Antani",
        title: "Advances in Deep Learning for Tuberculosis Screening using Chest X-rays: The last 5-Year Systematic Review",
        venue: "Journal of Medical Systems, Springer",
        year: "2022",
        linkUrl: "https://doi.org/10.1007/s10916-022-01870-8",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh and S Ghosh",
        title: "Covid-19 versus Lung Cancer: Understanding chest CT images through Deep Ensemble Neural Networks",
        venue: "International Journal of Artificial Intelligence Tools, World Scientific",
        year: "2022",
        linkUrl: "https://doi.org/10.1142/S021821302250049X",
        linkLabel: "DOI"
      },
      {
        authors: "S Raman, V Gupta, P Nagrath, and KC Santosh",
        title: "Hate and aggression analysis in NLP using interpretable AI",
        venue: "International Journal of Pattern Recognition and Artificial Intelligence, World Scientific",
        year: "2022"
      },
      {
        authors: "KC Santosh, N Rasmussen, M Mamun, S Aryal",
        title: "A systematic review on cough sound analysis for Covid-19 diagnosis and screening: is my cough sound COVID-19?",
        venue: "PeerJ Computer Science",
        year: "2022",
        linkUrl: "https://doi.org/10.7717/peerj-cs.958",
        linkLabel: "DOI"
      },
      {
        authors: "F Alenezi, A Armghan, KC Santosh",
        title: "Underwater image dehazing using global color features",
        venue: "Engineering Applications of Artificial Intelligence, Elsevier",
        year: "2022",
        linkUrl: "https://doi.org/10.1016/j.engappai.2021.104534",
        linkLabel: "DOI"
      },
      {
        authors: "Md S Kamal, L Chowdhury, S Hasan, N Dey, and KC Santosh",
        title: "Explainable AI for Glaucoma Prediction Analysis to Understand Risk Factors in Treatment Planning",
        venue: "IEEE Transactions on Instrumentation & Measurement",
        year: "2022",
        linkUrl: "https://doi.org/10.1109/TIM.2022.3187700",
        linkLabel: "DOI"
      },
      {
        authors: "S Pandey, V Chouhan, D Verma, S Rajrah, R Saini, and KC Santosh",
        title: "Do-It-Yourself Recommender System: Reusing and Recycling with Blockchain and Deep Learning",
        venue: "IEEE Access",
        year: "2022",
        linkUrl: "https://ieeexplore.ieee.org/document/9864188",
        linkLabel: "URL"
      },
      {
        authors: "KC Santosh, S Ghosh, D GhoshRoy",
        title: "Deep Learning for Covid-19 Screening using Chest X-rays in 2020: A Systematic Review",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2022",
        linkUrl: "https://doi.org/10.1142/S0218001422500434",
        linkLabel: "DOI"
      },
      {
        authors: "Md Kawsher, M Biswas, L Gaur, F Alenezi, and KC Santosh",
        title: "Deep Features to Detect Pulmonary Abnormalities in Chest X-rays due to Infectious Disease: Covid-19, Pneumonia, and Tuberculosis",
        venue: "Information Sciences, Elsevier",
        year: "2022",
        linkUrl: "https://doi.org/10.1016/j.ins.2022.01.062",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "IEEE CBMS (2), IEEE CVMI (1), RTIP2R (7)"
  },
  {
    year: "2021",
    summary: "17 journal articles, 0 book chapters and 18 conference proceedings",
    publications: [
      {
        authors: "TJ Bosch, R Barsainya, A Ridder, KC Santosh, and A Singh",
        title: "Interval timing and midfrontal delta oscillations are impaired in Parkinson\u2019s disease patients with freezing of gait",
        venue: "Journal of Neurology, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s00415-021-10843-9",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh",
        title: "Current Trends in Image Processing and Pattern Recognition",
        venue: "Frontiers in Robotics and AI",
        year: "2021",
        linkUrl: "https://doi.org/10.3389/frobt.2021.785075",
        linkLabel: "DOI"
      },
      {
        authors: "V Gupta, KC Santosh, R Arora, T Ciano, KS Kalid, S Mohan",
        title: "Socioeconomic impact due to COVID-19: An empirical assessment",
        venue: "Information Processing and Management, Elsevier",
        year: "2021",
        linkUrl: "https://doi.org/10.1016/j.ipm.2021.102810",
        linkLabel: "DOI"
      },
      {
        authors: "S Majumder, S Chowdhury, N Dey, and KC Santosh",
        title: "Balance Your Work-Life: Personal Interactive Web-Interface",
        venue: "International Journal Of Interactive Multimedia And Artificial Intelligence",
        year: "2021",
        linkUrl: "https://doi.org/10.9781/ijimai.2021.08.014",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh and S Ghosh",
        title: "Covid-19 medical imaging tools: how big data is big?",
        venue: "Journal of Medical Systems, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s10916-021-01747-2",
        linkLabel: "DOI"
      },
      {
        authors: "J-C Burie, A Forn\u00e9s, KC Santosh, and MM Luqman",
        title: "Deep learning for graphics recognition: document understanding and beyond",
        venue: "International Journal of Document Analysis and Recognition",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s10032-021-00372-6",
        linkLabel: "DOI"
      },
      {
        authors: "A Koilada, N Das, KC Santosh",
        title: "Cervical Cancerous Cell Classification: Opposition-based Harmony Search for Deep Features Selection",
        venue: "Engineering Applications of Artificial Intelligence, Elsevier",
        year: "2021",
        linkUrl: "https://doi.org/10.1016/j.engappai.2021.104447",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, H Salam, KC Santosh",
        title: "Lung Health Analysis: Adventitious Respiratory Sound Classification Using Filterbank Energies",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2021",
        linkUrl: "https://doi.org/10.1142/S0218001421570068",
        linkLabel: "DOI"
      },
      {
        authors: "S Ghosh, A Chaki, KC Santosh",
        title: "Improved U-Net architecture with VGG-16 for brain tumor segmentation",
        venue: "Physical and Engineering Sciences in Medicine, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s13246-021-01019-w",
        linkLabel: "DOI"
      },
      {
        authors: "P Pirasteh, MR Bouguelia, KC Santosh",
        title: "Personalized Recommendation: An Enhanced Hybrid Collaborative Filtering",
        venue: "Advances in Computational Intelligence, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s43674-021-00001-z",
        linkLabel: "DOI"
      },
      {
        authors: "N Jain, V Gupta, KC Santosh",
        title: "Understanding Cartoon Emotion using Integrated Deep Neural Network on Large Dataset",
        venue: "Neural Computing and Applications, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s00521-021-06003-9",
        linkLabel: "DOI"
      },
      {
        authors: "M Ghosh, H Mukherjee, Obaidullah Sk, KC Santosh, N Das, Kaushik Roy",
        title: "LWSINet: A deep learning-based approach towards video script identification",
        venue: "Multimedia Tools and Applications, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s11042-021-11103-8",
        linkLabel: "DOI"
      },
      {
        authors: "M Ghosh, S Roy, H Mukherjee, Sk Md Obaidullah, KC Santosh, K Roy",
        title: "Understanding movie poster: Transfer-deep learning approach for graphic-rich text recognition",
        venue: "The Visual Computer, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s00371-021-02094-6",
        linkLabel: "DOI"
      },
      {
        authors: "Md N Yousuf Ali, Md L Rahman, J Chaki, N Dey, KC Santosh",
        title: "Machine Translation using Deep Learning for Universal Networking Language based on their Structure",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s13042-020-01235-y",
        linkLabel: "DOI"
      },
      {
        authors: "F Alenezi, KC Santosh",
        title: "Geometric Regularized Hopfield Neural Network for Medical Image Enhancement",
        venue: "International Journal of Biomedical Imaging",
        year: "2021",
        linkUrl: "https://doi.org/10.1155/2021/6664569",
        linkLabel: "DOI"
      },
      {
        authors: "S Ghosh, A Bandyopadhyay, S Sahay, R Ghosh, I Kundu, KC Santosh",
        title: "Colorectal Histology Tumor Detection using Ensemble Deep Neural Network",
        venue: "Engineering Applications of Artificial Intelligence, Elsevier",
        year: "2021",
        linkUrl: "https://doi.org/10.1016/j.engappai.2021.104437",
        linkLabel: "DOI"
      },
      {
        authors: "D Ruikar, KC Santosh, R Hegadi, L Rupnar, V Chaudhary",
        title: "5K+ CT Images on Fractured Limbs: A Dataset for Medical Imaging Research",
        venue: "Journal of Medical Systems, Springer",
        year: "2021",
        linkUrl: "https://doi.org/10.1007/s10916-021-01733-8",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "CCIB(1), IEEE CBMS(4), IJCNN (1), AMLDA(1), and RTIP2R(11)"
  },
  {
    year: "2020",
    summary: "18 journal articles, 2 book chapters and 14 conference proceedings",
    publications: [
      {
        authors: "B Cankaya, B Eren Tokgoz, A Dag, and KC Santosh",
        title: "Development of a Machine-Learning-Based Decision Support Mechanism for Predicting Chemical Tanker Cleaning Activity",
        venue: "Journal of Modelling in Management",
        year: "2020"
      },
      {
        authors: "H Mukherjee, P Sreerama, K Roy, Z Temesgen, and KC Santosh",
        title: "Automatic lung health screening using respiratory sounds",
        venue: "Journal of Medical Systems, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s10916-020-01681-9",
        linkLabel: "DOI"
      },
      {
        authors: "A Maiti, B Chaterjee, and KC Santosh",
        title: "Skin Cancer Classification through Quantized color features and Generative Adversarial Network",
        venue: "International Journal of Ambient Computing and Intelligence",
        year: "2020"
      },
      {
        authors: "H Mukherjee, A Dhar, Sk Obaidullah, KC Santosh, S Phadikar, Kaushik Roy",
        title: "Identifying Language from Songs",
        venue: "Multimedia Tools and Applications, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s11042-020-10163-6",
        linkLabel: "DOI"
      },
      {
        authors: "A Banerjee, N Das, and KC Santosh",
        title: "Weber Local Descriptor for Image Analysis and Recognition: A Review",
        venue: "The Visual Computer, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s00371-020-02017-x",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, S Ghosh, A Dhar, Sk Obaidullah, KC Santosh, K Roy",
        title: "Shallow Convolutional Neural Networks for COVID-19 Outbreak Screening using Chest X-rays",
        venue: "Cognitive Computation, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s12559-020-09775-9",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, S Ghosh, A Dhar, Sk Obaidullah, KC Santosh, K Roy",
        title: "Deep Neural Network to Detect COVID-19: One Architecture for both Chest X-rays and CT Scans",
        venue: "Applied Intelligence, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s10489-020-01943-6",
        linkLabel: "DOI"
      },
      {
        authors: "HR Bhapkar, P Mahalle, N Dey, KC Santosh",
        title: "Revisited COVID-19 mortality and recovery rates: are we missing recovery time period?",
        venue: "Journal of Medical Systems, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s10916-020-01668-6",
        linkLabel: "DOI"
      },
      {
        authors: "S Aryal, KC Santosh, R Dazeley",
        title: "usfAD: A robust unsupervised stochastic forest-based anomaly detector",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s13042-020-01225-0",
        linkLabel: "DOI"
      },
      {
        authors: "N Dey, KC Santosh",
        title: "COVID-19: Psychological and Psychosocial Impact, Fear, and Passion",
        venue: "Digital Government: Research and Practice, ACM",
        year: "2020",
        linkUrl: "https://doi.org/10.1145/3428093",
        linkLabel: "DOI"
      },
      {
        authors: "S Mitra, KC Santosh, MK Naskar",
        title: "Niblack Binarization on Document Images: Area Efficient, Low Cost, and Noise Tolerant Stochastic Architecture",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2020",
        linkUrl: "https://doi.org/10.1142/S0218001420530043",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh",
        title: "COVID-19 Prediction Models and Unexploited Data",
        venue: "Journal of Medical Systems, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s10916-020-01645-z",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh",
        title: "AI-driven tools for coronavirus outbreak: Need of active learning and cross-population train/test models on multitudinal/multimodal data",
        venue: "Journal of Medical Systems, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s10916-020-01562-1",
        linkLabel: "DOI"
      },
      {
        authors: "D Das, KC Santosh, U Pal",
        title: "Truncated Inception Net: COVID-19 Outbreak Screening using Chest X-rays",
        venue: "Physical and Engineering Sciences in Medicine, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s13246-020-00888-x",
        linkLabel: "DOI"
      },
      {
        authors: "D Elliott, KC Santosh, C Anderson",
        title: "Gradient boosting in crowd ensembles for Q-learning using weight sharing",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s13042-020-01133-3",
        linkLabel: "DOI"
      },
      {
        authors: "S Das, Sk Md Obaidullah, KC Santosh, K Roy, C K Saha",
        title: "Cardiotocograph-based labor stage classification from uterine contraction pressure during ante-partum and intra-partum period \u2013 a fuzzy theoretic approach",
        venue: "Health Information Science and Systems, Springer",
        year: "2020",
        linkUrl: "https://doi.org/10.1007/s13755-020-00107-7",
        linkLabel: "DOI"
      },
      {
        authors: "R Guha, N Das, M Kundu, M Nasipuri, KC Santosh",
        title: "DevNet: an efficient CNN architecture for handwritten Devanagari character recognition",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2020",
        linkUrl: "https://doi.org/10.1142/S0218001420520096",
        linkLabel: "DOI"
      },
      {
        authors: "S Aryal, AA Baniya, KC Santosh",
        title: "A Novel Data Pre-processing Technique: Making Data Mining Robust to Different Units and Scales of Measurement",
        venue: "The Australian Journal of Intelligent Information Processing Systems",
        year: "2020"
      }
    ],
    conferenceProceedings: "ICPR (1), CBMS (5), and RTIP2R (7, best paper award (1)) CVIP(1)",
    bookChapters: "Medical imaging and COVID-19 (2)"
  },
  {
    year: "2019",
    summary: "11 journal articles, 6 book chapters and 27 conference proceedings",
    publications: [
      {
        authors: "S Ghosh, A Pal, S Jaiswal, KC Santosh, N Das, M Nassipuri",
        title: "segFast-02: Semantic-based image segmentation using encoder-decoder compression architecture",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s13042-019-01005-5",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, Sk Md Obaidullah, KC Santosh, S Phadikar, K Roy",
        title: "Deep learning for spoken language identification: Can we visualize speech signal patterns?",
        venue: "Neural Computing and Applications, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s00521-019-04468-3",
        linkLabel: "DOI"
      },
      {
        authors: "A Jagtap, RS Hegadi, KC Santosh",
        title: "Feature Learning for Offline Handwritten Signature Verification Using Convolutional Neural Network",
        venue: "International Journal of Technology and Human Interaction (IJTHI)",
        year: "2019",
        linkUrl: "https://doi.org/10.4018/IJTHI.2019100105",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, A Dhar, Sk Md Obaidullah, KC Santosh, S Phadikar, K Roy",
        title: "Linear predictive coefficients-based features and extreme learning machine for voice activity detection from audio signal",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2019",
        linkUrl: "https://doi.org/10.1142/S0218001419500174",
        linkLabel: "DOI"
      },
      {
        authors: "S Ukil, S Ghosh, Sk Md Obaidullah, KC Santosh, K Roy, N Das",
        title: "Improved word level handwritten Indic script identification through integrated small convolutional neural networks",
        venue: "Neural Computing and Applications, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s00521-019-04111-1",
        linkLabel: "DOI"
      },
      {
        authors: "D Ruikar, KC Santosh, RS Hegadi",
        title: "Automated fractured bone segmentation and labeling from CT images",
        venue: "Journal of Medical Systems, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s10916-019-1176-x",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, Sk Md Obaidullah, KC Santosh, S Phadikar, K Roy",
        title: "A lazy learning-based language identification from speech using MFCC-2 features",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s13042-019-00946-1",
        linkLabel: "DOI"
      },
      {
        authors: "R Saini, P Kumar, B Kaur, P P Roy, D P Dogra, KC Santosh",
        title: "Kinect sensor-based interaction monitoring system using the BLSTM neural network in healthcare",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s13042-018-0887-5",
        linkLabel: "DOI"
      },
      {
        authors: "S Vaidya, C Mouli, KC Santosh",
        title: "Imperceptible watermark for a game-theoretic watermarking system",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s13042-019-00960-3",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, KC Santosh, C Halder, N Das, K Roy",
        title: "Automatic Indic script identification from handwritten documents: page, block, line and word-level approach",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2019",
        linkUrl: "https://doi.org/10.1007/s13042-017-0702-8",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh",
        title: "Speech processing in healthcare: can we integrate?",
        venue: "Intelligent Speech Signal Processing, Elsevier Press",
        year: "2019",
        linkUrl: "https://www.sciencedirect.com/science/article/pii/B9780128181300000015",
        linkLabel: "URL"
      }
    ],
    conferenceProceedings: "PReMI (1), ICICC (2, best paper award(1)), GREC@ICDAR (2), ICCDC (2), CACCS (1), RTIP2R (15, best paper award(1)), and AISC (2)",
    bookChapters: "Medical Imaging (3) and Document processing (3)"
  },
  {
    year: "2018",
    summary: "14 journal articles, 0 book chapters and 6 conference proceedings",
    publications: [
      {
        authors: "KC Santosh and S Antani",
        title: "Automated chest X-ray screening: can lung section symmetry help detect pulmonary abnormalities?",
        venue: "IEEE Transactions on Medical Imaging",
        year: "2018",
        linkUrl: "https://doi.org/10.1109/TMI.2017.2775636",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh and L Wendling",
        title: "Angular relational signature-based chest radiograph image view classification",
        venue: "Medical & Biological Engineering & Computing, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s11517-018-1786-3",
        linkLabel: "DOI"
      },
      {
        authors: "S F Nimmy, G Sarowar, N Dey, A Ashour, KC Santosh",
        title: "Investigation of DNA discontinuity for detecting Tuberculosis",
        venue: "Journal of Ambient Intelligence and Humanized Computing, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s12652-018-0878-0",
        linkLabel: "DOI"
      },
      {
        authors: "D Ruikar, RS Hegadi, KC Santosh",
        title: "A Systematic Review on Orthopedic Simulators for Psycho-Motor Skill and Surgical Procedure Training",
        venue: "Journal of Medical Systems, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s10916-018-1019-1",
        linkLabel: "DOI"
      },
      {
        authors: "S Vajda, A Karagyris, S Jaeger, KC Santosh, S Candemir, Z Xue, S Antani, G Thoma",
        title: "Feature Selection for Automatic Tuberculosis Screening in Frontal Chest Radiographs",
        venue: "Journal of Medical Systems, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s10916-018-0991-9",
        linkLabel: "DOI"
      },
      {
        authors: "H Mukherjee, Sk Md Obaidullah, KC Santosh, S Phadikar, K Roy",
        title: "Line spectral frequency-based features and extreme learning machine for voice activity detection from audio signal",
        venue: "International Journal of Speech Technology, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s10772-018-9525-6",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, A Bose, H Mukherjee, KC Santosh, N Das, K Roy",
        title: "Extreme learning machine for handwritten Indic script identification in multi-script documents",
        venue: "Journal of Electronic Imaging, SPIE",
        year: "2018",
        linkUrl: "https://doi.org/10.1117/1.JEI.27.5.051214",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, C Halder, KC Santosh, N Das, K Roy",
        title: "Handwritten Indic script identification in multi-script document images: A survey",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2018",
        linkUrl: "https://doi.org/10.1142/S0218001418560037",
        linkLabel: "DOI"
      },
      {
        authors: "C Halder, Sk Md Obaidullah, KC Santosh, K Roy",
        title: "Content independent writer identification on Bangla script: A document level approach",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2018",
        linkUrl: "https://doi.org/10.1142/S0218001418560050",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, C Halder, KC Santosh, N Das, K Roy",
        title: "PHDIndic 11: Page-level handwritten document image dataset of 11 official Indic scripts for script identification",
        venue: "Multimedia Tools and Applications, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s11042-017-4373-y",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh",
        title: "Correspondence: Edge map analysis in chest X-rays for automatic pulmonary abnormality screening",
        venue: "Indian Journal of Tuberculosis, Elsevier",
        year: "2018",
        linkUrl: "https://doi.org/10.1016/j.ijtb.2017.08.031",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, N Das, KC Santosh, K Roy",
        title: "Automatic Line-Level Script Identification From Handwritten Document Images \u2013 A Region-Wise Classification Framework For Indian Subcontinent",
        venue: "Malaysian Journal of Computer Science",
        year: "2018",
        linkUrl: "https://mjir.um.edu.my/index.php/MJCS/article/view/10610",
        linkLabel: "URL"
      },
      {
        authors: "KC Santosh and P Roy",
        title: "Arrow detection in biomedical images using sequential classifier",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2018",
        linkUrl: "https://doi.org/10.1007/s13042-016-0623-y",
        linkLabel: "DOI"
      },
      {
        authors: "M Bouguelia, S Nowaczyk, KC Santosh, Antanas Verikas",
        title: "Agreeing to disagree: active learning with noisy labels without crowdsourcing",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2018"
      }
    ],
    conferenceProceedings: "SPIE Medical Imaging (1), ICRCICN (1), ICSKIMA (1), ICICBA (1), and AISC (3)"
  },
  {
    year: "2017",
    summary: "5 journal articles, 0 book chapters and 7 conference proceedings",
    publications: [
      {
        authors: "KC Santosh, A Aafaque, S Antani, G Thoma",
        title: "Line segment-based stitched multipanel figure separation for effective biomedical CBIR",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2017",
        linkUrl: "https://doi.org/10.1142/S0218001417570063",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh and S Vajda",
        title: "Automated chest X-ray screening: can edge map measure the evidence of pulmonary abnormalities?",
        venue: "Atlas of Science",
        year: "2017",
        linkUrl: "https://atlasofscience.org/automated-chest-x-ray-screening/",
        linkLabel: "URL"
      },
      {
        authors: "F Zohora and KC Santosh",
        title: "Foreign Circular Element Detection in Chest X-rays for Effective Automated Pulmonary Abnormality Screening",
        venue: "International Journal of Computer Vision and Image Processing",
        year: "2017",
        linkUrl: "https://doi.org/10.4018/IJCVIP.2017070102",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, KC Santosh, C Halder, N Das, K Roy",
        title: "Word-level Multi-script Indic Document Image Dataset and Baseline Results on Script Identification",
        venue: "International Journal of Computer Vision and Image Processing",
        year: "2017",
        linkUrl: "https://doi.org/10.4018/IJCVIP.2017040101",
        linkLabel: "DOI"
      },
      {
        authors: "Sk Md Obaidullah, C Goswami, KC Santosh, N Das, C Halder, K Roy",
        title: "Separating Indic scripts with mantra for effective handwritten script identification in multiscript documents",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2017",
        linkUrl: "https://www.worldscientific.com/doi/abs/10.1142/S021800141753001X",
        linkLabel: "URL"
      }
    ],
    conferenceProceedings: "RTIP2R (7, best paper award (1))"
  },
  {
    year: "2016",
    summary: "4 journal articles, 0 book chapters and 3 conference proceedings",
    publications: [
      {
        authors: "KC Santosh, S Vajda, S Antani, G Thoma",
        title: "Edge map analysis in Chest X-rays for Automatic Abnormality Screening",
        venue: "International Journal of Computer Assisted Radiology & Surgery, Springer",
        year: "2016",
        linkUrl: "https://doi.org/10.1007/s11548-016-1359-6",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, N Alam, P Roy, L Wendling, S Antani, G Thoma",
        title: "A Simple and Efficient Arrowhead Detection in Biomedical Images",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2016",
        linkUrl: "https://doi.org/10.1142/S0218001416600065",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, L Wendling, S Antani, G Thoma",
        title: "Overlaid Arrow Detection for Labeling Biomedical Image Regions",
        venue: "IEEE Intelligent Systems (special issue: Pattern Recognition)",
        year: "2016",
        linkUrl: "https://doi.org/10.1109/MIS.2016.24",
        linkLabel: "URL"
      },
      {
        authors: "A Karargyris, J Siegelman, D Tzortzis, S Jaeger, S Candemir, Z Xue, KC Santosh, S Vajda, S Antani, L Folio, G Thoma",
        title: "Combination of texture and shape features to detect Tuberculosis in digital chest X-rays",
        venue: "International Journal of Computer Assisted Radiology & Surgery, Springer",
        year: "2016",
        linkUrl: "https://doi.org/10.1007/s11548-015-1242-x",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "DRR (1), CVIP (1), and ICISO (1)"
  },
  {
    year: "2015",
    summary: "5 journal articles, 0 book chapters and 3 conference proceedings",
    publications: [
      {
        authors: "KC Santosh",
        title: "g-DICE: Graph mining-based Document Information Content Exploitation",
        venue: "International Journal on Document Analysis and Recognition, Springer",
        year: "2015",
        linkUrl: "https://doi.org/10.1007/s10032-015-0253-z",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, S Candemir, S Jaeger, S Antani, G Thoma, L Folio",
        title: "Automatically Detecting Rotation in Chest Radiographs using Principal Rib-Orientation Measure for Quality Control",
        venue: "International Journal of Pattern Recognition & Artificial Intelligence, World Scientific",
        year: "2015",
        linkUrl: "https://doi.org/10.1142/S0218001415570013",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, L Wendling",
        title: "Character recognition based on Multi-projection Non-linear Profiles Measure",
        venue: "Frontiers of Computer Science, Springer",
        year: "2015",
        linkUrl: "https://doi.org/10.1007/s11704-015-3400-2",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, L Wendling",
        title: "Graphical Symbol Recognition",
        venue: "Wiley Encyclopedia of Electrical and Electronics Engineering",
        year: "2015",
        linkUrl: "https://doi.org/10.1002/047134608X.W8260",
        linkLabel: "DOI"
      },
      {
        authors: "S Candemir, E Borovikov, KC Santosh, S Antani, G Thoma",
        title: "RSILC: Rotation and Scale Invariant, Line Colour aware Descriptor",
        venue: "Image and Vision Computing",
        year: "2015",
        linkUrl: "https://doi.org/10.1016/j.imavis.2014.12.005",
        linkLabel: "DOI"
      },
      {
        authors: "E Philippot, KC Santosh, A Bela\u00efd, Y Bela\u00efd",
        title: "Bayesian Networks for Incomplete Data Analysis in Form Processing",
        venue: "International Journal of Machine Learning & Cybernetics, Springer",
        year: "2015",
        linkUrl: "https://doi.org/10.1007/s13042-014-0234-4",
        linkLabel: "DOI"
      }
    ],
    conferenceProceedings: "ImageCLEF (1) and IEEE CBMS (2)"
  },
  {
    year: "2005\u20132014",
    summary: "5 journal articles, 0 book chapters and 3 conference proceedings",
    publications: [
      {
        authors: "KC Santosh, L Wendling, B Lamiroy",
        title: "BoR: Bags-of-Relations for Symbol Retrieval",
        venue: "International Journal of Pattern Recognition and Artificial Intelligence, World Scientific",
        year: "2014",
        linkUrl: "https://doi.org/10.1142/S0218001414500177",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, B Lamiroy, L Wendling",
        title: "Integrating Vocabulary Clustering with Spatial Relations for Symbol Recognition",
        venue: "International Journal of Document Analysis and Application, Springer",
        year: "2014",
        linkUrl: "https://doi.org/10.1007/s10032-013-0205-4",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, L Wendling, B Lamiroy",
        title: "DTW\u2013Radon Shape Descriptor for Pattern Recognition",
        venue: "International Journal of Pattern Recognition and Artificial Intelligence, World Scientific",
        year: "2013",
        linkUrl: "https://doi.org/10.1142/S0218001413500134",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, C Nattee, B Lamiroy",
        title: "Relative Positioning of Stroke Based Clustering: A New Approach to On-line Handwritten Devanagari Character Recognition",
        venue: "International Journal of Image & Graphics (IJIG), World Scientific",
        year: "2012",
        linkUrl: "https://doi.org/10.1142/S0219467812500052",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh, B Lamiroy, L Wendling",
        title: "Symbol Recognition using Spatial Relations",
        venue: "Pattern Recognition Letters (PRL), Elsevier",
        year: "2012",
        linkUrl: "https://doi.org/10.1016/j.patrec.2011.09.015",
        linkLabel: "DOI"
      },
      {
        authors: "KC Santosh",
        title: "Use of Dynamic Time Warping for Object Shape Classification through Signature",
        venue: "Kathmandu University Journal of Science, Engineering and Technology",
        year: "2010",
        linkUrl: "https://doi.org/10.3126/kuset.v6i1.3315",
        linkLabel: "URL"
      },
      {
        authors: "KC Santosh, C Nattee",
        title: "A Comprehensive Survey on On-line Handwriting Recognition Technology and its Real Application to the Nepalese Natural Handwriting",
        venue: "Kathmandu University Journal of Science, Engineering and Technology",
        year: "2009",
        linkUrl: "https://doi.org/10.3126/kuset.v5i1.2842",
        linkLabel: "URL"
      },
      {
        authors: "KC Santosh, C Nattee",
        title: "Template-based Nepali Handwritten Alphanumeric Character Recognition",
        venue: "Thammasat International Journal of Science and Technology",
        year: "2009",
        linkUrl: "https://ph02.tci-thaijo.org/index.php/SciTechAsia/article/download/41524/34312",
        linkLabel: "URL"
      }
    ],
    conferenceProceedings: "2014: ICPR (1), CBMS (1), ICFHR (1), and RAIT (1). 2013: ICDAR (3), MVA (2), and IbPRIA (1). 2012: GREC (1). 2011: IEEE ICFHR (1), IEEE ICPR (1), and GREC (1). 2009: IEEE ICDAR (1), ACIVS (1), and GREC (1). 2006: KICSS (1, best paper award), PRICAI (1), and IEEE CIS (1)",
    bookChapters: "(2012): INTECH (1)"
  }
];
