import { useState, useEffect } from 'react';
import { UserInfoIcons, Description, Expertise, Degree, Language, Referee, LanguageReferee} from './user';
import { Container, Grid, Divider } from '@mantine/core';
import { Project } from './project';
import classes from './css/UserInfoIcons.module.css'
import {projects, description, head_line, degrees, technicalSkils, languages, referee} from '../assets/static_data'

export function CV() {
    

    useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
    }, []);
  return (
   <Container>
    
    <Grid>
        <Grid.Col><UserInfoIcons data={head_line} /></Grid.Col>   
        <Grid.Col><Degree data={degrees} /></Grid.Col>  
        <Grid.Col>
            <Divider label="Summary" labelPosition="center" color='#F69E6E' mb={5}/>
            <Description description={description}/>
            <Expertise skills={technicalSkils}/>
            <Divider label="Work Experience" labelPosition="center" color='#F69E6E' mt={10}/>
            </Grid.Col>


        {projects.map((value, index)=><ProjCol data={value} key={index}/>)}
        <Grid.Col>
            <LanguageReferee  lang={languages} ref={referee}/>
        </Grid.Col>
    </Grid>
    
   </Container>
  );
}

function ProjCol(props){

    return(
        <Grid.Col >
            <Project data={props.data} />
        </Grid.Col>

    );
}