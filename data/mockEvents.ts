import { Event } from "react-big-calendar";
import moment from "moment";

/*
  Resources = [
        subgroup alias,
        short subtitle (Not event name),
        para_1,
        para_2,
        ...
        para_x,
        imageUrl: leave empty ("") if no url.
    ]

    you must have keep atleast one para.
    There is not limit to para but the total content (para_1 + para_2 + ... + para_x) should be within 50 words.
*/

export const mockEvents = <Event[]>[
    {
        start: moment({
            month: 5,
            day: 6,
            year: 2023,
            hour: 17,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 5,
            day: 6,
            year: 2023,
            hour: 18,
            minute: 30,
        }).toDate(),
        title: "Ideathon v3.0 Introductory Session",
        resource: [
            "dev", "Intro Session for Month long hackathon",
            "Platform: Google Meet",
            "Hackathon enhances your resume, showcasing practical problem-solving skills and innovation",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there! ",
            "",
        ],
    },
    {
        start: moment({
            month: 5,
            day: 17,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 5,
            day: 17,
            year: 2023,
            hour: 18,
            minute: 30,
        }).toDate(),
        title: "Lockout v2",
        resource: [
            "cp", "1v1 Duel",
            "Platform: Discord Voice Channel",
            "A 1v1 Coding Showdown where we feature the top two coders from the college, challenging them with the same set of problems to solve while they live-stream their screens, allowing everyone to witness their coding and bug-fixing skills in real-time.",
            "Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 6,
            day: 26,
            year: 2023,
            hour: 19,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 6,
            day: 26,
            year: 2023,
            hour: 21,
            minute: 0,
        }).toDate(),
        title: "CodeBattle_2023.1",
        resource: [
            "cp", "DSA mock round for internships",
            "Platform: Hackerearth",
            "DSA and CP are essential for coding interviews and real-world software development challenges",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 7,
            day: 12,
            year: 2023,
            hour: 19,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 7,
            day: 12,
            year: 2023,
            hour: 21,
            minute: 20,
        }).toDate(),
        title: "CodeBattle_2023.2",
        resource: [
            "cp", "DSA mock round for internships",
            "Platform: Hackerearth",
            "We are happy to bring you the sequel of CodeBattle_2023.1 having the exactly same rules as last time.",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 7,
            day: 26,
            year: 2023,
            hour: 20,
            minute: 45,
        }).toDate(),
        end: moment({
            month: 7,
            day: 26,
            year: 2023,
            hour: 23,
            minute: 0,
        }).toDate(),
        title: "Kaggle Quest Ignite- Challenge 1",
        resource: [
            "ai", "Kaggle Challenge Discussion",
            "Platform: Kaggle",
            "AI/ML are highly in demand skills due to their critical role in solving complex problems across industries",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 6,
            day: 17,
            year: 2023,
        }).toDate(),
        end: moment({
            month: 7,
            day: 19,
            year: 2023,
        }).toDate(),
        title: "Ideathon 3.0",
        resource: [
            "dev", "Month long hackathon",
            "Platform: Online",
            "Hackathon enhances your resume, showcasing practical problem-solving skills and innovation",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there! ",
            "",
        ],
    },
    {
        start: moment({
            month: 7,
            day: 31,
            year: 2023,
            hour: 17,
            minute: 15,
        }).toDate(),
        end: moment({
            month: 7,
            day: 31,
            year: 2023,
            hour: 18,
            minute: 45,
        }).toDate(),
        title: "Kaggle Tips and Tricks",
        resource: [
            "ai", "Kaggle Challenge Discussion",
            "Platform: L21",
            "AI/ML are highly in demand skills due to their critical role in solving complex problems across industries",
            "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 11,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 11,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Crewsphere Keynote Session",
        resource: [
            "dev", "Introduction to Web3",
            "Platform: L21",
            "Web3 is the future, and we want you to be at the forefront of this revolutionary technology.",
            "Don't miss out on this opportunity to enhance your skills and secure your academic success. Mark your calendars and make sure to be there! We have exciting surprises for everyone.",
            "",
        ],
    },
    {
        start: moment({
            month: 8,
            day: 13,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 13,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Intro to Competitive Programming",
        resource: [
            "cp", "Getting Started with CP",
            "Platform: L21",
            "Unlock your coding potential with our Competitive Programming introductory session. Develop problem-solving skills, code efficiently, and open doors to tech career opportunities. ",
            "Join us on this exciting journey to become a skilled competitive programmer.",
            "",
        ],
    },
    // {
    //     start: moment({
    //         month: 8,
    //         day: 15,
    //         year: 2023,
    //         hour: 17,
    //         minute: 0,
    //     }).toDate(),
    //     end: moment({
    //         month: 8,
    //         day: 15,
    //         year: 2023,
    //         hour: 19,
    //         minute: 0,
    //     }).toDate(),
    //     title: "MLtiverse - Hands on ML",
    //     resource: [
    //         "ai", "Build your very first ML model",
    //         "Platform: L21",
    //         "AI/ML are highly in demand skills due to their critical role in solving complex problems across industries",
    //         "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
    //         "",
    //     ],
    // },
    // {
    //     start: moment({
    //         month: 8,
    //         day: 18,
    //         year: 2023,
    //         hour: 17,
    //         minute: 0,
    //     }).toDate(),
    //     end: moment({
    //         month: 8,
    //         day: 18,
    //         year: 2023,
    //         hour: 19,
    //         minute: 0,
    //     }).toDate(),
    //     title: "Intro to Git/github",
    //     resource: [
    //         "dev", "Introduction to Version Control System",
    //         "Platform: L21",
    //         "Learning git and github is important for collaboration, and open-source development, enhancing employability and project management skills",
    //         "Don't miss out on this opportunity. Mark your calendars and make sure to be there!",
    //         "",
    //     ],
    // },
    {
        start: moment({
            month: 8,
            day: 21,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 8,
            day: 21,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Web Wizardry 101: Unleash the Digital Magic",
        resource: [
            "dev", "Introduction to Web Development",
            "Platform: L21",
            "Discover the world of web development! Our workshop will introduce you to the foundations of building websites.",
            "Get ready to create and code for the web!",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 4,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 4,
            year: 2023,
            hour: 22,
            minute: 0,
        }).toDate(),
        title: "Hacktoberfest Kickoff 🎃",
        resource: [
            "dev", "Introducing Hacktoberfest",
            "Platform: Gmeet",
            "Embark on an exciting journey into the world of creativity and artificial intelligence with us.",
            "Discover the magic of Generative Adversarial Networks(GAN's), the wizards of the digital world. GANs are transforming how we generate art, music, and even entire virtual worlds, unleashing unparalleled creative potential.",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 7,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 7,
            year: 2023,
            hour: 22,
            minute: 0,
        }).toDate(),
        title: "Rising Coders Challenge",
        resource: [
            "cp", "Beginner Friendly Contest",
            "Platform: L21",
            "Special coding contest designed for beginners. Solve 6 problems in 90 minutes and prove your skills. ",
            "Ranking will be based on ICPC style. Get ready to learn and have fun! See you at the contest! 🚀",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 10,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 10,
            year: 2023,
            hour: 22,
            minute: 0,
        }).toDate(),
        title: "GBM 2023-24",
        resource: [
            "acm", "General Body Meeting",
            "Platform: Admin Stairs",
            "First official General Body Meeting where we will discuss how the society will function in the upcoming years.",
            "This meeting is a fantastic opportunity for us to come together and discuss essential topics related to our chapter's events in the fest  and upcoming events. 🌟",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 17,
            year: 2023,
            hour: 17,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 17,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "PortfoliYou",
        resource: [
            "dev", "Your First Website",
            "Platform: L21",
            "Want to wander into the wonderful world of web development? Aiming to create websites that inspire? Guess what, ACM is there for you!",
            "Join us for the 'PortfoliYou' session where you'll get to build your very own portfolio website step by step from absolute scratch.",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 18,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 9,
            day: 18,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "GANesis",
        resource: [
            "ai", "Generative Adversial Network",
            "Platform: L21",
            "Embark on an exciting journey into the world of creativity and artificial intelligence. Discover the magic of Generative Adversarial Networks(GAN's), the wizards of the digital world.",
            "The session is meant to be for 2nd, 3rd and 4th year!",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 19,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 9,
            day: 19,
            year: 2023,
            hour: 19,
            minute: 0,
        }).toDate(),
        title: "Intro to Cyber",
        resource: [
            "cyber", "I wonder how I can break this",
            "Platform: L21",
            "At last, the long-awaited intro to cybersecurity event is here! Join us to learn essential cybersecurity skills and delve into basic Linux concepts.",
            "",
        ],
    },
    // {
    //     start: moment({
    //         month: 9,
    //         day: 25,
    //         year: 2023,
    //         hour: 17,
    //         minute: 0,
    //     }).toDate(),
    //     end: moment({
    //         month: 9,
    //         day: 25,
    //         year: 2023,
    //         hour: 18,
    //         minute: 30,
    //     }).toDate(),
    //     title: "The Ultimate Guide to DSA",
    //     resource: [
    //         "acm", "Get deep into Algorithms!",
    //         "Platform: L21",
    //         "DSA is pivotal for interviews, but fear not! The right approach makes it easy and even enjoyable. With dedication and good resources, mastering DSA is a breeze.",
    //         "Speakers for this session include Varun Kohli (CEO of Coding Blocks) and Academic Head of Coding Blocks.",
    //         "",
    //     ],
    // },
    {
        start: moment({
            month: 9,
            day: 14,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 14,
            year: 2023,
            hour: 22,
            minute: 30,
        }).toDate(),
        title: "RCC v1 Discussion",
        resource: [
            "cp", "Rising Coders Challenge Discussion",
            "Platform: Google Meet",
            "Felt the problems were a little on tough end? Don't worry, we got you covered.",
            "We will talk not only about the problem solution but also tell the intuition behind those solutions as well.",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 25,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 9,
            day: 25,
            year: 2023,
            hour: 18,
            minute: 30,
        }).toDate(),
        title: "ICPC Training Camp Kickoff",
        resource: [
            "cp", "Most Prestigious Programming Contest",
            "Platform: L21",
            "Get ready for an exciting adventure in the world of competitive programming with ACM-ICPC!",
            "Our training camp starts in October last week, and we want you to join the coding fun! If you're interested in being a part of this awesome experience, simply fill out the form below:",
            "https://forms.gle/sc2i1Cn9pPYjfAZS7",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 28,
            year: 2023,
            hour: 21,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 9,
            day: 28,
            year: 2023,
            hour: 22,
            minute: 30,
        }).toDate(),
        title: "ML-tiverse: Hands on ML",
        resource: [
            "ai", "Your first ML Model",
            "Platform: GMeet",
            "A session designed to provide you with a strong foundation in machine learning, data analysis, and project development",
            " All you need to bring is your enthusiasm to learn and the rest is in our capable hands as we guide you through your journey into the MLtiverse. So, fasten your seatbelts and make a note in your calendars!",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 29,
            year: 2023,
            hour: 21,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 9,
            day: 29,
            year: 2023,
            hour: 22,
            minute: 30,
        }).toDate(),
        title: "Intro to ANN",
        resource: [
            "ai", "What are neural networks?",
            "Platform: GMeet",
            "Unlock the power of Artificial Neural Networks: Join our introductory session to discover how these digital brain-inspired systems are revolutionizing technology and transforming industries.",
            "This session is designed with beginners in mind, so we look forward to welcoming all enthusiastic learner",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 30,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 30,
            year: 2023,
            hour: 22,
            minute: 40,
        }).toDate(),
        title: "Rising Coders Challenge v2",
        resource: [
            "cp", "Beginner Friendly Contest",
            "Platform: Hackerank",
            "Rising Coders Challenge (RCC) is back! Join us and flaunt your skills! Dive into the world of coding and learn with us.",
            "RCC is special contest made specially for 1st year students. The contest is conducted on Hackerrank so make sure you have your hackerrank ID made beforehand. ",
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 30,
            year: 2023,
            hour: 17,
            minute: 0,
        }).toDate(),
        end: moment({
            month: 9,
            day: 30,
            year: 2023,
            hour: 20,
            minute: 0,
        }).toDate(),
        title: "Techni Biz Quiz",
        resource: [
            "acm", "ACM x SAASC Quiz",
            "Platform: L21",
            `Geeks unite! Prepare to hack your way through the circuits of knowledge, debug some tricky questions, decode the intricacies of the corporate world, and program your brain for success in our electrifying statistically technical quiz, the Techno-Biz Quiz!`,
            "",
        ],
    },
    {
        start: moment({
            month: 9,
            day: 31,
            year: 2023,
            hour: 21,
            minute: 30,
        }).toDate(),
        end: moment({
            month: 9,
            day: 31,
            year: 2023,
            hour: 22,
            minute: 40,
        }).toDate(),
        title: "Intro to Digital Forensic",
        resource: [
            "cyber", "Beginner Friendly Contest",
            "Platform: L21",
            `The "Digital Forensics in Cybersecurity Workshop" is a hands-on and immersive experience designed to equip participants with the knowledge and practical skills needed to conduct forensic investigations in the digital realm.`,
            "Whether you're a cybersecurity enthusiast, IT professional, or a student looking to expand your skill set, this workshop will provide you with valuable insights and practical tools to enhance your cybersecurity capabilities.",
            "",
        ],
    },
];
