const AuthContext = React.createContext();

function AuthProvider({ children }) {
    try {
        const [user, setUser] = React.useState(null);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
            const savedUser = localStorage.getItem('crmUser');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
            setLoading(false);
        }, []);

        const login = async (email, password) => {
            setLoading(true);
            
            // Simular autenticación
            if (email === 'admin@crm.com' && password === 'admin123') {
                const userData = {
                    id: 1,
                    name: 'Administrador',
                    email: email,
                    role: 'admin'
                };
                setUser(userData);
                localStorage.setItem('crmUser', JSON.stringify(userData));
                setLoading(false);
                return { success: true };
            }
            
            setLoading(false);
            return { success: false, error: 'Credenciales inválidas' };
        };

        const logout = () => {
            setUser(null);
            localStorage.removeItem('crmUser');
        };

        const value = {
            user,
            login,
            logout,
            loading
        };

        return React.createElement(AuthContext.Provider, { value }, children);
    } catch (error) {
        console.error('Auth provider error:', error);
        reportError(error);
    }
}

function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
