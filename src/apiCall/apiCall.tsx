import React from 'react';
import axios, { AxiosError } from 'axios';
import { requestType, successResult, failureResult } from "../types/types";


function apiErrorHandler(error: any) {

    if (axios.isAxiosError(error)) {
        if (error && error.response) {


            return { success: false, message: error.response.data.message } as failureResult;
        }
    }

    return { success: false, message: "Sorry Couldn't full fill your Request" } as failureResult;
}




export async function apiCall(type: requestType, endPoint: string, body?: any) {


    switch (type) {
        case "GET":
            try {
                let { status, data } = await axios.get(
                    `https://quizApp.piyushsingh6.repl.co/${endPoint}`
                );

                if (status === 200) {
                    return { success: true, data: data } as successResult;
                }
                return {
                    success: false,
                    message: "Sorry Couldn't full fill your Request",
                } as failureResult
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
                    return { success: true, data: data } as successResult;
                }
                return {
                    success: false,
                    message: data.message,
                } as failureResult
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
                    return { success: true, data: data } as successResult;
                }
                return {
                    success: false,
                    message: "Sorry Couldn't full fill your Request",
                } as failureResult
            } catch (error) {
                return apiErrorHandler(error);
            }


    }
}
