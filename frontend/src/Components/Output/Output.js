import "./Output.css"
import React from "react"
import Card from "../../UI/Card"

const Output = ({station}) => {
    return (
        <div>
            <Card className = "output">
                <label>
                    Nearest MRT station is:
                </label>
                <label>
                    {station}
                </label>

            </Card>
        </div>
    )
}

export default Output