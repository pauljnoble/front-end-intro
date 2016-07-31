<?php

    // Connect to the database that stores the articles
    include('dbconnect.php');

    $stories = '';

    $result = $link->query('SELECT * FROM training');

    while ($row = $result->fetch_object()){
        $stories .= '<div class="story">';
        $stories .= '<h1>'.$row->headline.'</h1>';
        $stories .= '<p>'.substr($row->article_content, 0, 200).'...</p>';
        $stories .= '<p><a href="article.php?id='.$row->id.'">Read article</a></p>';
        $stories .= '</div>';
    }

?>


<html>
    <!-- Above is our backend code, below is our front-end code -->

    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <?php echo $stories; ?>
        </div>
    </body>
</html>

