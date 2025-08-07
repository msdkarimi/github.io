import { IconAt, IconPhoneCall, IconMapPin, IconCertificate } from '@tabler/icons-react';
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
                <Text fz="xl" fw={700} className={`${classes.name} ${classes.shadow_t}`}  c='white' tt='uppercase'>
                    {props.data.fullName}
                </Text>
                <Text fz="lg" tt="uppercase" fw={700} c='white' className={classes.shadow_t}  >
                    {props.data.title}
                </Text>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconAt stroke={1.5} size={25} className={classes.icon } />
                    <Text fz="lg" c="white" className={classes.shadow}>
                    {props.data.email}
                    </Text>
                </Group>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconMapPin stroke={1.5} size={25} className={classes.icon} />
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

export function DegreeExpertise(props){
    return(
        <Grid className={classes.shadow} >
            <Grid.Col span={{base: 12, sm: 6, md: 8}} >
                <Expertise data={props.skills}/>
            </Grid.Col>
            <Grid.Col span={{base: 12, sm: 6, md: 4}} >
                <Degree data={props.degrees}/>  
            </Grid.Col>
        </Grid>

    );
}

function Expertise(props){
    return(
        
        <Paper mt={10}>
            {/* <Text size="xl" fw={500}>:</Text> */}
            <List withPadding listStyleType="square" >

            {props.data.map((skill, index)=>(
                        <List.Item key={index} mt={15}>
                            <Text fw={600}>
                                <strong>{skill.title}</strong>
                            </Text>
                            <Stack>
                                <List listStyleType="square"  icon={<Text>-</Text>}>
                                    {skill.sub.map((skill, index)=>(
                                        <List.Item key={index}>
                                            <Text fw={500}>
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

function Degree(props){
    return(
        <Paper mt={10}>
            <List listStyleType="square">
                {props.data.map((degree, index)=>(
                    <React.Fragment key={index}>
                        {index !== 0 && <Divider my="sm" />}
                        <List.Item>
                                <Stack >
                                    {/* <IconCertificate size={30}/> */}
                                        <Text size="xl" fw={500}>
                                            {degree.degreeName}
                                        </Text>
                                        
                                        <Text size="lg" c="gray.5" mt={-15} >
                                            {degree.degreeLocation}
                                        </Text>
                                </Stack>  
                        </List.Item>
                    </React.Fragment>
                ))}
            </List> 
        </Paper>
    );
}