<?php 
include "base.php";
include "global.php"; 

$gameId = 1;
$userId = 0;
$userName = '';
$score = 0;
$rank = 0;
$page = 1;
$pageSize = 10;
$edit = 0;

/*
if(isset($_SERVER['HTTP_HOST'])) echo $_SERVER['HTTP_HOST']."<br>";
if(isset($_SERVER['REQUEST_URI'])) echo $_SERVER['REQUEST_URI']."<br>";
if(isset($_SERVER['PHP_SELF'])) echo $_SERVER['PHP_SELF']."<br>";
if(isset($_SERVER['HTTP_REFERER'])) echo $_SERVER['HTTP_REFERER']."<br>";
*/

?>
<!doctype html>
<html lang="en">
 <head>
  <title>MirrorMe! Leaderboard</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=310, user-scalable=yes,initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0" />
  <link rel="stylesheet" href="style/style.css">
  <script language="JavaScript" src="include/global.js" type="text/javascript"></script>  
 </head>
 <body>
	<form id="formBoard" method="post" action="board.php">
		<div class="div_body_m" style="margin-top:3px;">
		  <div class="list_m">
			<?php			
			//$rsCount = mysqli_query($con, "call spMM_GetBoardCount()"); 
			$rsCount = mysqli_query($con, "SELECT COUNT(*) FROM MM_Leaderboard");
			$rowCount = mysqli_fetch_array($rsCount);
			$numRows = $rowCount[0];			
			$pages = ceil($numRows / $pageSize);			
			$offset = $pageSize * ($page - 1);
			
			//$rs = mysqli_query($con, "call spMM_GetBoardListPage(1,0,10)");
			$rs = mysqli_query($con, "call spMM_GetBoardListPage($gameId, $offset, $pageSize)");
			if($row = mysqli_fetch_array($rs)) {
				$i = 0;
			?>
				<table width="100%" border="0" align="center" cellpadding="1" cellspacing="1" class="border_m">
					<tr align="center" class="topbg">  
						<td colspan="4">
							<div class="wrap_m"><strong>Leaderboard</strong></div>
						</td>
					</tr>			
					<tr align="center" class="title"> 
						<td class='headerclr'>TROPHY</td>						
						<td class='headerclr'>NAME</td>
						<td class='headerclr'>SCORE</td>
						<td class='headerclr'>RANK</td>
					</tr>
					<?php
					do {
					?>
					<tr class="tdbg" align="center" onmouseout="this.style.backgroundColor=''" onmouseover="this.style.backgroundColor='#BFDFFF'">
						<td width="12%"><img width="25" src="img/ico<?=getTrophyId($row["Score"])?>.png" /></td>
					<?php
						if($userId == $row["UserId"]) {
					?>
						<td class="rankclr"><?=$row["UserName"]?></td>
						<td class="rankclr"><?=$row["Score"]?></td>                            
						<td class="rankclr"><?=($page-1)*$pageSize+$i+1?></td>
					<?php
					} else {
					?>
						<td><?=$row["UserName"]?></td>
						<td><?=$row["Score"]?></td>                            
						<td><?=($page-1)*$pageSize+$i+1?></td>
					<?php
					}						
						echo "</tr>";					
						$i++;
					} while($row = mysqli_fetch_array($rs));
					echo "</table>";
			}
			echo "<table width='100%' cellpadding=0 border=0>";
			echo "<tr><td width='65%'>";
			for($i=1;$i<$pages+1;$i++) {
				if($i == $page) echo "<a href='board.php?u=".$userId."&page=".$i."'>[<span class='pageclr'>".$i."</span>]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
				else echo "<a href='board.php?u=".$userId."&page=".$i."'>[".$i."]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			}
			echo "</td><td>";
			echo "Page: ".$page." / ".$pages;
			echo "</td></tr>";			
			?>				
				<tr>
					<td width="65%">Your Score: <span class='rankclr'><?=$score?></span></td>
					<td>Rank: <span class='rankclr'><?=$rank?></span></td>
				</tr>				
				<tr>
					<td width="65%">Name: <?=$userName?></td>
					<td>ID: <?=$userId?></td>					
				</tr>			
			<?php			
				echo "</table>";			
				if($edit == 0) {
				?>
				<div align="center" class="btnheight">				
					<a class="btn" href="board.php?u=<?=$userId?>&page=<?=$page?>&edit=1">Edit Profile</a>
				    <span class="pad1"><a class="btn" href="javascript:history.back()">Go Back</a></span>			
				</div>
				<?php
				} else {
				?>
				<div class="pad">Name:&nbsp;&nbsp;<input type="text" name="uname" id="uname" value=<?=$userName?> maxlength=30 required></div>				
				<div align="center" class="btnheight">	
					<input type="submit" class="btn1" value="Submit">
					<span class="pad2"><input type="button" class="btn1" value="Go Back" onclick="javascript:history.back()"></span>
				</div>				
				<?php
				}
			}
			?>
		  </div>
		</div>	
	</form>				
 </body>
</html>