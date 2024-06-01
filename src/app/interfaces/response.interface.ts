export interface ResponseApi<T> {
    estado: boolean;
    mensaje: string;
    status: number;
    payload: ResponseApiPayload<T>;
    detalle: ResponseApiDetalle

}

export interface ResponseApiDetalle {
    mensaje: string
}

export interface ResponseApiPayload<T> {

    estado: boolean;
    mensaje: string;
    body: T;
}