function Header() {
    try {
        const { user, logout } = useAuth();
        const { navigate } = useRouter();
        const [showProfile, setShowProfile] = React.useState(false);

        const handleProfileClick = () => {
            setShowProfile(true);
        };

        const handleLogout = () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                logout();
            }
        };

        return React.createElement('nav', {
            className: 'navbar navbar-expand-lg navbar-light bg-white shadow-sm',
            'data-name': 'header',
            'data-file': 'components/Header.js'
        },
            React.createElement('div', { className: 'container-fluid' },
                React.createElement('span', { className: 'navbar-brand mb-0 h1' }, 'CRM Dashboard'),
                React.createElement('div', { className: 'navbar-nav ms-auto' },
                    React.createElement('div', { className: 'nav-item dropdown' },
                        React.createElement('button', {
                            className: 'btn nav-link dropdown-toggle d-flex align-items-center border-0 bg-transparent',
                            type: 'button',
                            'data-bs-toggle': 'dropdown',
                            'aria-expanded': 'false'
                        },
                            React.createElement('img', {
                                src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format',
                                className: 'rounded-circle me-2',
                                width: '32',
                                height: '32',
                                alt: 'Avatar'
                            }),
                            user?.name || 'Usuario'
                        ),
                        React.createElement('ul', { className: 'dropdown-menu dropdown-menu-end' },
                            React.createElement('li', null,
                                React.createElement('div', { className: 'dropdown-header' },
                                    React.createElement('strong', null, user?.name),
                                    React.createElement('br'),
                                    React.createElement('small', { className: 'text-muted' }, user?.email)
                                )
                            ),
                            React.createElement('li', null,
                                React.createElement('hr', { className: 'dropdown-divider' })
                            ),
                            React.createElement('li', null,
                                React.createElement('button', {
                                    className: 'dropdown-item',
                                    onClick: handleProfileClick
                                },
                                    React.createElement('i', { className: 'fas fa-user me-2' }),
                                    'Mi Perfil'
                                )
                            ),
                            React.createElement('li', null,
                                React.createElement('button', {
                                    className: 'dropdown-item',
                                    onClick: () => navigate('#/dashboard')
                                },
                                    React.createElement('i', { className: 'fas fa-cog me-2' }),
                                    'Configuración'
                                )
                            ),
                            React.createElement('li', null,
                                React.createElement('hr', { className: 'dropdown-divider' })
                            ),
                            React.createElement('li', null,
                                React.createElement('button', {
                                    className: 'dropdown-item text-danger',
                                    onClick: handleLogout
                                },
                                    React.createElement('i', { className: 'fas fa-sign-out-alt me-2' }),
                                    'Cerrar Sesión'
                                )
                            )
                        )
                    )
                )
            ),
            showProfile && React.createElement(UserProfile, {
                show: showProfile,
                onClose: () => setShowProfile(false),
                user: user
            })
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
