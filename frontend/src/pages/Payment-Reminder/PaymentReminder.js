import React from "react";
import styles from "./PaymentReminder.module.css";
import { useNavigate } from "react-router-dom";
const PaymentReminder = ({ price, course }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1 className={styles.main}>
                Hello, thanks for enrolling! We are super excited to see your
                student in class!
            </h1>
            <h2 className={styles.sub}>
                To Finish Signing Up, Please Venmo{" "}
                <span className={styles.bold}>@Sonha-Mason</span> payment of{" "}
                <span className={styles.bold}>${price}</span> for your {course}{" "}
                Class! The phone number is{" "}
                <span className={styles.bold}>240-543-5637</span>. Thanks!
            </h2>
            <button
                className={styles.buttonStyle}
                onClick={() => navigate("/contact-us")}
            >
                Have any questions? Click Here
            </button>
        </div>
    );
};

export default PaymentReminder;
