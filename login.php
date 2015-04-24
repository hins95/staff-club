<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

if (!isset($data->{'staff_id'}) || !isset($data->{'password'})) {
    exit('loginError');
}

if ($data->{'staff_id'} === '1' || $data->{'password'} === '1') { // do checking from database
    exit('loginSuccess');
}

exit('loginError');

?>