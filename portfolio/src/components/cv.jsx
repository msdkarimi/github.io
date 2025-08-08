import React, { useState, useEffect } from 'react';
import { UserInfoIcons, Description, Expertise, Degree, LanguageReferee, MyDivider} from './user';
import { Container, Grid, Divider } from '@mantine/core';
import { Project, ProjCol } from './project';
import classes from './css/UserInfoIcons.module.css'
import {workExperiences, projects, description, head_line, degrees, technicalSkils, languages, referee} from '../assets/static_data'

export const dividerColor = '#af4600ab'
export const block_margin = 10

export function CV() {
    
    useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
    }, []);

  return (
   <Container size='lg'>
    <Grid>
        <Grid.Col ml={block_margin} mr={block_margin}><UserInfoIcons data={head_line} /></Grid.Col>   
        <Grid.Col ><Degree data={degrees} /></Grid.Col>  
        <Grid.Col>
            <MyDivider dividerName="Summary" color={dividerColor}/>
            <Description description={description}/>
            <Expertise skills={technicalSkils}/>
            
            </Grid.Col>

        {workExperiences.map((value, index)=><ProjCol data={value} key={index} index={index} color={dividerColor} dividerName={'Work Experience'}/>)}        
        {projects.map((value, index)=><ProjCol data={value} key={index} index={index} color={dividerColor} dividerName={'Projects'} />)}
        <Grid.Col>
            <LanguageReferee  lang={languages} ref={referee}/>
        </Grid.Col>
    </Grid>
   </Container>
  );
}