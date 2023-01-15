import "./Inputs.css"
import React from "react"
import Card from "../../UI/Card"
import InputForm from "../InputForm/InputForm"

const Inputs = (props) => {

    return (
        <div>
            <Card className = "inputs">
                <InputForm/>
            </Card>
        </div>
    )

}

export default Inputs