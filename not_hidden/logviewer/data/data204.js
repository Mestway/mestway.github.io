data = [{"owner":"sbender@washington.edu","date":"10\/20\/2011 12:05:29 AM","query":"SELECT * FROM [sbender@washington.edu].[GLM-all.tables_modified.csv.txt] matches   left join [sbender@washington.edu].[Fracy1_ecpathwayinfo_FilteredModels1_modified.tab.txt] ec   on protein_id = proteinId","id":"5381"},{"owner":"sbender@washington.edu","date":"10\/26\/2011 11:18:25 PM","query":"SELECT * FROM [sbender@washington.edu].[SignN.txt] matches   left join [sbender@washington.edu].[Fracy1_ecpathwayinfo_FilteredModels1_modified.tab.txt] ec   on ID = proteinId","id":"5666"},{"owner":"sbender@washington.edu","date":"10\/26\/2011 11:50:50 PM","query":"SELECT * FROM [sbender@washington.edu].[SignSi.txt] Si   left join [sbender@washington.edu].[SignN_merge_EC] ec   on ID = IDN","id":"5694"},{"owner":"sbender@washington.edu","date":"10\/26\/2011 11:53:20 PM","query":"SELECT * FROM [sbender@washington.edu].[SignSi.txt] matches   left join [sbender@washington.edu].[SignN_merge_EC] ec   on ID = IDN","id":"5695"},{"owner":"sbender@washington.edu","date":"10\/27\/2011 12:04:33 AM","query":"SELECT * FROM [sbender@washington.edu].[Fracy_SiN_merge] one   left join [sbender@washington.edu].[Fracy1_koginfo_FilteredModels1] kog   on ID = transcriptId","id":"5700"},{"owner":"sbender@washington.edu","date":"10\/27\/2011 12:24:57 AM","query":"SELECT ID, logConcN, logFCN, ecNum, definition, kogdefline, kogGroup   FROM [sbender@washington.edu].[Fracy1_SiN_merge_ecANDkog]   where IDN = 135771","id":"5710"},{"owner":"sbender@washington.edu","date":"10\/27\/2011 12:43:21 AM","query":"SELECT ID logConcN, logFCN, LRstatisticN, pvalueN, ecNum, definition, pathway, kogdefline, kogClass    FROM [sbender@washington.edu].[Fracy1_SiN_merge_ecANDkog] where pvalueN <= .05","id":"5720"},{"owner":"sbender@washington.edu","date":"10\/27\/2011 12:48:12 AM","query":"SELECT ID logConc, logFC, Lrstatistic, pvalue, ecNum, definition, pathway, kogdefline, kogClass    FROM [sbender@washington.edu].[Fracy1_SiN_merge_ecANDkog] where pvalueN <= .05","id":"5721"},{"owner":"sbender@washington.edu","date":"10\/27\/2011 12:49:13 AM","query":"SELECT ID logConc, logFC, LRstatistic, pvalue, ecNum, definition, pathway, kogdefline, kogClass    FROM [sbender@washington.edu].[Fracy1_SiN_merge_ecANDkog] where pvalue <= .05","id":"5722"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 1:48:42 AM","query":"select * from [sbender@washington.edu].[table_thaps.txt]","id":"254019"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:02:45 AM","query":"SELECT * FROM [sbender@washington.edu].[table_Thaps.txt]   SELECT proteinId   FROM table_Thaps.txt   WHERE fdr.N < 0.05   AND spc.shr.ct = 3","id":"9455"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:04:32 AM","query":"SELECT * FROM [sbender@washington.edu].[table_Thaps.txt]   SELECT proteinId   FROM table_Thaps.txt   WHERE fdr.N < 0.005   AND spc.shr.ct = 3","id":"9456"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:05:38 AM","query":"SELECT * FROM [sbender@washington.edu].[table_Thaps.txt]   SELECT proteinId   FROM table_Thaps.txt   WHERE spc.shr.ct = 3","id":"9457"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:06:35 AM","query":"SELECT * FROM [sbender@washington.edu].[table_Thaps.txt]   SELECT proteinId   FROM Thaps.txt   WHERE spc.shr.ct = 3","id":"9458"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:06:52 AM","query":"SELECT * FROM [sbender@washington.edu].[table_Thaps.txt]   SELECT proteinId   FROM Thaps.txt   WHERE spc.shr.ct = 3   AND fdr.N < 0.05","id":"9459"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:26:34 AM","query":"SELECT proteinId FROM [sbender@washington.edu].[Thaps.txt] assoc   WHERE assoc.\"spc.shr.ct\"=3","id":"9479"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:27:23 AM","query":"SELECT proteinId FROM [sbender@washington.edu].[Thaps.txt] assoc   WHERE assoc.\"spc.shr.ct\"=3 AND assoc.\"fdr.N\"<0.05","id":"9480"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:28:56 AM","query":"select proteinid from [sbender@washington.edu].[thaps.txt] assoc   where assoc.\"spc.shr.ct\"=3 and assoc.\"fdr.n\"<0.05","id":"254059"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:58:53 AM","query":"SELECT [emp].\"proteinID\", [emp].\"logFC.Si\", [emp].\"logConc.Si\", [emp].\"p.value.Si\", [emp].\"fdr.Si\",  [emp].\"logFC.N\", [emp].\"logConc.N\", [emp].\"p.value.N\", [emp].\"fdr.N\", [emp].\"seqId.t\", [emp].\"EC.any.kegg\",  [emp].\"name.any.kegg\", [emp].\"def.any.kegg\", [emp].\"KO.any.kegg\", [emp].\"def.all.kegg\", [emp].\"KO.all.kegg\",  [emp].\"EC.all.kegg\", [emp].\"ko.m.any.kegg\", [emp].\"module_id.m.any.kegg\", [emp].\"module_desc.m.any.kegg\", [emp].\"e_value.m.any.kegg\",  [emp].\"ko.p.any.kegg\", [emp].\"path_id.p.any.kegg\", [emp].\"path_desc.p.any.kegg\", [emp].\"e_value.p.any.kegg\",  [emp].\"hits.nr\", [emp].\"ecNum.kegg.jgi\", [emp].\"definition.kegg.jgi\", [emp].\"pathway.kegg.jgi\", [emp].\"spc.shr.ct\",  [emp].\"cluster\" FROM [sbender@washington.edu].[Thaps.txt] [emp] RIGHT JOIN [sbender@washington.edu].[ThapsSigand3Shared.txt] [assoc] ON [emp].\"proteinID\" = [assoc].\"proteinID\"","id":"9489"},{"owner":"sbender@washington.edu","date":"7\/26\/2012 2:59:38 AM","query":"select [emp].\"proteinid\", [emp].\"logfc.si\", [emp].\"logconc.si\", [emp].\"p.value.si\", [emp].\"fdr.si\",  [emp].\"logfc.n\", [emp].\"logconc.n\", [emp].\"p.value.n\", [emp].\"fdr.n\", [emp].\"seqid.t\", [emp].\"ec.any.kegg\",  [emp].\"name.any.kegg\", [emp].\"def.any.kegg\", [emp].\"ko.any.kegg\", [emp].\"def.all.kegg\", [emp].\"ko.all.kegg\",  [emp].\"ec.all.kegg\", [emp].\"ko.m.any.kegg\", [emp].\"module_id.m.any.kegg\", [emp].\"module_desc.m.any.kegg\", [emp].\"e_value.m.any.kegg\",  [emp].\"ko.p.any.kegg\", [emp].\"path_id.p.any.kegg\", [emp].\"path_desc.p.any.kegg\", [emp].\"e_value.p.any.kegg\",  [emp].\"hits.nr\", [emp].\"ecnum.kegg.jgi\", [emp].\"definition.kegg.jgi\", [emp].\"pathway.kegg.jgi\", [emp].\"spc.shr.ct\",  [emp].\"cluster\" from [sbender@washington.edu].[thaps.txt] [emp] right join [sbender@washington.edu].[thapssigand3shared.txt] [assoc] on [emp].\"proteinid\" = [assoc].\"proteinid\"","id":"254112"}];
