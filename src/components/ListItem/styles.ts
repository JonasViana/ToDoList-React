import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(( { done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-itens: center;
    justify-content: space-between;

    button{
        background-color:#20212C;
        border: none;
        border-radius: 5px;
    }

    button:hover{
        background-color:#17181F;

    }

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }


    label{
        color:#CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
        display: flex;
        align-itens: center;
    }
`
))