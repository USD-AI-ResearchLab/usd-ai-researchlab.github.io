export interface Person {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // For LinkedIn image matching
}

export const staffData: Person[] = [
  {
    name: "Nicholas Rasmussen",
    role: "PhD Student in Data Science and Engineering | Research Assistant",
    photo: "/AILab/images/team/nicholas-rasmussen.jpg",
    url: "https://www.linkedin.com/in/nicholas-rasmussen-022902174/",
    memberKey: "nicholas-rasmussen"
  },
  {
    name: "Casey Wall",
    role: "PhD Student | Research Assistant",
    photo: "/AILab/images/team/casey-wall.jpg",
    memberKey: "casey-wall"
  }
];
