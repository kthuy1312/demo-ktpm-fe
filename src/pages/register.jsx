
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/login');
        }, 1200);
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Create your TNH account</h1>
                <p>Earn loyalty points and keep track of all Apple devices you love.</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <label>
                        <span>Full name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required />
                    </label>

                    <label>
                        <span>Email address</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </label>

                    <label>
                        <span>Password</span>
                        <input type="password" name="password" value={form.password} onChange={handleChange} required />
                    </label>

                    <label>
                        <span>Confirm password</span>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="auth-submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Creating account…' : 'Create account'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>

                    </p>
                    <p style={{ marginTop: 10 }}>
                        <Link
                            to="/"
                            style={{
                                display: "inline-block",
                                padding: "10px 18px",
                                border: "1px solid #000",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#000",
                                fontWeight: "500",
                                transition: "all 0.2s ease",
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.background = "#000", e.currentTarget.style.color = "#fff")}
                            onMouseOut={(e) => (e.currentTarget.style.background = "transparent", e.currentTarget.style.color = "#000")}
                        >
                            Back To Homepage
                        </Link>
                    </p>

                </div>
            </div>
        </div >
    );
};

export default RegisterPage;
