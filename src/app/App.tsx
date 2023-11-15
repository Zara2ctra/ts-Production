import React, {Suspense} from 'react';
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter />
        </div>
    );
};

export default App;