import '../../assets/css/auth.css';
import background from "../../assets/images/gradient.jpg";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import './login.css'

import {
    Grid,
    Box,
    TextField,
    Button,
    Stack,
    InputAdornment,
    OutlinedInput,
    IconButton,
    FormControl,
    InputLabel
} from "@mui/material"
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';

const Login = () =>{
    const [visibilidadeToggle, setVisibilidadeToggle] = useState(false);

    const toggleVisibility = () => {
        setVisibilidadeToggle(!visibilidadeToggle)
    }

    return  <Grid container spacing={2} style={{
        height: '100vh'
    }}>
                <Grid className='leftGrid' item sx={{
                    padding:'20',
                    boxSizing:'border-box'
                }} xs={0} md={7} lg={8}>
                    <Stack spacing={2}
                    style={{
                        justifyContent:'center',
                        alignItem:'center',
                        height: '100%',
                        paddingLeft: 20,
                       
                    }}>
                    <img src={background} style={{
                        width:'100%',
                    }} alt="gradient"/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Stack spacing={2} style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        height: '100%',
                        justifyContent:'center',
                        alignItem:'center',
                        
                    }}>
                        <h1 style={{
                                textAlign:'center',
                                display:'block',
                                width:'100%',
                                color: '#fcbcd0'
                            }}>Fa??a login</h1>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" label="Usu??rio" 
                                type="username" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom:'25px'
                            }}>
                                <FormControl sx={{
                                    width:'100%'
                                }}>
                                    <InputLabel>Senha</InputLabel>
                                         <OutlinedInput fullWidth id="standard-adornment-password" 
                                label="senha"
                                type={visibilidadeToggle ? 'text' : 'password'}
                                endAdornment={<InputAdornment position="end">
                                             <IconButton
                                         aria-label="toggle password visibility"
                                         onClick={toggleVisibility}
                                        >{
                                            toggleVisibility ? <Visibility/> : <VisibilityOff/>
                                         }
                                             </IconButton>
                                </InputAdornment>}
                                 variant="standard" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <Button fullWidth variant="contained" endIcon={<LoginIcon />}className="btnLogin">
  Login
                            </Button>
                            </Grid>
                            <Link style={{
                                textAlign:'center',
                                display:'block',
                                width:'100%',
                                paddingTop:'10px'
                            }} to="/register">Criar conta</Link>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
}
export default Login;