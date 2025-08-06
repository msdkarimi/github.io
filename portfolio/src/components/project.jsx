import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import { Card, Title, Text, List, ThemeIcon, Badge, Stack, Group } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import classes from './css/UserInfoIcons.module.css'

export function Project(props) {
  const child = <Skeleton height={140} radius="md" animate={true} />;

  return (
    <Card className={classes.box_shadow} padding="lg" radius="md">
        <Grid>  
            <Grid.Col span={{ base: 12, xs: 6 }}><ProjectCard title={props.data.title} location={props.data.location} company={props.data.company}  stack={props.data.stack} achievements={props.data.achievements} /></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        </Grid>
    </Card>
  );
}






export function ProjectCard(props) {
    // console.log(props.descriptionPoints)
  return (
    
      <Stack spacing="xs" >
        <Title order={3} className={classes.shadow} >{props.title}</Title>
        
        <Text size="sm" c="dimmed" >
          at <strong>{props.company}, {props.location}</strong>
        </Text>

        

        <List
          spacing="xs"
          size="sm"
          mt="md"
          icon={
            <ThemeIcon color="teal" size={18} radius="xl">
              <IconCircleCheck size={14} />
            </ThemeIcon>
          }
        >
          {props.achievements.map((value, index) => (
            <List.Item key={index} >{value}</List.Item>
          ))}
        </List>

        <Group>
            {
                props.stack.map((value, index)=>(<Badge key={index} variant="light" color="blue" radius="sm" w="fit-content">{value}</Badge>))
            }
        </Group>
        
      </Stack>
  );
}
