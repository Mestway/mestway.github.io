data = [{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 10:36:24 PM","query":"SELECT roi.id, count(rd.start) as cnt   FROM [mtmorgan@washington.edu].[roi.csv] roi      , indexed_reads rd   WHERE roi.start <= rd.start AND rd.start <= roi.[end]      AND roi.start <= rd.[end] AND rd.[end] >= roi.[end]   GROUP BY roi.id","id":"28217"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 10:41:49 PM","query":"select roi.id, count(rd.start) as cnt   from [mtmorgan@washington.edu].[roi.csv] roi      , indexed_reads rd   where roi.start <= rd.start and rd.start <= roi.[end]      and roi.start <= rd.[end] and rd.[end] <= roi.[end]   group by roi.id","id":"254328"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 11:03:05 PM","query":"SELECT roi.id, count(rd.start)   FROM [mtmorgan@washington.edu].[roi.csv] roi      , [mtmorgan@washington.edu].[reads.csv] rd   WHERE roi.start <= rd.start AND roi.[end] >= rd.[end]   GROUP BY roi.id","id":"28218"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 11:23:00 PM","query":"SELECT TOP 20 * FROM [counts] ORDER BY id DESC","id":"28219"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 5:31:20 PM","query":"select * from [mtmorgan@washington.edu].[table_roi.csv]","id":"252933"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 5:33:22 PM","query":"select * from [mtmorgan@washington.edu].[table_reads.csv]","id":"253020"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 5:37:58 PM","query":"SELECT count(roi.id)   FROM [mtmorgan@washington.edu].[roi.csv] roi","id":"28193"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 5:38:07 PM","query":"SELECT count(distinct roi.id)   FROM [mtmorgan@washington.edu].[roi.csv] roi","id":"28194"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 5:39:58 PM","query":"SELECT *   FROM [mtmorgan@washington.edu].[reads.csv] rd","id":"28199"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 5:45:04 PM","query":"select roi.id, count(rd.start)   from [mtmorgan@washington.edu].[roi.csv] roi      , [mtmorgan@washington.edu].[reads.csv] rd   where roi.start <= rd.start and roi.[end] >= rd.[end]   group by roi.id","id":"253059"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 7:41:46 PM","query":"SELECT count(distinct id) FROM [mtmorgan@washington.edu].[table_roi.csv]","id":"28202"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 7:43:43 PM","query":"SELECT min(roi.start), max(roi.[end]) FROM [mtmorgan@washington.edu].[table_roi.csv] roi","id":"28206"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 7:47:36 PM","query":"SELECT TOP 20 * FROM [mtmorgan@washington.edu].[table_roi.csv] roi","id":"28209"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 9:29:10 PM","query":"SELECT TOP 20 * FROM [mtmorgan@washington.edu].[table_roi.csv] roi ORDER BY id DESC","id":"28212"},{"owner":"mtmorgan@washington.edu","date":"9\/14\/2013 9:30:36 PM","query":"SELECT TOP 20 * FROM [mtmorgan@washington.edu].[counts] roi ORDER BY id DESC","id":"28215"},{"owner":"mtmorgan@washington.edu","date":"9\/15\/2013 12:12:51 AM","query":"select * from [mtmorgan@washington.edu].[table_counts.csv]","id":"254421"},{"owner":"mtmorgan@washington.edu","date":"9\/15\/2013 12:14:02 AM","query":"SELECT * FROM [mtmorgan@washington.edu].[counts.csv]  EXCEPT  SELECT * FROM [mtmorgan@washington.edu].[indexed read counts]","id":"28220"},{"owner":"mtmorgan@washington.edu","date":"9\/15\/2013 12:14:49 AM","query":"( SELECT * FROM [mtmorgan@washington.edu].[counts.csv]  EXCEPT  SELECT * FROM [mtmorgan@washington.edu].[indexed read counts] )   UNION ( SELECT * FROM [mtmorgan@washington.edu].[indexed read counts]  EXCEPT  SELECT * FROM [mtmorgan@washington.edu].[counts.csv] )","id":"28221"},{"owner":"mtmorgan@washington.edu","date":"9\/15\/2013 12:15:42 AM","query":"( select * from [mtmorgan@washington.edu].[counts.csv]  except  select * from [mtmorgan@washington.edu].[indexed read counts] )   union ( select * from [mtmorgan@washington.edu].[indexed read counts]  except  select * from [mtmorgan@washington.edu].[counts.csv] )","id":"254467"},{"owner":"mtmorgan@washington.edu","date":"9\/15\/2013 12:17:50 AM","query":"SELECT * FROM [mtmorgan@washington.edu].[counts]","id":"28222"}];
