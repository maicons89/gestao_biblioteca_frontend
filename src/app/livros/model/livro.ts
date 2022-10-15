import { Autor } from './../../autores/model/autor';
import { Idioma } from '../../idiomas/model/idioma';
import { Editora } from '../../editoras/model/editora';
import { Assunto } from '../../assuntos/model/assunto';
export interface Livro {
  id: string;
  isbn: string;
  tituloPrincipal: string;
  formasVariantesDoTitulo: string;
  numeroEdicao: string;
  descricaoFisica: string;
  qtdDisponivelEmprestimo: string;
  descricao: string;
  status: string;
  idEditora: string;
  idAutor: string;
  idIdioma: string;
  assunto: Assunto;
  editora: Editora;
  autor: Autor;
  idioma: Idioma;
}
