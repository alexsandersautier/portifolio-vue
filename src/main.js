import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
    createI18n({
        locale: 'en',
        legacy: false,
        fallbackLocale: 'pt',
        messages: {
            en: {
                message: {
                    home: 'Home',
                    about: 'About',
                    contact: 'Contact',
                    projects: 'Projects',
                    technologies: 'Technologies',
                    welcome: {
                        title: 'Welcome to my website!',
                        intro:
                            "Hello! 👋 My name is Alexsander, I'm a full stack developer passionate about technology.",
                        experience:
                            "I've been working in the field since 2023, starting as technical support(2020) and growing into a developer role.",
                        stack:
                            'I have experience with Delphi and also with Ionic + Angular for mobile app development.',
                        transition:
                            'Currently, I’m transitioning my career to become a Front-end Developer with Vue.js or a Full Stack Developer with Vue.js and Django.',
                        projects:
                            'I’ve worked on several freelance projects, including spreadsheet automation, web scraping, RPA, integrations, landing pages, and e-commerce sites.',
                        cta: '💡 Some of my projects!',
                    },
                    seeProject: 'See Project',
                    belleFete: 'Party item rental system.',
                    Gkids: 'Management system for a Pediatric Neurology clinic.',
                    SpaceFit: 'Landing page for gym opening.',
                    rickAndMorty: 'PWA consuming the Rick and Morty API.',
                    promobile: 'App focused on WMS',
                    freelance: 'Freelance',
                    course: 'Course',
                    jobExperience: 'Job Experience',
                    experience: 'Experience',
                    year: 'year',
                    documentation: 'Documentation',
                    wordExperience: 'Work Experience',
                    sendMeMessage: 'Send me a message!',
                    myEmail: 'My email is',
                    name: 'Name',
                    email: 'Email',
                    message: 'Message',
                    send: 'Send',
                    validator: {
                        email: 'Please enter a valid email address.',
                        name: 'Please enter a name with at least 3 characters.',
                        message: 'Please enter a message.',
                    },
                    seeDetails: 'See Details',
                    close: 'Close',
                    contrestoque: 'Inventory control system',
                    development: 'Development'
                },
            },
            pt: {
                message: {
                    home: 'Início',
                    about: 'Sobre',
                    contact: 'Contato',
                    projects: 'Projetos',
                    technologies: 'Tecnologias',
                    welcome: {
                        title: 'Bem-vindo ao meu site!',
                        intro:
                            'Olá! 👋 Meu nome é Alexsander, sou desenvolvedor full stack e apaixonado por tecnologia.',
                        experience:
                            'Atuo na área desde 2023, onde iniciei como suporte técnico(2020) e evoluí até me tornar desenvolvedor.',
                        stack:
                            'Tenho experiência com Delphi e também com Ionic + Angular para desenvolvimento de aplicativos.',
                        transition:
                            'Atualmente, estou em transição de carreira para atuar como Desenvolvedor Front-end com Vue.js ou Full Stack com Vue.js e Django.',
                        projects:
                            'Já realizei diversos projetos freelancer, incluindo automação de planilhas, web scraping, RPA, integrações, landing pages e e-commerces.',
                        cta: '💡 Conheça alguns dos meus projetos!',
                    },
                    seeProject: 'Ver Projeto',
                    belleFete: 'Sistema de locação de itens para festas.',
                    Gkids: 'Sistema de gestão para cliníca de Neurologia Infantil.',
                    SpaceFit: 'Landing page para inauguração de academia.',
                    rickAndMorty: 'PWA consumindo API do Rick and Morty.',
                    promobile: 'App focado no WMS',
                    freelance: 'Freela',
                    course: 'Curso',
                    jobExperience: 'Experiência Profissional',
                    experience: 'Experiência',
                    year: 'ano',
                    documentation: 'Documentação',
                    wordExperience: 'Experiência profissional',
                    sendMeMessage: 'Me envie uma mensagem!',
                    myEmail: 'Meu email é',
                    name: 'Nome',
                    email: 'Email',
                    message: 'Mensagem',
                    send: 'Enviar',
                    validator: {
                        email: 'Por favor, insira um endereço de email válido.',
                        name: 'Por favor, insira um nome com pelo menos 3 caracteres.',
                        message: 'Por favor, insira uma mensagem.',
                    },
                    seeDetails: 'Ver Detalhes',
                    close: 'Fechar',
                    contrestoque: 'Sistema de controle de estoque',
                    development: 'Em desenvolvimento'
                },
            },
        },
    }),
)

app.mount('#app')
