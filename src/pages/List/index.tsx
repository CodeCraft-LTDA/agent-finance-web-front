import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import { useMemo } from "react";


const List = () => {
    
    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#4E41F0' : '#E44C4E';
    }, [type]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={[{value: 'teste', label: 'teste'}]} />
                <SelectInput options={[{value: 'teste', label: 'teste'}]} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Recorrentes</button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/09/2021"
                    amount="R$ 130,00"
                /> 
            </Content>
        </Container>
    );
}

export default List;