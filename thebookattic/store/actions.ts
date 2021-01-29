import { User } from './../user/user';
import { Author } from '../author/author';
import { Review } from "../review/review";
import { Book } from "../book/book";
import Genre from '../genre/genre';

export enum UserActions {
    GetUser = 'GET_USER',
    LoginChange = 'CHANGE_LOGIN',
    ChangeLocale = 'CHANGE_LOCALE'
}

export enum AuthorActions {
    GetAuthors = 'GET_AUTHORS',
    GetAuthor = 'GET_AUTHOR'
}

export enum ReviewActions {
    GetReviews = 'GET_REVIEWS',
    ChangeReview = 'CHANGE_REVIEW'
}

export enum GenreActions {
    GetGenres = 'GET_GENRES'
}

export enum BookActions {
    ChangeBooks = 'CHANGE_BOOKS'
}

export interface AppAction {
    type: string;
    payload: any;
}

export interface UserAction<P> extends AppAction {
    type: UserActions;
    payload: P;
}

export interface AuthorAction extends AppAction {
    type: AuthorActions;
    payload: Author | Author [];
}

export interface ReviewAction extends AppAction {
    type: ReviewActions;
    payload: Review | Review[];
}

export interface GenreAction extends AppAction {
    type: GenreActions;
    payload: Genre[];
}

export interface BookAction extends AppAction {
    type: BookActions;
    payload: Book[];
}

export function getUser(user: User): UserAction<User> {
    const action: UserAction<User> = {
        type: UserActions.GetUser,
        payload: user
    };
    return action;
}

export function loginAction(user: User): UserAction<User> {
    const action: UserAction<User> = {
        type: UserActions.LoginChange,
        payload: user
    };
    return action;
}

export function changeLocale(locale: string): UserAction<string> {
    const action: UserAction<string> = {
        type: UserActions.ChangeLocale,
        payload: locale
    };
    return action;
}

export function getAllAuthors(authors: Author[]): AuthorAction {
    const action: AuthorAction = {
        type: AuthorActions.GetAuthors, 
        payload: authors
    };
    return action;
}

export function getAuthor(author: Author): AuthorAction {
    const action: AuthorAction = {
        type: AuthorActions.GetAuthor, 
        payload: author
    };
    return action;
}

export function getReviews(reviews: Review[]): ReviewAction {
    const action: ReviewAction = {
        type: ReviewActions.GetReviews,
        payload: reviews
    };
    return action;
}

export function ChangeReview(review: Review): ReviewAction {
    const action: ReviewAction = {
        type: ReviewActions.ChangeReview,
        payload: review
    };
    return action;
}

export function getGenres(genres: Genre[]): GenreAction {
    const action: GenreAction = {
        type: GenreActions.GetGenres,
        payload: genres
    };
    return action;
}

export function changeBooks(books: Book[]): BookAction {
    const action: BookAction = {
        type: BookActions.ChangeBooks,
        payload: books
    };
    return action;
}