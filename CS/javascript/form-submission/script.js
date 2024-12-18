<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Submission Example</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Form Submission Example</h1>
        <form id="myForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>
            <button type="submit">Submit</button>
        </form>

        <script src="script.js"></script>
    </body>
</html>
