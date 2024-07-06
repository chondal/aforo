import { Alert } from "react-bootstrap"
import { IoInformationCircleOutline } from "react-icons/io5";

const AlertComponent = ({title,variant, message, time}) => {
    return(
        <Alert key={variant} variant={variant} className="mt-4 mb-4">
            <IoInformationCircleOutline style={{fontSize: 'x-large'}} /> <strong>{title}:</strong> <span className="small">{message}</span>
        </Alert>
    )
}

export default AlertComponent