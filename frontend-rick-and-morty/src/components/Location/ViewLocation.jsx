export const ViewLocation = (props) => {
    return (
        <div className='container'>
            {
                props.locations?.map(loc => (
                    <div className='columnContainer' style={{ width: '100%'}}>
                        <div className='rowContainer'><h3>{loc.name}</h3></div>
                        <div className='rowContainer'><h4>{loc.type}</h4></div>
                        <div className='rowContainer'>
                        {
                            loc.characters?.map(cha => (
                                <div className='container'>
                                <ul>
                                    <li key={cha?.id}><label>{cha?.name}</label></li>
                                </ul>
                                </div>
                                    
                            ))
                        }
                        </div>
                    </div>
                ))}
        </div>
    )
}