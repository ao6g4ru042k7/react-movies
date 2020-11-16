import { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
                My Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "calc(100vh - 64px)",
        marginTop: "64px",
        [theme.breakpoints.down("xs")]: {
            height: "calc(100vh - 56px)",
            marginTop: "56px",
        },
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4, 0, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(6, 4, 0, 4),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const history = useHistory()
    const [controls, setControls] = useState({
        email: {
            value: "",
            error: false,
            errorMes: "Incorrect entry",
            valid: false,
        },
        password: {
            value: "",
            error: false,
            errorMes: "6 characters minimum",
            valid: false,
        },
    });
    const isAuthenticated = useSelector((state) => state.auth.token !== null);
    const authRedirectPath = useSelector((state) => state.auth.authRedirectPath);
 
    useEffect(() => {
        if (isAuthenticated) {
            history.push(authRedirectPath)
        }else{
            dispatch(actions.logout());
        }
    }, [isAuthenticated]);

    const emailHandler = (e) => {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let valid = true;
        valid = pattern.test(e.target.value) && valid;
        setControls({
            ...controls,
            email: {
                ...controls.email,
                value: e.target.value,
                error: Boolean(e.target.value) && !valid,
                valid,
            },
        });
    };
    const passwordHandler = (e) => {
        let valid = e.target.value.length > 5;
        setControls({
            ...controls,
            password: {
                ...controls.password,
                value: e.target.value,
                error: Boolean(e.target.value) && !valid,
                valid,
            },
        });
    };
    const LoginHandler = (e) => {
        e.preventDefault();
        if (controls.email.valid && controls.password.valid) {
            dispatch(actions.auth(controls.email.value, controls.password.value, false));
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField value={controls.email.value} error={controls.email.error} helperText={controls.email.error && controls.email.errorMes} onChange={emailHandler} variant="outlined" margin="normal" required fullWidth label="Email Address" name="email" autoComplete="email" autoFocus />
                        <TextField value={controls.password.value} error={controls.password.error} helperText={controls.password.error && controls.password.errorMes} onChange={passwordHandler} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" />
                        <Button onClick={LoginHandler} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Sign In
                        </Button>
                        <Typography variant="body2" color="secondary">
                            {error}
                        </Typography>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default Login;
