import { createContext, useState } from 'react';
import './App.css';

import MainDashboard from './components/MainDashboard/MainDashboard';
import TagBoard from './components/TagBoard/TagBoard';
import { Switch } from '@mui/material';

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="App" id={theme}>
                <div className="switch">
                    <Switch onChange={toggleTheme} />
                </div>
                <MainDashboard />
                <TagBoard />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
