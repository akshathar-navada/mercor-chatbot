// {Name: Web_Chat_Corpus}
// {Description: Contains a text corpus for a web chat.}

// This example demonstrates how to add a text AI chat to your web page, website or web app.
// In this example, you can find corpus for Q&A answering and commands to navigate in the web page.
// Get the web page with the text AI chat for this example here: https://github.com/alan-ai/website-chat-demo
// Check out a live demo at: https://alan-ai.github.io/website-chat-demo/

// Web page corpus

corpus({ url: "https://mercor.io/", depth: 1, maxPages: 50 });
corpus({ url: "https://work.mercor.io/", depth: 2, maxPages: 100 });
corpus({ url: "https://hire.mercor.io/", depth: 1, maxPages: 50 });
corpus({ url: "https://work.mercor.io/about-us", depth: 1, maxPages: 50 });
corpus(`
    Mercor has built the preeminent AI vetting platform to assess millions of software engineers and match them with US companies!
    How to apply job at Mercor?|What is the process for joining Mercor? Click on a job opening to submit an application to Mercor. Your application will include a resume, an interview, and a Mercor challenge🤩
    How is Mercor assessment done? We will use Mercor's cutting edge AI to analyze your resume, conduct your interview, and evaluate your challenge🚀
    What Job opportunities do I get? Mercor offers a diverse set of job opportunities focused on high paying positions at top US startups in Silicon Valley.
    Tell me about the opportunity structure at Mercor  While you'll work for Mercor and have our brand on your resume, we'll place you at exciting projects with elite founders😃
    We match top software engineers in India with leading US startups.
    We use AI to match global engineers with top US startups.
    We believe that the future of work is globalized. Mercor and all of it's clients combine teams across multiple countries to build great products.
    Mercor Website 🌐 http://mercor.io
    Contact us through phone 📞 +1 (650)-200-0776
    what kind of Industry is Mercor? Staffing and Recruiting
    Mercor Company size? 51-200 employees    
    Where is Mercors's Headquarters? 📌Palo Alto, California
    When was Mercor company founded? 2019
    Who is the CEO of Mercor? Brendan Foody is the CEO at Mercor
    Who is the CTO of Mercor? Adarsh H. is the CTO & Co-Founder at Mercor.io
    Who is the CoFounder of Mercor? Surya Midha is the Co-Founder at Mercor
    Who is the head of partnerships at Mercor? Ryan Abdallah is the Head of Partnerships at Mercor.io
    Who is the Technical Interviewer at Mercor? John Sharma is the Technical Interviewer at Mercor
`);

// Text corpus

