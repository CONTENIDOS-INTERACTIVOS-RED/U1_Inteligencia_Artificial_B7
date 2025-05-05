<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-4.mb-5(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En la actualidad, la Inteligencia Artificial (IA) ha revolucionado diversos ámbitos de la sociedad, desde la industria y la medicina, hasta el entretenimiento y la educación. Esta unidad, tiene como propósito, introducir al estudiante en el mundo de la IA, proporcionando una visión general sobre su definición, evolución y aplicaciones más relevantes. Comprender la Inteligencia Artificial es esencial para cualquier estudiante o profesional que desee desenvolverse en un entorno tecnológico, en constante transformación.
            p(data-aos="fade-left") Al finalizar esta unidad, el estudiante será capaz de:
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center Definir qué es la Inteligencia Artificial y comprender sus principales características.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center Analizar la evolución histórica de la IA, identificando los hitos más importantes en su desarrollo.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center Reconocer las principales aplicaciones de la IA en diversos campos y su impacto en la sociedad.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El estudio de la IA no solo es relevante desde una perspectiva académica, sino que también tiene un impacto directo en la vida cotidiana y en el futuro profesional de los estudiantes. 
    
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Desde los asistentes virtuales en dispositivos móviles hasta los algoritmos de recomendación en plataformas digitales, la IA está presente en múltiples aspectos de nuestra vida. Su comprensión permite no solo aprovechar sus beneficios, sino también enfrentar los desafíos éticos y tecnológicos, que conlleva su implementación.
        p(data-aos="fade-left") Esta unidad se estructura en tres temas principales: 
    
    TabsC.color-acento-contenido.mb-3
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Primer tema" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Primer tema
            p Se abordará la definición de Inteligencia Artificial, explorando sus diferentes enfoques y conceptos fundamentales.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/intro/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Segundo tema" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Segundo tema
            p Se presentará un recorrido por la historia y evolución de la IA, destacando sus momentos claves y avances significativos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/intro/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Tercer tema" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Tercer tema
            p Se analizarán sus aplicaciones en distintos sectores, desde la salud y la educación, hasta la industria y el entretenimiento, para ilustrar su impacto en el mundo actual.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/intro/7.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Para aprovechar al máximo esta unidad, se espera que el estudiante participe activamente en las actividades propuestas, reflexione sobre el impacto de la IA en su entorno y explore casos de uso reales. No se requieren conocimientos previos en el tema, pero es recomendable contar con una actitud crítica y analítica frente a la información presentada.
      
    
        

</template>
