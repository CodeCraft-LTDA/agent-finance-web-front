import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";

const List = () => {
    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#fff">
                <SelectInput options={[{value: 'teste', label: 'teste'}]} />
            </ContentHeader>

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