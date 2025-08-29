import { Form } from "react-bootstrap";
import CommonButton from "../../components/buttons/CommonButton";
import { Link } from "react-router-dom";
import "./Login.css"

function Login() {
  return (
    <div className="auth-wrapper">
      {/* Banner */}
      <div className="banner-wrapper">
        <img src="/Images/Login/LoginBanner.svg" alt="" />
      </div>
      {/* Auth Form Part */}
      <div className="auth-part">
        <Form>
          <Form.Group className="mb-5">
              <Form.Label style={{fontWeight: "500"}}>Mobile Number</Form.Label>
            <div className="d-flex form-input">
              <Form.Select className="form-select">
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
              </Form.Select>
              <Form.Control className="border-0" type="number" />
            </div>
          </Form.Group>
          <Form.Group className="mb-5">
            {/* Button Component Import */}
            <CommonButton className="w-100 rounded-4 justify-content-center">Login</CommonButton>
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-column align-items-center">
            <Form.Text className="mb-3 d-block">
              <Link to="" className="newUser">New User ?</Link>
            </Form.Text>
          {/* Button Component Import */}
            <CommonButton color="secondary" className="w-75 text-black justify-content-center px-4" rounded>Sign Up</CommonButton>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Login;
