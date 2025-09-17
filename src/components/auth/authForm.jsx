import './auth.css'

const AuthForm = (props) => {

    const { handleChange, handleSubmit, credentials, isSubmitting } = props;
    return (

        <form className="auth-form" onSubmit={handleSubmit}>
            <label>
                <span>Email address</span>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                <span>Password</span>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className="auth-remember">
                <input
                    type="checkbox"
                    name="remember"
                    checked={credentials.remember}
                    onChange={handleChange}
                />
                Remember me on this device
            </label>

            <button type="submit" className="auth-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in…' : 'Sign in'}
            </button>
        </form>
    )

}

export default AuthForm