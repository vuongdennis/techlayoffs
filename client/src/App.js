import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import About from "./components/about"
import Form from "./components/form"
import RecordList from "./components/recordList";
// import Edit from "./components/edit";
// import Create from "./components/create";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/form" element={<Form />} />
            </Routes>
        </div>
    );
};

export default App;