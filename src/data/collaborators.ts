export interface Person {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // For LinkedIn image matching
  scholarUrl?: string; // Google Scholar profile
  dblpUrl?: string; // DBLP profile
}

export const collaboratorsData: Person[] = [
  {
    name: "Dr. Veerpratap Meena",
    role: "Assistant Professor\nDepartment of Electrical Engineering\nNational Institute of Technology\nJamshedpur, India",
    url: "https://www.linkedin.com/in/veerpratapmeena/",
    scholarUrl: "https://scholar.google.com/citations?user=lLKzGwQAAAAJ&hl=en",
    // Based on ResearchGate profile: 101+ publications, Associate Editor for IEEE Access, 
    // General Chair for multiple IEEE conferences, 2% Scientists 2024 recognition
    // Research focus: Machine Learning, Computer Vision, Signal Processing
  },
  {
    name: "Dr. Akram Bennour",
    role: "Professor of Computer Science\nLarbi Tebessi University\nLAMIS Laboratory\nAlgeria",
    url: "https://sites.google.com/view/akram-bennour/biography?authuser=0",
    scholarUrl: "https://scholar.google.com/citations?hl=fr&user=t4hzC-cAAAAJ",
    // Research collaborator from Université de Tebessa, Algeria
    // Research focus: AI, Machine Learning, Image Processing, Pattern Recognition, Medical Image Analysis
    // General Chair for ISPR conferences, Editorial roles in multiple journals
  }
];
