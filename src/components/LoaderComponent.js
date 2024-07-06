import { Spinner } from 'react-bootstrap'

const LoaderComponent = ({text}) => {
    return(
        <>
            <div className='mb-5'>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    /> <span>{text}</span>
            </div>
        </>
    )
}

export default LoaderComponent