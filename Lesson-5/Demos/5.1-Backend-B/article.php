<?php

// Connect to the database that stores the articles
include('dbconnect.php');
$id = $_GET['id'];

$result = $link->query('SELECT * FROM training WHERE id = '.$id);

$row = $result->fetch_object();

$story .= '<div class="story">';
$story .= '<h1>'.$row->headline.'</h1>';
$story .= '<p>'.$row->article_content.'</p>';
$story .= '<p><a href="index.php">Back to Home</a></p>';
$story .= '</div>';

?>

<html>
    <!-- Above is our backend code, below is our front-end code -->
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <?php echo $story; ?>
        </div>
    </body>
</html>
