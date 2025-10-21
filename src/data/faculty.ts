export interface Person {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // For LinkedIn image matching
}

export const facultyData: Person[] = [
  {
    name: "Prof. KC Santosh",
    role: "Professor (AI) & Chair, Department of Computer Science, USD | Founding Director, AI Research Lab",
    photo: "https://robohash.org/kc-santosh?set=set1&size=400x400",
    memberKey: "kc-santosh",
    url: "https://kc-santosh.org/"
  },
  {
    name: "Dr. Rodrigue Rizk",
    role: "Assistant Professor, Department of Computer Science, USD | Vice-Director, Engineering",
    photo: "https://robohash.org/rodrigue-rizk?set=set1&size=400x400",
    memberKey: "rodrigue-rizk",
    url: "https://www.linkedin.com/in/rodrigue-rizk"
  },
  {
    name: "Dr. Longwei Wang",
    role: "Assistant Professor, Department of Computer Science, USD | Vice-Director, Research",
    photo: "https://robohash.org/longwei-wang?set=set1&size=400x400",
    memberKey: "longwei-wang"
  },
  {
    name: "Dr. Srikanth Baride",
    role: "PostDoc, Department of Computer Science, USD | Member, AI Research Lab",
    photo: "https://robohash.org/srikanth-baride?set=set1&size=400x400",
    memberKey: "srikanth-baride",
    url: "https://www.linkedin.com/in/srikanth-baride"
  },
  {
    name: "Dr. Nand K Yadav",
    role: "PostDoc, Department of Computer Science, USD | Member, AI Research Lab",
    photo: "https://robohash.org/nand-yadav?set=set1&size=400x400",
    memberKey: "nand-yadav",
    url: "https://in.linkedin.com/in/nand-yadav-891883262"
  }
];
