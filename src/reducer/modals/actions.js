export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export function openProfileModal() {
    return {
        type: MODAL_OPEN
    }
}

export function closeProfileModal() {
    return {
        type: MODAL_CLOSE
    }
}