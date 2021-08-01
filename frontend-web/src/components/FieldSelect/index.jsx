//#region Imports

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import React, { useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import extractErrors from 'utils/functions/extractErrors';
import useStyles from './styles';

//#endregion

const FieldSelect = ({
    name,
    label,
    icon,
    options = [],
    isRequired = true,
    isLoading = false,
    isDisabled = false,
    variant = 'outlined',
    ...rest
}) => {
    const styles = useStyles();
    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({
        name,
        control,
        defaultValue: ''
    });

    const error = useMemo(() => {
        const value = extractErrors(name, errors);
        return value && value.message;
    }, [name, errors]);

    return (
        <div className={styles.container}>
            <InputLabel className={styles.label} htmlFor={field.name}>
                {label}
            </InputLabel>

            <Select
                displayEmpty
                id={field.name}
                variant={variant}
                value={field.value}
                className={styles.input}
                disabled={isDisabled || isLoading}
                onChange={(value) => field.onChange(value)}
                {...rest}
            >
                <MenuItem value=''>
                    <em>{label}</em>
                </MenuItem>
                {options.map(({ text, value }, index) => (
                    <MenuItem key={index} value={value}>
                        {text}
                    </MenuItem>
                ))}
            </Select>

            <Typography className={styles.error}>{error}</Typography>
        </div>
    );
};

export default FieldSelect;
