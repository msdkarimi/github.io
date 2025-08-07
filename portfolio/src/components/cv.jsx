import { useState, useEffect } from 'react';
import { UserInfoIcons, Description, DegreeExpertise} from './user';
import { Container, Grid, Divider } from '@mantine/core';
import { Project } from './project';
import classes from './css/UserInfoIcons.module.css'
import {projects, description, head_line, degrees, technicalSkils} from '../assets/static_data'

export function CV() {
    

    useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
    }, []);
  return (
   <Container>
    
    <Grid>
        <Grid.Col><UserInfoIcons data={head_line} /></Grid.Col>    
        {/* <Grid.Col><DegreeExpertise degrees={degrees} skills={technicalSkils}/></Grid.Col> */}
        <Grid.Col>
            <Divider label="Summary" labelPosition="center" color='#F69E6E' mb={5}/>
            <Description description={description}/>
            <Divider label="Technical skills / Education" labelPosition="center" color='#F69E6E' mt={10}/>
            <DegreeExpertise degrees={degrees} skills={technicalSkils}/>
            <Divider label="Work Experience" labelPosition="center" color='#F69E6E' mt={10}/>
            </Grid.Col>


        {projects.map((value, index)=><Col data={value} key={index}/>)}
        
    </Grid>
    
   </Container>
  );
}

function Col(props){

    return(
        <Grid.Col >
            <Project data={props.data} />
        </Grid.Col>

    );
}