corpus(`
   Mercor is organizing the Chatbot Challenge on 30th July 2023. Don't miss out on this incredible opportunity!
   🎯 Register Now: https://lnkd.in/dJ4fGgBn
   🏆 Top performers will have the chance to collaborate with brilliant minds from elite institutions like Harvard, Stanford, and MIT. Imagine the possibilities of working alongside these visionaries to shape the future!
    Mercor is organising a very beginner-friendly Chatbot challenge this Sunday. Best part? There's no eligibility criteria and winners of this Hackathon will have a strong chance of receiving job offers at Mercor and its client companies and will be paid INR 1,00,000 - INR 2,00,000 rupees per month, and will be managed by engineers from prestigious universities like MIT and Stanford.
`);
corpus(`
    Mercor matches visionary startup founders with elite software engineers around the world. We source and vet the talent to build generational companies.
    We match elite software engineers with top-tier companies.
    Mercor deeply vets millions of engineers with AI so that you don't have to.
    We assess technical abilities, soft skills, and work ethic to find the right engineer for your business. Our predictive analytics empower your business to leverage the global talent pool as you build the next generation of products.
    Our cutting-edge technology streamlines the vetting process.🔨
    How does Mercor analyze every candidate? 👀We use large language models to sift through every aspect of a candidate's background. We analyze everything from the complexity of their Github projects to their historical performance on every major coding platform.
    How are projects graded? 🎯We give engineers projects that are contexual to the job you're looking to hire for. We use a variety of AI models to assess the quality of engineers code and documentation. This ensures they have the exact skills you're looking for.
    How does Mercor assess communication and soft skills? Unleash and AI interviewer that talks to every candidate to find the perfect person for your role. Stop letting interviews bottleneck your hiring pipeline while eating away at engineering hours.
    How to access a global referral network at Mercor? We create robust structural incentives for engineers to provide precise and reliable referrals, fostering a vast network of outstanding candidates with a proven track record for exceptional performance. By encouraging engineers to take part in our referral program, we tap into their valuable insights and connections, allowing us to access a diverse pool of talent that consistently demonstrates high levels of expertise and competence.
    Complete your profile with a resume - Mercor will use state of the art artificial intelligence to automatically analyze your resume, combing through your work experience, projects, and education🧾
    How to Join an elite group of developers? Mercor's fellowship 💪is for developers looking for jobs. We offer mentorship and guidance to help you hone the skills you need to become a Mercor engineer.
    How to keep in touch with Mercor? Follow us on Instagram (@mercor.io), Facebook (@mercor), LinkedIn (@Mercor)
`);
corpus(`
    We are delighted to share some thrilling news with all of you - Mercor is launching its very own blog! With our new blog, we aim to create a platform where we can engage, educate, and inspire you.
    What can you expect from Merc̥or's blog? Let me give you a sneak peek into the exciting content that lies ahead:
    🔍 Industry Expertise: Our team will dive deep into various topics related to you getting the best out of yourself as a working professional. We will discuss the latest trends, innovations, best practices to common project pitfalls and even case studies of our own projects that will help you stay ahead of the game.
    🚀 Company Updates: Stay in the loop with all things Mercor! We'll be sharing news about our latest projects, partnerships, and company milestones. Be the first to know about our exciting endeavors as we continue to grow and make a positive impact in the industry.
    📢 Engaging Discussions: We value the power of collaboration and learning from our audience. Our blog will serve as a platform for lively discussions, where we encourage you to share your thoughts, opinions, and experiences. Let's engage in conversations that drive progress and innovation!
    Your support and engagement are invaluable to us, and we're excited to embark on this journey together. Please feel free to connect with us to stay updated, provide feedback, or suggest topics you'd like us to cover. We value your input and look forward to building a community that fosters growth and learning. Here's to a future filled with knowledge, innovation, and success!
    Blog Link : https://medium.com/@mercor̥
`);
question(
  "Mercor website",
  "can you provide the Mercor website link",
  reply(" Mercor Website 🌐 http://mercor.io")
);
question(
  "Can I get the phone no to contact",
  "How to keep in touch with Mercor",
  reply(" Contact us through phone📞 +1 (650)-200-0776")
);
question(
  "How to join the fellowship of Mercor",
  "How to Join an elite group of developers?",
  reply(
    "Mercor's fellowship 💪is for developers looking for jobs. We offer mentorship and guidance to help you hone the skills you need to become a Mercor engineer."
  )
);
question(
  "How does Mercor analyze every candidate?",
  "What is the hiring process at Mercor?",
  reply(
    "👀We use large language models to sift through every aspect of a candidate's background. We analyze everything from the complexity of their Github projects to their historical performance on every major coding platform."
  )
);
question(
  "Can u give the social media links of Mercor",
  "How to keep in touch with Mercor",
  reply(
    "🤝Follow us on Instagram (@mercor.io), Facebook (@mercor), LinkedIn (@Mercor)"
  )
);
question(
  "What can you expect from Merc̥or's blog?",
  reply(
    "Let me give you a sneak peek into the exciting content that lies ahead:  🔍 Industry Expertise,  🚀 Company Updates,  📢 Engaging Discussions. We value your input and look forward to building a community that fosters growth and learning. Here's to a future filled with knowledge, innovation, and success! Blog Link : https://medium.com/@mercor̥"
  )
);

