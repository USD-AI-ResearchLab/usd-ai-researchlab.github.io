export interface Person {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // For LinkedIn image matching
  scholarUrl?: string; // Google Scholar profile
  dblpUrl?: string; // DBLP profile
  degree?: string; // Academic degree information
}

// Local faculty photos - stored in public/faculty folder for direct access
const profileImage1 = "/faculty/kc-santosh.jpg"; // Prof. KC Santosh
const profileImage2 = "/faculty/rodrigue-rizk.jpg"; // Dr. Rodrigue Rizk
const profileImage3 = "/faculty/longwei-wang.jpeg"; // Dr. Longwei Wang
const profileImage4 = "/faculty/srikanth-baride.jpg"; // Dr. Srikanth Baride
const profileImage5 = "/faculty/nand-yadav.jpg"; // Dr. Nand K Yadav

export const facultyData: Person[] = [
  {
    name: "Prof. KC Santosh",
    role: "Professor (AI) & Chair, Department of Computer Science, USD | Founding Director, USD AI Research",
    photo: profileImage1,
    memberKey: "kc-santosh",
    url: "https://kc-santosh.org/",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=luPx18QAAAAJ",
    dblpUrl: "https://dblp.uni-trier.de/pid/17/735.html?view=by-type"
  },
  {
    name: "Dr. Rodrigue Rizk",
    role: "Assistant Professor, Department of Computer Science, USD | Vice-Director, Engineering | Graduate Program Co-ordinator",
    photo: profileImage2,
    memberKey: "rodrigue-rizk",
    url: "https://www.linkedin.com/in/rodrigue-rizk",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=CZkCb5QAAAAJ",
    dblpUrl: "https://dblp.org/pid/244/7657.html"
  },
  {
    name: "Dr. Longwei Wang",
    role: "Assistant Professor, Department of Computer Science, USD | Vice-Director, Research",
    photo: profileImage3,
    memberKey: "longwei-wang",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=nRGDT_sAAAAJ",
    dblpUrl: "https://dblp.org/pid/150/5640"
  },
  {
    name: "Dr. Srikanth Baride",
    role: "Postdoc, Department of Computer Science, USD | Member, USD AI Research",
    photo: profileImage4,
    memberKey: "srikanth-baride",
    url: "https://www.linkedin.com/in/srikanth-baride",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=Sy_2zJcAAAAJ",
    dblpUrl: "https://dblp.org/pid/93/9638"
  },
  {
    name: "Dr. Nand K Yadav",
    role: "Postdoc, Department of Computer Science, USD | Member, USD AI Research",
    photo: profileImage5,
    memberKey: "nand-yadav",
    url: "https://www.linkedin.com/in/nand-k-yadav-891883262/",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=MYuCzcsAAAAJ"
  }
];
