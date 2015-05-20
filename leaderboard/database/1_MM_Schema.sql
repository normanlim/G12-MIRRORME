/* 
	Run SQLs accordingly
	1) 1_MM_Schema.sql
	2) 2_MM_Data.sql (only one time)
	3) 3_MM_SP.sql
*/

/* MM_Schema */
DROP DATABASE IF EXISTS MirrorMe;
CREATE DATABASE MirrorMe;
USE MirrorMe;	

/* MM_Leaderboard, leaderboard for comp2910 game MirrorMe!
Players can view their scores and rankings on leaderboard */
DROP TABLE IF EXISTS MM_Leaderboard;
CREATE TABLE IF NOT EXISTS MM_Leaderboard (
	UserId		int not null primary key,	
	UserName	varchar(30) not null default 'Player',
	UserIcon	varchar(30),
	Score		int,
	GameId		tinyint,
	SubmitDate  datetime
);

/* MM_AchievementLevel, achievement levels for comp2910 game MirrorMe! */
DROP TABLE IF EXISTS MM_AchievementLevel;
CREATE TABLE IF NOT EXISTS MM_AchievementLevel (
	AchievementId		int not null primary key,	
	AchievementName		varchar(30) not null,
	UnlockStars			int,
	Description			text	
);

/* MM_Achievement, achievements for comp2910 game MirrorMe! */
DROP TABLE IF EXISTS MM_Achievement;
CREATE TABLE IF NOT EXISTS MM_Achievement (
	UserId		int not null primary key,	
	Stars		int not null,
	UnlockLevel	int not null default 1,
	Unlock1  	datetime,
	Unlock2		datetime,
	Unlock3		datetime,
	FOREIGN KEY (UnlockLevel) 
        REFERENCES MM_AchievementLevel(AchievementId)
        ON DELETE CASCADE
);




