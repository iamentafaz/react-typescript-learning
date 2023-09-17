type NameListProps = {
    names: {
        firstName: string,
        lastName: string,
    }[]
}

export const PersonList = (props: NameListProps) => {
    return (
        <div>
            {
                props.names.map((name) =>{
                    return <h2 key={name.firstName}>{name.firstName}</h2>
                })
            }
        </div>
    )
}