import { IconAt, IconPhoneCall, IconMapPin, IconMailFilled, IconCertificate } from '@tabler/icons-react';
import { Avatar, Group, Text, Grid, Skeleton, Paper, Stack, List, Divider, Flex, Title } from '@mantine/core';
import classes from './css/UserInfoIcons.module.css'
import pic from '../assets/pic.jpg';
import React from 'react';
import { dividerColor, block_margin } from './cv'

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
        <Grid.Col span={{base: 12, sm: 9, md: 10  }} mt={5}>
            <Group>
                <div>
                <Title order={2} fw={100} className={classes.name}  c='white' tt='uppercase'>
                    {props.data.fullName}
                </Title>
                <Title order={4} fw={100} tt="uppercase"  c='white'>
                    {props.data.title}
                </Title>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconAt stroke={1.} size={25}/>
                    <Text fz="lg" fw={200} c="white" >
                    {props.data.email}
                    </Text>
                </Group>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconMapPin stroke={1.} size={25}  />
                    <Text fw={200} fz="lg" c="white" className={classes.shadow}>{props.data.location}</Text>
                </Group>
                </div>
            </Group>
        </Grid.Col>
    </Grid>
  );
}


export function Description(props){
    return(
        <Grid pl={block_margin} pr={block_margin}>
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
        <Text mt={spacing} size='lg' fw={250} c='white' style={{ textAlign: 'justify' }}>
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
            <MyDivider dividerName="Technical Skills" color={dividerColor}/>
            <Grid ml={block_margin} mr={block_margin}>
                <Grid.Col  span={4}  >
                    <SubExpertise data={leftColumn}   />
                </Grid.Col>
                <Grid.Col  span={4} >
                    <SubExpertise data={midColumn} />
                </Grid.Col>
                <Grid.Col  span={4}>
                    <SubExpertise data={rightColumn}  />
                </Grid.Col>
            </Grid>
        </>
    );
}

function SubExpertise(props){
    return(
        
        <Paper style={{ maxWidth: '100%' }}>
            <List listStyleType="square" className={classes.the_child}>
            {props.data.map((skill, index)=>(
                        <List.Item key={index} >
                            <Title order={4} fw={600}>
                                {skill.title}
                            </Title>
                            <Stack>
                                <List listStyleType="circle" >
                                    {skill.sub.map((skill, index)=>(
                                        <List.Item key={index} mt={5}>
                                            <Text size='md' fw={300} c='white'>
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
        <Paper mt={10} >
            <MyDivider dividerName="Education" color={dividerColor} mb={10}/>
            <List listStyleType="None" pl={15} pr={15}>
                {props.data.map((degree, index)=>(
                    <React.Fragment key={index}>
                        {index !== 0 && <Divider my="sm" variant="dashed" />}
                        <List.Item>
                            <Group>
                            <IconCertificate stroke={.75} color='white' size={40}/>
                                <Stack >
                                    <Title order={4} fw={200} c='white'>
                                        {degree.degreeName}
                                    </Title>
                                    <Title order={6} fw={100} c='white' mt={-15} >
                                        {degree.degreeLocation}
                                    </Title>
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
        <Grid >
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
        <List listStyleType="square" >
            <MyDivider dividerName="Language" color={dividerColor}/>
                {props.lang.map((lang, index)=>(
                        <React.Fragment key={index}>
                            {index !== 0 && <Divider my="sm" variant="dashed" />}
                            <List.Item ml={block_margin} mr={block_margin}>
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
        <MyDivider dividerName="Reference" color={dividerColor}/>
            {props.ref.map((ref, index)=>(
                    <React.Fragment key={index}>
                        {index !== 0 && <Divider my="sm" variant="dashed" />}
                        <List.Item ml={block_margin} mr={block_margin}>
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


export function MyDivider(props) {
    return (
      <Flex align="center" w="100%" gap="sm" mt={10} mb={10}>
        <Divider color={props.color} w="100%" />
        <Text size="lg" fw={400} style={{ whiteSpace: 'nowrap' }}>
          {props.dividerName}
        </Text>
        <Divider color={props.color} w="100%" />
      </Flex>
    );
  }