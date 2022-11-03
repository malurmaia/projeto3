import background from "../../assets/images/gradient.jpg";
import LoginIcon from '@mui/icons-material/Login';
import {
    Grid,
    Box,
    TextField,
    Button,
    Stack
} from "@mui/material"
import { width } from "@mui/system";

const Login = () =>{
    return  <Grid container spacing={2} style={{
        height: '100vh'
    }}>
                <Grid item sx={{
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
                    }} alt="image"/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Stack spacing={2} style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        height: '100%',
                        justifyContent:'center',
                        alignItem:'center'
                    }}>
                        <h1>Faça login</h1>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField id="standard-basic" label="Username" 
                                type="username" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="standard-basic" label="Password" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                            <Button variant="contained" endIcon={<LoginIcon />}>
  Login
                            </Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
}
export default Login;