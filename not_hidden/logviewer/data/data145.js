data = [{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:10:24 PM","query":"select * from [latcron@gmail.com].[table_pathwayannotationpdb.csv]","id":"254615"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:16:09 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6355"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:21:13 PM","query":"SELECT    'INSERT INTO EcNumberPdbIdGenus (EcNumber,PDBID,Genus,Species,GenusTaxID,SpeciesTaxID) VALUES (''' + ec_number + ''',''' +  ''')'   AS Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6359"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:21:27 PM","query":"SELECT    'INSERT INTO EcNumberPdbIdGenus (EcNumber,PDBID,Genus,Species,GenusTaxID,SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' + ''')'   AS Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6360"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:21:44 PM","query":"SELECT    'INSERT INTO EcNumberPdbIdGenus (EcNumber,PDBID,Genus,Species,GenusTaxID,SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' +  genus_name + ''',''' + ''')'   AS Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6361"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:22:10 PM","query":"SELECT    'INSERT INTO EcNumberPdbIdGenus (EcNumber,PDBID,Genus,Species,GenusTaxID,SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' +  genus_name + ''',''' + species_name + ''',''' +  ''')'   AS Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6362"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:23:08 PM","query":"SELECT    'INSERT INTO EcNumberPdbIdGenus (EcNumber,PDBID,Genus,Species,GenusTaxID,SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' +  genus_name + ''',''' + species_name + ''',''' +   ''')'   AS Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6365"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:23:50 PM","query":"SELECT Distinct(genus_taxid) FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6366"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:25:00 PM","query":"SELECT   *   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6367"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:30:36 PM","query":"SELECT    'INSERT INTO EcNumberPDBIDGenus (EcNumber, PDBID, Genus, Species, GenusTaxID, SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' + genus_name + ''',''' + ''',''' + species_name + ''',''' + REPLACE(genus_taxid,'','-3') + ''',''' + REPLACE(species_taxid,'','-3') + ''')'   as Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6374"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:35:27 PM","query":"SELECT * FROM    [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]   WHERE PDBID LIKE '%-%'","id":"6377"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:43:05 PM","query":"select * from [latcron@gmail.com].[table_pathwayannotationpdb2.txt]","id":"254709"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:43:37 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt] WHERE PDBID Like '%-%'","id":"6378"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:43:52 PM","query":"SELECT    'INSERT INTO EcNumberPDBIDGenus (EcNumber, PDBID, Genus, Species, GenusTaxID, SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' + genus_name + ''',''' + species_name + ''',''' + REPLACE(genus_taxid,'','-3') + ''',''' + REPLACE(species_taxid,'','-3') + ''')'   as Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB.csv]","id":"6379"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:45:38 PM","query":"SELECT    'INSERT INTO EcNumberPDBIDGenus (EcNumber, PDBID, Genus, Species, GenusTaxID, SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' + genus_name + ''',''' + species_name + ''',''' + REPLACE(genus_taxid,'','-3') + ''',''' + REPLACE(species_taxid,'','-3') + ''')'   as Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]","id":"6382"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:50:44 PM","query":"SELECT    'INSERT INTO EcNumberPDBIDGenus (EcNumber, PDBID, Genus, Species, GenusTaxID, SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' + REPLACE(genus_name,'''','') + ''',''' + REPLACE(species_name,'''','') + ''',''' + REPLACE(genus_taxid,'','-3') + ''',''' + REPLACE(species_taxid,'','-3') + ''')'   as Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]","id":"6383"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 6:59:58 PM","query":"select    'insert into ecnumberpdbidgenus (ecnumber, pdbid, genus, species, genustaxid, speciestaxid) values (''' + ec_number + ''',''' + pdbid + ''',''' + isnull(replace(genus_name,'''',''),'') + ''',''' + isnull(replace(species_name,'''',''),'') + ''',''' + isnull(replace(genus_taxid,'','-3'),'-4') + ''',''' + isnull(replace(species_taxid,'','-3'),-4) + ''')'   as statement   from [latcron@gmail.com].[table_pathwayannotationpdb2.txt]","id":"254755"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:00:36 PM","query":"SELECT Count(*) FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]","id":"6384"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:08:46 PM","query":"select * from [latcron@gmail.com].[table_cttdbpdbtable.csv]","id":"254840"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:13:53 PM","query":"SELECT Ec_Number as EcNumber,PDBID FROM     [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]      EXCEPT    SELECT EcNumber,PdbId FROM   [latcron@gmail.com].[table_CttdbPdbTable.csv]","id":"6387"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:31:07 PM","query":"SELECT Ec_number, pdbId FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]","id":"6390"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:31:35 PM","query":"SELECT Ec_number, pdbId FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]      GROUP BY Ec_Number,pdbId","id":"6391"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:31:53 PM","query":"SELECT Ec_number, pdbId, Count(*) FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]      GROUP BY Ec_Number,pdbId","id":"6392"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 7:32:21 PM","query":"SELECT Ec_number, pdbId, Count(*) as CountOfThings FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]      GROUP BY Ec_Number,pdbId      ORDER BY CountOfThings DESC","id":"6393"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:21:34 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE genus_name = '' OR genus_name is null","id":"6395"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:22:19 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)      OR (species_name = '' OR species_name is null)","id":"6396"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:22:37 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)      OR (species_name = '' OR species_name is null)      OR (pdbid = '' OR pdbid is null)","id":"6397"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:27:38 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)      OR (species_name = '' OR species_name is null)      OR (pdbid = '' OR pdbid is null)      OR (ec_number = '' OR ec_number is null)","id":"6398"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:27:59 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)      OR (species_name = '' OR species_name is null)      OR (pdbid = '' OR pdbid is null)      OR (ec_number = '' OR ec_number is null)   OR (genus_taxid = '' OR genus_taxid is null)","id":"6399"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:28:23 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)      OR (species_name = '' OR species_name is null)      OR (pdbid = '' OR pdbid is null)      OR (ec_number = '' OR ec_number is null)   OR (genus_taxid = '' OR genus_taxid is null)   OR (species_taxId = '' OR species_taxid is null)","id":"6400"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:30:42 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)   OR (species_name = '' OR species_name is null)   OR (pdbid = '' OR pdbid is null)   OR (ec_number = '' OR ec_number is null)   OR (genus_taxid = '' OR genus_taxid is null)   OR (species_taxId = '' OR species_taxid is null)   OR (genus_taxId = -1)","id":"6401"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:31:50 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)   OR (species_name = '' OR species_name is null)   OR (pdbid = '' OR pdbid is null)   OR (ec_number = '' OR ec_number is null)   OR (genus_taxid = '' OR genus_taxid is null)   OR (species_taxId = '' OR species_taxid is null)   OR (genus_taxId = -1) OR (species_taxid = -1)","id":"6402"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:32:10 PM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]    WHERE (genus_name = '' OR genus_name is null)   OR (species_name = '' OR species_name is null)   OR (pdbid = '' OR pdbid is null)   OR (ec_number = '' OR ec_number is null)   OR (genus_taxid = '' OR genus_taxid is null)   OR (species_taxId = '' OR species_taxid is null)","id":"6403"},{"owner":"latcron@gmail.com","date":"11\/18\/2011 8:38:20 PM","query":"SELECT    'INSERT INTO EcNumberPDBIDGenus (EcNumber, PDBID, Genus, Species, GenusTaxID, SpeciesTaxID) VALUES (''' + ec_number + ''',''' + pdbid + ''',''' + IsNull(REPLACE(genus_name,'''',''),'') + ''',''' + IsNull(REPLACE(species_name,'''',''),'') + ''',''' + IsNull(REPLACE(genus_taxid,'','-3'),'-4') + ''',''' + IsNull(REPLACE(species_taxid,'','-3'),-4) + ''')'   as Statement   FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]","id":"6404"},{"owner":"latcron@gmail.com","date":"11\/23\/2011 6:43:31 PM","query":"select * from [latcron@gmail.com].[table_copy of 96dtoa.csv]","id":"250008"},{"owner":"latcron@gmail.com","date":"11\/23\/2011 6:43:54 PM","query":"SELECT * FROM [latcron@gmail.com].[table_Copy of 96DtoA.csv]","id":"6407"},{"owner":"latcron@gmail.com","date":"11\/23\/2011 6:45:23 PM","query":"SELECT     'UPDATE Construct SET NTSeq = ''' + NtSeq + ''', ExpressedProteinSeq = ''' + ExpressedProteinSeq + ''' WHERE SSGCIDID = ''' + SSGCIDID + ''''      FROM [latcron@gmail.com].[table_Copy of 96DtoA.csv]","id":"6408"},{"owner":"latcron@gmail.com","date":"11\/29\/2011 12:18:12 AM","query":"select * from [latcron@gmail.com].[table_htscreen.csv]","id":"255546"},{"owner":"latcron@gmail.com","date":"11\/29\/2011 12:22:17 AM","query":"SELECT      *      FROM [latcron@gmail.com].[table_HTScreen.csv]","id":"6618"},{"owner":"latcron@gmail.com","date":"11\/29\/2011 12:27:07 AM","query":"SELECT    'UPDATE ExpressionGlycerol SET XFormResultID= ' + CAST(ExpressionColonies AS varchar) + ',ObservedMolecularWeight=' + CAST(HtScreenObsMolWt as varchar) + ',ExpectedMolecularWeight=' + CAST(MolWtUncleaved AS varchar) + ',TotalExpressionLevelID=' + CAST(TotalExpressionLevel as varchar) + ',SolubleExpressionLevelID=' + CAST(SolubleExpressionLevel AS varchar) + ' WHERE ProductID = ' + CAST(ProductID as varchar) as sttmnt      FROM [latcron@gmail.com].[table_HTScreen.csv]","id":"6619"},{"owner":"latcron@gmail.com","date":"11\/30\/2011 5:59:32 PM","query":"SELECT SSGCIDID FROM [latcron@gmail.com].[table_Copy of 96DtoA.csv]","id":"6704"},{"owner":"latcron@gmail.com","date":"12\/13\/2011 12:27:06 AM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt]","id":"6926"},{"owner":"latcron@gmail.com","date":"12\/13\/2011 12:27:26 AM","query":"SELECT * FROM [latcron@gmail.com].[table_PathwayAnnotationPDB2.txt] WHERE pdbid = '3AUA'","id":"6927"},{"owner":"latcron@gmail.com","date":"12\/15\/2011 5:27:21 PM","query":"SELECT * FROM [latcron@gmail.com].[table_ProteinSsgcidIds.csv]    WHERE ProteinSsgcidId Not In (SELECT RTrim(LTrim([Protein Code-1])) FROM     [latcron@gmail.com].[table_XstalSsgcidIds.csv])","id":"6939"},{"owner":"latcron@gmail.com","date":"12\/15\/2011 5:29:04 PM","query":"SELECT * FROM  [latcron@gmail.com].[table_XstalSsgcidIds.csv]    WHERE  RTrim(LTrim([Protein Code-1])) Not In (SELECT ProteinSsgcidId FROM          [latcron@gmail.com].[table_ProteinSsgcidIds.csv])","id":"6941"},{"owner":"latcron@gmail.com","date":"12\/6\/2011 7:50:12 PM","query":"select * from [latcron@gmail.com].[table_batch14cr28features.csv]","id":"253616"},{"owner":"latcron@gmail.com","date":"12\/6\/2011 7:51:17 PM","query":"SELECT * FROM [latcron@gmail.com].[table_EcNumberFeatureSsgcidId.csv] EcFeature     LEFT JOIN [latcron@gmail.com].[table_Batch14Cr28Features.csv] Batch ON Batch.SsgcidId = EcFeature.Target","id":"6779"},{"owner":"latcron@gmail.com","date":"12\/6\/2011 7:53:57 PM","query":"select * from [latcron@gmail.com].[table_ecnumberfeaturessgcidid.csv]","id":"253709"},{"owner":"latcron@gmail.com","date":"12\/6\/2011 7:54:11 PM","query":"SELECT * FROM [latcron@gmail.com].[table_EcNumberFeatureSsgcidId.csv]","id":"6780"},{"owner":"latcron@gmail.com","date":"12\/6\/2011 7:54:35 PM","query":"SELECT * FROM [latcron@gmail.com].[table_EcNumberFeatureSsgcidId.csv] A      LEFT JOIN [latcron@gmail.com].[table_Batch14Cr28Features.csv] b ON A.Target = b.SsgcidId","id":"6781"},{"owner":"latcron@gmail.com","date":"12\/6\/2011 7:57:58 PM","query":"SELECT   'INSERT INTO EcNumberFeature (FeatureID, EcNumber) VALUES (''' + CAST(FeatureID as varchar) + ''',''' + LTRIM(RTRIM([EC Number])) + ''')' as CommState             FROM [latcron@gmail.com].[table_EcNumberFeatureSsgcidId.csv] A      LEFT JOIN [latcron@gmail.com].[table_Batch14Cr28Features.csv] b ON A.Target = b.SsgcidId","id":"6787"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 10:49:17 PM","query":"select * from [latcron@gmail.com].[table_proteinssgcidids.csv]","id":"251523"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 10:51:33 PM","query":"select * from [latcron@gmail.com].[table_xstalssgcidids.csv]","id":"251625"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 10:52:06 PM","query":"SELECT * FROM [latcron@gmail.com].[table_ProteinSsgcidIds.csv]","id":"6813"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 10:52:49 PM","query":"SELECT * FROM [latcron@gmail.com].[table_ProteinSsgcidIds.csv]      WHERE ProteinSSGCIDID NOT IN (SELECT [Protein Code-1] FROM [latcron@gmail.com].[table_XstalSsgcidIds.csv])","id":"6814"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 10:53:44 PM","query":"SELECT * FROM [latcron@gmail.com].[table_ProteinSsgcidIds.csv]      WHERE ProteinSSGCIDID IN (SELECT [Protein Code-1] FROM [latcron@gmail.com].[table_XstalSsgcidIds.csv])","id":"6815"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 10:54:17 PM","query":"SELECT * FROM [latcron@gmail.com].[table_ProteinSsgcidIds.csv]      WHERE ProteinSSGCIDID NOT IN (SELECT LTrim(RTrim([Protein Code-1])) FROM [latcron@gmail.com].[table_XstalSsgcidIds.csv])","id":"6816"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 9:47:47 PM","query":"select * from [latcron@gmail.com].[table_recreated.csv]","id":"251411"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 9:48:35 PM","query":"SELECT * FROM [latcron@gmail.com].[table_Recreated.csv]","id":"6811"},{"owner":"latcron@gmail.com","date":"12\/8\/2011 9:53:00 PM","query":"SELECT 'UPDATE Construct SET NTSeq=''' + [Value full_nt_seq] + ''', ExpressedProteinSeq=''' + [UW_aa_seq_uncleaved_expressed] + ''' WHERE SSGCIDID = ''' + [bad_ones_from_LC_email] + '''' as commstate       FROM [latcron@gmail.com].[table_Recreated.csv]","id":"6812"},{"owner":"latcron@gmail.com","date":"2\/13\/2012 5:46:20 PM","query":"select * from [latcron@gmail.com].[table_xstalproteins.csv]","id":"253994"},{"owner":"latcron@gmail.com","date":"2\/13\/2012 5:46:43 PM","query":"select * from [latcron@gmail.com].[table_cttdbproteins.csv]","id":"254085"},{"owner":"latcron@gmail.com","date":"2\/13\/2012 5:47:31 PM","query":"SELECT * FROM [latcron@gmail.com].[table_CttdbProteins.csv]   WHERE   CTTdbProteins NOT IN (SELECT XstalProtein FROM [latcron@gmail.com].[table_XstalProteins.csv])","id":"7748"},{"owner":"latcron@gmail.com","date":"5\/7\/2012 5:56:37 PM","query":"select * from [latcron@gmail.com].[table_targetstatustargets.csv]","id":"255185"},{"owner":"latcron@gmail.com","date":"5\/7\/2012 5:57:39 PM","query":"SELECT Column1 FROM [latcron@gmail.com].[TargetTrackFeatures.csv]","id":"8098"},{"owner":"latcron@gmail.com","date":"5\/7\/2012 5:58:04 PM","query":"SELECT * FROM [latcron@gmail.com].[table_TargetStatusTargets.csv]   WHERE   Target not in       (SELECT Column1 FROM [latcron@gmail.com].[TargetTrackFeatures.csv])","id":"8099"},{"owner":"latcron@gmail.com","date":"5\/7\/2012 5:58:16 PM","query":"SELECT * FROM [latcron@gmail.com].[table_TargetStatusTargets.csv]   WHERE   Target not in       (SELECT Column1 FROM [latcron@gmail.com].[TargetTrackFeatures.csv])","id":"8100"},{"owner":"latcron@gmail.com","date":"5\/7\/2012 5:58:56 PM","query":"select * from [latcron@gmail.com].[table_targetstatustargets.csv]   where   target not in       (select column1 from [latcron@gmail.com].[targettrackfeatures.csv])","id":"255225"},{"owner":"latcron@gmail.com","date":"5\/9\/2012 9:00:49 PM","query":"select * from [latcron@gmail.com].[table_targettrackfeatures.csv]","id":"255466"},{"owner":"latcron@gmail.com","date":"5\/9\/2012 9:02:37 PM","query":"SELECT Target FROM [latcron@gmail.com].[table_TargetStatusTargets.csv]   WHERE   Target not in       (SELECT SsgcidId FROM [latcron@gmail.com].[TargetTrackFeatures.csv])","id":"8139"},{"owner":"latcron@gmail.com","date":"5\/9\/2012 9:06:13 PM","query":"SELECT Count(*) FROM [latcron@gmail.com].[TargetTrackFeatures.csv]","id":"8140"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 11:08:35 PM","query":"select * from [latcron@gmail.com].[table_constructswithexpressiondate.csv]","id":"250327"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 11:10:51 PM","query":"SELECT * FROM [latcron@gmail.com].[table_GlycerolsWithNoBeirId.csv] as Expressions      LEFT JOIN [latcron@gmail.com].[table_ConstructsWithExpressionDate.csv] as ExpDates      ON Expressions.SSGCIDID = ExpDates.SSGCIDID      WHERE Glycerol IN (SELECT Glycerol FROM [latcron@gmail.com].[table_AllPassedAndInconclusiveSV.csv])","id":"4349"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:35:25 PM","query":"select * from [latcron@gmail.com].[table_allpassedandinconclusivesv.csv]","id":"256281"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:37:31 PM","query":"SELECT * FROM [latcron@gmail.com].[table_GlycerolsWithNoBeirId.csv] as Expressions   INNER JOIN [latcron@gmail.com].[table_AllPassedAndInconclusiveSV.csv] as SV ON SV.Glycerol = Expressions.Glycerol","id":"4341"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:37:39 PM","query":"SELECT * FROM [latcron@gmail.com].[table_GlycerolsWithNoBeirId.csv] as Expressions   LEFT JOIN [latcron@gmail.com].[table_AllPassedAndInconclusiveSV.csv] as SV ON SV.Glycerol = Expressions.Glycerol","id":"4342"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:43:41 PM","query":"select * from [latcron@gmail.com].[table_glycerolswithnobeirid.csv]","id":"250031"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:44:44 PM","query":"SELECT * FROM [latcron@gmail.com].[table_GlycerolsWithNoBeirId.csv] as Expressions      LEFT JOIN [latcron@gmail.com].[table_AllPassedAndInconclusiveSV.csv] as SV ON Expressions.Glycerol = SV.Glycerol","id":"4344"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:49:39 PM","query":"SELECT * FROM [latcron@gmail.com].[table_GlycerolsWithNoBeirId.csv] as Expressions      WHERE Glycerol IN (SELECT Glycerol FROM [latcron@gmail.com].[table_AllPassedAndInconclusiveSV.csv])","id":"4345"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:50:48 PM","query":"select * from [latcron@gmail.com].[table_glycerolswithnobeirid.csv] as expressions      where glycerol in (select glycerol from [latcron@gmail.com].[table_allpassedandinconclusivesv.csv])      and ssgcidid not in (select ssgcidid from [latcron@gmail.com].[table_constructswithglyceroldeposited.csv])","id":"250081"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:54:37 PM","query":"select * from [latcron@gmail.com].[table_constructswithglyceroldeposited.csv]","id":"250185"},{"owner":"latcron@gmail.com","date":"9\/12\/2011 9:56:06 PM","query":"SELECT * FROM [latcron@gmail.com].[table_GlycerolsWithNoBeirId.csv] as Expressions      WHERE Glycerol IN (SELECT Glycerol FROM [latcron@gmail.com].[table_AllPassedAndInconclusiveSV.csv])      AND SSGCIDID NOT IN (SELECT SSGCIDID FROM [latcron@gmail.com].[table_ConstructsWithGlycerolDeposited.csv])","id":"4346"},{"owner":"latcron@gmail.com","date":"9\/13\/2011 11:40:14 PM","query":"select * from [latcron@gmail.com].[table_needsshippingdates.csv]","id":"250422"},{"owner":"latcron@gmail.com","date":"9\/14\/2011 4:51:55 PM","query":"SELECT *  FROM [latcron@gmail.com].[table_NeedsShippingDates.csv] AS P LEFT JOIN    [latcron@gmail.com].[ShippingDatesFromCTTdb.csv]AS D1   ON D1.[ProteinSSGCIDID] = P.[Protein Code-1]","id":"4356"},{"owner":"latcron@gmail.com","date":"9\/14\/2011 4:52:51 PM","query":"SELECT P.[Protein Code-1], P.[Initial trials set up],D1.ShippedDate FROM [latcron@gmail.com].[table_NeedsShippingDates.csv] AS P LEFT JOIN    [latcron@gmail.com].[ShippingDatesFromCTTdb.csv]AS D1   ON D1.[ProteinSSGCIDID] = P.[Protein Code-1]","id":"4358"},{"owner":"latcron@gmail.com","date":"9\/14\/2011 4:53:13 PM","query":"select p.[protein code-1], p.[initial trials set up],d1.shippeddate from [latcron@gmail.com].[table_needsshippingdates.csv] as p left join    [latcron@gmail.com].[shippingdatesfromcttdb.csv]as d1   on d1.[proteinssgcidid] = p.[protein code-1]","id":"250676"},{"owner":"latcron@gmail.com","date":"9\/14\/2011 4:54:06 PM","query":"SELECT P.[Protein Code-1], P.[Initial trials set up],D1.ShippedDate FROM [latcron@gmail.com].[table_NeedsShippingDates.csv] AS P LEFT JOIN    [latcron@gmail.com].[ShippingDatesFromCTTdb.csv]AS D1   ON D1.[ProteinSSGCIDID] = P.[Protein Code-1]      ORDER BY ShippedDate DESC","id":"4359"},{"owner":"latcron@gmail.com","date":"9\/14\/2011 5:29:42 PM","query":"select * from [latcron@gmail.com].[table_shippingdatesfromcttdb.csv]","id":"250769"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:15:18 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE OUTCOME = 'No crystals'","id":"4306"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:15:57 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE OUTCOME Like '%No crystals%'","id":"4307"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:16:34 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE OUTCOME Like '%No crystals%' AND [Crystals?] LIKE 'FALSE'","id":"4309"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:16:41 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE OUTCOME Like '%No crystals%' AND [Crystals?] LIKE 'TRUE'","id":"4310"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:18:36 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE [Crystals?] LIKE 'TRUE' AND [Crystals Date] LIKE ''","id":"4312"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:20:27 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE [Diffraction?] = 'TRUE' AND [Diffraction Date] = ''","id":"4314"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:24:29 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE [Diffraction?] = 'TRUE' AND [Crystals?] = 'FALSE'","id":"4315"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:26:03 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv]","id":"4316"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:26:27 PM","query":"SELECT * FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals'","id":"4317"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:35:44 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals'","id":"4319"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:43:42 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals' AND [Date Arrived] = ''","id":"4320"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:44:07 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals' AND ([Date Arrived] = '' AND [Due Date] = '')","id":"4321"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:45:29 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals' AND ([Date Arrived] = '' AND [Due Date] = '') AND [Crystals?] <> ''","id":"4322"},{"owner":"latcron@gmail.com","date":"9\/7\/2011 10:45:39 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals' AND ([Date Arrived] = '' AND [Due Date] = '') AND [Crystals?] <> 'TRUE'","id":"4323"},{"owner":"latcron@gmail.com","date":"9\/8\/2011 5:01:29 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE Outcome = 'No crystals' AND [Crystals?] = 'TRUE'","id":"4324"},{"owner":"latcron@gmail.com","date":"9\/8\/2011 5:34:11 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE [Crystals Date] = ''    AND [Due Date] = ''   AND [Date Arrived] = ''   AND [Diffraction Date] = ''   AND [Data Set Date] = ''","id":"4331"},{"owner":"latcron@gmail.com","date":"9\/8\/2011 5:46:02 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE    [Diffraction Date] = ''","id":"4333"},{"owner":"latcron@gmail.com","date":"9\/8\/2011 5:47:01 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE    [Diffraction Date] = ''   And [Crystals?] = 'TRUE'","id":"4334"},{"owner":"latcron@gmail.com","date":"9\/8\/2011 5:47:36 PM","query":"SELECT [Protein Code-1],  [STOP WORK],  [Protein Code],  [Crystal Hit],  [Outcome],  [Crystals?],  [Crystals Date],  [Batch],  [microcap],  [Protein Concentration],  [Status],   [Due Date],   [Date Arrived],   [Diffraction?],   [Diffraction Date],   [Data Set?],   [Data Set Date],   [Structure Solved?],   [PDB],   [PepcDB Code]         FROM [latcron@gmail.com].[table_SSGCID XTL tracking 082411AR.csv] WHERE    [Diffraction Date] = ''   And [Diffraction?] = 'TRUE'","id":"4335"}];
