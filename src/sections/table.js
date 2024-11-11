
function Table(props) {

    return (
        <div className="table table_place_digits">
            {props.data.map((value) => (
                <div className={props.isDark ? 'table__cell table__cell_theme_dark' : "table__cell"}>
                    <h5 className="table__heading">
                        {value.text}
                    </h5>
                    <p className="table__text">
                        {value.subText}
                    </p>
                    <p className="table__text">
                        {value.subSubText}
                    </p>
                </div>
            ))}
        </div>

    )
}
export default Table;