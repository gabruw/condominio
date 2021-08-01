//#region Imports

import Pagination from '@material-ui/lab/Pagination';
import React, { useCallback } from 'react';
import PAGEABLE_FIELDS from 'utils/constants/fields/pageable';

//#endregion

const TablePagination = ({ fetch, pageable }) => {
    const handlePage = useCallback(
        async (actualPage) => {
            await fetch(actualPage - 1);
        },
        [fetch]
    );

    return (
        <Pagination
            shape='rounded'
            variant='outlined'
            count={pageable[PAGEABLE_FIELDS.TOTAL_PAGES]}
            page={pageable[PAGEABLE_FIELDS.PAGE_NUMBER] + 1}
            onChange={(_, actualPage) => handlePage(actualPage)}
        />
    );
};

export default TablePagination;
