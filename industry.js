const industriesData = [
    {
        id: 1,
        name: 'Web Development',
        icon: 'fa-code',
        description: 'Membangun aplikasi web modern',
        skills: [
            {
                id: 101,
                name: 'HTML & CSS',
                icon: 'fa-html5',
                category: 'Frontend',
                description: 'Fundamental untuk membangun struktur dan styling web',
                level: 90,
                details: {
                    fullDescription: 'HTML (HyperText Markup Language) dan CSS (Cascading Style Sheets) adalah fondasi dari setiap website. HTML digunakan untuk membuat struktur konten, sementara CSS digunakan untuk styling dan layout.',
                    prerequisites: ['Pemahaman dasar komputer', 'Text editor', 'Web browser'],
                    learningPath: [
                        'Semantic HTML elements',
                        'CSS Selectors dan Specificity',
                        'Flexbox dan Grid Layout',
                        'Responsive Design',
                        'CSS Animations',
                        'CSS Preprocessors (SASS/LESS)'
                    ],
                    resources: [
                        { name: 'MDN Web Docs', type: 'Documentation', icon: 'fa-book' },
                        { name: 'freeCodeCamp', type: 'Course', icon: 'fa-graduation-cap' },
                        { name: 'CSS Tricks', type: 'Blog', icon: 'fa-newspaper' }
                    ],
                    timeToLearn: '2-3 bulan',
                    difficulty: 'Beginner'
                }
            },
            {
                id: 102,
                name: 'JavaScript',
                icon: 'fa-js',
                category: 'Programming',
                description: 'Bahasa pemrograman untuk interaktivitas web',
                level: 85,
                details: {
                    fullDescription: 'JavaScript adalah bahasa pemrograman yang memungkinkan Anda membuat konten dinamis dan interaktif di web. Dari animasi sederhana hingga aplikasi web kompleks.',
                    prerequisites: ['HTML & CSS', 'Logika pemrograman dasar'],
                    learningPath: [
                        'Variables, Data Types, Operators',
                        'Functions dan Scope',
                        'DOM Manipulation',
                        'Event Handling',
                        'Async Programming (Promises, Async/Await)',
                        'ES6+ Features'
                    ],
                    resources: [
                        { name: 'JavaScript.info', type: 'Tutorial', icon: 'fa-book-open' },
                        { name: 'Eloquent JavaScript', type: 'Book', icon: 'fa-book' },
                        { name: 'JavaScript30', type: 'Challenge', icon: 'fa-dumbbell' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 103,
                name: 'React.js',
                icon: 'fa-react',
                category: 'Framework',
                description: 'Library JavaScript untuk membangun UI',
                level: 80,
                details: {
                    fullDescription: 'React adalah library JavaScript yang dikembangkan oleh Facebook untuk membangun user interface yang cepat dan interaktif. Menggunakan konsep component-based architecture.',
                    prerequisites: ['JavaScript (ES6+)', 'HTML & CSS', 'NPM/Yarn'],
                    learningPath: [
                        'JSX Syntax',
                        'Components dan Props',
                        'State Management',
                        'Hooks (useState, useEffect, etc)',
                        'React Router',
                        'Context API atau Redux'
                    ],
                    resources: [
                        { name: 'React Docs', type: 'Documentation', icon: 'fa-book' },
                        { name: 'Scrimba React Course', type: 'Course', icon: 'fa-video' },
                        { name: 'React Patterns', type: 'Guide', icon: 'fa-lightbulb' }
                    ],
                    timeToLearn: '3-4 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 104,
                name: 'Node.js',
                icon: 'fa-node-js',
                category: 'Backend',
                description: 'JavaScript runtime untuk backend development',
                level: 75,
                details: {
                    fullDescription: 'Node.js memungkinkan Anda menjalankan JavaScript di server. Sangat populer untuk membangun API, real-time applications, dan microservices.',
                    prerequisites: ['JavaScript', 'HTTP Protocol', 'Database basics'],
                    learningPath: [
                        'Node.js Fundamentals',
                        'Express.js Framework',
                        'RESTful API Design',
                        'Authentication & Authorization',
                        'Database Integration',
                        'Testing dan Debugging'
                    ],
                    resources: [
                        { name: 'Node.js Docs', type: 'Documentation', icon: 'fa-file-code' },
                        { name: 'The Net Ninja', type: 'YouTube', icon: 'fa-youtube' },
                        { name: 'Express.js Guide', type: 'Guide', icon: 'fa-compass' }
                    ],
                    timeToLearn: '3-5 bulan',
                    difficulty: 'Intermediate'
                }
            }
        ]
    },
    {
        id: 2,
        name: 'Data Science',
        icon: 'fa-chart-line',
        description: 'Analisis data dan machine learning',
        skills: [
            {
                id: 201,
                name: 'Python',
                icon: 'fa-python',
                category: 'Programming',
                description: 'Bahasa pemrograman utama untuk data science',
                level: 90,
                details: {
                    fullDescription: 'Python adalah bahasa pemrograman yang paling populer di bidang data science karena sintaksnya yang mudah dipahami dan ekosistem library yang kuat.',
                    prerequisites: ['Logika pemrograman', 'Matematika dasar'],
                    learningPath: [
                        'Python Basics',
                        'Data Structures',
                        'NumPy dan Pandas',
                        'Data Visualization (Matplotlib, Seaborn)',
                        'Statistical Analysis',
                        'Scikit-learn'
                    ],
                    resources: [
                        { name: 'Python.org', type: 'Official Docs', icon: 'fa-book' },
                        { name: 'Kaggle Learn', type: 'Course', icon: 'fa-graduation-cap' },
                        { name: 'DataCamp', type: 'Platform', icon: 'fa-laptop-code' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Beginner to Intermediate'
                }
            },
            {
                id: 202,
                name: 'SQL',
                icon: 'fa-database',
                category: 'Database',
                description: 'Query language untuk database relational',
                level: 85,
                details: {
                    fullDescription: 'SQL adalah bahasa standar untuk berinteraksi dengan database relational. Essential skill untuk setiap data scientist dan analyst.',
                    prerequisites: ['Database concepts', 'Logika dasar'],
                    learningPath: [
                        'SELECT Statements',
                        'JOINs (INNER, LEFT, RIGHT)',
                        'Aggregate Functions',
                        'Subqueries',
                        'Window Functions',
                        'Query Optimization'
                    ],
                    resources: [
                        { name: 'SQLZoo', type: 'Interactive Tutorial', icon: 'fa-gamepad' },
                        { name: 'Mode Analytics SQL', type: 'Course', icon: 'fa-chalkboard-teacher' },
                        { name: 'LeetCode SQL', type: 'Practice', icon: 'fa-code' }
                    ],
                    timeToLearn: '2-3 bulan',
                    difficulty: 'Beginner'
                }
            },
            {
                id: 203,
                name: 'Machine Learning',
                icon: 'fa-brain',
                category: 'AI/ML',
                description: 'Algoritma untuk membuat model prediktif',
                level: 70,
                details: {
                    fullDescription: 'Machine Learning adalah cabang AI yang fokus pada pembangunan sistem yang belajar dari data. Digunakan untuk prediksi, klasifikasi, dan pattern recognition.',
                    prerequisites: ['Python', 'Statistics', 'Linear Algebra', 'Calculus'],
                    learningPath: [
                        'Supervised Learning',
                        'Unsupervised Learning',
                        'Feature Engineering',
                        'Model Evaluation',
                        'Deep Learning Basics',
                        'Model Deployment'
                    ],
                    resources: [
                        { name: 'Coursera ML by Andrew Ng', type: 'Course', icon: 'fa-graduation-cap' },
                        { name: 'Fast.ai', type: 'Course', icon: 'fa-rocket' },
                        { name: 'Papers with Code', type: 'Research', icon: 'fa-file-alt' }
                    ],
                    timeToLearn: '6-12 bulan',
                    difficulty: 'Advanced'
                }
            }
        ]
    },
    {
        id: 3,
        name: 'Mobile Development',
        icon: 'fa-mobile-alt',
        description: 'Membuat aplikasi mobile iOS dan Android',
        skills: [
            {
                id: 301,
                name: 'Flutter',
                icon: 'fa-mobile',
                category: 'Framework',
                description: 'Cross-platform mobile development',
                level: 80,
                details: {
                    fullDescription: 'Flutter adalah framework dari Google untuk membangun aplikasi mobile cross-platform dengan satu codebase untuk iOS dan Android.',
                    prerequisites: ['OOP concepts', 'Dart language'],
                    learningPath: [
                        'Dart Programming',
                        'Flutter Widgets',
                        'State Management (Provider, Bloc)',
                        'Navigation & Routing',
                        'API Integration',
                        'Platform-specific Code'
                    ],
                    resources: [
                        { name: 'Flutter Docs', type: 'Documentation', icon: 'fa-book' },
                        { name: 'Flutter Widget of the Week', type: 'Video Series', icon: 'fa-video' },
                        { name: 'Pub.dev', type: 'Package Repository', icon: 'fa-box' }
                    ],
                    timeToLearn: '3-5 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 302,
                name: 'React Native',
                icon: 'fa-react',
                category: 'Framework',
                description: 'Mobile apps menggunakan React',
                level: 75,
                details: {
                    fullDescription: 'React Native memungkinkan developer web yang familiar dengan React untuk membuat aplikasi mobile native.',
                    prerequisites: ['JavaScript', 'React.js', 'Mobile UI/UX'],
                    learningPath: [
                        'React Native Basics',
                        'Native Components',
                        'Navigation (React Navigation)',
                        'State Management',
                        'Native Modules',
                        'Performance Optimization'
                    ],
                    resources: [
                        { name: 'React Native Docs', type: 'Documentation', icon: 'fa-file-code' },
                        { name: 'Expo', type: 'Platform', icon: 'fa-rocket' },
                        { name: 'React Native School', type: 'Course', icon: 'fa-school' }
                    ],
                    timeToLearn: '3-4 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 303,
                name: 'Swift',
                icon: 'fa-apple',
                category: 'Programming',
                description: 'Native iOS development',
                level: 70,
                details: {
                    fullDescription: 'Swift adalah bahasa pemrograman modern dari Apple untuk membuat aplikasi iOS, macOS, watchOS, dan tvOS.',
                    prerequisites: ['OOP concepts', 'Xcode IDE'],
                    learningPath: [
                        'Swift Syntax',
                        'UIKit / SwiftUI',
                        'Auto Layout',
                        'Core Data',
                        'Networking',
                        'App Store Deployment'
                    ],
                    resources: [
                        { name: 'Swift.org', type: 'Official Site', icon: 'fa-globe' },
                        { name: 'Hacking with Swift', type: 'Tutorial', icon: 'fa-keyboard' },
                        { name: 'Apple Developer', type: 'Documentation', icon: 'fa-apple' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Intermediate to Advanced'
                }
            }
        ]
    },
    {
        id: 4,
        name: 'UI/UX Design',
        icon: 'fa-palette',
        description: 'Desain user interface dan experience',
        skills: [
            {
                id: 401,
                name: 'Figma',
                icon: 'fa-figma',
                category: 'Design Tool',
                description: 'Tool desain UI/UX kolaboratif',
                level: 85,
                details: {
                    fullDescription: 'Figma adalah tool desain berbasis cloud yang memungkinkan kolaborasi real-time untuk membuat prototype dan design system.',
                    prerequisites: ['Design principles', 'Basic graphics knowledge'],
                    learningPath: [
                        'Figma Interface',
                        'Frames dan Components',
                        'Auto Layout',
                        'Prototyping',
                        'Design Systems',
                        'Collaboration Features'
                    ],
                    resources: [
                        { name: 'Figma Learn', type: 'Official Tutorial', icon: 'fa-graduation-cap' },
                        { name: 'Figma Community', type: 'Resources', icon: 'fa-users' },
                        { name: 'YouTube Tutorials', type: 'Video', icon: 'fa-youtube' }
                    ],
                    timeToLearn: '1-2 bulan',
                    difficulty: 'Beginner'
                }
            },
            {
                id: 402,
                name: 'User Research',
                icon: 'fa-search',
                category: 'Research',
                description: 'Memahami kebutuhan dan behavior user',
                level: 75,
                details: {
                    fullDescription: 'User Research adalah proses sistematis untuk memahami user, kebutuhan mereka, dan context penggunaan produk.',
                    prerequisites: ['Empathy', 'Communication skills', 'Critical thinking'],
                    learningPath: [
                        'Research Methods',
                        'User Interviews',
                        'Surveys dan Questionnaires',
                        'Usability Testing',
                        'Data Analysis',
                        'Persona Creation'
                    ],
                    resources: [
                        { name: 'Nielsen Norman Group', type: 'Articles', icon: 'fa-newspaper' },
                        { name: 'UX Research Field Guide', type: 'Book', icon: 'fa-book' },
                        { name: 'Interaction Design Foundation', type: 'Course', icon: 'fa-graduation-cap' }
                    ],
                    timeToLearn: '3-6 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 403,
                name: 'Design Systems',
                icon: 'fa-layer-group',
                category: 'System Design',
                description: 'Membuat konsistensi desain di produk',
                level: 70,
                details: {
                    fullDescription: 'Design System adalah koleksi komponen reusable dan guidelines yang memastikan konsistensi visual dan fungsional di seluruh produk.',
                    prerequisites: ['UI Design', 'Component thinking', 'Design tools'],
                    learningPath: [
                        'Design Tokens',
                        'Component Library',
                        'Documentation',
                        'Accessibility Standards',
                        'Version Control',
                        'Implementation with Developers'
                    ],
                    resources: [
                        { name: 'Material Design', type: 'Design System', icon: 'fa-google' },
                        { name: 'Atomic Design', type: 'Methodology', icon: 'fa-atom' },
                        { name: 'Design Systems Repo', type: 'Collection', icon: 'fa-folder-open' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Advanced'
                }
            }
        ]
    },
    {
        id: 5,
        name: 'DevOps',
        icon: 'fa-server',
        description: 'Infrastructure dan deployment automation',
        skills: [
            {
                id: 501,
                name: 'Docker',
                icon: 'fa-docker',
                category: 'Containerization',
                description: 'Platform untuk containerize applications',
                level: 80,
                details: {
                    fullDescription: 'Docker adalah platform yang memungkinkan developer untuk package aplikasi dan dependencies-nya ke dalam container yang portable.',
                    prerequisites: ['Linux basics', 'Command line', 'Networking'],
                    learningPath: [
                        'Docker Basics',
                        'Dockerfile',
                        'Docker Compose',
                        'Container Networking',
                        'Volumes dan Persistence',
                        'Docker Registry'
                    ],
                    resources: [
                        { name: 'Docker Docs', type: 'Documentation', icon: 'fa-book' },
                        { name: 'Docker Hub', type: 'Registry', icon: 'fa-box' },
                        { name: 'Play with Docker', type: 'Practice', icon: 'fa-play' }
                    ],
                    timeToLearn: '2-3 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 502,
                name: 'Kubernetes',
                icon: 'fa-dharmachakra',
                category: 'Orchestration',
                description: 'Container orchestration platform',
                level: 70,
                details: {
                    fullDescription: 'Kubernetes (K8s) adalah platform open-source untuk automating deployment, scaling, dan management dari containerized applications.',
                    prerequisites: ['Docker', 'Distributed systems', 'Cloud concepts'],
                    learningPath: [
                        'K8s Architecture',
                        'Pods dan Services',
                        'Deployments',
                        'ConfigMaps dan Secrets',
                        'Ingress',
                        'Monitoring dan Logging'
                    ],
                    resources: [
                        { name: 'Kubernetes Docs', type: 'Documentation', icon: 'fa-file-alt' },
                        { name: 'Katacoda', type: 'Interactive Learning', icon: 'fa-terminal' },
                        { name: 'CNCF', type: 'Community', icon: 'fa-users' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Advanced'
                }
            },
            {
                id: 503,
                name: 'CI/CD',
                icon: 'fa-infinity',
                category: 'Automation',
                description: 'Continuous Integration & Deployment',
                level: 75,
                details: {
                    fullDescription: 'CI/CD adalah practices untuk automating software development lifecycle dari code commit hingga production deployment.',
                    prerequisites: ['Git', 'Testing', 'Deployment basics'],
                    learningPath: [
                        'CI/CD Concepts',
                        'Jenkins / GitLab CI / GitHub Actions',
                        'Automated Testing',
                        'Build Pipelines',
                        'Deployment Strategies',
                        'Monitoring dan Rollback'
                    ],
                    resources: [
                        { name: 'GitHub Actions', type: 'Platform', icon: 'fa-github' },
                        { name: 'GitLab CI/CD', type: 'Documentation', icon: 'fa-gitlab' },
                        { name: 'Jenkins Docs', type: 'Documentation', icon: 'fa-book' }
                    ],
                    timeToLearn: '3-4 bulan',
                    difficulty: 'Intermediate'
                }
            }
        ]
    },
    {
        id: 6,
        name: 'Cybersecurity',
        icon: 'fa-shield-alt',
        description: 'Keamanan sistem dan data',
        skills: [
            {
                id: 601,
                name: 'Network Security',
                icon: 'fa-network-wired',
                category: 'Security',
                description: 'Mengamankan infrastruktur network',
                level: 75,
                details: {
                    fullDescription: 'Network Security melibatkan policies dan practices untuk mencegah dan monitor unauthorized access, modification, atau denial dari computer network.',
                    prerequisites: ['Networking fundamentals', 'OSI Model', 'Protocols'],
                    learningPath: [
                        'Firewalls',
                        'VPN',
                        'IDS/IPS',
                        'Network Monitoring',
                        'Encryption',
                        'Security Auditing'
                    ],
                    resources: [
                        { name: 'CompTIA Security+', type: 'Certification', icon: 'fa-certificate' },
                        { name: 'Cisco Networking', type: 'Course', icon: 'fa-graduation-cap' },
                        { name: 'OWASP', type: 'Resource', icon: 'fa-lock' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Intermediate to Advanced'
                }
            },
            {
                id: 602,
                name: 'Penetration Testing',
                icon: 'fa-user-secret',
                category: 'Ethical Hacking',
                description: 'Testing keamanan sistem',
                level: 70,
                details: {
                    fullDescription: 'Penetration Testing adalah authorized simulated cyberattack untuk evaluate security dari system, dengan tujuan menemukan dan fixing vulnerabilities.',
                    prerequisites: ['Linux', 'Networking', 'Programming', 'Security basics'],
                    learningPath: [
                        'Reconnaissance',
                        'Scanning dan Enumeration',
                        'Exploitation',
                        'Post-exploitation',
                        'Reporting',
                        'Tools (Metasploit, Burp Suite, etc)'
                    ],
                    resources: [
                        { name: 'Hack The Box', type: 'Practice Platform', icon: 'fa-box' },
                        { name: 'TryHackMe', type: 'Learning Platform', icon: 'fa-laptop-code' },
                        { name: 'OSCP', type: 'Certification', icon: 'fa-award' }
                    ],
                    timeToLearn: '6-12 bulan',
                    difficulty: 'Advanced'
                }
            },
            {
                id: 603,
                name: 'Cryptography',
                icon: 'fa-key',
                category: 'Security',
                description: 'Teknik enkripsi dan keamanan data',
                level: 65,
                details: {
                    fullDescription: 'Cryptography adalah practice dan study dari techniques untuk secure communication di presence dari adversaries. Foundation dari modern security.',
                    prerequisites: ['Mathematics', 'Computer Science', 'Programming'],
                    learningPath: [
                        'Symmetric Encryption',
                        'Asymmetric Encryption',
                        'Hash Functions',
                        'Digital Signatures',
                        'PKI',
                        'Cryptographic Protocols'
                    ],
                    resources: [
                        { name: 'Cryptopals', type: 'Challenge', icon: 'fa-puzzle-piece' },
                        { name: 'Applied Cryptography', type: 'Book', icon: 'fa-book' },
                        { name: 'Coursera Crypto', type: 'Course', icon: 'fa-graduation-cap' }
                    ],
                    timeToLearn: '6-9 bulan',
                    difficulty: 'Advanced'
                }
            }
        ]
    },
    {
        id: 7,
        name: 'Cloud Computing',
        icon: 'fa-cloud',
        description: 'Cloud platforms dan services',
        skills: [
            {
                id: 701,
                name: 'AWS',
                icon: 'fa-aws',
                category: 'Cloud Platform',
                description: 'Amazon Web Services',
                level: 80,
                details: {
                    fullDescription: 'AWS adalah comprehensive cloud platform dari Amazon dengan 200+ services mulai dari computing, storage, database, hingga machine learning.',
                    prerequisites: ['Networking', 'Linux', 'Basic IT infrastructure'],
                    learningPath: [
                        'EC2 (Compute)',
                        'S3 (Storage)',
                        'RDS (Database)',
                        'Lambda (Serverless)',
                        'CloudFormation',
                        'Security & IAM'
                    ],
                    resources: [
                        { name: 'AWS Documentation', type: 'Official Docs', icon: 'fa-aws' },
                        { name: 'AWS Training', type: 'Course', icon: 'fa-chalkboard-teacher' },
                        { name: 'A Cloud Guru', type: 'Platform', icon: 'fa-cloud' }
                    ],
                    timeToLearn: '3-6 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 702,
                name: 'Azure',
                icon: 'fa-microsoft',
                category: 'Cloud Platform',
                description: 'Microsoft Azure cloud services',
                level: 75,
                details: {
                    fullDescription: 'Microsoft Azure adalah cloud computing service dengan focus kuat pada enterprise solutions dan integration dengan Microsoft ecosystem.',
                    prerequisites: ['Cloud concepts', 'Windows Server', 'Networking'],
                    learningPath: [
                        'Azure Virtual Machines',
                        'Azure Storage',
                        'Azure SQL Database',
                        'Azure Functions',
                        'Azure DevOps',
                        'Azure Active Directory'
                    ],
                    resources: [
                        { name: 'Microsoft Learn', type: 'Official Training', icon: 'fa-graduation-cap' },
                        { name: 'Azure Docs', type: 'Documentation', icon: 'fa-file-alt' },
                        { name: 'Pluralsight', type: 'Course Platform', icon: 'fa-video' }
                    ],
                    timeToLearn: '3-6 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 703,
                name: 'Serverless',
                icon: 'fa-bolt',
                category: 'Architecture',
                description: 'Serverless computing patterns',
                level: 70,
                details: {
                    fullDescription: 'Serverless architecture memungkinkan developers untuk build dan run applications tanpa managing servers. Cloud provider secara otomatis manages infrastructure.',
                    prerequisites: ['Cloud platforms', 'Backend development', 'APIs'],
                    learningPath: [
                        'Function as a Service (FaaS)',
                        'Event-driven Architecture',
                        'API Gateway',
                        'Managed Databases',
                        'Authentication Services',
                        'Monitoring dan Logging'
                    ],
                    resources: [
                        { name: 'Serverless Framework', type: 'Framework', icon: 'fa-layer-group' },
                        { name: 'AWS Lambda Docs', type: 'Documentation', icon: 'fa-book' },
                        { name: 'Serverless.com', type: 'Blog', icon: 'fa-newspaper' }
                    ],
                    timeToLearn: '2-4 bulan',
                    difficulty: 'Intermediate'
                }
            }
        ]
    },
    {
        id: 8,
        name: 'Game Development',
        icon: 'fa-gamepad',
        description: 'Membuat video games',
        skills: [
            {
                id: 801,
                name: 'Unity',
                icon: 'fa-unity',
                category: 'Game Engine',
                description: 'Cross-platform game engine',
                level: 80,
                details: {
                    fullDescription: 'Unity adalah salah satu game engine paling populer untuk membuat 2D dan 3D games. Support multiple platforms dari mobile hingga console.',
                    prerequisites: ['C# programming', 'OOP concepts', 'Basic 3D math'],
                    learningPath: [
                        'Unity Interface',
                        'GameObjects dan Components',
                        'Scripting (C#)',
                        'Physics dan Collisions',
                        'Animation',
                        'UI System'
                    ],
                    resources: [
                        { name: 'Unity Learn', type: 'Official Tutorial', icon: 'fa-graduation-cap' },
                        { name: 'Brackeys', type: 'YouTube', icon: 'fa-youtube' },
                        { name: 'Unity Asset Store', type: 'Marketplace', icon: 'fa-store' }
                    ],
                    timeToLearn: '4-6 bulan',
                    difficulty: 'Intermediate'
                }
            },
            {
                id: 802,
                name: 'Unreal Engine',
                icon: 'fa-cube',
                category: 'Game Engine',
                description: 'High-fidelity game development',
                level: 75,
                details: {
                    fullDescription: 'Unreal Engine adalah powerful game engine terkenal dengan graphics quality tinggi. Digunakan untuk AAA games dan juga architectural visualization.',
                    prerequisites: ['C++ programming', '3D graphics', 'Game design'],
                    learningPath: [
                        'Blueprint Visual Scripting',
                        'C++ Gameplay Programming',
                        'Materials dan Shaders',
                        'Lighting',
                        'Animation System',
                        'Multiplayer Networking'
                    ],
                    resources: [
                        { name: 'Unreal Online Learning', type: 'Course', icon: 'fa-school' },
                        { name: 'Unreal Docs', type: 'Documentation', icon: 'fa-book' },
                        { name: 'Epic Games Forums', type: 'Community', icon: 'fa-users' }
                    ],
                    timeToLearn: '5-8 bulan',
                    difficulty: 'Advanced'
                }
            },
            {
                id: 803,
                name: 'Game Design',
                icon: 'fa-pencil-ruler',
                category: 'Design',
                description: 'Merancang gameplay dan mechanics',
                level: 70,
                details: {
                    fullDescription: 'Game Design adalah art dari applying design dan aesthetics untuk create games. Focus pada gameplay, mechanics, dan player experience.',
                    prerequisites: ['Creativity', 'Understanding of games', 'Communication'],
                    learningPath: [
                        'Game Mechanics',
                        'Level Design',
                        'Player Psychology',
                        'Balancing',
                        'Prototyping',
                        'Game Documentation'
                    ],
                    resources: [
                        { name: 'The Art of Game Design', type: 'Book', icon: 'fa-book' },
                        { name: 'Game Maker\'s Toolkit', type: 'YouTube', icon: 'fa-youtube' },
                        { name: 'Gamasutra', type: 'Blog', icon: 'fa-newspaper' }
                    ],
                    timeToLearn: '6-12 bulan',
                    difficulty: 'Intermediate to Advanced'
                }
            }
        ]
    }
];

let currentIndex = 0;
let selectedIndustry = null;
let selectedSkill = null;
const totalIndustries = industriesData.length;

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    setupEventListeners();
    selectIndustry(0);
});

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicators = document.getElementById('indicators');
    
    industriesData.forEach((industry, index) => {
        const card = createIndustryCard(industry, index);
        track.appendChild(card);
        
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    updateCarousel();
}

function createIndustryCard(industry, index) {
    const card = document.createElement('div');
    card.className = 'industry-card';
    card.innerHTML = `
        <div class="industry-icon">
            <i class="fas ${industry.icon}"></i>
        </div>
        <h3 class="industry-name">${industry.name}</h3>
        <p class="industry-description">${industry.description}</p>
    `;
    
    card.addEventListener('click', () => goToSlide(index));
    
    return card;
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.industry-card');
    const indicators = document.querySelectorAll('.indicator');
    
    const cardWidth = 180;
    const gap = 20;
    const containerWidth = track.parentElement.offsetWidth;
    const leftPadding = 50; 
    const offset = leftPadding - (currentIndex * (cardWidth + gap));
    // const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    // const offset = centerOffset - (currentIndex * (cardWidth + gap));
    
    
    track.style.transform = `translateX(${offset}px)`;
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'side');
        
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (Math.abs(index - currentIndex) === 1) {
            card.classList.add('side');
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    selectIndustry(index);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalIndustries;
    updateCarousel();
    selectIndustry(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalIndustries) % totalIndustries;
    updateCarousel();
    selectIndustry(currentIndex);
}

function selectIndustry(index) {
    selectedIndustry = industriesData[index];
    displayIndustryInfo();
    displaySkills();
}

function displayIndustryInfo() {
    const industryName = document.getElementById('industryName');
    const industryDesc = document.getElementById('industryDesc');
    const industryInfoIcon = document.querySelector('.industry-info-icon i');
    
    industryName.textContent = selectedIndustry.name;
    industryDesc.textContent = selectedIndustry.description;
    industryInfoIcon.className = `fas ${selectedIndustry.icon}`;
}

function displaySkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    skillsGrid.innerHTML = '';
    
    selectedIndustry.skills.forEach(skill => {
        const skillCard = createSkillCard(skill);
        skillsGrid.appendChild(skillCard);
    });
}

function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
        <div class="skill-header">
            <i class="fas ${skill.icon} skill-icon"></i>
            <h3 class="skill-name">${skill.name}</h3>
        </div>
        <span class="skill-category">${skill.category}</span>
        <p class="skill-description">${skill.description}</p>
        <div class="skill-level">
            <span>Relevance:</span>
            <div class="level-bar">
                <div class="level-fill" style="width: ${skill.level}%"></div>
            </div>
            <span>${skill.level}%</span>
        </div>
    `;
    
    card.addEventListener('click', () => selectSkill(skill));
    
    return card;
}

function selectSkill(skill) {
    selectedSkill = skill;
    displaySkillDetail();
}

function displaySkillDetail() {
    const detailCard = document.getElementById('skillDetail');
    const details = selectedSkill.details;
    
    detailCard.innerHTML = `
        <div class="detail-header">
            <i class="fas ${selectedSkill.icon} detail-icon"></i>
            <div class="detail-title-group">
                <h2>${selectedSkill.name}</h2>
                <div class="detail-meta">
                    <span class="meta-tag">${selectedSkill.category}</span>
                    <span class="meta-tag"><i class="fas fa-clock"></i> ${details.timeToLearn}</span>
                    <span class="meta-tag"><i class="fas fa-signal"></i> ${details.difficulty}</span>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Deskripsi</h3>
            <p>${details.fullDescription}</p>
        </div>
        
        <div class="detail-section">
            <h3>Prerequisites</h3>
            <ul class="detail-list">
                ${details.prerequisites.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h3>Learning Path</h3>
            <ul class="detail-list">
                ${details.learningPath.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h3>Resources</h3>
            <div class="resources-grid">
                ${details.resources.map(resource => `
                    <div class="resource-card">
                        <i class="fas ${resource.icon}"></i>
                        <h4>${resource.name}</h4>
                        <p>${resource.type}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function setupEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    const floatingNav = document.getElementById('floatingNav');
    const toIndustryBtn = document.getElementById('toIndustryBtn');
    const toSkillsBtn = document.getElementById('toSkillsBtn');
    
    window.addEventListener('scroll', () => {
        const industrySection = document.querySelector('.industry-section');
        const skillsSection = document.querySelector('.skills-section');
        
        if (industrySection && skillsSection) {
            const industrySectionRect = industrySection.getBoundingClientRect();
            const skillsSectionRect = skillsSection.getBoundingClientRect();
            
            const industryNotVisible = industrySectionRect.bottom < 0 || industrySectionRect.top > window.innerHeight;
            const skillsNotVisible = skillsSectionRect.bottom < 0 || skillsSectionRect.top > window.innerHeight;
            
            if (industryNotVisible || skillsNotVisible) {
                floatingNav.classList.add('visible');
            } else {
                floatingNav.classList.remove('visible');
            }
        }
    });
    
    toIndustryBtn.addEventListener('click', () => {
        const industrySection = document.querySelector('.industry-section');
        if (industrySection) {
            industrySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    toSkillsBtn.addEventListener('click', () => {
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}