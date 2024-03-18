import { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";


const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);
    
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector 
                checked={isToggled} 
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => setIsToggled(!isToggled)} />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default Toggle;