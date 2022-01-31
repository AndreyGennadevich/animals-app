import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {StyledModalBtn} from "./StyledModalWindow";


export const LinkToModalWindow = ({props}) => { // rename
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    console.log(props)

    return (
        <>
            { props &&
                <>
                    <StyledModalBtn onClick={showModal}>
                        {props.name}
                    </StyledModalBtn>
                    <Modal title={props.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p><b>Порода:</b> {props.spec.name}</p>
                        <p><b>Возраст:</b> {props.age} лет</p>
                        {props.height && <p><b>Рост:</b> {props.height} {props.heightUnit}</p>}
                        {props.weight && <p><b>Вес:</b> {props.weight} {props.weightUnit}</p>}
                    </Modal>
                </>
            }
        </  >
    );
};