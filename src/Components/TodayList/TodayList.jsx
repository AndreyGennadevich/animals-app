import React, {useEffect} from "react";
import {todayAPI} from "../../services/TodayService";
import {List, Table} from 'antd';
import {useNavigate} from "react-router-dom";
import {LinkToModalWindow} from "../ModalWindow/ModalWindow";
import {ROUTES} from "../../helpers/routes";
import {logout} from "../../helpers/auth";

export const TodayList = () => {
    const {data, isError, isLoading, error} = todayAPI.useFetchTodayQuery( localStorage.getItem('Token') );
    const navigate = useNavigate();

    useEffect(()=> {
        if (isError && error.status === 401) {
            logout()
            navigate(ROUTES.login)
        }
    })

    const columns = [
        {
            title: 'Кличка',
            dataIndex: 'animal',
            key: 'animal',
            render: text => <LinkToModalWindow props={text}/>,
        },
        {
            title: 'Порода',
            dataIndex: 'animal',
            render: text => <span>{text.spec.name}</span>
        },
        {
            title: 'Процедуры',
            dataIndex: 'type',
        },
        {
            title: 'Время',
            render: text => <span>{text.time.slice(0, 5)}</span>
        }
    ]

    return (
        <>
            {data &&
            <Table columns={columns} dataSource={data.results} pagination={false}/>}


             {/*<List*/}
             {/*  itemLayout="horizontal"*/}
             {/*    dataSource={data.results}*/}
             {/*    loading={isLoading}*/}
             {/*    renderItem={item => (*/}
             {/*        <List.Item>*/}
             {/*            <LinkToModalWindow props={item.animal}/>*/}
             {/*            <p>{'Порода: '+ item.animal.spec.name}</p>*/}
             {/*            <p>{item.type}</p>*/}
             {/*        </List.Item>*/}
             {/*    )}*/}
             {/*/>}*/}
        </>
    )
}