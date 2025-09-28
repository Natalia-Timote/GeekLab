import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./page.module.css";
import authServices from "../../services/auth.jsx";
import { useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";

export default function Auth() {
    const [formType, setFormType] = useState("login");
    const [formData, setFormData] = useState(null);
    const { login, signup, authLoading } = authServices();

    const navigate = useNavigate();
        const authData = JSON.parse(localStorage.getItem("auth"));
    
        useEffect(() => {
            if(authData) {
                return navigate("/profile");
            }
        }, [authData])

    const handleChangeFormType = () => {
        setFormData(null);
        if (formType === "login") {
            setFormType("signup");
        } else {
            setFormType("login");
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        switch (formType) {
            case "login":
                login(formData);
                break
            case "signup":
                if (formData.password !== formData.confirmPassword) {
                    console.log("Password do not match.");
                    return
                }
                signup(formData);
                break
        }
    }

    if (authLoading) {
        return (<h1>Carregando...</h1>);
    }

    return (
        <div className={styles.authPageContainer}>
            {formType === "login" ? (
                <>
                    <h1>Entrar</h1>
                    <button onClick={handleChangeFormType}>Não possui uma conta? Clique aqui</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                        />
                        <button type="submit">Entrar <IoLogIn /></button>
                    </form>
                </>
            ) : null}

            {formType === "signup" ? (
                <>
                    <h1>Cadastrar</h1>
                    <button onClick={handleChangeFormType}>Já tem uma conta? Clique aqui</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            required
                            label="Nome completo"
                            type="fullname"
                            name="nomeCompleto"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            onChange={handleFormDataChange}
                        />
                        <button type="submit">Cadastrar <IoLogIn /></button>
                    </form>
                </>
            ) : null}
        </div>
    )
}
