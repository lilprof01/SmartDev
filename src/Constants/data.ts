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

interface JobsList {
    position: string;
    company: string;
    date: string;
}

export const jobs: JobsList[] = [
    {
        position: "Frontend Developer",
        company: "Doyen",
        date: "2020 - 2022"
    },
    {
        position: "Frontend Developer",
        company: "Cyberbuddies",
        date: "2020 - 2022"
    },
    {
        position: "Frontend Developer",
        company: "FFS Agritech",
        date: "2020 - 2022"
    },
    {
        position: "Asst. Manager",
        company: "Delyiks",
        date: "2020 - 2022"
    },
    {
        position: "Teacher",
        company: "Master-key",
        date: "2020 - 2022"
    },
]

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