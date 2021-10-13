import data from '../../api/Api';
import { TabelaFinancasStyled } from './TabelaFinancas.style';
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
                        <th>Valor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item, index) => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.categoria}</td>
                            <td className="valor">R$ {item.valor}</td>
                            <td></td>
                        </tr>);
                    })}
                   
                </tbody>
            </Table>
        </TabelaFinancasStyled>
    );
}

export default TabelaFinancas;