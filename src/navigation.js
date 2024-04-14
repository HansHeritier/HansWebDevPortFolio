import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Tarifs',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'A propos',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Prendre RDV', href: 'https://calendly.com/webmagnetsite', target: '_blank' },
           { text: 'Espace Client', href: 'https://billing.stripe.com/p/login/cN2bJGdEn0WqacMaEE', target: '_blank' }],
};

export const footerData = {
   links:[],
  secondaryLinks: [
    { text: 'Mentions', href: getPermalink('/terms') },
    { text: 'CGV', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/webmagnetsite/about/?viewAsMember=true' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?viewas=100000686899395&id=61557281243570' },
  ],
  footNote: `
  <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url('../../assets/images/logo.webp')]"></span>
  <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://webmagnet.fr/">Webmagnet © Copyright </a> · Tous droits réservés.  
`,
};


