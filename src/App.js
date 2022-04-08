import Api from "./component/Api";
import UpdatePage from "./component/UpdatePage";
import {
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Api/>}/>
                    <Route path="/edit" element={<UpdatePage/>}/>
                    <Route path="/Api" element={<Api/>}/>
                </Routes>
        </div>
    );
}

export default App;
