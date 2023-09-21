<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amino Acid Test</title>
    <link rel="stylesheet" href="styles_aa.css">
</head>

<body>
	<?php include 'navbar.php'; ?>
	<div class="amino-page">
		<div class="container">
			<h1>Amino Acid Tester for MCAT!</h1>

			<!-- For displaying text questions -->
			<div id="questionText" class="question-text"></div>

			<!-- For displaying image questions -->
			<img id="aminoImg" src="" alt="Amino Acid Image">

			<!-- Answer choices -->
			<div class="options">
				<button class="option"></button>
				<button class="option"></button>
				<button class="option"></button>
				<button class="option"></button>
			</div>

			<!-- Submit Button -->
			<button id="submitBtn">Next Question</button>
		</div>
	<div class="amino-page">

    <script src="script.js"></script>
</body>

</html>



