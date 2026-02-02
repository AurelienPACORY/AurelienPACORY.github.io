export const SKILLS = [
  { name: 'Réseaux & Protocoles', level: 85, category: 'network' },
  { name: 'Cisco/Packet Tracer', level: 80, category: 'network' },
  { name: 'Linux/Unix', level: 75, category: 'system' },
  { name: 'Python', level: 70, category: 'dev' },
  { name: 'HTML/CSS/JS', level: 85, category: 'dev' },
  { name: 'Docker', level: 65, category: 'system' },
  { name: 'Sécurité Réseau', level: 70, category: 'network' },
  { name: 'VoIP/Téléphonie', level: 60, category: 'network' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Configuration Réseau Entreprise',
    description: 'Mise en place d\'une infrastructure réseau complète avec VLANs, routage inter-VLAN et sécurisation.',
    category: 'Réseaux',
    tags: ['Cisco', 'VLANs', 'Routage', 'Sécurité'],
    image: '/assets/project1.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Serveur Web Haute Disponibilité',
    description: 'Déploiement d\'un cluster de serveurs web avec load balancing et redondance.',
    category: 'Systèmes',
    tags: ['Linux', 'Nginx', 'Docker', 'HA'],
    image: '/assets/project2.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Analyseur de Trafic Réseau',
    description: 'Application Python pour l\'analyse et la visualisation du trafic réseau en temps réel.',
    category: 'Développement',
    tags: ['Python', 'Scapy', 'Wireshark', 'Data Viz'],
    image: '/assets/project3.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Système VoIP',
    description: 'Implémentation d\'une solution de téléphonie IP avec Asterisk.',
    category: 'Réseaux',
    tags: ['VoIP', 'Asterisk', 'SIP', 'QoS'],
    image: '/assets/project4.jpg',
    github: '#',
    demo: '#',
  },
];

export const TIMELINE = [
  {
    year: '2023 - 2026',
    title: 'BUT Réseaux & Télécommunications',
    institution: 'Parcours: Cybersécurité - IUT de Blois - Blois (41)',
    description: 'Formation spécialisée en réseaux, systèmes et télécommunications, avec un focus sur la cybersécurité.',
  },
  {
    year: '2023',
    title: 'Baccalauréat Général',
    institution: 'Spécialités: Mathématiques & Sciences de l\'Ingénieur - Lycée Notre Dame de Sion-Evry (91)',
    description: 'Obtention du baccalauréat avec une formation solide en sciences.',
  },
];

export const EXPERIENCES = [
  {
    year: '2025',
    title: 'Stage d\'entreprise',
    company: 'SMART-IT',
    location: 'Paris - 15ème',
    logo: '/smart-it-logo.png',
    summary: 'Ce stage m’a permis de consolider mes compétences en réseau, systèmes, cybersécurité et support technique. Il m’a également appris l’importance de la rigueur, de la documentation et de la communication claire auprès d’utilisateurs aux profils variés.',
    missions: [
      {
        category: 'Infrastructure et réseau',
        tasks: [
          'Migration d’un firewall Cisco vers SonicWall',
          'Installation de bornes Wi-Fi UniFi',
          'Configuration réseau (DNS, DHCP, NAT)',
        ],
        icon: 'Wifi',
      },
      {
        category: 'Postes utilisateurs & automatisation',
        tasks: [
          'Création de comptes Active Directory',
          'Développement d’un script PowerShell pour l’extraction automatisée d’infos utilisateurs',
        ],
        icon: 'Users',
      },
      {
        category: 'Téléphonie IP & brassage réseau',
        tasks: [
          'Déploiement de téléphones Poly CCX 400 (compatibles Teams)',
          'Rédaction d’une procédure illustrée pour standardiser les installations',
        ],
        icon: 'Phone',
      },
      {
        category: 'Cybersécurité & sensibilisation',
        tasks: [
          'Analyse de sites frauduleux et prévention',
          'Mise en place d’un Wi-Fi invité sécurisé avec portail captif',
        ],
        icon: 'Shield',
      },
    ],
    skills: [
      'Esprit d’analyse et rigueur',
      'Autonomie et gestion des interventions',
      'Pédagogie et communication',
      'Analyse technique de sites malveillants',
      'Réactivité face aux situations à risque',
    ],
  },
  {
    year: '2025 - 2026',
    title: 'Contrat d\'apprentissage',
    company: 'Sopra Steria',
    location: 'Courbevoie (92)',
    logo: '', // No logo provided yet
    summary: 'Apprentissage en cybersécurité au sein d\'une entreprise de services numériques, contribuant à la protection des systèmes et des données.',
    missions: [],
    skills: [],
  },
];

export const CONTACT_INFO = {
  email: 'aurelien.pacory@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aurelien-pacory-542164293',
  github: 'https://github.com/AurelienPACORY',
  location: 'France, Paris',
};

export const LANGUAGES = [
    { name: 'Français', level: 'Langue maternelle', flag: '🇫🇷' },
    { name: 'Anglais', level: 'Niveau A2/B1', flag: '🇬🇧' },
    { name: 'Espagnol', level: 'Niveau A2', flag: '🇪🇸' },
];

export const HOBBIES = [
    {
        title: 'Jouer de la guitare',
        description: "Je joue de la guitare depuis 2018. J'aime bien en jouer régulièrement, notamment avec mes amis et devant ma famille pendant les fêtes !",
        icon: '🎸',
    },
    {
        title: 'Voyager / Culture',
        description: "J'aimerais un jour faire le tour du monde, les autres pays et leur culture me passionnent. Sans oublier la culture culinaire !",
        icon: '✈️',
    },
    {
        title: 'Cuisiner',
        description: "En parlant de nourriture, qui n'aime pas les gâteaux ? Tarte aux fruits, choux, perle coco... Mais aussi cuisiner de nouvelles saveurs comme le rougail saucisse, le riz cantonais ou le poulet au curry.",
        icon: '🍳',
    },
    {
        title: 'Sport',
        description: "J'ai pratiqué pendant plusieurs années le badminton, le tennis de table en club, du taekwondo (ceinture rouge) et de la voile (niveau 3).",
        icon: '🏃‍♂️',
    },
];

export const SOFT_SKILLS = [
    'Ecoute',
    'Communication',
    'Gestion du temps',
    'Rédaction',
    'Autonomie',
    'Ponctuel',
];
