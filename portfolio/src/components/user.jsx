import { IconAt, IconPhoneCall, IconMapPin, IconMailFilled, IconCertificate } from '@tabler/icons-react';
import { Avatar, Group, Text, Grid, Skeleton, Paper, Stack, List, Divider, Flex, Title, Card } from '@mantine/core';
import classes from './css/UserInfoIcons.module.css'
import pic from '../assets/pic.jpg';
import React from 'react';
import { dividerColor, block_margin, margin_below_divider, margin_top_divider } from './cv'

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
                <Title order={2} fw={100} className={classes.name} tt='uppercase'>
                    {props.data.fullName}
                </Title>
                <Title order={4} fw={100} tt="uppercase" >
                    {props.data.title}
                </Title>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconAt stroke={1.} size={25}/>
                    <Text fz="lg" fw={200} >
                    {props.data.email}
                    </Text>
                </Group>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconMapPin stroke={1.} size={25}  />
                    <Text fw={200} fz="lg" className={classes.shadow}>{props.data.location}</Text>
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
        <Text mt={spacing} size='lg' fw={250} style={{ textAlign: 'justify' }}>
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
                <Grid.Col  span={4} sx={{ minWidth: 0 }} >
                    <SubExpertise data={leftColumn}   />
                </Grid.Col>
                <Grid.Col  span={4} sx={{ minWidth: 0 }} >
                    <SubExpertise data={midColumn} />
                </Grid.Col>
                <Grid.Col  span={4} sx={{ minWidth: 0 }} >
                    <SubExpertise data={rightColumn}  />
                </Grid.Col>
            </Grid>
        </>
    );
}

function SubExpertise(props) {
    return (
        
        <Flex style={{ width: '100%' }} justify="flex-start" align="center">
            <List listStyleType="square">
                {props.data.map((skill, index) => (
                    <List.Item key={index}>
                        <Title
                            order={4}
                            fw={600}
                            sx={{ whiteSpace: 'normal', minWidth: 0 }}
                        >
                            {skill.title}
                        </Title>
                        <Stack>
                            <List listStyleType="circle">
                                {skill.sub.map((subSkill, subIndex) => (
                                    <List.Item key={subIndex} mt={5} sx={{ display: 'block', width: '100%',  minWidth: 0, }} >
                                        <Flex align="center"   justify="center">
                                            <Text size='md' fw={300} sx={{
                                                                            wordBreak: 'break-word',         // prefer breaking at word boundaries
                                                                            overflowWrap: 'break-word',  // break long tokens if absolutely necessary
                                                                            hyphens: 'auto',             // allow hyphenation where supported
                                                                        }}>
                                                {subSkill}
                                            </Text>
                                        </Flex>
                                    </List.Item>
                                ))}
                            </List>
                        </Stack>
                    </List.Item>
                ))}
            </List>
        </Flex>
    );
}

export function Degree(props){
    return(
        <Paper>
            <MyDivider dividerName="Education" color={dividerColor}/>
            <Stack>
                {props.data.map((degree, index) => (
                    <React.Fragment key={index}>
                    {index !== 0 && <Divider variant="dashed"/>}
                        <Group wrap="nowrap" w="100%">
                            <IconCertificate stroke={0.75} size={40} />
                            <Stack gap={0} style={{ flex: 1 }}>
                                <Flex justify="space-between" w="100%">
                                    <Title order={4} fw={300}>
                                        {degree.degreeName}
                                    </Title>
                                    <Text size="lg" fw={50}>
                                        {degree.date}
                                    </Text>
                                </Flex>
                                <Title order={6} fw={300}>
                                {degree.degreeLocation}
                                </Title>
                            </Stack>
                        </Group>
                    </React.Fragment>
                ))}
            </Stack>
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
      <Flex align="center" w="100%" gap="sm" mt={margin_top_divider} mb={margin_below_divider}>
        <Divider color={props.color} w="100%" size={1.0}/>
        <Text size="lg" fw={350} style={{ whiteSpace: 'nowrap' }}>
          {props.dividerName}
        </Text>
        <Divider color={props.color} w="100%" size={1.0} />
      </Flex>
    );
  }