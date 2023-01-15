import "./Output.css"
import React from "react"
import Card from "../../UI/Card"

const Output = (props) => {
    return (
        <div>
            <Card className = "output">
                <label>
                    Nearest MRT station is:
                </label>
                <label>
                    "Answer"
                </label>

            </Card>
        </div>
    )
}

export default Output