import { useState, useEffect } from 'react';
import { UserInfoIcons,Description } from './user';
import { Container, Grid } from '@mantine/core';
import { Project } from './project';

export function CV() {
  useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
  }, []);
  const data = [
            {'info':'Built using GPT-4 and LangChain', 'id':0},
            {'info':'Supports multi-language parsing', 'id':1},
            {'info':'Improves candidate screening efficiency by 45%', 'id':2},
            ]
  return (
   <Container>
    <Grid>
        <Grid.Col><UserInfoIcons/></Grid.Col>
        <Grid.Col><Description/></Grid.Col>

        <Grid.Col ><Project  
        title="AI-Powered Resume Analyzer"
        name="Sara Alavi"
        place="Berlin, Germany"
        descriptionPoints={data}/></Grid.Col>
        
        <Grid.Col ><Project  
        title="AI-Powered Resume Analyzer"
        name="Sara Alavi"
        place="Berlin, Germany"
        descriptionPoints={data}/></Grid.Col>

        <Grid.Col ><Project  
        title="AI-Powered Resume Analyzer"
        name="Sara Alavi"
        place="Berlin, Germany"
        descriptionPoints={data}/></Grid.Col>
        
        <Grid.Col ><Project  
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