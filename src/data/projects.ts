import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Shuttlecoach",
    description: "AI-powered badminton match reviewer that grades each shot and helps you improve",
    longDescription: "",
    category: ["AI/ML", "Full-Stack", "Hackathon"],
    tags: ["Dart", "Flutter"],
    image: "/projects/code-review.jpg",
    liveUrl: "Not Available Currently",
    githubUrl: "Not Available Currently",
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
    image: "/projects/collab.jpg",
    achievement: "4th Place for Creativity in Daydream Global",
    liveUrl: "https://ckevhl78.itch.io/ishowsprint",
    githubUrl: "https://github.com/LCDsuperobot129/IShowSprintRepository",
    impact: "Let players sprint as IShowSpeed by mashing the spacebar",
    featured: true,
  }
];
