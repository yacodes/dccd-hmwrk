export const DELETE_WISH = 'DELETE_WISH';

export function deleteWish(id) {
  return {
    type: DELETE_WISH,
    id,
  };
}
