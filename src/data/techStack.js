import { v4 as uuidv4 } from 'uuid'; // Install this: npm install uuid

import {
  siCss3,
  siGit,
  siHtml5,
  siJavascript,
  siMysql,
  siOpenai,
  siReact,
  siSass,
  siSupabase,
  siVite,
} from "simple-icons/icons";

const techStack = [
  { id: uuidv4(), name: "JavaScript", icon: siJavascript },
  { id: uuidv4(), name: "React", icon: siReact },
  { id: uuidv4(), name: "OpenAI", icon: siOpenai },
  { id: uuidv4(), name: "Sass", icon: siSass },
  { id: uuidv4(), name: "MySQL", icon: siMysql },
  { id: uuidv4(), name: "Git", icon: siGit },
  { id: uuidv4(), name: "Vite", icon: siVite },
  { id: uuidv4(), name: "Supabase", icon: siSupabase },
  { id: uuidv4(), name: "HTML5", icon: siHtml5 },
  { id: uuidv4(), name: "CSS3", icon: siCss3 },
];

export default techStack;
