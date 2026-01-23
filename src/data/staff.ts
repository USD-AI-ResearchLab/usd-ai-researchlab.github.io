export interface Person {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // For LinkedIn image matching
  scholarUrl?: string; // Google Scholar profile
  dblpUrl?: string; // DBLP profile
}

// Staff photos
const deepikaPhoto = "/faculty/deepika-nuthalapati.jpg";
const srikanth = "/faculty/srikanth-baride.jpg";
const nandYadav = "/faculty/nand-yadav.jpg";

export const staffData: Person[] = [
  {
    name: "Deepika Nuthalapati",
    role: "Research Associate, Department of Computer Science, USD | Member, USD AI Research",
    photo: deepikaPhoto,
    memberKey: "deepika-nuthalapati"
  },
  {
    name: "Dr. Srikanth Baride",
    role: "Postdoc, Department of Computer Science, USD | Member, USD AI Research",
    photo: srikanth,
    memberKey: "srikanth-baride",
    url: "https://www.linkedin.com/in/srikanth-baride",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=Sy_2zJcAAAAJ",
    dblpUrl: "https://dblp.org/pid/93/9638"
  },
  {
    name: "Dr. Nand K Yadav",
    role: "Postdoc, Department of Computer Science, USD | Member, USD AI Research",
    photo: nandYadav,
    memberKey: "nand-yadav",
    url: "https://www.linkedin.com/in/nand-k-yadav-891883262/",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=MYuCzcsAAAAJ"
  }
];
