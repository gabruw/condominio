//#region Imports

import IconButton from '@material-ui/core/IconButton';
import TableBodyMaterial from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import useStyles from './styles';
import TableEmpty from './TableEmpty';

//#endregion

const TableBody = ({ columns, rows, show, setSelectedId, onClickEdit, onClickRemove }) => {
    const styles = useStyles();

    const confirmRemove = useCallback(
        (id) => {
            setSelectedId(id);
            show();
        },
        [setSelectedId, show]
    );

    return (
        <TableBodyMaterial>
            {rows && rows.length > 0 ? (
                rows.map((row, rowIndex) => (
                    <TableRow
                        hover
                        key={rowIndex}
                        tabIndex={rowIndex}
                        className={clsx(styles.bodyRow, { [styles.grayRow]: rowIndex % 2 !== 0 })}
                    >
                        {columns &&
                            columns.map((col, colIndex) => (
                                <TableCell key={colIndex} size='small' className={styles.bodyCell}>
                                    {eval(`row.${col.field}`)}
                                </TableCell>
                            ))}

                        {(onClickEdit || onClickRemove) && (
                            <TableCell align='center' size='small'>
                                {onClickEdit && (
                                    <IconButton className={styles.iconButton} onClick={() => onClickEdit(row)}>
                                        <EditIcon className={styles.editIcon} />
                                    </IconButton>
                                )}

                                {onClickRemove && (
                                    <IconButton className={styles.iconButton} onClick={() => confirmRemove(row)}>
                                        <DeleteIcon className={styles.removeIcon} />
                                    </IconButton>
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                ))
            ) : (
                <TableEmpty columns={columns} />
            )}
        </TableBodyMaterial>
    );
};

export default TableBody;
