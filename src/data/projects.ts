import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "IShowSprint",
    description: "Web-based game that lets you sprint as IShowSpeed. Mash the spacebar to sprint faster. Race bots.",
    longDescription: "",
    category: ["Full-Stack"],
    tags: ["GDScript", "Godot"],
    image: "/ishowsprintbanner.png",
    achievement: "4th Place for Creativity in Daydream Global",
    liveUrl: "I took it down due to copyrighted material, so there is no live page.",
    githubUrl: "https://github.com/LCDsuperobot129/IShowSprintRepository",
    impact: "Let players sprint as IShowSpeed by mashing the spacebar",
    featured: true,
  },
  {
    id: "2",
    title: "TruhFocuser",
    description: "A fun Chrome-based extension for productivity",
    longDescription: "",
    category: ["Full-Stack"],
    tags: ["HTML", "CSS", "JS"],
    image: "/truhfocuserbanner.png",
    liveUrl: "I took it down due to copyrighted material, so there is no live page.",
    githubUrl: "https://github.com/LCDsuperobot129/TruhFocuserHomeWebsite",
    impact: "Programmed and designed the home website",
    featured: false,
  }
];
