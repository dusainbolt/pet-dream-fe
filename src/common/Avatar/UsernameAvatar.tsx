import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ResponsiveStyleValue } from '@mui/system';
import { DEFAULT_STYLE } from '@styles/theme';
import clsx from 'clsx';

export default function UsernameAvatar({
  className = '',
  name = '',
  src = '',
  direction = 'row',
  avatarClick,
}: {
  className?: string;
  name?: string;
  src: string;
  direction?: ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  avatarClick?: any;
}) {
  return (
    <Stack
      sx={
        {
          // cursor: avatarClick && 'pointer',
          // '&:hover': {
          //   opacity: avatarClick && '0.7',
          // },
        }
      }
      direction={direction}
      alignItems="center"
      spacing={1}
      className={clsx(className)}
      // avatarClick={avatarClick}
    >
      <p style={{ color: DEFAULT_STYLE.primaryColor, fontWeight: 500 }}>{name}</p>
      <Avatar onClick={avatarClick} alt={name} src={src} />
    </Stack>
  );
}
