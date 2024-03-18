import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const List = () => {
    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#fff">
                <SelectInput options={[{value: 'teste', label: 'teste'}]} />
            </ContentHeader>
        </Container>
    );
}

export default List;