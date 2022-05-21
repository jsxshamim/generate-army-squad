import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <section className="container">
            <article className="blog">
                <h3>How React Works?</h3>
                <p>React কাজ করার জন্য প্রথমত আমাদের দুইটা node Package দরকার। </p>
                <ol>
                    <li>React </li>
                    <li>React dom</li>
                </ol>
                <p fs-5>
                    একটা component যখন লেখা হয় এটা তখন একটা pure javascript code থাকে। যতগুলো component আমরা লিখবো সেগুলো হয় কোন function হবে, না হয় কোন class হবে এবং সেটা pure javascript হবে। component এর মধ্যে আমরা html এর মত যে code গুলা লিখি
                    সেগুলো আসলে fake html যেটাকে আমরা JSX (Javascript JSX) বলি। এই javascript code কে আমাদের HTML code এ কনভার্ট করার প্রয়োজন পড়ে, সেক্ষেত্রে প্রথমে JSX কে vanila Javascript এ Convart করার জন্য webpack নামে একটি library ব্যবহার হয়,
                    যেটা সকল React component কে bundel.js নামে একটি single ফাইলে নিয়ে আসে। এই bundel.js একটি simple vanila javascript যেটা Browser এ রান করতে পারে।
                </p>
                <p>
                    React document object model (DOM) এর একটা exact copy করে রাখে যেটার নাম Virtual DOM এবং এটা রিয়েল DOM এর থেকে faster to work with. React virtual DOM এর সাথে রিয়েল DOM এর compare করে এবং খুব efficient একটা Algorithm এর মাধ্যমে
                    সিদ্ধান্ত নেই যে আমাদের marcup এর কোন যায়গায় পরিবর্তন হয়েছে। সম্পুর্ন DOM এর re-render না করে React শুধুমাত্র DOM এর যে যায়গায় পরিবর্তন হয়েছে সেটাকে re-render করে দেই। এই efficient algorithm কে বলা হয় reconciliation algorithm.
                </p>
            </article>
        </section>
    );
};

export default Blog;
