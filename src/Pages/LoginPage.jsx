import React, {useEffect} from "react";
import {authenticationAPI} from "../services/LoginService";
import {useNavigate} from 'react-router-dom'
import {FormLogin} from "../Components/FormLgin/FormLogin";
import {authorize} from "../helpers/auth";
import {StyledPagesHeader, StyledWrapLogin} from "./StyledPage";


export const LoginPage = () => {

    const navigate = useNavigate();

    const [authenticationUser, {isError, error}] = authenticationAPI.useAuthenticationUserMutation();

    const onSubmit = async (value) => {
        authenticationUser(value)
            .then(res => {
                authorize(res.data.accessToken)
                navigate('/today')
            })
    }

    return (
        <StyledWrapLogin>
            <StyledPagesHeader>Login page</StyledPagesHeader>
            <FormLogin onSubmit={onSubmit} error={error}/>
        </StyledWrapLogin>
    )
}