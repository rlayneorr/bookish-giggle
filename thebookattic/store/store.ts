import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { User } from "../user/user";
import { Review } from "../review/review";
import { Book } from "../book/book";
import { Author } from "../author/author";
import { AppAction } from "./actions";
import reducer from "./reducer";
import Genre from '../genre/genre';

export interface UserState {
    user: User;
    loginUser: User;
    locale?: string;
}

export interface ReviewState {
    reviews: Review[];
    review: Review;
}

export interface AuthorState {
    authors: Author[];
    author: Author;
}

export interface GenreState {
    genres: Genre[];
}

export interface BookState {
    books: Book[];
}

export interface BookAtticState
    extends UserState,
        AuthorState,
        ReviewState,
        GenreState,
        BookState {}

// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.
const store: Store<BookAtticState, AppAction> = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;
