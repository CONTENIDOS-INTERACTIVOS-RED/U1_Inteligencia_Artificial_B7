<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Historia y evolución de la Inteligencia Artificial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 A continuación, se describen los principales hitos en la historia de la IA:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Precursores de la Inteligencia Artificial")
            p Desde la Edad Media hasta mediados del siglo XVII, los proyectos matemáticos, mecánicos o lógicos trataron, en algunos casos, de reproducir la secuencia de operaciones del intelecto humano. 
            p A finales del siglo XVII, el filósofo y matemático alemán Leibniz, inventó una máquina de cálculo que actuaba con base en principios lógicos; a partir de este evento, los diversos intentos de simular o reproducir mecánicamente los procesos de su mente, le llevaron a concebir máquinas capaces de realizar cálculos de carácter no cuantitativo, es decir, con “una cierta dosis de razón”. Estas reflexiones son la base de las mismas leyes de pensamiento que son las bases indirectas de la matemática simbólica lógica en la época de Boole y Frege. A Leibniz se le considera, uno de los precursores del planteamiento y ejecución de problemas de la lógica simbólica y de la informática actual, indirectamente.
          .div(titulo="La IA en la Computación Temprana (1900 - 1950)")
            p Con el avance de la matemática y la lógica, se sentaron las bases de la IA, con los siguientes eventos relevantes.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 Alan Turing (1936), propuso la idea de una "máquina universal" capaz de realizar cualquier cálculo, base de las computadoras actuales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 En 1943, McCulloch y Pitts desarrollaron el primer modelo de neurona artificial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 Turing Test (1950), Alan Turing propone un test para determinar si una máquina puede "pensar".
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 John von Neumann, introduce la arquitectura de computadoras moderna.
          .div(titulo="Nacimiento de la IA como Campo de Estudio (1956 - 1970)")
            p El término Inteligencia Artificial que se refiere a la técnica que imita el comportamiento humano, fue acuñado en 1956 durante la Conferencia de Dartmouth, organizada por John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon, conocidos como los padres de la Inteligencia Artificial. Este evento marcó el nacimiento oficial de la IA como disciplina. 
            p Según sus definiciones iniciales, la Inteligencia Artificial se interesa por el cómo y no por el porqué de los mecanismos que llevan a cabo los procesos que usualmente consideramos inteligentes en los seres humanos.
            p Durante esta época, se desarrollaron los primeros programas capaces de resolver problemas matemáticos, como el Logic Theorist de Allen Newell y Herbert Simon, y surgieron las primeras redes neuronales con el modelo de perceptrón de Frank Rosenblatt en 1958, sin embargo, a finales de los años 60, Minsky y Papert demostraron las limitaciones del perceptrón, lo que llevó a una disminución del entusiasmo y la financiación en IA lo que marcó  un período de estancamiento que se conoce como el primer "invierno de la IA".
          .div(titulo="Éxitos y fracasos en la búsqueda de la Inteligencia Artificial (1970 - 1990)")
            p Durante los años 70, el interés en la IA resurgió con el desarrollo de los sistemas expertos, programas diseñados para imitar el conocimiento humano en áreas específicas. Un ejemplo destacado fue MYCIN, un sistema utilizado para diagnosticar enfermedades infecciosas.
            p En los años 80, la IA recibió un nuevo impulso gracias al redescubrimiento del algoritmo de backpropagation, que permitió mejorar las redes neuronales. Sin embargo, a finales de la década, el entusiasmo decayó nuevamente cuando las expectativas no se cumplieron, dando paso al segundo "invierno de la IA".
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="El Resurgimiento de la IA con el aprendizaje automático (1990 - 2010)")
            p A partir de los años 90, el crecimiento del poder computacional y la disponibilidad de grandes volúmenes de datos, permitieron avances significativos en la IA. En 1997, Deep Blue, una supercomputadora de IBM, logró derrotar al campeón mundial de ajedrez Garry Kasparov, demostrando el potencial de los algoritmos de búsqueda y aprendizaje automático.
            p Durante la década del 2000, el auge del <em>Big Data</em> y el <em>Machine Learning</em> revolucionó industrias enteras. Empresas como Google comenzaron a usar Inteligencia Artificial para mejorar la búsqueda en Internet y los algoritmos de recomendación.
          .div(titulo="La Revolución del <em>Deep Learning</em> (2010 - actualidad)")
            p El verdadero punto de inflexión llegó en la década del 2010, con el desarrollo del <em>Deep Learning</em>, una técnica basada en redes neuronales profundas que permitió grandes avances en el reconocimiento de imágenes, procesamiento de lenguaje natural y más. En el 2012, el modelo <em>AlexNet</em> revolucionó el reconocimiento de imágenes al superar con creces, a otros métodos en la competencia.
            p En el 2016, <em>AlphaGo</em> de <em>DeepMind</em>, venció al campeón mundial de Go, un juego mucho más complejo que el ajedrez, demostrando la capacidad de las redes neuronales profundas para aprender estrategias complejas. Poco después, la Inteligencia Artificial comenzó a ser utilizada en aplicaciones cotidianas como asistentes virtuales (Siri, Alexa), traducción automática y diagnósticos médicos.
            p El avance más reciente ha sido el desarrollo de la IA generativa, con modelos como GPT-3 y ChatGPT, capaces de generar texto, imágenes y código de manera sorprendentemente humana. Estos avances han abierto nuevas posibilidades, pero también han generado debates sobre la ética y el impacto social de la IA.
          .div(titulo="El Futuro de la Inteligencia Artificial")
            p El próximo gran desafío en IA es el desarrollo de la Inteligencia Artificial General (AGI), una IA que pueda igualar la inteligencia humana en múltiples tareas, sin necesidad de entrenamiento específico; a largo plazo, se discute la posibilidad de una SuperInteligencia Artificial, que superaría a los humanos en todas las áreas cognitivas.
            p Sin embargo, el avance de la IA también plantea preocupaciones éticas y desafíos regulatorios. La posibilidad de automatización masiva del trabajo, la generación de información falsa y el uso indebido de la IA en ciberseguridad, son solo algunos de los temas que la humanidad deberá abordar en los próximos años.

  
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744" target="_blank" rel="noopener noreferrer") Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: ( ed.). Editorial UOC. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ibm.com/mx-es/topics/artificial-intelligence" target="_blank" rel="noopener noreferrer") IBM (20 de marzo de 2025). ¿Qué es la Inteligencia Artificial (IA)? IBM. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/zkM6TgBnvro" target="_blank" rel="noopener noreferrer") Profe Luis. (2025, 22 de marzo). Introducción a la Inteligencia Artificial: Conceptos, historia y aplicaciones de la IA [Video]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
