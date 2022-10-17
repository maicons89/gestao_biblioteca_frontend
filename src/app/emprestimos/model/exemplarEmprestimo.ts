import { Exemplar } from '../../exemplares/model/exemplar';
import { Usuario } from '../../usuarios/model/usuario';
export interface ExemplarEmprestimo {
  id: string;
  dataEmprestimo: string;
  dataDevolucao: string;
  dataDevolucaoPrevista: string;
  idExemplar: string;
  idUsuario: string;
  exemplar: Exemplar;
  usuario: Usuario;
}
