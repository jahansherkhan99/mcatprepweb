<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amino Acid Polarity Quiz</title>
    <link rel="stylesheet" href="styles_polarity.css">
</head>
<body>
	<?php include 'navbar.php'; ?>
    <div class="quiz-container">
        <img id="aminoImg" src="" alt="Amino Acid Image">
        <h2 id="aminoName"></h2>
        <p>Is this amino acid nonpolar, acidic, basic or polar uncharged?</p>
        <form id="quizForm">
            <label>
                <input type="radio" name="polarity" value="nonpolar">
                Nonpolar
            </label>
            <label>
                <input type="radio" name="polarity" value="acidic">
                Acidic
            </label>
            <label>
                <input type="radio" name="polarity" value="basic">
                Basic
            </label>
            <label>
                <input type="radio" name="polarity" value="uncharged">
                Polar Uncharged
            </label>
			<label>
                <input type="radio" name="polarity" value="special">
                Special
            </label>
            <button type="button" id="submitBtn">Submit</button>
<!--				<button type="button" id="submitBtn" onclick="testFunction()">Submit</button>-->

        </form>
    </div>
    <script src="script_polarity.js"></script>
</body>
</html>

