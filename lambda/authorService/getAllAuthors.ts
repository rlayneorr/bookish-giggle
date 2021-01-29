import { Client } from 'pg';

export const handler = async (): Promise<any> => {
    let authors = await getAllAuthors();
    const head = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    if (authors) {
        return {
            headers: head,
            statusCode: 200, 
            body: JSON.stringify(authors)
        };
    } else {
        return {
            headers: head,
            statusCode: 404, 
            body: JSON.stringify({})
        };
    }
}

async function getAllAuthors(): Promise<Author[] | null> {
    const client = new Client();
    const query = 'select * from authors;';
    client.connect();
    let result: any;
    try {
        result = await client.query(query);
        return result.rows;
    } catch (error) {
        return null;
    } finally {
        client.end();
    }
}

class Author {
    // ID for the author's page vs ID for the author's user account
    authorId: number = 0;
    userId: string = '';
    firstName: string = '';
    lastName: string = '';

    // Average rating for the author based on the ratings for their books
    avgRating: number = 0;
    bio: string = '';

    // Location of the author's picture
    picture: string = '';
}