import data from '../../api/Api';
const TabelaFinancas = () =>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item, index) => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.categoria}</td>
                            <td className="valor">R$ {item.valor}</td>
                        </tr>);
                    })}
                   
                </tbody>
            </table>
        </div>
    );
}

export default TabelaFinancas;