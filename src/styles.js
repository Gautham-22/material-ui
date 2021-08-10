import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( (theme) => (   // calling makestyles function with a callback function that returns js object
    {
        icon : {   // icon is a class name that has following styles
            marginRight : "20px"
        },
        container : {
            backgroundColor: theme.palette.background.paper,
            padding: "25px 0"
        },
        buttons : {
            marginTop : "20px"
        },
        cardGrid : {
            padding: "20px 0"
        },
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
        },
        cardMedia: {
            paddingTop: "56.25%" // makes an aspect ratio of 16:9
        },
        cardContent: {
            flexGrow: "1"
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: "25px 0"
        }
    }
) );

export default useStyles;