import { useMemo } from "react";
import { Container, Profile, Username, Welcome } from "./styles";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

const MainHeader = () => {

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Sidnei de Souza Junior</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;