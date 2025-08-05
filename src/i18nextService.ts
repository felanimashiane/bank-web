import i18next from 'i18next';
import casa from './modules/casa/i18n/casa.json';
import business from './modules/businessBanking/i18n/businessBanking.json';

i18next.init({
    lng: 'default',
    fallbackLng: 'en',
    ns: ['casa', 'business'],
    defaultNS: 'casa',
    debug: false,
    resources: {
        default: {
            casa,
            business: business,
        },
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;