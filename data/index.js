import { indexPage } from "./pages/indexPage";
import { contactoPage } from "./pages/contactoPage";



const commonData = {
    navigation: [
        { url: '/index.html', label: 'Inicio' },
        { url: '/Contacto.html', label: 'Contacto' },
       
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case '/index.html':
            pageData = indexPage
            break;
        case '/Contacto.html':
            pageData = contactoPage
            break;
        default:
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}