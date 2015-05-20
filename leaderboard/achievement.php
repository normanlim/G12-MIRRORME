<?php 
include "base.php";
include "global.php"; 

$userName = '';
$userId = 0;
$level = 1;
$lv = 0;
$star = 0;
$cstar = 0;
$maxStar = 10;
$minId = 10000000;
$maxId = 19999999;

/*
if(isset($_SERVER['HTTP_HOST'])) echo $_SERVER['HTTP_HOST']."<br>";
if(isset($_SERVER['REQUEST_URI'])) echo $_SERVER['REQUEST_URI']."<br>";
if(isset($_SERVER['PHP_SELF'])) echo $_SERVER['PHP_SELF']."<br>";
if(isset($_SERVER['HTTP_REFERER'])) echo $_SERVER['HTTP_REFERER']."<br>";
*/
if(isset($_GET['u'])) {
	$userId = rotb13($_GET['u']);	
}
if(isset($_GET['v'])) {
	$star = rotb13($_GET['v']);	
}
if(isset($_GET['w'])) {
	$lv = rotb13($_GET['w']);	
}

if($userId == $_SESSION["UserId"] && $star == $_SESSION["Star"] && $lv == $_SESSION["Lv"]) {
	//$userId = 0;
	$star = 0;
} else {
	// set session variables
	$_SESSION["UserId"] = $userId;
	$_SESSION["Star"] = $star;
	$_SESSION["Lv"] = $lv;
}

if($userId > $minId && $userId < $maxId && $star < $maxStar) {	
	//check if the userId already exists
	$rsExist = mysqli_query($con, "select 1 from MM_Achievement where UserId = $userId");
	if($rsExist->num_rows > 0) {
		if($star > 0) mysqli_query($con, "call spMM_UpdateUserAchievement($userId, $star)");					
	} else {
		//get unlock stars
		$rsStars = mysqli_query($con, "select UnlockStars from MM_AchievementLevel where AchievementId = 1");
		$rowStars = mysqli_fetch_array($rsStars);
		$tmpstar = $rowStars['UnlockStars'];
		if($star >= $tmpstar) {
			mysqli_query($con, "insert into MM_Achievement(UserId, Stars, UnlockLevel, Unlock1) values($userId, $star, 2, now())");
		} else {
			mysqli_query($con, "insert into MM_Achievement(UserId, Stars, UnlockLevel) values($userId, $star, 1)");
		}
	}
	
	//get unlock stars for all achievements
	$rsAllstars = mysqli_query($con, "select UnlockStars from MM_AchievementLevel");
	$rowAllstars = mysqli_fetch_array($rsAllstars);
	$i = 0;
	do {
		$ustar[$i] = $rowAllstars["UnlockStars"];	
		$i++;
	} while($rowAllstars = mysqli_fetch_array($rsAllstars));	
	
	
	

?>
<!doctype html>
<html lang="en">
 <head>
  <title>MirrorMe! Achievements</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=310, user-scalable=yes,initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0" />
  <link rel="stylesheet" href="style/style.css">
  <script language="JavaScript" src="include/global.js" type="text/javascript"></script>  
 </head>
 <body>
	<form id="formAchievement" method="post">
		<div class="div_body_m" style="margin-top:3px;">
		  <div class="list_m">
			<?php			
			$rs = mysqli_query($con, "select AchievementId, AchievementName, Description from MM_AchievementLevel");
			if($row = mysqli_fetch_array($rs)) {
				//$i = 0;
			?>
				<table width="100%" border="0" align="center" cellpadding="1" cellspacing="1" class="border_m">
					<tr align="center" class="topbg">  
						<td colspan="4">
							<div class="wrap_m"><strong>Achievements</strong></div>
						</td>
					</tr>			
					<tr align="center" class="tdbg2"> 
						<td width="25%"><img height="40" class="center" src="img/award.png" /></td>							
						<td>
							<b><?=getUnlockedId($level)?> / 3 unlocked</b>
							<img src="img/prog<?=getUnlockedId($level)?>.png" />
						</td>
						
					</tr>
					<?php
					do {
					?>
						<tr class="tdbg1" onmouseout="this.style.backgroundColor=''" onmouseover="this.style.backgroundColor='#BFDFFF'">
							<td width="25%"><img width="60" class="center" src="img/ach<?=getShowId($row["AchievementId"],$level)?>.png" /></td>					
							<td>
								<b><?=$row["AchievementName"]?> (<?=getProgress($row["AchievementId"],$cstar,$ustar)?>%)</b><br>
								<?=$row["Description"]?><span class="pad3"><?=$utime[$row["AchievementId"]-1]?></span>
							</td>
						</tr>	
					<?php											
						//$i++;
					} while($row = mysqli_fetch_array($rs));
					echo "</table>";
			}
			?>
			<table width='100%' cellpadding=0 border=0>
				<tr>
					<td width="65%">Earned Stars: <span class='rankclr'><?=$cstar?></span></td>
					<td>Level: <span class='rankclr'><?=$level?></span></td>
				</tr>				
				<tr>
					<td width="65%">Name: <?=$userName?></td>
					<td>ID: <?=$userId?></td>					
				</tr>
			</table>
			<div align="center" class="btnheight">				
				<a class="btn" href="board.php?u=<?=rota13($userId)?>">Leaderboard</a>
				<span class="pad1"><a class="btn" href="javascript:history.back()">Go Back</a></span>			
			</div>
		  </div>
		</div>	
	</form>				
 </body>
</html>
<?php
}
?>