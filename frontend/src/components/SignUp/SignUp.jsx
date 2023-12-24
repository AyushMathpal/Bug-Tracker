import { useState } from "react";
import axios from "axios"
import LinearProgress from '@mui/material/LinearProgress';
import styles from "./SignUp.module.css";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
export const SignUp = () => {
    const [loading, setLoading] = useState(false)
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
      const response = await axios.post('http://localhost:5000/api/user/signup', formData,
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
          withCredentials: true,
        }
      );
      setLoading(false)
      if (response.status === 200) {
        console.log(response.data.user)
        // updateProfile(response.data.user)
        // console.log(profile)
        console.log('Login successful!');

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
            <p className={styles.loginFormTitle}>Welcome Aboard</p>
            <p>Sign Up to the Dashboard</p>
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


            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginFormButton}
                onClick={handleLogin}
              >
                SIGN UP
              </Button>
            </Form.Item>
          </Form>
          <NavLink to='/' style={{textDecoration:"none",fontWeight:"bold"}}>Login</NavLink>
        </div>
      </div>
    </div>
    </>
  );
};
