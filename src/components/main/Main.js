import { useState } from 'react';
import { MainStyled } from "./Main.slyle";
//import Container from './Container';
import TabFinancas from '../tabelas/TabFinancas';

const Main = () => {

    
    const [value, setValue] = useState('');
    let mes_filtro = '1';

    
    const onChange = (event) => {
        setValue(event.target.value);
        console.log('fsfs: '+event.target.value);
        mes_filtro = event.target.value.toString();
    };

    return(
        <MainStyled>
                <select className="form-select" aria-label="Default select example" onChange={onChange}>
                    <option value="">Selecione o mês</option>
                    <option value="1">janeiro</option>
                    <option value="2">fevereiro</option>
                    <option value="3">março</option>
                    <option value="4">abril</option>
                    <option value="5">maio</option>
                    <option value="6">junho</option>
                    <option value="7">julho</option>
                    <option value="8">agosto</option>
                    <option value="9">setembro</option>
                    <option value="10">outubro</option>
                    <option value="11">novembro</option>
                    <option value="12">dezembro</option>
                </select>
<               TabFinancas mesFiltro={value} />
        </MainStyled>
    );
}

export default Main;