question(
  "How does this work",
  "How to use this",
  "What can I do here",
  reply(
    "Mercor matches visionary startup founders with elite software engineers around the world. We source and vet the talent to build generational companies."
  )
);

question(
  "Where is Mercor's headquarters?",
  "Where is Mercor Company",
  "Where is the head office of Mercor located?",
  reply("Mercor is located in Menlo Park, California, United States.")
);
question(
  "When was the last funding round for Mercor?",
  reply(
    "Mercor closed its last funding round on Jun 1, 2020 from a Pre-Seed round."
  )
);
question(
  "Who are Mercor's competitors? ",
  "Are there any competitors to Mercor?",
  reply(
    "Alternatives and possible competitors to Mercor may include StormForge, Highlight, and OptimoRoute Inc.."
  )
);
question(
  "Who is (the) CTO of Mercor? ",
  reply("Adarsh H. is the CTO & Co-Founder at Mercor.io")
);
question(
  "Who is (the) CEO of Mercor? ",
  reply("Brendan Foody is the CEO at Mercor")
);
question(
  "Who is (the) Co(-)Founder of Mercor? ",
  reply("Surya Midha is the Co-Founder at Mercor")
);
question(
  "Who is (the) head of partnerships at Mercor? ",
  reply("Ryan Abdallah is the Head of Partnerships at Mercor.io")
);
question(
  "Who is (the) Technical Interviewer at Mercor?  ",
  reply("John Sharma is the Technical Interviewer at Mercor")
);
corpus(`
    MENLO PARK, Calif., April 12, 2022 (GLOBE NEWSWIRE) -- Mercor.io is a new software development and recruitment agency that connects startups with qualified engineering teams.
    Can you tell about Mercor history? Mercor.io was founded in January of 2022 by Brendan Foody, Surya Midha, and Adarsh Hiremath, students at Georgetown and Harvard University. Mercor.io recently won $10,000 and placed first in Georgetown's premier entrepreneurship pitch competition. The company is on track to reach a record-high $40,000 in revenue for the month of April.
    The key to Mercor.io's early success has been combining both software development and recruitment.
    For development services, startups begin by contracting with one of Mercor.io's teams of product managers and engineers. Clients interface with US-based product management, who then coordinate tasks for the engineers.
    If startups are satisfied with the completed software, they then have the option to bring the full team in-house. This allows startups to forgo the complexities of hiring but reap the benefits of qualified in-house engineering teams that constantly iterate on their product.
    To meet recruitment demand, Mercor.io leverages institutional partnerships with the best universities globally to tap into qualified pools of talent currently neglected by US companies.
    By engaging in both development and recruitment, Mercor.io provides startups with a simple and affordable method to quickly build products and scale teams. Mercor.io engineers have an incentive to exceed expectations because performing well enables them to work directly for US startups.
    Past Mercor.io clients include Attend, an education technology startup that streamlines attendance in large lecture halls. Mercor.io, through a team of product managers and engineers, translated a non-technical vision for attendance into a first-of-its-kind revolving QR code technology that students scan to mark their presence. Teachers have access to a dashboard that logs student attendance and Mercor.io is currently developing automatic integration between Attend and popular grade book softwares used by universities.
    On April 27th, Mercor.io will sponsor a hackathon at Indian Institute of Technology Kharagpur, a top computer science university in India with a 2% acceptance rate. The hackathon will be open to students from across the Indian Institutes of Technology and already has an expected 500 people participating. From those students, Mercor.io will interview the most qualified for a spot on an engineering team.
    Looking forward, Mercor.io's founders hope to rapidly scale the engineering teams to meet growing development demand. Prospective clients interested in contracting with Mercor.io are encouraged to visit the website for more information and email support@mercor.io for a quote.
`);
