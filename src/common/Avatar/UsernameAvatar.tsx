import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ResponsiveStyleValue } from '@mui/system';
import { DEFAULT_STYLE } from '@styles/theme';
import clsx from 'clsx';

export default function UsernameAvatar({
  className = '',
  name = '',
  url = '',
  direction = 'row',
  onClick,
}: {
  className?: string;
  name?: string;
  url: string;
  direction?: ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  onClick?: any;
}) {
  return (
    <Stack
      sx={{
        cursor: onClick && 'pointer',
        '&:hover': {
          opacity: onClick && '0.7',
        },
      }}
      direction={direction}
      alignItems="center"
      spacing={1}
      className={clsx(className)}
    >
      <p style={{ color: DEFAULT_STYLE.primaryColor, fontWeight: 500 }}>{name}</p>
      <Avatar alt={name} src={url} />
    </Stack>
  );
}
