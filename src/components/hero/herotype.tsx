export type name = {
    name: string;
};

export type songs = {
    songs: name[];
};

export type ServerError = {
    message: string;
    errorCode?: number;
};