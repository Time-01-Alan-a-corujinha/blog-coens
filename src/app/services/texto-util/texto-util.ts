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

    static converteData(data: string): string { //aaaa-mm-dd
      return `${data.slice(8, 10)}/${data.slice(5, 7)}/${data.slice(0, 4)}`
    }
}