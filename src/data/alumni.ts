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

  // Additional Alumni - More Graduate Students
  {
    name: "Anup Khanal",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "anup-khanal"
  },
  {
    name: "Anushuya Baidya",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "anushuya-baidya"
  },
  {
    name: "MdAftabul Islam",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "mdaftabul-islam"
  },
  {
    name: "AkhilReddy Mendu",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "akhilreddy-mendu"
  },
  {
    name: "Anuska Pokharel",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "anuska-pokharel"
  },
  {
    name: "Yslam Ismailov",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "yslam-ismailov"
  },
  {
    name: "Hansakrish Kuttubaskar",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "hansakrish-kuttubaskar"
  },
  {
    name: "Praveen Paramsivam",
    degree: "Master's",
    year: "2023",
    role: "Master's Graduate | Computer Science",
    memberKey: "praveen-paramsivam"
  },
  {
    name: "Abhishek Chaudhary",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "abhishek-chaudhary"
  },
  {
    name: "A Matthew Chacko",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "a-matthew-chacko"
  },
  {
    name: "KalyanVikram Muppudoju",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "kalyanvikram-muppudoju"
  },
  {
    name: "Srijana Raut",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "srijana-raut"
  },
  {
    name: "Suprim Nakarmi",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "suprim-nakarmi"
  },
  {
    name: "Gaurrav Subedi",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "gaurrav-subedi"
  },
  {
    name: "Rakshya Dahal",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "rakshya-dahal"
  },
  {
    name: "Alisha Karna",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "alisha-karna"
  },
  {
    name: "Aarati Dhungel",
    degree: "Master's",
    year: "2022",
    role: "Master's Graduate | Computer Science",
    memberKey: "aarati-dhungel"
  },
  {
    name: "Anup Dhakal",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "anup-dhakal"
  },
  {
    name: "Ronaj Pradhan",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "ronaj-pradhan"
  },
  {
    name: "Md Masum Rana",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "md-masum-rana"
  },
  {
    name: "Bipul Bhattarai",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "bipul-bhattarai"
  },
  {
    name: "Josh Henderson",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "josh-henderson"
  },
  {
    name: "Siddhi Kiran Bajracharya",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "siddhi-kiran-bajracharya"
  },
  {
    name: "Hugo Morvan",
    degree: "Master's",
    year: "2021",
    role: "Master's Graduate | Computer Science",
    memberKey: "hugo-morvan"
  },
  {
    name: "Bichar Shrestha Gurung",
    degree: "Master's",
    year: "2020",
    role: "Master's Graduate | Computer Science",
    memberKey: "bichar-shrestha-gurung"
  },
  {
    name: "Bigyan Shrestha",
    degree: "Master's",
    year: "2020",
    role: "Master's Graduate | Computer Science",
    memberKey: "bigyan-shrestha"
  },
  {
    name: "Raman Regmi",
    degree: "Master's",
    year: "2020",
    role: "Master's Graduate | Computer Science",
    memberKey: "raman-regmi"
  },
  {
    name: "Adedeji Waisu Yusuff",
    degree: "Master's",
    year: "2020",
    role: "Master's Graduate | Computer Science",
    memberKey: "adedeji-waisu-yusuff"
  },
  {
    name: "Muntamir Mamun",
    degree: "Master's",
    year: "2020",
    role: "Master's Graduate | Computer Science",
    memberKey: "muntamir-mamun"
  },
  {
    name: "Rafia Sharmin Alice",
    degree: "Master's",
    year: "2020",
    role: "Master's Graduate | Computer Science",
    memberKey: "rafia-sharmin-alice"
  },
  {
    name: "Nikita Shrestha",
    degree: "Master's",
    year: "2019",
    role: "Master's Graduate | Computer Science",
    memberKey: "nikita-shrestha"
  },
  {
    name: "Siva Allu",
    degree: "Master's",
    year: "2019",
    role: "Master's Graduate | Computer Science",
    memberKey: "siva-allu"
  },
  {
    name: "Prakash Madai",
    degree: "Master's",
    year: "2019",
    role: "Master's Graduate | Computer Science",
    memberKey: "prakash-madai"
  },
  {
    name: "Shotadbi Roy",
    degree: "Master's",
    year: "2019",
    role: "Master's Graduate | Computer Science",
    memberKey: "shotadbi-roy"
  },
  {
    name: "Supriti Ghosh",
    degree: "Master's",
    year: "2019",
    role: "Master's Graduate | Computer Science",
    memberKey: "supriti-ghosh"
  },
  {
    name: "Bruce Stofft",
    degree: "Master's",
    year: "2019",
    role: "Master's Graduate | Computer Science",
    memberKey: "bruce-stofft"
  },
  {
    name: "Afia Farjana",
    degree: "Master's",
    year: "2018",
    role: "Master's Graduate | Computer Science",
    memberKey: "afia-farjana"
  },
  {
    name: "Jahirul Islam",
    degree: "Master's",
    year: "2018",
    role: "Master's Graduate | Computer Science",
    memberKey: "jahirul-islam"
  },
  {
    name: "Haidong Wang",
    degree: "Master's",
    year: "2018",
    role: "Master's Graduate | Computer Science",
    memberKey: "haidong-wang"
  },
  {
    name: "Alina Chu",
    degree: "Master's",
    year: "2018",
    role: "Master's Graduate | Computer Science",
    memberKey: "alina-chu"
  },
  {
    name: "Airu Liu",
    degree: "Master's",
    year: "2018",
    role: "Master's Graduate | Computer Science",
    memberKey: "airu-liu"
  },
  {
    name: "Fatema Tu Zohora",
    degree: "Master's",
    year: "2017",
    role: "Master's Graduate | Computer Science",
    memberKey: "fatema-tu-zohora"
  },
  {
    name: "A Afaque",
    degree: "Master's",
    year: "2017",
    role: "Master's Graduate | Computer Science",
    memberKey: "a-afaque"
  },
  {
    name: "Nikul Vyas",
    degree: "Master's",
    year: "2017",
    role: "Master's Graduate | Computer Science",
    memberKey: "nikul-vyas"
  },

  // TODO: Add more alumni if needed
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
