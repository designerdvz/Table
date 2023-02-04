import './App.css';
import Ajv from "ajv"
import TablesConfig from "./TablesConfig";
import data from "./data"

function App() {
    const schema = require('./report-config.json')
    const Ajv = require("ajv")
    const ajv = new Ajv()
    const validate = ajv.compile(schema)
    const valid = validate(data)
    if (!valid) console.log(validate.errors)

    return (
    <div className="App">
      <TablesConfig data = {data}/>
    </div>
  );
}

export default App;
