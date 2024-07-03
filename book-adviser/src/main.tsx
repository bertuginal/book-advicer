import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BookProvider} from "./context/BookContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BookProvider>
            <App/>
        </BookProvider>
    </React.StrictMode>,
)
