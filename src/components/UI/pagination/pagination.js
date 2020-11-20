import React, { useEffect } from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    ul: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        color: "white",
        "& > * + *": {
            marginLeft: theme.spacing(1),
        },
        "& li": {
            lineHeight: "30px",
        },
    },
    page: {
        width: "40px",
        height: "40px",
        color: "#e50914",
        border: "1px solid #e50914",
        padding: "0",
        "&:hover": {
            color: "white",
            backgroundColor: "#e50914",
        },
    },
    active: {
        width: "40px",
        height: "40px",
        color: "white",
        backgroundColor: "#e50914",
        "&:hover": {
            color: "white",
            backgroundColor: "#e50914",
        },
    },
    arrow: {
        width: "40px",
        height: "40px",
        border: "1px solid #e50914",
        color: "#e50914",
        "& svg": {
            fill: "#e50914",
        },
    },
    "@media (max-width:420px)": {
        arrow: {
            width: "30px",
            height: "30px",
        },
        active: {
            fontSize: "13px",
            width: "30px",
            height: "30px",
        },
        page: {
            fontSize: "13px",
            width: "30px",
            height: "30px",
        },
    },
}));

export default function UsePagination({ count, onChangePage }) {
    const classes = useStyles();
    const { items } = usePagination({
        count: count,
        onChange: onChangePage
    });
    // console.log(usePagination({
    //     count: count,
    // }))
    // useEffect(() => {
    //     // onChangePage(items.count);
    //     console.log(items.count)
    // }, [items.count, onChangePage]);
    return (
        <nav>
            <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    // console.log(item);
                    let arrow;
                    if (type === "previous") {
                        arrow = (
                            <IconButton className={classes.arrow} {...item}>
                                <NavigateBefore />
                            </IconButton>
                        );
                    } else if (type === "next") {
                        arrow = (
                            <IconButton className={classes.arrow} {...item}>
                                <NavigateNext />
                            </IconButton>
                        );
                    }

                    if (type === "start-ellipsis" || type === "end-ellipsis") {
                        children = "…";
                    } else if (type === "page") {
                        children = (
                            <IconButton
                                variant="outlined"
                                size="small"
                                color="primary"
                                className={
                                    selected ? classes.active : classes.page
                                }
                                {...item}
                            >
                                {page}
                            </IconButton>
                        );
                    } else {
                        children = arrow;
                    }

                    return <li key={index}>{children}</li>;
                })}
            </ul>
        </nav>
    );
}
