/**
 * @see https://github.com/pprathameshmore/QuoteGarden#get-a-random-quote
 * @see https://github.com/pprathameshmore/QuoteGarden#get-quotes
 */
export type ApiSuccessResponseBody = {
  statusCode: number;
  message: string;
  pagination: {
    currentPage: number;
    nextPage: number | null;
    totalPages: number;
  };
  totalQuotes: number;
  data: {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
  }[];
};

export type ApiErrorResponseBody = {
  statusCode: number;
  message: string;
};
