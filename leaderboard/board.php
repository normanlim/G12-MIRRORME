<?php 
include "base.php";
include "global.php"; 
?>
<!doctype html>
<html lang="en">
 <head>
  <title>Mirror Me!</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=310, user-scalable=yes,initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0" />
  <link rel="stylesheet" href="style/style.css">
  <script language="JavaScript" src="include/global.js" type="text/javascript"></script>
  </script>  
 </head>
 <body>
	<form id="formBoard" runat="server">
		<div class="div_body_m" style="margin-top:3px;">
		  <div class="list_m">
			<?php
			$gameId = 1;
			$pageSize = 10;
			
			//$rsCount = mysqli_query($con, "call spMM_GetBoardCount()"); 
			$rsCount = mysqli_query($con, "SELECT COUNT(*) FROM MM_Leaderboard");
			$myRow = mysqli_fetch_array($rsCount);
			$numRows = $myRow[0];
			$pages = ceil($numRows / $pageSize);
			if(isset($_GET['page'])) {
				$page = intval($_GET['page']);
			} else {
				$page = 1;
			}
			$offset = $pageSize * ($page - 1);
			//$rs = mysqli_query($con, "call spMM_GetBoardListPage(1,0,10)");
			$rs = mysqli_query($con, "call spMM_GetBoardListPage($gameId, $offset, $pageSize)");
			if($myRow = mysqli_fetch_array($rs)) {
				$i = 0;
			?>
				<table width="100%" border="0" align="center" cellpadding="1" cellspacing="1" class="border_m">
					<tr align="center" class="topbg">  
						<td colspan="4">
							<div class="wrap_m"><strong>Leaderboard</strong></div>
						</td>
					</tr>			
					<tr align="center" class="title"> 
						<td class='headcolor'>TROPHY</td>						
						<td class='headcolor'>NAME</td>
						<td class='headcolor'>SCORE</td>
						<td class='headcolor'>RANK</td>
					</tr>
					<?php
					do {
					?>
					<tr class="tdbg" align="center" onmouseout="this.style.backgroundColor=''" onmouseover="this.style.backgroundColor='#BFDFFF'">
						<td width="12%"><img width="25" src="img/ico<?=getTrophyId($myRow["Score"])?>.png" /></td>
						<td><?=$myRow["UserName"]?></td>
						<td><?=$myRow["Score"]?></td>                            
						<td><?=($page-1)*$pageSize+$i+1?></td>
					</tr>
					<?php
						$i++;
					} while($myRow = mysqli_fetch_array($rs));
					echo "</table>";
			}
			//echo "<div align='center'>Total ".$pages;
			?>
			
		   </div>
		</div>	
	</form>				
 </body>
</html>