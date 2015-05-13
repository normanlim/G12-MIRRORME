<?php
//get trophyId
function getTrophyId($score) {
	$best = 2000;
	$inc = 500;
	$id = 1;
	if($score >= $best) $id = 5;
	else if($score >= $best - $inc) $id = 4;
	else if($score >= $best - 2*$inc) $id = 3;
	else if($score >= $best - 3*$inc) $id = 2;
	return $id;	
}
?>