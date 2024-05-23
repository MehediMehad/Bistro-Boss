import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/SocialLogin';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true) // Captcha
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    console.log("state in the location", location?.state);




    // Captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    // Captcha Close


    // SignIn User || Login User
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful.",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, {replace: true})
            })
    }


    // Validate Captcha 
    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;

        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    // Captcha close
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* Validate Captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} name="captcha" type="text" placeholder="type the captcha" className="input input-bordered" required />
                            </div>
                            {/* Validate Captcha Close */}
                            <div className="form-control mt-6">
                                <input
                                // TODO: apply disabled for re captcha
                                    disabled={false} //Captcha
                                    className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to='/register'>Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;