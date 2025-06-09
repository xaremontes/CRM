const RouterContext = React.createContext();

function Router({ children }) {
    try {
        const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#/dashboard');

        React.useEffect(() => {
            const handleHashChange = () => {
                setCurrentPath(window.location.hash || '#/dashboard');
            };

            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const navigate = (path) => {
            window.location.hash = path;
            setCurrentPath(path);
        };

        const value = {
            currentPath,
            navigate
        };

        return React.createElement(RouterContext.Provider, { value }, children);
    } catch (error) {
        console.error('Router error:', error);
        reportError(error);
    }
}

function useRouter() {
    const context = React.useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within Router');
    }
    return context;
}
