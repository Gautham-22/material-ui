import React from "react";
import {
    Typography, CssBaseline, 
    AppBar, Toolbar, Container, 
    ButtonGroup, Button, Grid, 
    Card, CardMedia, CardContent, CardActions
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles";

const App = () => {
    const cards = [1,2,3,4,5,6,7,8,9];
    const classes = useStyles();  // classes will have the object returned by cb fn. inside makestyles
    return (
        <>
            <CssBaseline />     { /* makes everything to default styles */ }
            <AppBar position="relative">    { /* creates a header */ }
                <Toolbar>
                    <PhotoCamera className={classes.icon} />  { /* equivalent to class="icon" */ }
                    <Typography variant="h6">Album layout</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" color="textPrimary" align="center" gutterBottom> {/** gutterbottom adds margin-bottom */}
                            Photo layout
                        </Typography>
                        <Typography variant="h5" color="textSecondary" align="center" paragraph>
                            Hello everyone! This is a photo album just created using material-ui and i am trying to make this line as long as possible.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing="2" justify="center">
                                <Grid item>
                                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                        <Button>See my photos</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item>
                                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                                        <Button>Secondary action</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing="4">
                        {cards.map(card => (
                            <Grid item key={card} xs="12" sm="6" md="4">
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography align="center">
                                            This is media card. You can use this to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>             
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center">
                    Some content to give footer a purpose!
                </Typography>
            </footer>
        </>
    );
};

export default App;