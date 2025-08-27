import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Surya Prakash Mishra",
  title: "Computer Science Student",
  description: "I'm a passionate 2nd year B.Tech student at ABES Engineering College, specializing in Computer Science Engineering. I'm dedicated to learning and implementing modern technologies to create innovative solutions.",
  // avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop",
  avatar: "/pfp.jpg",

  projects: [
    {
      title: "Mobile App",
      description: "A cross-platform mobile application built with Flutter for task management and productivity.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com",
      link: "https://project.com"
    },
    {
      title: "Desktop Application",
      description: "A powerful desktop application built with Java for data analysis and visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Java", "JavaFX", "SQL"],
      github: "https://github.com",
      link: "https://project.com"
    },
    {
      title: "System Software",
      description: "High-performance system software developed in C++ for real-time data processing.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
      technologies: ["C++", "OpenGL", "Linux"],
      github: "https://github.com",
      link: "https://project.com"
    },
    {
      title: "Embedded System",
      description: "An embedded system project built with C for IoT device management.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      technologies: ["C", "Arduino", "IoT"],
      github: "https://github.com",
      link: "https://project.com"
    },
    {
      title: "Web Platform",
      description: "A modern web platform for collaborative work and team management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "AWS"],
      github: "https://github.com",
      link: "https://project.com"
    },
    {
      title: "College Project",
      description: "An academic project showcasing database management and web development skills.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com",
      link: "https://project.com"
    }
  ],
  skills: [
    {
      name: "C++",
      icon: "⚙️",
      level: 85
    },
    {
      name: "C",
      icon: "🔧",
      level: 80
    },
    {
      name: "Java",
      icon: "☕",
      level: 88
    },
    {
      name: "Flutter",
      icon: "📱",
      level: 82
    },
    {
      name: "Python",
      icon: "🐍",
      level: 85
    },
    {
      name: "React",
      icon: "⚛️",
      level: 75
    },
    {
      name: "TypeScript",
      icon: "📘",
      level: 70
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 65
    },
    {
      name: "SQL",
      icon: "📊",
      level: 75
    }
  ],
  experience: [
    {
      role: "Student Developer",
      company: "College Tech Club",
      duration: "2023 - Present",
      location: "ABES Engineering College",
      achievements: [
        "Led a team of 4 students in developing a college event management system",
        "Organized technical workshops for junior students",
        "Contributed to the college's technical fest website"
      ]
    },
    {
      role: "Open Source Contributor",
      company: "GitHub",
      duration: "2023",
      location: "Remote",
      achievements: [
        "Contributed to various open source projects",
        "Fixed bugs and implemented new features",
        "Collaborated with developers worldwide"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "ABES Engineering College",
      duration: "2022 - 2026",
      grade: "8.5 CGPA",
      achievements: [
        "Member of College Technical Club",
        "Participated in various coding competitions",
        "Won 2nd prize in college hackathon"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Your School Name",
      duration: "2020 - 2022",
      grade: "95%",
      achievements: [
        "School topper in Computer Science",
        "Participated in various technical competitions"
      ]
    }
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com"
    }
  ],
  email: "your.email@example.com"
};