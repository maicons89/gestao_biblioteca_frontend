import { Livro } from '../../livros/model/livro';
export interface Exemplar {
  id: string;
  codigoExemplar: string;
  descricao: string;
  idLivro: string;
  livro: Livro;
}
