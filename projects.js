// projects.js — concise, 2–4 sentence blurbs

export const PROJECTS = {
  "Bible-Board": {
    id: "Bible-Board",
    title: "Bible Board",
    description:
      "An interactive whiteboard for Bible study where verses, notes, songs, and interlinear lookups live on one canvas. Autosaves to Supabase, supports simple visibility sharing, and has smooth tablet gestures.",
    repo: "https://github.com/BenjaminBurnell/Bible-Board",
    live: "https://bibleboard.ca",
    tech: ["JavaScript", "HTML", "CSS", "Supabase", "Render"],
    categories: ["Web App", "Open Source"],
    badges: ["Autosave", "Interlinear", "iPad Gestures"],
    featured: true,
    order: 0,
    icon: "BookOpen"
  },
  "Lyrify": {
    id: "Lyrify",
    title: "Lyrify",
    description:
      "Lyrify links your Spotify playback to clean, time-synced lyrics. Auth is quick with PKCE and the UI stays minimal so the lyrics are the focus. It runs smoothly on desktop and mobile with subtle transitions.",
    repo: "https://github.com/BenjaminBurnell/Lyrify",
    live: "",
    tech: ["JavaScript", "Spotify Web API", "PKCE"],
    categories: ["Web App", "Music"],
    badges: ["Lyric Sync", "Responsive"],
    featured: true,
    order: 1,
    icon: "Music"
  },

  "Async-Web-Crawler": {
    id: "Async-Web-Crawler",
    title: "Async Web Crawler",
    description:
      "A fast Python crawler that fetches pages concurrently with aiohttp and parses them with BeautifulSoup. It builds an inverted index for quick keyword lookups. Retries, rate limits, and graceful shutdown make it reliable.",
    repo: "https://github.com/BenjaminBurnell/Async-Web-Crawler",
    live: "",
    tech: ["Python", "aiohttp", "BeautifulSoup"],
    categories: ["Data", "Backend"],
    badges: ["Async I/O"],
    featured: false,
    order: 2,
    icon: "Globe"
  },

  "Bible-API": {
    id: "Bible-API",
    title: "Bible API",
    description:
      "A simple REST API that serves books, chapters, and verses with predictable JSON. It’s designed for study tools and integrations, with clear schemas and OpenAPI docs. CORS is configured for front-end apps.",
    repo: "https://github.com/BenjaminBurnell/Bible-API",
    live: "",
    tech: ["Python", "FastAPI"],
    categories: ["API", "Open Source"],
    badges: ["OpenAPI"],
    featured: false,
    order: 3,
    icon: "BookOpen"
  },

  "Cube-Solver": {
    id: "Cube-Solver",
    title: "Rubik’s Cube Solver",
    description:
      "Scans a real cube via webcam, classifies sticker colors, and solves using a Kociemba-based engine. An on-screen overlay guides capture, then the app outputs a step-by-step move list. Calibration makes it robust to lighting.",
    repo: "https://github.com/BenjaminBurnell/Cube-Solver",
    live: "",
    tech: ["Python", "OpenCV", "NumPy"],
    categories: ["Computer Vision", "Algorithms"],
    badges: ["Kociemba"],
    featured: true,
    order: 4,
    icon: "Cube"
  },

  "Hand-Controller": {
    id: "Hand-Controller",
    title: "Hand Controller",
    description:
      "A gesture-driven pointer prototype using MediaPipe Hands. It tracks landmarks in real time and maps gestures like pinch or dwell to move, click, and drag. A small overlay helps tune thresholds and see FPS.",
    repo: "https://github.com/BenjaminBurnell/Hand-Controller",
    live: "",
    tech: ["Python", "MediaPipe", "OpenCV"],
    categories: ["Computer Vision", "HCI"],
    badges: ["Gesture Control"],
    featured: false,
    order: 5,
    icon: "Hand"
  }
};

export const FEATURED = ["Lyrify", "Cube-Solver", "Bible-Board"];
