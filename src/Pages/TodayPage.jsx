import React from "react";
import {TodayList} from "../Components/TodayList/TodayList";
import {StyledPagesHeader, StyledWrapPages} from "./StyledPage";


export const TodayPage = () => {
    return (
        <StyledWrapPages>
            <StyledPagesHeader>Today pages</StyledPagesHeader >
            <TodayList/>
        </StyledWrapPages>

    )
}