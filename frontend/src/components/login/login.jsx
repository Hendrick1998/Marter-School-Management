import React,{Component} from 'react';
import './login.css';
import Navbar from '../Home/CustomNavbar';

class Login extends Component{
    render(){
        return(
            <div>
                <Navbar/>
               <div class="row justify-content-center center_login">
                    <aside class="col-12 col-md-4 col-sm-6">
                        <div class="card border-dark">
                            <article class="card-body">
                                <h4 class="card-title text-center mb-1 mt-2">Sign In</h4>
                                <form>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input name=" " class="form-control" placeholder="Email" type="email"></input>
                                    </div> 

                                    <div class="form-group">
                                        
                                        <label>Password</label>
                                        <input name="" class="form-control" placeholder="*********" type="password"></input>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                                        <a class="float-right" href="#">Forget Your Password?</a>
                                    </div>
                                </form>  
                            </article>
                         </div>
                    </aside>
               </div>
            </div> 
        )
    }
}

export default Login;