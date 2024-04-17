import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    const textArray = `As the developer of the website, Yehonatan Ben Zaken brings a unique blend of skills and expertise to the table. A second-year software engineering student with a certification in software testing, Yehonatan is committed to crafting robust, user-friendly solutions. With a passion for innovation and a keen eye for detail, Yehonatan strives to create seamless digital experiences that meet the needs of users effectively.`.split(/(?<=\.\s)/);
    const linkedInLink = `https://www.linkedin.com/in/yehonatan-ben-zaken-bb89591b9/`;
    const gitHubLink = `https://github.com/Ybz1234`;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image="meAtMonzaGP2023.jpeg" title="Developer"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Yehonatan Ben Zaken</Typography>
                {textArray.map((line, index) => (<Typography key={index} variant="body2" color="text.secondary" component="p">{line}</Typography>))}
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <IconButton href={linkedInLink} color="primary" aria-label="LinkedIn"><LinkedInIcon/></IconButton>
                <IconButton href={gitHubLink} color="inherit" aria-label="GitHub"><GitHubIcon/></IconButton>
            </CardActions>
        </Card>
    );
}