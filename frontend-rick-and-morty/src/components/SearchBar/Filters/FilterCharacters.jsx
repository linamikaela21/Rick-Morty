export const FilterCharacters = (props) => {

    return (
        <div className='searchContainer'>
            <div className='columnContainer'>
                <span className='span' >Order by Order</span>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div className='columnContainer'>
                <span className='span'>Order by Status</span>
                <select onChange={props.changeStatus}>
                    <option value='Alive'>ALIVE</option>
                    <option value='Dead'>DEAD</option>
                    <option value='unknown'>UNKNOWN</option>
                </select>
            </div>

            <div className='columnContainer'>
                <span className='span'>Order by Gender</span>
                <select onChange={props.changeGender}>
                    <option value='Male'>MALE</option>
                    <option value='Female'>FEMALE</option>
                </select>
            </div>

        </div>
    )
}
