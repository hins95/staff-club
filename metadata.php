<?php
$staff_id = '123';

$data = array('staff_id' => $staff_id);
$metadata = json_encode($data);

exit($metadata);

?>