import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    fullName: '✨ Mariangélica Useche',
    mainDescription:
      'I\'m a Computer Scientist since 2018. Before that, I was dancing on musical theatres.',
    yogaTitle: '☀️ I LOVE YOGA',
    yogaDescription:
      'I started at 2016. Even if I miss daily practices sometimes, I don\'t think I can live without it anymore.',
    nationalityTitle: '🇻🇪 I was born in Caracas, Venezuela',
    nationalityDescription:
      'I studied and started my professional life there, but I moved to Bogotá on 2019, so I keep building it from here.',
    hobbyTitle: '💻 I really enjoy Front End development',
    hobbyDescription:
      'I can spent all day trying the perfect fit for a button.',
  },
  es: {
    fullName: '✨ Mariangélica Useche',
    mainDescription:
      'Soy Lic. en Computación desde diciembre del 2018. Antes de eso bailaba en musicales de teatro y practicaba kárate.',
    yogaTitle: '☀️ Me encanta hacer Yoga',
    yogaDescription:
      'Empecé en el 2016 y aunque a veces he sido intermitente, no creo que lo vaya a dejar por completo.',
    nationalityTitle: '🇻🇪 Nací en Caracas, Venezuela',
    nationalityDescription:
      'Allí estudié y empecé mi vida profesional, pero en diciembre de 2019 me mudé a Bogotá, y acá la sigo construyendo.',
    hobbyTitle: '💻 Disfruto mucho maquetar',
    hobbyDescription:
      'Puedo pasar todo el día sentada en la computadora tratando que un botón quede en el lugar perfecto.',
  },
};

const i18n = new VueI18n({
  messages,
  locale: 'es',
});

export default i18n;
