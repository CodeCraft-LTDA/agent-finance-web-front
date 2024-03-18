import { 
    Container,
    TitleContainer,
    Controllers 
}  from './styles';

// interface IContentHeaderProps {
//     title?: string;
//     lineColor?: string;
//     children: React.ReactNode;
// }

const ContentHeader = (
    // {
    // title, lineColor, children
// }
) => (
    <Container>
        <TitleContainer lineColor={"red"}>
            <h1>Dashboard</h1>               
        </TitleContainer>
        <Controllers>
            <button type="button">Teste</button>
            <button type="button">Teste</button>
        </Controllers>
    </Container>
);


export default ContentHeader;