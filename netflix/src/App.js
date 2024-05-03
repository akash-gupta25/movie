import React from 'react';
import Body from "./components/Body";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./components/MovieDialog";
import { BrowserRouter as Router } from 'react-router-dom'; // Change createBrowserRouter to BrowserRouter

function App() {
    return (
        <Router> {/* Wrap the app with Router */}
            <div>
                <Body />
                <Toaster />
                <MovieDialog />
            </div>
        </Router>
    );
}

export default App;
