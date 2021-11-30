export const FilterEpisodes = (props) => {
    return (
        <div className='container'>
            <div className='navlink'>
                <span className='span'>Order by Name</span>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div className='navlink'>
                <span className='span'>Order by Episode</span>
                <select onChange={props.orderEpisode}>
                    <option value='A'>A - Z</option>
                    <option value='Z'>Z - A</option>
                </select>
            </div>
        </div>
    )
}
