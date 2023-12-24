import { useState } from "react";
import axios from "axios"
import LinearProgress from '@mui/material/LinearProgress';
import styles from "./Login.module.css";
import { Form, Input, Checkbox, Button } from "antd";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../Context/Context";
export const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()
    const location=useLocation()
    const {profile,updateProfile}=useProfile()
    const from=location.state?.from?.pathname ||"/dashboard";
  const [loginData,setLoginData]=useState({
    email:'',
    password:'',
  })
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleLogin = async (e) => {
    const formData = {
      email: loginData.email,
      password: loginData.password,
    }
    console.log("loginData->",formData)
    e.preventDefault();
    try {
        setLoading(true)
      const response = await axios.post('http://localhost:5000/api/user/login', formData,
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
          withCredentials: true,
        }
      );
      setLoading(false)
      if (response.status === 200) {
        const user=response.data.user
        const access=response.data.access
        const accessToken=response.data.authToken
         updateProfile({user,access,accessToken})
         console.log(user,access,accessToken)
         console.log(profile)
         console.log(response.data.user)
        console.log('Login successful!');
        navigate(from,{replace:true});
      }
    } catch (error) {
        setLoading(false)
      console.error('Error during login:', error);
      alert("Invalid Credentials")
    }

  };
  return (<>{loading ? <LinearProgress style={{ backgroundColor: "black" }} /> : null}
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <div className={styles.illustrationWrapper}>
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <div className={styles.leftForm}>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <p className={styles.loginFormTitle}>Welcome back</p>
            <p>Login to the Dashboard</p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="Username"
                className={styles.loginFormInput}
                type="email"
                value={loginData.email}
              onChange={(e) => setLoginData({...loginData,email:e.target.value})}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className={styles.loginFormInput}
                value={loginData.password}
              onChange={(e) => setLoginData({...loginData,password:e.target.value})}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginFormButton}
                onClick={handleLogin}
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
          <NavLink to='/signup' style={{textDecoration:"none",fontWeight:"bold"}}>Create Account</NavLink>
        </div>
      </div>
    </div>
    </>
  );
};
