class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaDate(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato yyyy-MM-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaText(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}