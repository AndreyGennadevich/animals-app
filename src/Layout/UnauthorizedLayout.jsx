import { StyledLayout} from "./StyledAuthorizedLayout";
import {Layout, Menu} from "antd";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {checkValidity} from "../helpers/auth";
import {ROUTES} from "../helpers/routes";

const {Header, Content} = Layout;

export const UnauthorizedLayout = ({children}) => {
    const navigate = useNavigate();

    useEffect(()=> {
        if (checkValidity()) {
            navigate(ROUTES.today)
        }

    }, [])


    return (
        <StyledLayout>
            <Header>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item key="1">
                        <Link to='/login'>Log in</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Outlet/>
            </Content>
        </StyledLayout>
    )
}