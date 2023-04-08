import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {ArrowRight} from 'react-bootstrap-icons'

export default function taskCard(props) {

    return(
        <div class="container col-6">
        <Card>
            <Card.Body>I am a task to do!!!
                <ArrowRight />
            </Card.Body>
        </Card>
        </div>
    )


}