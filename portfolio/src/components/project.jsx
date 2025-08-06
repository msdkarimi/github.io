import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import { Card, Title, Text, List, ThemeIcon, Badge, Stack } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function Project(props) {
  const child = <Skeleton height={140} radius="md" animate={true} />;

  return (
    <Grid>
        <Grid.Col span={{ base: 12, xs: 6 }}><ProjectCard title={props.title} name={props.name} place={props.place}  descriptionPoints={props.descriptionPoints} /></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
    </Grid>
  );
}






export function ProjectCard(props) {
    console.log(props.descriptionPoints)
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Stack spacing="xs">
        <Title order={3}>{props.title}</Title>
        
        <Text size="sm" c="dimmed">
          by <strong>{props.name}</strong>
        </Text>

        <Badge variant="light" color="blue" radius="sm" w="fit-content">
          {props.place}
        </Badge>

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
          {(props.descriptionPoints|| []).map((point) => (
            <List.Item key={point.id} >{point.info}</List.Item>
          ))}
        </List>
      </Stack>
    </Card>
  );
}
