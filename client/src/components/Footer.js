import react from 'react'

export default function Footer() {
    return(
        <div className="container d-flex justify-content-between">
            <div className="credit">
                <p>Heavily insipired by: <a href='https://pomofocus.io/'>Pomofocus.io</a></p>
            </div>
            <div className='creator-links'>
            <p>Created By <a>Lauren Bentley</a> & <a>Ivan Felipe Escobar</a></p>
            </div>
        </div>
    )
}