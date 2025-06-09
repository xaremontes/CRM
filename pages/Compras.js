function Compras() {
    try {
        const [compras, setCompras] = React.useState([
            { id: 1, proveedor: 'Proveedor A', monto: 1500, fecha: '2024-01-15', estado: 'Completada' },
            { id: 2, proveedor: 'Proveedor B', monto: 2300, fecha: '2024-01-14', estado: 'Pendiente' },
            { id: 3, proveedor: 'Proveedor C', monto: 890, fecha: '2024-01-13', estado: 'Completada' }
        ]);

        const [showModal, setShowModal] = React.useState(false);
        const [newCompra, setNewCompra] = React.useState({
            proveedor: '',
            monto: '',
            fecha: '',
            estado: 'Pendiente'
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            const compra = {
                ...newCompra,
                id: Date.now(),
                monto: parseFloat(newCompra.monto)
            };
            setCompras([...compras, compra]);
            setNewCompra({ proveedor: '', monto: '', fecha: '', estado: 'Pendiente' });
            setShowModal(false);
        };

        return React.createElement('div', {
            'data-name': 'compras-page',
            'data-file': 'pages/Compras.js'
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h2', null, 'Gestión de Compras'),
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: () => setShowModal(true)
                }, 'Nueva Compra')
            ),
            React.createElement('div', { className: 'card' },
                React.createElement('div', { className: 'card-body' },
                    React.createElement('div', { className: 'table-responsive' },
                        React.createElement('table', { className: 'table table-hover' },
                            React.createElement('thead', { className: 'table-light' },
                                React.createElement('tr', null,
                                    React.createElement('th', null, 'ID'),
                                    React.createElement('th', null, 'Proveedor'),
                                    React.createElement('th', null, 'Monto'),
                                    React.createElement('th', null, 'Fecha'),
                                    React.createElement('th', null, 'Estado'),
                                    React.createElement('th', null, 'Acciones')
                                )
                            ),
                            React.createElement('tbody', null,
                                compras.map(compra =>
                                    React.createElement('tr', { key: compra.id },
                                        React.createElement('td', null, compra.id),
                                        React.createElement('td', null, compra.proveedor),
                                        React.createElement('td', null, `$${compra.monto.toLocaleString()}`),
                                        React.createElement('td', null, compra.fecha),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `status-badge ${compra.estado === 'Completada' ? 'bg-success' : 'bg-warning'} text-white`
                                            }, compra.estado)
                                        ),
                                        React.createElement('td', null,
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-primary me-2' }, 'Ver'),
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-danger' }, 'Eliminar')
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
                            React.createElement('h5', { className: 'modal-title' }, 'Nueva Compra'),
                            React.createElement('button', {
                                className: 'btn-close',
                                onClick: () => setShowModal(false)
                            })
                        ),
                        React.createElement('form', { onSubmit: handleSubmit },
                            React.createElement('div', { className: 'modal-body' },
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Proveedor'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: newCompra.proveedor,
                                        onChange: (e) => setNewCompra({...newCompra, proveedor: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Monto'),
                                    React.createElement('input', {
                                        type: 'number',
                                        className: 'form-control',
                                        value: newCompra.monto,
                                        onChange: (e) => setNewCompra({...newCompra, monto: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Fecha'),
                                    React.createElement('input', {
                                        type: 'date',
                                        className: 'form-control',
                                        value: newCompra.fecha,
                                        onChange: (e) => setNewCompra({...newCompra, fecha: e.target.value}),
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
                                    className: 'btn btn-primary'
                                }, 'Guardar')
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Compras component error:', error);
        reportError(error);
    }
}
