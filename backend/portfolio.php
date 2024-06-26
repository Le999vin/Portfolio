// api/portfolio.php
<?php
header('Content-Type: application/json');

$portfolio = [
    [
        'title' => 'Projekt 1',
        'description' => 'Beschreibung des ersten Projekts',
        'image' => 'https://example.com/image1.jpg'
    ],
];

echo json_encode($portfolio);
?>
