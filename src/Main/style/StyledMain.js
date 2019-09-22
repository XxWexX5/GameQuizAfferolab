import styled from 'styled-components';

import BGWoman from '../images/bg1.png';

export const StyledMain = styled.section`
    background-image: url(${ BGWoman });
    background-size: cover;
    background-position: center 1%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1200px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${ BGWoman });  
        justify-content: center;  
    }

    aside {
        max-width: 450px;
        margin-left: 70px;
        margin-top: 150px;

        @media screen and (max-width: 1200px){
            margin: 0;   
            background-color: rgba(0, 0, 0, .4);
            padding: 20px 35px 35px;
            border-radius: 5px;
        }

        h1 {
            font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
            color: #75308a;
            font-size: 32px;
            margin: 0;
            padding: 0;

            @media screen and (max-width: 1200px){
                font-size: 30px;   
            }
        }

        p {
            font-family: Gilroy, Arial, Helvetica, sans-serif;
            font-size: 21px;
            line-height: 1.2em;
            color: #6e6f72;
            margin: 20px 0;

            @media screen and (max-width: 1200px){
                font-size: 18px;
                color: #FFFFFF;    
            }

            .highlighted {
                font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
                color: #cb2031;
            }
        }

        a {
            font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
            display: inline-block;
            font-size: 24px;
            color: #FFFFFF;
            margin-top: 10px;
            padding: 10px 15px;
            border-radius: 10px;
            text-decoration: none;
            background: rgba(201,33,52,1);
            background: -moz-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
            background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(201,33,52,1)), color-stop(100%, rgba(118,48,137,1)));
            background: -webkit-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
            background: -o-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
            background: -ms-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
            background: linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c92134', endColorstr='#763089', GradientType=1 );
            filter: hue-rotate(25deg);
            animation: 2s linear animation-color infinite alternate;
            transition: all .3s ease-in-out;

            &:hover {
                border-radius: 30px;
                background-origin: border-box;
                background-clip: border-box;
            }

            @keyframes animation-color {
                0% {
                    filter: hue-rotate(25deg);
                }    
                100% {
                    filter: hue-rotate(-70deg);
                }    
            }

            @media screen and (max-width: 1200px){
                font-size: 21px;
                display: block;
                text-align: center;
            }
        }
    }
`;