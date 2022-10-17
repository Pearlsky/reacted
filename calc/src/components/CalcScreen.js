function CalcScreen({value,onChange}) {
    return (
        <label htmlFor="calc-screen">
            <input id="calc-screen" value={value} onChange={onChange}/>
        </label>
    )
}

export default CalcScreen;