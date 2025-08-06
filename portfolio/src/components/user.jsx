import { IconAt, IconPhoneCall, IconMapPin } from '@tabler/icons-react';
import { Avatar, Group, Text, Grid, Skeleton, Paper, Stack } from '@mantine/core';
// import classes from './UserInfoIcons.module.css';
import classes from './css/UserInfoIcons.module.css'

export function UserInfoIcons() {
    const child = <Skeleton radius="md" animate={true} />;
  return (
    <Grid mt={10}>
        <Grid.Col span={{ base: 12, xs: 3 }}>
            <Group>
                <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                size={200}
                radius="md"
                />
            </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }} mt={20}>
            <Group>
                <div>
                <Text fz="lg" tt="uppercase" fw={700} c='white'  >
                    AI Engineer
                </Text>

                <Text fz="xl" fw={500} className={classes.name} c='white'>
                    Masoud Karimi
                </Text>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconAt stroke={1.5} size={25} className={classes.icon} />
                    <Text fz="lg" c="white">
                    itsmasoudkarimi@gmail.com
                    </Text>
                </Group>
                <Group wrap="nowrap" gap={10} mt={3}>
                    <IconMapPin stroke={1.5} size={25} className={classes.icon} />
                    <Text fz="lg" c="white">Turin, Italy</Text>
                </Group>
                </div>
            </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
                 <Paper
                    radius="md"
                    p="xl"
                >
                    <Stack align="center" spacing="sm">
                    <Text size="lg" fw={600} c="gray.7">
                        University Degree
                    </Text>
                    <Text size="xl" fw={700}>
                        Bachelor of Science in Computer Science
                    </Text>
                    <Text size="md" c="gray.6">
                        University of Example
                    </Text>
                    </Stack>
                </Paper>
        </Grid.Col>
    </Grid>
  );
}


export function Description(props){
    return(
        <Grid mt={10}>
            <Grid.Col >
                <Text>
                    here is my description here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description here is my description here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description 
                </Text>
            </Grid.Col>
        </Grid>

    );
}