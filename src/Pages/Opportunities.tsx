import React from 'react';
import { motion } from 'framer-motion';

const Opportunities: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 heading-red">
            Opportunities
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-2xl font-light mb-6 text-black">
            Join Our Research Lab
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="body-text-18 text-black leading-relaxed font-thin">
              Thank you for your interest in joining our team! We are continuously looking for highly motivated and talented people to contribute to our research in artificial intelligence, machine learning, computer vision, and related fields. Our positions are competitive and limited, as we aim to maintain a focused, research-driven, and intellectually coherent group.
            </p>
            
            <p className="body-text-18 text-black leading-relaxed font-thin">
              Before applying, please review our recent <a href="#/publications" className="text-red-600 hover:text-red-700 underline">publications</a> to ensure that your research interests and background are strongly aligned with the group's current directions. Open positions will be listed below. Application review begins immediately and continues until all positions are filled.
            </p>
            
            <p className="body-text-18 text-black leading-relaxed font-thin italic">
              Due to the high volume of applications, we may not be able to respond to every inquiry individually. Candidates selected for further consideration will be contacted for interviews.
            </p>
          </div>
          
          <div className="space-y-8 mt-10">
            {/* PhD Students */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-black">
                PhD Students
              </h3>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-4">
                We are looking for outstanding and motivated PhD candidates with strong foundations in at least one of the following: machine learning, computer vision, natural language processing, statistics, probability, optimization, and applied mathematics.
              </p>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-4">
                Applicants must hold (or expect soon) an MSc or equivalent.
              </p>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg mt-4 mb-4">
                <p className="body-text-18 text-black leading-relaxed font-thin mb-3">
                  We have open positions for PhD students. Please send the application to <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:text-red-700 underline">kc.santosh@usd.edu</a> with the subject line "PhD Application - USD AI Lab 2025":
                </p>
                <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4">
                  <li>CV</li>
                  <li>Transcript</li>
                  <li>A short motivational letter that explains why you are interested in working with us</li>
                </ul>
              </div>
              
              <p className="body-text-18 text-black leading-relaxed font-thin mb-2">
                If you are interested in joining as a PhD student, you can also apply to the following programs:
              </p>
              <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4 mb-4">
                <li>NSF Graduate Research Fellowship Program</li>
                <li>USD Computer Science PhD Program</li>
              </ul>
              
              <p className="body-text-18 text-black leading-relaxed font-thin italic">
                We cannot respond to emails that do not follow the instructions above.
              </p>
            </motion.div>

            {/* Postdoctoral Researchers */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-black">
                Postdoctoral Researchers
              </h3>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-4">
                We welcome strong candidates with a proven track record in areas related to our research focus. Applicants are expected to have:
              </p>
              <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4 mb-4">
                <li>Publications at top ML/AI venues (e.g. NeurIPS, ICML, ICLR, AAAI, IJCAI, AISTATS)</li>
                <li>Evidence of research independence and leadership potential</li>
              </ul>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg mt-4 mb-4">
                <p className="body-text-18 text-black leading-relaxed font-thin mb-3">
                  We have open positions for postdoctoral researchers. Please send the application to <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:text-red-700 underline">kc.santosh@usd.edu</a> with the subject line "Postdoc Application - USD AI Lab 2025":
                </p>
                <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4">
                  <li>CV including publication list</li>
                  <li>Contact information of two referees</li>
                  <li>A research statement (1-2 pages) including past contributions and rationale for joining the USD AI Research Lab</li>
                </ul>
              </div>
              
              <p className="body-text-18 text-black leading-relaxed font-thin mb-2">
                You may additionally consider applying to competitive fellowships (in case you are submitting to one of those, please send an email to <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:text-red-700 underline">kc.santosh@usd.edu</a> with the subject line "Fellowship Application - USD AI Lab 2025"):
              </p>
              <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4">
                <li>NSF Postdoctoral Research Fellowship</li>
                <li>NIH Postdoctoral Fellowship</li>
                <li>Marie Curie Postdoctoral Fellowship (MSCA)</li>
              </ul>
            </motion.div>

            {/* Short Research Visits / Internships */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-black">
                Short Research Visits / Internships
              </h3>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-4">
                Research visits for external students are very limited and typically only possible if supported by:
              </p>
              <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4 mb-4">
                <li>Existing collaborations</li>
                <li>Funded research programs (e.g., summer schools, fellowships, mobility grants)</li>
              </ul>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-2">
                In case open positions for internships will become available, I will post them here.
              </p>
              <p className="body-text-18 text-black leading-relaxed font-thin font-semibold">
                For now, I am not responding to emails regarding research visits/internships.
              </p>
            </motion.div>

            {/* Master's Students */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-black">
                Master's Students
              </h3>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-4">
                We welcome Master's students interested in AI research through thesis projects, independent studies, or research assistantships. Strong programming skills and coursework in machine learning or related areas are preferred.
              </p>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg mt-4">
                <p className="body-text-18 text-black leading-relaxed font-thin mb-3">
                  <strong>Application Requirements:</strong> Please send your application to <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:text-red-700 underline">kc.santosh@usd.edu</a> with the subject line "Master's Research Opportunity":
                </p>
                <ul className="list-disc list-inside body-text-18 text-black leading-relaxed font-thin space-y-1 ml-4">
                  <li>CV and academic transcripts</li>
                  <li>Brief statement of research interests</li>
                  <li>Portfolio of relevant coursework or projects</li>
                </ul>
              </div>
            </motion.div>

            {/* Undergraduate Students */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-black">
                Undergraduate Students
              </h3>
              <p className="body-text-18 text-black leading-relaxed font-thin mb-4">
                Undergraduate students can gain hands-on research experience through independent study projects, summer research programs, or senior capstone projects. This is an excellent opportunity to explore AI research and prepare for graduate studies.
              </p>
              <p className="body-text-18 text-black leading-relaxed font-thin">
                Prerequisites include strong academic performance and completion of relevant coursework in computer science, mathematics, or statistics.
              </p>
            </motion.div>
          </div>

          {/* General Application Information */}
          <motion.div variants={fadeInUp} className="mt-12 p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-xl font-light mb-4 text-black">
              Important Notes
            </h3>
            <div className="space-y-3">
              <p className="body-text-18 text-black leading-relaxed font-thin">
                <strong>Review Process:</strong> We cannot respond to emails that do not follow the application instructions above. Complete applications will be reviewed on a rolling basis.
              </p>
              <p className="body-text-18 text-black leading-relaxed font-thin">
                <strong>Funding:</strong> Successful candidates may be supported through research assistantships, teaching assistantships, or external fellowships. We encourage applicants to explore relevant fellowship opportunities.
              </p>
              <p className="body-text-18 text-black leading-relaxed font-thin">
                For general inquiries, please visit our <a href="#/contact" className="text-red-600 hover:text-red-700 underline">Contact page</a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Opportunities;
