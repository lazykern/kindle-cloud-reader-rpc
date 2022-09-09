export interface KindleActivity {
  location: "library" | "book" | "notebook" | "unknown";
  bookTitle?: string;

// for book
  currentPage?: string;
  totalPages?: string;
  idleTime?: number;

// for notebook
  highlightCount?: string;
  noteCount?: string;
}
