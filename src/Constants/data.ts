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
        company: "ABCD Company",
        date: "2020-2022"
    },
    {
        position: "Frontend Developer",
        company: "EFGH Company",
        date: "2020-2022"
    },
    {
        position: "Frontend Developer",
        company: "IJKL Company",
        date: "2020-2022"
    },
    {
        position: "Frontend Developer",
        company: "MNOP Company",
        date: "2020-2022"
    },
    {
        position: "Frontend Developer",
        company: "QRST Company",
        date: "2020-2022"
    },
]