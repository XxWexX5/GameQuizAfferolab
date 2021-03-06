import React from 'react';

import { Link } from 'react-router-dom';

import { StyledIntroduction, Demonstration, Container } from './style/StyledIntroduction';

import FeedbackClient from '../../components/FeedbackClient';

import arteIndicadores from '../../imagesOptimized/arte_indicadores.png';

const Introduction = () => {
    localStorage.removeItem('chosenQuestions');
    localStorage.removeItem('step');
    localStorage.removeItem('fidelizacao');
    localStorage.removeItem('satisfacao');

    return(
        <StyledIntroduction>
            <Demonstration>
                <img src={arteIndicadores} alt="Painel de Indicadores" className="image-indicators" />

                <FeedbackClient className="feedback-client" background="#cb2031" animated={true} />  
            </Demonstration>

            <Container>
                <main>
                    <section>
                        <p>
                            Ao lado, estão os dois indicadores do game. Quando você tomar suas decisões, eles poderão
                            aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.
                        </p>
                        
                        <p>
                            Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados
                            por todas as sua decisões. Então, fique atento!
                        </p>

                        <p>
                            Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.
                        </p>
                    </section>

                    <aside>
                        <img src={arteIndicadores} alt="Painel de Indicadores" />

                        <FeedbackClient background="#d3564c" animated={true} />
                    </aside>

                    <Link to="/quiz" className="btn btn-advance">Continuar</Link>
                </main>
            </Container>
        </StyledIntroduction>
    );
};

export default Introduction;