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

  // Additional Alumni - Graduate Students
  {
    name: "Kanishka Parankusham",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "kanishka-parankusham"
  },
  {
    name: "Neerajdattu Dudam",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "neerajdattu-dudam"
  },
  {
    name: "Akshay Reddy",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "akshay-reddy"
  },
  {
    name: "Mohammad Navid Nayyem",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "mohammad-navid-nayyem"
  },
  {
    name: "KrishnaPhanindra Marupaka",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "krishnaphanindra-marupaka"
  },
  {
    name: "Deepika Nuthalapati",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "deepika-nuthalapati"
  },
  {
    name: "Satya Mouli Dhangati",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "satya-mouli-dhangati"
  },
  {
    name: "Sivani Maddepalli",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "sivani-maddepalli"
  },
  {
    name: "Sainath Vaddi",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "sainath-vaddi"
  },
  {
    name: "Sony Gurram",
    degree: "Master's",
    year: "2024",
    role: "Master's Graduate | Computer Science",
    memberKey: "sony-gurram"
  },
  {
    name: "Aashish Ghimire",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "aashish-ghimire"
  },
  {
    name: "Sabin Adhikari",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "sabin-adhikari"
  },
  {
    name: "Jayakumar Pujar",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "jayakumar-pujar"
  },
  {
    name: "Pooja Singh",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "pooja-singh"
  },
  {
    name: "Alexis Haiar",
    degree: "Bachelor's",
    year: "2024",
    role: "Undergraduate Graduate | Computer Science",
    memberKey: "alexis-haiar"
  },
  {
    name: "Malashree Dhungel",
    degree: "Bachelor's",
    year: "2024",
    role: "Undergraduate Graduate | Computer Science",
    memberKey: "malashree-dhungel"
  },

  // TODO: Add the remaining ~30+ alumni here
  // Please provide the alumni data to complete this list
  // 
  // Template for adding new alumni:
  // {
  //   name: "Alumni Name",
  //   degree: "PhD" or "Master's", 
  //   year: "YYYY",
  //   role: "PhD Graduate | Computer Science" or "Master's Graduate | Computer Science",
  //   memberKey: "alumni-name-kebab-case",
  //   currentPosition: "Optional: Current job title",
  //   linkedin: "Optional: LinkedIn URL"
  // },
  //
  // YEARS TO ADD (estimated):
  // - 2022 graduates
  // - 2021 graduates  
  // - 2020 graduates
  // - 2019 graduates
  // - 2018 graduates
  // - 2017 graduates
  // - Earlier years...
  //
  // Please provide the names and details for these missing alumni

];
