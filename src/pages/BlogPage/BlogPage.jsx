import React from 'react';

const BlogPage = () => {
    return (
        <div className="container mx-auto">
            <header className="text-center py-8">
                <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
            </header>

            <section className="py-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Question 1:</h2>
                    <p className="text-lg">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </p>
                    <p className="mt-2">
                        Answer: Access tokens and refresh tokens are commonly used in authentication systems. An access token is a
                        credential that is used to access protected resources on behalf of a user. It contains information about the
                        user's identity and permissions. Refresh tokens are used to obtain new access tokens when the previous ones
                        expire.
                    </p>
                    <p className="mt-2">
                        Access tokens are usually short-lived and stored in memory or local storage on the client-side. They are
                        sent with each request to authenticate the user. Refresh tokens, on the other hand, have a longer lifespan
                        and should be securely stored on the client-side, typically in an HTTP-only cookie or secure storage.
                        They are used to obtain new access tokens from the server when they expire without requiring the user to
                        re-authenticate.
                    </p>
                </div>
            </section>
            <section className="py-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Question 2:</h2>
                    <p className="text-lg">
                        Compare SQL and NoSQL databases?
                    </p>
                    <p className="mt-2">
                        Answer: SQL (Structured Query Language) and NoSQL (Not Only SQL) are different types of database management systems.
                        SQL databases are based on a relational model and use structured tables with predefined schemas. They are suitable
                        for handling complex relationships between entities and ensuring data integrity through ACID (Atomicity,
                        Consistency, Isolation, Durability) transactions.
                    </p>
                    <p className="mt-2">
                        NoSQL databases, on the other hand, do not rely on a fixed schema and are more flexible when it comes to handling
                        unstructured or semi-structured data. They are designed for scalability, high-performance, and handling large
                        amounts of data. NoSQL databases offer various data models like key-value, document, columnar, and graph.
                    </p>
                </div>
            </section>

            <section className="py-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Question 3:</h2>
                    <p className="text-lg">
                        What is Express.js? What is Nest.js?
                    </p>
                    <p className="mt-2">
                        Answer: Express.js is a popular and lightweight web application framework for Node.js. It provides a set of
                        features and utilities to build web applications and APIs quickly and easily. Express.js follows the middleware
                        pattern and allows you to define routes, handle HTTP requests, and perform other server-side operations in a
                        straightforward manner.
                    </p>
                    <p className="mt-2">
                        Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side
                        applications. It is built with TypeScript and incorporates concepts from Angular, such as decorators and
                        dependency injection, to provide a modular and structured approach to backend development. Nest.js is known for its
                        emphasis on maintainability and scalability, making it a popular choice for building enterprise-grade applications.
                    </p>
                </div>
            </section>

            <section className="py-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Question 4:</h2>
                    <p className="text-lg">
                        What is MongoDB aggregate and how does it work?
                    </p>
                    <p className="mt-2">
                        Answer: MongoDB's aggregation framework is a powerful tool for performing data processing and analysis operations.
                        It allows you to perform complex queries, transformations, and aggregations on MongoDB collections. The aggregation
                        pipeline consists of stages where each stage applies a specific operation to the data and passes the results to
                        the next stage.
                    </p>
                    <p className="mt-2">
                        The stages in the aggregation pipeline can include operations like filtering, grouping, sorting, projecting,
                        joining, and more. It provides a flexible and efficient way to manipulate and analyze data directly within the
                        database, reducing the need for multiple round trips between the application and the database server.
                    </p>
                </div>
            </section>



        </div>
    );
};

export default BlogPage;
