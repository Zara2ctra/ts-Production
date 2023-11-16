import React, { Suspense } from 'react';
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;