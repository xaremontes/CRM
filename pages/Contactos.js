function Contactos() {
    try {
        const [contactos, setContactos] = React.useState([
            { 
                id: 1, 
                nombre: 'Juan Pérez', 
                email: 'juan@email.com', 
                telefono: '123-456-7890', 
                empresa: 'Empresa A',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format'
            },
            { 
                id: 2, 
                nombre: 'María García', 
                email: 'maria@email.com', 
                telefono: '098-765-4321', 
                empresa: 'Empresa B',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format'
            },
            { 
                id: 3, 
                nombre: 'Carlos López', 
                email: 'carlos@email.com', 
                telefono: '555-123-4567', 
                empresa: 'Empresa C',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format'
            }
        ]);

        const [showModal, setShowModal] = React.useState(false);
        const [newContacto, setNewContacto] = React.useState({
            nombre: '',
            email: '',
            telefono: '',
            empresa: '',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face&auto=format'
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            const contacto = {
                ...newContacto,
                id: Date.now()
            };
            setContactos([...contactos, contacto]);
            setNewContacto({ 
                nombre: '', 
                email: '', 
                telefono: '', 
                empresa: '',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face&auto=format'
            });
            setShowModal(false);
        };

        return React.createElement('div', {
            'data-name': 'contactos-page',
            'data-file': 'pages/Contactos.js'
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h2', null, 'Gestión de Contactos'),
                React.createElement('button', {
                    className: 'btn btn-success',
                    onClick: () => setShowModal(true)
                }, 'Nuevo Contacto')
            ),
            React.createElement('div', { className: 'row' },
                contactos.map(contacto =>
                    React.createElement('div', { key: contacto.id, className: 'col-md-6 col-lg-4 mb-4' },
                        React.createElement('div', { className: 'card card-hover h-100' },
                            React.createElement('div', { className: 'card-body text-center' },
                                React.createElement('img', {
                                    src: contacto.avatar,
                                    className: 'rounded-circle mb-3',
                                    width: '80',
                                    height: '80',
                                    alt: contacto.nombre
                                }),
                                React.createElement('h5', { className: 'card-title' }, contacto.nombre),
                                React.createElement('p', { className: 'card-text text-start' },
                                    React.createElement('i', { className: 'fas fa-envelope me-2 text-primary' }),
                                    contacto.email
                                ),
                                React.createElement('p', { className: 'card-text text-start' },
                                    React.createElement('i', { className: 'fas fa-phone me-2 text-success' }),
                                    contacto.telefono
                                ),
                                React.createElement('p', { className: 'card-text text-start' },
                                    React.createElement('i', { className: 'fas fa-building me-2 text-warning' }),
                                    contacto.empresa
                                ),
                                React.createElement('div', { className: 'd-flex gap-2 justify-content-center' },
                                    React.createElement('button', { className: 'btn btn-sm btn-outline-primary' }, 'Editar'),
                                    React.createElement('button', { className: 'btn btn-sm btn-outline-danger' }, 'Eliminar')
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
                            React.createElement('h5', { className: 'modal-title' }, 'Nuevo Contacto'),
                            React.createElement('button', {
                                className: 'btn-close',
                                onClick: () => setShowModal(false)
                            })
                        ),
                        React.createElement('form', { onSubmit: handleSubmit },
                            React.createElement('div', { className: 'modal-body' },
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Nombre'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: newContacto.nombre,
                                        onChange: (e) => setNewContacto({...newContacto, nombre: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Email'),
                                    React.createElement('input', {
                                        type: 'email',
                                        className: 'form-control',
                                        value: newContacto.email,
                                        onChange: (e) => setNewContacto({...newContacto, email: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Teléfono'),
                                    React.createElement('input', {
                                        type: 'tel',
                                        className: 'form-control',
                                        value: newContacto.telefono,
                                        onChange: (e) => setNewContacto({...newContacto, telefono: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Empresa'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: newContacto.empresa,
                                        onChange: (e) => setNewContacto({...newContacto, empresa: e.target.value}),
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
                                    className: 'btn btn-success'
                                }, 'Guardar')
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Contactos component error:', error);
        reportError(error);
    }
}
