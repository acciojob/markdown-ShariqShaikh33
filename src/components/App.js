import React from "react";
import { useState } from "react";
import "../styles/App.css";
const App=()=>{
    const [markdown, setMarkdown] = useState("");

    return (
        <div className="mainDiv">
            <div className="textarea">
                <textarea value={markdown} onChange={e => setMarkdown(e.value)} className="text"></textarea>  
            </div>
            <div className="preview">  </div>
        </div>
    )
}

export default App;