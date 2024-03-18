import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={[{value: 'teste', label: 'teste'}]} />
            </ContentHeader>
        </Container>
    );
};

export default Dashboard;