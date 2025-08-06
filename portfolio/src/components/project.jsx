import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import { Card, Title, Text, List, ThemeIcon, Badge, Stack, Group, Button } from '@mantine/core';
import { IconRosetteDiscountCheck, IconCode } from '@tabler/icons-react';
import classes from './css/UserInfoIcons.module.css'

export function Project(props) {
  const child = <Skeleton height={140} radius="md" animate={true} />;

  return (
    <Card className={classes.box_shadow} padding="lg" radius="md">
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
        <Title order={3} className={classes.shadow} >{props.data.title}</Title>
        
        <Text size="sm" c="dimmed" mt={-15} >
          at <strong>{props.data.company}, {props.data.location}</strong>
        </Text>
        {props.data.github ? <Button mt={-10} size="xs" w={100} variant="default" leftSection={<IconCode size={18}/>} onClick={()=>handleClick(props.data.github)}>github</Button>:<></>}

        <Text>Responsibilities and Achievements:</Text>

        <List
          spacing="md"
          size="md"
          
          icon={
            <ThemeIcon color="teal" size={20} >
              <IconRosetteDiscountCheck  />
            </ThemeIcon>
          }

          
        >
          {props.data.achievements.map((value, index) => (
            <List.Item key={index} >{value}</List.Item>
          ))}
        </List>

        <Group>
            {
                props.data.stack.map((value, index)=>(<Badge key={index} variant="light" color="blue" radius="sm" >{value}</Badge>))
            }
        </Group>
        
      </Stack>
  );
}
