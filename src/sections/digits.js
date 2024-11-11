import Table from "./table.js"
import { array } from "../data.js";

function Digits() {

    return (
        <section className="digits">

            <section className="title title_plase_digits">
                <h1>Цифры и факты</h1>
            </section>

            <section className="subtitle subtitle_plase_digits">
                <h3>Про учебу и мозг</h3>
            </section>

            <Table data={array} isDark={false} />
        </section>
    )
}

export default Digits;