export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action
  // an object with a type property
  // Payload a piece of data thats being undertaken.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
