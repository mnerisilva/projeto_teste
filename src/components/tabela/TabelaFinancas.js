import data from '../../api/Api';
import { TabelaFinancasStyled } from './TabelaFinancas.style';
import { IconeBootstrap } from '../icons/IconeBootstrap.style';
import { Table } from 'react-bootstrap';
const TabelaFinancas = () =>{
    return(
        <TabelaFinancasStyled>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Dt inclusao</th>
                        <th>Dt modificação</th>
                        <th>Valor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item) => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.categoria}</td>
                            <td>{item.data_criacao}</td>
                            <td>{item.data_modificacao}</td>
                            <td className="valor">R$ {item.valor}</td>
                            <td><IconeBootstrap><i class="bi bi-pencil"></i></IconeBootstrap></td>
                        </tr>);
                    })}
                   
                </tbody>
            </Table>
        </TabelaFinancasStyled>
    );
}

export default TabelaFinancas;