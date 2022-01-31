import React from "react";
import {AnimalsList} from "../Components/AnimalsList/AnimalsList";
import {StyledPagesHeader, StyledWrapPages} from "./StyledPage";

export const AnimalsPage = () => {


    return (
        <StyledWrapPages>
            <StyledPagesHeader>Animals page</StyledPagesHeader>
            <AnimalsList/>
        </StyledWrapPages>

    )
}