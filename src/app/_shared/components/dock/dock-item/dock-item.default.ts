import { RadDockItem } from "./dock-item.interface";

export const dockItems: RadDockItem[] = [
  {
    label: "Konsole",
    description: "App's Konsole",
    iconPath: "assets/icons/dock/konsole-light.svg",
    isActive: true,
    isDarken: false
  },
  {
    label: "Finder",
    description: "Find My Project",
    iconPath: "assets/icons/dock/finder.svg",
    isActive: false,
    isDarken: true
  },
  {
    label: "Facebook",
    description: "Facebook profile",
    iconPath: "assets/icons/dock/facebook.svg",
    isActive: false,
    isDarken: false
  },
  {
    label: "Github",
    description: "Github profile",
    iconPath: "assets/icons/dock/github-light.svg",
    isActive: false,
    isDarken: false
  },
  {
    label: "LinkedIn",
    description: "LinkedIn profile",
    iconPath: "assets/icons/dock/linkedin.svg",
    isActive: false,
    isDarken: false
  },
]