/* MM_Data */
/* Leaderboard initial data */
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000001, 'MirrorMe!', 2000, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000002, 'Tony', 1000, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000003, 'Sophie', 1250, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000004, 'Kenny', 2000, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000005, 'Hon', 400, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000006, 'Jackie', 560, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000007, 'Mannie', 2000, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000008, '==Aadne==', 1900, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000009, 'Clickme', 1950, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000010, 'Halmton', 100, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000011, 'Tag', 880, 1, now());
INSERT INTO MM_Leaderboard(UserId, UserName, Score, GameId, SubmitDate)
VALUES(10000012, '**Goodspa**', 1100, 1, now());

/* AchievementLevel data */
INSERT INTO MM_AchievementLevel(AchievementId, AchievementName, UnlockStars, Description)
VALUES(1, 'Yellow Star', 5, 'Complete 5 easy levels and earn 5 stars.');
INSERT INTO MM_AchievementLevel(AchievementId, AchievementName, UnlockStars, Description)
VALUES(2, 'Red Star', 30, 'Complete 15 medium levels and earn 30 stars.');
INSERT INTO MM_AchievementLevel(AchievementId, AchievementName, UnlockStars, Description)
VALUES(3, 'Purple Star', 60, 'Complete 20 hard levels and earn 60 stars.');

/* Achievements initial data */
INSERT INTO MM_Achievement(UserId, Stars) VALUES(10000001, 1);
