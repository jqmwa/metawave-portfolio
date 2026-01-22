import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:./data/portfolio.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function seed() {
  // Initialize the database
  await client.execute(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      image TEXT DEFAULT '',
      link TEXT DEFAULT '',
      sort_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Check if projects already exist
  const countResult = await client.execute('SELECT COUNT(*) as count FROM projects');
  const count = (countResult.rows[0] as unknown as { count: number }).count;

  if (count > 0) {
    console.log(`Database already has ${count} projects. Skipping seed.`);
    console.log('To re-seed, clear the projects table first.');
    process.exit(0);
  }

  // Existing projects from the hardcoded array
  const projects = [
    { title: "Patchbox 02", description: "", image: "https://i.imgur.com/p9DQ9KY.png", sort_order: 1 },
    { title: "Interactive Experience", description: "Dynamic interface with animated elements and interactions", image: "https://i.imgur.com/vSNqugG.gif", sort_order: 2 },
    { title: "Modern Interface", description: "Contemporary design with clean aesthetics and functionality", image: "https://i.imgur.com/Tv9qJXt.png", sort_order: 3 },
    { title: "Digital Design", description: "Innovative digital solution with cutting-edge visuals", image: "https://i.imgur.com/vZe4VVf.png", sort_order: 4 },
    { title: "Featured Design", description: "Latest portfolio showcase with cutting-edge design elements", image: "https://i.imgur.com/nFyaBwx.png", sort_order: 5 },
    { title: "Quantum Interface", description: "Futuristic quantum computing dashboard with holographic elements", image: "https://i.imgur.com/cYcmj9A.png", sort_order: 6 },
    { title: "NFT Gallery", description: "Immersive 3D NFT gallery experience with Web3 integration", image: "https://i.imgur.com/0f1Lj0u.gif", sort_order: 7 },
    { title: "Holographic UI", description: "Next-gen holographic user interface for spatial computing", image: "https://i.imgur.com/lkJiH08.png", sort_order: 8 },
    { title: "Crypto Dashboard", description: "Real-time cryptocurrency trading dashboard with advanced analytics", image: "https://i.imgur.com/2gloIMC.png", sort_order: 9 },
    { title: "Neural Network Viz", description: "AI-powered neural network visualization with neon aesthetics", image: "https://i.imgur.com/LaK3xKq.png", sort_order: 10 },
    { title: "Cyber Marketplace", description: "Immersive cyberpunk marketplace with dynamic neon signage", image: "https://i.imgur.com/eIZAV7A.gif", sort_order: 11 },
    { title: "Metaverse Portal", description: "Gateway interface for metaverse navigation and exploration", image: "https://i.imgur.com/t0RQ1bF.jpeg", sort_order: 12 },
    { title: "AI Assistant", description: "Conversational AI interface with personality and emotion", image: "https://i.imgur.com/luBVT7n.png", sort_order: 13 },
    { title: "Digital Ecosystem", description: "Interconnected digital workspace with real-time collaboration", image: "https://i.imgur.com/1PmWMXN.png", sort_order: 14 },
    { title: "Data Visualization", description: "Advanced data analytics platform with interactive visualizations", image: "https://i.imgur.com/EOLUSDx.png", sort_order: 15 },
    { title: "Smart City Interface", description: "Urban planning and management dashboard for smart cities", image: "https://i.imgur.com/bJllb2F.png", sort_order: 16 },
    { title: "Virtual Showroom", description: "Immersive product showcase with 3D interactive elements", image: "https://i.imgur.com/Q3a6KOh.png", sort_order: 17 },
    { title: "Gaming Platform", description: "Next-generation gaming interface with social features", image: "https://i.imgur.com/2nBuwqu.jpeg", sort_order: 18 },
    { title: "Music Visualizer", description: "Real-time audio visualization with stunning visual effects", image: "https://i.imgur.com/0nJeC1i.png", sort_order: 19 },
    { title: "E-Commerce Hub", description: "Modern shopping experience with AR product previews", image: "https://i.imgur.com/llqXNTL.jpeg", sort_order: 20 },
    { title: "Social Network", description: "Decentralized social platform with Web3 integration", image: "https://i.imgur.com/uo6hBAZ.png", sort_order: 21 },
    { title: "Fitness Tracker", description: "Health and wellness dashboard with AI coaching", image: "https://i.imgur.com/DgVQe2a.png", sort_order: 22 },
    { title: "Education Portal", description: "Interactive learning platform with gamification", image: "https://i.imgur.com/XfXQG9c.png", sort_order: 23 },
    { title: "Finance Dashboard", description: "Personal finance management with investment insights", image: "https://i.imgur.com/AJUelZE.png", sort_order: 24 },
    { title: "Travel Planner", description: "AI-powered travel recommendations and booking system", image: "https://i.imgur.com/MR84nX1.png", sort_order: 25 },
    { title: "Creative Studio", description: "Digital art creation tools with AI assistance", image: "https://i.imgur.com/cSNkJ3d.png", sort_order: 26 },
    { title: "Task Manager", description: "Productivity suite with team collaboration features", image: "https://i.imgur.com/1Hk6bp3.png", sort_order: 27 },
    { title: "Weather Station", description: "Hyperlocal weather forecasting with climate data", image: "https://i.imgur.com/HoDXr33.png", sort_order: 28 },
    { title: "Recipe Hub", description: "Culinary platform with meal planning and nutrition tracking", image: "https://i.imgur.com/PgSaCMg.png", sort_order: 29 },
    { title: "IoT Controller", description: "Smart home automation and device management system", image: "https://i.imgur.com/jBFVozw.png", sort_order: 30 },
    { title: "Event Platform", description: "Virtual and hybrid event management with live streaming", image: "https://i.imgur.com/jR0XvoU.png", sort_order: 31 },
    { title: "Portfolio Showcase", description: "Creative portfolio builder with interactive galleries", image: "https://i.imgur.com/AG4vj9U.png", sort_order: 32 },
    { title: "Analytics Engine", description: "Business intelligence platform with predictive analytics", image: "https://i.imgur.com/ggxwHS9.png", sort_order: 33 },
    { title: "Video Streaming", description: "Content delivery platform with adaptive streaming", image: "https://i.imgur.com/FzBrT7X.png", sort_order: 34 },
    { title: "Messaging App", description: "Encrypted messaging with voice and video calls", image: "https://i.imgur.com/nxQVUGb.png", sort_order: 35 },
    { title: "News Aggregator", description: "Personalized news feed with AI content curation", image: "https://i.imgur.com/fSmwV7p.png", sort_order: 36 },
    { title: "Booking System", description: "Appointment scheduling with calendar integration", image: "https://i.imgur.com/ipJ2CK4.png", sort_order: 37 },
    { title: "AR Experience", description: "Augmented reality showcase with spatial computing", image: "https://i.imgur.com/eUfM4fs.png", sort_order: 38 },
    { title: "Security Dashboard", description: "Cybersecurity monitoring with threat detection", image: "https://i.imgur.com/cVd1IUk.png", sort_order: 39 },
    { title: "Marketplace Pro", description: "P2P marketplace with escrow and ratings system", image: "https://i.imgur.com/90ueAK4.png", sort_order: 40 },
    { title: "Cloud Storage", description: "Decentralized file storage with encryption", image: "https://i.imgur.com/gxp9xik.jpeg", sort_order: 41 },
    { title: "Design System", description: "Component library with design tokens and documentation", image: "https://i.imgur.com/r4QQWrd.png", sort_order: 42 },
  ];

  // Insert projects using a transaction
  await client.batch(
    projects.map((project) => ({
      sql: `INSERT INTO projects (title, description, image, link, sort_order) VALUES (?, ?, ?, ?, ?)`,
      args: [project.title, project.description, project.image, '', project.sort_order],
    }))
  );

  console.log(`Successfully seeded ${projects.length} projects into the database.`);
}

seed().catch(console.error);
