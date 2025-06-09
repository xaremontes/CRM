function Layout({ children }) {
    try {
        return React.createElement('div', {
            className: 'container-fluid p-0',
            'data-name': 'layout',
            'data-file': 'components/Layout.js'
        },
            React.createElement('div', { className: 'row g-0' },
                React.createElement(Sidebar),
                React.createElement('div', { className: 'col-md-9 col-lg-10' },
                    React.createElement(Header),
                    React.createElement('main', { className: 'p-4' },
                        children
                    )
                )
            )
        );
    } catch (error) {
        console.error('Layout component error:', error);
        reportError(error);
    }
}
