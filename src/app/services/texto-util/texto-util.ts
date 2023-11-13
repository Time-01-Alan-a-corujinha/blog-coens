const showdown = require('showdown');

export class TextoUtils {

    static markDownParaHtml(texto: string) {
        let converter = new showdown.Converter();
        return converter.makeHtml(texto);
    }

    static preencheElementoDOM(id: string, texto: string) {
        let element = document.getElementById(id);        
        element ? element.innerHTML = texto : null
    }
}