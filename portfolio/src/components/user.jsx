import { IconAt, IconPhoneCall, IconMapPin } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
// import classes from './UserInfoIcons.module.css';
import classes from './css/UserInfoIcons.module.css'

export function UserInfoIcons() {
  return (
    <div>
      <Group wrap="nowrap" mt={10}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={150}
          radius="md"
        />
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
    </div>
  );
}