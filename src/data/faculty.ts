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
    photo: "/AILab/images/team/kc-profile.jpg",
    url: "https://kc-santosh.org/"
  },
  {
    name: "Dr. Rodrigue Rizk",
    role: "Assistant Professor, Department of Computer Science, USD | Vice-Director, Engineering",
    photo: "/AILab/images/team/rod.jpg",
    url: "https://www.linkedin.com/in/rodrigue-rizk"
  },
  {
    name: "Dr. Longwei Wang",
    role: "Assistant Professor, Department of Computer Science, USD | Vice-Director, Research",
    photo: "/AILab/images/team/wang.jpeg"
  },
  {
    name: "Dr. Srikanth Baride",
    role: "PostDoc, Department of Computer Science, USD | Member, AI Research Lab",
    photo: "/AILab/images/team/srikant.jpg",
    url: "https://www.linkedin.com/in/srikanth-baride"
  },
  {
    name: "Dr. Nand K Yadav",
    role: "PostDoc, Department of Computer Science, USD | Member, AI Research Lab",
    photo: "/AILab/images/team/nand.jpg",
    url: "https://in.linkedin.com/in/nand-yadav-891883262"
  }
];
