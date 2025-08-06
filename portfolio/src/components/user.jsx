import { IconAt, IconPhoneCall, IconMapPin, IconCertificate } from '@tabler/icons-react';
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
                 
        </Grid.Col>
    </Grid>
  );
}


export function Description(props){
    return(
        <Grid >
            <Grid.Col >
                <Text>
                    here is my description here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description here is my description here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description here is my description here is my description 
                    here is my description   here is my description here is my description here is my description here is my description 
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

export function Degree(props){
    return(
        <Grid >
            <Grid.Col >
               <Paper mt={10}>
                    <Stack>
                        <Group>
                            <IconCertificate size={45}/>
                            <div>
                                <Text size="xl" fw={700}>
                                    {props.degreeName}
                                </Text>
                            
                                <Text size="lg" c="gray.5" mt={-10} >
                                    {props.degreeLocation}
                                </Text>
                            </div>
                        </Group>
                    </Stack>
                </Paper>
            </Grid.Col>
        </Grid>

    );
}