export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Equipo e Inventario (INER)',
    description: 'Sistema integral web para gestión completa de equipo médico e inventario hospitalario. Incluye control de activos, flujos de alta/baja, control de existencias, lotes, reportes automatizados y actualizaciones en tiempo real mediante WebSockets. Redujo 30% los tiempos de gestión.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Livewire', 'WebSocket', 'MySQL', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 2,
    title: 'Automatización de reportes nacionales (INER)',
    description: 'Pipeline de automatización para recolección y entrega diaria de resultados de laboratorio a los 32 estados. Disminuyó errores manuales en 95% con validaciones y envíos programados.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Queues', 'Cron', 'MySQL', 'SQL Server', 'Bash'],
    featured: true,
    slug: 'automatizacion-reportes-iner',
    caseStudy: {
      problem: 'Entrega manual y dispersa de resultados a nivel nacional generaba errores frecuentes y demoras.',
      solution: 'Implementación de un pipeline con colas, tareas programadas y validaciones de integridad; normalización de datos y envíos automáticos a destinos estatales.',
      impact: [
        '−95% errores humanos en la entrega',
        'Entregas diarias consistentes a 32 estados',
        'Monitoreo y reintentos automáticos',
      ],
      architecture: 'Laravel + Jobs/Queues (Redis/DB) + Cron, validaciones por esquema y auditoría de eventos; integración con MySQL/SQL Server y scripts Bash para tareas del sistema.',
      challenges: [
        'Heterogeneidad de fuentes de datos',
        'Idempotencia y reintentos seguros',
        'Trazabilidad/auditoría de entregas',
      ]
    }
  },
  {
    id: 3,
    title: 'Gestión de adquisiciones y compras (INER)',
    description: 'Módulo de adquisiciones con flujos de autorización, control presupuestal y trazabilidad. Roles y permisos, evidencias y reportes ejecutivos.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Vue.js', 'Bootstrap', 'MySQL'],
    featured: false
  },
  {
    id: 4,
    title: 'Agendamiento de citas (INER)',
    description: 'Sistema de agenda con gestión de disponibilidad, notificaciones y control de asistencia para áreas clínicas.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Alpine.js', 'WebSocket', 'MySQL'],
    featured: false
  },
  {
    id: 5,
    title: 'Cargas masivas SIIA UNAM (DGTIC)',
    description: 'Herramienta para ingestión masiva (CSV/XLSX) hacia SIIA con validación, normalización y seguimiento de procesos en segundo plano.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'PostgreSQL', 'Queues', 'Excel/CSV'],
    featured: true
  },
  {
    id: 6,
    title: 'Validación de publicaciones arbitradas (DGTIC)',
    description: 'Sistema para validar y consolidar publicaciones académicas arbitradas, con auditoría y criterios configurables.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Livewire', 'PostgreSQL', 'SOLID'],
    featured: false
  },
  {
    id: 7,
    title: 'Directorio de Rectoría UNAM (DGTIC)',
    description: 'Directorio institucional con administración de jerarquías, búsqueda avanzada y exportaciones.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Alpine.js', 'PostgreSQL', 'Tailwind CSS'],
    featured: false
  },
  {
    id: 8,
    title: 'Simulador de Realidad Virtual (TECNOSIM)',
    description: 'Diseño electrónico y software para simulador de RV con adquisición y procesamiento de datos, orientado a entrenamiento médico. Incluye diseño y manufactura de modelos anatómicos (impresión 3D).',
    image: '/project-placeholder.jpg',
    technologies: ['VR', 'Electrónica', 'Impresión 3D'],
    featured: false
  },
  {
    id: 9,
    title: 'Sitios Web del CIENI (INER)',
    description: 'Desarrollo y mantenimiento de sitios web del Centro de Investigación en Enfermedades Infecciosas (CIENI). Incluye gestión de contenido, actualizaciones dinámicas y funcionalidades interactivas para difusión de investigación y actividades académicas.',
    image: '/project-placeholder.jpg',
    technologies: ['Laravel', 'Livewire', 'WebSocket', 'MySQL', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 10,
    title: 'Página personal / Portafolio',
    description: 'Sitio web personal desarrollado con Vue 3 y Tailwind CSS. Incluye secciones de experiencia, proyectos, formulario de contacto con EmailJS y reproductor embebido de Spotify.',
    image: '/project-placeholder.jpg',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'EmailJS', 'Spotify Embed'],
    featured: true
  }
]

