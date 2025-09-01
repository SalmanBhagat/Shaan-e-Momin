import { Form } from "react-bootstrap";
import CommonButton from "../../components/buttons/CommonButton";
import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { api } from "../../@core/APIs/Api";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoaderSpinner from "../../components/loaders/LoaderSpinner";

// zod schema validation
const schema = z.object({
  country_code: z.string(),
  mobile_number: z.number({ error: "Phone number is required" }),
});

function Login() {
  // Connection to react-hook-form + zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // State Variebles
  const [countryCode, setCountryCode] = useState([]);
  const [loading, setLoading] = useState(false);

  // Api calls Country code
  useEffect(() => {
    // Loader Show UI
    setLoading(true);
    api
      .get("country-code-list")
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          setCountryCode(res.data.data);
          setLoading(false); // Loader False
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Loader False
      });
  }, []);

  // call function data show
  const onSubmit = (data) => {
    console.log(data);

    // login api call and data enter
    api
      .post("login-with-otp", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-wrapper">
      {/* Loader Spinner */}
      {loading ? (
        <LoaderSpinner/>
      ) : (
        <>
          {/* Banner */}
          <div className="banner-wrapper">
            <img src="/Images/Login/LoginBanner.svg" alt="" />
          </div>

          {/* Auth Form Part */}
          <div className="auth-part">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-5">
                <Form.Label style={{ fontWeight: "500" }}>
                  Mobile Number
                </Form.Label>
                <div className="d-flex form-input position-relative">
                  {/* Country code */}
                  <Form.Select
                    className="form-select"
                    {...register("country_code")}
                  >
                    {countryCode.length > 0 &&
                      countryCode.map((item, index) => (
                        <option key={index} value={item.country_code}>
                          {item.country_code}
                        </option>
                      ))}
                  </Form.Select>

                  {/* Mobile Number */}
                  <Form.Control
                    className="border-0"
                    type="number"
                    maxLength={10}
                    {...register("mobile_number", { valueAsNumber: true })}
                  />
                </div>

                {/* Err Show validation*/}
                <p
                  style={{ fontSize: "12px" }}
                  className="text-danger position-absolute mt-2"
                >
                  {errors?.mobile_number?.message}
                </p>
              </Form.Group>

              <Form.Group className="mb-5">
                {/* Login Button Component Import */}
                <CommonButton
                  type="submit"
                  className="w-100 rounded-4 justify-content-center"
                  onClick={() => setLoading(true)}
                >
                  Login
                </CommonButton>
              </Form.Group>

              <Form.Group className="mb-3 d-flex flex-column align-items-center">
                <Form.Text className="mb-3 d-block">
                  <Link to="" className="newUser">
                    New User ?
                  </Link>
                </Form.Text>
                {/* Sign Up Button Component Import */}
                <CommonButton
                  color="secondary"
                  className="w-75 text-black justify-content-center px-4"
                  rounded
                >
                  Sign Up
                </CommonButton>
              </Form.Group>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
