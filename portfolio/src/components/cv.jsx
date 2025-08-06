import { useState, useEffect } from 'react';
import { UserInfoIcons, Description, Degree} from './user';
import { Container, Grid, Divider } from '@mantine/core';
import { Project } from './project';

export function CV() {
    
    // degree
    const degreeName = 'M.Sc. in Computer Engineering - AI & Data Analytics'
    const degreeLocation = 'at Politecnico di Torino, Italy'



    // info
    const fullName = 'Masoud Karimi'
    const title = 'AI Engineer'
    const email = 'itsmasoudkarimi@gmail.com' 
    const location = 'Turin, Italy'




    


  const data = [
            {'info':'Built using GPT-4 and LangChain', 'id':0},
            {'info':'Supports multi-language parsing', 'id':1},
            {'info':'Improves candidate screening efficiency by 45%', 'id':2},
            ]

    useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
    }, []);
  return (
   <Container>
    
    <Grid>
        <Grid.Col><UserInfoIcons fullName={fullName} title={title} email={email} location={location}  /></Grid.Col>    
        <Grid.Col><Degree degreeName={degreeName} degreeLocation={degreeLocation}/></Grid.Col>
        <Grid.Col><Divider label="Summary" labelPosition="center" color='#F69E6E' mb={5}/><Description/></Grid.Col>

        <Grid.Col >
            <Divider label="Work Experience" labelPosition="center" color='#F69E6E' mb={5}/>
            <Project  
        title="AI-Powered Resume Analyzer"
        name="Sara Alavi"
        place="Berlin, Germany"
        descriptionPoints={data}/></Grid.Col>
        
        <Grid.Col ><Project  
        title="AI-Powered Resume Analyzer"
        name="Sara Alavi"
        place="Berlin, Germany"
        descriptionPoints={data}/></Grid.Col>
    </Grid>
    
   </Container>
  );
}