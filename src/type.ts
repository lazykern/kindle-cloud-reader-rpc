export type KindleLocation = "library" | "notebook" | "book";

export type KindleState = LibraryState | NotebookState | BookState;

export interface LibraryState {
  location: "library";
  view: "all" | "books" | "comics" | "samples";
}

export interface NotebookState {
  location: "notebook";
  bookTitle: string;
  highlightCount: number;
  noteCount: number;
}
export interface BookState {
  location: "book";
  bookTitle: string;
  currentPage: number;
  totalPages: number;
}
