function Negocios() {
    try {
        const [negocios, setNegocios] = React.useState([
            { id: 1, titulo: 'Venta Software', cliente: 'Empresa A', valor: 50000, estado: 'En progreso', fecha: '2024-01-20' },
            { id: 2, titulo: 'Consultoría IT', cliente: 'Empresa B', valor: 25000, estado: 'Cerrado', fecha: '2024-01-18' },
            { id: 3, titulo: 'Desarrollo Web', cliente: 'Empresa C', valor: 15000, estado: 'Propuesta', fecha: '2024-01-15' }
        ]);

        const [showModal, setShowModal] = React.useState(false);
        const [newNegocio, setNewNegocio] = React.useState({
            titulo: '',
            cliente: '',
            valor: '',
            estado: 'Propuesta',
            fecha: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            const negocio = {
                ...newNegocio,
                id: Date.now(),
                valor: parseFloat(newNegocio.valor)
            };
            setNegocios([...negocios, negocio]);
            setNewNegocio({ titulo: '', cliente: '', valor: '', estado: 'Propuesta', fecha: '' });
            setShowModal(false);
        };

        const getStatusColor = (estado) => {
            switch(estado) {
                case 'Cerrado': return 'success';
                case 'En progreso': return 'warning';
                case 'Propuesta': return 'info';
                default: return 'secondary';
            }
        };

        return React.createElement('div', {
            'data-name': 'negocios-page',
            'data-file': 'pages/Negocios.js'
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h2', null, 'Gestión de Negocios'),
                React.createElement('button', {
                    className: 'btn btn-warning',
                    onClick: () => setShowModal(true)
                }, 'Nuevo Negocio')
            ),
            React.createElement('div', { className: 'card' },
                React.createElement('div', { className: 'card-body' },
                    React.createElement('div', { className: 'table-responsive' },
                        React.createElement('table', { className: 'table table-hover' },
                            React.createElement('thead', { className: 'table-light' },
                                React.createElement('tr', null,
                                    React.createElement('th', null, 'Título'),
                                    React.createElement('th', null, 'Cliente'),
                                    React.createElement('th', null, 'Valor'),
                                    React.createElement('th', null, 'Estado'),
                                    React.createElement('th', null, 'Fecha'),
                                    React.createElement('th', null, 'Acciones')
                                )
                            ),
                            React.createElement('tbody', null,
                                negocios.map(negocio =>
                                    React.createElement('tr', { key: negocio.id },
                                        React.createElement('td', null, negocio.titulo),
                                        React.createElement('td', null, negocio.cliente),
                                        React.createElement('td', null, `$${negocio.valor.toLocaleString()}`),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `status-badge bg-${getStatusColor(negocio.estado)} text-white`
                                            }, negocio.estado)
                                        ),
                                        React.createElement('td', null, negocio.fecha),
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
                            React.createElement('h5', { className: 'modal-title' }, 'Nuevo Negocio'),
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
                                        value: newNegocio.titulo,
                                        onChange: (e) => setNewNegocio({...newNegocio, titulo: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Cliente'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: newNegocio.cliente,
                                        onChange: (e) => setNewNegocio({...newNegocio, cliente: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Valor'),
                                    React.createElement('input', {
                                        type: 'number',
                                        className: 'form-control',
                                        value: newNegocio.valor,
                                        onChange: (e) => setNewNegocio({...newNegocio, valor: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Fecha'),
                                    React.createElement('input', {
                                        type: 'date',
                                        className: 'form-control',
                                        value: newNegocio.fecha,
                                        onChange: (e) => setNewNegocio({...newNegocio, fecha: e.target.value}),
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
                                    className: 'btn btn-warning'
                                }, 'Guardar')
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Negocios component error:', error);
        reportError(error);
    }
}
