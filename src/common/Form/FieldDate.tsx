import DateAdapter from '@mui/lab/AdapterDayjs';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box, SxProps, Theme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { OptionSelect } from '@type/field';
import Constant from '@utils/constant';
import Date from '@utils/date';
import Helper from '@utils/helper';
import clsx from 'clsx';
import { FieldInputProps, FieldMetaProps, useFormikContext } from 'formik';
import { FC } from 'react';
import { FormLabel } from './FormLabel';

export const fieldSelectStyle = makeStyles({
  label: {
    top: -7,
    '&.MuiInputLabel-shrink': {
      top: 0,
    },
  },
});

export interface FieldDateType {
  label?: string;
  placeholder?: string;
  className?: string;
  options: OptionSelect[];
  sx?: SxProps<Theme>;
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
}

const FieldDate: FC<FieldDateType> = ({ label, className, sx, field }) => {
  const { touched, errors, setFieldValue } = useFormikContext();
  const fieldTouch: boolean = Helper.objValue(touched, field?.name);
  const fieldError: string = Helper.objValue(errors, field?.name);
  const isError: boolean = fieldTouch && Boolean(fieldError);

  const handleChange = (newValue): any => {
    setFieldValue(field?.name as string, newValue);
  };

  return (
    <Box
      sx={{
        mt: 1,
        width: '100%',
        ...sx,
        '& label': {
          color: '#646A6F',
          fontSize: 16,
        },
      }}
      className={clsx(className)}
    >
      <FormLabel fieldName={field?.name} label={label} />
      {/* <TextField
        fullWidth
        id={field?.name}
        name={field?.name}
        value={field?.value}
        onChange={onChangeInput as any}
        error={showError && isError}
        size="small"
        helperText={showError && fieldTouch && fieldError}
        variant="outlined"
        onKeyPress={handleKeyPress as any}
        {...fieldProps}
      /> */}
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          // label={label}
          value={Date.renderDayjs(field?.value)}
          inputFormat={Constant.date.D_M_Y}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField size="small" {...params} error={isError} helperText={fieldTouch && fieldError} />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default FieldDate;
