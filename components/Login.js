function Login() {
    try {
        const [formData, setFormData] = React.useState({
            email: '',
            password: ''
        });
        const [error, setError] = React.useState('');
        const { login, loading } = useAuth();

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError('');
            
            const result = await login(formData.email, formData.password);
            if (!result.success) {
                setError(result.error);
            }
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return React.createElement('div', {
            className: 'login-container d-flex align-items-center justify-content-center',
            'data-name': 'login-container',
            'data-file': 'components/Login.js'
        }, 
            React.createElement('div', {
                className: 'card shadow-lg',
                style: { width: '400px' }
            },
                React.createElement('div', { className: 'card-body p-5' },
                    React.createElement('div', { className: 'text-center mb-4' },
                        React.createElement('i', { 
                            className: 'fas fa-users text-white bg-primary rounded-circle p-3 mb-3',
                            style: { fontSize: '2rem' }
                        }),
                        React.createElement('h2', { className: 'text-primary fw-bold' }, 'CRM System'),
                        React.createElement('p', { className: 'text-muted' }, 'Ingresa tus credenciales')
                    ),
                    error && React.createElement('div', {
                        className: 'alert alert-danger'
                    }, error),
                    React.createElement('form', { onSubmit: handleSubmit },
                        React.createElement('div', { className: 'mb-3' },
                            React.createElement('label', { className: 'form-label' }, 'Email'),
                            React.createElement('input', {
                                type: 'email',
                                className: 'form-control',
                                name: 'email',
                                value: formData.email,
                                onChange: handleChange,
                                required: true,
                                placeholder: 'admin@crm.com'
                            })
                        ),
                        React.createElement('div', { className: 'mb-4' },
                            React.createElement('label', { className: 'form-label' }, 'Contraseña'),
                            React.createElement('input', {
                                type: 'password',
                                className: 'form-control',
                                name: 'password',
                                value: formData.password,
                                onChange: handleChange,
                                required: true,
                                placeholder: 'admin123'
                            })
                        ),
                        React.createElement('button', {
                            type: 'submit',
                            className: 'btn btn-primary-custom w-100 py-2',
                            disabled: loading
                        }, loading ? 'Iniciando...' : 'Iniciar Sesión')
                    )
                )
            )
        );
    } catch (error) {
        console.error('Login component error:', error);
        reportError(error);
    }
}
