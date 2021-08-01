//#region Imports

import PAGEABLE_FIELDS from 'utils/constants/fields/pageable';

//#endregion

const CONTEXT_INITIAL_STATE = {
    [PAGEABLE_FIELDS.THIS]: {
        [PAGEABLE_FIELDS.PAGED]: 0,
        [PAGEABLE_FIELDS.OFFSET]: 0,
        [PAGEABLE_FIELDS.PAGE_SIZE]: 0,
        [PAGEABLE_FIELDS.UNPAGED]: false,
        [PAGEABLE_FIELDS.TOTAL_PAGES]: 0,
        [PAGEABLE_FIELDS.PAGE_NUMBER]: 0,
        [PAGEABLE_FIELDS.TOTAL_ELEMENTS]: 0
    }
};

export default CONTEXT_INITIAL_STATE;
