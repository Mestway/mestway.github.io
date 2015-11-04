data = [{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 10:10:17 PM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]   WHERE tablename LIKE '%flow%'","id":"30122"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 10:24:38 PM","query":"SELECT * FROM [billhowe].[categorized_fat_with_calories]   WHERE seafood_calories > nut_calories","id":"30123"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 10:25:38 PM","query":"SELECT * FROM [billhowe].[categorized_fat_with_calories]   WHERE seafood_calories > nut_calories   AND vegetable_calories > chocolate_calories","id":"30124"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 10:35:55 PM","query":"select date, [total calories], [total fat] from [billhowe].[categorized_fat_with_calories]   where seafood_calories > nut_calories   and vegetable_calories > chocolate_calories","id":"254526"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:24:47 AM","query":"select * from [davideugenemaier@gmail.com].[table_species.csv]","id":"253170"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:27:10 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[species.csv]   WHERE taxa = 'Rodent'","id":"30093"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:28:01 AM","query":"SELECT genus, count(*) FROM [davideugenemaier@gmail.com].[species.csv]   WHERE taxa = 'Rodent'   GROUP BY genus","id":"30094"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:29:27 AM","query":"select genus, count(*) as num_species from [davideugenemaier@gmail.com].[species.csv]   where taxa = 'rodent'   group by genus","id":"253216"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:30:41 AM","query":"SELECT genus, count(*) FROM [davideugenemaier@gmail.com].[species.csv]   WHERE taxa = 'Bird'   GROUP BY genus","id":"30095"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:34:30 AM","query":"SELECT genus, count(*) as num_species FROM [davideugenemaier@gmail.com].[species.csv]   WHERE taxa = 'Rodent'   GROUP BY genus","id":"30096"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 7:35:28 AM","query":"SELECT max(num_species) as max_species FROM [davideugenemaier@gmail.com].[Rodent_Genus_Count]","id":"30097"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 9:54:45 PM","query":"SELECT * FROM [billhowe].[total_fat_6_month_projection]   WHERE [total fat] > 100","id":"30119"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 9:55:50 PM","query":"SELECT * FROM [billhowe].[total_fat_6_month_projection] X,    [billhowe].[total_fat_6_month_projection] Y   WHERE X.date = Y.date","id":"30120"},{"owner":"davideugenemaier@gmail.com","date":"1\/15\/2014 9:56:51 PM","query":"SELECT * FROM [billhowe].[total_fat_6_month_projection] X,    [billhowe].[total_fat_6_month_projection] Y   WHERE X.date = Y.date AND x.[total fat] <> y.[total fat]","id":"30121"},{"owner":"davideugenemaier@gmail.com","date":"1\/16\/2014 1:59:24 AM","query":"SELECT * FROM [billhowe].[UW highest paid employee by department]   where salary > 20000","id":"30126"},{"owner":"davideugenemaier@gmail.com","date":"1\/16\/2014 2:03:24 AM","query":"select * from [davideugenemaier@gmail.com].[table_species.csv]","id":"254844"},{"owner":"davideugenemaier@gmail.com","date":"1\/16\/2014 2:04:39 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[SpeciesCodes]   WHERE taxa = 'Rodent'","id":"30127"},{"owner":"davideugenemaier@gmail.com","date":"1\/16\/2014 2:05:17 AM","query":"SELECT taxa, count(*) as taxaCount FROM [davideugenemaier@gmail.com].[SpeciesCodes]   Group by taxa","id":"30128"},{"owner":"davideugenemaier@gmail.com","date":"1\/16\/2014 2:05:58 AM","query":"select taxa, count(*) as taxacount from [davideugenemaier@gmail.com].[speciescodes]   group by taxa","id":"254890"},{"owner":"davideugenemaier@gmail.com","date":"10\/2\/2012 7:28:43 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]   WHERE viewname > 'd'","id":"9968"},{"owner":"davideugenemaier@gmail.com","date":"10\/3\/2012 7:39:40 AM","query":"SELECT * FROM [billhowe].[total_fat_6_month_projection]   WHERE [Total Fat] > 90","id":"9969"},{"owner":"davideugenemaier@gmail.com","date":"10\/3\/2012 7:40:14 AM","query":"SELECT * FROM [billhowe].[total_fat_6_month_projection]   WHERE [Total Fat] = 2500*0.25\/9","id":"9970"},{"owner":"davideugenemaier@gmail.com","date":"10\/3\/2012 7:42:30 AM","query":"SELECT top 10 *   FROM [billhowe].[total_fat_6_month_projection]   ORDER by [Date] desc","id":"9973"},{"owner":"davideugenemaier@gmail.com","date":"2\/23\/2012 11:25:31 PM","query":"SELECT phase, location FROM [billhowe].[Pile Point tide events labeled by tidal cycle]","id":"7899"},{"owner":"davideugenemaier@gmail.com","date":"4\/16\/2013 7:39:05 AM","query":"SELECT * FROM [sr320@washington.edu].[AggCo_JOIN_Zhang_slim]   WHERE Mgo > 16;","id":"22459"},{"owner":"davideugenemaier@gmail.com","date":"4\/16\/2013 7:39:28 AM","query":"SELECT * FROM [sr320@washington.edu].[AggCo_JOIN_Zhang_slim]   WHERE Mgo > 26;","id":"22460"},{"owner":"davideugenemaier@gmail.com","date":"4\/16\/2013 7:39:40 AM","query":"SELECT * FROM [sr320@washington.edu].[AggCo_JOIN_Zhang_slim]   WHERE Mgo > 36;","id":"22461"},{"owner":"davideugenemaier@gmail.com","date":"4\/16\/2013 7:39:52 AM","query":"SELECT * FROM [sr320@washington.edu].[AggCo_JOIN_Zhang_slim]   WHERE Mgo > 106;","id":"22463"},{"owner":"davideugenemaier@gmail.com","date":"4\/16\/2013 7:40:10 AM","query":"SELECT * FROM [sr320@washington.edu].[AggCo_JOIN_Zhang_slim]   WHERE Mgo > 200;","id":"22464"},{"owner":"davideugenemaier@gmail.com","date":"4\/16\/2013 7:40:18 AM","query":"SELECT * FROM [sr320@washington.edu].[AggCo_JOIN_Zhang_slim]   WHERE Mgo > 400;","id":"22465"},{"owner":"davideugenemaier@gmail.com","date":"4\/20\/2012 4:33:23 PM","query":"SELECT T1, C1 FROM [ribalet@washington.edu].[Tokyo_2_merged_data_time_binned]","id":"8067"},{"owner":"davideugenemaier@gmail.com","date":"9\/11\/2012 3:20:59 PM","query":"SELECT *    FROM [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  WHERE v.sql_code like '%' + t.short_desc + '%'","id":"9904"},{"owner":"davideugenemaier@gmail.com","date":"9\/11\/2012 3:21:23 PM","query":"SELECT v.short_desc viewname, t.short_desc as tablename    FROM [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  WHERE v.sql_code like '%' + t.short_desc + '%'","id":"9905"},{"owner":"davideugenemaier@gmail.com","date":"9\/11\/2012 3:22:02 PM","query":"SELECT v.short_desc viewname, t.short_desc as tablename    FROM [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  WHERE v.sql_code like '%' + t.short_desc + '%'     AND v.short_desc != t.short_desc","id":"9906"},{"owner":"davideugenemaier@gmail.com","date":"9\/11\/2012 3:24:43 PM","query":"select v.short_desc viewname, t.short_desc as tablename    from [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  where v.sql_code like '%' + t.short_desc + '%'     and v.short_desc != t.short_desc    and t.is_public = 'true'    and v.is_public = 'true'","id":"251123"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 1:10:29 PM","query":"SELECT v.short_desc viewname, t.short_desc as tablename    FROM [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  WHERE v.sql_code like '%' + t.short_desc + '%'     AND v.short_desc != t.short_desc    AND t.is_public = 'True'","id":"9915"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 3:20:25 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]   where tablename = 'Test'","id":"9908"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 3:20:47 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]","id":"9909"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 3:21:38 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]   order by tablename","id":"9910"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 4:32:39 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]","id":"9911"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 4:34:41 AM","query":"SELECT v.*, v.short_desc viewname, t.short_desc as tablename    FROM [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  WHERE v.sql_code like '%' + t.short_desc + '%'     AND v.short_desc != t.short_desc","id":"9912"},{"owner":"davideugenemaier@gmail.com","date":"9\/12\/2012 6:19:03 AM","query":"SELECT * FROM [davideugenemaier@gmail.com].[views referencing tables]   WHERE viewname like '%views%'","id":"9913"},{"owner":"davideugenemaier@gmail.com","date":"9\/13\/2012 8:08:57 AM","query":"SELECT v.short_desc viewname, t.short_desc as tablename    FROM [billhowe].[all views in sqlshare] v      , [billhowe].[all views in sqlshare] t  WHERE v.sql_code like '%' + t.short_desc + '%'     AND v.short_desc != t.short_desc    AND t.is_public = 'True'    AND v.is_public = 'True'","id":"9919"}];
