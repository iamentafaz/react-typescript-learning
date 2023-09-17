type PersonProps = {
    name: {
        firstName: string,
        lastName: string,
    }
}

export const Person = (props: PersonProps) => {
    return(
        <div>
            <h3>Welcome to page. {props.name.firstName} {props.name.lastName} </h3>
        </div>
    )
}