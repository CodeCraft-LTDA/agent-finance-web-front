import Aside from "../Aside";
import MainHeader from "../Content";
import Content from "../MainHeader";
import { Grid } from "./styles";

const Layout = () => {
    return (
        <Grid>
            <Aside />
            <MainHeader />
            <Content />
        </Grid>
    );
}

export default Layout;