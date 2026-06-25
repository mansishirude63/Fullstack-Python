import { useState } from "react";

function FeedbackCollector() {
    const [feedback, setFeedback] = useState("");
    const [count, setCount] = useState(0);

    const handleFeedback = (type) => {
        setFeedback(type);
        setCount(count + 1);
    };

    return (
        <div className="container text-center">
            <h2>Feedback Collector</h2>

            <button className="mt-2 me-2" onClick={() => handleFeedback("Good")}>
                😊 Good
            </button>

            <button className="me-2" onClick={() => handleFeedback("Average")}>
                😐 Average
            </button>

            <button className="me-2" onClick={() => handleFeedback("Poor")}>
                😞 Poor
            </button>

            <div className="container text-center mt-4 mb-5" style={{
                width: "400px",
                height: "150px",
                border: "1px solid black",
            }}>
                <h3 className="mt-3">Selected Feedback: {feedback}</h3>

                <h3>Total Feedback Given: {count}</h3>

                {feedback === "Good" && (
                    <p>Thank you for your positive feedback! 😊 </p>
                )}

                {feedback === "Average" && (
                    <p>We'll try to improve. 😐 </p>
                )}

                {feedback === "Poor" && (
                    <p>Sorry for the inconvenience. 😞 </p>
                )}
            </div>
        </div>
    );
}

export default FeedbackCollector;