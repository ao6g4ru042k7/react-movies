import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Favorite from "@material-ui/icons/Favorite";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const createStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#6d0805",
        transition: "box-shadow .3s,background-color .3s",
    },
    title:{
        cursor:"pointer"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        margin: theme.spacing(0, "auto"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "25ch",
            "&:focus": {
                width: "40ch",
            },
        },
    },
}));

const Navigation = (props) => {
    const [styles, setStyles] = useState({
        backgroundColor: "transparent",
        boxShadow: "none",
    });
    const classes = createStyles();
    const history = useHistory();
    const isAuthenticated = useSelector(state=>state.auth.token!==null)
    const dispatch = useDispatch()
    useEffect(() => {
        if (history.location.pathname === "/login") {
            setStyles({});
        } else {
            setStyles({
                backgroundColor: "transparent",
                boxShadow: "none",
            });
            const navStyleHandler = () => {
                if (document.documentElement.scrollTop > 50) {
                    setStyles({});
                } else {
                    setStyles({
                        backgroundColor: "transparent",
                        boxShadow: "none",
                    });
                }
            };
            window.addEventListener("scroll", navStyleHandler);
            return () => {
                window.removeEventListener("scroll", navStyleHandler);
            };
        }
    }, [history.location.pathname]);
    return (
        <AppBar className={classes.appBar} style={styles} position="fixed">
            <Toolbar>
                <Typography className={classes.title} onClick={()=>{
                    history.push("/");
                }} variant="h4" >
                    Movies
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>

                {isAuthenticated ? (
                    <>
                        <IconButton
                            // onClick={handleMenu}
                            color="inherit"
                        >
                            <Favorite />
                        </IconButton>
                        <div>
                            <IconButton
                                onClick={()=>{
                                    dispatch(actions.logout())
                                }}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </>
                ) : (
                    <Button
                        color="inherit"
                        onClick={() => {
                            history.push("/login");
                        }}
                    >
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
