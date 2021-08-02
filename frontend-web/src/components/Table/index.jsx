//#region Imports

import Paper from '@material-ui/core/Paper';
import TableMaterial from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/Button';
import ModalCrud from 'components/ModalCrud';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import useStyles from './styles';
import TableBody from './TableBody';
import TablePagination from './TablePagination';

//#endregion

const Table = ({ fetch, onClickEdit, onClickRemove, columns = [], rows = [], pageable = {} }) => {
    const modalRef = useRef(null);
    const styles = useStyles();

    const [selectedId, setSelectedId] = useState(null);

    const show = useCallback(() => modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current.hide(), [modalRef]);

    const handleRemove = useCallback(async () => {
        await onClickRemove(selectedId);
        await fetch();

        hide();
    }, [onClickRemove, selectedId, fetch, hide]);

    return (
        <Fragment>
            <ModalCrud title='Deseja mesmo excluir?' modalRef={modalRef}>
                <div className={styles.modalText}>
                    Ao confirmar a solicitação, este item será excluído. Deseja continuar?
                </div>

                <div className={styles.modalButtonContainer}>
                    <div className={styles.buttonContainer}>
                        <Button type='button' onClick={() => handleRemove()}>
                            Confirmar
                        </Button>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Button type='button' variant='text' onClick={() => hide()}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </ModalCrud>

            <Paper className={styles.root} elevation={0}>
                <TableContainer className={styles.container}>
                    <TableMaterial stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns &&
                                    columns.map((col, index) => (
                                        <TableCell
                                            key={index}
                                            colSpan={col.colSpan || 1}
                                            align={col.align || 'left'}
                                            className={styles.headerCell}
                                        >
                                            {col.label}
                                        </TableCell>
                                    ))}
                                <TableCell className={styles.headerCell}></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody
                            rows={rows}
                            show={show}
                            columns={columns}
                            onClickEdit={onClickEdit}
                            onClickRemove={onClickRemove}
                            setSelectedId={setSelectedId}
                        />
                    </TableMaterial>
                </TableContainer>

                {pageable && (
                    <div className={styles.footer}>
                        <TablePagination fetch={fetch} pageable={pageable} />
                    </div>
                )}
            </Paper>
        </Fragment>
    );
};

export default Table;
