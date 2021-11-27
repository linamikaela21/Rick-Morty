export const ViewLocation = (props) => {
    return (
        <div className='container'>
            {
                props.location?.map(loc => (
                    <>
                        <h3>{loc.name}</h3>
                        <h4>{loc.locsode}</h4>
                        {loc.characters ? <label>Characters</label> : null}
                        {
                            loc.characters?.map(cha => (
                                <span>
                                    <input
                                        type="checkbox"
                                        name="characters"
                                        value={cha.id}
                                    //onChange={(e) => handleCheckbox(e)}
                                    />
                                    <label>{cha?.name.toUpperCase()}</label>
                                </span>
                            ))
                        }
                    </>
                ))}
        </div>
    )
}