import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Grid } from "./styles";

const Layout = ({children}) => {
    return (
        <Grid>
            <Aside />
            <MainHeader />
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;