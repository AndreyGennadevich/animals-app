import styled from "styled-components";
import {List} from "antd";
import {Pagination} from "antd";

export const StyledAnimalsList = styled(List)`
  width: 600px;
  margin: 0 auto;
`

export const StyledAnimalsListItem = styled(List.Item)`
  padding: 20px;
  && {
    border-bottom: 1px solid black; 
  }
  
  &:hover {
    background: hsl(216, 20%, 90%);
  }
`

export const StyledPagination = styled(Pagination)`
  align-self: center;
  margin-top: 30px;
`