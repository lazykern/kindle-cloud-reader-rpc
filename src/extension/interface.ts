export type KindleLocation = "library" | "notebook" | "book";

export interface LibraryInfo {
  viewing: "all" | "books" | "comics" | "samples";
}

export interface NotebookInfo {
  bookTitle: string;
  highlightCount: number;
  noteCount: number;
}
export interface BookInfo {
  bookTitle: string;
  currentPage: number;
  totalPages: number;
}
