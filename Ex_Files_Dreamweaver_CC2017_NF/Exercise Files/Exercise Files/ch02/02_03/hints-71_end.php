<?php
$db = new mysqli('localhost', 'none', 'none');
if (!$db) {
    echo $db->connect_error;
}