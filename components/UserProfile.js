function UserProfile({ show, onClose, user }) {
    try {
        if (!show) return null;

        return React.createElement('div', {
            className: 'modal d-block',
            style: { backgroundColor: 'rgba(0,0,0,0.5)' },
            'data-name': 'user-profile-modal',
            'data-file': 'components/UserProfile.js'
        },
            React.createElement('div', { className: 'modal-dialog modal-lg' },
                React.createElement('div', { className: 'modal-content' },
                    React.createElement('div', { className: 'modal-header bg-primary text-white' },
                        React.createElement('h5', { className: 'modal-title' },
                            React.createElement('i', { className: 'fas fa-user me-2' }),
                            'Perfil de Usuario'
                        ),
                        React.createElement('button', {
                            className: 'btn-close btn-close-white',
                            onClick: onClose
                        })
                    ),
                    React.createElement('div', { className: 'modal-body' },
                        React.createElement('div', { className: 'row' },
                            React.createElement('div', { className: 'col-md-4 text-center' },
                                React.createElement('img', {
                                    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
                                    className: 'rounded-circle mb-3',
                                    width: '120',
                                    height: '120',
                                    alt: 'Avatar'
                                }),
                                React.createElement('h5', null, user?.name),
                                React.createElement('p', { className: 'text-muted' }, user?.role === 'admin' ? 'Administrador' : 'Usuario')
                            ),
                            React.createElement('div', { className: 'col-md-8' },
                                React.createElement('h6', { className: 'mb-3' }, 'Información Personal'),
                                React.createElement('div', { className: 'row mb-2' },
                                    React.createElement('div', { className: 'col-sm-4' },
                                        React.createElement('strong', null, 'Email:')
                                    ),
                                    React.createElement('div', { className: 'col-sm-8' }, user?.email)
                                ),
                                React.createElement('div', { className: 'row mb-2' },
                                    React.createElement('div', { className: 'col-sm-4' },
                                        React.createElement('strong', null, 'Rol:')
                                    ),
                                    React.createElement('div', { className: 'col-sm-8' },
                                        React.createElement('span', {
                                            className: 'badge bg-primary'
                                        }, user?.role === 'admin' ? 'Administrador' : 'Usuario')
                                    )
                                ),
                                React.createElement('div', { className: 'row mb-2' },
                                    React.createElement('div', { className: 'col-sm-4' },
                                        React.createElement('strong', null, 'Último acceso:')
                                    ),
                                    React.createElement('div', { className: 'col-sm-8' }, new Date().toLocaleDateString())
                                ),
                                React.createElement('div', { className: 'row mb-2' },
                                    React.createElement('div', { className: 'col-sm-4' },
                                        React.createElement('strong', null, 'Estado:')
                                    ),
                                    React.createElement('div', { className: 'col-sm-8' },
                                        React.createElement('span', {
                                            className: 'badge bg-success'
                                        }, 'Activo')
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('div', { className: 'modal-footer' },
                        React.createElement('button', {
                            className: 'btn btn-secondary',
                            onClick: onClose
                        }, 'Cerrar')
                    )
                )
            )
        );
    } catch (error) {
        console.error('UserProfile component error:', error);
        reportError(error);
    }
}
