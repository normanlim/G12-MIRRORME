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

/* MM_LeaderBoard, leaderboard for comp2910 game MirrorMe!
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