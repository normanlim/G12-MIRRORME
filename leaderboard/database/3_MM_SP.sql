/* Procedures */

/*
//spMM_GetBoardCount
//get total rows of the table Leaderboard
*/
DROP PROCEDURE IF EXISTS spMM_GetBoardCount;
CREATE PROCEDURE spMM_GetBoardCount()
BEGIN
	SELECT COUNT(*) FROM MM_Leaderboard;
END;

/*
//spMM_GetBoardList
//query leaderboard info by gameId
*/
DROP PROCEDURE IF EXISTS spMM_GetBoardList;
CREATE PROCEDURE spMM_GetBoardList(GameId tinyint)
BEGIN
	SELECT UserId,UserName,Score FROM MM_Leaderboard A WHERE A.GameId = GameId ORDER BY Score DESC LIMIT 0,100;
END;

/*
//spMM_GetBoardListPage
//query leaderboard info by gameId, offset, and pagesize
*/
DROP PROCEDURE IF EXISTS spMM_GetBoardListPage;
CREATE PROCEDURE spMM_GetBoardListPage(GameId tinyint, Offset tinyint, PageSize tinyint)
BEGIN
	SET @a = Offset;
	SET @b = PageSize;
	PREPARE stmt FROM "SELECT A.UserId,A.UserName,A.Score FROM MM_Leaderboard A WHERE A.GameId = GameId ORDER BY Score DESC LIMIT ?, ?;";
	EXECUTE stmt USING @a, @b;
	DEALLOCATE PREPARE stmt;
END;

/*
//spMM_UpdateBoard
//update leaderboard table by userId,score and gameId
*/
DROP PROCEDURE IF EXISTS spMM_UpdateBoard;
CREATE PROCEDURE spMM_UpdateBoard(UserId int,Score int,GameId tinyint)
BEGIN
	IF NOT EXISTS (SELECT 1 FROM MM_Leaderboard A WHERE A.UserId = UserId) THEN
		IF UserId>0 THEN
			INSERT INTO MM_Leaderboard(UserId,Score,GameId,SubmitDate) VALUES(UserId,Score,GameId,current_timestamp());
		END IF;
	ElSE
		IF Score>0 THEN
			UPDATE MM_Leaderboard A SET A.Score = Score, A.SubmitDate = current_timestamp() WHERE A.UserId = UserId AND A.GameId = GameId;
		END IF;
	END IF;
END;

/*
//spMM_GetUserName
//get user name by userID
*/
DROP PROCEDURE IF EXISTS spMM_GetUserName;
CREATE PROCEDURE spMM_GetUserName(inUserId int)
BEGIN
	SELECT IFNULL(UserName,'') AS UserName FROM MM_Leaderboard WHERE UserId = inUserId;
END;

/*
//spMM_GetUserRank
//get user's rank on leaderboard
*/
DROP PROCEDURE IF EXISTS spMM_GetUserRank;
CREATE PROCEDURE spMM_GetUserRank(GameId tinyint, Score int)
BEGIN
	select COUNT(*)+1 AS Rank FROM MM_Leaderboard A WHERE A.GameId = GameId AND A.Score>Score;
END;

/*
//spMM_UpdateProfile
//update user profile
*/
DROP PROCEDURE IF EXISTS spMM_UpdateProfile;
CREATE PROCEDURE spMM_UpdateProfile(UserId int,UserName varchar(30))
BEGIN
	UPDATE MM_Leaderboard A SET A.UserName = UserName WHERE A.UserId = UserId;
END;

/*
//spMM_GetUserAchievement
//get user's achievements info
*/
DROP PROCEDURE IF EXISTS spMM_GetUserAchievement;
CREATE PROCEDURE spMM_GetUserAchievement(UserId int)
BEGIN
	SELECT A.UserId, A.Stars, A.UnlockLevel, A.Unlock1, A.Unlock2, A.Unlock3 FROM MM_Achievement A WHERE A.UserId = UserId;
END;

/*
//spMM_UpdateUserAchievement
//update user's achievements info
*/
DROP PROCEDURE IF EXISTS spMM_UpdateUserAchievement;
CREATE PROCEDURE spMM_UpdateUserAchievement(UserId int, Stars int)
BEGIN
	DECLARE curStars INT;
	DECLARE curLevel INT;
	DECLARE unlockStars INT;
	SELECT A.Stars, A.UnlockLevel INTO curStars, curLevel FROM MM_Achievement A WHERE A.UserId = UserId;
	SELECT B.UnlockStars INTO unlockStars FROM MM_AchievementLevel B WHERE B.AchievementId = curLevel;
	SET curStars = curStars + Stars;
	IF curStars >= unlockStars THEN
		IF curLevel > 2 THEN
			UPDATE MM_Achievement A SET A.Stars = curStars, A.UnlockLevel = curLevel+1, A.Unlock3 = now() WHERE A.UserId = UserId;
		ELSEIF curLevel > 1 THEN
			UPDATE MM_Achievement A SET A.Stars = curStars, A.UnlockLevel = curLevel+1, A.Unlock2 = now() WHERE A.UserId = UserId;
		ELSE
			UPDATE MM_Achievement A SET A.Stars = curStars, A.UnlockLevel = curLevel+1, A.Unlock1 = now() WHERE A.UserId = UserId;
		END IF;
	ELSE 
		UPDATE MM_Achievement A SET A.Stars = curStars WHERE A.UserId = UserId;
	END IF;
END;

