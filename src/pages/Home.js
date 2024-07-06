
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import AppLayout from '../layout/AppLayout'
import AplicativosHome from './home/AplicativosHome'
// import Joyride, { EVENTS, STATUS } from 'react-joyride';
// import { getMobileSystem } from '../helpers/getMobileSystem'
import PageView from '../helpers/pageView'

const Home = ({user}) => {
    
    console.log(user)

    // const steps = [
    //     {
    //       title: '¡Hola, te damos la bienvenida!',
    //       target: '#bienvenido',
    //       content: 'LegisApp es una nueva herramienta en la cual encontrarás diferentes servicios que te ayudarán en tus tareas diarias.',
    //     },
    //     {
    //       target: '#reservas',
    //       content: 'En esta sección ingresás al sistema de Reserva de Salones de la Legislatura.',
    //     },
    //     {
    //       target: '#recibos',
    //       content: 'Desde acá podés visualizar y descargar tus recibos de sueldo cuando quieras.',
    //     },
    //     {
    //       target: '#dependencias',
    //       content: 'Buscá las dependencias de la Casa y accedé a sus datos de contacto.',
    //     },
    //     {
    //       target: '#agenda',
    //       content: 'En esta sección podés revisar la agenda de la Casa y visualizar los eventos del día o la semana.'
    //     },
    //   ];

    //  const handleJoyrideCallback = data => {
    //     const { status, type } = data;
    
    //     if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
    //       // Update state to advance the tour
          
    //     }
    //     else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
    //       // Need to set our running state to false, so we can restart if we click start again.
    //       window.localStorage.setItem('tour', 'true');
    //     }
    //   }

    // const locale = { back: 'Atras', close: 'Cerrar', last: 'Finalizar', next: 'Siguiente', open: '', skip: 'Saltar' }
    


    return(
        <>
            <AppLayout>
              <PageView />
                <Container>
                    <AplicativosHome />
                    
                    {/* {!window.localStorage.getItem('tour') ? (
                      <Joyride
                          callback={handleJoyrideCallback}
                          run={true}
                          continuous={true}
                          showSkipButton={true}
                          steps={steps}
                          locale={locale}
                          styles={{
                              options: {
                                primaryColor: '#7064A9',
                                width: 900,
                                zIndex: 1000,
                              }
                            }}
                          />
                      ) :
                      null
                    } */}

                </Container>
            </AppLayout>
        </>
    )
}

export default Home
