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
                localStorage.setItem('authToken', token);
            }
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            return {
                success: true,
                data: response.data,
                statusCode: response.status
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>

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
            const axiosError = error as AxiosError<Error>
            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0
            };
        }
    }
}
