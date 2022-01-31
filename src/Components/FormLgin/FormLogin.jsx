import React from "react";
import {Form, Input, Button} from 'antd';
import {StyledForm, StyledFormError} from "./StyledFormLogin";

export const FormLogin = ({onSubmit, error = null}) => {

    return (
        <StyledForm
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onSubmit}
            autoComplete="off"
        >
            <Form.Item
                label="Login"
                name="login"
                rules={[{ required: true, message: 'Please input your login!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your login!' }]}
            >
                <Input type={"password"} />
            </Form.Item>
            {error?.status === 401 && <StyledFormError>Имя пользователя или пароль введены не верно</StyledFormError>}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </StyledForm>
    )
}
