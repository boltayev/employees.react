import { Component } from "react/cjs/react.production.min";
import "./app-info.css";

class AppInfo extends Component{
    render() {
        return (
            <div className='app-info'>
                <h1>Учет сотрудников в компании Web dasturlash kanali</h1>
                <h2>Общее число сотрудников:</h2>
                <h2>Премию получат:</h2>
            </div>
        )
    }
}

// export default AppInfo;
export { AppInfo };
