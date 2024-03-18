import { useMemo } from "react";
import { Container, Profile, Username, Welcome } from "./styles";
import emojis from "../../utils/emojis";

const MainHeader = () => {

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    return (
        <Container>
            <h1>MainHeader</h1>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Sidnei de Souza Junior</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;