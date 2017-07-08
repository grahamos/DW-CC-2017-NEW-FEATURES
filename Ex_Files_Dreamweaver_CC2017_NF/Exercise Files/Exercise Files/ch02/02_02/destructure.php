<?php
$foods = [
    ['name' => 'strawberry', 'type' => 'fruit'],
    ['name' => 'beef', 'type' => 'meat'],
    ['name' => 'carrot', 'type' => 'vegetable']
];
foreach ($foods as ['name' => $name, 'type' => $type]) {
    echo "$name is a type of $type<br>";
}