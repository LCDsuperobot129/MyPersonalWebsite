import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Shuttlr",
    description: "AI-powered badminton match reviewer that grades each shot and helps you improve",
    longDescription: "",
    category: ["AI/ML", "Full-Stack", "Hackathon"],
    tags: ["React Native", "JS", "TypeScript"],
    image: "/ic_launcher.png",
    
    githubUrl: "https://github.com/LCDsuperobot129/Shuttlr",
    impact: "No Stats Yet",
    problem: "People trying to get better at badminton in underprivileged communities face the hardship of not being able to have a coach.",
    solution: "This mobile app acts like a coach that analyzes each shot and gives you advice.",
    featured: true,
  },
  {
    id: "2",
    title: "IShowSprint",
    description: "Web-based game that lets you sprint as IShowSpeed. Mash the spacebar to sprint faster. Race bots.",
    longDescription: "",
    category: ["Full-Stack"],
    tags: ["GDScript", "Godot"],
    image: "/ishowsprintbanner.png",
    achievement: "4th Place for Creativity in Daydream Global",
    liveUrl: "https://ckevhl78.itch.io/ishowsprint",
    githubUrl: "https://github.com/LCDsuperobot129/IShowSprintRepository",
    impact: "Let players sprint as IShowSpeed by mashing the spacebar",
    featured: true,
  },
  {
    id: "3",
    title: "TruhFocuser",
    description: "A fun Chrome-based extension for productivity",
    longDescription: "",
    category: ["Full-Stack"],
    tags: ["HTML", "CSS", "JS"],
    image: "/truhfocuserbanner.png",
    liveUrl: "https://lcdsuperobot129.github.io/TruhFocuserHomeWebsite/",
    githubUrl: "https://github.com/LCDsuperobot129/TruhFocuserHomeWebsite",
    impact: "Programmed and designed the home website",
    featured: false,
  }
];
