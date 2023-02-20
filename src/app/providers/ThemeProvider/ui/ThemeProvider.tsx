import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEM_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
