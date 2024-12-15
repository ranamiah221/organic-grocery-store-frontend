import { Link, useNavigate } from "react-router-dom";
import login from '../../assets/images/img-login.jpg'
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser, user}=useContext(AuthContext)
    const navigate = useNavigate()

      const handleSignup=(event)=>{
           event.preventDefault();
          const form=event.target;
          // const name= form.name.value;
          // const photo= form.name.value;
          const email= form.email.value;
          const password= form.password.value;
          createUser(email, password)
          .then(result=>{
            const user =result.user;
            Swal.fire("Create Successful!");
            navigate('/login')
          })
          .catch(error=>{
            console.log(error.message)
          })
  
      }
      return (
          <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 ml-8">
            <img src={login} alt="" />
          </div>
          <div className="card w-full max-w-sm shrink-0 border-2">
            <form onSubmit={handleSignup} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up !!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn text-white bg-[#FF3811] hover:bg-[#FF3476]">
                  Sign up
                </button>
              </div>
              <p className="p-2 text-center">Already you have account please <Link to={'/login'} className="text-[#FF3811] font-bold underline">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
      );
  };
  
  export default SignUp;