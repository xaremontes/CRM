function Dashboard() {
    try {
        const stats = [
            { title: 'Total Compras', value: '1,234', icon: 'fas fa-shopping-cart', color: 'primary' },
            { title: 'Contactos', value: '567', icon: 'fas fa-users', color: 'success' },
            { title: 'Negocios Activos', value: '89', icon: 'fas fa-handshake', color: 'warning' },
            { title: 'Tickets Abiertos', value: '23', icon: 'fas fa-ticket-alt', color: 'danger' }
        ];

        return React.createElement('div', {
            className: 'container-fluid',
            'data-name': 'dashboard',
            'data-file': 'components/Dashboard.js'
        },
            React.createElement('div', { className: 'row mb-4' },
                React.createElement('div', { className: 'col' },
                    React.createElement('h2', { className: 'mb-0' }, 'Dashboard'),
                    React.createElement('p', { className: 'text-muted' }, 'Resumen general del sistema')
                )
            ),
            React.createElement('div', { className: 'row' },
                stats.map((stat, index) =>
                    React.createElement('div', { 
                        key: index,
                        className: 'col-md-6 col-lg-3 mb-4'
                    },
                        React.createElement('div', { className: `card card-hover border-0 shadow-sm` },
                            React.createElement('div', { className: 'card-body' },
                                React.createElement('div', { className: 'd-flex align-items-center' },
                                    React.createElement('div', {
                                        className: `bg-${stat.color} text-white rounded-circle p-3 me-3`
                                    },
                                        React.createElement('i', { className: stat.icon })
                                    ),
                                    React.createElement('div', null,
                                        React.createElement('h5', { className: 'card-title mb-0' }, stat.value),
                                        React.createElement('p', { className: 'card-text text-muted' }, stat.title)
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { className: 'row mt-4' },
                React.createElement('div', { className: 'col-md-8' },
                    React.createElement('div', { className: 'card' },
                        React.createElement('div', { className: 'card-header' },
                            React.createElement('h5', { className: 'mb-0' }, 'Actividad Reciente')
                        ),
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('div', { className: 'list-group list-group-flush' },
                                ['Nueva compra registrada', 'Contacto agregado', 'Negocio cerrado', 'Ticket resuelto'].map((activity, index) =>
                                    React.createElement('div', {
                                        key: index,
                                        className: 'list-group-item border-0 px-0'
                                    },
                                        React.createElement('i', { className: 'fas fa-circle text-primary me-2', style: { fontSize: '0.5rem' } }),
                                        activity
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'col-md-4' },
                    React.createElement('div', { className: 'card' },
                        React.createElement('div', { className: 'card-header' },
                            React.createElement('h5', { className: 'mb-0' }, 'Accesos Rápidos')
                        ),
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('div', { className: 'd-grid gap-2' },
                                React.createElement('button', { className: 'btn btn-outline-primary' }, 'Nueva Compra'),
                                React.createElement('button', { className: 'btn btn-outline-success' }, 'Agregar Contacto'),
                                React.createElement('button', { className: 'btn btn-outline-warning' }, 'Crear Negocio'),
                                React.createElement('button', { className: 'btn btn-outline-danger' }, 'Nuevo Ticket')
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Dashboard component error:', error);
        reportError(error);
    }
}
