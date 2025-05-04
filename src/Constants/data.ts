// Data for stack
interface StackItem {
    name: string;
}

export const stack: StackItem[] = [
    { name: "React" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Bootstrap" },
    { name: "Firebase" },
    { name: "Git" },
    { name: "Framer Motion" },
];

// Data for jobs and experience
interface JobsList {
    position: string;
    company: string;
    date: string;
}

export const jobs: JobsList[] = [
    {
        position: "Fullstack Dev",
        company: "Doyenify",
        date: "May 2025"
    },
    {
        position: "Frontend Dev",
        company: "Doyenify",
        date: "Jan-May, 2025"
    },
    {
        position: "Frontend Dev",
        company: "FFS Agritech",
        date: "Apr-Jul, 2024"
    },
    {
        position: "Asst. Manager",
        company: "Delyiks",
        date: "2023 - 2024"
    },
    {
        position: "Teacher",
        company: "Master-key",
        date: "2015 - 2017"
    },
]

// Data for eductaion
interface EducationItem {
    institution: string;
    discipline: string;
    year: string;
}

export const Education: EducationItem[] = [
    {
        institution: "ALX",
        discipline: "Software Engineering",
        year: "2023 - 2025"
    },
    {
        institution: "Federal University Oye-Ekiti",
        discipline: "Agricultural Economics",
        year: "2016 - 2023"
    },
    {
        institution: "Angela Yu's academy",
        discipline: "Web development",
        year: "2023 - 2025"
    }
]