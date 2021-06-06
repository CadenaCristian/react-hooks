import React, { useState, useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    return (
        <div>
            {characters.map(character => (
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            {character.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </div>
    );
}

export default Characters;