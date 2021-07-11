import React from 'react';
import axios, { AxiosError } from 'axios';

type apiCallPropsType = {
    type: "GET" | "POST" | "DELETE",
    endPoint: string, body?: any
}

function apiErrorHandler({ error }: { error: any }) {
    if (axios.isAxiosError(error)) {
        if (error && error.response) {
            return { success: false, message: error.response.data.message };
        }
    }

    return { success: false, message: "Sorry Couldn't full fill your Request" };
}



export async function apiCall({ type, endPoint, body }: apiCallPropsType) {
    switch (type) {
        case "GET":
            try {
                let { status, data } = await axios.get(
                    `https://quizApp.piyushsingh6.repl.co/${endPoint}`
                );

                if (status === 200) {
                    return { success: true, data: data };
                }
                return {
                    success: false,
                    message: "Sorry Couldn't full fill your Request",
                }
            } catch (error) {
                return apiErrorHandler(error);
            }
        case "POST":
            try {
                let { status, data } = await axios.post(
                    `https://quizApp.piyushsingh6.repl.co/${endPoint}`,
                    body
                );

                if (status === 200) {
                    return { success: true, data: data };
                }
                return {
                    success: false,
                    message: "Sorry Couldn't full fill your Request",
                }
            } catch (error) {
                return apiErrorHandler(error);
            }
        case "DELETE":

            try {
                let { status, data } = await axios.delete(
                    `https://quizApp.piyushsingh6.repl.co/${endPoint}`,
                    {
                        data: body,
                    }
                );
                if (status === 200) {
                    return { success: true, data: data };
                }
                return {
                    success: false,
                    message: "Sorry Couldn't full fill your Request",
                }
            } catch (error) {
                return apiErrorHandler(error);
            }


    }
}
