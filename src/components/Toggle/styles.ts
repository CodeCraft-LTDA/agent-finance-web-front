import styled from "styled-components";
import ReactSwitch, {ReactSwitchProps} from "react-switch";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
    font-size: 16px;
`;

export const ToggleSelector = styled(ReactSwitch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })
)<ReactSwitchProps>`
    margin: 0 7px;
`;