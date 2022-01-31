import React, {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import {List, Pagination} from "antd";
import {LinkToModalWindow} from "../ModalWindow/ModalWindow";
import {animalsAPI} from "../../services/AnimalService";
import {logout} from "../../helpers/auth";
import {ROUTES} from "../../helpers/routes";
import {StyledAnimalsList, StyledAnimalsListItem, StyledPagination} from "./StyledAnimalsList";

export const AnimalsList = () => {

    const [offset, setOffset] = useState(0)

    const navigate = useNavigate();

    const {data, isError, isLoading, error} = animalsAPI.useFetchAnimalsQuery({token: localStorage.getItem('Token'), offset});

    const onChange = pageAnt => {
        setOffset(pageAnt-1)
    };

    useEffect(()=> {
        if (isError && error.status === 401) {
            logout()
            navigate(ROUTES.login)
        }
    })

    return (
        <>
            <StyledAnimalsList
                itemLayout="horizontal"
                dataSource={data?.results}
                loading={isLoading}
                renderItem={item => (
                    <StyledAnimalsListItem>
                        {/*<List.Item.Meta*/}
                        {/*    title={<LinkToModalWindow props={item}/>}*/}
                        {/*    description={item.spec.name}*/}
                        {/*/>*/}
                        <LinkToModalWindow props={item}/>
                        <span>{item.spec.name}</span>
                    </StyledAnimalsListItem>
                )}
            />
            <StyledPagination onChange={onChange} total={30} />
        </>
    )
}