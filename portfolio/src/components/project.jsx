import { Container, Grid, SimpleGrid, Skeleton, Tooltip } from '@mantine/core';
import { Card, Title, Text, List, ThemeIcon, Badge, Stack, Group, Button, Flex, Divider } from '@mantine/core';
import { IconRosetteDiscountCheckFilled, IconCode, IconBrandGithub } from '@tabler/icons-react';
import { MyDivider }  from './user';
import classes from './css/UserInfoIcons.module.css'
import React from 'react'
import { block_margin } from './cv'

export function Project(props) {
  return (
    <Card className={classes.box_shadow} padding="lg" radius="md" ml={block_margin} mr={block_margin}>
        <Grid>  
            <Grid.Col>
                <ProjectCard data={props.data}/>
            </Grid.Col>
        </Grid>
    </Card>
  );
}


export function ProjectCard(props) {
    const handleClick = (the_link) => {
        window.open(the_link, '_blank');
    };

  return (
    
      <Stack spacing="xs" >
        <Flex justify="space-between" w="100%">
          <Title order={2} fw={250} color='white'>{props.data.title}</Title>
          <Text size="lg" fw={50}>{props.data.date}</Text>
        </Flex>
        {props.data.company && props.data.location?
          <Text size='md' fw={100} c='white' mt={-15} >
           at {props.data.company}, {props.data.location}
          </Text>:<></>
        }
        <Group>
          {props.data.github.map((value, index)=>(
            <Tooltip key={index} arrowOffset={5} withArrow arrowRadius={1} color="red" position="left-start" offset={5} label='Link to source code'>
            <Button key={index} mt={-10} size="xs" variant="default" leftSection={<IconBrandGithub stroke={1.5} />} onClick={()=>handleClick(value.link)}>{value.name}</Button>
            </Tooltip>
          ))} 
        </Group>
        <Text fw={700}>Responsibilities and Achievements:</Text>

        <List
          spacing="md"
          size="md"
          icon={<IconRosetteDiscountCheckFilled color='white' stroke={0.5} size={30}/>}
        >
          {props.data.achievements.map((value, index) => (
            <List.Item key={index} style={{ textAlign: 'justify' }} ><Text size='md' fw={200} c='white'>{value}</Text></List.Item>
          ))}
        </List>
        <Text>Technology Stack:</Text>
        <Group gap='xs'>
            {
                props.data.stack.map((value, index)=>(<Badge   size='xl' fw={300} styles={{ root: { textTransform: 'none',  color: 'white', } }} key={index} variant="light" color="teal" radius="md" >{value}</Badge>))
            }
        </Group>
        
      </Stack>
  );
}


export function ProjCol(props){

  return(
      <React.Fragment key={props.index}>
        <Grid.Col>
        {props.index == 0 && <MyDivider color={props.color} dividerName={props.dividerName}/>}
            <Project data={props.data}/>
        </Grid.Col>
      </React.Fragment>

  );
}
