import { useState, useEffect } from 'react';
import { UserInfoIcons } from './user';
import { Container, Grid } from '@mantine/core';
import { Project } from './project';

export function CV() {
  useEffect(() => {
    document.title = 'Masoud Karimi - ML Engineer';
  }, []);

  return (
   <Container>
    <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}><UserInfoIcons/></Grid.Col>

        <Grid.Col span={{ base: 12, xs: 12 }}><Project  
        title="AI-Powered Resume Analyzer"
        name="Sara Alavi"
        place="Berlin, Germany"
        descriptionPoints={[
            {'info':'Built using GPT-4 and LangChain', 'id':0},
            {'info':'Supports multi-language parsing', 'id':1},
            {'info':'Improves candidate screening efficiency by 45%', 'id':2},
            ]}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}><Project/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}><Project/></Grid.Col>

    </Grid>
    
   </Container>
  );
}