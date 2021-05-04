export const trMessages = {
    'Breed': { es: 'Raza', en: 'Breed' },
    'Dogs': { es: 'Perros', en: 'Dogs' },
    'Select a breed': {es: 'Selecciona una raza', en:'Select a breed'},
    'Select a type': {es: 'Selecciona un tipo', en:'Select a type'},
    'TextInfo': { es: 'Selecciona la raza de perro de la que deseas visualizar las imagenes.', en: 'Select the breed of dog of which you want to view the images.' },
    'Type': { es: 'Tipo', en: 'Type' },
};

export function tr(msg, trLang) {
    return trMessages[msg][trLang];
}
