import { Person } from './faculty';

export interface AlumnusData extends Person {
  degree: string;
  year: string;
  currentPosition?: string;
  linkedin?: string;
}

export const alumniData: AlumnusData[] = [
  // PhD Alumni
  {
    name: "David Cortes",
    degree: "PhD",
    year: "2024",
    role: "PhD Graduate | Computer Science",
    memberKey: "david-cortes"
  },
  {
    name: "Priyam Pandey",
    degree: "PhD", 
    year: "2024",
    role: "PhD Graduate | Computer Science",
    memberKey: "priyam-pandey"
  },
  
  // Master's Alumni - 2024
  {
    name: "Chenchaiah Mekalathu",
    degree: "Master's",
    year: "2024", 
    role: "Master's Graduate | Computer Science",
    memberKey: "chenchaiah-mekalathu"
  },
  {
    name: "Hari Sukarti",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science", 
    memberKey: "hari-sukarti"
  },
  {
    name: "Murthy Srinivasa Reddy",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "murthy-srinivasa-reddy"
  },
  {
    name: "Vinit Kumar Yadav", 
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "vinit-kumar-yadav"
  },
  
  // Master's Alumni - 2023
  {
    name: "Thabesum Tazeem Sheikh",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "thabesum-tazeem-sheikh"
  },
  {
    name: "Ashwin Karthik Amudalavalasa", 
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "ashwin-karthik-amudalavalasa"
  },
  {
    name: "Srinath Reddy Devireddy",
    degree: "Master's", 
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "srinath-reddy-devireddy"
  },
  {
    name: "Swapna Reddy Nalla",
    degree: "Master's",
    year: "2023", 
    role: "Master's Graduate | Computer Science",
    memberKey: "swapna-reddy-nalla"
  },
  {
    name: "Vamshi Krishna Andeshra",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science", 
    memberKey: "vamshi-krishna-andeshra"
  },

  // TODO: Add the remaining ~50 alumni here
  // Please provide the alumni data to complete this list

];
