import { GraduationCap, BookOpen, Medal, Award, Target, Briefcase } from "lucide-react"

export const academicData = [
  {
    id: 1,
    title: "GCE Ordinary Level",
    institution: "St. Aloysius' College",
    achievement: "Completed GCE Ordinary Level Examination",
    icon: GraduationCap,
    badges: [
      { text: "6A • 2B • 1C", type: "default" }
    ]
  },
  {
    id: 2,
    title: "Foundation Programme",
    institution: "APIIT Sri Lanka",
    achievement: "Completed Foundation Programme",
    icon: BookOpen,
    badges: [
      { text: "Distinction Pass", type: "gold" }
    ]
  },
  {
    id: 3,
    title: "First Year",
    institution: "APIIT Sri Lanka",
    programme: "BSc (Hons) Computer Science",
    achievement: "Successfully completed First Year.",
    icon: Medal,
    badges: [
      { text: "First Class", type: "premium" }
    ]
  },
  {
    id: 4,
    title: "Second Year",
    institution: "APIIT Sri Lanka",
    programme: "BSc (Hons) Computer Science",
    achievement: "Successfully completed Second Year.",
    highlight: true, // Highlight this as strongest performance
    icon: Award,
    badges: [
      { text: "First Class", type: "premium" },
      { text: "75.50%", type: "highlight" }
    ]
  },
  {
    id: 5,
    title: "Current",
    institution: "APIIT Sri Lanka",
    status: "Currently pursuing Final Year of BSc (Hons) Computer Science.",
    expectedGraduation: "2027",
    icon: Target,
    badges: [
      { text: "Currently Pursuing", type: "subtle" }
    ]
  },
  {
    id: 6,
    title: "Next Milestone",
    institution: "Software Engineering Internship",
    achievement: "Ready to contribute, learn, and build impactful software while growing as a Full Stack Developer.",
    icon: Briefcase,
    badges: [
      { text: "Open to Opportunities", type: "success" }
    ]
  }
];
