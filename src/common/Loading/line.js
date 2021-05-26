import React from 'react'
import styled from 'styled-components';
import _ from 'lodash'
const LoadingLineCss = styled.div`
   & {
    height: ${props => _.get(props,'width',"4px")};
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #ddd;
    }
    &:before{
    display: block;
    position: absolute;
    content: "";
    left: -200px;
    width: 200px;
    height: 4px;
    background-color: ${props => _.get(props,'color',"#1877b4")};
    animation: loading 2s linear infinite;
}

@keyframes loading {
    from {left: -200px; width: 30%;}
    50% {width: 30%;}
    70% {width: 70%;}
    80% { left: 50%;}
    95% {left: 120%;}
    to {left: 100%;}
}
`;

const LoadingLine = ({color,height}) => {
    return (
        <div>
            <LoadingLineCss color={color} height={height}/>
        </div>
    );
};

export default LoadingLine