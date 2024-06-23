import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { LoginDto, LoginResponseDto } from "../dto/login.dto";

type ClientResponse<T> = {
    success: boolean;
    data: T;
    statusCode: number;
}

interface Book {
    bookID: number;
    ISBN: string;
    title: string;
    author: string;
    publisher: string;
    yearPublished: number;
    availableCopies: number;
    description: string;
}

export class HomePageClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:8081/api',
        });
        this.setAuthorizationHeader();
    }

    public async login(data: LoginDto): Promise<ClientResponse<LoginResponseDto | null>> {
        try {
            const response: AxiosResponse<LoginResponseDto> = await this.client.post('/auth/login', data);

            const token = response.data.token;
            if (typeof token === "string") {
                console.log("Setting token:", token);  // Debugging log
                localStorage.setItem('authToken', token);
                this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }

            return {
                success: true,
                data: response.data,
                statusCode: response.status
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;
            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0
            };
        }
    }

    private setAuthorizationHeader() {
        const token = localStorage.getItem('authToken');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }

    public async getBookDetails(): Promise<ClientResponse<Book[] | null>> {
        this.setAuthorizationHeader();
        try {
            const response: AxiosResponse<any[]> = await this.client.get('/bookDetails/allDetails');
            const books: Book[] = response.data.map((detail) => ({
                bookID: detail.detailId,
                ISBN: detail.id.isbn,
                title: detail.id.title,
                author: detail.id.author,
                publisher: detail.id.publisher,
                yearPublished: detail.id.publication_year,
                availableCopies: detail.id.available_copies,
                description: detail.summary
            }));
            return {
                success: true,
                data: books,
                statusCode: response.status
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;
            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0
            };
        }
    }

    public async getUserRoleByName(username: string): Promise<string> {
        this.setAuthorizationHeader();
        try {
            const response: AxiosResponse<string> = await this.client.get(`/users/getUserRoleByName/${username}`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<Error>;
            if (axiosError.response?.status === 404) {
                throw new Error('User role not found');
            } else {
                throw new Error(axiosError.response?.statusText || 'Failed to fetch user role');
            }
        }
    }

    public async getUserIdByName(name: string): Promise<number> {
        this.setAuthorizationHeader();
        try {
            const response: AxiosResponse<number> = await this.client.get(`/users/getUserIdByName/${name}`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<Error>;
            if (axiosError.response?.status === 404) {
                throw new Error('User ID not found');
            } else {
                throw new Error(axiosError.response?.statusText || 'Failed to fetch user ID');
            }
        }
    }

    public async getBooks(): Promise<ClientResponse<Book[] | null>> {
        this.setAuthorizationHeader();
        try {
            const response: AxiosResponse<any[]> = await this.client.get('/books');
            const books: Book[] = response.data.map((detail) => ({
                bookID: detail.id,
                ISBN: detail.isbn,
                title: detail.title,
                author: detail.author,
                publisher: detail.publisher,
                yearPublished: detail.publication_year,
                availableCopies: detail.available_copies,
                description: detail.description,
                user: detail.user
            }));
            return {
                success: true,
                data: books,
                statusCode: response.status
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;
            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0
            };
        }
    }

}
