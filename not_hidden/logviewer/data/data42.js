data = [{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:15:43 PM","query":"select * from [anknaidu@pdx.edu].[table_2clusters.csv]","id":"255737"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:17:30 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] WHERE VE_TOTAL>1;","id":"31624"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:17:38 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] WHERE VE_TOTAL>2;","id":"31625"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:17:45 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] WHERE VE_TOTAL>3;","id":"31626"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:17:53 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] WHERE VE_TOTAL>4;","id":"31627"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:18:01 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] WHERE VE_TOTAL>5;","id":"31628"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:19:14 PM","query":"select sum(ve_total) as total from (select ve_total from [anknaidu@pdx.edu].[accident_data_2clusters.csv]   where ve_total>2)as acci","id":"255833"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:24:26 PM","query":"select * from [anknaidu@pdx.edu].[accident_data_2clusters.csv]   where persons = (select max(persons) from [anknaidu@pdx.edu].[accident_data_2clusters.csv]) ;","id":"256109"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:28:40 PM","query":"SELECT avg(fatals) FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]","id":"31655"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:28:57 PM","query":"SELECT max(fatals) FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]","id":"31656"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:29:28 PM","query":"SELECT sum(fatals) FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]","id":"31659"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:29:53 PM","query":"SELECT sum(fatals) FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] where ve_total =2;","id":"31660"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:30:40 PM","query":"SELECT sum(fatals) FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] where ve_total >2;","id":"31662"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:30:48 PM","query":"SELECT sum(fatals) FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] where ve_total >1;","id":"31664"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:31:08 PM","query":"SELECT sum(fatals) as Total_Fatals FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv] where ve_total >1;","id":"31665"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:32:45 PM","query":"select sum(fatals) as total_fatals from [anknaidu@pdx.edu].[accident_data_2clusters.csv] where ve_total >1;","id":"256301"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:37:13 PM","query":"select * from [anknaidu@pdx.edu].[table_5clusters_1.csv]","id":"250056"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:38:59 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accidental_data2.csv],[anknaidu@pdx.edu].[Accident_data_2clusters.csv]","id":"31685"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:41:20 PM","query":"SELECT a1.ve_total, a1.persons, a1.fatals, a2.peds, a2.no_lanes, a2.drunk_dr  FROM [anknaidu@pdx.edu].[Accidental_data2.csv] a2,[anknaidu@pdx.edu].[Accident_data_2clusters.csv] a1","id":"31693"},{"owner":"anknaidu@pdx.edu","date":"1\/22\/2014 9:42:46 PM","query":"select a1.ve_total, a1.persons, a1.fatals, a2.peds, a2.no_lanes, a2.drunk_dr  from [anknaidu@pdx.edu].[accidental_data2.csv] a2,[anknaidu@pdx.edu].[accident_data_2clusters.csv] a1","id":"250297"},{"owner":"anknaidu@pdx.edu","date":"2\/13\/2014 7:15:11 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]   WHERE persons = (select max(persons) from [anknaidu@pdx.edu].[Accident_data_2clusters.csv]) ;","id":"36015"},{"owner":"anknaidu@pdx.edu","date":"2\/14\/2014 10:27:03 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]   WHERE ve_total>1","id":"36051"},{"owner":"anknaidu@pdx.edu","date":"2\/14\/2014 10:27:46 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]   WHERE ve_total>12","id":"36052"},{"owner":"anknaidu@pdx.edu","date":"2\/14\/2014 10:27:52 PM","query":"SELECT * FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]   WHERE ve_total>2","id":"36053"},{"owner":"anknaidu@pdx.edu","date":"2\/14\/2014 10:30:30 PM","query":"select sum(ve_total) as Total from (SELECT ve_total FROM [anknaidu@pdx.edu].[Accident_data_2clusters.csv]   WHERE ve_total>2)as acci","id":"36056"}];
