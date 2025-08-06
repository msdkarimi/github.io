import { Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';

const PRIMARY_COL_HEIGHT = '600px';

export function Project() {
  const child = <Skeleton height={140} radius="md" animate={true} />;

  return (
    <Grid>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
    </Grid>
  );
}


function ProjectDetail(){
    return(
        <>
        </>
    );
}