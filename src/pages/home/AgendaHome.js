import { Row, Col, Card } from 'react-bootstrap'
import { IoCalendarClearOutline } from "react-icons/io5";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import './Agenda.css';

const AgendaHome = () => {
    return(
        <>
            <Row className='mb-2'>
                <Col id='agenda' xs={12}>
                    <h5 className='fw-light border-bottom border-gray pb-2'>
                        <IoCalendarClearOutline /> Agenda
                    </h5>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col xs={12}>
                    <Card className='g-0 border-gray shadow-sm mb-4'> 
                        <Card.Body>
                            <FullCalendar
                                locale={esLocale}
                                plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
                                initialView="listWeek"
                                hiddenDays= {[0,6]}
                                eventTimeFormat={{
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    meridiem: false
                                }}
                                headerToolbar={{
                                left: 'prev,next',
                                // center: 'title',
                                right: 'dayGridDay,listWeek'
                                }}
                                events={'https://eventos.lcaba.ar/api/getAppoimentsPublic'}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AgendaHome