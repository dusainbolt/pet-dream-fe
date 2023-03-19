import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  // const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
  const backgroundColor = theme.palette.primary.light;
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function CustomizedBreadcrumbs() {
  return (
    <div role="presentation" style={{ height: 'max-content' }}>
      <Breadcrumbs
        // sx={{
        //   '& .MuiBreadcrumbs-separator': {
        //     color: 'white',
        //   },
        // }}
        aria-label="breadcrumb"
      >
        <StyledBreadcrumb component="a" href="#" label="Home" icon={<HomeIcon fontSize="small" />} />
        <StyledBreadcrumb component="a" href="#" label="Catalog" />
        {/* <StyledBreadcrumb label="Accessories" deleteIcon={<ExpandMoreIcon />} onDelete={null} /> */}
      </Breadcrumbs>
    </div>
  );
}
