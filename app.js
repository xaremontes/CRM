function App() {
    try {
        const { user, loading } = useAuth();
        const { currentPath } = useRouter();

        if (loading) {
            return React.createElement('div', {
                className: 'd-flex justify-content-center align-items-center',
                style: { height: '100vh' }
            },
                React.createElement('div', { className: 'spinner-border text-primary' }),
                React.createElement('span', { className: 'ms-2' }, 'Cargando...')
            );
        }

        if (!user) {
            return React.createElement(Login);
        }

        const renderPage = () => {
            switch (currentPath) {
                case '#/compras':
                    return React.createElement(Compras);
                case '#/contactos':
                    return React.createElement(Contactos);
                case '#/negocios':
                    return React.createElement(Negocios);
                case '#/tickets':
                    return React.createElement(Tickets);
                default:
                    return React.createElement(Dashboard);
            }
        };

        return React.createElement(Layout, null, renderPage());
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

function Main() {
    try {
        return React.createElement(AuthProvider, null,
            React.createElement(Router, null,
                React.createElement(App)
            )
        );
    } catch (error) {
        console.error('Main component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Main));
