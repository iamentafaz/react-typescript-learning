type StatusProps = {
    status: string
}

export const Status = (props: StatusProps) => {
    let message = '';
    if(props.status === 'loading') {
        message = 'Loading...'
    } else if(props.status === 'success') {
        message = 'Loaded successfully'
    } else if(props.status === 'error') {
        message = 'Error loading the conten'
    } else {
        return <></>
    }
    return(
        <div>
            <h2>{message}</h2>
        </div>
    )
}