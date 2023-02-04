import TablesConfig from "./Table/TablesConfig"
import data from "./data"

function App() {
    const schema = require('./report-config.json')
    const Ajv = require("ajv")
    const ajv = new Ajv()
    const validate = ajv.compile(schema)
    const valid = validate(data)
    if (!valid) console.error(validate.errors)

    return (
    <div className="App">
        {valid && <TablesConfig data = {data}/>}
    </div>
  )
}

export default App
