import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 250,
},
    media: {
        // ⚠️ object-fit is not supported by IE11.
        objectFit: 'cover',
    },
};

function ImgMediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    height="140"
                    src="https://raw.githubusercontent.com/yashk2810/yashk2810.github.io/master/images/mnist.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Mnist Classifier
                    </Typography>
                    <Typography component="caption">
                        Docker, Python, Go and React
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);