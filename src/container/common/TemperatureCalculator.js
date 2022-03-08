import React, {useState} from "react";

class TemperatureCalculator_ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: 0
        }
    }

    onChangeCelcium = (e) => {
        this.setState({
            scale: 'c',
            temperature: Number(e.target.value)
        })
    }

    onChangeFarengeit = (e) => {
        this.setState({
            scale: 'f',
            temperature: Number(e.target.value)
        })
    }

    render() {
        let scale = this.state.scale
        let temperature = this.state.temperature
        let celcium = scale === 'f' ? temperature / 2 : temperature
        let farengeit = scale === 'c' ? temperature * 2 : temperature

        return (
            <div>
                <TemperatureInput temperature={celcium} onChange={this.onChangeCelcium} />
                <TemperatureInput temperature={farengeit} onChange={this.onChangeFarengeit} />
            </div>
        )
    }
}

const TemperatureCalculator = (props) => {
    let [state, setState] = useState(() => {
        return {
            scale: 'c',
            temperature: 0
        }
    })

    const onChangeCelcium = (e) => {
        setState({
            scale: 'c',
            temperature: Number(e.target.value)
        })
    }

    const onChangeFarengeit = (e) => {
        setState({
            scale: 'f',
            temperature: Number(e.target.value)
        })
    }

    let scale = state.scale
    let temperature = state.temperature
    let celcium = scale === 'f' ? temperature / 2 : temperature
    let farengeit = scale === 'c' ? temperature * 2 : temperature

    return (
        <div>
            <TemperatureInput temperature={celcium} onChange={onChangeCelcium} />
            <TemperatureInput temperature={farengeit} onChange={onChangeFarengeit} />
        </div>
    )
}

const TemperatureInput = (props) => {
    return <input value={props.temperature} onChange={props.onChange} />
}

export default TemperatureCalculator