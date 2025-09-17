
import { useState } from 'react';
import AuthForm from '../components/auth/authForm';
import AuthFooter from '../components/auth/authFooter';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '', remember: false });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setCredentials(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/');
        }, 1200);
    };

    const styles = {
        authPage: {
            minHeight: "calc(100vh - 160px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f3f3f3, #ffffff)",
            padding: "60px 20px",
        },
        authCard: {
            width: "100%",
            maxWidth: "460px",
            background: "#fff",
            padding: "36px",
            borderRadius: "28px",
            boxShadow: "30px 30px 80px #d7d7d7, -30px -30px 80px #ffffff",
            border: "1px solid rgba(0, 0, 0, 0.04)",
            textAlign: "center",
        },
        heading: {
            fontSize: "30px",
            marginBottom: "10px",
        },
        subText: {
            color: "#555",
            marginBottom: "24px",
        },
    };
    return (
        <div className="auth-page" style={styles.authPage}>
            <div className="auth-card" style={styles.authCard}>
                <h1 style={styles.heading}>Welcome back</h1>
                <p style={styles.subText}>Sign in to manage your orders and enjoy faster checkout.</p>

                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    credentials={credentials}
                    isSubmitting={isSubmitting}
                />

                <AuthFooter />
            </div>
        </div>
    );
};

export default LoginPage;
