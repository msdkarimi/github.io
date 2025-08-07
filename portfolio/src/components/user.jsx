import { IconAt, IconPhoneCall, IconMapPin, IconMailFilled, IconCertificate } from '@tabler/icons-react';
import { Avatar, Group, Text, Grid, Skeleton, Paper, Stack, List, Divider } from '@mantine/core';
import classes from './css/UserInfoIcons.module.css'
import pic from '../assets/pic.jpg';
import React from 'react';

export function UserInfoIcons(props) {
    const child = <Skeleton radius="md" animate={true} />;
  return (
    <Grid mt={10}>
        <Grid.Col span={{ base: 12, sm: 3, md: 2 }}>  
            <Group>
                <Avatar
                src={pic}
                size={150}
                radius="lg"
                />
            </Group>
        </Grid.Col>
        <Grid.Col span={{base: 12, sm: 9, md: 10  }} mt={20}>
            <Group>
                <div>
                <Text fz="xl" fw={700} className={`${classes.name}`}  c='white' tt='uppercase'>
                    {props.data.fullName}
                </Text>
                <Text fz="lg" tt="uppercase" fw={700} c='white'   >
                    {props.data.title}
                </Text>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconAt stroke={1.5} size={25}/>
                    <Text fz="lg" c="white" >
                    {props.data.email}
                    </Text>
                </Group>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconMapPin stroke={1.5} size={25}  />
                    <Text fz="lg" c="white" className={classes.shadow}>{props.data.location}</Text>
                </Group>
                </div>
            </Group>
        </Grid.Col>
    </Grid>
  );
}


export function Description(props){
    return(
        <Grid >
            <Grid.Col >
                {
                    props.description.map((desc, index)=>
                        <SubDescription desc={desc} key={index} id={index} />
                    )
                }
            </Grid.Col>
        </Grid>

    );
}
function SubDescription(props){
    let spacing = 0
    if (props.id){
        spacing = 15
    }
    
    return(
        <Text mt={spacing} style={{ textAlign: 'justify' }}>
            {props.desc}
        </Text>
    );
}

export function Expertise(props){
    const leftColumn = props.skills.filter((_, i) => i % 3 === 0);
    const midColumn = props.skills.filter((_, i) => i % 3 === 1);
    const rightColumn = props.skills.filter((_, i) => i % 3 === 2);
    return(
        <>
            <Divider my="lg" label="Technical Skills" labelPosition="center" color='#F69E6E' mt={10} />
            <Grid>
                <Grid.Col  span={4} >
                    <SubExpertise data={leftColumn} />
                </Grid.Col>
                <Grid.Col  span={4} >
                    <SubExpertise data={midColumn} />
                </Grid.Col>
                <Grid.Col  span={4}>
                    <SubExpertise data={rightColumn} />
                </Grid.Col>
                {/* <Grid.Col span={{base: 12, sm: 6, md: 4}} >
                    <Degree data={props.degrees} lang={props.lang} ref={props.ref}/>  
                </Grid.Col> */}
            </Grid>
        </>
    );
}

function SubExpertise(props){
    return(
        
        <Paper>
            {/* <Text size="xl" fw={500}>:</Text> */}
            <List listStyleType="square" className={classes.the_child}>

            {props.data.map((skill, index)=>(
                        <List.Item key={index} >
                            <Text fw={700}>
                                <strong>{skill.title}</strong>
                            </Text>
                            <Stack>
                                <List listStyleType="circle" >
                                    {skill.sub.map((skill, index)=>(
                                        <List.Item key={index} mt={5}>
                                            <Text size='md' fw={100} c='white'>
                                                {skill}
                                            </Text>
                                        </List.Item>
                                    ))}
                                </List> 
                            </Stack>
                        </List.Item>
                    ))}
            </List>
        </Paper>

    );
}

export function Degree(props){
    return(
        <Paper mt={10}>
            <Divider label="Education" labelPosition="center" color='#F69E6E'></Divider>
            <List listStyleType="None">
                {props.data.map((degree, index)=>(
                    <React.Fragment key={index}>
                        {index !== 0 && <Divider my="sm" variant="dashed" />}
                        <List.Item>
                            <Group>
                            <IconCertificate size={40}/>
                                <Stack >
                                    
                                    <Text size="xl" fw={500}>
                                        {degree.degreeName}
                                    </Text>
                                    <Text size="lg" c="gray.5" mt={-15} >
                                        {degree.degreeLocation}
                                    </Text>
                                </Stack>
                            </Group>
                        </List.Item>
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}

export function LanguageReferee(props){
    return(
        <Grid>
            <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
                <Language lang={props.lang}/>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
                <Referee ref={props.ref}/>
            </Grid.Col>
        </Grid>
    );
}

export function Language(props){
    return (
        <List listStyleType="square">
            <Divider label="Language" labelPosition="center" color='#F69E6E' mt={10}></Divider>
                {props.lang.map((lang, index)=>(
                        <React.Fragment key={index}>
                            {index !== 0 && <Divider my="sm" variant="dashed" />}
                            <List.Item>
                                    <Group >
                                        <Text size="xl" fw={500}>
                                            {lang.language} 
                                        </Text>
                                        
                                        <Text size="lg" c="gray.5">
                                            ({lang.level})
                                        </Text>
                                    </Group>  
                            </List.Item>
                        </React.Fragment>
                ))}
        </List>
    );
}

export function Referee(props){
    return(
        <List listStyleType="square">
        <Divider label="Referee" labelPosition="center" color='#F69E6E' mt={10}></Divider>
            {props.ref.map((ref, index)=>(
                    <React.Fragment key={index}>
                        {index !== 0 && <Divider my="sm" variant="dashed" />}
                        <List.Item>
                            <Stack>
                                    <Text size="xl" fw={500}>
                                        {ref.name} 
                                    </Text>
                                    
                                    <Text c="gray.5">
                                        {ref.title}, at {ref.at}
                                    </Text>
                                <Group><IconMailFilled/><Text>{ref.email}</Text></Group>
                                
                            </Stack>  
                        </List.Item>
                    </React.Fragment>
                ))}
        </List>

    );
}