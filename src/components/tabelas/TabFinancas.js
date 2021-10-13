import data from '../../api/Api';
import { TabFinancasStyled } from './TabFinancas.style';
import { IconeBootstrap } from '../icons/IconeBootstrap.style';
import { Table } from 'react-bootstrap';
const TabFinancas = (props) =>{
    console.log('filtro: ' + props.mesFiltro);
    console.log('filtro: ' + typeof props.mesFiltro);
    const data_hoje = new Date();
    const dia_atual = data_hoje.getDay();
    const mes_atual = data_hoje.getMonth()+1;
    const ano_atual = data_hoje.getFullYear();
    console.log(dia_atual+'/'+mes_atual+'/'+ano_atual);

    return(
        <TabFinancasStyled>
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
                        let mes_inclusao = item.data_criacao.split('/')[1]
                        if(props.mesFiltro === mes_inclusao ){
                            return (<tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.categoria}</td>
                                <td>{item.data_criacao}</td>
                                <td>{item.data_modificacao}</td>
                                <td className="valor">R$ {item.valor}</td>
                                <td><IconeBootstrap><i className="bi bi-pencil"></i></IconeBootstrap></td>
                            </tr>);                          
                        }
                    })}
                   
                </tbody>
            </Table>
        </TabFinancasStyled>
    );
}

export default TabFinancas;