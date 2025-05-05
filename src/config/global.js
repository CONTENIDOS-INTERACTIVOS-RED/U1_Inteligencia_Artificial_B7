export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la Inteligencia Artificial',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es la Inteligencia Artificial?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia y evolución de la Inteligencia Artificial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicaciones de la IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sector de la salud',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sector financiero',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Industria y manufactura',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Transporte y movilidad',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Comercio y marketing',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Educación',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Entretenimiento y medios',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Seguridad y ciberseguridad',
            hash: 't_3_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.9',
            titulo: 'Agricultura',
            hash: 't_3_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.10',
            titulo: 'Ingeniería',
            hash: 't_3_10',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Meseguer González, P. & López de Mántaras Badia, R. (2017). Inteligencia Artificial: ( ed.). Editorial CSIC Consejo Superior de Investigaciones Científicas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42319',
    },
    {
      referencia:
        'Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: ( ed.). Editorial UOC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744',
    },
    {
      referencia:
        'Benítez Iglésias, R. (2014). Inteligencia Artificial avanzada: ( ed.). Editorial UOC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57582 ',
    },
  ],
  glosario: [
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'Rama de la informática que desarrolla sistemas capaces de realizar tareas que normalmente requieren inteligencia humana',
    },
    {
      termino: 'Aprendizaje automático (Machine Learning)',
      significado:
        'Es una subárea de la IA que permite a las máquinas aprender a partir de datos sin ser programadas explícitamente.',
    },
    {
      termino: 'Procesamiento de Lenguaje Natural (PLN)',
      significado:
        'Rama de la IA y la lingüística computacional que permite a las computadoras comprender, interpretar y generar lenguaje humano.',
    },
    {
      termino: 'Visión Artificial',
      significado:
        'Campo de la IA que permite a las máquinas interpretar y analizar imágenes o videos.',
    },
    {
      termino: 'Robótica',
      significado:
        'Disciplina que diseña, construye y programa robots para realizar tareas de manera autónoma o asistida.',
    },
    {
      termino: 'Automatización',
      significado:
        'Es el uso de tecnología para realizar tareas con mínima o ninguna intervención humana, mejorando la eficiencia en procesos industriales, administrativos y de software.',
    },
    {
      termino: 'Aprendizaje profundo (Deep Learning)',
      significado:
        'Es una subcategoría del aprendizaje automático basada en redes neuronales artificiales profundas, que permite el procesamiento avanzado de datos como imágenes, texto y audio.',
    },
    {
      termino: 'Realidad virtual (VR)',
      significado:
        'Es una tecnología que crea entornos digitales inmersivos e interactivos mediante dispositivos como gafas VR, utilizados en videojuegos, simulaciones y entrenamiento.',
    },
    {
      termino: 'Chatbots',
      significado:
        'Son programas informáticos que utilizan IA y PLN para interactuar con los usuarios mediante texto o voz, brindando respuestas automatizadas',
    },
    {
      termino: 'IA Débil (Narrow AI)',
      significado:
        'Es un tipo de IA diseñada para realizar tareas específicas con un alto nivel de eficiencia',
    },
    {
      termino: 'IA General (AGI)',
      significado:
        'Es una Inteligencia Artificial hipotética capaz de realizar cualquier tarea cognitiva que un humano pueda hacer, con razonamiento, aprendizaje y adaptación en diversos contextos.',
    },
    {
      termino: 'IA Superinteligente (Super AI)',
      significado:
        'Es una forma teórica de IA que superaría la inteligencia humana en todos los aspectos, incluyendo creatividad, resolución de problemas y toma de decisiones',
    },
  ],
}
