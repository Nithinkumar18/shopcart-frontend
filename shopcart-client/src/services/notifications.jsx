import React from "react";
import { toast, ToastContainer } from "react-toastify";


// Use ToastContainer in your app root (import { NotificationsContainer } from './services/notifications')



export const NotificationsContainer = () => (
    <ToastContainer autoClose={4000} position="top-center" toastStyle={{ height: '45px', width: '500px' }} />
);

const successAlert = (message) => {
    toast.success(message);
};

const errorAlert = (message) => {
    toast.error(message);
};

export { successAlert, errorAlert };

