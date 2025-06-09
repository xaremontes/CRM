function Tickets() {
    try {
        const [tickets, setTickets] = React.useState([
            { id: 1, titulo: 'Error en sistema', cliente: 'Juan Pérez', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-20' },
            { id: 2, titulo: 'Consulta técnica', cliente: 'María García', prioridad: 'Media', estado: 'En progreso', fecha: '2024-01-19' },
            { id: 3, titulo: 'Solicitud de cambio', cliente: 'Carlos López', prioridad: 'Baja', estado: 'Cerrado', fecha: '2024-01-18' }
        ]);

        const [showModal, setShowModal] = React.useState(false);
        const [newTicket, setNewTicket] = React.useState({
            titulo: '',
            cliente: '',
            prioridad: 'Media',
            estado: 'Abierto',
            fecha: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            const ticket = {
                ...newTicket,
                id: Date.now()
            };
            setTickets([...tickets, ticket]);
            setNewTicket({ titulo: '', cliente: '', prioridad: 'Media', estado: 'Abierto', fecha: '' });
            setShowModal(false);
        };

        const getPriorityColor = (prioridad) => {
            switch(prioridad) {
                case 'Alta': return 'danger';
                case 'Media': return 'warning';
                case 'Baja': return 'success';
                default: return 'secondary';
            }
        };

        const getStatusColor = (estado) => {
            switch(estado) {
                case 'Abierto': return 'danger';
                case 'En progreso': return 'warning';
                case 'Cerrado': return 'success';
                default: return 'secondary';
            }
        };

        return React.createElement('div', {
            'data-name': 'tickets-page',
            'data-file': 'pages/Tickets.js'
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h2', null, 'Gestión de Tickets'),
                React.createElement('button', {
                    className: 'btn btn-danger',
                    onClick: () => setShowModal(true)
                }, 'Nuevo Ticket')
            ),
            React.createElement('div', { className: 'card' },
                React.createElement('div', { className: 'card-body' },
                    React.createElement('div', { className: 'table-responsive' },
                        React.createElement('table', { className: 'table table-hover' },
                            React.createElement('thead', { className: 'table-light' },
                                React.createElement('tr', null,
                                    React.createElement('th', null, 'ID'),
                                    React.createElement('th', null, 'Título'),
                                    React.createElement('th', null, 'Cliente'),
                                    React.createElement('th', null, 'Prioridad'),
                                    React.createElement('th', null, 'Estado'),
                                    React.createElement('th', null, 'Fecha'),
                                    React.createElement('th', null, 'Acciones')
                                )
                            ),
                            React.createElement('tbody', null,
                                tickets.map(ticket =>
                                    React.createElement('tr', { key: ticket.id },
                                        React.createElement('td', null, ticket.id),
                                        React.createElement('td', null, ticket.titulo),
                                        React.createElement('td', null, ticket.cliente),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `status-badge bg-${getPriorityColor(ticket.prioridad)} text-white`
                                            }, ticket.prioridad)
                                        ),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `status-badge bg-${getStatusColor(ticket.estado)} text-white`
                                            }, ticket.estado)
                                        ),
                                        React.createElement('td', null, ticket.fecha),
                                        React.createElement('td', null,
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-primary me-2' }, 'Ver'),
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-secondary' }, 'Editar')
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            showModal && React.createElement('div', {
                className: 'modal d-block',
                style: { backgroundColor: 'rgba(0,0,0,0.5)' }
            },
                React.createElement('div', { className: 'modal-dialog' },
                    React.createElement('div', { className: 'modal-content' },
                        React.createElement('div', { className: 'modal-header' },
                            React.createElement('h5', { className: 'modal-title' }, 'Nuevo Ticket'),
                            React.createElement('button', {
                                className: 'btn-close',
                                onClick: () => setShowModal(false)
                            })
                        ),
                        React.createElement('form', { onSubmit: handleSubmit },
                            React.createElement('div', { className: 'modal-body' },
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Título'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: newTicket.titulo,
                                        onChange: (e) => setNewTicket({...newTicket, titulo: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Cliente'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: newTicket.cliente,
                                        onChange: (e) => setNewTicket({...newTicket, cliente: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Prioridad'),
                                    React.createElement('select', {
                                        className: 'form-select',
                                        value: newTicket.prioridad,
                                        onChange: (e) => setNewTicket({...newTicket, prioridad: e.target.value})
                                    },
                                        React.createElement('option', { value: 'Baja' }, 'Baja'),
                                        React.createElement('option', { value: 'Media' }, 'Media'),
                                        React.createElement('option', { value: 'Alta' }, 'Alta')
                                    )
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Fecha'),
                                    React.createElement('input', {
                                        type: 'date',
                                        className: 'form-control',
                                        value: newTicket.fecha,
                                        onChange: (e) => setNewTicket({...newTicket, fecha: e.target.value}),
                                        required: true
                                    })
                                )
                            ),
                            React.createElement('div', { className: 'modal-footer' },
                                React.createElement('button', {
                                    type: 'button',
                                    className: 'btn btn-secondary',
                                    onClick: () => setShowModal(false)
                                }, 'Cancelar'),
                                React.createElement('button', {
                                    type: 'submit',
                                    className: 'btn btn-danger'
                                }, 'Guardar')
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Tickets component error:', error);
        reportError(error);
    }
}
