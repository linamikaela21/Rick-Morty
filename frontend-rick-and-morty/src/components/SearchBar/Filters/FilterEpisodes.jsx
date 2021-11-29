export const FilterEpisodes = (props) => {
    return (
        <div>

            <div>
                <h4>Order by Order</h4>
                <select onChange={props.changeOrder}>
                    <option value='ASC'>ASCENDENTE</option>
                    <option value='DESC'>DESCENDENTE</option>
                </select>
            </div>

            <div>
                <h4>Order by Gender</h4>
                <select onChange={props.changeFilter}>
                    <option value='Male'>MALE</option>
                    <option value='Female'>FEMALE</option>
                </select>
            </div>

        </div>
    )
}
