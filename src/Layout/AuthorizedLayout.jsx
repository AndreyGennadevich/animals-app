
import { Layout, Menu} from "antd";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {checkValidity, logout} from "../helpers/auth";
import {ROUTES} from "../helpers/routes";
import {StyledLayout, StyledLogOut} from "./StyledAuthorizedLayout";
import {LoginOutlined} from "@ant-design/icons";

const {Header, Content} = Layout;

export const AuthorizedLayout = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(()=> {
         if (!checkValidity()) {
            logout()
            navigate(ROUTES.login)
         }
    }, [pathname])

    const logoutHandler = (e) => {
        e.preventDefault();
        logout()
        navigate(ROUTES.login)
    }

    return (
        <StyledLayout>
            <Header>
                <StyledLogOut type='primary' onClick={logoutHandler}>
                    <LoginOutlined style={{ fontSize: '18px', display: 'block'}}/>
                </StyledLogOut>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item key="1">
                        <Link to='/today'>Today</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/animals'>Animals</Link>
                    </Menu.Item>
                </Menu>

            </Header>
            <Content>
                <Outlet />
            </Content>
        </StyledLayout>
    )
}