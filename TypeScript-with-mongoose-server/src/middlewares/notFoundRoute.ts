import { Request, Response } from "express";

const notFoundRoute = async (req: Request, res: Response) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Route Not Found</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f8f9fa;
                font-family: Arial, sans-serif;
            }
            .container {
                text-align: center;
            }
            .message {
                font-size: 2rem;
                color: #495057;
                margin-bottom: 20px;
            }
            .back-btn {
                padding: 10px 20px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
            }
            .back-btn:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="message">
                <h1>Route Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
            </div>
            <button class="back-btn" onclick="window.history.back();">Go Back</button>
        </div>
    </body>
    </html>
  `);
};

export default notFoundRoute;
