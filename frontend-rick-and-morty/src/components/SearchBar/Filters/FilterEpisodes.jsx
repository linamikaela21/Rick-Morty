export const FilterEpisodes = (props) => {
    return (
        <div className='searchContainer' style={{padding: '2rem'}} >
            <div className='columnContainer' style={{width:'13rem'}}>
<span className='span'>Order by Name</span>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div className='columnContainer' style={{width:'13rem'}}>
                <span className='span'>Order by Season</span>
                <select onChange={props.orderSeason}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                </select>
            </div>
        </div>
    )
}
