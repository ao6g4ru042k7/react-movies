import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Favorite from "@material-ui/icons/Favorite";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import $api from "../../api/tmdb";

const createStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#6d0805",
        transition: "box-shadow .3s,background-color .3s",
    },
    title: {
        cursor: "pointer",
        marginRight: "8px",
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
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    signup: {
        padding: "5px 30px",
        [theme.breakpoints.up("sm")]: {
            padding: "5px 15px",
        },
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
    const isAuthenticated = useSelector((state) => state.auth.token !== null);
    const dispatch = useDispatch();
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const showUserMenu = (e) => {
        setUserAnchorEl(e.currentTarget);
    };
    const hideUserMenu = () => {
        setUserAnchorEl(null);
    };
    useEffect(() => {
        if (history.location.pathname !== "/search") {
            setSearchValue("");
        }
        if (history.location.pathname === "/login" || history.location.pathname === "/signup" || history.location.pathname === "/search") {
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

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue) {
                if (history.location.pathname === "/search") {
                    history.replace(`/search?query=${searchValue}`);
                } else {
                    history.push(`/search?query=${searchValue}`);
                }
            } else {
                if (history.location.pathname === "/search") {
                    history.goBack();
                }
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [searchValue]);

    const searchHandler = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <AppBar className={classes.appBar} style={styles} position="fixed">
            <Toolbar>
                <Typography
                    className={classes.title}
                    onClick={() => {
                        history.push("/");
                    }}
                    variant="h4"
                >
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
                        onChange={searchHandler}
                        value={searchValue}
                    />
                </div>

                {isAuthenticated ? (
                    <>
                        <IconButton color="inherit">
                            <Favorite />
                        </IconButton>
                        <div>
                            <IconButton
                                onClick={(e) => {
                                    showUserMenu(e);
                                }}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                anchorEl={userAnchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(userAnchorEl)}
                                onClose={hideUserMenu}
                            >
                                <MenuItem
                                    onClick={() => {
                                        dispatch(actions.logout());
                                    }}
                                >
                                    Login Out
                                </MenuItem>
                            </Menu>
                        </div>
                    </>
                ) : (
                    <>
                        <Box mx={1} clone>
                            <Button
                                variant="outlined"
                                color="inherit"
                                onClick={() => {
                                    history.push("/login");
                                }}
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Login
                            </Button>
                        </Box>
                        <Button
                            variant="outlined"
                            color="inherit"
                            className={classes.signup}
                            style={{ whiteSpace: "nowrap" }}
                            onClick={() => {
                                history.push("/signup");
                            }}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
