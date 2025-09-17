import { Link, useNavigate } from 'react-router-dom';


const AuthFooter = () => {
        const navigate = useNavigate();
    
    return (
        <div className="auth-footer">
            <span>Forgot password?</span>
            <p>
                New to TNH Store? <Link to="/register">Create an account</Link>
            </p>
        </div>
    )
}

export default AuthFooter