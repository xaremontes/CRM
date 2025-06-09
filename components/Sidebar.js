function Sidebar() {
    try {
        const { currentPath, navigate } = useRouter();

        const menuItems = [
            { path: '#/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
            { path: '#/compras', icon: 'fas fa-shopping-cart', label: 'Compras' },
            { path: '#/contactos', icon: 'fas fa-address-book', label: 'Contactos' },
            { path: '#/negocios', icon: 'fas fa-handshake', label: 'Negocios' },
            { path: '#/tickets', icon: 'fas fa-ticket-alt', label: 'Tickets' }
        ];

        return React.createElement('div', {
            className: 'col-md-3 col-lg-2 sidebar text-white p-0',
            'data-name': 'sidebar',
            'data-file': 'components/Sidebar.js'
        },
            React.createElement('div', { className: 'p-3' },
                React.createElement('h4', { className: 'text-center mb-4' },
                    React.createElement('i', { className: 'fas fa-users me-2' }),
                    'CRM'
                ),
                React.createElement('ul', { className: 'nav nav-pills flex-column' },
                    menuItems.map(item => 
                        React.createElement('li', { 
                            key: item.path,
                            className: 'nav-item mb-2'
                        },
                            React.createElement('a', {
                                href: item.path,
                                className: `nav-link text-white sidebar-item ${currentPath === item.path ? 'active' : ''}`,
                                onClick: (e) => {
                                    e.preventDefault();
                                    navigate(item.path);
                                }
                            },
                                React.createElement('i', { className: `${item.icon} me-2` }),
                                item.label
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
    }
}
