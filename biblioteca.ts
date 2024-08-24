import { MaterialLeitura } from "materialLeitura";

class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPaginas:number;

    constructor(titulo:string, autor:string, numeroPaginas:number){
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    exibirDetalhes(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Numero de Páginas: ${this.numeroPaginas}`)
    }
}


class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo:string, autor:string, edicao:number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirDetalhes(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`)
    }
}

class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo:string, autor:string, dataPublicacao:Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhes(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.dataPublicacao}`)
    }
}

const livro = new Livro("Quarto de Despejo", "Carolina Maria de Jesus", 200);
const revista = new Revista("National Geographic", "John Doe", 150);
const artigo = new Artigo("Inteligência Artificial", "Jane Smith", new Date(2021,11,1));

livro.exibirDetalhes()
revista.exibirDetalhes()
artigo.exibirDetalhes()
