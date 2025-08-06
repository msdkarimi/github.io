import { useState, useEffect } from 'react';
import { UserInfoIcons, Description, Degree} from './user';
import { Container, Grid, Divider } from '@mantine/core';
import { Project } from './project';
import classes from './css/UserInfoIcons.module.css'

export function CV() {
    
    // degree
    const degreeName = 'M.Sc. in Computer Engineering - AI & Data Analytics'
    const degreeLocation = 'at Politecnico di Torino, Italy'



    // info
    const fullName = 'Masoud Karimi'
    const title = 'Applied AI Engineer (Computer Vision & Agentic Systems)'
    const email = 'itsmasoudkarimi@gmail.com' 
    const location = 'Turin, Italy'


    // description
    const description = [
        {'id':0, 'info':"An Applied AI Researcher with extensive experience developing novel solutions in generative AI and computer vision. Key accomplishments include engineering a pipeline to create semantic segmentation datasets by extracting masks from the internal attention of generative models and using Vision-Language Models (VLMs) with prompt engineering to synthetically caption unlabeled images. Further expertise includes developing specialized classifiers for Out-of-Distribution (OOD) detection via supervised contrastive learning, fine-tuning foundational models using parameter-efficient methods, and tackling extreme data imbalance with curriculum learning and custom batch sampling."},
        {'id':1, 'info':"In addition to core modeling, experienced in building and deploying end-to-end AI systems. Designed and implemented a series of local, privacy-focused ReAct agents with tool-calling capabilities, stateful long-term memory, and enhanced performance through Chain of Thought (CoT) and few-shot prompting. Possesses full-stack development skills, having built both the backend agent framework using LangGraph and LangChain and the associated front-end interface."},

    ]



    


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
        <Grid.Col><Divider label="Summary" labelPosition="center" color='#F69E6E' mb={5}/><Description description={description}/></Grid.Col>

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