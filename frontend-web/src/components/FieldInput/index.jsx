//#region Imports

import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useMemo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import extractErrors from 'utils/functions/extractErrors';
import InputEndAdorment from './InputEndAdorment';
import useStyles from './styles';

//#endregion

const FieldInput = ({
    name,
    mask,
    label,
    icon,
    placeholder,
    type = 'text',
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

    const isPassword = useMemo(() => type === 'password', [type]);

    const [visible, isVisible] = useState(!isPassword);
    const passwordType = useMemo(() => (visible ? 'text' : 'password'), [visible]);

    const error = useMemo(() => {
        const value = extractErrors(name, errors);
        return value && value.message;
    }, [name, errors]);

    const handleChange = useCallback(
        (event) => {
            const value = mask ? mask(event.target.value) : event.target.value;
            field.onChange(value);
        },
        [mask, field]
    );

    return (
        <div className={styles.container}>
            <InputLabel className={styles.label} htmlFor={field.name}>
                {label}
            </InputLabel>

            <OutlinedInput
                error={error}
                id={field.name}
                variant={variant}
                value={field.value}
                onChange={handleChange}
                className={styles.input}
                placeholder={placeholder || label}
                disabled={isDisabled || isLoading}
                type={isPassword ? passwordType : type}
                endAdornment={
                    (isPassword || isLoading) && (
                        <InputEndAdorment
                            visible={visible}
                            isVisible={isVisible}
                            isLoading={isLoading}
                            isPassword={isPassword}
                        />
                    )
                }
                {...rest}
            />

            <Typography className={styles.error}>{error}</Typography>
        </div>
    );
};

export default FieldInput;
